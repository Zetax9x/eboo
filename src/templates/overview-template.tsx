import type { MapPageProps } from './PageFrame'
import { PageFrame } from './PageFrame'

/**
 * Template per mappe di tipo "overview" (panoramica concettuale)
 * 
 * Struttura:
 * 1. Definizione chiara del concetto
 * 2. Elementi chiave in elenco
 * 3. Relazioni con altri concetti
 * 4. Note cliniche essenziali
 */

export function OverviewTemplate(props: MapPageProps) {
  const { title, children } = props
  
  return (
    <PageFrame {...props}>
      {/* Definizione del concetto */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Definizione
        </h2>
        <p style={{ margin: 0, lineHeight: 1.6 }}>
          {children}
        </p>
      </section>

      {/* Elementi chiave */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Elementi chiave
        </h2>
        <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {/* Inserire qui gli elementi chiave */}
        </ul>
      </section>

      {/* Relazioni concettuali */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Relazioni con altri concetti
        </h2>
        {/* Inserire qui le relazioni */}
      </section>

      {/* Note cliniche */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Note cliniche
        </h2>
        {/* Inserire qui le note */}
      </section>
    </PageFrame>
  )
}

export default OverviewTemplate
