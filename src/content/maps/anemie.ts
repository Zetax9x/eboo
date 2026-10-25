import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'anemie',
  chapter: 'patologie',
  title: 'Anemie',
  subtitle: 'Classificazione, cause, diagnosi e assistenza infermieristica',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'World Health Organization (WHO) – Haemoglobin concentration thresholds for anaemia, 2011',
    'Società Italiana di Ematologia (SIE) – Linee guida per la diagnosi e il trattamento dell’anemia, 2021',
    'Harrison’s Principles of Internal Medicine, 20th edition – Chapter 73 “Anemia”, 2018',
  ],
  definition:
    'Riduzione della concentrazione di **emoglobina** o dell’ematocrito al di sotto dei valori normali per età e sesso, con conseguente diminuzione della capacità di trasporto dell’ossigeno ai tessuti.',
  illustration: {
    id: 'anemie-eritrociti',
    alt: 'Eritrociti sani e anemici al microscopio',
    prompt: 'microscopic view of healthy red blood cells next to pale microcytic and macrocytic red blood cells, blood smear background',
    icon: 'Droplet',
  },
  types: [
    { name: 'Microcitica ipocromica', text: 'MCV < 80 fL. Tipica da **carenza di ferro**, talassemia, anemie croniche.' },
    { name: 'Normocitica', text: 'MCV 80–100 fL. Tipica da **anemia cronica**, emolisi, insufficienza renale.' },
    { name: 'Macrocitica', text: 'MCV > 100 fL. Tipica da **carenza di B12/folati**, epatopatie, alcolismo.' },
    { name: 'Emolitica', text: 'Distruzione accelerata degli eritrociti. **Iperbilirubinemia**, emoglobinuria.' },
  ],
  sections: [
    {
      title: 'Cause principali',
      icon: 'TriangleAlert',
      accent: 'purple',
      items: [
        '**Sanguinamento**: gastrointestinale (ulcera, tumore), mestruale, traumatico',
        '**Carenze nutrizionali**: ferro, vitamina B12, acido folico',
        '**Malattie croniche**: neoplasie, infezioni, malattie autoimmuni',
        '**Insufficienza renale**: ridotta produzione di eritropoietina',
        '**Emolisi**: sferocitosi, anemia falciforme, autoimmuni',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Asthenia**, affaticamento, dispnea da sforzo',
        '**Pallidezza** di cute, congiuntive, mucose',
        'Tachicardia, palpitazioni, cefalea',
        'Glossite, cheilite, unghie a cucchiaio (ferro)',
        'Parestesie, atassia (B12)',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**Emocromo**: Hb, Hct, MCV, MCH, MCHC',
        '**Ferro sierico**, ferritina, TIBC (carenza di ferro)',
        '**Vitamina B12**, folati (macrocitiche)',
        'Reticolociti, LDH, bilirubina (emolisi)',
        'Esame del sangue periferico, elettroforesi Hb',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Ferro orale**: solfato ferroso 200 mg (equivalente a 65 mg di ferro elementare) al giorno, se tollerato',
        '**Ferro endovena**: se intolleranza o malassorbimento',
        '**Vitamina B12**: cianocobalamina IM 1000 µg (iniettabile)',
        '**Trasfusione**: Hb < 7 g/dL (o < 8 g/dL in cardiopatici)',
        'Trattamento della causa sottostante',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Insufficienza cardiaca** da ipervolemia compensatoria',
        'Angina pectoris, infarto miocardico',
        'Ipossia cerebrale, sincope',
        'Infezioni (neutropenia associata)',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        '**Emocromo** a 2–4 settimane dalla terapia',
        'Ferritina, ferro, TIBC (se terapia ferro)',
        'B12, folati (se terapia vitaminica)',
        'Segni vitali, SpO2, frequenza cardiaca',
      ],
    },
  ],
  nursing: [
    'Valutare **pallidezza**, frequenza cardiaca, SpO2',
    'Somministrare ferro/B12 secondo prescrizione, verificare tolleranza',
    'Educare alla **dieta ricca di ferro** (carne rossa, legumi, agrumi)',
    'Monitorare effetti collaterali: stipsi (ferro), reazioni (trasfusione)',
    'Riferire al medico: dispnea a riposo, dolore toracico, sincope',
  ],
  redFlags: [
    '**Hb < 7 g/dL** con sintomi: avvisare subito, preparare trasfusione',
    'Dolore toracico, dispnea grave, sincope: **valutazione cardiaca urgente**',
    'Sanguinamento attivo: quantificare, avvisare, preparare emostasi',
  ],
}

export default map
