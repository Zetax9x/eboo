// The full reading order of the ebook: front matter, index, then each chapter (divider + maps).

import { CHAPTERS, type Chapter } from './chapters'
import type { Entry } from './registry'

export type FrontId = 'copertina' | 'frontespizio' | 'avvertenze' | 'come-usare'

export type IndexLine = { type: 'chapter'; chapter: Chapter } | { type: 'entry'; entry: Entry }

export type BookItem =
  | { type: 'front'; id: FrontId }
  | { type: 'index'; id: string; part: number; parts: number; lines: IndexLine[] }
  | { type: 'divider'; id: string; chapter: Chapter; entries: Entry[] }
  | { type: 'map'; id: string; entry: Entry }

/** Two columns per index page; one line ≈ 16 px in a ~860 px tall column. */
export const INDEX_LINES_PER_COLUMN = 52
const FRONT_IDS: readonly FrontId[] = ['copertina', 'frontespizio', 'avvertenze', 'come-usare']

export function indexLines(entries: readonly Entry[]): IndexLine[] {
  return CHAPTERS.flatMap((chapter) => [
    { type: 'chapter' as const, chapter },
    ...entries.filter((e) => e.chapter.id === chapter.id).map((entry) => ({ type: 'entry' as const, entry })),
  ])
}

/** Splits lines into pages of two columns, never leaving a chapter heading alone at the bottom of a column. */
export function paginateIndex(lines: readonly IndexLine[]): IndexLine[][] {
  const columns: IndexLine[][] = [[]]
  for (const line of lines) {
    let column = columns[columns.length - 1]
    const full = column.length >= INDEX_LINES_PER_COLUMN
    const orphanHeading = line.type === 'chapter' && column.length >= INDEX_LINES_PER_COLUMN - 2
    if (full || orphanHeading) {
      column = []
      columns.push(column)
    }
    column.push(line)
  }
  const pages: IndexLine[][] = []
  for (let i = 0; i < columns.length; i += 2) pages.push([...columns[i], ...(columns[i + 1] ?? [])])
  return pages
}

export function buildSequence(entries: readonly Entry[], { onlyWritten = false } = {}): BookItem[] {
  const indexPages = paginateIndex(indexLines(entries))
  const items: BookItem[] = [
    ...FRONT_IDS.map((id) => ({ type: 'front' as const, id })),
    ...indexPages.map((lines, i) => ({ type: 'index' as const, id: `indice-${i + 1}`, part: i + 1, parts: indexPages.length, lines })),
  ]
  for (const chapter of CHAPTERS) {
    const chapterEntries = entries.filter((e) => e.chapter.id === chapter.id)
    items.push({ type: 'divider', id: `capitolo-${chapter.number}`, chapter, entries: chapterEntries })
    for (const entry of chapterEntries) {
      if (!onlyWritten || entry.map) items.push({ type: 'map', id: entry.id, entry })
    }
  }
  return items
}
