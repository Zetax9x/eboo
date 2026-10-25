import type { MapPageProps } from './PageFrame'
import { PageFrame } from './PageFrame'

/**
 * Template per mappe di tipo "disease" (patologia)
 * 
 * Struttura:
 * 1. Definizione e classificazione
 * 2. Epidemiologia (se rilevante)
 * 3. Fisiopatologia essenziale
 * 4. Segni e sintomi principali
 * 5. Complicanze possibili
 */

export function DiseaseTemplate(props: MapPageProps) {
  const { title, children } = props
  
  return (
    <PageFrame {...props}>
      {/* Definizione e classificazione */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Definizione e classificazione
        </h2>
        <p style={{ margin: 0, lineHeight: 1.6 }}>
          {children}
        </p>
      </section>

      {/* Epidemiologia */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Epidemiologia
        </h2>
        {/* Inserire qui i dati epidemiologici */}
      </section>

      {/* Fisiopatologia */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Fisiopatologia essenziale
        </h2>
        {/* Inserire qui la fisiopatologia */}
      </section>

      {/* Segni e sintomi */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Segni e sintomi principali
        </h2>
        <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {/* Inserire qui i segni e sintomi */}
        </ul>
      </section>

      {/* Complicanze */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Complicanze possibili
        </h2>
        {/* Inserire qui le complicanze */}
      </section>
    </PageFrame>
  )
}

export default DiseaseTemplate
