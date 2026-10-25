// Data schema for every map in the book.
// Content lives in src/content/maps/<id>.ts — one file per page, typed by these interfaces.

import type { IconName } from '../components/icons'

export type Accent =
  | 'red' | 'blue' | 'green' | 'purple' | 'orange'
  | 'teal' | 'pink' | 'navy' | 'olive' | 'slate'

export const STATUSES = ['pianificata', 'bozza', 'illustrata', 'revisionata', 'pronta'] as const
export type Status = (typeof STATUSES)[number]

export type ChapterId =
  | 'fondamenti' | 'anatomia' | 'patologie' | 'farmacologia' | 'procedure'
  | 'laboratorio' | 'ecg' | 'emergenze' | 'specialistica' | 'concorsi'

/** An AI-generated image slot. The file goes in public/illustrations/<id>.webp; until then a placeholder is shown. */
export interface Illustration {
  id: string
  alt: string
  /** Prompt for the image model: subject only, the shared style is appended by the generator. No text in images. */
  prompt: string
  icon?: IconName
}

export interface Section {
  title: string
  icon: IconName
  accent: Accent
  items: string[]
}

interface MapBase {
  id: string
  chapter: ChapterId
  title: string
  subtitle?: string
  icon: IconName
  status: Status
  /** Guidelines / textbooks the content was checked against. */
  sources: string[]
}

// ---------- Overview (apparato, sistema) ----------
export interface OverviewBlock {
  title: string
  accent: Accent
  icon: IconName
  /** Leave out for abstract topics (chemistry, values, hormones): AI images of them come out wrong or with text. */
  illustration?: Illustration
  inset?: { label: string; illustration: Illustration }
  bullets: string[]
}
export interface OverviewMap extends MapBase {
  kind: 'overview'
  blocks: OverviewBlock[]
  keyPoints: string[]
}

// ---------- Disease ----------
export interface DiseaseMap extends MapBase {
  kind: 'disease'
  definition: string
  illustration: Illustration
  types: { name: string; text: string }[]
  sections: Section[]
  nursing: string[]
  redFlags: string[]
}

// ---------- Procedure ----------
export type CheckKind = 'ok' | 'warn' | 'no' | 'alert'
export interface ProcedureStep {
  title: string
  items: string[]
  illustration: Illustration
}
export interface ProcedureMap extends MapBase {
  kind: 'procedure'
  materials: { label: string; icon: IconName }[]
  sites?: { title: string; illustration: Illustration; items: string[] }
  safety: { text: string; kind: CheckKind }[]
  /** 4 to 8 steps. */
  steps: ProcedureStep[]
  swatches?: { title: string; items: { label: string; sub: string; color: string; ink: string }[]; note: string }
  complications: { label: string; sub: string }[]
  nurseRole: string[]
}

// ---------- Laboratory values ----------
export interface LabAlteration {
  name: string
  signs: string
  causes: string
}
export interface LabRow {
  name: string
  symbol: string
  range: string
  unit: string
  accent: Accent
  low: LabAlteration
  high: LabAlteration
  nursing: string
}
export interface LabMap extends MapBase {
  kind: 'lab'
  intro: string
  rows: LabRow[]
  tips: string[]
}

// ---------- ECG ----------
export interface EcgMap extends MapBase {
  kind: 'ecg'
  paper: { label: string; value: string }[]
  waves: { name: string; meaning: string; normal: string }[]
  rateMethods: { formula: string; when: string }[]
  sinusCriteria: string[]
  readingSteps: string[]
  limbLeads: { label: string; position: string; color: string }[]
  chestLeads: { label: string; position: string }[]
  nurseRole: string[]
}

// ---------- Concept (generic: theory, legislation, nursing models) ----------
export interface ConceptBlock {
  title: string
  icon: IconName
  accent: Accent
  items?: string[]
  checks?: { text: string; kind: CheckKind }[]
  text?: string
  illustration?: Illustration
  /** Number of grid columns this block spans (default 1). */
  span?: number
}
export interface ConceptMap extends MapBase {
  kind: 'concept'
  intro?: string
  illustration?: Illustration
  columns: 2 | 3
  blocks: ConceptBlock[]
  keyPoints?: string[]
}

// ---------- Table (drug classes, scales, reference values) ----------
export interface TableMap extends MapBase {
  kind: 'table'
  intro?: string
  tableTitle: string
  tableIcon: IconName
  columns: string[]
  rows: string[][]
  /** Optional relative column widths, e.g. [1, 2, 2]. */
  widths?: number[]
  notes: Section[]
  keyPoints?: string[]
}

// ---------- Algorithm (emergency flowcharts) ----------
export type AlgorithmStepKind = 'start' | 'action' | 'decision' | 'alert' | 'end'
export interface AlgorithmStep {
  kind: AlgorithmStepKind
  title: string
  text?: string
  /** Only for decisions: 2 outcomes shown side by side. */
  branches?: { label: string; text: string }[]
}
export interface AlgorithmMap extends MapBase {
  kind: 'algorithm'
  intro?: string
  steps: AlgorithmStep[]
  side: Section[]
  keyPoints?: string[]
}

// ---------- Rhythm (ECG arrhythmias) ----------
export const RHYTHMS = [
  'sinus', 'sinus-brady', 'sinus-tachy', 'pac', 'pvc', 'af', 'flutter', 'svt',
  'bav1', 'bav2-mobitz1', 'bav2-mobitz2', 'bav3', 'bbb', 'vt', 'vf', 'asystole',
  'pea', 'stemi', 'hyperk', 'hypok', 'paced',
] as const
export type Rhythm = (typeof RHYTHMS)[number]
export interface RhythmMap extends MapBase {
  kind: 'rhythm'
  rhythm: Rhythm
  stripLabel: string
  features: { label: string; value: string }[]
  sections: Section[]
  nurseRole: string[]
  redFlags: string[]
}

// ---------- Quiz ----------
export interface QuizQuestion {
  q: string
  options: string[]
  /** Index of the correct option. */
  answer: number
  why: string
}
export interface QuizMap extends MapBase {
  kind: 'quiz'
  questions: QuizQuestion[]
}

export type MapPage =
  | OverviewMap | DiseaseMap | ProcedureMap | LabMap | EcgMap
  | ConceptMap | TableMap | AlgorithmMap | RhythmMap | QuizMap
export type MapKind = MapPage['kind']
