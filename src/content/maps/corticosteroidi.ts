import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'corticosteroidi',
  chapter: 'farmacologia',
  title: 'Corticosteroidi',
  subtitle: 'Potenze a confronto, effetti avversi e sospensione graduale',
  icon: 'Pill',
  status: 'bozza',
  sources: [
    'Goodman & Gilman — Le basi farmacologiche della terapia, Zanichelli (capitolo corticosteroidi surrenalici)',
    'Rossi F., Cuomo V., Riccardi C. — Farmacologia. Principi di base e applicazioni terapeutiche, Minerva Medica',
    'AIFA — Riassunti delle Caratteristiche del Prodotto (RCP), banca dati farmaci',
  ],
  intro:
    'Analoghi del **cortisolo**: azione **antinfiammatoria e immunosoppressiva**. Usi: asma e BPCO, malattie autoimmuni, allergie e anafilassi (dopo adrenalina), edema cerebrale, trapianti, insufficienza surrenalica.',
  tableTitle: 'Glucocorticoidi sistemici a confronto',
  tableIcon: 'Scale',
  columns: ['Farmaco', 'Dose equivalente', 'Potenza antinfiammatoria', 'Effetto mineralcorticoide', 'Durata d’azione'],
  widths: [1.6, 1.2, 1.3, 1.3, 1.4],
  rows: [
    ['**Idrocortisone** (cortisolo)', '20 mg', '1', '**1** (marcato)', 'Breve (8–12 h)'],
    ['Cortisone acetato', '25 mg', '0,8', '0,8', 'Breve (8–12 h)'],
    ['**Prednisone** / prednisolone', '5 mg', '4', '0,8', 'Intermedia (12–36 h)'],
    ['**Metilprednisolone**', '4 mg', '5', 'Minimo', 'Intermedia (12–36 h)'],
    ['Triamcinolone', '4 mg', '5', 'Assente', 'Intermedia (12–36 h)'],
    ['**Desametasone**', '0,75 mg', '25–30', 'Assente', 'Lunga (36–72 h)'],
    ['Betametasone', '0,6–0,75 mg', '25–30', 'Assente', 'Lunga (36–72 h)'],
    ['Fludrocortisone', '— (non usato come antinfiammatorio)', '10', '**Molto elevato**', 'Sostituzione mineralcorticoide (Addison)'],
  ],
  notes: [
    {
      title: 'Effetti avversi',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        '**Iperglicemia**, ipertensione, ritenzione idrica, ipokaliemia',
        '**Infezioni** (anche mascherate), ritardo di cicatrizzazione',
        'Osteoporosi, miopatia, cataratta, glaucoma',
        'Insonnia, euforia, psicosi; aspetto cushingoide',
        'Ulcera peptica, soprattutto con **FANS**',
      ],
    },
    {
      title: 'Controlli',
      icon: 'ClipboardCheck',
      accent: 'blue',
      items: [
        '**Glicemia** (anche nel non diabetico), PA, peso, edemi',
        'K⁺; segni di infezione e temperatura',
        'Somministrare **al mattino**, con il cibo',
        'Inalatori: **sciacquare la bocca** (candidosi)',
        'Umore, sonno; nel diabetico adeguare la terapia',
      ],
    },
    {
      title: 'Sospensione',
      icon: 'ArrowDown',
      accent: 'purple',
      items: [
        'Terapie prolungate (indicativamente **> 3 settimane**): **scalare gradualmente**',
        'Stop brusco → **insufficienza surrenalica** acuta',
        'Stress, chirurgia, malattia: può servire una dose di copertura',
      ],
    },
  ],
  keyPoints: [
    'Il desametasone è il più potente e privo di effetto mineralcorticoide: scelto per l’**edema cerebrale**',
    'L’idrocortisone ev è il farmaco della **crisi surrenalica**',
  ],
}

export default map
