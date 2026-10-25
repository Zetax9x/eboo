import { Fragment } from 'react'
import type { AlgorithmMap, AlgorithmStep, AlgorithmStepKind } from '../book/types'
import { Box, Bullets, KeyBand, Rich } from '../components/Box'
import { Icon, type IconName } from '../components/icons'

const STEP_ICON: Record<AlgorithmStepKind, IconName> = {
  start: 'CircleDot',
  action: 'CircleCheck',
  decision: 'Target',
  alert: 'TriangleAlert',
  end: 'Hospital',
}

function FlowNode({ step }: { step: AlgorithmStep }) {
  return (
    <div className={`flow__node flow__node--${step.kind}`}>
      <div className="flow__title">
        <Icon name={STEP_ICON[step.kind]} size={15} />
        <Rich text={step.title} />
      </div>
      {step.text && (
        <div className="flow__text">
          <Rich text={step.text} />
        </div>
      )}
      {step.branches && (
        <div className="flow__branches">
          {step.branches.map((b) => (
            <div className="flow__branch" key={b.label}>
              <span className="flow__branch-label">{b.label}</span>
              <Rich text={b.text} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function AlgorithmPage({ map }: { map: AlgorithmMap }) {
  return (
    <>
      {map.intro && (
        <div className="intro">
          <Rich text={map.intro} />
        </div>
      )}
      <div className="row grow" style={{ gridTemplateColumns: '1.55fr 1fr' }}>
        <div className="flow">
          {map.steps.map((step, i) => (
            <Fragment key={step.title}>
              {i > 0 && <div className="flow__arrow" aria-hidden="true" />}
              <FlowNode step={step} />
            </Fragment>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minHeight: 0 }}>
          {map.side.map((s) => (
            <Box key={s.title} title={s.title} icon={s.icon} accent={s.accent} style={{ flex: 1 }}>
              <Bullets items={s.items} />
            </Box>
          ))}
        </div>
      </div>
      {map.keyPoints && <KeyBand items={map.keyPoints} />}
    </>
  )
}
