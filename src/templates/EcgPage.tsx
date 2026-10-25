import type { EcgMap } from '../book/types'
import { Box, Bullets, CheckList, Rich } from '../components/Box'
import { EcgStrip } from '../components/EcgStrip'

export function EcgPage({ map }: { map: EcgMap }) {
  return (
    <>
      <Box title="Il tracciato normale (DII)" icon="Activity" accent="orange">
        <EcgStrip />
      </Box>

      <div className="row" style={{ gridTemplateColumns: '0.85fr 1.9fr' }}>
        <Box title="La carta ECG" icon="Ruler" accent="red">
          <table className="mini-table acc-red">
            <tbody>
              {map.paper.map((p) => (
                <tr key={p.label}>
                  <td>{p.label}</td>
                  <td>
                    <Rich text={p.value} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
        <Box title="Onde e intervalli" icon="Waves" accent="blue">
          <table className="mini-table acc-blue">
            <thead>
              <tr>
                <th>Elemento</th>
                <th>Significato</th>
                <th>Normale</th>
              </tr>
            </thead>
            <tbody>
              {map.waves.map((w) => (
                <tr key={w.name}>
                  <td>{w.name}</td>
                  <td>{w.meaning}</td>
                  <td>
                    <Rich text={w.normal} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </div>

      <div className="row row-3 grow">
        <Box title="Calcolo della frequenza" icon="Calculator" accent="purple">
          {map.rateMethods.map((m) => (
            <div className="fact acc-purple" key={m.formula}>
              <div className="fact__label" style={{ fontSize: 14 }}>
                {m.formula}
              </div>
              <div className="fact__text">{m.when}</div>
            </div>
          ))}
        </Box>
        <Box title="Ritmo sinusale: criteri" icon="HeartPulse" accent="green">
          <CheckList items={map.sinusCriteria.map((text) => ({ text, kind: 'ok' as const }))} />
        </Box>
        <Box title="Leggere un ECG in 5 passi" icon="ListChecks" accent="teal">
          <ol style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 3 }}>
            {map.readingSteps.map((s) => (
              <li key={s}>
                <Rich text={s} />
              </li>
            ))}
          </ol>
        </Box>
      </div>

      <div className="row" style={{ gridTemplateColumns: '1.5fr 1fr' }}>
        <Box title="Posizionamento degli elettrodi" icon="Cable" accent="orange">
          <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.3fr', gap: 10 }}>
            <ul className="checklist">
              {map.limbLeads.map((l) => (
                <li key={l.label}>
                  <span
                    style={{ width: 13, height: 13, borderRadius: '50%', background: l.color, border: '1.5px solid #0003', flexShrink: 0, marginTop: 1 }}
                  />
                  <span>
                    <strong>{l.label}</strong> — {l.position}
                  </span>
                </li>
              ))}
            </ul>
            <table className="mini-table acc-orange">
              <tbody>
                {map.chestLeads.map((l) => (
                  <tr key={l.label}>
                    <td>{l.label}</td>
                    <td>{l.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Box>
        <Box title="Cosa fa l'infermiere" icon="Stethoscope" accent="green">
          <Bullets items={map.nurseRole} />
        </Box>
      </div>
    </>
  )
}
