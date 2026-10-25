// URL-as-state: every view is addressable, so a page can be bookmarked or opened by the export script.
//   #/pagina/<id>   #/griglia/<chapter>   #/piano   #/stampa/<id>|tutte

import { useEffect, useState } from 'react'
import type { ChapterId } from '../book/types'

export type Route =
  | { view: 'page'; id?: string }
  | { view: 'grid'; chapter?: ChapterId }
  | { view: 'plan' }
  | { view: 'print'; id: string }

function safeDecode(part: string): string {
  try {
    return decodeURIComponent(part)
  } catch {
    return part // malformed escape like "%": keep raw instead of crashing the app
  }
}

export function parseHash(hash: string): Route {
  const [section, param] = hash.replace(/^#\/?/, '').split('/').map(safeDecode)
  switch (section) {
    case 'griglia':
      return { view: 'grid', chapter: (param || undefined) as ChapterId | undefined }
    case 'piano':
      return { view: 'plan' }
    case 'stampa':
      return { view: 'print', id: param || 'tutte' }
    default:
      return { view: 'page', id: param || undefined }
  }
}

export function toHash(route: Route): string {
  switch (route.view) {
    case 'grid':
      return `#/griglia/${route.chapter ?? ''}`
    case 'plan':
      return '#/piano'
    case 'print':
      return `#/stampa/${route.id}`
    case 'page':
      return `#/pagina/${route.id ?? ''}`
  }
}

export function useRoute(): [Route, (route: Route) => void] {
  const [route, setRoute] = useState(() => parseHash(window.location.hash))
  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  const navigate = (next: Route) => {
    window.location.hash = toHash(next)
  }
  return [route, navigate]
}
