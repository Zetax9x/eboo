import type { PageProps } from './types'

export function WarningsPage() {
  return (
    <div className="page" style={{ background: '#fff', padding: '76px 64px' }}>
      <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '28px', fontWeight: 800, color: '#d7263d', marginBottom: '24px' }}>
        Avvertenze Mediche
      </h1>

      <div style={{ fontFamily: 'Barlow, sans-serif', fontSize: '14px', lineHeight: 1.6, color: '#17212f' }}>
        <p style={{ marginBottom: '16px' }}>
          <strong>Questo libro è uno strumento educativo</strong> e non sostituisce il giudizio clinico professionale. 
          I contenuti sono basati su linee guida internazionali e testi di riferimento, ma ogni situazione clinica 
          richiede una valutazione individuale da parte di personale qualificato.
        </p>

        <div style={{ background: '#fef2f2', borderLeft: '4px solid #d7263d', padding: '16px', marginBottom: '16px' }}>
          <strong>⚠️ Non usare questo libro per prendere decisioni cliniche in situazioni reali.</strong><br />
          Consultare sempre le linee guida ufficiali e il personale sanitario qualificato.
        </div>

        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginTop: '32px' }}>
          Verifica delle informazioni
        </h2>

        <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
          <li style={{ marginBottom: '8px' }}>
            I valori di laboratorio e le soglie cliniche devono essere verificati con le fonti ufficiali
          </li>
          <li style={{ marginBottom: '8px' }}>
            Le procedure descritte seguono protocolli standard ma possono variare per istituzione
          </li>
          <li style={{ marginBottom: '8px' }}>
            I farmaci e i dosaggi devono essere confermati con le schede tecniche aggiornate
          </li>
        </ul>

        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginTop: '32px' }}>
          Fonti di riferimento
        </h2>

        <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
          <li style={{ marginBottom: '8px' }}>NANDA-I International (diagnosi infermieristiche)</li>
          <li style={{ marginBottom: '8px' }}>NOC & NIC (outcome e interventi)</li>
          <li style={{ marginBottom: '8px' }}>Linee guida SIN, SIMLII, AIFA</li>
          <li style={{ marginBottom: '8px' }}>Testi di riferimento accreditati</li>
        </ul>

        <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '12px', color: '#6b7280', marginTop: '32px' }}>
          Ultima revisione: 2025<br />
          Per segnalazioni o aggiornamenti: info@mv-publishing.it
        </p>
      </div>
    </div>
  )
}

export default WarningsPage
