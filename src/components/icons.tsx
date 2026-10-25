import { createIcon } from 'lucide-react'

export type IconName = 
  | 'Activity' | 'BookOpen' | 'Calculator' | 'Cable'
  | 'ClipboardCheck' | 'Eye' | 'HeartPulse' | 'Lightbulb'
  | 'ListChecks' | 'Package' | 'Ruler' | 'ShieldCheck'
  | 'Siren' | 'Stethoscope' | 'Syringe' | 'Target'
  | 'TriangleAlert' | 'Waves' | 'Workflow' | 'CircleDot'
  | 'CircleCheck' | 'Ban' | 'ArrowDown' | 'ArrowUp'

export const Icon = createIcon({
  Activity: { viewBox: '0 0 24 24', path: 'M22 12h-4l-3 9L9 3l-3 9H2' },
  BookOpen: { viewBox: '0 0 24 24', path: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' },
  Calculator: { viewBox: '0 0 24 24', path: 'M9 7h6v13H9zM5 11h14v8H5zM5 3h14a2 2 0 0 1 2 2v6H3V5a2 2 0 0 1 2-2z' },
  Cable: { viewBox: '0 0 24 24', path: 'M12 2v20 M2 12h20 M12 2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5 5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z' },
  ClipboardCheck: { viewBox: '0 0 24 24', path: 'M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11' },
  Eye: { viewBox: '0 0 24 24', path: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' },
  HeartPulse: { viewBox: '0 0 24 24', path: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' },
  Lightbulb: { viewBox: '0 0 24 24', path: 'M9 18h6 M10 22h4 M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26C17.81 13.47 19 11.38 19 9a7 7 0 0 0-7-7z' },
  ListChecks: { viewBox: '0 0 24 24', path: 'M9 6l15 0 M9 12l15 0 M9 18l15 0 M3 6l0 0 M3 12l0 0 M3 18l0 0' },
  Package: { viewBox: '0 0 24 24', path: 'M16.5 9.1L12 6.7 7.5 9.1 12 11.5 M12 22.1V11.5 M2 12l10 5 10-5 M2 12l10-5 10 5' },
  Ruler: { viewBox: '0 0 24 24', path: 'M2 12h20 M7 12v3 M12 12v3 M17 12v3 M2 9h20 M2 15h20' },
  ShieldCheck: { viewBox: '0 0 24 24', path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4' },
  Siren: { viewBox: '0 0 24 24', path: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01' },
  Stethoscope: { viewBox: '0 0 24 24', path: 'M4 10a8 8 0 0 1 8-8 M20 14a8 8 0 0 1-8 8 M12 2v20 M7 10h10 M7 14h10' },
  Syringe: { viewBox: '0 0 24 24', path: 'M19 5l-6.5 6.5 M13 11l6.5-6.5 M12 12v10 M8 16h8' },
  Target: { viewBox: '0 0 24 24', path: 'M22 12h-4l-3 9L9 3l-3 9H2' },
  TriangleAlert: { viewBox: '0 0 24 24', path: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01' },
  Waves: { viewBox: '0 0 24 24', path: 'M2 12c5 0 5 5 10 5s5-5 10-5 5 5 10 5 M2 7c5 0 5 5 10 5s5-5 10-5 5 5 10 5 M2 17c5 0 5 5 10 5s5-5 10-5 5 5 10 5' },
  Workflow: { viewBox: '0 0 24 24', path: 'M3 7h6v6H3zM15 7h6v6h-6zM9 13h6v6H9z' },
  CircleDot: { viewBox: '0 0 24 24', path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z' },
  CircleCheck: { viewBox: '0 0 24 24', path: 'M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3' },
  Ban: { viewBox: '0 0 24 24', path: 'M18.6 18.6a9 9 0 1 1-12.73 0 M12 2v20 M2 12h20' },
  ArrowDown: { viewBox: '0 0 24 24', path: 'M12 5v14 M19 12l-7 7-7-7' },
  ArrowUp: { viewBox: '0 0 24 24', path: 'M12 19V5 M5 12l7-7 7 7' },
  CircleX: { viewBox: '0 0 24 24', path: 'M18 6L6 18 M6 6l12 12' },
})

export type IconName = keyof typeof Icon
