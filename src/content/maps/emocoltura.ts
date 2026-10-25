import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'emocoltura',
  chapter: 'procedure',
  title: 'Emocoltura',
  subtitle: 'Prelievo di sangue per coltura: tecnica, sicurezza e interpretazione',
  icon: 'TestTube',
  status: 'bozza',
  sources: [
    'IDSA — Clinical Practice Guidelines for the Diagnosis and Management of Intravascular Catheter-Related Infection (2009)',
    'CLSI — M47: Principles and Practices of Sterility Testing (ultima edizione)',
    'Ministero della Salute — Raccomandazioni per la prevenzione delle infezioni correlate all’assistenza (ICA)',
  ],
  materials: [
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Laccio emostatico', icon: 'Cable' },
    { label: 'Aghi sterili', icon: 'Syringe' },
    { label: 'Clorexidina 2% in alcol', icon: 'Droplets' },
    { label: 'Provette emocoltura', icon: 'TestTube' },
    { label: 'Garze sterili', icon: 'Bandage' },
    { label: 'Contenitore taglienti', icon: 'Trash2' },
    { label: 'Etichette identificative', icon: 'Tag' },
  ],
  sites: {
    title: 'Scelta del sito',
    illustration: {
      id: 'emocoltura-siti',
      alt: 'Vene dell’avambraccio e del dorso della mano',
      prompt: 'forearm and back of the hand with superficial veins highlighted in blue (cephalic, basilic, dorsal metacarpal veins)',
      icon: 'Target',
    },
    items: [
      '**Avambraccio**: prima scelta',
      'Partire **distalmente**, arto non dominante',
      '**Evitare** articolazioni, fistola AV, arto con linfedema o plegico',
    ],
  },
  safety: [
    { text: 'Paziente identificato con **2 identificativi**', kind: 'ok' },
    { text: '**Igiene delle mani**, tecnica no-touch', kind: 'ok' },
    { text: 'Indagare **allergie** (lattice, clorexidina)', kind: 'warn' },
    { text: '**Mai reincappucciare** l’ago', kind: 'no' },
    { text: 'Max **2 tentativi** per operatore, **4** in totale', kind: 'warn' },
  ],
  steps: [
    {
      title: 'Preparazione',
      items: ['Igiene delle mani, guanti', 'Spiegare la procedura', 'Preparare il materiale'],
      icon: 'Package',
    },
    {
      title: 'Laccio',
      items: ['Laccio **10–15 cm** sopra il sito', 'Palpare: vena elastica e diritta'],
      icon: 'ListChecks',
    },
    {
      title: 'Antisepsi',
      items: ['Clorexidina 2% in alcol 70%', 'Lasciare **asciugare** (≥ 30 s)', '**Non ripalpare** il sito'],
      icon: 'Droplets',
    },
    {
      title: 'Prelievo',
      items: ['Tendere la cute', 'Bisello in alto, **15–30°**', 'Osservare il **reflusso** di sangue'],
      icon: 'TestTube',
    },
    {
      title: 'Rimozione',
      items: ['Comprimere la vena **oltre la punta** (verso il cuore)', 'Estrarre l’ago, attivare la **sicurezza**'],
      icon: 'Scissors',
    },
    {
      title: 'Documentare',
      items: ['Data, calibro, sito, n° tentativi', 'Smaltire i taglienti', 'Valutare il sito **a ogni turno**'],
      icon: 'FileText',
    },
  ],
  swatches: {
    title: 'Colori provette',
    items: [
      { label: 'Rosso', sub: 'Siero', color: '#e74c3c', ink: '#fff' },
      { label: 'Lilla', sub: 'EDTA', color: '#9b59b6', ink: '#fff' },
      { label: 'Blu', sub: 'Citrato', color: '#3498db', ink: '#fff' },
      { label: 'Grigio', sub: 'Fluoruro', color: '#95a5a6', ink: '#fff' },
      { label: 'Verde', sub: 'Eparina', color: '#2ecc71', ink: '#fff' },
      { label: 'Giallo', sub: 'SST', color: '#f1c40f', ink: '#17212f' },
    ],
    note: 'Verificare sempre il colore sulla confezione.',
  },
  complications: [
    { label: 'Ematoma', sub: 'puntura della parete' },
    { label: 'Svenimento', sub: 'ansia, digiuno' },
    { label: 'Infezione', sub: 'locale o batteriemia' },
    { label: 'Occlusione', sub: 'infusione bloccata' },
    { label: 'Embolia gassosa', sub: 'rara' },
    { label: 'Reazione allergica', sub: 'lattice, clorexidina' },
  ],
  nurseRole: [
    'Valutare il sito con la **scala VIP**',
    'Ogni giorno: il CVP **serve ancora**?',
    'Medicazione sporca o staccata: **cambiarla**',
    '**Rimuovere** ai primi segni di flebite',
  ],
}

export default map
