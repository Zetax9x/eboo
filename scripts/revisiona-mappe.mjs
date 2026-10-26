// Clinical review of the maps with an Ollama model: one request per map, verified, fully logged.
//
// For every map not yet reviewed:
//   1. sends the model the review rules, the schema and the map file
//   2. the model answers with the corrected file (or "NESSUNA MODIFICA") plus a list of changes and doubts
//   3. a changed file must keep id/chapter/status/illustrations and pass typecheck + export, otherwise it is reverted
//   4. every outcome is appended to docs/revisione/auto-<chapter>.md and docs/revisione/auto-stato.json
//
// Usage:
//   $env:OLLAMA_MODEL="gpt-oss:120b"; npm run revisiona -- --paralleli 3
//   npm run revisiona -- --capitolo patologie        one chapter
//   npm run revisiona -- --id bpco                   one map (also if already reviewed)
//   npm run revisiona -- --limite 5                  stop after 5 maps
// Env: OLLAMA_HOST (default http://localhost:11434), OLLAMA_CTX (default 32768),
//      OLLAMA_THINK = low | medium | high | false (default medium; reasoning effort of the model)
// vLLM (or any OpenAI-compatible server): set LLM_BASE_URL, e.g. http://localhost:8000/v1, and LLM_MODEL
// (the model name the server exposes, e.g. openai/gpt-oss-120b). Then OLLAMA_* are ignored except OLLAMA_THINK.

import { execFile } from 'node:child_process'
import { readFile, readdir, writeFile, appendFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'

const run = promisify(execFile)
const ROOT = fileURLToPath(new URL('..', import.meta.url))
const MAPS_DIR = path.join(ROOT, 'src/content/maps')
const REVIEW_DIR = path.join(ROOT, 'docs/revisione')
const STATE_FILE = path.join(REVIEW_DIR, 'auto-stato.json')
const HOST = process.env.OLLAMA_HOST ?? 'http://localhost:11434'
const OPENAI_BASE_URL = process.env.LLM_BASE_URL?.replace(/\/$/, '')
const MODEL = process.env.LLM_MODEL ?? process.env.OLLAMA_MODEL
const CONTEXT_TOKENS = Number(process.env.OLLAMA_CTX ?? 32768)
const THINK = process.env.OLLAMA_THINK ?? 'medium'
const REQUEST_TIMEOUT_MS = 30 * 60 * 1000

const RULES = `Sei un infermiere esperto e revisore clinico di un ebook italiano di mappe visive per studenti di
infermieristica e candidati ai concorsi pubblici. Ricevi il file TypeScript di UNA mappa. Controllalo con attenzione:

- valori numerici, soglie, range, unità di misura, criteri diagnostici, dosi, velocità, calcoli (rifalli)
- pratiche superate, sbagliate o pericolose; contraddizioni interne
- leggi e norme italiane: numero, anno, contenuto
- fonti in \`sources\`: devono esistere davvero ed essere pertinenti; una fonte inventata o non pertinente va sostituita
  con una reale e nota (linea guida, legge o testo), oppure rimossa se ne restano almeno due
- italiano: refusi, termini errati o non italiani, sigle sbagliate

REGOLE:
1. Correggi SOLO gli errori di cui sei CERTO, con modifiche minime. Non riscrivere ciò che è corretto, non cambiare lo stile.
2. Se hai un dubbio, NON modificare: scrivilo nell’elenco dei dubbi.
3. Non cambiare MAI: id, chapter, kind, status, gli id e i prompt delle illustrazioni, la struttura dei campi.
4. Mantieni la lunghezza dei testi simile (la pagina ha spazio fisso).
5. Il file deve restare TypeScript valido secondo lo schema fornito.

FORMATO DELLA RISPOSTA (obbligatorio):
- Se non ci sono errori certi: scrivi la riga  NESSUNA MODIFICA
- Altrimenti: il file COMPLETO corretto in un unico blocco \`\`\`ts … \`\`\`
- In entrambi i casi, poi, un blocco \`\`\`md … \`\`\` con due elenchi:
  "Modifiche:" (una riga per modifica: prima → dopo — motivo) e "Dubbi:" (una riga per dubbio, oppure "nessuno").`

function parseArgs(argv) {
  const args = {}
  for (let i = 0; i < argv.length; i += 2) args[argv[i].replace(/^--/, '')] = argv[i + 1]
  return args
}

async function readJson(file, fallback) {
  try {
    return JSON.parse(await readFile(file, 'utf8'))
  } catch {
    return fallback
  }
}

/** Ids already reviewed by hand: map ids listed under "## Mappe (già) controllate" in docs/revisione/clinico-*.md. */
async function manuallyReviewed(mapIds) {
  const ids = new Set()
  for (const file of (await readdir(REVIEW_DIR)).filter((f) => /^clinico-.*\.md$/.test(f))) {
    const text = await readFile(path.join(REVIEW_DIR, file), 'utf8')
    const section = text.match(/## Mappe (?:già )?controllate[^\n]*\n([\s\S]*?)(\n## |$)/)
    if (!section) continue
    for (const token of section[1].split(/[^a-z0-9-]+/)) if (mapIds.has(token)) ids.add(token)
  }
  return ids
}

const chapterOf = (code) => code.match(/chapter:\s*'([a-z]+)'/)?.[1] ?? 'altro'
const fieldOf = (code, field) => code.match(new RegExp(`${field}:\\s*'([^']+)'`))?.[1]
const illustrationIds = (code) => [...code.matchAll(/id:\s*'([^']+)'/g)].map((m) => m[1]).slice(1).sort().join(',')

/** OpenAI-compatible servers (vLLM): reasoning goes in a separate field, the answer in `content`. */
async function chatOpenAI(messages) {
  const body = { model: MODEL, messages, temperature: 0.1, max_tokens: 12000 }
  if (THINK !== 'false') body.reasoning_effort = THINK
  const response = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.LLM_API_KEY ?? 'none'}` },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  })
  if (!response.ok) throw new Error(`Server ${response.status}: ${(await response.text()).slice(0, 300)}`)
  return (await response.json()).choices?.[0]?.message?.content ?? ''
}

let sendThink = true
async function chat(messages) {
  if (OPENAI_BASE_URL) return chatOpenAI(messages)
  const body = { model: MODEL, messages, stream: false, options: { num_ctx: CONTEXT_TOKENS, temperature: 0.1 } }
  const think = THINK === 'false' ? false : THINK
  const response = await fetch(`${HOST}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sendThink ? { ...body, think } : body),
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  })
  if (!response.ok) {
    const text = await response.text()
    if (sendThink && /think/i.test(text)) {
      sendThink = false
      return chat(messages)
    }
    throw new Error(`Ollama ha risposto ${response.status}: ${text.slice(0, 300)}`)
  }
  return (await response.json()).message?.content ?? ''
}

function parseReply(reply) {
  const text = reply.replace(/<think>[\s\S]*?<\/think>/g, '')
  const code = text.match(/```(?:ts|typescript)\s*\n([\s\S]*?)```/)?.[1]
  const notes = text.match(/```(?:md|markdown)\s*\n([\s\S]*?)```/)?.[1]?.trim() ?? ''
  const unchanged = !code && /NESSUNA MODIFICA/i.test(text)
  return { code: code ? code.trim() + '\n' : null, notes, unchanged }
}

async function capture(command, args, { shell = false } = {}) {
  try {
    const { stdout, stderr } = await run(command, args, { cwd: ROOT, shell, maxBuffer: 20 * 1024 * 1024 })
    return { ok: true, output: stdout + stderr }
  } catch (err) {
    return { ok: false, output: (err.stdout ?? '') + (err.stderr ?? '') + (err.message ?? '') }
  }
}

/** Problems that make a corrected file unacceptable (empty list = accept). */
async function check(id, original, corrected) {
  const problems = []
  for (const field of ['id', 'chapter', 'kind', 'status']) {
    if (fieldOf(original, field) !== fieldOf(corrected, field)) problems.push(`campo ${field} cambiato`)
  }
  if (illustrationIds(original) !== illustrationIds(corrected)) problems.push('id delle illustrazioni cambiati')
  if (!corrected.includes('export default map')) problems.push('manca export default map')
  if (problems.length > 0) return problems

  const tsc = await capture('npx', ['tsc', '--noEmit', '-p', 'tsconfig.json', '--pretty', 'false'], { shell: process.platform === 'win32' })
  const typeErrors = tsc.output.split(/\r?\n/).filter((line) => line.includes(`${id}.ts`))
  if (typeErrors.length > 0) return [`errori TypeScript: ${typeErrors.slice(0, 3).join(' | ')}`]

  const exported = await capture(process.execPath, ['scripts/export.mjs', id])
  if (exported.output.includes('oltre la pagina')) return ['il testo sfora la pagina']
  if (!exported.output.includes('✓')) return ['export fallito']
  return []
}

async function reviewOne(id, types) {
  const file = path.join(MAPS_DIR, `${id}.ts`)
  const original = await readFile(file, 'utf8')
  const reply = await chat([
    { role: 'system', content: RULES },
    {
      role: 'user',
      content: `Schema dei dati (src/book/types.ts):\n\`\`\`ts\n${types}\n\`\`\`\n\nMappa da revisionare (src/content/maps/${id}.ts):\n\`\`\`ts\n${original}\`\`\``,
    },
  ])
  const { code, notes, unchanged } = parseReply(reply)
  if (unchanged || (code && code.trim() === original.trim())) return { outcome: 'ok', notes, chapter: chapterOf(original) }
  if (!code) return { outcome: 'errore', notes: `Risposta non valida:\n${reply.slice(0, 500)}`, chapter: chapterOf(original) }

  await writeFile(file, code)
  const problems = await check(id, original, code)
  if (problems.length > 0) {
    await writeFile(file, original) // never leave a broken or unsafe edit
    return { outcome: 'scartata', notes: `${notes}\n\nModifica annullata: ${problems.join('; ')}`, chapter: chapterOf(original) }
  }
  return { outcome: 'modificata', notes, chapter: chapterOf(original) }
}

async function main() {
  if (!MODEL) throw new Error('Imposta LLM_MODEL (vLLM) oppure OLLAMA_MODEL, es.: $env:LLM_MODEL="openai/gpt-oss-120b"')
  const args = parseArgs(process.argv.slice(2))
  const state = await readJson(STATE_FILE, {})
  const types = await readFile(path.join(ROOT, 'src/book/types.ts'), 'utf8')
  const all = (await readdir(MAPS_DIR)).filter((f) => f.endsWith('.ts')).map((f) => f.replace(/\.ts$/, ''))
  const reviewedByHand = await manuallyReviewed(new Set(all))
  const queue = []
  for (const id of all) {
    if (args.id && id !== args.id) continue
    if (!args.id && (reviewedByHand.has(id) || state[id])) continue
    if (args.capitolo && chapterOf(await readFile(path.join(MAPS_DIR, `${id}.ts`), 'utf8')) !== args.capitolo) continue
    queue.push(id)
  }
  queue.splice(Number(args.limite ?? Infinity))

  const workers = Math.max(1, Number(args.paralleli ?? 3))
  console.log(`Revisione con ${MODEL} su ${OPENAI_BASE_URL ?? HOST} (ragionamento: ${THINK}) — ${queue.length} mappe, ${workers} alla volta`)
  console.log(`Già controllate a mano: ${reviewedByHand.size}; dallo script: ${Object.keys(state).length}`)

  const counts = { ok: 0, modificata: 0, scartata: 0, errore: 0 }
  let next = 0
  const worker = async () => {
    while (next < queue.length) {
      const id = queue[next++]
      const started = Date.now()
      let result
      try {
        result = await reviewOne(id, types)
      } catch (err) {
        const chapter = chapterOf(await readFile(path.join(MAPS_DIR, `${id}.ts`), 'utf8'))
        result = { outcome: 'errore', notes: err.message, chapter }
      }
      counts[result.outcome]++
      const seconds = Math.round((Date.now() - started) / 1000)
      const icon = { ok: '✓', modificata: '✎', scartata: '✗', errore: '!' }[result.outcome]
      console.log(`  ${icon} ${id} — ${result.outcome} (${seconds} s)`)

      if (result.outcome !== 'errore') state[id] = result.outcome
      await writeFile(STATE_FILE, JSON.stringify(state, null, 2) + '\n')
      await appendFile(
        path.join(REVIEW_DIR, `auto-${result.chapter}.md`),
        `\n## ${id} — ${result.outcome} (${new Date().toISOString().slice(0, 16).replace('T', ' ')}, ${MODEL})\n\n${result.notes || '—'}\n`,
      )
    }
  }
  if (!existsSync(REVIEW_DIR)) throw new Error('Manca la cartella docs/revisione')
  await Promise.all(Array.from({ length: workers }, worker))

  console.log(`\nFatto: ${counts.ok} senza errori, ${counts.modificata} corrette, ${counts.scartata} correzioni annullate, ${counts.errore} errori.`)
  console.log('Rapporti: docs/revisione/auto-<capitolo>.md — controlla le correzioni con: git diff')
}

main().catch((err) => {
  console.error(err.message)
  process.exitCode = 1
})
