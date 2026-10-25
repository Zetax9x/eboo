import type { DiseaseMap } from '../book/types'
import { Box, Bullets, CheckList, Rich } from '../components/Box'
import { Illustration } from '../components/Illustration'

export function DiseasePage({ map }: { map: DiseaseMap }) {
  const firstRow = map.sections.slice(0, 3)
  const secondRow = map.sections.slice(3, 6)
  return (
    <>
      <div className="row" style={{ gridTemplateColumns: '1fr 230px' }}>
        <Box title="Definizione e classificazione" icon="BookOpen" accent="purple">
          <p style={{ fontSize: 13.5 }}>
            <Rich text={map.definition} />
          </p>
          <div className="row row-2" style={{ gap: 6 }}>
            {map.types.map((t) => (
              <div className="fact acc-purple" key={t.name}>
                <div className="fact__label">{t.name}</div>
                <div className="fact__text">
                  <Rich text={t.text} />
                </div>
              </div>
            ))}
          </div>
        </Box>
        <Illustration data={map.illustration} iconSize={64} />
      </div>

      {[firstRow, secondRow].filter((row) => row.length > 0).map((row, i) => (
        <div className="row row-3 grow" key={i}>
          {row.map((s) => (
            <Box key={s.title} title={s.title} icon={s.icon} accent={s.accent}>
              <Bullets items={s.items} />
            </Box>
          ))}
        </div>
      ))}

      <div className="row" style={{ gridTemplateColumns: '1.45fr 1fr' }}>
        <Box title="Assistenza infermieristica" icon="ClipboardCheck" accent="green">
          <CheckList items={map.nursing.map((text) => ({ text, kind: 'ok' as const }))} />
        </Box>
        <Box title="Segnali d'allarme" icon="Siren" accent="red">
          <CheckList items={map.redFlags.map((text) => ({ text, kind: 'alert' as const }))} />
        </Box>
      </div>
    </>
  )
}
