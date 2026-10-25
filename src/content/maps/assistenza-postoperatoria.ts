import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'assistenza-postoperatoria',
  chapter: 'procedure',
  title: 'Assistenza postoperatoria',
  subtitle: 'Monitoraggio, gestione del dolore e prevenzione delle complicanze',
  icon: 'ClipboardCheck',
  status: 'bozza',
  sources: [
    'NICE — Postoperative care (NG212, 2023)',
    'SIAARTI — Linee guida sul dolore postoperatorio',
    'OMS — Sicurezza del paziente in chirurgia',
  ],
  materials: [
    { label: 'Monitor parametri', icon: 'Monitor' },
    { label: 'Analgesici', icon: 'Pill' },
    { label: 'Antiemetici', icon: 'Droplet' },
    { label: 'Ossigenoterapia', icon: 'Wind' },
    { label: 'COPD', icon: 'Footprints' },
    { label: 'Spirometro', icon: 'Waves' },
    { label: 'Cuscino tosse', icon: 'Box' },
    { label: 'Cartella', icon: 'FileText' },
  ],
  sites: {
    title: 'Aree critiche',
    illustration: {
      id: 'apo-siti',
      alt: 'Paziente post-operatorio',
      prompt: 'patient lying in bed with medical monitoring equipment',
      icon: 'Target',
    },
    items: [
      '**Torace**: respiro, SpO2',
      '**Addome**: peristalsi, drenaggi',
      '**Arti**: circolo, edema',
    ],
  },
  safety: [
    { text: 'Verificare **identità** e intervento', kind: 'ok' },
    { text: 'Valutare **coscienza** (Glasgow)', kind: 'ok' },
    { text: 'Controllare **allergie**', kind: 'warn' },
    { text: '**No cibo/bevanda** prima di 2h', kind: 'no' },
    { text: 'Valutare **emorragia** ogni 15 min', kind: 'alert' },
  ],
  steps: [
    {
      title: 'Valutazione iniziale',
      items: [
        'Identificare paziente',
        'PA, FC, FR, SpO2, T°',
        'Dolore (EVA)',
      ],
      icon: 'Eye',
    },
    {
      title: 'Gestione dolore',
      items: [
        'Analgesici **entro 30 min**',
        'Valutare dopo **30 min**',
        'Prevenire nausea/sedazione',
      ],
      icon: 'ListChecks',
    },
    {
      title: 'Respiro',
      items: [
        'Respirazione profonda',
        'Tosse produttiva',
        'O2 se **SpO2 < 94%**',
      ],
      icon: 'Wind',
    },
    {
      title: 'Ferita e drenaggi',
      items: [
        'Sanguinamento, secrezioni',
        'Medicazione se sporca',
        'Volume/coloro drenaggi',
      ],
      icon: 'ListChecks',
    },
    {
      title: 'Prevenzione',
      items: [
        'Mobilità precoce',
        'COPD per TEP',
        'Idratazione/alimentazione',
      ],
      icon: 'ListChecks',
    },
    {
      title: 'Documentazione',
      items: [
        'Parametri e interventi',
        'Comunicare alterazioni',
        'Piano dimissione',
      ],
      icon: 'FileText',
    },
  ],
  complications: [
    { label: 'Emorragia', sub: 'sanguinamento ferita/drenaggi' },
    { label: 'Infezione', sub: 'febbre, pus' },
    { label: 'TEP', sub: 'edema, dispnea' },
    { label: 'Atelettasie', sub: 'raffreddamento' },
    { label: 'Ileus', sub: 'distensione addominale' },
    { label: 'Nausea', sub: 'oppioidi/anestesia' },
  ],
  nurseRole: [
    'Monitorare **parametri** ogni 15–30 min',
    'Valutare **dolore** e trattare',
    'Incentivare **mobilità** e respiro',
    'Prevenire **complicanze**',
  ],
}

export default map
