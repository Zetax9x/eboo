import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'demenze-e-alzheimer',
  chapter: 'patologie',
  title: 'Demenze e Alzheimer',
  subtitle: 'Declino cognitivo progressivo: tipi, diagnosi, terapia e assistenza',
  icon: 'Brain',
  status: 'bozza',
  sources: [
    'ISS-SNLG — Linea guida Diagnosi e trattamento di demenza e Mild Cognitive Impairment',
    'Ministero della Salute — Piano Nazionale Demenze',
    'NICE NG97 — Dementia: assessment, management and support (2018)',
  ],
  definition:
    'Sindrome con declino **acquisito e progressivo** di memoria e altre funzioni cognitive, tale da compromettere l’**autonomia** nella vita quotidiana.',
  illustration: {
    id: 'demenze-cervello-atrofia',
    alt: 'Cervello sano a confronto con cervello atrofico e anziano assistito',
    prompt: 'side by side comparison of a healthy brain and an atrophic brain with enlarged ventricles and shrunken hippocampus, an elderly person holding hands with a caregiver',
    icon: 'Brain',
  },
  types: [
    { name: 'Alzheimer (~60%)', text: 'Placche di **β-amiloide** e grovigli di **tau**; esordio con deficit di **memoria**.' },
    { name: 'Vascolare', text: 'Da ictus o malattia dei piccoli vasi; decorso **a gradini**.' },
    { name: 'A corpi di Lewy', text: 'Fluttuazioni, **allucinazioni visive**, parkinsonismo.' },
    { name: 'Frontotemporale', text: 'Esordio precoce: alterazioni del **comportamento** e del linguaggio.' },
  ],
  sections: [
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Memoria recente** compromessa (fasi iniziali)',
        'Disorientamento **spazio-temporale**',
        'Afasia, aprassia, agnosia',
        'Deficit di giudizio e di funzioni esecutive',
        'Perdita progressiva delle **ADL** e IADL',
      ],
    },
    {
      title: 'BPSD',
      icon: 'Users',
      accent: 'purple',
      items: [
        'Sintomi **comportamentali e psicologici**',
        '**Agitazione**, aggressività, wandering',
        'Deliri, allucinazioni',
        'Apatia, depressione, ansia',
        'Inversione del ritmo **sonno-veglia**',
        'Sundowning: peggioramento serale',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'Microscope',
      accent: 'blue',
      items: [
        'Test: **MMSE**, MoCA, test dell’orologio',
        'Esami per cause reversibili: **TSH**, vit. B12, folati',
        'Imaging: **RM**/TC, PET',
        'Biomarcatori **liquorali** o plasmatici (amiloide, tau)',
        'Escludere **delirium** e depressione',
        'Presa in carico nei **CDCD**',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Inibitori AChE**: donepezil, rivastigmina, galantamina',
        '**Memantina**: forme moderate-gravi',
        'Anticorpi **anti-amiloide** in fasi precoci selezionate',
        'BPSD: prima interventi **non farmacologici**',
        'Antipsicotici: solo se necessari, a basse dosi',
      ],
    },
    {
      title: 'Fattori di rischio',
      icon: 'Target',
      accent: 'red',
      items: [
        'Età (principale), familiarità, **APOE ε4**',
        '**Ipertensione**, diabete, fumo, obesità',
        'Ipoacusia non corretta, isolamento sociale',
        'Sedentarietà, bassa scolarità, depressione',
        'Prevenzione: stile di vita, stimolazione cognitiva',
      ],
    },
    {
      title: 'Interventi non farmacologici',
      icon: 'Lightbulb',
      accent: 'teal',
      items: [
        '**Stimolazione cognitiva**, terapia di riorientamento (ROT)',
        'Routine stabile, ambiente **familiare**',
        'Attività significative, musica',
        'Sostegno e formazione del **caregiver**',
        'Centri diurni, RSA, nuclei Alzheimer',
      ],
    },
  ],
  nursing: [
    'Comunicazione **semplice**: frasi brevi, una richiesta alla volta, contatto visivo',
    'Mantenere le **autonomie** residue, non sostituirsi al paziente',
    'Prevenire **cadute**, fughe e malnutrizione; controllare idratazione',
    'Evitare la **contenzione**: cercare la causa dell’agitazione (dolore, bisogni)',
    'Valutare il **dolore** con scale osservazionali (es. **PAINAD**)',
  ],
  redFlags: [
    'Peggioramento **acuto** di confusione o attenzione: sospettare **delirium**',
    'Cause frequenti: infezioni, farmaci, ritenzione urinaria, fecaloma',
    'Rifiuto di cibo e liquidi, calo ponderale, **disfagia**',
  ],
}

export default map
