import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'ossigenoterapia-dispositivi',
  chapter: 'procedure',
  title: 'Ossigenoterapia: dispositivi',
  subtitle: 'Scelta del dispositivo, flussi, FiO₂ e sicurezza',
  icon: 'Wind',
  status: 'bozza',
  sources: [
    'NICE — Oxygen therapy in adults in healthcare settings (NG157, 2023)',
    'GOLD — Global Strategy for COPD (2024)',
    'Ministero della Salute — Linee guida per l’uso dell’ossigenoterapia',
  ],
  materials: [
    { label: 'Maschera a riserva', icon: 'ShieldCheck' },
    { label: 'Maschera Venturi', icon: 'Wind' },
    { label: 'Cannule nasali', icon: 'Droplet' },
    { label: 'Tubo ossigeno', icon: 'Cable' },
    { label: 'Flussometro', icon: 'Gauge' },
    { label: 'Umidificatore', icon: 'Droplets' },
    { label: 'Ossimetro', icon: 'Activity' },
    { label: 'Guanti monouso', icon: 'Hand' },
  ],
  sites: {
    title: 'Sedi di applicazione',
    illustration: {
      id: 'ossigenoterapia-sedi',
      alt: 'Cannule nasali e maschera sul viso',
      prompt: 'two adult patients side by side, one wearing thin nasal oxygen prongs and one wearing a clear plastic oxygen face mask with a reservoir bag',
      icon: 'User',
    },
    items: [
      '**Cannule nasali**: naso, flusso 1–6 L/min',
      '**Maschera**: bocca e naso, flusso 5–15 L/min',
      '**Venturi**: bocca e naso, FiO₂ calibrata',
    ],
  },
  safety: [
    { text: 'Verificare **prescrizione** e flusso', kind: 'ok' },
    { text: 'Controllare **collegamenti** e perdite', kind: 'ok' },
    { text: '**Divieto di fumo** in area O₂', kind: 'no' },
    { text: 'Evitare **oli e grassi** su dispositivi', kind: 'no' },
    { text: 'Monitorare **SpO₂** e sintomi', kind: 'warn' },
  ],
  steps: [
    {
      title: 'Preparazione',
      items: ['Igiene mani, guanti', 'Verificare prescrizione', 'Preparare dispositivo'],
      icon: 'Package',
    },
    {
      title: 'Collegamento',
      items: ['Collegare tubo al flussometro', 'Verificare flusso prescritto', 'Controllare umidificatore'],
      icon: 'ListChecks',
    },
    {
      title: 'Applicazione',
      items: ['Posizionare cannule/maschera', 'Verificare comfort', 'Regolare flusso'],
      icon: 'ListChecks',
    },
    {
      title: 'Monitoraggio',
      items: ['Misurare SpO₂', 'Valutare respiro', 'Controllare saturazione'],
      icon: 'Eye',
    },
    {
      title: 'Documentazione',
      items: ['Registrare flusso e FiO₂', 'Annotare SpO₂', 'Segnalare anomalie'],
      icon: 'FileText',
    },
  ],
  swatches: {
    title: 'Dispositivi e FiO₂',
    items: [
      { label: 'Cannule nasali', sub: '1–6 L/min, FiO₂ 24–44%', color: '#2f8fd8', ink: '#fff' },
      { label: 'Maschera a riserva', sub: '10–15 L/min, FiO₂ 60–100%', color: '#ef7fb0', ink: '#fff' },
      { label: 'Venturi 24%', sub: '2–4 L/min, FiO₂ 24%', color: '#2fa84f', ink: '#fff' },
      { label: 'Venturi 28%', sub: '2–4 L/min, FiO₂ 28%', color: '#f28c28', ink: '#fff' },
      { label: 'Venturi 31%', sub: '2–4 L/min, FiO₂ 31%', color: '#f6d32d', ink: '#17212f' },
      { label: 'Venturi 35%', sub: '2–4 L/min, FiO₂ 35%', color: '#8f9399', ink: '#fff' },
    ],
    note: 'FiO₂ effettiva dipende dal flusso e dal dispositivo.',
  },
  complications: [
    { label: 'Secchezza mucose', sub: 'nasali e orali' },
    { label: 'Ipercapnia', sub: 'in BPCO, rischio CO₂' },
    { label: 'Atelettasia', sub: 'da riassorbimento' },
    { label: 'Tossicità O₂', sub: 'uso prolungato > 48 h' },
    { label: 'Discomfort', sub: 'maschera o cannule' },
  ],
  nurseRole: [
    'Verificare **prescrizione** e flusso',
    'Monitorare **SpO₂** e sintomi',
    'Controllare **dispositivi** e collegamenti',
    'Educare il paziente all’uso',
  ],
}

export default map
