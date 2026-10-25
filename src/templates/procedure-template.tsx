import type { MapPageProps } from './PageFrame'
import { PageFrame } from './PageFrame'

/**
 * Template per mappe di tipo "procedure" (procedura infermieristica)
 * 
 * Struttura:
 * 1. Scopo e indicazioni
 * 2. Materiali necessari
 * 3. Procedura passo-passo
 * 4. Controindicazioni
 * 5. Monitoraggio post-procedura
 */

export function ProcedureTemplate(props: MapPageProps) {
  const { title, children } = props
  
  return (
    <PageFrame {...props}>
      {/* Scopo e indicazioni */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Scopo e indicazioni
        </h2>
        <p style={{ margin: 0, lineHeight: 1.6 }}>
          {children}
        </p>
      </section>

      {/* Materiali necessari */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Materiali necessari
        </h2>
        <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {/* Inserire qui i materiali */}
        </ul>
      </section>

      {/* Procedura passo-passo */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Procedura passo-passo
        </h2>
        <ol style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Inserire qui i passi */}
        </ol>
      </section>

      {/* Controindicazioni */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#d7263d', marginBottom: '12px' }}>
          Controindicazioni
        </h2>
        {/* Inserire qui le controindicazioni */}
      </section>

      {/* Monitoraggio post-procedura */}
      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
          Monitoraggio post-procedura
        </h2>
        {/* Inserire qui il monitoraggio */}
      </section>
    </PageFrame>
  )
}

export default ProcedureTemplate
