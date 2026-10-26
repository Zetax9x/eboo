import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'polmonite',
  chapter: 'patologie',
  title: 'Polmonite',
  subtitle: 'Infezione del parenchima polmonare: eziologia, diagnosi, terapia e assistenza',
  icon: 'Wind',
  status: 'bozza',
  sources: [
    'IDSA/ATS — Clinical Practice Guidelines for the Diagnosis and Management of Community-Acquired Pneumonia (2019)',
    'ESICM — Surviving Sepsis Campaign (2021)',
    'Ministero della Salute – Linee guida per la diagnosi e la terapia della polmonite acquisita in comunità (2017)',
  ],
  definition:
    'Infezione acuta del **parenchima polmonare** causata da batteri, virus o funghi, con infiammazione degli alveoli e riempimento con essudato.',
  illustration: {
    id: 'polmonite-alveoli-infiammati',
    alt: 'Alveoli polmonari infiammati con essudato',
    prompt: 'inflamed alveoli filled with pus and inflammatory cells, red swollen lung tissue, microscopic view of infection',
    icon: 'Wind',
  },
  types: [
    { name: 'Comunitaria (CAP)', text: 'Insorge al di fuori dell’ospedale. **Pneumococco** è l’agente più comune.' },
    { name: 'Nosocomiale (HAP)', text: 'Insorge **≥ 48 h** dopo l’ospedalizzazione. Rischio di germi multiresistenti.' },
    { name: 'Aspirativa', text: 'Ingestione di materiale orofaringeo. Coinvolge spesso **batteri anaerobi**.' },
    { name: 'Atipica', text: 'Causata da **Mycoplasma**, **Chlamydia** o **Legionella**. Sintomi più sfumati.' },
  ],
  sections: [
    {
      title: 'Fattori di rischio',
      icon: 'ShieldAlert',
      accent: 'purple',
      items: [
        'Età **> 65 anni** o **< 2 anni**',
        'Fumo attivo, alcolismo cronico',
        'Malattie croniche: **BPCO**, diabete, insufficienza renale',
        'Immunosoppressione (HIV, chemioterapia)',
        'Aspirazione di secrezioni (disfagia, coma)',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Thermometer',
      accent: 'orange',
      items: [
        '**Febbre** > 38 °C, brividi',
        '**Tosse** produttiva (essudato purulento o ematico)',
        '**Dolore toracico** pleuritico (peggiora con la respirazione)',
        'Dispnea, tachicardia, tachipnea',
        'Confusione mentale (soprattutto negli anziani)',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'Microscope',
      accent: 'blue',
      items: [
        '**Radiografia del torace**: opacità alveolare o interstiziale',
        '**Emocromo**: leucocitosi con neutrofilia',
        '**PCR** e **procalcitonina** (marker di infezione batterica)',
        '**Coltura dell’essudato** (se possibile) e emocoltura',
        'Punteggio **CURB-65** o **PSI** per la gravità',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Antibiotici empirici**: amoxicillina o macrolidi (CAP lieve)',
        'CAP grave: **cefalo**sporina + macrolide o **quinolone respiratoria**',
        'HAP: copertura per **Pseudomonas** e MRSA (es. piperacillina-tazobactam)',
        '**Ossigenoterapia** per mantenere SpO₂ ≥ 92%',
        'Fluidoterapia endovenosa se disidratato o settico',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Empiema pleurico**: raccolta di pus nella cavità pleurica',
        '**Sepsis** e shock settico',
        '**Insufficienza respiratoria** acuta',
        'Ascesso polmonare',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        '**SpO₂** continua o frequente',
        'Parametri vitali: PA, FC, FR, temperatura',
        'Valutazione della **tossicità** e della coscienza',
        'Controllo della risposta alla terapia antibiotica (48-72 h)',
      ],
    },
  ],
  nursing: [
    'Posizionare il paziente in **decubito semi-seduto** (45°) per facilitare la respirazione',
    'Somministrare **antipiretici** e analgesici secondo prescrizione',
    'Incentivare la **mobilizzazione** e gli esercizi respiratori (es. espirazione labiale)',
    'Monitorare l’aderenza alla terapia antibiotica e gli effetti collaterali',
    'Educare al **lavaggio delle mani** e alla prevenzione delle infezioni',
  ],
  redFlags: [
    '**SpO₂ < 90%** o peggioramento rapido della dispnea: **avvisare subito il medico**',
    'Confusione acuta o alterazione del livello di coscienza: possibile **sepsi**',
    'Dolore toracico intenso e improvviso: escludere **embolia polmonare** o pneumotorace',
  ],
}

export default map
