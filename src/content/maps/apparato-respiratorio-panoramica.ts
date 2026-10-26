import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'apparato-respiratorio-panoramica',
  chapter: 'anatomia',
  title: 'Apparato respiratorio',
  subtitle: 'Anatomia, vie aeree e funzione respiratoria in una pagina',
  icon: 'Wind',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Guyton A.C., Hall J.E. — Fisiologia medica, Elsevier',
    'Linee guida GOLD 2023 — Global Strategy for the Diagnosis, Management, and Prevention of COPD',
  ],
  blocks: [
    {
      title: 'Vie aeree superiori',
      accent: 'blue',
      icon: 'Wind',
      illustration: {
        id: 'res-vie-aeree-sup',
        alt: 'Vie aeree superiori: naso, faringe, laringe',
        prompt: 'anatomical diagram of upper airway: nasal cavity, pharynx, larynx with vocal cords, cross-section view',
        icon: 'Wind',
      },
      inset: {
        label: 'Laringe',
        illustration: {
          id: 'res-laringe',
          alt: 'Struttura della laringe',
          prompt: 'larynx anatomy showing thyroid cartilage, cricoid cartilage, vocal cords, sagittal section',
          icon: 'Layers',
        },
      },
      bullets: [
        '**Naso**: riscalda, umidifica e filtra l’aria inspirata',
        '**Faringe**: crocevia tra vie aeree e digestive',
        '**Laringe**: contiene le corde vocali e la glottide',
        'Funzione protettiva: riflesso della **tosse** e **starnuto**',
        'Epitelio **ciliato** con cellule caliciformi (muco)',
      ],
    },
    {
      title: 'Vie aeree inferiori',
      accent: 'purple',
      icon: 'GitBranch',
      illustration: {
        id: 'res-vie-aeree-inf',
        alt: 'Trachea e bronchi',
        prompt: 'trachea with C-shaped cartilage rings branching into left and right main bronchi, anatomical illustration',
        icon: 'GitBranch',
      },
      bullets: [
        '**Trachea**: 10–12 anelli cartilaginei a C, lunghezza ~10 cm',
        '**Bronchi principali**: destro più verticale (rischio aspirazione)',
        '**Bronchioli**: privi di cartilagine, muscolatura liscia',
        '**Alveoli**: ~300 milioni, superficie totale ~70 m²',
        'Membrana alveolo-capillare: spessore **0,5 µm**',
      ],
    },
    {
      title: 'Polmoni e pleura',
      accent: 'red',
      icon: 'Waves',
      illustration: {
        id: 'res-polmoni',
        alt: 'Polmoni destro e sinistro con pleura',
        prompt: 'human lungs showing right lung with 3 lobes and left lung with 2 lobes, pleural cavity visible, anatomical view',
        icon: 'Waves',
      },
      inset: {
        label: 'Lobi polmonari',
        illustration: {
          id: 'res-lobi',
          alt: 'Lobi polmonari',
          prompt: 'pair of human lungs seen from the front, the right lung divided into three lobes and the left lung into two lobes, each lobe a slightly different soft shade, trachea in the center',
          icon: 'Layers',
        },
      },
      bullets: [
        '**Polmone destro**: 3 lobi (superiore, medio, inferiore)',
        '**Polmone sinistro**: 2 lobi (superiore, inferiore) + lingula',
        '**Pleura viscerale**: aderente al polmone',
        '**Pleura parietale**: riveste la gabbia toracica',
        'Spazio pleurico: pressione negativa (**-4 a -8 cmH₂O**) a riposo',
      ],
    },
    {
      title: 'Meccanica respiratoria',
      accent: 'teal',
      icon: 'RefreshCw',
      illustration: {
        id: 'res-muscoli-respiratori',
        alt: 'Muscoli respiratori principali',
        prompt: 'diaphragm and intercostal muscles highlighted on human thorax, anterior view, showing contraction during inspiration',
        icon: 'RefreshCw',
      },
      bullets: [
        '**Ispirazione**: contrazione del **diaframma** e intercostali esterni',
        '**Espirazione**: rilassamento passivo (a riposo)',
        'Capacità vitale: ~4–5 L nell’adulto',
        'Volume corrente: ~500 mL per atto respiratorio',
        'Frequenza respiratoria: **12–20 atti/min**',
      ],
    },
    {
      title: 'Scambi gassosi',
      accent: 'green',
      icon: 'Droplets',
      illustration: {
        id: 'res-scambi-gassosi',
        alt: 'Scambi gassosi alveolo-capillare',
        prompt: 'alveolus with capillary, oxygen diffusing into blood and carbon dioxide diffusing out, molecular level illustration',
        icon: 'Droplets',
      },
      bullets: [
        '**O₂**: dall’alveolo al sangue (gradiente parziale ~100 → 40 mmHg)',
        '**CO₂**: dal sangue all’alveolo (gradiente parziale ~40 → 40 mmHg)',
        'Diffusione per **gradiente di pressione parziale**',
        'Emoglobina: trasporta **98,5%** dell’O₂',
        'CO₂ trasportato come **bicarbonato** (70%), carbaminoemoglobina (23%), CO₂ disciolto (7%)',
      ],
    },
    {
      title: 'Regolazione respiratoria',
      accent: 'orange',
      icon: 'Brain',
      bullets: [
        '**Centro respiratorio**: bulbo e ponte (tronco encefalico)',
        'Sensibilità a **CO₂** (via H⁺) e **O₂** (chemocettori)',
        'Chemocettori centrali: bulbo (sensibili a pH)',
        'Chemocettori periferici: carotide e aorta (sensibili a O₂, CO₂, H⁺)',
        'Controllo volontario: corteccia cerebrale',
      ],
    },
  ],
  keyPoints: [
    '**Frequenza respiratoria**: 12–20 atti/min',
    '**SpO₂** normale: **95–100%**',
    '**pO₂** arterioso: **80–100 mmHg** · **pCO₂**: **35–45 mmHg**',
  ],
}

export default map
