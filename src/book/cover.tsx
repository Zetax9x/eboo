import type { PageProps } from './types'

export function CoverPage() {
  return (
    <div className="page" style={{ background: '#17212f', padding: '76px 64px', minHeight: '1024px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '52px', fontWeight: 800, color: '#fff', lineHeight: 1.1, textAlign: 'center', marginBottom: '24px' }}>
        Mappe Visive di<br />Infermieristica
      </div>
      
      <div style={{ fontFamily: 'Barlow, sans-serif', fontSize: '20px', color: '#ec7a12', textAlign: 'center', marginBottom: '32px' }}>
        Guida visiva per studenti e professionisti
      </div>

      <div style={{ width: '100%', borderTop: '3px solid #ec7a12', margin: '48px 0' }} />

      <div style={{ fontFamily: 'Barlow, sans-serif', fontSize: '16px', color: '#d5d9df', textAlign: 'center' }}>
        Seconda Edizione<br />
        Aggiornata con NANDA-I 2024-2026 e NOC/NIC 2025
      </div>

      <div style={{ fontFamily: 'Barlow, sans-serif', fontSize: '12px', color: '#9ca3af', marginTop: 'auto', marginBottom: '64px' }}>
        MV Publishing — 2025
      </div>
    </div>
  )
}

export default CoverPage
