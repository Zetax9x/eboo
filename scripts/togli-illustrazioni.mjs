// Removes illustration slots from the map files, by illustration id.
// Used for abstract topics, where AI images come out with text or as meaningless shapes.
// An illustration inside an `inset` removes the whole inset (a detail box without its image is empty).
// Only optional slots can go: the typecheck afterwards tells if a required one was removed.
//
// Usage: node scripts/togli-illustrazioni.mjs <illustration-id> [<illustration-id> ...]

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const MAPS_DIR = fileURLToPath(new URL('../src/content/maps', import.meta.url))

/** Removes the `key: { … },` property that encloses `pos`, whole lines included. */
function removeProperty(source, pos, key) {
  const keyAt = source.lastIndexOf(`${key}: {`, pos)
  const start = source.lastIndexOf('\n', keyAt) + 1
  let i = source.indexOf('{', keyAt)
  for (let depth = 0; i < source.length; i++) {
    if (source[i] === '{') depth++
    else if (source[i] === '}' && --depth === 0) break
  }
  const end = source.slice(i + 1).match(/^,?\r?\n?/)[0].length + i + 1
  return source.slice(0, start) + source.slice(end)
}

/** True when the illustration opening before `pos` is the one of an inset ({ label, illustration }). */
function isInInset(source, pos) {
  const inset = source.lastIndexOf('inset: {', pos)
  const illustration = source.lastIndexOf('illustration: {', pos)
  if (inset < 0) return false
  const between = source.slice(source.indexOf('{', inset) + 1, source.lastIndexOf('\n', illustration) + 1)
  return /^\s*label:[^\n]*\n\s*$/.test(between)
}

const ids = process.argv.slice(2)
if (ids.length === 0) {
  console.error('Uso: node scripts/togli-illustrazioni.mjs <id-illustrazione> […]')
  process.exit(1)
}

const files = (await readdir(MAPS_DIR)).filter((f) => f.endsWith('.ts'))
const missing = new Set(ids)
for (const file of files) {
  const filePath = path.join(MAPS_DIR, file)
  let source = await readFile(filePath, 'utf8')
  const original = source
  for (const id of ids) {
    const pos = source.search(new RegExp(`id: ['"]${id}['"]`))
    if (pos < 0) continue
    const inset = isInInset(source, pos)
    source = removeProperty(source, pos, inset ? 'inset' : 'illustration')
    missing.delete(id)
    console.log(`✓ ${id} tolta da ${file}${inset ? ' (riquadro di dettaglio)' : ''}`)
  }
  if (source !== original) await writeFile(filePath, source)
}
for (const id of missing) console.log(`⚠ ${id}: non trovata in nessuna mappa`)
