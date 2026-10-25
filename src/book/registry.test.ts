import { describe, expect, test } from 'vitest'
import { buildEntries, ENTRIES, illustrationsOf, MAPS } from './registry'
import { OUTLINE, slugify } from './outline'
import type { MapPage } from './types'

describe('book registry', () => {
  test('outline plans exactly 250 maps with unique ids', () => {
    expect(ENTRIES).toHaveLength(250)
    expect(new Set(ENTRIES.map((e) => e.id)).size).toBe(250)
  })

  test('page numbers are sequential from 1', () => {
    ENTRIES.forEach((entry, i) => expect(entry.pageNumber).toBe(i + 1))
  })

  test('every written map is attached to its outline entry', () => {
    for (const map of MAPS) {
      const entry = ENTRIES.find((e) => e.id === map.id)
      expect(entry?.map).toBe(map)
      expect(entry?.chapter.id).toBe(map.chapter)
    }
  })

  test('every written map cites at least one source', () => {
    for (const map of MAPS) expect(map.sources.length, map.id).toBeGreaterThan(0)
  })

  test('illustration ids are unique across the book', () => {
    const ids = MAPS.flatMap((map) => illustrationsOf(map).map((ill) => ill.id))
    expect(ids.length).toBeGreaterThan(0)
    expect(new Set(ids).size).toBe(ids.length)
  })

  test('rejects a map whose id is not in the outline', () => {
    const stray = { ...MAPS[0], id: 'mappa-inesistente' } as MapPage
    expect(() => buildEntries(OUTLINE, [stray])).toThrow(/non presenti/)
  })

  test('rejects a map declared in the wrong chapter', () => {
    const wrong = { ...MAPS[0], chapter: MAPS[0].chapter === 'ecg' ? 'concorsi' : 'ecg' } as MapPage
    expect(() => buildEntries(OUTLINE, [wrong])).toThrow(/capitolo/)
  })

  test('slugify strips accents and punctuation', () => {
    expect(slugify("Lettura dell'ECG in 8 passi")).toBe('lettura-dell-ecg-in-8-passi')
    expect(slugify('Funzionalità epatica')).toBe('funzionalita-epatica')
  })
})
