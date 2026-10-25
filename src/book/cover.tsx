import { EcgStrip } from '../components/EcgStrip'

export function CoverPage() {
  return (
    <div className="page" style={{ background: '#fff', padding: '76px 64px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
        <h1 style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontSize: '58px',
          fontWeight: 800,
          color: '#17212f',
          margin: '0 0 16px',
          lineHeight: 1.1,
        }}>
          Mappe Visive<br />
          di Infermieristica
        </h1>

        <p style={{
          fontFamily: 'Barlow, sans-serif',
          fontSize: '24px',
          color: '#6b7280',
          margin: '0 0 32px',
          lineHeight: 1.4,
        }}>
          250 concetti essenziali per studenti e professionisti
        </p>

        <div style={{
          width: '100%',
          height: '180px',
          background: '#f9fafb',
          borderRadius: '12px',
          display: 'grid',
          placeItems: 'center',
          marginBottom: '32px',
        }}>
          <EcgStrip />
        </div>

        <p style={{
          fontFamily: 'Barlow, sans-serif',
          fontSize: '16px',
          color: '#374151',
          margin: 0,
          lineHeight: 1.5,
        }}>
          <strong>Guida pratica</strong> per concorsi, tirocinio e studio quotidiano<br />
          con ECG, tabelle, procedure e valori clinici verificati
        </p>

        <div style={{
          marginTop: 'auto',
          paddingTop: '24px',
          borderTop: '1px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '14px', color: '#6b7280' }}>
            Edizione 2025
          </span>
          <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 700, color: '#d7263d' }}>
            Kindle Edition
          </span>
        </div>
      </div>
    </div>
  )
}
