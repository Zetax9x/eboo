import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'malattia-renale-cronica',
  chapter: 'patologie',
  title: 'Malattia renale cronica',
  subtitle: 'Riduzione progressiva della funzione renale: stadi KDIGO, complicanze e assistenza',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'KDIGO — Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease (2024)',
    'SIN — Linee guida per la gestione della malattia renale cronica',
    'Ministero della Salute — Piano Nazionale Malattie Renali',
  ],
  definition:
    'Malattia renale cronica (MRC) è definita come danno renale o **riduzione della GFR** persistente da **≥ 3 mesi**, con o senza proteinuria.',
  illustration: {
    id: 'mrc-reni-anatomia',
    alt: 'Reni sani e reni con danno cronico, dettaglio glomerulo',
    prompt: 'two kidneys side by side, one healthy and one shrunken with fibrosis, magnified glomerulus showing sclerosis',
    icon: 'Droplet',
  },
  types: [
    { name: 'Stadio 1', text: 'GFR **≥ 90** con segni di danno renale (proteinuria, ematuria).' },
    { name: 'Stadio 2', text: 'GFR **60–89** con segni di danno renale.' },
    { name: 'Stadio 3', text: 'GFR **30–59**: MRC moderata. Rischio cardiovascolare aumentato.' },
    { name: 'Stadio 4', text: 'GFR **15–29**: MRC severa. Preparazione alla terapia sostitutiva.' },
    { name: 'Stadio 5', text: 'GFR **< 15**: insufficienza renale terminale. Dialisi o trapianto.' },
  ],
  sections: [
    {
      title: 'Cause e fattori di rischio',
      icon: 'TriangleAlert',
      accent: 'purple',
      items: [
        '**Diabete mellito**: causa più comune (30–40%)',
        '**Ipertensione arteriosa**: seconda causa principale',
        'Glomerulonefriti, nefropatia amiloide, policisti renale',
        'Farmaci nefrotossici (FANS, aminoglicosidi) cronici',
        'Familiarità e predisposizione genetica',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        'Spesso **asintomatica** negli stadi iniziali',
        'Astenia, inappetenza, nausea, prurito cutaneo',
        'Edemi periferici, ipertensione refrattaria',
        'Anemia, alterazioni del sonno, confusione mentale',
        'Riduzione della diuresi (stadi avanzati)',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**eGFR** (CKD-EPI) < 60 mL/min/1,73m² per ≥ 3 mesi',
        '**Albuminuria**: rapporto albumina/creatinina urine (A/C) > 30 mg/g',
        'Creatinina sierica elevata (variabile per età, sesso, massa muscolare)',
        'Ecografia renale: dimensioni, ecogenicità, ostruzioni',
        'Biopsia renale se indicata per diagnosi eziologica',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Controllo pressorio**: target < 130/80 mmHg (ACE-inibitori/ARB)',
        '**Controllo glicemico** nei diabetici (HbA1c < 7%)',
        'Statine per dislipidemia, acido folico per anemia',
        'Riduzione proteica (0,6–0,8 g/kg/die) se non in dialisi',
        'Preparazione alla terapia sostitutiva (fistola, educazione)',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Anemia normocitica** da deficit di eritropoietina',
        '**Osteodistrofia renale**: iperparatiroidismo, ipocalcemia',
        '**Sindrome uremica**: encefalopatia, pericardite, pleurite',
        '**Squilibrio elettrolitico**: iperkaliemia, iperfosfatemia',
        'Aumento del rischio cardiovascolare (infarto, ictus)',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        '**eGFR** e creatinina ogni 3–6 mesi (più frequente se in peggioramento)',
        '**A/C urinaria** per monitorare la proteinuria',
        'Elettroliti (K⁺, Ca²⁺, PO₄³⁻), emoglobina, PTH',
        'Pressione arteriosa ad ogni visita',
        'Valutazione nutrizionale e stato idrico',
      ],
    },
  ],
  nursing: [
    'Monitorare **pressione arteriosa** e peso corporeo giornaliero',
    'Verificare **elettroliti** (soprattutto K⁺) prima di somministrare farmaci',
    'Educare alla **dieta iposodica** e al controllo dell’apporto proteico',
    'Preparare il paziente alla **fistola arterovenosa** o catetere per dialisi',
    'Riconoscere segni di **iperkaliemia** (aritmie, debolezza muscolare)',
  ],
  redFlags: [
    '**Iperkaliemia** (K⁺ > 5,5 mEq/L): rischio aritmie fatali, avvisare subito il medico',
    '**Anuria** o oliguria improvvisa: possibile ostruzione o acutizzazione',
    '**Encefalopatia uremica**: confusione, asterissi, convulsioni → emergenza',
  ],
}

export default map
