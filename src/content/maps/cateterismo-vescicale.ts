import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'cateterismo-vescicale',
  chapter: 'procedure',
  title: 'Cateterismo vescicale',
  subtitle: 'Posizionamento del catetere urinario: tecnica sterile e assistenza',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'EAU — European Association of Urology Guidelines: Urological Infections (2024)',
    'Ministero della Salute — Linee guida per la prevenzione delle infezioni del tratto urinario (2022)',
    'OMS — Linee guida sull’igiene delle mani nell’assistenza sanitaria',
  ],
  materials: [
    { label: 'Guanti sterili', icon: 'Hand' },
    { label: 'Campo sterile', icon: 'Sticker' },
    { label: 'Catetere urinario', icon: 'Droplet' },
    { label: 'Antisettico', icon: 'Droplet' },
    { label: 'Lubrificante', icon: 'Pipette' },
    { label: 'Sacca raccolta', icon: 'Box' },
    { label: 'Siringa acqua sterile', icon: 'Syringe' },
    { label: 'Taglienti', icon: 'Trash2' },
  ],
  sites: {
    title: 'Sedi di inserzione',
    illustration: {
      id: 'cateterismo-vescicale-sedi',
      alt: 'Uretra maschile e femminile',
      prompt: 'anatomical diagram of male and female urethra with bladder connection',
      icon: 'Target',
    },
    items: [
      '**Maschio**: uretra lunga (18–20 cm)',
      '**Femmina**: uretra corta (3–5 cm)',
      'Verificare integrità cutanea',
    ],
  },
  safety: [
    { text: 'Identificare il paziente con **2 dati**', kind: 'ok' },
    { text: '**Igiene mani**, tecnica sterile', kind: 'ok' },
    { text: 'Verificare **allergie** (lattice)', kind: 'warn' },
    { text: '**Mai forzare** il catetere', kind: 'no' },
    { text: 'Rispettare la **privacy**', kind: 'ok' },
  ],
  steps: [
    {
      title: 'Preparazione',
      items: ['Igiene mani, guanti sterili', 'Spiegare la procedura', 'Preparare il kit sterile'],
      icon: 'Package',
    },
    {
      title: 'Posizione',
      items: ['Paziente **supino**', 'Gambe divaricate', 'Campo sterile in posizione'],
      icon: 'User',
    },
    {
      title: 'Antisepsi',
      items: ['Lavare l’area genitale', 'Movimenti **circolari**', 'Lasciare asciugare'],
      icon: 'Droplet',
    },
    {
      title: 'Lubrificazione',
      items: ['Applicare **lubrificante**', 'Sulla punta del catetere', 'Sulla mucosa uretrale'],
      icon: 'ListChecks',
    },
    {
      title: 'Inserzione',
      items: ['Inserire **dolcemente**', 'Fino a vedere **urina**', 'Avanzare altri **2–3 cm**'],
      icon: 'Syringe',
    },
    {
      title: 'Palloncino',
      items: ['Gonfiare con **acqua sterile**', 'Volume indicato sul **catetere**', 'Verificare assenza dolore'],
      icon: 'ListChecks',
    },
    {
      title: 'Fissaggio',
      items: ['Fissare alla **coscia**', 'Sacca **sotto** la vescica', 'Evitare trazioni'],
      icon: 'Bandage',
    },
    {
      title: 'Documentazione',
      items: ['Data, ora, calibro', 'Smaltire rifiuti', 'Valutare **diuresi**'],
      icon: 'FileText',
    },
  ],
  swatches: {
    title: 'Calibri (Fr)',
    items: [
      { label: '12 Fr', sub: 'Pediatria', color: '#f28c28', ink: '#fff' },
      { label: '14 Fr', sub: 'Uso comune', color: '#2fa84f', ink: '#fff' },
      { label: '16 Fr', sub: 'Maschio', color: '#2f8fd8', ink: '#fff' },
      { label: '18 Fr', sub: 'Post-op', color: '#ef7fb0', ink: '#fff' },
    ],
    note: '1 Fr = 1/3 mm di diametro.',
  },
  complications: [
    { label: 'Infezione', sub: 'febbre, urine torbide' },
    { label: 'Trauma', sub: 'dolore, ematuria' },
    { label: 'Occlusione', sub: 'assenza diuresi' },
    { label: 'Ritrazione', sub: 'globo non inflato' },
    { label: 'Irritazione', sub: 'rossore, dolore' },
  ],
  nurseRole: [
    'Monitorare **diuresi** ogni turno',
    'Mantenere sistema **chiuso**',
    'Cambiare sacca se **piena**',
    'Valutare **rimozione**',
  ],
}

export default map
