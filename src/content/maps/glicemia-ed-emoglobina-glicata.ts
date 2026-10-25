import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'glicemia-ed-emoglobina-glicata',
  chapter: 'laboratorio',
  title: 'Glicemia ed emoglobina glicata',
  subtitle: 'Soglie diagnostiche, target in terapia e ipoglicemia',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'American Diabetes Association — Standards of Care in Diabetes (aggiornamento annuale), sezioni 2 e 6',
    'SID-AMD — Linee guida per la terapia del diabete mellito di tipo 2 (Sistema Nazionale Linee Guida, ISS)',
    'IFCC — Standardizzazione dell’HbA1c in mmol/mol',
  ],
  intro:
    'La **glicemia** fotografa il momento; l’**HbA1c** riflette la media degli ultimi **2–3 mesi**. HbA1c in **%** e in **mmol/mol** (unità IFCC usata dai laboratori italiani). Fa fede il referto del proprio laboratorio.',
  tableTitle: 'Criteri diagnostici (adulto, non in gravidanza)',
  tableIcon: 'Target',
  columns: ['Esame', 'Normale', 'Rischio aumentato (prediabete)', 'Diabete'],
  widths: [1.6, 1.1, 1.6, 1.6],
  rows: [
    ['**Glicemia a digiuno** (da almeno 8 h)', '70–99 mg/dL', '**100–125 mg/dL** (alterata glicemia a digiuno)', '**≥ 126 mg/dL**'],
    ['**Glicemia 2 h dopo carico orale** di 75 g di glucosio (OGTT)', '< 140 mg/dL', '**140–199 mg/dL** (ridotta tolleranza)', '**≥ 200 mg/dL**'],
    ['**HbA1c** in %', '< 5,7%', '**5,7–6,4%** (ADA)', '**≥ 6,5%**'],
    ['**HbA1c** in mmol/mol', '< 39', '**39–47** (in Italia rischio aumentato **42–48**)', '**≥ 48 mmol/mol**'],
    ['**Glicemia casuale**', '—', '—', '**≥ 200 mg/dL** con sintomi tipici (poliuria, polidipsia, calo di peso)'],
  ],
  notes: [
    {
      title: 'Target nel diabetico',
      icon: 'Target',
      accent: 'blue',
      items: [
        'HbA1c in genere **< 7%** (**53 mmol/mol**)',
        'Più stretto **< 6,5%** (48) se sicuro; meno stretto **< 8%** (64) nell’anziano fragile',
        'Glicemia **prima dei pasti 80–130** mg/dL, **dopo** (1–2 h) **< 180** mg/dL',
        'Obiettivi sempre **personalizzati**',
      ],
    },
    {
      title: 'Ipoglicemia',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        '**Livello 1** < 70 mg/dL · **livello 2** < 54 mg/dL',
        '**Livello 3** (grave): richiede l’aiuto di altri',
        'Segni: sudorazione, tremori, tachicardia, confusione',
        'Cosciente: **15 g** di zuccheri semplici, ricontrollo dopo **15 min**',
        'Non cosciente: **glucagone** o glucosio ev secondo protocollo',
      ],
    },
    {
      title: 'Da sapere',
      icon: 'Info',
      accent: 'purple',
      items: [
        'Diagnosi: **2 valori alterati** (stesso o diverso test)',
        'HbA1c falsata da **anemie**, emoglobinopatie, trasfusioni, IRC grave',
        'Conversione: mmol/L × **18** = mg/dL',
        'HbA1c 6% = 42 · 7% = 53 · 8% = 64 · 9% = 75 mmol/mol',
      ],
    },
  ],
  keyPoints: [
    'Glucometro capillare: mani **lavate e asciutte**, pungere i **lati** del polpastrello, scartare la prima goccia se indicato dal protocollo',
    'Sospetta ipoglicemia e glucometro non disponibile: **trattare comunque**',
  ],
}

export default map
