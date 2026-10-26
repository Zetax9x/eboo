import type { ProcedureMap } from '../book/types'
import { Box, Bullets, CheckList, SectionBand } from '../components/Box'
import { Icon } from '../components/icons'
import { Illustration } from '../components/Illustration'

export function ProcedurePage({ map }: { map: ProcedureMap }) {
  return (
    <>
      <div className="row" style={{ gridTemplateColumns: map.sites ? '1.3fr 0.95fr 1.2fr' : '1.3fr 1.2fr' }}>
        <Box title="Materiale necessario" icon="Package" accent="blue">
          <div className="tiles">
            {map.materials.map((m) => (
              <div className="tile acc-blue" key={m.label}>
                <Icon name={m.icon} size={22} />
                {m.label}
              </div>
            ))}
          </div>
        </Box>
        {map.sites && (
          <Box title={map.sites.title} icon="Target" accent="green">
            {map.sites.illustration && <Illustration data={map.sites.illustration} style={{ height: 86 }} />}
            <Bullets items={map.sites.items} style={{ fontSize: 11 }} />
          </Box>
        )}
        <Box title="Sicurezza" icon="ShieldCheck" accent="red">
          <CheckList items={map.safety} />
        </Box>
      </div>

      <SectionBand title="Procedura passo-passo" icon="Workflow" accent="blue" />

      <div className="row row-4 grow acc-blue" style={{ gridAutoRows: '1fr' }}>
        {map.steps.map((step, i) => (
          <div className="step" key={step.title}>
            <div className="step__head">
              <span className="step__num">{i + 1}</span>
              <span className="step__title">{step.title}</span>
            </div>
            {step.illustration ? (
              <Illustration data={step.illustration} style={{ height: 46 }} iconSize={22} />
            ) : (
              <span className="step__icon">
                <Icon name={step.icon ?? 'ListChecks'} size={24} />
              </span>
            )}
            <Bullets items={step.items} />
          </div>
        ))}
      </div>

      <div className="row" style={{ gridTemplateColumns: map.swatches ? '1.2fr 0.95fr 1.25fr' : '1fr 1fr' }}>
        {map.swatches && (
          <Box title={map.swatches.title} icon="Syringe" accent="purple">
            <div className="swatches">
              {map.swatches.items.map((s) => (
                <div className="swatch" key={s.label}>
                  <span className="swatch__chip" style={{ background: s.color, color: s.ink }}>
                    {s.label.replace(/\D/g, '')}
                  </span>
                  <span className="swatch__label">{s.label}</span>
                  <span className="swatch__sub">{s.sub}</span>
                </div>
              ))}
            </div>
            <p className="disclaimer">{map.swatches.note}</p>
          </Box>
        )}
        <Box title="Possibili complicanze" icon="TriangleAlert" accent="red">
          <ul className="checklist" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 6 }}>
            {map.complications.map((c) => (
              <li key={c.label}>
                <Icon name="CircleDot" size={13} className="mark-no" />
                <span style={{ lineHeight: 1.1 }}>
                  <strong>{c.label}</strong>
                  <br />
                  <span style={{ color: 'var(--ink-soft)', fontSize: 10.5 }}>{c.sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </Box>
        <Box title="Cosa fa l'infermiere" icon="Stethoscope" accent="green">
          <CheckList items={map.nurseRole.map((text) => ({ text, kind: 'ok' as const }))} />
        </Box>
      </div>
    </>
  )
}
