import { describe, expect, test } from 'vitest'
import { ENTRIES } from './registry'
import { buildSequence, INDEX_LINES_PER_COLUMN, indexLines, paginateIndex } from './sequence'

describe('book sequence', () => {
  const sequence = buildSequence(ENTRIES)

  test('starts with the front matter, then the index', () => {
    expect(sequence.slice(0, 4).map((i) => i.id)).toEqual(['copertina', 'frontespizio', 'avvertenze', 'come-usare'])
    expect(sequence[4].type).toBe('index')
  })

  test('contains every map once, each chapter opened by its divider', () => {
    const maps = sequence.filter((i) => i.type === 'map')
    expect(maps).toHaveLength(ENTRIES.length)
    const dividers = sequence.filter((i) => i.type === 'divider')
    expect(dividers).toHaveLength(10)
    const firstDivider = sequence.findIndex((i) => i.type === 'divider')
    expect(sequence[firstDivider + 1]).toMatchObject({ type: 'map', id: ENTRIES[0].id })
  })

  test('ids are unique', () => {
    expect(new Set(sequence.map((i) => i.id)).size).toBe(sequence.length)
  })

  test('index lists every map and fits its columns', () => {
    const pages = paginateIndex(indexLines(ENTRIES))
    expect(pages.flat().filter((l) => l.type === 'entry')).toHaveLength(ENTRIES.length)
    for (const page of pages) expect(page.length).toBeLessThanOrEqual(INDEX_LINES_PER_COLUMN * 2)
  })

  test('onlyWritten skips planned maps but keeps front matter and dividers', () => {
    const written = buildSequence(ENTRIES, { onlyWritten: true })
    const maps = written.filter((i) => i.type === 'map')
    expect(maps.length).toBe(ENTRIES.filter((e) => e.map).length)
    expect(written.filter((i) => i.type === 'divider')).toHaveLength(10)
  })
})
