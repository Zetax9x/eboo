import type { ProcedureMap } from '../../book/types'

const step = (id: string, alt: string, prompt: string) => ({ id: `prelievo-venoso-${id}`, alt, prompt, icon: 'TestTube' as const })

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'prelievo-venoso',
  chapter: 'procedure',
  title: 'Prelievo venoso',
  subtitle: 'Venipuntura con sistema sottovuoto e ordine delle provette',
  icon: 'TestTubes',
  status: 'bozza',
  sources: [
    'CLSI GP41 — Collection of Diagnostic Venous Blood Specimens, 7ª ed. (2017)',
    'OMS — Guidelines on drawing blood: best practices in phlebotomy (2010)',
    'EFLM-COLABIOCLI — Recommendation for venous blood sampling (2018)',
  ],
  materials: [
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Laccio emostatico', icon: 'Cable' },
    { label: 'Ago e holder di sicurezza', icon: 'Syringe' },
    { label: 'Provette sottovuoto', icon: 'TestTubes' },
    { label: 'Antisettico', icon: 'Droplets' },
    { label: 'Garze e cerotto', icon: 'Bandage' },
    { label: 'Etichette', icon: 'Tag' },
    { label: 'Contenitore taglienti', icon: 'Trash2' },
  ],
  sites: {
    title: 'Scelta della vena',
    illustration: {
      id: 'prelievo-venoso-sede',
      alt: 'Vene della piega del gomito',
      prompt: 'inner elbow (antecubital fossa) with median cubital, cephalic and basilic veins highlighted in blue',
      icon: 'Target',
    },
    items: [
      '**Mediana cubitale**: prima scelta',
      'Poi **cefalica**; **basilica** per ultima (arteria e nervo vicini)',
      'No arto con **infusione**, fistola AV, linfedema',
    ],
  },
  safety: [
    { text: '**2 identificativi** e richiesta verificata', kind: 'ok' },
    { text: 'Etichettare le provette **davanti al paziente**', kind: 'ok' },
    { text: 'Laccio **non oltre 1 minuto**', kind: 'warn' },
    { text: '**Mai reincappucciare** l’ago', kind: 'no' },
    { text: 'Dolore folgorante o parestesie: **estrarre subito**', kind: 'alert' },
  ],
  steps: [
    {
      title: 'Verifiche',
      items: ['Identità, esami richiesti', '**Digiuno**, orario, farmaci in corso', 'Allergie (lattice, antisettico)'],
      illustration: step('verifiche', 'Controllo della richiesta', 'nurse checking a lab request form against the patient wristband'),
    },
    {
      title: 'Preparazione',
      items: ['Igiene mani, guanti', 'Braccio **esteso** e appoggiato', 'Provette in **ordine di prelievo**'],
      illustration: step('preparazione', 'Provette pronte', 'tray with vacuum blood collection tubes lined up, needle holder and gloves'),
    },
    {
      title: 'Laccio',
      items: ['**7–10 cm** sopra il sito', 'Palpare la vena: elastica', 'Non far **pompare** il pugno'],
      illustration: step('laccio', 'Laccio sul braccio', 'tourniquet tied on the upper arm, gloved finger palpating the antecubital vein'),
    },
    {
      title: 'Antisepsi',
      items: ['Alcol 70% o clorexidina', 'Lasciare **asciugare**', '**Non ripalpare** il sito'],
      illustration: step('antisepsi', 'Disinfezione del sito', 'antiseptic swab cleaning the skin of the inner elbow'),
    },
    {
      title: 'Venipuntura',
      items: ['Tendere la cute sotto il sito', 'Bisello in alto, angolo **≤ 30°**', 'Inserire la **prima provetta**'],
      illustration: step('puntura', 'Inserimento dell’ago', 'needle with holder entering the antecubital vein at a shallow angle, bevel up'),
    },
    {
      title: 'Riempimento',
      items: ['Allentare il laccio quando il sangue **fluisce**', 'Riempire fino alla **tacca**', 'Citrato: rapporto **9:1** esatto'],
      illustration: step('riempimento', 'Provetta che si riempie', 'vacuum tube filling with dark venous blood attached to a needle holder'),
    },
    {
      title: 'Miscelazione',
      items: ['Capovolgere **delicatamente** ogni provetta', 'N° inversioni come da produttore', '**Mai agitare** (emolisi)'],
      illustration: step('miscelazione', 'Inversione della provetta', 'gloved hand gently inverting a filled blood tube'),
    },
    {
      title: 'Termine',
      items: ['Estrarre, attivare la **sicurezza**', 'Comprimere **2–3 min**, braccio esteso', 'Etichettare e inviare'],
      illustration: step('termine', 'Compressione con garza', 'gauze pressed on the inner elbow with the arm kept straight'),
    },
  ],
  swatches: {
    title: 'Ordine di prelievo',
    items: [
      { label: '1°', sub: 'Emocolture', color: '#5b6b7a', ink: '#fff' },
      { label: '2°', sub: 'Citrato', color: '#6fc0ea', ink: '#17212f' },
      { label: '3°', sub: 'Siero', color: '#d7262e', ink: '#fff' },
      { label: '4°', sub: 'Eparina', color: '#2fa84f', ink: '#fff' },
      { label: '5°', sub: 'EDTA', color: '#8e5bbd', ink: '#fff' },
      { label: '6°', sub: 'Fluoruro', color: '#8f9399', ink: '#fff' },
    ],
    note: 'CLSI GP41. Tappi: azzurro, rosso/oro, verde, viola, grigio (verificare sulla confezione).',
  },
  complications: [
    { label: 'Ematoma', sub: 'compressione insufficiente' },
    { label: 'Emolisi', sub: 'agitazione, ago sottile, laccio lungo' },
    { label: 'Sincope vasovagale', sub: 'far sdraiare, gambe sollevate' },
    { label: 'Lesione nervosa', sub: 'scossa, formicolio alla mano' },
    { label: 'Puntura arteriosa', sub: 'sangue rosso vivo, pulsante' },
    { label: 'Emoconcentrazione', sub: 'laccio oltre 1 minuto' },
  ],
  nurseRole: [
    'Infusione in corso: prelevare dal **braccio opposto**',
    'Ago a farfalla + citrato per primo: **provetta di scarto**',
    'Conservare e inviare secondo i **tempi** del laboratorio',
    'Campione emolizzato o non idoneo: **ripetere**',
  ],
}

export default map
