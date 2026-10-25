import { useEffect, useState } from 'react'
import { CHAPTERS } from '../book/chapters'
import { ENTRIES, findEntry, MAPS } from '../book/registry'
import { buildSequence, type BookItem } from '../book/sequence'
import { BookItemView } from '../front/FrontPages'
import { BOOK_TITLE } from '../templates/PageFrame'
import { Inspector, PageCanvas, type Zoom } from './PageCanvas'
import { BookView, GridView, PlanView } from './PlanView'
import { useRoute, type Route } from './route'
import { Sidebar } from './Sidebar'

const EINK_KEY = 'studio.eink'

function readEinkPreference(): boolean {
  try {
    return localStorage.getItem(EINK_KEY) === '1'
  } catch {
    return false
  }
}

function writeEinkPreference(on: boolean): void {
  try {
    localStorage.setItem(EINK_KEY, on ? '1' : '0')
  } catch {
    // Storage unavailable (private mode): the toggle still works for this session.
  }
}

/** Bare written pages at 1:1 for the export script. Sets data-ready once fonts and images are loaded. */
function PrintView({ id }: { id: string }) {
  // 'libro' = whole book in reading order (front matter, index, dividers, written maps)
  const items: BookItem[] =
    id === 'libro'
      ? buildSequence(ENTRIES, { onlyWritten: true })
      : ENTRIES.filter((e) => e.map && (id === 'tutte' || e.id === id)).map((entry) => ({ type: 'map', id: entry.id, entry }))
  useEffect(() => {
    let cancelled = false
    const images = [...document.images].map((img) => img.decode().catch(() => undefined))
    Promise.all([document.fonts.ready, ...images])
      .catch(() => undefined)
      .then(() => {
        if (!cancelled) document.body.setAttribute('data-ready', '1')
      })
    return () => {
      cancelled = true
    }
  }, [])
  if (items.length === 0) return <p>Nessuna pagina scritta con id: {id}</p>
  return (
    <div className="print">
      {items.map((item) => (
        <BookItemView key={item.id} item={item} />
      ))}
    </div>
  )
}

export function App() {
  const [route, navigate] = useRoute()
  const [eink, setEink] = useState(readEinkPreference)
  const [zoom, setZoom] = useState<Zoom>('fit')

  if (route.view === 'print') return <PrintView id={route.id} />

  const firstWritten = ENTRIES.find((e) => e.map) ?? ENTRIES[0]
  const entry = route.view === 'page' ? (findEntry(route.id) ?? firstWritten) : firstWritten
  const openPage = (id: string) => navigate({ view: 'page', id })

  const toggleEink = () => {
    setEink((on) => {
      writeEinkPreference(!on)
      return !on
    })
  }

  return (
    <div className={`studio ${eink ? 'eink' : ''}`}>
      <TopBar route={route} navigate={navigate} eink={eink} onToggleEink={toggleEink} zoom={zoom} onZoom={setZoom} />
      <Sidebar currentId={route.view === 'page' ? entry.id : undefined} onSelect={openPage} />
      <main className="studio__main">
        {route.view === 'page' && <PageWithNav current={entry.id} onOpen={openPage} zoom={zoom} />}
        {route.view === 'grid' && <GridView chapter={route.chapter} onOpen={openPage} />}
        {route.view === 'plan' && <PlanView onOpenChapter={(chapter) => navigate({ view: 'grid', chapter })} />}
        {route.view === 'book' && <BookView onOpen={openPage} />}
      </main>
      {route.view === 'page' && <Inspector entry={entry} />}
    </div>
  )
}

function PageWithNav({ current, onOpen, zoom }: { current: string; onOpen: (id: string) => void; zoom: Zoom }) {
  const index = ENTRIES.findIndex((e) => e.id === current)
  const prev = ENTRIES[index - 1]
  const next = ENTRIES[index + 1]

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement) return
      if (event.key === 'ArrowLeft' && prev) onOpen(prev.id)
      if (event.key === 'ArrowRight' && next) onOpen(next.id)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next, onOpen])

  return (
    <div className="pageview">
      <PageCanvas entry={ENTRIES[index]} zoom={zoom} />
      <div className="pageview__nav">
        <button disabled={!prev} onClick={() => prev && onOpen(prev.id)} aria-label="Pagina precedente">
          ← {prev ? prev.title : ''}
        </button>
        <span className="mono">
          {index + 1} / {ENTRIES.length}
        </span>
        <button disabled={!next} onClick={() => next && onOpen(next.id)} aria-label="Pagina successiva">
          {next ? next.title : ''} →
        </button>
      </div>
    </div>
  )
}

interface TopBarProps {
  route: Route
  navigate: (route: Route) => void
  eink: boolean
  onToggleEink: () => void
  zoom: Zoom
  onZoom: (zoom: Zoom) => void
}

function TopBar({ route, navigate, eink, onToggleEink, zoom, onZoom }: TopBarProps) {
  const percent = Math.round((MAPS.length / ENTRIES.length) * 100)
  const tabs: { label: string; route: Route; active: boolean }[] = [
    { label: 'Pagina', route: { view: 'page' }, active: route.view === 'page' },
    { label: 'Griglia', route: { view: 'grid', chapter: CHAPTERS[0].id }, active: route.view === 'grid' },
    { label: 'Piano', route: { view: 'plan' }, active: route.view === 'plan' },
    { label: 'Libro', route: { view: 'book' }, active: route.view === 'book' },
  ]
  return (
    <header className="topbar">
      <div className="topbar__brand">
        <span className="topbar__logo">MV</span>
        <div>
          <strong>{BOOK_TITLE}</strong>
          <span>Studio di scrittura · Kindle layout fisso</span>
        </div>
      </div>

      <div className="segmented" role="tablist" aria-label="Vista">
        {tabs.map((tab) => (
          <button key={tab.label} role="tab" aria-selected={tab.active} className={tab.active ? 'is-active' : ''} onClick={() => navigate(tab.route)}>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="topbar__progress" title={`${MAPS.length} di ${ENTRIES.length} mappe scritte`}>
        <div className="progress">
          <span style={{ width: `${Math.max(percent, 1)}%` }} />
        </div>
        <span className="mono">
          {MAPS.length}/{ENTRIES.length}
        </span>
      </div>

      <div className="topbar__tools">
        {route.view === 'page' && (
          <div className="segmented" aria-label="Zoom">
            <button className={zoom === 'fit' ? 'is-active' : ''} onClick={() => onZoom('fit')}>
              Adatta
            </button>
            <button className={zoom === 1 ? 'is-active' : ''} onClick={() => onZoom(1)}>
              100%
            </button>
          </div>
        )}
        <button className={`toggle ${eink ? 'is-on' : ''}`} onClick={onToggleEink} aria-pressed={eink} title="Simula uno schermo Kindle in bianco e nero">
          <span className="toggle__knob" />
          E-ink
        </button>
      </div>
    </header>
  )
}
