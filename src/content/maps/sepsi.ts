import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'sepsi',
  chapter: 'patologie',
  title: 'Sepsi',
  subtitle: 'Sindrome da risposta infiammatoria sistemica: definizione, diagnosi, terapia e assistenza',
  icon: 'Siren',
  status: 'bozza',
  sources: [
    'Society of Critical Care Medicine — Surviving Sepsis Campaign: International Guidelines (2021)',
    'Ministero della Salute — Raccomandazioni per la gestione della sepsi e dello shock settico',
    'IDSA — Infectious Diseases Society of America Guidelines for Management of Sepsis',
  ],
  definition:
    'Sindrome potenzialmente letale causata da una **risposta disregolata dell’ospite all’infezione**, con disfunzione d’organo che minaccia la vita.',
  illustration: {
    id: 'sepsi-infiammazione',
    alt: 'Infiammazione sistemica e disfunzione d’organo',
    prompt: 'blood vessel with inflammatory cells, cytokines spreading through the bloodstream, organ dysfunction visualization',
    icon: 'Siren',
  },
  types: [
    { name: 'Sepsis', text: 'Infezione + **disfunzione d’organo** (SOFA ≥ 2). Mortalità 20-30%.' },
    { name: 'Shock settico', text: 'Sepsis + **ipotensione** refrattaria ai fluidi + **lattato > 2 mmol/L**. Mortalità 40-50%.' },
    { name: 'Sepsis grave', text: 'Terminologia obsoleta (SIRS 1992); oggi si usa **sepsi** con SOFA.' },
    { name: 'Shock refrattario', text: 'Necessità di **vasopressori** per mantenere MAP ≥ 65 mmHg. Prognosi infausta.' },
  ],
  sections: [
    {
      title: 'Cause e fattori di rischio',
      icon: 'Microscope',
      accent: 'purple',
      items: [
        '**Polmonite** (più comune), infezioni urinarie, addominali, cutanee',
        'Pazienti **immunodepressi**, anziani, neonati',
        'Cateteri centrali, ferite chirurgiche, ustioni',
        'Diabete, neoplasie, terapia cortisonica',
        'Ospedalizzazione prolungata, uso di antibiotici',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Febbre** (> 38,3 °C) o ipotermia (< 36 °C)',
        '**Tachicardia** (> 90 bpm), **tachipnea** (> 22 atti/min)',
        'Confusione, alterazione dello stato di coscienza',
        '**Ipotensione** (PAS < 90 mmHg o calo > 40 mmHg)',
        'Pelle fredda, marmorizzata, capillare lento (> 2 s)',
        'Oliguria (< 0,5 mL/kg/h)',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**qSOFA**: età ≥ 65, PA sistolica ≤ 100, GCS < 15, frequenza respiratoria ≥ 22 (≥ 2 = rischio)',
        '**SOFA score**: ≥ 2 punti = sepsi (respiratorio, coagulazione, fegato, CV, renale, neuro)',
        '**Lattato sierico** > 2 mmol/L (shock settico)',
        'Emoculture, PCR, procalcitonina, emocromo, funzionalità renale',
        'Imaging: RX torace, ecografia, TAC se indicata',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Antibiotici entro 1 ora** (empirici, poi mirati)',
        '**Fluidi**: cristalloidi 30 mL/kg nei primi 30 min',
        '**Vasopressori**: norepinefrina prima scelta (MAP ≥ 65 mmHg)',
        'Fonte infettiva: drenaggio, rimozione cateteri',
        'Supporto respiratorio, emodinamico, renale (ECMO, dialisi)',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Shock refrattario**, aritmie, insufficienza cardiaca',
        '**Coagulazione intravascolare disseminata** (CID)',
        'Insufficienza multiorgano: renale, epatica, polmonare',
        'Morte (mortalità 20-50% a seconda della gravità)',
        'Sequenze neurologiche, stress post-traumatico',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        '**Parametri vitali** ogni 5-15 min in fase acuta',
        '**Diuresi** (target > 0,5 mL/kg/h), emogasanalisi',
        '**Lattato** ogni 2-4 h fino a normalizzazione',
        'SOFA score giornaliero, emocolture di controllo',
        'ECG continuo, ecocardiogramma se indicato',
      ],
    },
  ],
  nursing: [
    'Riconoscere precocemente i **segnali d’allarme** (qSOFA, SOFA)',
    'Somministrare **antibiotici entro 1 ora** dalla diagnosi',
    'Monitorare **MAP, diuresi, lattato** e stato di coscienza',
    'Gestire **cateteri centrali**, linee di infusione, accessi vascolari',
    'Prevenire **ulcere da pressione**, trombosi venosa profonda',
    'Educare il paziente e la famiglia alla **riabilitazione** post-sepsi',
  ],
  redFlags: [
    '**MAP < 65 mmHg** nonostante fluidi: iniziare vasopressori subito',
    '**Lattato > 4 mmol/L** o in aumento: peggioramento prognostico',
    '**Alterazione dello stato di coscienza** (GCS < 15): rischio di aspirazione, intubazione',
    '**Oliguria/anuria** persistente: rischio di insufficienza renale acuta',
  ],
}

export default map
