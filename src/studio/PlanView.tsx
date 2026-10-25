import { CHAPTERS } from '../book/chapters'
import { ENTRIES, illustrationsOf, MAPS } from '../book/registry'
import { STATUSES, type ChapterId } from '../book/types'
import { hasIllustration } from '../components/Illustration'
import { BookPage } from '../templates/BookPage'

const THUMB_SCALE = 0.2

export function PlanView({ onOpenChapter }: { onOpenChapter: (id: ChapterId) => void }) {
  const total = ENTRIES.length
  const written = MAPS.length
  const allIllustrations = MAPS.flatMap(illustrationsOf)
  const generated = allIllustrations.filter((ill) => hasIllustration(ill.id)).length

  return (
    <div className="plan">
      <div className="plan__stats">
        <Stat value={`${written}/${total}`} label="mappe scritte" />
        <Stat value={`${ENTRIES.filter((e) => e.status === 'revisionata' || e.status === 'pronta').length}`} label="revisionate da un infermiere" />
        <Stat value={`${generated}/${allIllustrations.length}`} label="illustrazioni generate" />
        <Stat value="1536 × 2048" label="formato pagina (px, 3:4)" />
      </div>

      <table className="plan__table">
        <thead>
          <tr>
            <th>Capitolo</th>
            <th>Mappe</th>
            <th>Avanzamento</th>
          </tr>
        </thead>
        <tbody>
          {CHAPTERS.map((chapter) => {
            const items = ENTRIES.filter((e) => e.chapter.id === chapter.id)
            return (
              <tr key={chapter.id}>
                <td>
                  <button className={`plan__chapter acc-${chapter.accent}`} onClick={() => onOpenChapter(chapter.id)}>
                    <span className="chapter__num">{chapter.number}</span>
                    {chapter.title}
                  </button>
                </td>
                <td className="mono">{items.length}</td>
                <td>
                  <div className="statusbar" aria-label={`${chapter.title}: avanzamento`}>
                    {STATUSES.map((status) => {
                      const count = items.filter((e) => e.status === status).length
                      return count > 0 ? (
                        <span key={status} className={`statusbar__seg dot--${status}`} style={{ flexGrow: count }} title={`${status}: ${count}`} />
                      ) : null
                    })}
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <ul className="legend">
        {STATUSES.map((s) => (
          <li key={s}>
            <span className={`dot dot--${s}`} /> {s}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}

export function GridView({ chapter, onOpen }: { chapter?: ChapterId; onOpen: (id: string) => void }) {
  const chapterId = chapter ?? CHAPTERS[0].id
  const items = ENTRIES.filter((e) => e.chapter.id === chapterId)
  return (
    <div className="grid-view">
      {items.map((entry) => (
        <button key={entry.id} className="thumb" onClick={() => onOpen(entry.id)} aria-label={`Apri pagina ${entry.pageNumber}: ${entry.title}`}>
          <div className="thumb__frame" style={{ width: 768 * THUMB_SCALE, height: 1024 * THUMB_SCALE }}>
            <div style={{ transform: `scale(${THUMB_SCALE})`, transformOrigin: 'top left' }}>
              <BookPage entry={entry} />
            </div>
          </div>
          <span className="thumb__label">
            <span className={`dot dot--${entry.status}`} /> {entry.pageNumber}. {entry.title}
          </span>
        </button>
      ))}
    </div>
  )
}
