import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { Entry } from '../book/registry'
import { illustrationsOf } from '../book/registry'
import { hasIllustration } from '../components/Illustration'
import { BookPage } from '../templates/BookPage'

const PAGE_W = 768
const PAGE_H = 1024
const CANVAS_PADDING = 32

export type Zoom = 'fit' | 1

/** True when the page content is taller than the fixed page: it would be clipped in the ebook. */
function useOverflow(ref: React.RefObject<HTMLDivElement | null>, deps: unknown[]): boolean {
  const [overflow, setOverflow] = useState(false)
  useLayoutEffect(() => {
    const body = ref.current?.querySelector<HTMLElement>('.page-body')
    if (!body) {
      setOverflow(false)
      return
    }
    const blocks = [body, ...body.children] as HTMLElement[]
    const measure = () => setOverflow(blocks.some((el) => el.scrollHeight > el.clientHeight + 2))
    measure()
    document.fonts.ready.then(measure).catch(() => undefined)
    // Re-measure when an illustration loads or anything inside the page changes size.
    const observer = new ResizeObserver(measure)
    body.querySelectorAll<HTMLElement>('*').forEach((el) => observer.observe(el))
    body.addEventListener('load', measure, true)
    return () => {
      observer.disconnect()
      body.removeEventListener('load', measure, true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return overflow
}

export function PageCanvas({ entry, zoom }: { entry: Entry; zoom: Zoom }) {
  const outer = useRef<HTMLDivElement>(null)
  const pageRef = useRef<HTMLDivElement>(null)
  const [fitScale, setFitScale] = useState(1)

  useEffect(() => {
    const el = outer.current
    if (!el) return
    const observer = new ResizeObserver(([rect]) => {
      const { width, height } = rect.contentRect
      setFitScale(Math.min((width - CANVAS_PADDING) / PAGE_W, (height - CANVAS_PADDING) / PAGE_H))
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const scale = zoom === 'fit' ? Math.max(fitScale, 0.2) : 1
  const overflow = useOverflow(pageRef, [entry])

  return (
    <div className="canvas" ref={outer} data-zoom={zoom}>
      <div className="canvas__sizer" style={{ width: PAGE_W * scale, height: PAGE_H * scale }}>
        <div ref={pageRef} className="canvas__page" style={{ transform: `scale(${scale})` }}>
          <BookPage entry={entry} />
        </div>
      </div>
      {overflow && (
        <div className="canvas__warning" role="alert">
          Il contenuto supera la pagina: accorcia i testi o riduci gli elementi.
        </div>
      )}
    </div>
  )
}

export function Inspector({ entry }: { entry: Entry }) {
  const { map } = entry
  const illustrations = map ? illustrationsOf(map) : []
  const done = illustrations.filter((ill) => hasIllustration(ill.id)).length

  return (
    <aside className="inspector" aria-label="Scheda della pagina">
      <h2>Scheda</h2>
      <dl>
        <dt>Pagina</dt>
        <dd>
          {entry.pageNumber} · Cap. {entry.chapter.number}
        </dd>
        <dt>Stato</dt>
        <dd>
          <span className={`chip chip--${entry.status}`}>{entry.status}</span>
        </dd>
        <dt>Modello</dt>
        <dd>{map?.kind ?? '—'}</dd>
        <dt>File</dt>
        <dd className="mono">{map ? `src/content/maps/${entry.id}.ts` : 'non ancora scritto'}</dd>
      </dl>

      {map && (
        <>
          <h3>Fonti</h3>
          <ul className="inspector__list">
            {map.sources.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <h3>
            Illustrazioni {done}/{illustrations.length}
          </h3>
          <ul className="inspector__list inspector__prompts">
            {illustrations.map((ill) => (
              <li key={ill.id} className={hasIllustration(ill.id) ? 'is-done' : ''}>
                <span className="mono">{ill.id}</span>
                <span>{ill.prompt}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </aside>
  )
}
