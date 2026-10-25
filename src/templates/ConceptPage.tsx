import type { ConceptMap } from '../book/types'
import { Box, Bullets, CheckList, KeyBand, Rich } from '../components/Box'
import { Illustration } from '../components/Illustration'

export function ConceptPage({ map }: { map: ConceptMap }) {
  const hasHero = Boolean(map.intro || map.illustration)
  return (
    <>
      {hasHero && (
        <div className="row" style={{ gridTemplateColumns: map.illustration ? '1fr 210px' : '1fr' }}>
          {map.intro && (
            <div className="intro">
              <Rich text={map.intro} />
            </div>
          )}
          {map.illustration && <Illustration data={map.illustration} style={{ height: 112 }} iconSize={44} />}
        </div>
      )}
      <div className="row grow" style={{ gridTemplateColumns: `repeat(${map.columns}, 1fr)` }}>
        {map.blocks.map((block) => (
          <Box
            key={block.title}
            title={block.title}
            icon={block.icon}
            accent={block.accent}
            style={block.span ? { gridColumn: `span ${block.span}` } : undefined}
          >
            {block.text && (
              <p>
                <Rich text={block.text} />
              </p>
            )}
            {block.illustration && <Illustration data={block.illustration} style={{ height: 84 }} />}
            {block.items && <Bullets items={block.items} />}
            {block.checks && <CheckList items={block.checks} />}
          </Box>
        ))}
      </div>
      {map.keyPoints && <KeyBand items={map.keyPoints} />}
    </>
  )
}
