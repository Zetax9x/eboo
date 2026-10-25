import type { CSSProperties } from 'react'
import type { Illustration as IllustrationData } from '../book/types'
import { Icon } from './icons'

// Generated images live in src/assets/illustrations/<illustration-id>.(webp|png).
// Globbing them at build time means: no 404s for missing files, and a new image appears via HMR as soon as it is saved.
const files = import.meta.glob<string>('../assets/illustrations/*.{webp,png,jpg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const urlById = new Map(
  Object.entries(files).map(([path, url]) => [path.replace(/^.*\/|\.[a-z]+$/g, ''), url]),
)

export function hasIllustration(id: string): boolean {
  return urlById.has(id)
}

interface Props {
  data: IllustrationData
  style?: CSSProperties
  iconSize?: number
}

export function Illustration({ data, style, iconSize = 34 }: Props) {
  const url = urlById.get(data.id)
  if (url) {
    return (
      <div className="illus illus--filled" style={style}>
        <img src={url} alt={data.alt} />
      </div>
    )
  }
  return (
    <div className="illus" style={style} title={data.prompt} data-illustration-id={data.id}>
      <div className="illus__ph">
        <Icon name={data.icon ?? 'Eye'} size={iconSize} />
        <span>{data.alt}</span>
      </div>
    </div>
  )
}
