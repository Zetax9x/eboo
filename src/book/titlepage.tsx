export function TitlePage() {
  return (
    <div className="page" style={{ background: '#fff', padding: '76px 64px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
        <h1 style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontSize: '52px',
          fontWeight: 800,
          color: '#17212f',
          margin: '0 0 12px',
          lineHeight: 1.1,
        }}>
          Mappe Visive di Infermieristica
        </h1>

        <p style={{
          fontFamily: 'Barlow, sans-serif',
          fontSize: '20px',
          color: '#6b7280',
          margin: '0 0 48px',
          lineHeight: 1.5,
        }}>
          Guida pratica per studenti e professionisti
        </p>

        <div style={{
          fontFamily: 'Barlow, sans-serif',
          fontSize: '16px',
          color: '#374151',
          margin: '0 0 24px',
          lineHeight: 1.6,
        }}>
          <strong>Autore:</strong><br />
          Team di Infermieri Professionisti<br /><br />

          <strong>Edizione:</strong><br />
          Prima edizione — 2025<br /><br />

          <strong>ISBN:</strong><br />
          978-XX-XXXXXXX-X (in attesa)<br /><br />

          <strong>Licenza:</strong><br />
          Tutti i diritti riservati. Uso personale consentito.<br />
          Riproduzione vietata senza autorizzazione scritta.
        </div>

        <div style={{
          marginTop: 'auto',
          paddingTop: '24px',
          borderTop: '1px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '14px', color: '#6b7280' }}>
            MappeVisive.it
          </span>
          <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 700, color: '#d7263d' }}>
            Kindle Edition
          </span>
        </div>
      </div>
    </div>
  )
}
