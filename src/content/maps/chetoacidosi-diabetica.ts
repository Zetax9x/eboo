import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'chetoacidosi-diabetica',
  chapter: 'patologie',
  title: 'Chetoacidosi diabetica',
  subtitle: 'Emergenza metabolica: iperglicemia, acidosi e chetosi. Diagnosi, terapia e assistenza',
  icon: 'Siren',
  status: 'bozza',
  sources: [
    'ADA — Standards of Care in Diabetes: Hyperglycemic Crises (2024)',
    'NICE — Diabetic ketoacidosis (NG28, 2023)',
  ],
  definition:
    'Emergenza metabolica caratterizzata da **iperglicemia**, **acidosi metabolica** e **chetonemia/chetonuria**, dovuta a un deficit assoluto o relativo di insulina con eccesso di ormoni contro-regolatori.',
  illustration: {
    id: 'dka-metabolismo',
    alt: 'Schematizzazione del metabolismo dei lipidi e della produzione di corpi chetonici',
    prompt: 'young adult sitting on a hospital bed breathing deeply and rapidly, flushed dry face, an empty glass of water on the bedside table',
    icon: 'FlaskConical',
  },
  types: [
    { name: 'Tipo 1', text: 'Più frequente; deficit **assoluto** di insulina. Spesso prima manifestazione della malattia.' },
    { name: 'Tipo 2', text: 'Deficit **relativo** di insulina. Scatenata da infezioni, stress o interruzione terapia.' },
    { name: 'Gestazionale', text: 'Rara ma grave; richiede monitoraggio stretto e spesso insulina.' },
    { name: 'Altre cause', text: 'Pancreatite, tumori, farmaci (es. SGLT2-inibitori), post-chirurgia.' },
  ],
  sections: [
    {
      title: 'Fattori scatenanti',
      icon: 'Zap',
      accent: 'red',
      items: [
        '**Infezioni**: polmonite, UTI, sepsi (causa più comune)',
        '**Interruzione** o riduzione della terapia insulinica',
        'Primo episodio di **DM tipo 1** non diagnosticato',
        'Infarto miocardico, ictus, pancreatite',
        'Farmaci: corticosteroidi, SGLT2-inibitori',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Polidipsia**, **poliuria**, nausea, vomito',
        'Dolore addominale diffuso (simula addome acuto)',
        'Respiro di **Kussmaul** (rapido e profondo)',
        'Alito **acetone** (odore di frutta/mela)',
        'Astenia, confusione, coma (stadi avanzati)',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**Glicemia** > 250 mg/dL (13,9 mmol/L)',
        '**pH** < 7,30 o **bicarbonati** < 18 mEq/L',
        '**Chetonemia** > 3 mmol/L o **chetonuria** positiva',
        'Emogasanalisi: **anion gap** aumentato (> 12 mEq/L)',
        'Esami: elettroliti, creatinina, emocromo, PCR, coltura urine',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Fluidoterapia**: NaCl 0,9% (15-20 mL/kg nelle prime 2 h)',
        '**Insulina endovenosa**: bolo 0,1 U/kg (opzionale) + infusione 0,1 U/kg/h',
        'Correzione **potassio**: se K+ < 3,3 mEq/L correggere con K+ prima di avviare/continuare l’insulina',
        'Trattamento della **causa scatenante** (es. antibiotici)',
        'Monitoraggio glicemia ogni **1-2 ore**, target 150-200 mg/dL',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Edema cerebrale**: rischio maggiore nei bambini e giovani adulti',
        '**Ipokaliemia** grave: aritmie cardiache, arresto cardiaco',
        '**Ipoglicemia** iatrogena (se non si riduce l’insulina)',
        '**Trombosi**: aumento del rischio tromboembolico',
        'Sindrome compartimentale (rara, da rianidratazione)',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        '**Glicemia** capillare ogni 1-2 ore',
        '**Emogasanalisi** ogni 2-4 ore fino a stabilizzazione',
        '**Elettroliti** (K+, Na+, Cl-) ogni 2-4 ore',
        'Diuresi oraria: target **> 0,5 mL/kg/h**',
        'Stato neurologico e segni di edema cerebrale',
      ],
    },
  ],
  nursing: [
    'Somministrare **fluidi** e **insulina** secondo protocollo, monitorando la risposta',
    'Controllare **potassio** prima e durante la terapia insulinica; avvisare se K+ < 3,3 mEq/L',
    'Monitorare **glicemia** e **chetonemia** per valutare la risoluzione della chetosi',
    'Valutare lo **stato neurologico** frequentemente per rilevare precocemente l’edema cerebrale',
    'Educare il paziente al **riconoscimento** dei sintomi e all’aderenza alla terapia insulinica',
  ],
  redFlags: [
    '**K+ < 3,3 mEq/L**: correggere con K+ prima di avviare/continuare l’insulina e avvisare il medico',
    '**Edema cerebrale**: cefalea, vomito, alterazione coscienza → **chiamare il medico subito**',
    '**Glicemia < 200 mg/dL**: ridurre o sospendere insulina, iniziare glucosio per via endovenosa',
  ],
}

export default map
