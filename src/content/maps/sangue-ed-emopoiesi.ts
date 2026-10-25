import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'sangue-ed-emopoiesi',
  chapter: 'anatomia',
  title: 'Sangue ed emopoiesi',
  subtitle: 'Composizione del sangue, cellule ematiche e produzione midollare',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Guyton A.C., Hall J.E. — Fisiologia medica, Elsevier',
    'Linee guida SIT (Società Italiana di Trapianto) — Trasfusioni e emocomponenti',
  ],
  blocks: [
    {
      title: 'Composizione del sangue',
      accent: 'red',
      icon: 'Droplet',
      illustration: {
        id: 'sangue-ed-emopoiesi-composizione',
        alt: 'Sedimentazione del sangue in provetta',
        prompt: 'test tube with blood separated into layers: red blood cells at bottom, white blood cells and platelets in thin middle layer, plasma at top',
        icon: 'Droplet',
      },
      inset: {
        label: 'Plasma e siero',
        illustration: {
          id: 'sangue-ed-emopoiesi-plasma',
          alt: 'Confronto tra plasma e siero',
          prompt: 'two test tubes side by side, one with plasma containing fibrinogen, one with serum without fibrinogen, clear liquid',
          icon: 'FlaskConical',
        },
      },
      bullets: [
        '**Plasma**: 55% del volume, acqua, proteine, elettroliti',
        '**Elementi figurati**: 45% (eritrociti, leucociti, piastrine)',
        '**Plasma**: contiene fibrinogeno e fattori di coagulazione',
        '**Siero**: plasma senza fibrinogeno e fattori di coagulazione',
        'Volume totale: **4–6 L** nell’adulto',
      ],
    },
    {
      title: 'Eritrociti (globuli rossi)',
      accent: 'orange',
      icon: 'CircleDot',
      illustration: {
        id: 'sangue-ed-emopoiesi-eritrociti',
        alt: 'Eritrociti al microscopio',
        prompt: 'microscopic view of red blood cells, biconcave discs, pinkish red color, uniform shape',
        icon: 'CircleDot',
      },
      inset: {
        label: 'Emoglobina',
        illustration: {
          id: 'sangue-ed-emopoiesi-emoglobina',
          alt: 'Struttura dell’emoglobina',
          prompt: 'red blood cells flowing through a small capillary, bright red on one side and darker red on the other',
          icon: 'Layers',
        },
      },
      bullets: [
        '**Funzione**: trasporto di O₂ e CO₂ tramite emoglobina',
        '**Emoglobina**: 4 catene, 4 atomi di ferro, lega 4 molecole di O₂',
        '**Ematocrito**: 40–54% (uomini), 36–48% (donne)',
        '**Durata di vita**: 120 giorni, poi degradati nel fegato e milza',
        '**Eritropoiesi**: stimolata dall’eritropoietina (EPO) prodotta dai reni',
      ],
    },
    {
      title: 'Leucociti (globuli bianchi)',
      accent: 'blue',
      icon: 'ShieldCheck',
      illustration: {
        id: 'sangue-ed-emopoiesi-leucociti',
        alt: 'Diversi tipi di leucociti',
        prompt: 'five different white blood cells floating among red blood cells, each with a differently shaped purple nucleus, microscope view',
        icon: 'ShieldCheck',
      },
      inset: {
        label: 'Neutrofili',
        illustration: {
          id: 'sangue-ed-emopoiesi-neutrofili',
          alt: 'Neutrofili al microscopio',
          prompt: 'close-up of neutrophils, multi-lobed nuclei, pinkish cytoplasm, microscopic view',
          icon: 'ShieldCheck',
        },
      },
      bullets: [
        '**Funzione**: difesa immunitaria, fagocitosi, produzione anticorpi',
        '**Neutrofili**: 50–70%, fagocitosi batteri, risposta acuta',
        '**Linfociti**: 20–40%, immunità specifica (T e B)',
        '**Monociti**: 2–8%, diventano macrofagi nei tessuti',
        '**Eosinofili**: 1–4%, parassiti, reazioni allergiche',
        '**Basofili**: 0–1%, istamina, reazioni allergiche',
      ],
    },
    {
      title: 'Piastrine (trombociti)',
      accent: 'purple',
      icon: 'Layers',
      illustration: {
        id: 'sangue-ed-emopoiesi-piastrine',
        alt: 'Piastrine al microscopio',
        prompt: 'microscopic view of platelets, small irregular fragments, purple color, clustered together',
        icon: 'Layers',
      },
      bullets: [
        '**Funzione**: emostasi primaria, formazione tappo piastrinico',
        '**Origine**: frammenti di megacariociti del midollo osseo',
        '**Conteggio normale**: 150.000–400.000/µL',
        '**Durata di vita**: 7–10 giorni',
        '**Trombopoietina**: ormone che stimola la produzione piastrinica',
      ],
    },
    {
      title: 'Emopoiesi: produzione ematica',
      accent: 'green',
      icon: 'RefreshCw',
      illustration: {
        id: 'sangue-ed-emopoiesi-emopoiesi',
        alt: 'Midollo osseo con cellule staminali',
        prompt: 'bone marrow cross-section, hematopoietic stem cells, developing blood cells, spongy bone structure',
        icon: 'RefreshCw',
      },
      bullets: [
        '**Sede**: midollo osseo rosso (sterno, costole, vertebre, bacino)',
        '**Cellule staminali ematopoietiche**: danno origine a tutte le cellule ematiche',
        '**Linee**: eritroide, mieloide, linfoide, megacariocitaria',
        '**Fattori di crescita**: EPO, TPO, GM-CSF, G-CSF',
        '**Neonati**: emopoiesi in fegato e milza',
      ],
    },
    {
      title: 'Gruppi sanguigni e trasfusioni',
      accent: 'teal',
      icon: 'Droplets',
      illustration: {
        id: 'sangue-ed-emopoiesi-gruppi',
        alt: 'Tubo di provetta con sangue e anticorpi',
        prompt: 'test tube with blood sample, agglutination reaction, red blood cells clumping together, laboratory setting',
        icon: 'Droplets',
      },
      bullets: [
        '**Sistema ABO**: gruppi A, B, AB, 0',
        '**Fattore Rh**: positivo (+) o negativo (−)',
        '**Donatore universale**: 0 Rh− (eritrociti)',
        '**Ricevente universale**: AB Rh+ (eritrociti)',
        '**Compatibilità**: test cross-match prima della trasfusione',
      ],
    },
  ],
  keyPoints: [
    '**Ematocrito**: 40–54% (uomini), 36–48% (donne)',
    '**Conta piastrine**: 150.000–400.000/µL',
    '**Eritropoietina (EPO)**: prodotta dai reni, stimola la produzione di eritrociti',
  ],
}

export default map
