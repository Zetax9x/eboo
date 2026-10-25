import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'velocita-di-infusione-ml-h-e-gocce-min',
  chapter: 'farmacologia',
  title: 'Velocità di infusione: ml/h e gocce/min',
  subtitle: 'Formule, fattori di goccia e calcoli pratici per l’infusione endovenosa',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'INS — Infusion Therapy Standards of Practice (2024)',
    'ISO 8536-4 — Set di infusione per uso medico, a gravità (20 gocce = 1 mL)',
  ],
  intro: 'La velocità di infusione determina la **concentrazione plasmatica** del farmaco. Un errore di calcolo può causare **sovradosaggio** o inefficacia terapeutica.',
  tableTitle: 'Fattori di goccia (gtt/ml) per sistema di infusione',
  tableIcon: 'Droplet',
  columns: ['Sistema', 'Fattore di goccia', 'Uso tipico', 'Precisione'],
  widths: [1.2, 1, 1.5, 1],
  rows: [
    ['Macrogocciolatore (macro)', '**20** gtt/ml (standard)', 'Soluzioni saline, glucosio; set trasfusione: 15–20', 'Bassa'],
    ['Microgocciolatore (micro)', '**60** gtt/ml', 'Piccoli volumi, pediatria (meglio pompa)', 'Alta'],
    ['Pompa a siringa', 'ml/h (0,1–999,9)', 'Farmaci critici, dosaggi precisi', 'Molto alta'],
    ['Pompa volumetrica', 'ml/h (1–999)', 'Infusioni prolungate, nutrizione parenterale', 'Alta'],
  ],
  notes: [
    {
      title: 'Formule di conversione',
      icon: 'Calculator',
      accent: 'blue',
      items: [
        '**gtt/min = (ml × fattore) / (minuti)**',
        'Esempio: 500 ml in 8 h con fattore 20 → (500 × 20) / 480 = **20,8 gtt/min**',
        '**ml/h = (gtt/min × 60) / fattore**',
        'Esempio: 30 gtt/min con fattore 15 → (30 × 60) / 15 = **120 ml/h**',
        'Tempo in minuti = **ore × 60**',
      ],
    },
    {
      title: 'Errori frequenti da evitare',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'Confondere **macro** e **micro** gocciolatori',
        'Dimenticare di convertire **ore in minuti**',
        'Sbagliare la **virgola**: errore di 10 volte',
        'Non verificare il **fattore di goccia** stampato sul set',
        'Usare il calcolo manuale per **farmaci ad alto rischio**',
      ],
    },
    {
      title: 'Verifica e sicurezza',
      icon: 'ShieldCheck',
      accent: 'green',
      items: [
        'Calcolo **doppio** per farmaci ad alto rischio (INS 2024)',
        'Verificare **volume totale**, **velocità** e **ora di inizio/fine**',
        'Documentare: **farmaco**, **dose**, **velocità**, **sede**, **ora**',
        'Usare **pompa a siringa** per dosaggi < 10 ml/h',
        'Controllare la **compatibilità** del farmaco con il solvente',
      ],
    },
  ],
  keyPoints: [
    'Il **fattore di goccia** varia per produttore: leggi sempre l’etichetta',
    'Per farmaci ad alto rischio usa **pompa a siringa** e verifica indipendente',
    'Arrotonda le gtt/min all’**intero più vicino**; se la precisione conta, usa la pompa',
  ],
}

export default map
