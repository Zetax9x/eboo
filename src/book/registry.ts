// Joins the outline (what the book will contain) with the written content files (what exists so far).

import { CHAPTERS, type Chapter } from './chapters'
import { OUTLINE, slugify } from './outline'
import type { ChapterId, Illustration, MapPage, Status } from './types'

export interface Entry {
  id: string
  title: string
  chapter: Chapter
  indexInChapter: number
  pageNumber: number
  status: Status
  map?: MapPage
}

export function buildEntries(
  outline: Readonly<Record<ChapterId, readonly string[]>>,
  maps: readonly MapPage[],
): Entry[] {
  const mapsById = new Map<string, MapPage>()
  for (const map of maps) {
    if (mapsById.has(map.id)) throw new Error(`Mappa duplicata: ${map.id}`)
    mapsById.set(map.id, map)
  }

  const seen = new Set<string>()
  const entries: Entry[] = []
  for (const chapter of CHAPTERS) {
    outline[chapter.id].forEach((title, indexInChapter) => {
      const id = slugify(title)
      if (seen.has(id)) throw new Error(`Titolo duplicato nell'indice: ${title}`)
      seen.add(id)

      const map = mapsById.get(id)
      if (map && map.chapter !== chapter.id) {
        throw new Error(`La mappa ${id} dichiara il capitolo "${map.chapter}" ma nell'indice è in "${chapter.id}"`)
      }
      entries.push({
        id,
        title: map?.title ?? title,
        chapter,
        indexInChapter,
        pageNumber: entries.length + 1,
        status: map?.status ?? 'pianificata',
        map,
      })
    })
  }

  const orphans = [...mapsById.keys()].filter((id) => !seen.has(id))
  if (orphans.length > 0) throw new Error(`Mappe non presenti nell'indice: ${orphans.join(', ')}`)

  return entries
}

/** Every illustration slot used by a map, found anywhere in its data. */
export function illustrationsOf(map: MapPage): Illustration[] {
  const found: Illustration[] = []
  const visit = (value: unknown): void => {
    if (Array.isArray(value)) return value.forEach(visit)
    if (value === null || typeof value !== 'object') return
    const record = value as Record<string, unknown>
    if (typeof record.id === 'string' && typeof record.prompt === 'string') found.push(record as unknown as Illustration)
    Object.values(record).forEach(visit)
  }
  visit(map)
  return found
}

const modules = import.meta.glob<MapPage>('../content/maps/*.ts', { eager: true, import: 'default' })

export const MAPS: readonly MapPage[] = Object.values(modules)
export const ENTRIES: readonly Entry[] = buildEntries(OUTLINE, MAPS)

export function findEntry(id: string | undefined): Entry | undefined {
  return ENTRIES.find((e) => e.id === id)
}
