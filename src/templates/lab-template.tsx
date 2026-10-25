import type { MapPageProps } from './PageFrame'
import { PageFrame } from './PageFrame'

/**
 * Template per mappe di tipo "lab" (esami di laboratorio)
 * 
 * Struttura:
 * 1. Descrizione dell'esame
 * 2. Valori normali
 * 3. Alterazioni patologiche
 * 4. Interpretazione clinica
 * 5. Precauzioni prelievo
 */

export function LabTemplate(props: MapPageProps) {
  const { title, children } = props
  
  return (
    <PageFrame {...props}>
      {/* Descrizione dell'esame */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Descrizione dell'esame
        </h2>
        <p style={{ margin: 0, lineHeight: 1.6 }}>
          {children}
        </p>
      </section>

      {/* Valori normali */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Valori normali
        </h2>
        {/* Inserire qui i valori normali */}
      </section>

      {/* Alterazioni patologiche */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#d7263d', marginBottom: '12px' }}>
          Alterazioni patologiche
        </h2>
        {/* Inserire qui le alterazioni */}
      </section>

      {/* Interpretazione clinica */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Interpretazione clinica
        </h2>
        {/* Inserire qui l'interpretazione */}
      </section>

      {/* Precauzioni prelievo */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Precauzioni prelievo
        </h2>
        {/* Inserire qui le precauzioni */}
      </section>
    </PageFrame>
  )
}

export default LabTemplate
