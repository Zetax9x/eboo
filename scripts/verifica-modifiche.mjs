// Second-opinion check of the corrections made by the automatic review: the model judges every change
// (CORRETTA / SBAGLIATA / DUBBIA). It never edits the maps; it only writes reports.
//
//   docs/revisione/verifica.md            every judgement, map by map
//   docs/revisione/verifica-riepilogo.md  only the maps with wrong or doubtful changes
//   docs/revisione/verifica-stato.json    progress, so the script can be stopped and restarted
//
// Usage (vLLM):
//   $env:LLM_BASE_URL="http://localhost:8001/v1"; $env:LLM_MODEL="google/medgemma-27b-text-it"
//   npm run verifica -- --paralleli 6
// Options: --capitolo <id>   only one chapter
//          --base <commit>   compare with a commit instead of the uncommitted changes (default HEAD)
//          --anche-concorsi  include the "concorsi" chapter (excluded by default: Italian law is checked by hand)
// Env: LLM_BASE_URL + LLM_MODEL (vLLM / OpenAI-compatible) or OLLAMA_HOST + OLLAMA_MODEL; VERIFY_REASONING=low|medium|high

import { execFile } from 'node:child_process'
import { appendFile, readFile, readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'
import { createChat } from './lib/llm.mjs'

const run = promisify(execFile)
const ROOT = fileURLToPath(new URL('..', import.meta.url))
const REVIEW_DIR = path.join(ROOT, 'docs/revisione')
const REPORT = path.join(REVIEW_DIR, 'verifica.md')
const SUMMARY = path.join(REVIEW_DIR, 'verifica-riepilogo.md')
const STATE_FILE = path.join(REVIEW_DIR, 'verifica-stato.json')
const MODEL = process.env.LLM_MODEL ?? process.env.OLLAMA_MODEL

const RULES = `You are an expert nurse and physician checking corrections made by another AI to an Italian nursing
study ebook (visual maps for nursing students and candidates of Italian public nursing exams).
You receive the git diff of ONE map: lines starting with "-" are the old text, lines with "+" the new text,
plus the reason the other AI gave. The text is in Italian.

For EVERY change, judge whether the NEW text is clinically and factually correct and current, and whether it is
better than the old one. Check values, thresholds, units, doses, drug names, criteria, procedure steps,
guideline names and years, and that sources look real. Ignore pure wording/style changes unless they alter meaning.

Answer with one line per change, exactly in this format (the reason may be in English or Italian, keep it short):
- [CORRETTA] <what changed> — <why>
- [SBAGLIATA] <what changed> — <why it is wrong and what would be right>
- [DUBBIA] <what changed> — <what must be checked>
Then a final line: ESITO: OK   (if all changes are CORRETTA)   or   ESITO: DA CONTROLLARE`

function parseArgs(argv) {
  const args = {}
  for (let i = 0; i < argv.length; i++) {
    const key = argv[i].replace(/^--/, '')
    args[key] = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true
  }
  return args
}

async function git(args) {
  const { stdout } = await run('git', args, { cwd: ROOT, maxBuffer: 50 * 1024 * 1024 })
  return stdout
}

async function readJson(file, fallback) {
  try {
    return JSON.parse(await readFile(file, 'utf8'))
  } catch {
    return fallback
  }
}

/** Reasons the automatic review gave for each map, from docs/revisione/auto-*.md (last entry wins). */
async function reviewNotes() {
  const notes = new Map()
  for (const file of (await readdir(REVIEW_DIR)).filter((f) => /^auto-.*\.md$/.test(f))) {
    const text = await readFile(path.join(REVIEW_DIR, file), 'utf8')
    for (const block of text.split(/\n(?=## )/)) {
      const id = block.match(/^## ([a-z0-9-]+) — modificata/)?.[1]
      if (id) notes.set(id, block.split('\n').slice(1).join('\n').trim())
    }
  }
  return notes
}

const chapterOf = (code) => code.match(/chapter:\s*'([a-z]+)'/)?.[1] ?? 'altro'

async function main() {
  if (!MODEL) throw new Error('Imposta LLM_MODEL (vLLM) oppure OLLAMA_MODEL')
  const args = parseArgs(process.argv.slice(2))
  const base = typeof args.base === 'string' ? args.base : 'HEAD'
  const chat = createChat({
    baseUrl: process.env.LLM_BASE_URL,
    ollamaHost: process.env.OLLAMA_HOST,
    model: MODEL,
    reasoning: process.env.VERIFY_REASONING,
  })

  const changed = (await git(['diff', '--name-only', base, '--', 'src/content/maps']))
    .split(/\r?\n/)
    .filter((f) => f.endsWith('.ts'))
  const state = await readJson(STATE_FILE, {})
  const notes = await reviewNotes()

  const queue = []
  for (const file of changed) {
    const id = path.basename(file, '.ts')
    if (state[id]) continue
    const chapter = chapterOf(await readFile(path.join(ROOT, file), 'utf8'))
    if (args.capitolo && chapter !== args.capitolo) continue
    if (!args.capitolo && !args['anche-concorsi'] && chapter === 'concorsi') continue
    queue.push({ id, file, chapter })
  }
  console.log(`Verifica con ${MODEL} — ${changed.length} mappe modificate rispetto a ${base}, ${queue.length} da verificare`)

  const flagged = []
  let next = 0
  const worker = async () => {
    while (next < queue.length) {
      const { id, file, chapter } = queue[next++]
      try {
        const diff = await git(['diff', '-U2', base, '--', file])
        const reason = notes.get(id) ?? '(nessuna motivazione registrata)'
        const reply = await chat([
          { role: 'system', content: RULES },
          { role: 'user', content: `Map: ${id} (chapter: ${chapter})\n\nReason given by the other AI:\n${reason}\n\nDiff:\n\`\`\`diff\n${diff}\`\`\`` },
        ])
        const wrong = (reply.match(/\[SBAGLIATA\]/g) ?? []).length
        const doubtful = (reply.match(/\[DUBBIA\]/g) ?? []).length
        const verdict = wrong + doubtful > 0 || /ESITO:\s*DA CONTROLLARE/i.test(reply) ? 'da-controllare' : 'ok'
        state[id] = verdict
        if (verdict === 'da-controllare') flagged.push({ id, chapter, wrong, doubtful })
        await appendFile(REPORT, `\n## ${id} (${chapter}) — ${verdict}\n\n${reply.trim()}\n`)
        await writeFile(STATE_FILE, JSON.stringify(state, null, 2) + '\n')
        console.log(`  ${verdict === 'ok' ? '✓' : '⚠'} ${id}${verdict === 'ok' ? '' : ` — ${wrong} sbagliate, ${doubtful} dubbie`}`)
      } catch (err) {
        failed++
        console.log(`  ! ${id}: ${err.message}`)
      }
    }
  }
  await Promise.all(Array.from({ length: Math.max(1, Number(args.paralleli ?? 4)) }, worker))

  const allFlagged = Object.entries(state).filter(([, v]) => v === 'da-controllare').map(([id]) => id)
  await writeFile(
    SUMMARY,
    `# Verifica delle correzioni — mappe da controllare\n\nModello: ${MODEL}. Dettagli in \`verifica.md\`.\n\n` +
      (allFlagged.length ? allFlagged.map((id) => `- [ ] ${id}`).join('\n') : 'Nessuna mappa segnalata.') +
      '\n',
  )
  const confirmed = queue.length - flagged.length - failed
  console.log(`\nFatto: ${confirmed} confermate, ${flagged.length} da controllare, ${failed} non verificate per errore (rilancia per riprenderle).`)
  console.log('Elenco: docs/revisione/verifica-riepilogo.md — dettagli: docs/revisione/verifica.md')
}

main().catch((err) => {
  console.error(err.message)
  process.exitCode = 1
})
