// Synthetic ECG strips for arrhythmia pages (lead II, 25 mm/s, 10 mm/mV).
// Each wave is a gaussian bump; a beat is a sum of P, Q, R, S, T bumps placed at real timings.
// Drawn in code, never AI-generated: shapes and intervals must be exact.

import type { Rhythm } from '../book/types'

export const STRIP = { w: 120, h: 30, baseline: 19 } // mm
const PX_PER_MM = 6
const SAMPLE_MM = 0.05

interface Wave {
  at: number
  amp: number
  w: number
}

interface RhythmSpec {
  waves: Wave[]
  baseline?: (x: number) => number
}

const gauss = (x: number, { at, amp, w }: Wave) => amp * Math.exp(-0.5 * ((x - at) / w) ** 2)

// ---------- Building blocks (positions in mm; 1 mm = 0.04 s) ----------
const P = (at: number, amp = 1.5): Wave => ({ at, amp, w: 0.55 })
const narrowQRS = (r: number, rAmp = 12): Wave[] => [
  { at: r - 0.55, amp: -1, w: 0.22 },
  { at: r, amp: rAmp, w: 0.28 },
  { at: r + 0.55, amp: -3, w: 0.25 },
]
const T = (r: number, amp = 3, offset = 7.2, w = 1.3): Wave => ({ at: r + offset, amp, w })
const wideBeat = (r: number): Wave[] => [
  { at: r, amp: 10, w: 0.9 },
  { at: r + 1.9, amp: -5, w: 0.8 },
  { at: r + 7.5, amp: -4, w: 1.6 },
]

interface BeatOptions {
  pr?: number
  p?: boolean
  pAmp?: number
  tAmp?: number
  tOffset?: number
  tW?: number
}
const sinusBeat = (r: number, o: BeatOptions = {}): Wave[] => [
  ...(o.p === false ? [] : [P(r - (o.pr ?? 4), o.pAmp)]),
  ...narrowQRS(r),
  T(r, o.tAmp, o.tOffset, o.tW),
]

const every = (start: number, step: number, end = STRIP.w - 4): number[] => {
  const out: number[] = []
  for (let x = start; x <= end; x += step) out.push(x)
  return out
}

const RHYTHM_SPECS: Record<Rhythm, () => RhythmSpec> = {
  sinus: () => ({ waves: every(8, 20).flatMap((r) => sinusBeat(r)) }),
  'sinus-brady': () => ({ waves: every(10, 33).flatMap((r) => sinusBeat(r)) }),
  'sinus-tachy': () => ({ waves: every(6, 12).flatMap((r) => sinusBeat(r, { pr: 3.5, tOffset: 5.8, tW: 1 })) }),
  pac: () => ({
    waves: [8, 28, 48, 60, 82, 102].flatMap((r, i) => (i === 3 ? sinusBeat(r, { pAmp: -1.2, pr: 3.5 }) : sinusBeat(r))),
  }),
  pvc: () => ({
    waves: [8, 28, 48, 61, 88, 108].flatMap((r, i) => (i === 3 ? wideBeat(r) : sinusBeat(r))),
  }),
  af: () => ({
    waves: [7, 21, 38, 49, 67, 79, 97, 112].flatMap((r) => [...narrowQRS(r), T(r, 2.2)]),
    baseline: (x) => 0.35 * Math.sin((2 * Math.PI * x) / 2.3) + 0.25 * Math.sin((2 * Math.PI * x) / 3.7 + 1) + 0.2 * Math.sin((2 * Math.PI * x) / 1.7 + 2),
  }),
  flutter: () => ({
    waves: every(10, 20).flatMap((r) => [...narrowQRS(r), T(r, 0.8)]),
    baseline: (x) => 1.25 - 2.5 * (((x % 5) + 5) % 5) / 5,
  }),
  svt: () => ({ waves: every(4, 8).flatMap((r) => [...narrowQRS(r), T(r, 2, 4.5, 0.9)]) }),
  bav1: () => ({ waves: every(12, 20).flatMap((r) => sinusBeat(r, { pr: 8 })) }),
  'bav2-mobitz1': () => {
    const prs = [4, 6, 7.5, null, 4, 6]
    return {
      waves: every(4, 20, 110).flatMap((p, i) => {
        const pr = prs[i % prs.length]
        return pr === null ? [P(p)] : [P(p), ...narrowQRS(p + pr), T(p + pr)]
      }),
    }
  },
  'bav2-mobitz2': () => ({
    waves: every(4, 20, 110).flatMap((p, i) => (i % 3 === 2 ? [P(p)] : [P(p), ...narrowQRS(p + 4), T(p + 4)])),
  }),
  bav3: () => ({ waves: [...every(3, 16, 116).map((p) => P(p)), ...[14, 52, 90].flatMap(wideBeat)] }),
  bbb: () => ({
    waves: every(8, 20).flatMap((r) => [
      P(r - 4.5),
      { at: r - 0.8, amp: 3, w: 0.28 },
      { at: r - 0.2, amp: -1.5, w: 0.25 },
      { at: r + 0.7, amp: 9, w: 0.35 },
      { at: r + 7.5, amp: -2, w: 1.3 },
    ]),
  }),
  vt: () => ({ waves: every(5, 9).flatMap((r) => [{ at: r, amp: 10, w: 0.9 }, { at: r + 2.2, amp: -6, w: 1 }]) }),
  vf: () => ({
    waves: [],
    baseline: (x) =>
      4 * Math.sin((2 * Math.PI * x) / 4.5) * (0.6 + 0.4 * Math.sin(x / 9)) + 1.8 * Math.sin((2 * Math.PI * x) / 2.9 + 1) + 0.8 * Math.sin((2 * Math.PI * x) / 1.6 + 2),
  }),
  asystole: () => ({ waves: [], baseline: (x) => 0.25 * Math.sin(x / 7) + 0.1 * Math.sin(x / 1.9) }),
  pea: () => ({ waves: every(14, 36).flatMap((r) => sinusBeat(r, { tAmp: 2 })) }),
  stemi: () => ({
    waves: every(8, 20).flatMap((r) => [...sinusBeat(r, { tAmp: 5, tOffset: 7 }), { at: r + 3.8, amp: 4, w: 1.5 }]),
  }),
  hyperk: () => ({
    waves: every(8, 20).flatMap((r) => [P(r - 4, 0.6), ...narrowQRS(r, 10), T(r, 9, 6.5, 0.75)]),
  }),
  hypok: () => ({
    waves: every(8, 20).flatMap((r) => [...sinusBeat(r, { tAmp: 1 }), { at: r + 4, amp: -0.8, w: 1.2 }, { at: r + 11, amp: 1.6, w: 1 }]),
  }),
  paced: () => ({ waves: every(10, 20).flatMap((r) => [{ at: r - 1.6, amp: 14, w: 0.05 }, ...wideBeat(r)]) }),
}

/** Voltage samples (mm above baseline) every SAMPLE_MM across the strip. */
export function rhythmTrace(rhythm: Rhythm): number[] {
  const { waves, baseline } = RHYTHM_SPECS[rhythm]()
  const samples: number[] = []
  for (let i = 0; i <= STRIP.w / SAMPLE_MM; i++) {
    const x = i * SAMPLE_MM
    samples.push((baseline?.(x) ?? 0) + waves.reduce((sum, wave) => sum + gauss(x, wave), 0))
  }
  return samples
}

const mm = (v: number) => v * PX_PER_MM

/** Lead in which each pattern is classically recognised (rhythm strips default to DII). */
const LEAD: Partial<Record<Rhythm, string>> = { bbb: 'V1', stemi: 'V2–V3' }

export function RhythmStrip({ rhythm, label }: { rhythm: Rhythm; label: string }) {
  const width = mm(STRIP.w)
  const height = mm(STRIP.h)
  const trace = rhythmTrace(rhythm)
    .map((y, i) => `${i === 0 ? 'M' : 'L'}${mm(i * SAMPLE_MM).toFixed(1)},${mm(STRIP.baseline - y).toFixed(1)}`)
    .join(' ')

  const grid: { d: string; major: boolean }[] = []
  for (let x = 0; x <= STRIP.w; x++) grid.push({ d: `M${mm(x)},0 V${height}`, major: x % 5 === 0 })
  for (let y = 0; y <= STRIP.h; y++) grid.push({ d: `M0,${mm(y)} H${width}`, major: y % 5 === 0 })

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" role="img" aria-label={`Tracciato ECG: ${label}`}>
      <rect width={width} height={height} fill="#fff6f4" />
      {grid.map((l, i) => (
        <path key={i} d={l.d} stroke={l.major ? '#f2a39a' : '#fbd6d1'} strokeWidth={l.major ? 1.1 : 0.5} />
      ))}
      <path d={trace} fill="none" stroke="#17212f" strokeWidth={2.2} strokeLinejoin="round" />
      <text x={mm(1.5)} y={mm(3)} fontFamily="Barlow Condensed, sans-serif" fontWeight={700} fontSize={14} fill="#a3172b">
        {LEAD[rhythm] ?? 'DII'} · 25 mm/s · 10 mm/mV
      </text>
    </svg>
  )
}
