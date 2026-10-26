import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'ulcera-peptica-ed-emorragia-digestiva',
  chapter: 'patologie',
  title: 'Ulcera peptica ed emorragia digestiva',
  subtitle: 'Eziologia, classificazione, segni di sanguinamento e gestione infermieristica',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'ACG Clinical Guideline: Diagnosis and Management of Peptic Ulcer Disease (2022)',
    'ESGE Guideline: Management of non-variceal upper gastrointestinal bleeding (2022)',
    'Linee guida della Società Italiana di Gastroenterologia (SIGE) per la gestione dell\'ulcera peptica (2020)',
  ],
  definition:
    'Lesione della mucosa gastrica o duodenale che penetra oltre la mucosa propria. L’emorragia digestiva è la complicanza più grave, caratterizzata da **melena**, **ematemesi** o **ritesso rettale**.',
  illustration: {
    id: 'ulcera-peptica-anatomia',
    alt: 'Gastrite e ulcera duodenale con sanguinamento',
    prompt: 'cross-section of stomach and duodenum showing a deep ulcer crater with exposed blood vessel, inflamed mucosa, healthy tissue comparison',
    icon: 'Droplet',
  },
  types: [
    { name: 'Ulcera gastrica', text: 'Sede: corpo o antrum. Rischio di **malignità** (biopsia obbligatoria).' },
    { name: 'Ulcera duodenale', text: 'Sede: bulbo duodenale. Più comune, legata a **H. pylori**.' },
    { name: 'Ulcera da stress', text: 'In pazienti critici (shock, ustioni, coma). **Profilassi** con IPP.' },
  ],
  sections: [
    {
      title: 'Cause e fattori di rischio',
      icon: 'TriangleAlert',
      accent: 'purple',
      items: [
        '**Helicobacter pylori**: causa principale (70-80%)',
        '**FANS** e AAS: inibizione prostaglandine protettive',
        'Fumo, alcol, stress fisiologico (ustioni, sepsi)',
        'Malattia di Zollinger-Ellison (gastrinoma)',
        'Terapia anticoagulante o antiaggregante',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        'Dolore epigastrico: "a fame" (duodenale) o post-prandiale (gastrica)',
        '**Ematemesi**: vomito di sangue rosso o "fondi di caffè"',
        '**Melena**: feci nere, catramose, maleodoranti',
        'Ritesso rettale: sangue rosso vivo (emorragia bassa)',
        'Sintomi di anemia: pallore, tachicardia, dispnea',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**Gastroscopia**: gold standard, identifica sede e fonte',
        'Test per H. pylori: ureasi, biopsia, respiro, feci',
        'Emocromo: **Hb** (valore basale vs attuale), piastrine',
        'Coagulazione: INR, TTPa (soprattutto se anticoagulato)',
        'Classificazione di Forrest: predice rischio di re-sanguinamento',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Inibitori di pompa protonica (IPP)**: esomeprazolo, omeprazolo',
        'Eradicazione H. pylori: triple o quadruple terapia',
        'Sospensione FANS e anticoagulanti (se possibile)',
        'Terapia endoscopica: clip, iniezione, termocoagulazione',
        'Trasfusione di globuli rossi se **Hb < 7 g/dL** (o < 9 in cardiopatici)',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Emorragia**: shock ipovolemico, anemia acuta',
        '**Perforazione**: peritonite, dolore addominale acuto',
        '**Stenosi pilorica**: vomito, distensione addominale',
        'Malignità: trasformazione in adenocarcinoma (ulcere gastriche)',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        'Parametri vitali: **PA**, FC, SpO2, diuresi (ogni 15-30 min)',
        'Emoglobina e ematocrito: ogni 4-6 ore o se instabile',
        'Colore e quantità di vomito e feci',
        'Bilancio idrico e diuresi oraria',
        'Valutazione dello stato di coscienza (perfusione cerebrale)',
      ],
    },
  ],
  nursing: [
    'Posizione semi-seduta (30‑45°) per ematemesi',
    'Accesso venoso calibro **14-16 G**, emogasanalisi e trasfusione',
    'Somministrazione IPP endovenoso (bolo + infusione continua)',
    'Monitoraggio stretto della diuresi e della pressione arteriosa',
    'Preparazione alla gastroscopia: digiuno, consenso, sedazione',
  ],
  redFlags: [
    '**Shock ipovolemico**: PA < 90 mmHg, FC > 120 bpm, cute fredda e sudata',
    'Ematemesi massiva: **avvisare subito il medico**, preparazione alla rianimazione',
    'Feci nere e catramose: **non ignorare**, anche se il paziente è asintomatico',
  ],
}

export default map
