import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'gestione-dei-rifiuti-sanitari',
  chapter: 'specialistica',
  title: 'Gestione dei rifiuti sanitari',
  subtitle: 'Classificazione, raccolta e smaltimento secondo normativa italiana',
  icon: 'Trash2',
  status: 'bozza',
  sources: [
    'D.Lgs. 152/2006 — Norme in materia ambientale (Parte IV: Rifiuti)',
    'Ministero della Salute — Raccomandazioni per la gestione dei rifiuti sanitari (2014)',
    'Codice deontologico FNOPI — Art. 12 (Tutela dell’ambiente)',
  ],
  intro:
    'La gestione dei rifiuti sanitari è un **obbligo di legge** e un dovere deontologico. La corretta classificazione e separazione alla fonte previene infezioni, protegge l’ambiente e riduce i costi di smaltimento.',
  illustration: {
    id: 'rifiuti-sanitari-contenitori',
    alt: 'Contenitori colorati per la raccolta differenziata dei rifiuti sanitari',
    prompt: 'hospital utility room with a rigid yellow sharps container and a closed cardboard box lined with a plastic bag for infectious waste, next to an ordinary waste bin',
    icon: 'Box',
  },
  columns: 2,
  blocks: [
    {
      title: 'Classificazione AEE',
      icon: 'Layers',
      accent: 'purple',
      items: [
        '**A**sanitari: infetti, a rischio infettivo, pericolosi',
        '**E**speciali: farmaci scaduti, radiofarmaci, contenitori contaminati',
        '**E**lettrodomestici: apparecchiature elettriche e elettroniche',
        'I rifiuti AEE sono **obbligatoriamente** separati alla fonte',
        'Ogni categoria ha **contenitori dedicati** e procedure specifiche',
        'La miscelazione è **vietata** e sanzionabile',
      ],
    },
    {
      title: 'Rifiuti A (Sanitari)',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        '**A1**: infetti (contatti con sangue, secrezioni, tessuti)',
        '**A2**: a rischio infettivo (guanti, camici, garze sporche)',
        '**A3**: pericolosi (mercurio, formaldeide, solventi)',
        '**A4**: a rischio chimico (reagenti, acidi, basi)',
        'Contenitori **rossi** con etichettatura specifica',
        'Raccolta in sacchi **non perforabili**, chiusura ermetica',
      ],
    },
    {
      title: 'Rifiuti E (Speciali)',
      icon: 'Pill',
      accent: 'orange',
      items: [
        '**E1**: farmaci scaduti o non utilizzati',
        '**E2**: radiofarmaci e materiali radioattivi',
        '**E3**: contenitori contaminati da farmaci citotossici',
        '**E4**: rifiuti da laboratorio (campioni, vetrini)',
        'Contenitori **gialli** o **arancioni** a seconda del tipo',
        'Smaltimento tramite **operatori autorizzati**',
      ],
    },
    {
      title: 'Rifiuti E (Elettrodomestici)',
      icon: 'Monitor',
      accent: 'blue',
      items: [
        'Apparecchiature **elettriche** e **elettroniche** a fine vita',
        'Monitor, computer, stampanti, dispositivi medici elettronici',
        'Contenitori **grigi** o **neri** dedicati',
        'Recupero di materiali **riciclabili** (metalli, plastiche)',
        'Smaltimento conforme al **regolamento WEEE**',
        'Documentazione di tracciabilità obbligatoria',
      ],
    },
    {
      title: 'Raccolta e Contenitori',
      icon: 'Box',
      accent: 'green',
      items: [
        '**Rosso**: rifiuti infetti e a rischio infettivo',
        '**Giallo**: farmaci e materiali speciali',
        '**Blu**: carta e cartone non contaminati',
        '**Verde**: vetro non contaminato',
        '**Grigio**: rifiuti indifferenziati non sanitari',
        'Contenitori **chiusi**, etichettati, posizionati vicino alla fonte',
      ],
    },
    {
      title: 'Ruolo Infermieristico',
      icon: 'ClipboardCheck',
      accent: 'teal',
      checks: [
        { text: '**Separare** i rifiuti alla fonte', kind: 'ok' },
        { text: '**Etichettare** correttamente i contenitori', kind: 'ok' },
        { text: '**Formare** il personale e gli OSS', kind: 'ok' },
        { text: '**Monitorare** la conformità delle procedure', kind: 'ok' },
        { text: '**Segnalare** non conformità e incidenti', kind: 'warn' },
        { text: '**Documentare** la raccolta e lo smaltimento', kind: 'ok' },
        { text: '**Partecipare** alla stesura dei protocolli', kind: 'ok' },
      ],
    },
  ],
  keyPoints: [
    'La **separazione alla fonte** è il principio fondamentale: ogni rifiuto va nel contenitore corretto',
    'I rifiuti **A** (sanitari) richiedono contenitori rossi e procedure di sicurezza; i rifiuti **E** (speciali) richiedono contenitori dedicati e smaltimento autorizzato',
    'L’infermiere è **responsabile** della corretta gestione e deve formare il personale e monitorare la conformità',
  ],
}

export default map
