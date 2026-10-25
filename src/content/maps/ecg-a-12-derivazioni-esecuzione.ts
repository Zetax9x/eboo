import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'ecg-a-12-derivazioni-esecuzione',
  chapter: 'procedure',
  title: 'ECG a 12 derivazioni',
  subtitle: 'Posizionamento elettrodi e acquisizione del tracciato',
  icon: 'HeartPulse',
  status: 'bozza',
  sources: [
    'ESC — Guidelines for the management of patients with ST-segment elevation acute myocardial infarction (2023)',
    'AHA — Basic Life Support and Cardiovascular Emergency Care (2020)',
    'FNOPI — Codice deontologico e standard assistenziali',
  ],
  materials: [
    { label: 'Elettrodi adesivi (10)', icon: 'Sticker' },
    { label: 'Apparecchio ECG', icon: 'Monitor' },
    { label: 'Rasoi / pinzette', icon: 'Scissors' },
    { label: 'Alcol / detergente', icon: 'Droplets' },
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Carta termica', icon: 'FileText' },
    { label: 'Tende / privacy', icon: 'ShieldCheck' },
    { label: 'Cestino rifiuti', icon: 'Trash2' },
  ],
  sites: {
    title: 'Posizionamento elettrodi',
    illustration: {
      id: 'ecg-siti',
      alt: 'Posizione degli elettrodi su torace e arti',
      prompt: 'human torso with four limb electrodes on wrists and ankles, and six chest electrodes placed on the rib cage',
      icon: 'Target',
    },
    items: [
      '**Arto dx**: rosso',
      '**Arto sx**: giallo',
      '**Gamba dx**: verde',
      '**Gamba sx**: nero',
      '**V1**: 4° SIC, bordo destro sterno',
      '**V2**: 4° SIC, bordo sinistro sterno',
      '**V3**: metà tra V2 e V4',
      '**V4**: 5° SIC, linea medioclaveare',
      '**V5**: 5° SIC, linea ascellare ant.',
      '**V6**: 5° SIC, linea ascellare media',
    ],
  },
  safety: [
    { text: 'Paziente **nudo** dal torace in su', kind: 'ok' },
    { text: 'Cute **pulita e asciutta**', kind: 'ok' },
    { text: 'Elettrodi su **ossa** (clavicola, sterno)', kind: 'warn' },
    { text: '**Niente** pacemaker senza verifica', kind: 'alert' },
    { text: 'Verificare **allergie** alla colla', kind: 'warn' },
    { text: 'Ottenere **consenso**', kind: 'ok' },
  ],
  steps: [
    {
      title: 'Preparazione',
      items: ['Spiegare la procedura', 'Garantire **privacy**', 'Posizione **supina**'],
      icon: 'User',
    },
    {
      title: 'Cute',
      items: ['Pulire con **alcol**', 'Rasare peli se folti', 'Asciugare bene'],
      icon: 'Droplets',
    },
    {
      title: 'Elettrodi arti',
      items: ['**Rosso** arto dx', '**Giallo** arto sx', '**Verde** gamba dx', '**Nero** gamba sx'],
      icon: 'Target',
    },
    {
      title: 'Elettrodi toracici',
      items: ['**V1-V2** bordo sternale', '**V3** metà V2-V4', '**V4** linea medioclaveare', '**V5-V6** linea ascellare'],
      icon: 'Heart',
    },
    {
      title: 'Impostazione',
      items: ['Velocità: **25 mm/s**', 'Guadagno: **10 mm/mV**', 'Filtro: **AC 50 Hz**'],
      icon: 'Monitor',
    },
    {
      title: 'Acquisizione',
      items: ['Paziente **immobile**', 'Respirazione **regolare**', 'Durata: **10 secondi**'],
      icon: 'Activity',
    },
    {
      title: 'Verifica',
      items: ['Tracciato **pulito**', 'Onde **P, QRS, T** visibili', 'Ripetere se necessario'],
      icon: 'CircleCheck',
    },
    {
      title: 'Rimozione',
      items: ['Rimuovere **delicatamente**', 'Pulire cute se serve', 'Annotare **data, ora**'],
      icon: 'Hand',
    },
  ],
  complications: [
    { label: 'Artefatti', sub: 'movimento, tensione muscolare' },
    { label: 'Elettrodi staccati', sub: 'tracciato piatto o irregolare' },
    { label: 'Interferenza', sub: 'linee ondulate (50 Hz)' },
    { label: 'Cute irritata', sub: 'rossore, prurito (allergia)' },
    { label: 'Tracciato illeggibile', sub: 'necessità di ripetere' },
  ],
  nurseRole: [
    'Garantire **privacy** e comfort',
    'Verificare **qualità** del tracciato',
    'Ripetere se **artefatti**',
    'Documentare **data, ora, operatore**',
  ],
}

export default map
