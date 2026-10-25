import type { Entry } from '../book/registry'
import type { MapPage } from '../book/types'
import { Icon } from '../components/icons'
import { AlgorithmPage } from './AlgorithmPage'
import { ConceptPage } from './ConceptPage'
import { DiseasePage } from './DiseasePage'
import { QuizPage } from './QuizPage'
import { RhythmPage } from './RhythmPage'
import { TablePage } from './TablePage'
import { EcgPage } from './EcgPage'
import { LabPage } from './LabPage'
import { OverviewPage } from './OverviewPage'
import { PageFrame } from './PageFrame'
import { ProcedurePage } from './ProcedurePage'

function Body({ map }: { map: MapPage }) {
  switch (map.kind) {
    case 'overview':
      return <OverviewPage map={map} />
    case 'disease':
      return <DiseasePage map={map} />
    case 'procedure':
      return <ProcedurePage map={map} />
    case 'lab':
      return <LabPage map={map} />
    case 'ecg':
      return <EcgPage map={map} />
    case 'concept':
      return <ConceptPage map={map} />
    case 'table':
      return <TablePage map={map} />
    case 'algorithm':
      return <AlgorithmPage map={map} />
    case 'rhythm':
      return <RhythmPage map={map} />
    case 'quiz':
      return <QuizPage map={map} />
  }
}

/** Renders one book page for an outline entry: the written map, or a "planned" placeholder. */
export function BookPage({ entry }: { entry: Entry }) {
  const { map } = entry
  return (
    <PageFrame entry={entry} icon={map?.icon} subtitle={map?.subtitle}>
      {map ? (
        <Body map={map} />
      ) : (
        <div className="planned">
          <div>
            <Icon name={entry.chapter.icon} size={64} style={{ color: 'var(--acc)', opacity: 0.6 }} />
            <strong>Mappa pianificata</strong>
            Pagina {entry.pageNumber} · {entry.chapter.title}
          </div>
        </div>
      )}
    </PageFrame>
  )
}
