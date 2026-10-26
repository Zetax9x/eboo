// Non-map pages of the book: cover, title page, notices, how-to, index pages, chapter dividers.

import type { ReactNode } from 'react'
import type { Chapter } from '../book/chapters'
import { BOOK_META } from '../book/meta'
import type { Entry } from '../book/registry'
import type { BookItem, FrontId, IndexLine } from '../book/sequence'
import { Box, Bullets, CheckList, KeyBand } from '../components/Box'
import { Icon, type IconName } from '../components/icons'
import { BookPage } from '../templates/BookPage'
import coverArt from '../assets/copertina-sfondo.png'

export function BookItemView({ item }: { item: BookItem }) {
  switch (item.type) {
    case 'map':
      return <BookPage entry={item.entry} />
    case 'divider':
      return <ChapterDivider chapter={item.chapter} entries={item.entries} id={item.id} />
    case 'index':
      return <IndexPage id={item.id} part={item.part} parts={item.parts} lines={item.lines} />
    case 'front':
      return <FrontPage id={item.id} />
  }
}

function FrontPage({ id }: { id: FrontId }) {
  switch (id) {
    case 'copertina':
      return <CoverPage />
    case 'frontespizio':
      return <TitlePage />
    case 'avvertenze':
      return <NoticePage />
    case 'come-usare':
      return <HowToPage />
  }
}

function SimplePage({ id, title, icon, children }: { id: string; title: string; icon: IconName; children: ReactNode }) {
  return (
    <article className="page front acc-navy" data-page-id={id}>
      <header className="front__head">
        <Icon name={icon} size={30} />
        <h1>{title}</h1>
      </header>
      <div className="page-body">{children}</div>
    </article>
  )
}

// ---------- Cover ----------
/** Id of the Amazon KDP cover: same design as the inner cover, at 1600×2560 (1:1.6). */
export const KDP_COVER_ID = 'copertina-kdp'

/** Cover for the Kindle store (exported on its own with `npm run export -- copertina-kdp`). */
export function KdpCover() {
  return <CoverPage kdp />
}

/** Cover: AI artwork (no text) as background, all text drawn here so it is always sharp and correct. */
function CoverPage({ kdp = false }: { kdp?: boolean }) {
  return (
    <article
      className={`page front front--cover front--art ${kdp ? 'front--kdp' : ''}`}
      data-page-id={kdp ? KDP_COVER_ID : 'copertina'}
      style={{ ['--cover-art' as string]: `url(${coverArt})` }}
    >
      {/* Title in the calm top of the artwork, the rest in the calm bottom: the heart stays visible. */}
      <h1 className="cover__title">
        <span>Mappe visive</span>
        <span className="cover__accent">di infermieristica</span>
      </h1>
      <div className="cover__bottom">
        <span className="cover__count">250 mappe illustrate</span>
        <p className="cover__subtitle">Per lo studio, il tirocinio e i concorsi pubblici</p>
        <footer className="cover__foot">
          <span>10 capitoli · {BOOK_META.edition.toLowerCase()} {BOOK_META.year}</span>
          <strong>{BOOK_META.author}</strong>
        </footer>
      </div>
    </article>
  )
}

// ---------- Title page ----------
function TitlePage() {
  return (
    <article className="page front front--title" data-page-id="frontespizio">
      <div className="title__main">
        <span className="title__author">{BOOK_META.author}</span>
        <h1>{BOOK_META.title}</h1>
        <p>{BOOK_META.subtitle}</p>
        <span className="title__edition">
          {BOOK_META.edition} · {BOOK_META.year}
        </span>
      </div>
      <div className="title__legal">
        <p>
          © {BOOK_META.year} {BOOK_META.author}. Tutti i diritti riservati.
        </p>
        <p>Nessuna parte di quest’opera può essere riprodotta o diffusa, con qualsiasi mezzo, senza l’autorizzazione scritta dell’autore.</p>
        <p>Testi e illustrazioni sono stati realizzati con il supporto di strumenti di intelligenza artificiale.</p>
        <p>Pubblicato in modo indipendente.</p>
      </div>
    </article>
  )
}

// ---------- Notices ----------
function NoticePage() {
  return (
    <SimplePage id="avvertenze" title="Avvertenze" icon="ShieldAlert">
      <div className="row row-2 grow">
        <Box title="Finalità" icon="BookOpen" accent="blue">
          <Bullets
            items={[
              'Materiale **didattico e di ripasso** per studenti e professionisti',
              'Sintesi visive: non sostituiscono i **libri di testo**',
              'Il modulo concorsi **non è materiale ufficiale** di alcun ente',
            ]}
          />
        </Box>
        <Box title="Non sostituisce" icon="Ban" accent="red">
          <Bullets
            items={[
              'La **formazione** professionale',
              'I **protocolli** e le procedure aziendali',
              'Le **linee guida** e le **prescrizioni** mediche',
              'Il **giudizio clinico** del professionista',
            ]}
          />
        </Box>
        <Box title="Farmaci e dosaggi" icon="Pill" accent="green">
          <Bullets
            items={[
              'Dosi e velocità sono **indicative**',
              'Verificare sempre **prescrizione**, **scheda tecnica** (RCP) e protocolli locali',
              'In caso di dubbio: **chiedere** prima di somministrare',
            ]}
          />
        </Box>
        <Box title="Valori di laboratorio" icon="FlaskConical" accent="teal">
          <Bullets
            items={[
              'Range **indicativi** per l’adulto',
              'Fanno fede i valori di riferimento del **proprio laboratorio**',
              'Valutare sempre il **quadro clinico**, non il singolo numero',
            ]}
          />
        </Box>
        <Box title="Aggiornamento" icon="RefreshCw" accent="purple">
          <Bullets
            items={[
              `Contenuti allineati alle fonti citate in ogni mappa alla data dell’edizione (${BOOK_META.year})`,
              'Linee guida e norme **cambiano**: verificare le versioni più recenti',
            ]}
          />
        </Box>
        <Box title="Responsabilità" icon="Scale" accent="orange">
          <Bullets
            items={[
              'Autore ed editore non rispondono di danni derivanti da un **uso improprio** dei contenuti',
              BOOK_META.contactEmail
                ? `Segnalazioni di errori: **${BOOK_META.contactEmail}**`
                : 'Le segnalazioni di errori sono benvenute e migliorano le edizioni successive',
            ]}
          />
        </Box>
      </div>
    </SimplePage>
  )
}

// ---------- How to use ----------
const COLOR_LEGEND = [
  { accent: 'red', label: 'Allarme, complicanze, sicurezza' },
  { accent: 'green', label: 'Assistenza, terapia, cosa fa l’infermiere' },
  { accent: 'blue', label: 'Diagnosi, valutazione, misure' },
  { accent: 'orange', label: 'Segni e sintomi' },
  { accent: 'purple', label: 'Cause, classificazione' },
] as const

function HowToPage() {
  return (
    <SimplePage id="come-usare" title="Come usare questo libro" icon="Lightbulb">
      <div className="row row-2 grow">
        <Box title="Com’è fatta una mappa" icon="ClipboardList" accent="navy">
          <Bullets
            items={[
              '**Una pagina = un concetto**, leggibile in pochi minuti',
              'La **banda in alto** indica capitolo e argomento',
              'I **riquadri** dividono il tema in blocchi da ricordare',
              'La banda gialla **“Da ricordare”** riassume i punti chiave',
              'Il **numero di pagina** in basso a destra corrisponde all’indice',
            ]}
          />
        </Box>
        <Box title="I colori dei riquadri" icon="Layers" accent="purple">
          <ul className="legend-list">
            {COLOR_LEGEND.map((c) => (
              <li key={c.accent} className={`acc-${c.accent}`}>
                <span className="legend-list__chip" />
                {c.label}
              </li>
            ))}
          </ul>
        </Box>
        <Box title="I simboli" icon="CircleCheck" accent="green">
          <CheckList
            items={[
              { text: 'Azione corretta, da fare', kind: 'ok' },
              { text: 'Attenzione, verificare', kind: 'warn' },
              { text: 'Da non fare mai', kind: 'no' },
              { text: 'Segnale d’allarme: intervenire subito', kind: 'alert' },
            ]}
          />
        </Box>
        <Box title="Come studiare" icon="BookOpen" accent="blue">
          <Bullets
            items={[
              'Leggi la mappa, poi **ricostruiscila a memoria**',
              'Ripassa dopo **1, 3 e 7 giorni**',
              'Usa i **quiz** del capitolo concorsi per verificarti',
              'In tirocinio, ripassa la procedura **prima** di eseguirla',
            ]}
          />
        </Box>
        <Box title="Sul Kindle" icon="Monitor" accent="orange" style={{ gridColumn: 'span 2' }}>
          <Bullets
            items={[
              '**Pizzica o tocca due volte** per ingrandire un riquadro',
              'Usa l’**indice** per saltare direttamente a una mappa',
              'Sugli schermi in bianco e nero titoli e simboli restano riconoscibili',
            ]}
          />
        </Box>
      </div>
      <KeyBand items={['Le mappe aiutano a ricordare: per capire a fondo, torna sempre ai **libri di testo** e alle **linee guida**']} />
    </SimplePage>
  )
}

// ---------- Index ----------
function IndexPage({ id, part, parts, lines }: { id: string; part: number; parts: number; lines: IndexLine[] }) {
  const half = Math.ceil(lines.length / 2)
  const columns = [lines.slice(0, half), lines.slice(half)]
  return (
    <article className="page front acc-navy" data-page-id={id}>
      <header className="front__head">
        <Icon name="ListChecks" size={30} />
        <h1>Indice</h1>
        {parts > 1 && (
          <span className="front__part">
            {part}/{parts}
          </span>
        )}
      </header>
      <div className="page-body index">
        {columns.map((column, i) => (
          <ol className="index__column" key={i}>
            {column.map((line) =>
              line.type === 'chapter' ? (
                <li key={line.chapter.id} className={`index__chapter acc-${line.chapter.accent}`}>
                  <span className="chapter__num">{line.chapter.number}</span>
                  {line.chapter.title}
                </li>
              ) : (
                <li key={line.entry.id} className="index__entry" data-link={line.entry.id}>
                  <span className="index__title">{line.entry.title}</span>
                  <span className="index__dots" />
                  <span className="index__page">{line.entry.pageNumber}</span>
                </li>
              ),
            )}
          </ol>
        ))}
      </div>
    </article>
  )
}

// ---------- Chapter divider ----------
function ChapterDivider({ id, chapter, entries }: { id: string; chapter: Chapter; entries: Entry[] }) {
  const half = Math.ceil(entries.length / 2)
  return (
    <article className={`page front front--divider acc-${chapter.accent}`} data-page-id={id}>
      <div className="divider__head">
        <span className="divider__number">{String(chapter.number).padStart(2, '0')}</span>
        <div>
          <span className="divider__kicker">Capitolo {chapter.number}</span>
          <h1>{chapter.title}</h1>
          <span className="divider__count">{entries.length} mappe</span>
        </div>
        <Icon name={chapter.icon} size={84} className="divider__icon" />
      </div>
      <div className="divider__list">
        {[entries.slice(0, half), entries.slice(half)].map((column, i) => (
          <ol key={i}>
            {column.map((e) => (
              <li key={e.id} data-link={e.id}>
                <span>{e.title}</span>
                <span className="index__dots" />
                <span className="index__page">{e.pageNumber}</span>
              </li>
            ))}
          </ol>
        ))}
      </div>
    </article>
  )
}
