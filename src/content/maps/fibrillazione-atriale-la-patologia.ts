import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'fibrillazione-atriale-la-patologia',
  chapter: 'patologie',
  title: 'Fibrillazione atriale: la patologia',
  subtitle: 'L’aritmia più frequente: rischio di ictus, terapia e assistenza (ESC 2024)',
  icon: 'HeartPulse',
  status: 'bozza',
  sources: [
    'ESC 2024 Guidelines for the management of atrial fibrillation (Eur Heart J 2024)',
    'AIFA — Nota 97: prescrizione dei farmaci anticoagulanti orali nella FA non valvolare',
  ],
  definition:
    'Tachiaritmia sopraventricolare con attivazione atriale **caotica**: gli atri non si contraggono, il ritmo ventricolare è **irregolarmente irregolare**. La stasi in auricola sx favorisce **trombi** ed **ictus**.',
  illustration: {
    id: 'fibrillazione-atriale-la-patologia-atri',
    alt: 'Cuore con atri in attività elettrica caotica e trombo in auricola sinistra',
    prompt: 'human heart with chaotic electrical waves across both atria, small blood clot inside the left atrial appendage, travelling embolus towards the brain',
    icon: 'HeartPulse',
  },
  types: [
    { name: 'Parossistica', text: 'Termina **entro 7 giorni**, spontaneamente o con cardioversione.' },
    { name: 'Persistente', text: 'Dura **> 7 giorni**; “di lunga durata” se **> 12 mesi**.' },
    { name: 'Permanente', text: 'Si rinuncia al ritmo sinusale: solo **controllo della frequenza**.' },
    { name: 'Primo riscontro', text: 'Prima diagnosi, indipendentemente da durata e sintomi.' },
  ],
  sections: [
    {
      title: 'Cause e fattori',
      icon: 'Layers',
      accent: 'purple',
      items: [
        '**Età**, ipertensione, scompenso, valvulopatie',
        'Obesità, **apnee notturne**, diabete, alcol',
        'Ipertiroidismo, febbre, post-cardiochirurgia',
        'Sepsi, squilibri elettrolitici',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Cardiopalmo**, dispnea, astenia',
        'Vertigini, ridotta tolleranza allo sforzo',
        '**Polso irregolare**; deficit di polso (apicale > radiale)',
        'Spesso **asintomatica**: esordio con ictus',
        'Diagnosi: **ECG** (12 derivazioni o singola traccia ≥ 30 s)',
      ],
    },
    {
      title: 'Prevenzione ictus',
      icon: 'Brain',
      accent: 'red',
      items: [
        'Score **CHA₂DS₂-VA** (ESC 2024, senza il sesso)',
        'Score **≥ 2**: anticoagulante raccomandato; **1**: da considerare',
        '**DOAC** preferiti al warfarin',
        'Warfarin (INR **2–3**) se protesi meccanica o stenosi mitralica moderata-severa',
        'Aspirina **non** previene l’ictus nella FA',
      ],
    },
    {
      title: 'CHA₂DS₂-VA',
      icon: 'Calculator',
      accent: 'blue',
      items: [
        '**C** scompenso · **H** ipertensione · **D** diabete: 1 punto',
        '**A₂** età **≥ 75** anni: 2 punti',
        '**S₂** pregresso ictus/TIA/embolia: 2 punti',
        '**V** malattia vascolare · **A** età 65–74: 1 punto',
      ],
    },
    {
      title: 'Frequenza e ritmo',
      icon: 'Activity',
      accent: 'teal',
      items: [
        '**Frequenza**: beta-bloccanti, calcioantagonisti non DHP, digossina',
        'Obiettivo iniziale FC a riposo **< 110 bpm**',
        '**Ritmo**: cardioversione elettrica o farmacologica (es. amiodarone, flecainide)',
        '**Ablazione** transcatetere in casi selezionati',
      ],
    },
    {
      title: 'Cardioversione',
      icon: 'Zap',
      accent: 'navy',
      items: [
        'Paziente instabile: **CVE sincronizzata urgente**',
        'FA **> 24 h** o durata ignota: **3 settimane** di anticoagulante o **ETE**',
        'Anticoagulare almeno **4 settimane** dopo',
        'Consenso informato, digiuno, sedazione',
      ],
    },
  ],
  nursing: [
    'Rilevare il polso per **60 secondi** (apicale e radiale), monitoraggio ECG',
    'DOAC: orari regolari, **non saltare dosi**, controllo della funzione renale',
    'Warfarin: **INR** periodico, interazioni con farmaci e alimenti ricchi di vitamina K',
    'Educare a riconoscere **sanguinamenti** e sintomi di ictus (**BE-FAST**)',
    'Digossina: controllo FC prima della somministrazione, segni di **tossicità**',
  ],
  redFlags: [
    'Deficit neurologico improvviso: **sospetto ictus**, codice stroke',
    'FA con ipotensione, dolore toracico, scompenso: **instabile**',
    'Melena, ematuria, sanguinamento importante in anticoagulato',
    'FC molto elevata o pause lunghe sul monitor',
  ],
}

export default map
