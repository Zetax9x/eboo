import type { PageProps } from './types'

export function TitlePage() {
  return (
    <div className="page" style={{ background: '#fff', padding: '76px 64px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '38px', fontWeight: 800, color: '#17212f', lineHeight: 1.1 }}>
          Mappe Visive di<br />Infermieristica
        </div>
        
        <div style={{ fontFamily: 'Barlow, sans-serif', fontSize: '16px', color: '#6b7280' }}>
          Guida visiva per studenti e professionisti
        </div>

        <div style={{ width: '100%', borderTop: '2px solid #e4e7ec', margin: '32px 0' }} />

        <div style={{ fontFamily: 'Barlow, sans-serif', fontSize: '14px', color: '#17212f' }}>
          <strong>Seconda Edizione</strong><br />
          Aggiornata con NANDA-I 2024-2026 e NOC/NIC 2025
        </div>

        <div style={{ width: '100%', borderTop: '2px solid #e4e7ec', margin: '32px 0' }} />

        <div style={{ fontFamily: 'Barlow, sans-serif', fontSize: '12px', color: '#6b7280' }}>
          Editore: MV Publishing<br />
          ISBN: 979-1234567890<br />
          © 2025 Tutti i diritti riservati<br /><br />
          
          <strong>Autore:</strong><br />
          Team di Infermieri Professionisti<br /><br />
          
          <strong>Licenza:</strong><br />
          Uso personale consentito. Riproduzione vietata senza autorizzazione scritta.
        </div>

        <div style={{ fontFamily: 'Barlow, sans-serif', fontSize: '11px', color: '#9ca3af', marginTop: '16px' }}>
          Realizzato con Vite + React + TypeScript<br />
          Layout fisso per Amazon Kindle
        </div>
      </div>
    </div>
  )
}

export default TitlePage
