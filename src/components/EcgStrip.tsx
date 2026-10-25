// Vector ECG strip on standard paper (25 mm/s, 10 mm/mV). Drawn, not AI-generated: it must be exact.

const PX_PER_MM = 6
const STRIP_MM = { w: 120, h: 30 }
const BASELINE_MM = 20
const BEAT_MM = 20 // 0.8 s per beat at 25 mm/s => 75 bpm
const BEATS = 6

/** One PQRST complex in mm, x from beat start, y in mm above baseline. */
function beatPath(x0: number): string {
  const p = (x: number, y: number) => `${((x0 + x) * PX_PER_MM).toFixed(1)},${((BASELINE_MM - y) * PX_PER_MM).toFixed(1)}`
  return [
    `L${p(2, 0)}`,
    `Q${p(3.25, 3)} ${p(4.5, 0)}`, // P wave 0.10 s, 1.5 mm
    `L${p(6, 0)}`, // PR segment => PR interval 0.16 s
    `L${p(6.4, -1)}`, // Q
    `L${p(7.2, 12)}`, // R
    `L${p(8, -3)}`, // S
    `L${p(8.5, 0)}`, // J point => QRS 0.10 s
    `L${p(11, 0)}`, // ST segment
    `Q${p(13, 6)} ${p(15, 0)}`, // T wave
    `L${p(BEAT_MM, 0)}`,
  ].join(' ')
}

function gridLines(): { d: string; major: boolean }[] {
  const lines: { d: string; major: boolean }[] = []
  for (let x = 0; x <= STRIP_MM.w; x++) {
    lines.push({ d: `M${x * PX_PER_MM},0 V${STRIP_MM.h * PX_PER_MM}`, major: x % 5 === 0 })
  }
  for (let y = 0; y <= STRIP_MM.h; y++) {
    lines.push({ d: `M0,${y * PX_PER_MM} H${STRIP_MM.w * PX_PER_MM}`, major: y % 5 === 0 })
  }
  return lines
}

const mm = (v: number) => v * PX_PER_MM

export function EcgStrip() {
  const width = mm(STRIP_MM.w)
  const height = mm(STRIP_MM.h)
  const trace = `M0,${mm(BASELINE_MM)} ` + Array.from({ length: BEATS }, (_, i) => beatPath(i * BEAT_MM)).join(' ')
  const annotateX = BEAT_MM * 2 // annotate the 3rd beat

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" role="img" aria-label="Tracciato ECG: ritmo sinusale a 75 bpm con onde P, QRS e T">
      <rect width={width} height={height} fill="#fff6f4" />
      {gridLines().map((l, i) => (
        <path key={i} d={l.d} stroke={l.major ? '#f2a39a' : '#fbd6d1'} strokeWidth={l.major ? 1.1 : 0.5} />
      ))}
      <path d={trace} fill="none" stroke="#17212f" strokeWidth={2.2} strokeLinejoin="round" />

      <g fontFamily="Barlow Condensed, sans-serif" fontWeight={800} fontSize={17} textAnchor="middle">
        <text x={mm(annotateX + 3.25)} y={mm(BASELINE_MM - 3.2)} fill="#1f6fd1">P</text>
        <text x={mm(annotateX + 7.2)} y={mm(BASELINE_MM - 13.3)} fill="#d7263d">QRS</text>
        <text x={mm(annotateX + 13)} y={mm(BASELINE_MM - 4.8)} fill="#13915f">T</text>
      </g>

      <Bracket x1={annotateX + 2} x2={annotateX + 6} y={BASELINE_MM + 4} label="PR 0,16 s" color="#1f6fd1" />
      <Bracket x1={annotateX + 6} x2={annotateX + 8.5} y={BASELINE_MM + 7.5} label="QRS 0,10 s" color="#d7263d" />
      <Bracket x1={annotateX + 6} x2={annotateX + 15} y={BASELINE_MM + 4} label="QT" color="#13915f" labelDx={6} />
      <Bracket x1={BEAT_MM * 4 + 7.2} x2={BEAT_MM * 5 + 7.2} y={3} label="R-R = 0,80 s → 75 bpm" color="#ec7a12" />
    </svg>
  )
}

interface BracketProps {
  x1: number
  x2: number
  y: number
  label: string
  color: string
  labelDx?: number
}

function Bracket({ x1, x2, y, label, color, labelDx = 0 }: BracketProps) {
  const tick = 1
  return (
    <g stroke={color} strokeWidth={1.6} fill="none">
      <path d={`M${mm(x1)},${mm(y - tick)} V${mm(y)} H${mm(x2)} V${mm(y - tick)}`} />
      <text
        x={mm((x1 + x2) / 2 + labelDx)}
        y={mm(y + 2.3)}
        fill={color}
        stroke="none"
        textAnchor="middle"
        fontFamily="Barlow Condensed, sans-serif"
        fontWeight={700}
        fontSize={13}
      >
        {label}
      </text>
    </g>
  )
}
