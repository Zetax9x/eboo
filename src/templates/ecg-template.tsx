import type { MapPageProps } from './PageFrame'
import { PageFrame } from './PageFrame'
import { EcgStrip } from '../components/EcgStrip'

/**
 * Template per mappe di tipo "ecg" (tracciati ECG)
 * 
 * Struttura:
 * 1. Descrizione del ritmo/alterazione
 * 2. Caratteristiche ECG principali
 * 3. Differenziali diagnostici
 * 4. Implicazioni cliniche
 * 5. Tracciato di esempio
 */

export function EcgTemplate(props: MapPageProps) {
  const { title, children } = props
  
  return (
    <PageFrame {...props}>
      {/* Descrizione del ritmo/alterazione */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Descrizione del ritmo/alterazione
        </h2>
        <p style={{ margin: 0, lineHeight: 1.6 }}>
          {children}
        </p>
      </section>

      {/* Caratteristiche ECG principali */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Caratteristiche ECG principali
        </h2>
        {/* Inserire qui le caratteristiche */}
      </section>

      {/* Differenziali diagnostici */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Differenziali diagnostici
        </h2>
        {/* Inserire qui i differenziali */}
      </section>

      {/* Implicazioni cliniche */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#d7263d', marginBottom: '12px' }}>
          Implicazioni cliniche
        </h2>
        {/* Inserire qui le implicazioni */}
      </section>

      {/* Tracciato di esempio */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Tracciato di esempio
        </h2>
        <div style={{ background: '#fff', padding: '16px', borderRadius: '8px' }}>
          <EcgStrip />
        </div>
      </section>
    </PageFrame>
  )
}

export default EcgTemplate
