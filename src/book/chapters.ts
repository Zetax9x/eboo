import type { Accent, ChapterId } from './types'
import type { IconName } from '../components/icons'

export interface Chapter {
  id: ChapterId
  number: number
  title: string
  short: string
  accent: Accent
  icon: IconName
}

export const CHAPTERS: readonly Chapter[] = [
  { id: 'fondamenti', number: 1, title: 'Fondamenti di Infermieristica', short: 'Fondamenti', accent: 'navy', icon: 'ClipboardList' },
  { id: 'anatomia', number: 2, title: 'Anatomia e Fisiologia', short: 'Anatomia', accent: 'red', icon: 'HeartPulse' },
  { id: 'patologie', number: 3, title: 'Patologie e Fisiopatologia', short: 'Patologie', accent: 'purple', icon: 'Microscope' },
  { id: 'farmacologia', number: 4, title: 'Farmacologia Essenziale', short: 'Farmacologia', accent: 'green', icon: 'Pill' },
  { id: 'procedure', number: 5, title: 'Procedure Infermieristiche', short: 'Procedure', accent: 'blue', icon: 'Syringe' },
  { id: 'laboratorio', number: 6, title: 'Valori di Laboratorio ed Elettroliti', short: 'Laboratorio', accent: 'teal', icon: 'FlaskConical' },
  { id: 'ecg', number: 7, title: 'ECG e Cardiologia', short: 'ECG', accent: 'orange', icon: 'Activity' },
  { id: 'emergenze', number: 8, title: 'Urgenze ed Emergenze', short: 'Emergenze', accent: 'pink', icon: 'Siren' },
  { id: 'specialistica', number: 9, title: 'Assistenza Specialistica', short: 'Specialistica', accent: 'olive', icon: 'Baby' },
  { id: 'concorsi', number: 10, title: 'Concorsi Pubblici per Infermieri', short: 'Concorsi', accent: 'slate', icon: 'Scale' },
]

export function getChapter(id: ChapterId): Chapter {
  const chapter = CHAPTERS.find((c) => c.id === id)
  if (!chapter) throw new Error(`Capitolo sconosciuto: ${id}`)
  return chapter
}
