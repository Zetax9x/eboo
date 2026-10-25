import type { LabAlteration, LabMap } from '../book/types'
import { KeyBand, Rich } from '../components/Box'
import { Icon } from '../components/icons'

export function LabPage({ map }: { map: LabMap }) {
  return (
    <>
      <p style={{ fontSize: 13, color: 'var(--ink-soft)' }}>
        <Rich text={map.intro} />
      </p>
      {map.rows.map((row) => (
        <div className={`labrow acc-${row.accent}`} key={row.symbol}>
          <div className="labrow__id" style={{ gridRow: '1 / 3' }}>
            <span className="labrow__symbol">{row.symbol}</span>
            <span className="labrow__name">{row.name}</span>
            <span className="labrow__range">{row.range}</span>
            <span className="labrow__unit">{row.unit}</span>
          </div>
          <Alteration kind="low" data={row.low} />
          <Alteration kind="high" data={row.high} />
          <div className="labrow__nurse">
            <Icon name="Stethoscope" size={15} />
            <span>
              <Rich text={row.nursing} />
            </span>
          </div>
        </div>
      ))}
      <KeyBand label="Attenzione" items={map.tips} />
    </>
  )
}

function Alteration({ kind, data }: { kind: 'low' | 'high'; data: LabAlteration }) {
  return (
    <div className={`alt alt--${kind}`}>
      <div className="alt__title">
        <Icon name={kind === 'low' ? 'ArrowDown' : 'ArrowUp'} size={16} />
        {data.name}
      </div>
      <div>
        <span className="alt__k">Segni: </span>
        <Rich text={data.signs} />
      </div>
      <div>
        <span className="alt__k">Cause: </span>
        <Rich text={data.causes} />
      </div>
    </div>
  )
}
