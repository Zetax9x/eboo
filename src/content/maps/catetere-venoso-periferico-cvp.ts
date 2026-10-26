import type { ProcedureMap } from '../../book/types'

const step = (id: string, alt: string, prompt: string) => ({ id: `cvp-${id}`, alt, prompt, icon: 'Hand' as const })

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'catetere-venoso-periferico-cvp',
  chapter: 'procedure',
  title: 'Catetere venoso periferico',
  subtitle: 'Posizionamento e gestione dell’agocannula (CVP)',
  icon: 'Syringe',
  status: 'bozza',
  sources: [
    'INS — Infusion Therapy Standards of Practice, 9ª ed. (2021)',
    'GAVeCeLT — Raccomandazioni per la gestione degli accessi venosi',
    'OMS — Linee guida sull’igiene delle mani nell’assistenza sanitaria',
  ],
  materials: [
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Laccio emostatico', icon: 'Cable' },
    { label: 'Agocannula', icon: 'Syringe' },
    { label: 'Clorexidina 2% in alcol', icon: 'Droplets' },
    { label: 'Medicazione trasparente', icon: 'Sticker' },
    { label: 'Siringa con NaCl 0,9%', icon: 'Pipette' },
    { label: 'Garze sterili', icon: 'Bandage' },
    { label: 'Contenitore taglienti', icon: 'Trash2' },
  ],
  sites: {
    title: 'Scelta del sito',
    illustration: {
      id: 'cvp-siti',
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
      illustration: step('preparazione', 'Mani con guanti e materiale', 'gloved hands preparing a sterile tray with cannula and dressing'),
    },
    {
      title: 'Laccio',
      items: ['Laccio **10–15 cm** sopra il sito', 'Palpare: vena elastica e diritta'],
      illustration: step('laccio', 'Laccio sul braccio', 'tourniquet applied on the upper forearm, fingers palpating a vein'),
    },
    {
      title: 'Antisepsi',
      items: ['Clorexidina 2% in alcol 70%', 'Lasciare **asciugare** (≥ 30 s)', '**Non ripalpare** il sito'],
      illustration: step('antisepsi', 'Disinfezione della cute', 'antiseptic swab cleaning the skin of the forearm'),
    },
    {
      title: 'Inserzione',
      items: ['Tendere la cute', 'Bisello in alto, **15–30°**', 'Osservare il **reflusso** di sangue'],
      illustration: step('inserzione', 'Inserimento dell’agocannula', 'IV cannula inserted into a forearm vein at a shallow angle, flashback of blood in the chamber'),
    },
    {
      title: 'Avanzamento',
      items: ['Abbassare l’angolo', 'Far scorrere la **cannula** sull’ago', 'Rimuovere il laccio'],
      illustration: step('avanzamento', 'Avanzamento della cannula', 'thumb sliding the plastic cannula off the needle into the vein'),
    },
    {
      title: 'Rimozione ago',
      items: ['Comprimere la vena **oltre la punta** (verso il cuore)', 'Estrarre l’ago, attivare la **sicurezza**'],
      illustration: step('ago', 'Estrazione dell’ago', 'finger pressing the vein above the cannula tip while the needle is withdrawn'),
    },
    {
      title: 'Lavaggio e fissaggio',
      items: ['Lavaggio con **NaCl 0,9%** (5–10 mL)', 'Nessun dolore o gonfiore', 'Medicazione **trasparente sterile**'],
      illustration: step('fissaggio', 'Cannula fissata con medicazione', 'peripheral IV cannula secured with a transparent sterile dressing on the forearm'),
    },
    {
      title: 'Documentare',
      items: ['Data, calibro, sito, n° tentativi', 'Smaltire i taglienti', 'Valutare il sito **a ogni turno**'],
      illustration: step('documentazione', 'Cartella infermieristica', 'nurse writing in a clinical record next to a sharps container'),
    },
  ],
  swatches: {
    title: 'Calibri e colori',
    items: [
      { label: '14G', sub: 'Trauma', color: '#f28c28', ink: '#fff' },
      { label: '16G', sub: 'Chirurgia', color: '#8f9399', ink: '#fff' },
      { label: '18G', sub: 'Trasfusioni', color: '#2fa84f', ink: '#fff' },
      { label: '20G', sub: 'Uso comune', color: '#ef7fb0', ink: '#fff' },
      { label: '22G', sub: 'Vene fragili', color: '#2f8fd8', ink: '#fff' },
      { label: '24G', sub: 'Pediatria', color: '#f6d32d', ink: '#17212f' },
    ],
    note: 'Colori ISO 10555-5: verificare sulla confezione.',
  },
  complications: [
    { label: 'Flebite', sub: 'dolore, rossore, cordone venoso' },
    { label: 'Infiltrazione / stravaso', sub: 'edema, cute fredda' },
    { label: 'Ematoma', sub: 'puntura della parete' },
    { label: 'Infezione', sub: 'locale o batteriemia' },
    { label: 'Occlusione', sub: 'infusione bloccata' },
    { label: 'Embolia gassosa', sub: 'rara' },
  ],
  nurseRole: [
    'Valutare il sito con la **scala VIP**',
    'Ogni giorno: il CVP **serve ancora**?',
    'Medicazione sporca o staccata: **cambiarla**',
    '**Rimuovere** ai primi segni di flebite',
  ],
}

export default map
