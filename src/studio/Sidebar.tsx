import { useEffect, useMemo, useState } from 'react'
import { CHAPTERS } from '../book/chapters'
import { ENTRIES } from '../book/registry'
import { Icon } from '../components/icons'

interface Props {
  currentId?: string
  onSelect: (id: string) => void
}

export function Sidebar({ currentId, onSelect }: Props) {
  const [query, setQuery] = useState('')
  const currentChapter = ENTRIES.find((e) => e.id === currentId)?.chapter.id
  const [openChapters, setOpenChapters] = useState<ReadonlySet<string>>(() => new Set(currentChapter ? [currentChapter] : []))

  const normalized = query.trim().toLowerCase()
  const filtered = useMemo(
    () => (normalized ? ENTRIES.filter((e) => e.title.toLowerCase().includes(normalized)) : ENTRIES),
    [normalized],
  )

  useEffect(() => {
    document.querySelector('.entry.is-current')?.scrollIntoView({ block: 'nearest' })
  }, [currentId])

  const toggle = (id: string) =>
    setOpenChapters((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  return (
    <nav className="sidebar" aria-label="Indice del libro">
      <label className="sidebar__search">
        <Icon name="Target" size={14} />
        <input type="search" placeholder="Cerca tra le 250 mappe…" value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <div className="sidebar__scroll">
        {CHAPTERS.map((chapter) => {
          const items = filtered.filter((e) => e.chapter.id === chapter.id)
          if (items.length === 0) return null
          const written = items.filter((e) => e.map).length
          const isOpen = normalized !== '' || openChapters.has(chapter.id) || chapter.id === currentChapter
          return (
            <section key={chapter.id} className={`chapter acc-${chapter.accent}`}>
              <button className="chapter__head" onClick={() => toggle(chapter.id)} aria-expanded={isOpen}>
                <span className="chapter__num">{chapter.number}</span>
                <span className="chapter__title">{chapter.short}</span>
                <span className="chapter__count">
                  {written}/{items.length}
                </span>
              </button>
              {isOpen && (
                <ol className="chapter__list">
                  {items.map((entry) => (
                    <li key={entry.id}>
                      <button
                        className={`entry ${entry.id === currentId ? 'is-current' : ''} ${entry.map ? 'is-written' : ''}`}
                        onClick={() => onSelect(entry.id)}
                        aria-current={entry.id === currentId ? 'page' : undefined}
                      >
                        <span className={`dot dot--${entry.status}`} title={entry.status} />
                        <span className="entry__num">{entry.pageNumber}</span>
                        <span className="entry__title">{entry.title}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              )}
            </section>
          )
        })}
        {filtered.length === 0 && <p className="sidebar__empty">Nessuna mappa trovata per “{query}”.</p>}
      </div>
    </nav>
  )
}
