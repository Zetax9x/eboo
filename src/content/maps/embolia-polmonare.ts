import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'embolia-polmonare',
  chapter: 'patologie',
  title: 'Embolia polmonare',
  subtitle: 'Ostruzione dell’albero polmonare: diagnosi, terapia anticoagulante e assistenza',
  icon: 'Wind',
  status: 'bozza',
  sources: [
    'ESC — 2019 Guidelines for the diagnosis and management of acute pulmonary embolism',
    'ISTH — International Society on Thrombosis and Haemostasis: Clinical Practice Guidelines',
    'AIFA — Raccomandazioni per l’uso dei farmaci antitrombotici',
  ],
  definition:
    'Ostruzione acuta di un’arteria polmonare da parte di un **trombo** (di solito di origine venosa profonda) o di altro materiale, che causa **mismatch V/Q** e sovraccarico acuto del ventricolo destro.',
  illustration: {
    id: 'ep-trombo-polmone',
    alt: 'Trombo che occlude un’arteria polmonare',
    prompt: 'cross-section of a pulmonary artery with a large blood clot blocking the lumen, healthy lung tissue in background, medical illustration style',
    icon: 'Wind',
  },
  types: [
    { name: 'Massiva', text: 'Instabilità emodinamica (PA sistolica < 90 mmHg o calo ≥ 40 mmHg). **Mortalità elevata**.' },
    { name: 'Submassiva', text: 'Stabilità emodinamica ma **disfunzione ventricolare destra** (ecocardiogramma, troponina).' },
    { name: 'Non massiva', text: 'Stabile emodinamicamente, **senza** segni di disfunzione VD. La maggior parte dei casi.' },
    { name: 'Saddle embolus', text: 'Trombo che si incastra alla biforcazione dell’arteria polmonare principale. **Emergenza critica**.' },
  ],
  sections: [
    {
      title: 'Fattori di rischio',
      icon: 'TriangleAlert',
      accent: 'purple',
      items: [
        '**Trombosi venosa profonda** (TVP) delle gambe o del bacino',
        'Immobilizzazione prolungata, chirurgia maggiore, trauma',
        'Cancro attivo, **sindrome antifosfolipidica**, gravidanza/puerperio',
        'Terapia ormonale, **trombofilia** ereditaria',
        'Cateteri venosi centrali, obesità, età > 60 anni',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Dispnea** improvvisa (sintomo più comune)',
        '**Dolore toracico** pleuritico (peggiora con la respirazione)',
        '**Tachicardia** (> 100 bpm), tachipnea, ipossiemia',
        'Emottisi (presente in ~10-20% dei casi)',
        'Sincope, cianosi, dolore al polpaccio (se TVP associata)',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**D-dimero**: alta sensibilità, bassa specificità. Utile per escludere EP a basso rischio',
        '**Angio-TC polmonare**: gold standard diagnostico',
        '**Ecocardiogramma**: dilatazione VD, iperfunzione, segno di McConnell',
        '**V/Q scan**: alternativa se allergia al contrasto o insufficienza renale',
        'Elettrocardiogramma: S1Q3T3 (non specifico), tachicardia sinusale',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Anticoagulazione immediata**: Eparina non frazionata (ENF) o Eparina a basso peso molecolare (EBPM)',
        '**DOAC** (Rivaroxaban, Apixaban, Dabigatran, Edoxaban): terapia di mantenimento',
        '**Trombolisi** (Alteplase): riservata a EP massiva o submassiva con deterioramento',
        '**Embolectomia chirurgica** o cateterismo: se la trombolisi è controindicata o fallisce',
        '**Filtro cava inferiore**: se anticoagulazione controindicata o recidiva nonostante terapia',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Shock cardiogeno** e arresto cardiaco (EP massiva)',
        '**Sanguinamento** maggiore (complicanza principale della terapia anticoagulante)',
        '**Sindrome post-embolica** (ipertensione polmonare cronica tromboembolica - CTEPH)',
        'Recidiva di EP o TVP',
        'Insufficienza ventricolare destra acuta',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        '**SpO2** continua, frequenza cardiaca, pressione arteriosa',
        '**Troponina** e **BNP/NT-proBNP**: marcatori di danno VD',
        'Emoglobina e ematocrito: monitoraggio per sanguinamenti',
        'Funzione renale (creatinina): adeguare le dosi di EBPM/DOAC',
        'Segni di TVP residua o recidiva (dolore, edema)',
      ],
    },
  ],
  nursing: [
    'Posizionare il paziente in **decubito supino** con testa leggermente elevata; ossigenoterapia per mantenere SpO2 ≥ 94%',
    'Somministrare **anticoagulanti** secondo protocollo; verificare coagulazione (aPTT per ENF, anti-Xa per EBPM)',
    'Monitorare strettamente i **parametri vitali** e i segni di instabilità emodinamica',
    'Valutare e documentare i **sintomi di sanguinamento** (emottisi, ematuria, ematomi, melena)',
    'Educare il paziente alla **terapia anticoagulante** a lungo termine: aderenza, interazioni, segni di allarme',
  ],
  redFlags: [
    '**Instabilità emodinamica** (PA sistolica < 90 mmHg, sincope, shock): **avvisare subito il medico** e preparare la trombolisi',
    '**Sanguinamento attivo** o segni di emorragia interna: sospendere anticoagulanti e avvisare il medico',
    '**Peggioramento improvviso** della dispnea, cianosi, dolore toracico intenso: rivalutare immediatamente',
  ],
}

export default map
