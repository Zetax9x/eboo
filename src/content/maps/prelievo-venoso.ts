import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'prelievo-venoso',
  chapter: 'procedure',
  title: 'Prelievo venoso',
  subtitle: 'Venipuntura con sistema sottovuoto: tecnica, ordine delle provette, errori da evitare',
  icon: 'TestTubes',
  status: 'bozza',
  sources: [
    'CLSI — GP41: Collection of Diagnostic Venous Blood Specimens, 7ª ed. (2017)',
    'OMS — WHO Guidelines on Drawing Blood: Best Practices in Phlebotomy (2010)',
    'ISO 6710:2017 — Single-use containers for venous blood specimen collection',
  ],
  materials: [
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Laccio emostatico', icon: 'Cable' },
    { label: 'Ago o butterfly con camicia', icon: 'Syringe' },
    { label: 'Provette sottovuoto', icon: 'TestTubes' },
    { label: 'Alcol 70% o clorexidina', icon: 'Droplets' },
    { label: 'Garze e cerotto', icon: 'Bandage' },
    { label: 'Etichette e richiesta', icon: 'Tag' },
    { label: 'Contenitore taglienti', icon: 'Trash2' },
  ],
  sites: {
    title: 'Scelta della vena',
    items: [
      '**Piega del gomito**: vena mediana prima scelta',
      'Poi vena **cefalica**; **basilica** per ultima (vicina ad arteria e nervo)',
      '**Evitare** arto con fistola AV, linfedema, infusione in corso, ematomi',
    ],
  },
  safety: [
    { text: 'Paziente identificato con **2 identificativi**', kind: 'ok' },
    { text: 'Verificare **digiuno** e orario se richiesti', kind: 'ok' },
    { text: 'Laccio in sede **max 1 minuto**', kind: 'warn' },
    { text: 'Non far **aprire e chiudere il pugno**: falsa iperkaliemia', kind: 'warn' },
    { text: 'Mai prelevare a **monte di un’infusione**', kind: 'no' },
    { text: '**Mai reincappucciare** l’ago', kind: 'no' },
  ],
  steps: [
    {
      title: 'Preparazione',
      items: ['Igiene delle mani, guanti', 'Spiegare, chiedere allergie e svenimenti', 'Provette **giuste** per gli esami'],
      icon: 'Package',
    },
    {
      title: 'Laccio',
      items: ['**7–10 cm** sopra il sito', 'Palpare: vena elastica, non pulsante'],
      icon: 'Cable',
    },
    {
      title: 'Antisepsi',
      items: ['Disinfettare il sito', 'Lasciare **asciugare**', '**Non ripalpare** dopo'],
      icon: 'Droplets',
    },
    {
      title: 'Venipuntura',
      items: ['Tendere la cute sotto il sito', 'Bisello in alto, angolo **≤ 30°**'],
      icon: 'Syringe',
    },
    {
      title: 'Riempimento',
      items: ['Provette nell’**ordine corretto**', 'Riempire **fino al vuoto**, capovolgere piano'],
      icon: 'TestTubes',
    },
    {
      title: 'Fine prelievo',
      items: ['Togliere il **laccio**, poi l’ago e attivare la **sicurezza**', 'Comprimere **2–3 min**, braccio disteso'],
      icon: 'Bandage',
    },
    {
      title: 'Etichettatura',
      items: ['Al letto, **davanti al paziente**', 'Inviare subito e documentare'],
      icon: 'Tag',
    },
  ],
  swatches: {
    title: 'Ordine delle provette (CLSI)',
    items: [
      { label: '1 · Colture', sub: 'colture', color: '#e4e9ee', ink: '#17212f' },
      { label: '2 · Citrato', sub: 'PT, aPTT', color: '#7cc4ef', ink: '#17212f' },
      { label: '3 · Siero', sub: 'chimica', color: '#d62828', ink: '#fff' },
      { label: '4 · Eparina', sub: 'urgenze', color: '#2fa84f', ink: '#fff' },
      { label: '5 · EDTA', sub: 'emocromo', color: '#9b6fc3', ink: '#fff' },
      { label: '6 · Fluoruro', sub: 'glicemia', color: '#8f9399', ink: '#fff' },
    ],
    note: 'Colori ISO 6710, possono variare col produttore: verificare sulle provette in uso. Butterfly con citrato per primo: provetta di scarto.',
  },
  complications: [
    { label: 'Ematoma', sub: 'comprimere di più' },
    { label: 'Vasovagale', sub: 'pallore, sincope' },
    { label: 'Lesione nervosa', sub: 'scossa: togliere l’ago' },
    { label: 'Emolisi', sub: 'falsa iperkaliemia' },
  ],
  nurseRole: [
    'Identificare il paziente **prima** e **etichettare** dopo, al letto',
    'Rispettare l’**ordine** e il **riempimento** delle provette',
    'Massimo **2 tentativi**, poi chiedere aiuto',
    'Paziente a rischio di svenimento: **sdraiato**',
  ],
}

export default map
