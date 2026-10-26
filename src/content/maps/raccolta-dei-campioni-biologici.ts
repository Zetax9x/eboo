import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'raccolta-dei-campioni-biologici',
  chapter: 'procedure',
  title: 'Raccolta dei campioni biologici',
  subtitle: 'Emo, urine, feci: procedure, contenitori e qualità pre-analitica',
  icon: 'TestTube',
  status: 'bozza',
  sources: [
    'CLSI — Guidelines for Blood Collection (H3-A6, 2022)',
    'Ministero della Salute — Raccomandazioni per la qualità pre-analitica',
    'FNOPI — Linee guida per la raccolta dei campioni biologici (2021)',
  ],
  materials: [
    { label: 'Provette colorate', icon: 'TestTubes' },
    { label: 'Siringhe/vacutainer', icon: 'Syringe' },
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Clorexidina 2%', icon: 'Droplets' },
    { label: 'Vaschette sterili', icon: 'Box' },
    { label: 'Etichette', icon: 'Tag' },
    { label: 'Taglienti', icon: 'Trash2' },
    { label: 'Guanto prelievo', icon: 'ShieldCheck' },
  ],
  sites: {
    title: 'Sedi di prelievo',
    illustration: {
      id: 'raccolta-sedi',
      alt: 'Sedi per prelievo ematico e raccolta urine',
      prompt: 'forearm with vein highlighted, and a sterile urine collection cup next to it',
      icon: 'Target',
    },
    items: [
      '**Emo**: vena cubitale (prima scelta)',
      '**Urine**: mezzo getto o catetere',
      '**Feci**: contenitore sterile',
      '**Secrezioni**: tampone sterile',
    ],
  },
  safety: [
    { text: 'Identificare paziente con **2 dati**', kind: 'ok' },
    { text: 'Verificare **allergie**', kind: 'warn' },
    { text: '**Mai** riutilizzare aghi', kind: 'no' },
    { text: 'Rispettare **ordine provette**', kind: 'ok' },
    { text: 'Usare **guanti** per ogni paziente', kind: 'ok' },
  ],
  steps: [
    {
      title: 'Preparazione',
      items: ['Igiene mani, guanti', 'Spiegare procedura', 'Verificare digiuno'],
      icon: 'Package',
    },
    {
      title: 'Antisepsi',
      items: ['Clorexidina 2%', 'Asciugare **≥ 30 s**', '**Non ripalpare**'],
      icon: 'Droplets',
    },
    {
      title: 'Prelievo ematico',
      items: [
        'Laccio **5–10 cm** sopra',
        'Bisello **15–30°**',
        'Rimuovere laccio **dopo l’avvio del flusso**',
      ],
      icon: 'TestTube',
    },
    {
      title: 'Ordine provette',
      items: [
        '1. **Emocoltura**',
        '2. **Coagulazione** (blu)',
        '3. **Biochimica** (gialla)',
        '4. **Emocromo** (lilla)',
      ],
      icon: 'TestTube',
    },
    {
      title: 'Urine (mezzo getto)',
      items: ['Lavare mani', 'Raccogliere **mezzo getto**', 'Chiudere e etichettare'],
      icon: 'ListChecks',
    },
    {
      title: 'Feci',
      items: ['Vaschetta **sterile**', 'Evitare urine', 'Conservare a **4 °C**'],
      icon: 'ListChecks',
    },
    {
      title: 'Etichettatura',
      items: ['Etichetta **prima** trasporto', 'Nome, data, ora, tipo', 'Smaltire taglienti'],
      icon: 'ListChecks',
    },
  ],
  swatches: {
    title: 'Ordine provette (CLSI)',
    items: [
      { label: 'Emocoltura', sub: '1ª', color: '#8b0000', ink: '#fff' },
      { label: 'Coagulazione', sub: '2ª', color: '#00008b', ink: '#fff' },
      { label: 'Emocromo', sub: '3ª', color: '#9400d3', ink: '#fff' },
      { label: 'Biochimica', sub: '4ª', color: '#ffd700', ink: '#000' },
      { label: 'Immunologia', sub: '5ª', color: '#ff4500', ink: '#fff' },
      { label: 'HbA1c', sub: '6ª', color: '#228b22', ink: '#fff' },
    ],
    note: 'Seguire indicazioni laboratorio locale.',
  },
  complications: [
    { label: 'Ematoma', sub: 'puntura parete venosa' },
    { label: 'Emolisi', sub: 'agitazione eccessiva' },
    { label: 'Contaminazione', sub: 'urine/feci non sterili' },
    { label: 'Etichetta errata', sub: 'scambio campioni' },
    { label: 'Emocromo alterato', sub: 'laccio troppo stretto' },
  ],
  nurseRole: [
    'Verificare **ordine provette**',
    'Etichettare **immediatamente**',
    'Segnalare **farmaci** in corso',
    'Monitorare sito post-prelievo',
    'Documentare data, ora, tipo',
  ],
}

export default map
