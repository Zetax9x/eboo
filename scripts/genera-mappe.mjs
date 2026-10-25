// Writes the missing maps with a local/remote Ollama model, one at a time, verifying each one.
//
// For every id in docs/MAPPE-DA-SCRIVERE.md that has no file yet:
//   1. sends the model the writing guide, the schema, an example of the expected kind and the chapter context
//   2. saves the returned TypeScript to src/content/maps/<id>.ts
//   3. runs the typecheck and the export (overflow check); on errors, sends them back for a fix (max MAX_TRIES)
//   4. if it still fails, removes the file (keeps the attempt in out/rifiutate/) so the book never breaks
//
// Usage:
//   OLLAMA_MODEL=<model> node scripts/genera-mappe.mjs                  all missing maps
//   OLLAMA_MODEL=<model> node scripts/genera-mappe.mjs --capitolo ecg   one chapter
//   OLLAMA_MODEL=<model> node scripts/genera-mappe.mjs --id bpco        one map
//   add --limite 5 to stop after 5 maps, --paralleli 3 to write 3 maps at a time
//   (the server needs OLLAMA_NUM_PARALLEL >= that number)
// Env: OLLAMA_HOST (default http://localhost:11434), OLLAMA_CTX (default 32768),
//      OLLAMA_THINK=true to let reasoning models think before answering (slower; off by default)

import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const run = promisify(execFile)
const ROOT = fileURLToPath(new URL('..', import.meta.url))
const MAPS_DIR = path.join(ROOT, 'src/content/maps')
const REJECTED_DIR = path.join(ROOT, 'out/rifiutate')
const HOST = process.env.OLLAMA_HOST ?? 'http://localhost:11434'
const MODEL = process.env.OLLAMA_MODEL
const CONTEXT_TOKENS = Number(process.env.OLLAMA_CTX ?? 32768)
const THINK = process.env.OLLAMA_THINK === 'true'
const MAX_TRIES = 4
const MAX_FILL_RETRIES = 2 // a half-empty page is retried this many times, then accepted
const REQUEST_TIMEOUT_MS = 30 * 60 * 1000

// Most likely page kind for each chapter, with a written example of that kind.
const CHAPTER_DEFAULTS = {
  fondamenti: { kind: 'concept', example: 'il-processo-di-nursing' },
  anatomia: { kind: 'overview', example: 'apparato-cardiovascolare-panoramica' },
  patologie: { kind: 'disease', example: 'diabete-mellito' },
  farmacologia: { kind: 'table', example: 'pediatria-parametri-vitali-per-eta' },
  procedure: { kind: 'procedure', example: 'catetere-venoso-periferico-cvp' },
  laboratorio: { kind: 'lab o table', example: 'elettroliti-valori-e-alterazioni' },
  ecg: { kind: 'rhythm (per le aritmie) o concept', example: 'fibrillazione-atriale-il-tracciato' },
  emergenze: { kind: 'algorithm (per i percorsi) o concept/table', example: 'bls-d-adulto' },
  specialistica: { kind: 'concept o table', example: 'il-processo-di-nursing' },
  concorsi: { kind: 'concept o table', example: 'il-processo-di-nursing' },
}

function parseArgs(argv) {
  const args = {}
  for (let i = 0; i < argv.length; i += 2) args[argv[i].replace(/^--/, '')] = argv[i + 1]
  return args
}

/** Parses docs/MAPPE-DA-SCRIVERE.md into [{ id, title, chapter }]. */
async function readTodoList() {
  const text = await readFile(path.join(ROOT, 'docs/MAPPE-DA-SCRIVERE.md'), 'utf8')
  const todo = []
  let chapter = null
  for (const line of text.split(/\r?\n/)) {
    const heading = line.match(/^## (\w+)/)
    if (heading) chapter = heading[1]
    const item = line.match(/^([a-z0-9-]+) \| (.+)$/)
    if (item && chapter) todo.push({ id: item[1], title: item[2].trim(), chapter })
  }
  return todo
}

const readMap = (id) => readFile(path.join(MAPS_DIR, `${id}.ts`), 'utf8')

async function buildPrompt(entry, todo) {
  const defaults = CHAPTER_DEFAULTS[entry.chapter]
  const [guide, types, example] = await Promise.all([
    readFile(path.join(ROOT, 'docs/GUIDA-MAPPE.md'), 'utf8'),
    readFile(path.join(ROOT, 'src/book/types.ts'), 'utf8'),
    readMap(defaults.example),
  ])
  const siblings = todo.filter((t) => t.chapter === entry.chapter && t.id !== entry.id).map((t) => t.title)

  const system = [
    'Sei l’autore delle mappe dell’ebook “Mappe Visive di Infermieristica”. Segui alla lettera la guida seguente.',
    'Rispondi SOLO con il contenuto completo del file TypeScript, in un unico blocco ```ts … ```, senza altro testo.',
    '',
    guide,
  ].join('\n')

  const user = [
    `Scrivi la mappa con id \`${entry.id}\` — titolo nell’indice: “${entry.title}” — capitolo \`${entry.chapter}\`.`,
    `Tipo consigliato per questo capitolo: ${defaults.kind} (puoi sceglierne un altro se l’argomento lo richiede).`,
    `Il file sarà salvato come src/content/maps/${entry.id}.ts e deve avere id: '${entry.id}' e chapter: '${entry.chapter}'.`,
    `Altre mappe dello stesso capitolo (evita doppioni): ${siblings.join('; ')}.`,
    'Le `sources` devono riguardare QUESTO argomento: non copiare quelle dell’esempio.',
    'Riempi bene la pagina: 5–7 item per riquadro, con valori concreti, esempi e dettagli utili all’esame.',
    '',
    'Schema autoritativo (src/book/types.ts):',
    '```ts',
    types,
    '```',
    '',
    `Esempio di mappa già scritta (src/content/maps/${defaults.example}.ts), da imitare per struttura, stile e densità:`,
    '```ts',
    example,
    '```',
  ].join('\n')

  return [
    { role: 'system', content: system },
    { role: 'user', content: user },
  ]
}

let sendThinkFlag = true // dropped automatically if the model rejects the `think` parameter

async function chat(messages) {
  const body = { model: MODEL, messages, stream: false, options: { num_ctx: CONTEXT_TOKENS, temperature: 0.3 } }
  const response = await fetch(`${HOST}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sendThinkFlag ? { ...body, think: THINK } : body),
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  })
  if (!response.ok) {
    const text = await response.text()
    if (sendThinkFlag && /think/i.test(text)) {
      sendThinkFlag = false
      return chat(messages)
    }
    throw new Error(`Ollama ha risposto ${response.status}: ${text}`)
  }
  const data = await response.json()
  return data.message?.content ?? ''
}

/** Extracts the TypeScript file from the model reply (drops <think> blocks and markdown fences). */
function extractCode(reply) {
  const withoutThinking = reply.replace(/<think>[\s\S]*?<\/think>/g, '')
  const fenced = withoutThinking.match(/```(?:ts|typescript)?\s*\n([\s\S]*?)```/)
  return (fenced ? fenced[1] : withoutThinking).trim() + '\n'
}

// Only npx needs a shell on Windows (it is a .cmd); node must run without one, or "C:\Program Files" breaks.
async function capture(command, args, { shell = false } = {}) {
  try {
    const { stdout, stderr } = await run(command, args, { cwd: ROOT, shell, maxBuffer: 20 * 1024 * 1024 })
    return { ok: true, output: stdout + stderr }
  } catch (err) {
    return { ok: false, output: (err.stdout ?? '') + (err.stderr ?? '') + (err.message ?? '') }
  }
}

/** Returns { problems, underfilled, fill }: problems block the page, underfilled only asks for more content. */
async function verify(entry, code) {
  const problems = await findProblems(entry, code)
  if (problems.length > 0) return { problems, underfilled: null, fill: null }
  return { problems: [], underfilled: lastFillWarning, fill: lastFill }
}

let lastFillWarning = null
let lastFill = null

async function findProblems(entry, code) {
  const problems = []
  if (!code.includes(`id: '${entry.id}'`)) problems.push(`Il campo id deve essere esattamente '${entry.id}'.`)
  if (!code.includes(`chapter: '${entry.chapter}'`)) problems.push(`Il campo chapter deve essere '${entry.chapter}'.`)
  if (!code.includes('export default map')) problems.push('Manca `export default map` alla fine del file.')
  if (problems.length > 0) return problems

  // Plain --noEmit (not -b): writes no build cache, so parallel workers don't collide.
  const tsc = await capture('npx', ['tsc', '--noEmit', '-p', 'tsconfig.json', '--pretty', 'false'], { shell: process.platform === 'win32' })
  const typeErrors = tsc.output.split(/\r?\n/).filter((line) => line.includes(`${entry.id}.ts`))
  if (typeErrors.length > 0) return [`Errori TypeScript:\n${typeErrors.join('\n')}`]

  const exported = await capture(process.execPath, ['scripts/export.mjs', entry.id])
  lastFillWarning = exported.output.match(/Poco piena: .*\((.*)\)/)?.[1] ?? null
  lastFill = exported.output.match(/riempimento (\d+%)/)?.[1] ?? null
  if (exported.output.includes('oltre la pagina')) {
    problems.push('Il contenuto SFORA la pagina: accorcia i testi (item più brevi, meno item) mantenendo le informazioni essenziali.')
  } else if (!exported.ok || !exported.output.includes('✓')) {
    problems.push(`L’esportazione è fallita:\n${exported.output.slice(-1500)}`)
  }
  return problems
}

async function writeOne(entry, todo) {
  const file = path.join(MAPS_DIR, `${entry.id}.ts`)
  const messages = await buildPrompt(entry, todo)

  let fillRetries = 0
  for (let attempt = 1; attempt <= MAX_TRIES; attempt++) {
    const reply = await chat(messages)
    const code = extractCode(reply)
    await writeFile(file, code)
    const { problems, underfilled, fill } = await verify(entry, code)
    if (problems.length === 0 && (!underfilled || fillRetries >= MAX_FILL_RETRIES)) {
      return { ok: true, attempts: attempt, underfilled, fill }
    }

    const feedback = problems.length > 0
      ? `Il file ha questi problemi:\n${problems.join('\n')}`
      : `La pagina è troppo vuota (${underfilled}): i riquadri hanno molto spazio libero. Aggiungi contenuto utile ` +
        '(più item per riquadro, valori, esempi, mnemoniche, una banda keyPoints), senza ripetere e senza riempitivi.'
    if (problems.length === 0) fillRetries++
    console.log(`   ${entry.id} tentativo ${attempt}: ${feedback.split('\n')[0].split(':')[0]}`)
    messages.push({ role: 'assistant', content: reply })
    messages.push({ role: 'user', content: `${feedback}\nCorreggi e rispondi di nuovo con il file COMPLETO.` })
  }

  await mkdir(REJECTED_DIR, { recursive: true })
  await writeFile(path.join(REJECTED_DIR, `${entry.id}.ts`), await readFile(file, 'utf8'))
  await rm(file)
  return { ok: false, attempts: MAX_TRIES }
}

async function main() {
  if (!MODEL) throw new Error('Imposta OLLAMA_MODEL, es.: OLLAMA_MODEL=gpt-oss:120b node scripts/genera-mappe.mjs')
  const args = parseArgs(process.argv.slice(2))
  const todo = await readTodoList()
  const limit = Number(args.limite ?? Infinity)
  const queue = todo
    .filter((t) => !existsSync(path.join(MAPS_DIR, `${t.id}.ts`)))
    .filter((t) => !args.capitolo || t.chapter === args.capitolo)
    .filter((t) => !args.id || t.id === args.id)
    .slice(0, limit)

  const workers = Math.max(1, Number(args.paralleli ?? 1))
  console.log(`Modello ${MODEL} su ${HOST} — ${queue.length} mappe da scrivere, ${workers} alla volta, ragionamento ${THINK ? 'attivo' : 'spento'}`)
  const failed = []
  let next = 0

  const processEntry = async (entry, position) => {
    const started = Date.now()
    console.log(`[${position}/${queue.length}] ${entry.id} — inizio`)
    try {
      const result = await writeOne(entry, todo)
      const seconds = Math.round((Date.now() - started) / 1000)
      if (result.ok) {
        const note = result.underfilled ? ' ⚠ ancora poco piena' : ''
        console.log(`   ✓ ${entry.id} fatta in ${result.attempts} tentativi (${seconds} s) — riempimento ${result.fill ?? '?'}${note}`)
      }
      else {
        failed.push(entry.id)
        console.log(`   ✗ ${entry.id} scartata dopo ${result.attempts} tentativi → out/rifiutate/${entry.id}.ts`)
      }
    } catch (err) {
      failed.push(entry.id)
      await rm(path.join(MAPS_DIR, `${entry.id}.ts`), { force: true })
      console.log(`   ✗ ${entry.id} errore: ${err.message}`)
    }
  }

  const worker = async () => {
    while (next < queue.length) {
      const index = next++
      await processEntry(queue[index], index + 1)
    }
  }
  await Promise.all(Array.from({ length: workers }, worker))
  console.log(`\nFatte ${queue.length - failed.length}/${queue.length}.${failed.length ? ` Da rifare: ${failed.join(', ')}` : ''}`)
}

main().catch((err) => {
  console.error(err.message)
  process.exitCode = 1
})
