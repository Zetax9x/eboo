export function WarningsPage() {
  return (
    <div className="page" style={{ background: '#fff', padding: '76px 64px' }}>
      <h1 style={{
        fontFamily: 'Barlow Condensed, sans-serif',
        fontSize: '32px',
        fontWeight: 800,
        color: '#d7263d',
        margin: '0 0 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <span style={{ fontSize: '48px' }}>⚠️</span>
        Avvertenze Mediche
      </h1>

      <div style={{ fontFamily: 'Barlow, sans-serif', fontSize: '16px', color: '#374151', lineHeight: 1.7 }}>
        <p><strong>Questo libro non è un sostituto della formazione clinica.</strong></p>

        <p>Le informazioni contenute in questa pubblicazione sono fornite a scopo educativo e di studio per studenti di infermieristica, tirocinanti e professionisti che si preparano ai concorsi. Non devono essere considerate come consulenza medica professionale né utilizzate per prendere decisioni cliniche su pazienti reali.</p>

        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginTop: '24px' }}>
          Limitazioni d'uso
        </h2>
        <ul style={{ margin: '16px 0', paddingLeft: '24px' }}>
          <li>Non utilizzare per diagnosi o trattamento di pazienti</li>
          <li>Verificare sempre i protocolli locali e le linee guida aggiornate</li>
          <li>I valori di riferimento possono variare tra laboratori e istituzioni</li>
          <li>In caso di emergenza, contattare immediatamente il personale sanitario qualificato</li>
        </ul>

        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginTop: '24px' }}>
          Verifica delle fonti
        </h2>
        <p>Ogni mappa include riferimenti a linee guida e testi verificabili. Si raccomanda di consultare le fonti primarie per applicazioni cliniche reali.</p>

        <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: 700, color: '#17212f', marginTop: '24px' }}>
          Aggiornamenti
        </h2>
        <p>I protocolli infermieristici e i valori di laboratorio sono soggetti a revisione. Consultare le linee guida più recenti per applicazioni cliniche.</p>

        <div style={{
          marginTop: '32px',
          padding: '16px',
          background: '#fef2f2',
          borderLeft: '4px solid #d7263d',
          borderRadius: '0 8px 8px 0',
        }}>
          <p style={{ margin: 0, fontWeight: 600, color: '#991b1b' }}>
            In caso di dubbio clinico, consultare sempre un professionista sanitario qualificato.
          </p>
        </div>
      </div>
    </div>
  )
}
