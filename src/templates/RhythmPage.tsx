import type { RhythmMap } from '../book/types'
import { Box, Bullets, CheckList, Rich } from '../components/Box'
import { RhythmStrip } from '../components/RhythmStrip'

export function RhythmPage({ map }: { map: RhythmMap }) {
  const [first, ...rest] = map.sections
  return (
    <>
      <Box title={map.stripLabel} icon="Activity" accent="orange">
        <RhythmStrip rhythm={map.rhythm} label={map.stripLabel} />
      </Box>

      <div className="row" style={{ gridTemplateColumns: first ? '1.1fr 1fr' : '1fr' }}>
        <Box title="Come si riconosce" icon="Target" accent="blue">
          <table className="mini-table acc-blue">
            <tbody>
              {map.features.map((f) => (
                <tr key={f.label}>
                  <td>{f.label}</td>
                  <td>
                    <Rich text={f.value} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
        {first && (
          <Box title={first.title} icon={first.icon} accent={first.accent}>
            <Bullets items={first.items} />
          </Box>
        )}
      </div>

      {rest.length > 0 && (
        <div className="row grow" style={{ gridTemplateColumns: `repeat(${rest.length}, 1fr)` }}>
          {rest.map((s) => (
            <Box key={s.title} title={s.title} icon={s.icon} accent={s.accent}>
              <Bullets items={s.items} />
            </Box>
          ))}
        </div>
      )}

      <div className="row row-2">
        <Box title="Cosa fa l'infermiere" icon="Stethoscope" accent="green">
          <CheckList items={map.nurseRole.map((text) => ({ text, kind: 'ok' as const }))} />
        </Box>
        <Box title="Segnali d'allarme" icon="Siren" accent="red">
          <CheckList items={map.redFlags.map((text) => ({ text, kind: 'alert' as const }))} />
        </Box>
      </div>
    </>
  )
}
