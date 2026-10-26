import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'gestione-di-cvc-e-picc',
  chapter: 'procedure',
  title: 'Gestione di CVC e PICC',
  subtitle: 'Manutenzione, infusione e rimozione dei cateteri venosi centrali',
  icon: 'Syringe',
  status: 'bozza',
  sources: [
    'Infusion Nursing Society (INS) — Infusion Therapy Standards of Practice, 9th ed. (2024)',
    'Ministero della Salute — Linee guida per la gestione degli accessi venosi (2022)',
    'Organizzazione Mondiale della Sanità (OMS) — Linee guida sull’igiene delle mani nell’assistenza sanitaria (2021)',
  ],
  materials: [
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Clorexidina 2% in alcol', icon: 'Droplets' },
    { label: 'Medicazione trasparente', icon: 'Sticker' },
    { label: 'Siringa con NaCl 0,9%', icon: 'Pipette' },
    { label: 'Garze sterili', icon: 'Bandage' },
    { label: 'Contenitore taglienti', icon: 'Trash2' },
    { label: 'Tubi di estensione', icon: 'Cable' },
    { label: 'Valvole a non ritorno', icon: 'CircleCheck' },
  ],
  sites: {
    title: 'Sedi di inserimento',
    illustration: {
      id: 'cvc-picc-siti',
      alt: 'Vene giugulare interna, succlavia e basilica',
      prompt: 'anatomical diagram of the neck and upper chest showing the internal jugular vein, subclavian vein, and basilic vein with their paths toward the superior vena cava',
      icon: 'Target',
    },
    items: [
      '**CVC**: giugulare interna, succlavia, femorale',
      '**PICC**: vena basilica o cefalica dell’avambraccio',
      'La punta deve terminare nella **vena cava superiore**',
    ],
  },
  safety: [
    { text: 'Paziente identificato con **2 identificativi**', kind: 'ok' },
    { text: '**Igiene delle mani**, tecnica no-touch', kind: 'ok' },
    { text: 'Indagare **allergie** (lattice, clorexidina)', kind: 'warn' },
    { text: '**Mai toccare** i connettori non sterili', kind: 'no' },
    { text: 'Verificare la **posizione della punta** con RX', kind: 'alert' },
  ],
  steps: [
    {
      title: 'Preparazione',
      items: ['Igiene delle mani, guanti', 'Spiegare la procedura', 'Preparare il materiale'],
      icon: 'Package',
    },
    {
      title: 'Valutazione del sito',
      items: ['Controllare **dolore, rossore, edema**', 'Verificare la **medicazione**', 'Contare i **giorni di permanenza**'],
      icon: 'Eye',
    },
    {
      title: 'Antisepsi',
      items: ['Clorexidina 2% in alcol 70%', 'Lasciare **asciugare** (≥ 30 s)', '**Non ripalpare** il sito'],
      icon: 'Droplets',
    },
    {
      title: 'Lavaggio del catetere',
      items: ['Lavaggio con **NaCl 0,9%** (10–20 mL)', 'Tecnica **stop-and-push**', 'Verificare l’**assenza di dolore**'],
      icon: 'Droplets',
    },
    {
      title: 'Infusione',
      items: ['Collegare la **linea di infusione**', 'Aprire la **valvola**', 'Monitorare la **velocità di flusso**'],
      icon: 'Syringe',
    },
    {
      title: 'Chiusura e fissaggio',
      items: ['Chiudere la **valvola**', 'Lavaggio finale con **NaCl 0,9%**', 'Medicazione **trasparente sterile**'],
      icon: 'Bandage',
    },
    {
      title: 'Documentazione',
      items: ['Data, ora, sito, calibro', 'Tipo di soluzione infusa', 'Reazioni avverse'],
      icon: 'FileText',
    },
  ],
  swatches: {
    title: 'Tipi di catetere',
    items: [
      { label: 'CVC', sub: 'Giugulare/succlavia', color: '#2f8fd8', ink: '#fff' },
      { label: 'PICC', sub: 'Avambraccio', color: '#2fa84f', ink: '#fff' },
      { label: 'Tunneled', sub: 'Lungo termine', color: '#f28c28', ink: '#fff' },
      { label: 'Port', sub: 'Impianto sottocutaneo', color: '#8f9399', ink: '#fff' },
    ],
    note: 'La scelta dipende dalla durata e dal tipo di terapia.',
  },
  complications: [
    { label: 'Infezione', sub: 'locale o batteriemia' },
    { label: 'Trombosi', sub: 'venosa centrale' },
    { label: 'Embolia gassosa', sub: 'rara, grave' },
    { label: 'Occlusione', sub: 'coagulo o precipitato' },
    { label: 'Perforazione', sub: 'vascolare o pleurica' },
    { label: 'Migrazione', sub: 'della punta' },
  ],
  nurseRole: [
    'Valutare il sito con la **scala VIP**',
    'Ogni giorno: il catetere **serve ancora**?',
    'Medicazione sporca o staccata: **cambiarla**',
    '**Rimuovere** ai primi segni di infezione',
  ],
}

export default map
