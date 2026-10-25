// Generates the AI illustrations declared in the maps and saves them where the studio picks them up.
//
//   src/assets/illustrations/<illustration-id>.<png|jpg|webp>
//
// Every prompt gets the same style suffix, so the whole book looks consistent; images never contain text.
// Existing images are skipped, so the script can be stopped and restarted at any time.
//
// Usage:
//   npm run illustrazioni -- --prova                 count + list, no API calls, no key needed
//   npm run illustrazioni -- --mappa diabete-mellito only one map
//   npm run illustrazioni -- --limite 5              stop after 5 images
//   npm run illustrazioni -- --paralleli 3           3 requests at a time (default 2)
//
// Keys go in .env (never in code):   FAL_KEY=...   or   OPENAI_API_KEY=...
// Optional: IMAGE_PROVIDER=fal|openai, IMAGE_MODEL=<model id> (model ids change often: check the provider docs)

import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { createServer } from 'vite'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const OUT_DIR = path.join(ROOT, 'src/assets/illustrations')

const STYLE =
  'Clean educational medical illustration for a nursing textbook: soft 3D shading, smooth clean shapes, ' +
  'bright friendly colors (red, blue, teal, warm skin tones), plain white background, single centered subject, ' +
  'anatomically plausible, no text, no letters, no numbers, no labels, no watermark, no frame.'

const PROVIDERS = {
  fal: {
    keyEnv: 'FAL_KEY',
    defaultModel: 'fal-ai/nano-banana-2',
    async generate({ prompt, model, key }) {
      const response = await fetch(`https://fal.run/${model}`, {
        method: 'POST',
        headers: { Authorization: `Key ${key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, num_images: 1, image_size: 'square' }),
      })
      if (!response.ok) throw new Error(`fal.ai ${response.status}: ${(await response.text()).slice(0, 300)}`)
      const data = await response.json()
      const url = data.images?.[0]?.url
      if (!url) throw new Error('fal.ai non ha restituito immagini')
      const image = await fetch(url)
      return { bytes: Buffer.from(await image.arrayBuffer()), contentType: image.headers.get('content-type') ?? 'image/png' }
    },
  },
  openai: {
    keyEnv: 'OPENAI_API_KEY',
    defaultModel: 'gpt-image-1',
    async generate({ prompt, model, key }) {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ model, prompt, size: '1024x1024', n: 1, output_format: 'webp' }),
      })
      if (!response.ok) throw new Error(`OpenAI ${response.status}: ${(await response.text()).slice(0, 300)}`)
      const data = await response.json()
      const b64 = data.data?.[0]?.b64_json
      if (!b64) throw new Error('OpenAI non ha restituito immagini')
      return { bytes: Buffer.from(b64, 'base64'), contentType: 'image/webp' }
    },
  },
}

const EXTENSION = { 'image/png': 'png', 'image/jpeg': 'jpg', 'image/webp': 'webp' }

function parseArgs(argv) {
  const args = {}
  for (let i = 0; i < argv.length; i++) {
    const key = argv[i].replace(/^--/, '')
    const value = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true
    args[key] = value
  }
  return args
}

async function loadEnv() {
  try {
    const text = await readFile(path.join(ROOT, '.env'), 'utf8')
    for (const line of text.split(/\r?\n/)) {
      const match = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/)
      if (match && !process.env[match[1]]) process.env[match[1]] = match[2].replace(/^["']|["']$/g, '')
    }
  } catch {
    // No .env: keys may come from the environment.
  }
}

/** Reads every illustration from the real registry (same code the studio uses). */
async function collectIllustrations() {
  const server = await createServer({ root: ROOT, logLevel: 'error', server: { middlewareMode: true } })
  try {
    const { MAPS, illustrationsOf } = await server.ssrLoadModule('/src/book/registry.ts')
    return MAPS.flatMap((map) => illustrationsOf(map).map((ill) => ({ ...ill, mapId: map.id })))
  } finally {
    await server.close()
  }
}

async function existingIds() {
  try {
    return new Set((await readdir(OUT_DIR)).map((f) => f.replace(/\.[a-z]+$/, '')))
  } catch {
    return new Set()
  }
}

async function main() {
  await loadEnv()
  const args = parseArgs(process.argv.slice(2))
  const providerName = process.env.IMAGE_PROVIDER ?? (process.env.FAL_KEY ? 'fal' : process.env.OPENAI_API_KEY ? 'openai' : 'fal')
  const provider = PROVIDERS[providerName]
  if (!provider) throw new Error(`IMAGE_PROVIDER sconosciuto: ${providerName} (usa fal oppure openai)`)
  const model = process.env.IMAGE_MODEL ?? provider.defaultModel

  const all = await collectIllustrations()
  const done = await existingIds()
  const queue = all
    .filter((ill) => !done.has(ill.id))
    .filter((ill) => !args.mappa || ill.mapId === args.mappa)
    .slice(0, Number(args.limite ?? Infinity))

  console.log(`Illustrazioni: ${all.length} nel libro, ${done.size} già presenti, ${queue.length} da generare`)
  console.log(`Fornitore: ${providerName} · modello: ${model}`)

  if (args.prova) {
    for (const ill of queue.slice(0, 15)) console.log(`  · ${ill.id}  —  ${ill.prompt}`)
    if (queue.length > 15) console.log(`  … e altre ${queue.length - 15}`)
    console.log('\nModalità prova: nessuna chiamata eseguita. Controlla il prezzo per immagine sul sito del fornitore.')
    return
  }

  const key = process.env[provider.keyEnv]
  if (!key) throw new Error(`Manca ${provider.keyEnv}: aggiungilo al file .env nella cartella del progetto`)
  await mkdir(OUT_DIR, { recursive: true })

  const failed = []
  let next = 0
  const worker = async () => {
    while (next < queue.length) {
      const ill = queue[next++]
      try {
        const { bytes, contentType } = await provider.generate({ prompt: `${ill.prompt}. ${STYLE}`, model, key })
        const ext = EXTENSION[contentType.split(';')[0]] ?? 'png'
        await writeFile(path.join(OUT_DIR, `${ill.id}.${ext}`), bytes)
        console.log(`  ✓ ${ill.id}.${ext} (${Math.round(bytes.length / 1024)} KB)`)
      } catch (err) {
        failed.push(ill.id)
        console.log(`  ✗ ${ill.id}: ${err.message}`)
      }
    }
  }
  await Promise.all(Array.from({ length: Math.max(1, Number(args.paralleli ?? 2)) }, worker))
  console.log(`\nGenerate ${queue.length - failed.length}/${queue.length}.${failed.length ? ` Da rifare: ${failed.join(', ')}` : ''}`)
}

main().catch((err) => {
  console.error(err.message)
  process.exitCode = 1
})
