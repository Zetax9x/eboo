import type { ReactNode } from 'react'
import type { IconName } from '../components/icons'
import { Illustration } from '../components/Illustration'

export interface MapPageProps {
  id: string
  title: string
  subtitle?: string
  icon?: IconName
  status?: 'bozza' | 'illustrata' | 'revisionata' | 'pronta'
  illustrationId?: string
  illustrationPrompt?: string
  sources?: string[]
  children: ReactNode
}

export function PageFrame({ id, title, subtitle, icon, status = 'bozza', illustrationId, illustrationPrompt, sources, children }: MapPageProps) {
  return (
    <div className="page" style={{ background: '#fff', padding: '76px 64px' }}>
      {/* Header */}
      <header style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
        {icon && (
          <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: '#f6f7f9', display: 'grid', placeItems: 'center' }}>
            {/* Icon component would go here */}
          </div>
        )}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '32px', fontWeight: 800, color: '#17212f', margin: 0, lineHeight: 1.2 }}>
            {title}
          </h1>
          {subtitle && (
            <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '16px', color: '#6b7280', margin: '8px 0 0' }}>
              {subtitle}
            </p>
          )}
        </div>
      </header>

      {/* Illustration placeholder */}
      {illustrationId && (
        <div style={{ marginBottom: '32px' }}>
          <Illustration data={{ id: illustrationId, alt: title }} />
        </div>
      )}

      {/* Main content */}
      <main style={{ fontFamily: 'Barlow, sans-serif', fontSize: '14px', lineHeight: 1.6, color: '#17212f' }}>
        {children}
      </main>

      {/* Sources footer */}
      {sources && sources.length > 0 && (
        <footer style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #e4e7ec' }}>
          <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 700, color: '#17212f', marginBottom: '12px' }}>
            Fonti di riferimento
          </h3>
          <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {sources.map((source, i) => (
              <li key={i} style={{ fontSize: '12px', color: '#6b7280' }}>{source}</li>
            ))}
          </ul>
        </footer>
      )}

      {/* Status indicator */}
      <div style={{ marginTop: '32px', padding: '12px 16px', background: '#f9fafb', borderRadius: '8px' }}>
        <span style={{ fontSize: '12px', color: '#6b7280' }}>Stato mappa:</span>
        <span className={`chip chip--${status}`} style={{ marginLeft: '8px' }}>{status}</span>
      </div>
    </div>
  )
}

export default PageFrame
