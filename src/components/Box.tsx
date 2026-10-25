import type { CSSProperties, ReactNode } from 'react'
import type { Accent, CheckKind } from '../book/types'
import { Icon, type IconName } from './icons'

/** Renders **bold** markers inside content strings without using innerHTML. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return <>{parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}</>
}

interface BoxProps {
  title: string
  icon: IconName
  /** Omit to inherit the chapter colour of the page. */
  accent?: Accent
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export function Box({ title, icon, accent, children, className = '', style }: BoxProps) {
  return (
    <section className={`box ${accent ? `acc-${accent}` : ''} ${className}`} style={style}>
      <header className="box__head">
        <Icon name={icon} size={17} />
        <span>{title}</span>
      </header>
      <div className="box__body">{children}</div>
    </section>
  )
}

export function Bullets({ items, style }: { items: readonly string[]; style?: CSSProperties }) {
  return (
    <ul className="bullets" style={style}>
      {items.map((item) => (
        <li key={item}>
          <Rich text={item} />
        </li>
      ))}
    </ul>
  )
}

const CHECK_ICON: Record<CheckKind, { name: IconName; className: string }> = {
  ok: { name: 'CircleCheck', className: 'mark-ok' },
  warn: { name: 'TriangleAlert', className: 'mark-warn' },
  no: { name: 'Ban', className: 'mark-no' },
  alert: { name: 'TriangleAlert', className: 'mark-no' },
}

export function CheckList({ items }: { items: readonly { text: string; kind: CheckKind }[] }) {
  return (
    <ul className="checklist">
      {items.map(({ text, kind }) => (
        <li key={text}>
          <Icon name={CHECK_ICON[kind].name} size={15} className={CHECK_ICON[kind].className} />
          <span>
            <Rich text={text} />
          </span>
        </li>
      ))}
    </ul>
  )
}

export function SectionBand({ title, icon, accent }: { title: string; icon: IconName; accent: Accent }) {
  return (
    <div className={`section-band acc-${accent}`}>
      <Icon name={icon} size={20} />
      {title}
    </div>
  )
}

export function KeyBand({ items, label = 'Da ricordare' }: { items: readonly string[]; label?: string }) {
  return (
    <div className="keyband">
      <div className="keyband__label">
        <Icon name="Lightbulb" size={18} />
        {label}
      </div>
      <div className="keyband__items">
        {items.map((item) => (
          <span key={item}>
            <Rich text={item} />
          </span>
        ))}
      </div>
    </div>
  )
}
