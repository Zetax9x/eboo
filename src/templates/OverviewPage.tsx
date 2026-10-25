import type { OverviewMap } from '../book/types'
import { Box, Bullets, KeyBand } from '../components/Box'
import { Illustration } from '../components/Illustration'

export function OverviewPage({ map }: { map: OverviewMap }) {
  return (
    <>
      <div className="row row-2 grow" style={{ gridAutoRows: '1fr' }}>
        {map.blocks.map((block) => (
          <Box key={block.title} title={block.title} icon={block.icon} accent={block.accent}>
            <div style={{ display: 'grid', gridTemplateColumns: block.inset ? '1.55fr 1fr' : '1fr', gap: 6, height: 118 }}>
              <Illustration data={block.illustration} iconSize={44} />
              {block.inset && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 3, minHeight: 0 }}>
                  <div className="inset-label">{block.inset.label}</div>
                  <Illustration data={block.inset.illustration} style={{ flex: 1, background: '#fff' }} iconSize={26} />
                </div>
              )}
            </div>
            <Bullets items={block.bullets} />
          </Box>
        ))}
      </div>
      <KeyBand items={map.keyPoints} />
    </>
  )
}
