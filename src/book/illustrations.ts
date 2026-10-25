import type { Illustration, MapPage } from './types'

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
