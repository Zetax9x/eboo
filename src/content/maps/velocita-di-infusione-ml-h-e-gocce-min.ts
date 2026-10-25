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
    'Farmacologia clinica — Calcoli posologici e velocità di infusione',
  ],
  intro: 'La velocità di infusione determina la **concentrazione plasmatica** del farmaco. Un errore di calcolo può causare **sovradosaggio** o inefficacia terapeutica.',
  tableTitle: 'Fattori di goccia (gtt/ml) per sistema di infusione',
  tableIcon: 'Droplet',
  columns: ['Sistema', 'Fattore di goccia', 'Uso tipico', 'Precisione'],
  widths: [1.2, 1, 1.5, 1],
  rows: [
    ['Macrogocciolatore (macro)', '10–20 gtt/ml', 'Soluzioni saline, glucosio, emoderivati', 'Bassa'],
    ['Microgocciolatore (micro)', '15–60 gtt/ml', 'Farmaci ad alto rischio, neonati, pediatria', 'Alta'],
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
        '**ml/h = (gtt/min × minuti) / fattore**',
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
        'Arrotondare **giù** la velocità: rischio di sottodosaggio',
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
    'Arrotonda **all’unità superiore** per gtt/min: meglio un po’ più veloce che lento',
  ],
}

export default map
