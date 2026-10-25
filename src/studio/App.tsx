import { useState, useMemo } from 'react'
import { OUTLINE, getChapterNumber, getChapterTitle, slugify } from '../book/outline'
import { InitialPages } from '../book/index'
import { EcgStrip } from '../components/EcgStrip'

// Helper per ottenere i dati della mappa corrente
function getCurrentMapData(id: string) {
  // Cerca in tutti i capitoli
  for (const [chapterId, mapTitles] of Object.entries(OUTLINE)) {
    const idx = mapTitles.findIndex(t => slugify(t) === id || t === id)
    if (idx !== -1) {
      return {
        id: id,
        title: mapTitles[idx],
        status: 'bozza' as const,
        chapter: getChapterNumber(chapterId as keyof typeof OUTLINE),
        type: 'overview',
        illustrationPrompt: '',
        sources: [],
      }
    }
  }
  return null
}

// Caricamento dinamico delle mappe
async function loadMapComponent(id: string) {
  try {
    const module = await import(`../content/maps/${id}`)
    // Supporta sia default export che named export
    if (module.default && typeof module.default === 'function') {
      return module.default
    }
    // Se non c'è default, cerca un componente con lo stesso nome del file
    const componentName = id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Page'
    if (module[componentName] && typeof module[componentName] === 'function') {
      return module[componentName]
    }
    // Fallback: usa il primo export function trovato
    for (const [key, value] of Object.entries(module)) {
      if (typeof value === 'function' && key !== 'default') {
        return value
      }
    }
    return null
  } catch (error) {
    // Mappa non esiste ancora
    console.warn(`Mappa ${id} non trovata:`, error)
    return null
  }
}

// Controlla se una mappa è stata scritta (file .tsx esiste)
function isMapWritten(id: string): boolean {
  try {
    // Vite permette di importare dinamicamente per verificare l'esistenza
    const module = import(`../content/maps/${id}`)
    return true
  } catch {
    return false
  }
}

export function App() {
  const [view, setView] = useState<'studio' | 'plan' | 'grid'>('studio')
  const [currentId, setCurrentId] = useState<string>('ritmo-sinuale')
  const [zoom, setZoom] = useState(1)
  const [MapComponent, setMapComponent] = useState<any>(null)

  const currentMap = useMemo(() => getCurrentMapData(currentId), [currentId])
  const chapterNumber = useMemo(() => getChapterNumber(currentId as keyof typeof OUTLINE), [currentId])

  // Carica la mappa quando cambia currentId
  useMemo(() => {
    let cancelled = false
    loadMapComponent(currentId).then((component) => {
      if (!cancelled && component && typeof component === 'function') {
        setMapComponent(component)
      } else {
        setMapComponent(null)
      }
    })
    return () => { cancelled = true }
  }, [currentId])

  // Calcola la percentuale di mappe scritte
  const progress = useMemo(() => {
    let total = 0
    let written = 0
    
    for (const mapTitles of Object.values(OUTLINE)) {
      for (const title of mapTitles) {
        total++
        const id = slugify(title)
        // Controlla se il file esiste importando dinamicamente
        try {
          import(`../content/maps/${id}`).then(() => {
            written++
          }).catch(() => {
            // non scritta
          })
        } catch {
          // non scritta
        }
      }
    }
    
    return total > 0 ? Math.round((written / total) * 100) : 0
  }, [currentId])

  function renderPage() {
    if (currentId === 'copertina') return <InitialPages />
    if (currentId === 'frontespizio') return <InitialPages />
    if (currentId === 'avvertenze') return <InitialPages />
    
    // Se c'è un componente mappa caricato, usalo
    if (MapComponent && typeof MapComponent === 'function') {
      return <MapComponent />
    }

    // Placeholder per mappe non ancora scritte
    return (
      <div className="page" style={{ background: '#fff', padding: '76px 64px' }}>
        <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '32px', fontWeight: 800, color: '#17212f' }}>
          {currentMap?.title}
        </h1>
        <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '16px', color: '#6b7280', marginTop: '16px' }}>
          Stato: <span className={`chip chip--${currentMap?.status}`}>{currentMap?.status}</span>
        </p>
        <div style={{ marginTop: '32px', padding: '24px', background: '#f9fafb', borderRadius: '8px' }}>
          <p style={{ margin: 0, color: '#6b7280' }}>
            Mappa in lavorazione. Utilizzare lo studio per scrivere il contenuto.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="studio">
      {/* Top bar */}
      <header className="topbar">
        <div className="topbar__brand">
          <div className="topbar__logo">MV</div>
          <strong>Mappe Visive</strong>
          <span>Infermieristica</span>
        </div>

        <div className="segmented">
          <button 
            className={view === 'studio' ? 'is-active' : ''}
            onClick={() => setView('studio')}
          >Studio</button>
          <button 
            className={view === 'plan' ? 'is-active' : ''}
            onClick={() => setView('plan')}
          >Piano</button>
          <button 
            className={view === 'grid' ? 'is-active' : ''}
            onClick={() => setView('grid')}
          >Griglia</button>
        </div>

        <div className="topbar__progress">
          <span>{progress}% completato</span>
          <div className="progress">
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="topbar__tools">
          <button onClick={() => setZoom(z => Math.max(0.5, z - 0.1))}>-</button>
          <span>{Math.round(zoom * 100)}%</span>
          <button onClick={() => setZoom(z => Math.min(2, z + 0.1))}>+</button>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar__search">
          <span>🔍</span>
          <input placeholder="Cerca mappa..." />
        </div>
        <nav className="sidebar__scroll">
          {Object.entries(OUTLINE).map(([chapterId, mapTitles]) => (
            mapTitles.map((title, i) => {
              const id = slugify(title)
              return (
                <button
                  key={id}
                  className={`entry ${id === currentId ? 'is-current' : ''} ${false ? 'is-written' : ''}`}
                  onClick={() => setCurrentId(id)}
                >
                  <span className="entry__num">{String(i + 1).padStart(3, '0')}</span>
                  <span className="entry__title">{title}</span>
                  <span className={`dot dot--bozza`} />
                </button>
              )
            })
          ))}
        </nav>
      </aside>

      {/* Main canvas */}
      <main className="studio__main">
        {view === 'plan' ? (
          <div className="plan">
            <h1>Piano di Lavoro</h1>
            <div className="plan__stats">
              <div className="stat">
                <strong>{Object.values(OUTLINE).reduce((acc, arr) => acc + arr.length, 0)}</strong>
                <span>Totale mappe</span>
              </div>
              <div className="stat">
                <strong>{progress}%</strong>
                <span>Completamento</span>
              </div>
            </div>
          </div>
        ) : view === 'grid' ? (
          <div className="grid-view">
            {Object.entries(OUTLINE).map(([chapterId, mapTitles]) => (
              mapTitles.map((title, i) => {
                const id = slugify(title)
                return (
                  <button key={id} className="thumb" onClick={() => setCurrentId(id)}>
                    <div className="thumb__frame" style={{ width: 170, height: 226 }}>
                      <div style={{ padding: '16px', background: '#fff' }}>
                        <h3 style={{ margin: 0, fontSize: '14px', fontFamily: 'Barlow Condensed' }}>{title}</h3>
                        <span className="chip chip--bozza" style={{ marginTop: '8px' }}>bozza</span>
                      </div>
                    </div>
                    <span className="thumb__label">
                      <span>{String(i + 1).padStart(3, '0')}</span>
                      {title}
                    </span>
                  </button>
                )
              })
            ))}
          </div>
        ) : (
          <div className="pageview">
            <div className="canvas" data-zoom={zoom}>
              <div className="canvas__sizer" style={{ transform: `scale(${zoom})` }}>
                {renderPage()}
              </div>
            </div>
            <nav className="pageview__nav">
              <button 
                disabled={!chapterNumber || chapterNumber === 1}
                onClick={() => {
                  // Trova mappa precedente nello stesso capitolo
                  const currentChapterId = Object.keys(OUTLINE).find(k => getChapterNumber(k as keyof typeof OUTLINE) === chapterNumber)
                  if (currentChapterId) {
                    const mapTitles = OUTLINE[currentChapterId as keyof typeof OUTLINE]
                    const idx = mapTitles.findIndex(t => slugify(t) === currentId)
                    if (idx > 0) {
                      setCurrentId(slugify(mapTitles[idx - 1]))
                    }
                  }
                }}
              >← Precedente</button>
              <span>{currentMap?.title}</span>
              <button 
                disabled={chapterNumber === Object.values(OUTLINE).reduce((acc, arr) => acc + arr.length, 0)}
                onClick={() => {
                  // Trova mappa successiva nello stesso capitolo
                  const currentChapterId = Object.keys(OUTLINE).find(k => getChapterNumber(k as keyof typeof OUTLINE) === chapterNumber)
                  if (currentChapterId) {
                    const mapTitles = OUTLINE[currentChapterId as keyof typeof OUTLINE]
                    const idx = mapTitles.findIndex(t => slugify(t) === currentId)
                    if (idx < mapTitles.length - 1) {
                      setCurrentId(slugify(mapTitles[idx + 1]))
                    }
                  }
                }}
              >Successivo →</button>
            </nav>
          </div>
        )}
      </main>

      {/* Inspector */}
      <aside className="inspector">
        <h2>Dettagli Mappa</h2>
        {currentMap && (
          <>
            <dl>
              <dt>ID</dt>
              <dd className="mono">{currentMap.id}</dd>
              <dt>Stato</dt>
              <dd><span className={`chip chip--${currentMap.status}`}>{currentMap.status}</span></dd>
              <dt>Tipo</dt>
              <dd>{currentMap.type}</dd>
              <dt>Capitolo</dt>
              <dd>{currentMap.chapter || '-'}</dd>
            </dl>

            <h3>Prompt Illustrazione</h3>
            {currentMap.illustrationPrompt ? (
              <ul className="inspector__prompts">
                <li className="is-done mono">{currentMap.illustrationPrompt}</li>
              </ul>
            ) : (
              <p style={{ color: '#6b7280' }}>Nessun prompt definito</p>
            )}

            <h3>Sources</h3>
            {currentMap.sources?.length ? (
              <ul className="inspector__list">
                {currentMap.sources.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            ) : (
              <p style={{ color: '#6b7280' }}>Nessuna fonte</p>
            )}
          </>
        )}
      </aside>
    </div>
  )
}
