import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'medicazione-avanzata-delle-ferite',
  chapter: 'procedure',
  title: 'Medicazione avanzata delle ferite',
  subtitle: 'Selezione e applicazione di medicazioni avanzate per la guarigione',
  icon: 'Bandage',
  status: 'bozza',
  sources: [
    'NPIAP/EPUAP/PPPIA — International Guideline: Pressure Ulcer/Injury Prevention and Treatment (2024)',
    'EADV — European Academy of Dermatology and Venereology Guidelines on Wound Care',
    'Ministero della Salute — Raccomandazioni per la gestione delle ferite croniche',
  ],
  materials: [
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'NaCl 0,9%', icon: 'Droplets' },
    { label: 'Medicazione avanzata', icon: 'Sticker' },
    { label: 'Forbici sterili', icon: 'Scissors' },
    { label: 'Garze sterili', icon: 'Bandage' },
    { label: 'Benda elastica', icon: 'Cable' },
    { label: 'Contenitore rifiuti', icon: 'Trash2' },
  ],
  sites: {
    title: 'Valutazione della ferita',
    illustration: {
      id: 'medicazione-avanzata-delle-ferite-valutazione',
      alt: 'Ferita cutanea con tessuto di granulazione',
      prompt: 'close-up of a healing skin wound with pink granulation tissue and surrounding healthy skin',
      icon: 'Target',
    },
    items: [
      '**Dimensioni**: L, l, profondità',
      '**Tessuto**: necrotico, fibrinoso, epiteliale',
      '**Esudato**: quantità, colore, odore',
      '**Dolore**: scala NRS 0-10',
    ],
  },
  safety: [
    { text: 'Paziente identificato con **2 identificativi**', kind: 'ok' },
    { text: '**Igiene delle mani**, tecnica asettica', kind: 'ok' },
    { text: 'Indagare **allergie** (lattice, collanti)', kind: 'warn' },
    { text: '**Mai** medicare ferite infette senza terapia', kind: 'alert' },
    { text: 'Valutare **dolore** prima e dopo', kind: 'warn' },
  ],
  steps: [
    {
      title: 'Preparazione',
      items: ['Igiene mani, guanti', 'Spiegare procedura', 'Preparare materiale'],
      icon: 'Package',
    },
    {
      title: 'Rimozione',
      items: ['Rimuovere delicatamente', 'Osservare **aderenza**', 'Smaltire nei rifiuti'],
      icon: 'Scissors',
    },
    {
      title: 'Valutazione',
      items: ['Misurare **dimensioni**', 'Descrivere **tessuto**', 'Valutare **esudato**'],
      icon: 'Eye',
    },
    {
      title: 'Detersione',
      items: ['Lavare con **NaCl 0,9%**', 'Tecnica **centro-periferia**', 'Asciugare con garza'],
      icon: 'ListChecks',
    },
    {
      title: 'Applicazione',
      items: ['Scegliere **tipo** appropriato', 'Applicare senza **tensione**', 'Coprire ferita'],
      icon: 'ListChecks',
    },
    {
      title: 'Fissaggio',
      items: ['Fissare con **benda**', 'Verificare **aderenza**', 'Evitare compressione'],
      icon: 'Bandage',
    },
    {
      title: 'Documentazione',
      items: ['Data, **tipo** medicazione', 'Descrizione **ferita**', 'Reazione paziente'],
      icon: 'FileText',
    },
  ],
  swatches: {
    title: 'Tipi di medicazioni',
    items: [
      { label: 'Idrocolloidi', sub: 'Ferite secche', color: '#2fa84f', ink: '#fff' },
      { label: 'Idrogele', sub: 'Idratazione', color: '#2f8fd8', ink: '#fff' },
      { label: 'Alginati', sub: 'Esudato abbondante', color: '#f28c28', ink: '#fff' },
      { label: 'Schiume', sub: 'Esudato moderato', color: '#8f9399', ink: '#fff' },
      { label: 'Argento', sub: 'Ferite infette', color: '#ef7fb0', ink: '#fff' },
      { label: 'Fibrina', sub: 'Guarigione', color: '#f6d32d', ink: '#17212f' },
    ],
    note: 'Scegliere in base a esudato, tessuto, fase di guarigione.',
  },
  complications: [
    { label: 'Ipergranulazione', sub: 'tessuto rosso, sanguinante' },
    { label: 'Macerazione', sub: 'cute bianca, molle' },
    { label: 'Infezione', sub: 'dolore, pus, odore' },
    { label: 'Allergia', sub: 'prurito, rash' },
    { label: 'Tunneling', sub: 'canali sotto pelle' },
    { label: 'Ritardo guarigione', sub: 'ferita persistente' },
  ],
  nurseRole: [
    'Valutare ferita con **scala** standardizzata',
    'Scegliere medicazione **appropriata**',
    'Monitorare **dolore** e infezione',
    'Educare paziente alla **cura** domiciliare',
  ],
}

export default map
