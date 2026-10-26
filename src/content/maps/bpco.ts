import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'bpco',
  chapter: 'patologie',
  title: 'BPCO',
  subtitle: 'Broncopneumopatia cronica ostruttiva: stadi GOLD, terapia e assistenza',
  icon: 'Wind',
  status: 'bozza',
  sources: [
    'GOLD — Global Strategy for the Diagnosis, Management, and Prevention of COPD (2024)',
    'Linee guida della Società Italiana di Pneumologia (SIP) per la BPCO (2023)',
    'Codice deontologico FNOPI',
  ],
  definition:
    'Malattia cronica delle vie aeree caratterizzata da **limitazione persistente del flusso aereo**, non completamente reversibile, con sintomi respiratori e sistemici.',
  illustration: {
    id: 'bpco-polmoni',
    alt: 'Confronto tra polmone sano e polmone con enfisema',
    prompt: 'healthy lungs and emphysematous lungs side by side, alveoli detail, airway inflammation',
    icon: 'Wind',
  },
  types: [
    { name: 'Bronchite cronica', text: 'Definizione: tosse e espettorato per **3 mesi/anno** per **2 anni consecutivi**.' },
    { name: 'Enfisema', text: 'Distruzione delle pareti alveolari con perdita di elasticità. **Iperventilazione**.' },
    { name: 'Fenotipi', text: 'Esacerbatori frequenti, asma-BPCO overlap (ACO), BPCO con comorbidità.' },
  ],
  sections: [
    {
      title: 'Fattori di rischio',
      icon: 'TriangleAlert',
      accent: 'purple',
      items: [
        '**Fumo di sigaretta**: causa principale (> 80% dei casi)',
        'Esposizione a **polveri e fumi** professionali (silice, carbone)',
        'Inquinamento atmosferico e biomasse (legna, carbone)',
        'Predisposizione genetica: deficit di **alfa-1 antitripsina**',
        'Infezioni respiratorie ricorrenti in età pediatrica',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Dispnea** progressiva, inizialmente da sforzo',
        'Tosse cronica, spesso con **espettorato** mucoso o purulento',
        'Sibili e rantoli alla auscultazione',
        'Perdita di peso, astenia, tosse notturna',
        'Segni di insufficienza respiratoria cronica (cianosi, acrocianosi)',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**Spirometria**: FEV1/FVC < **0,70** post-broncodilatatore',
        'Classificazione GOLD: **I** (FEV1 ≥ 80%), **II** (50-79%), **III** (30-49%), **IV** (< 30%)',
        'Esami ematici: emoglobina, elettroliti, gas ematici (PaO2, PaCO2)',
        'RX torace: iperinsufflazione, cuore a goccia, segni di enfisema',
        'Valutazione del rischio di esacerbazioni (anamnesi, CAT score)',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Smoking cessation**: intervento prioritario',
        'Broncodilatatori: **LAMA** (tiotropio) e/o **LABA** (formoterolo, salmeterolo)',
        'Corticosteroidi inalatori: solo se eosinofili > 300/µL o asma-BPCO overlap',
        'Fisioterapia respiratoria e riabilitazione polmonare',
        'Ossigenoterapia domiciliare: se PaO2 < **55 mmHg** o SaO2 < **88%**',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Esacerbazioni acute**: aumento dispnea, espettorato purulento, febbre',
        '**Insufficienza respiratoria** ipercapnica (PaCO2 > 50 mmHg)',
        '**Ipertensione polmonare** e cor polmonale',
        'Infezioni respiratorie ricorrenti, polmoniti',
        'Osteoporosi (da cortisonici), depressione, isolamento sociale',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        'Spirometria di controllo: **annuale** o dopo esacerbazione',
        'SaO2 basale e sotto sforzo (test dei 6 minuti)',
        'Valutazione della qualità di vita (CAT, mMRC)',
        'Screening per comorbidità: cardiovascolari, metaboliche, psicologiche',
        'Verifica della tecnica inalatoria e aderenza terapeutica',
      ],
    },
  ],
  nursing: [
    'Educare alla **tecnica inalatoria** corretta e verificare l’aderenza',
    'Insegnare tecniche di **tosso-efficace** e drenaggio posturale',
    'Monitorare SaO2, frequenza respiratoria e segni di distress',
    'Promuovere la **riabilitazione polmonare** e l’attività fisica graduale',
    'Supporto psicologico e invio a gruppi di auto-aiuto',
  ],
  redFlags: [
    '**Esacerbazione grave**: dispnea a riposo, cianosi, confusione → **avvisare subito il medico**',
    'SaO2 < **88%** nonostante ossigenoterapia: valutare insufficienza respiratoria acuta',
    'Emottisi, dolore toracico acuto, febbre alta: escludere embolia, pneumotorace, polmonite',
  ],
}

export default map
