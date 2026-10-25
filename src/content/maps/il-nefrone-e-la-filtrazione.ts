import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'il-nefrone-e-la-filtrazione',
  chapter: 'anatomia',
  title: 'Il nefrone e la filtrazione',
  subtitle: 'Struttura del nefrone, meccanismo di filtrazione glomerulare e riassorbimento tubulare',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Guyton A.C., Hall J.E. — Fisiologia medica, Elsevier',
    'KDIGO Clinical Practice Guideline for Acute Kidney Injury (2012)',
  ],
  blocks: [
    {
      title: 'Struttura del nefrone',
      accent: 'blue',
      icon: 'Layers',
      illustration: {
        id: 'nefrone-struttura',
        alt: 'Schema del nefrone con glomerulo e tubulo',
        prompt: 'detailed anatomical diagram of a single nephron, showing Bowman capsule, glomerulus, proximal convoluted tubule, loop of Henle, distal convoluted tubule, and collecting duct',
        icon: 'Layers',
      },
      inset: {
        label: 'Corpuscolo renale',
        illustration: {
          id: 'nefrone-corpuscolo',
          alt: 'Dettaglio del corpuscolo renale',
          prompt: 'close-up view of the renal corpuscle, showing the glomerular capillary tuft inside Bowman capsule, parietal and visceral layers',
          icon: 'CircleDot',
        },
      },
      bullets: [
        '**1,000,000 nefroni** per rene (totale ~2 milioni)',
        'Unità funzionale: **corpuscolo renale** + **tubulo renale**',
        'Tubulo: prossimale, ansa di Henle, distale, dotto collettore',
        'Il **dotto collettore** riceve urina da più nefroni',
        'I nefroni sono divisi in **corticali** e **giemmari**',
      ],
    },
    {
      title: 'Filtrazione glomerulare',
      accent: 'purple',
      icon: 'Microscope',
      illustration: {
        id: 'nefrone-filtrazione',
        alt: 'Processo di filtrazione nel glomerulo',
        prompt: 'cross-section of glomerular capillaries with filtration barrier, showing endothelium, basement membrane, and podocytes, arrows indicating fluid movement into Bowman space',
        icon: 'Microscope',
      },
      bullets: [
        'Barriera filtrante: **endotelio**, **membrana basale**, **podosciti**',
        'Filtrato: acqua, elettroliti, glucosio, urea (no proteine/plasma)',
        '**Tasso di filtrazione glomerulare (GFR)**: ~125 mL/min',
        'Pressione idrostatica glomerulare (~60 mmHg) > pressione osmotica',
        'Il filtrato è isotonico al plasma',
      ],
    },
    {
      title: 'Riassorbimento prossimale',
      accent: 'green',
      icon: 'ArrowDown',
      illustration: {
        id: 'nefrone-tubulo-prossimale',
        alt: 'Tubulo prossimale con riassorbimento attivo',
        prompt: 'diagram of proximal convoluted tubule, showing epithelial cells with microvilli, arrows indicating reabsorption of glucose, amino acids, sodium, and water into peritubular capillaries',
        icon: 'ArrowDown',
      },
      bullets: [
        'Riassorbe **65-70%** del filtrato (acqua, Na+, K+, Cl-)',
        '**100%** di glucosio e amminoacidi (trasporto attivo)',
        'Riassorbimento di bicarbonato (HCO3-) per equilibrio acido-base',
        'Segretazione di acidi organici e farmaci',
        'Cellule con alta attività metabolica e mitocondri',
      ],
    },
    {
      title: 'Ansa di Henle',
      accent: 'orange',
      icon: 'GitBranch',
      bullets: [
        'Braccio discendente: permeabile all’acqua, non agli elettroliti',
        'Braccio ascendente: impermeabile all’acqua, riassorbe Na+ e Cl-',
        'Crea **gradiente osmotico** nella midollare renale',
        'Permette la concentrazione dell’urina fino a **1200 mOsm/L**',
        'I nefroni giemerali hanno anse lunghe (midollare profonda)',
      ],
    },
    {
      title: 'Tubulo distale e dotto collettore',
      accent: 'teal',
      icon: 'Route',
      bullets: [
        'Regolazione fine di **Na+** e **acqua** (aldosterone, ADH)',
        'Segretazione di **K+** e **H+** per equilibrio acido-base',
        'Cellule principali: riassorbono Na+, secernono K+',
        'Cellule intercalate: secernono H+ o HCO3-',
        'Sensibili all’**ADH** (vasopressina) per riassorbimento d’acqua',
      ],
    },
    {
      title: 'Regolazione ormonale',
      accent: 'red',
      icon: 'ShieldAlert',
      bullets: [
        '**Aldosterone**: ↑ riassorbimento Na+ e acqua, ↑ secrezione K+',
        '**ADH** (vasopressina): ↑ permeabilità all’acqua nel dotto collettore',
        '**ANP** (peptide natriuretico atriale): ↑ escrezione di Na+ e acqua',
        'Sistema **renina-angiotensina-aldosterone (RAA)**: ↑ PA e volume ematico',
        'Risposta a ipovolemia, iponatriemia, iperkaliemia',
      ],
    },
  ],
  keyPoints: [
    '**GFR normale**: 125 mL/min (180 L/giorno filtrati)',
    '**Diuresi giornaliera**: 1-2 L (99% del filtrato riassorbito)',
    '**Concentrazione urinaria**: 50-1200 mOsm/L',
  ],
}

export default map
