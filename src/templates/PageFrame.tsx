import type { ReactNode } from 'react'
import type { Entry } from '../book/registry'
import { Icon, type IconName } from '../components/icons'

export const BOOK_TITLE = 'Mappe Visive di Infermieristica'

interface Props {
  entry: Entry
  icon?: IconName
  subtitle?: string
  children: ReactNode
}

/** Shared chrome of every book page: chapter-coloured header band, body, footer with page number. */
export function PageFrame({ entry, icon, subtitle, children }: Props) {
  const { chapter } = entry
  return (
    <article className={`page acc-${chapter.accent}`} data-page-id={entry.id}>
      <header className="page-head">
        <div className="page-head__icon">
          <Icon name={icon ?? chapter.icon} size={34} />
        </div>
        <div>
          <div className="page-head__kicker">
            Cap. {chapter.number} · {chapter.short}
          </div>
          <h1>{entry.title}</h1>
          {subtitle && <div className="page-head__sub">{subtitle}</div>}
        </div>
      </header>
      <div className="page-body">{children}</div>
      <footer className="page-foot">
        <span>
          {BOOK_TITLE} · {chapter.short}
        </span>
        <span className="disclaimer">Materiale didattico: non sostituisce protocolli, linee guida e prescrizioni.</span>
        <span className="page-foot__num">{entry.pageNumber}</span>
      </footer>
    </article>
  )
}
