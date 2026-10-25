import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'sistema-nervoso-centrale',
  chapter: 'anatomia',
  title: 'Sistema nervoso centrale',
  subtitle: 'Encefalo, midollo spinale e funzioni neurologiche essenziali',
  icon: 'Brain',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, 15ª ed., CEA',
    'Kandel E.R. et al. — Principi di neuroscienze, 6ª ed., Elsevier',
    'Linee guida AIN (American Institute for Nursing) sulla valutazione neurologica',
  ],
  blocks: [
    {
      title: 'Struttura dell’encefalo',
      accent: 'blue',
      icon: 'Brain',
      illustration: {
        id: 'snc-encefalo-anatomia',
        alt: 'Encefalo con cervello, cervelletto e tronco encefalico',
        prompt: 'anatomical view of the human brain showing cerebrum, cerebellum and brainstem, lateral view',
        icon: 'Brain',
      },
      inset: {
        label: 'I lobi cerebrali',
        illustration: {
          id: 'snc-lobi-cerebrali',
          alt: 'Lobi frontale, parietale, temporale e occipitale',
          prompt: 'lateral view of the cerebral hemispheres with frontal, parietal, temporal and occipital lobes highlighted in different colors',
          icon: 'Layers',
        },
      },
      bullets: [
        '**Cervello**: 2 emisferi, corteccia grigia, sostanza bianca',
        '**Cervelletto**: coordinazione motoria, equilibrio, tono muscolare',
        '**Tronco encefalico**: midollo allungato, ponte, mesencefalo',
        '**Ipotalamo**: termoregolazione, sete, fame, ritmo circadiano',
        '**Talamo**: stazione di relay sensoriale (eccetto olfatto)',
      ],
    },
    {
      title: 'Funzioni cerebrali',
      accent: 'purple',
      icon: 'Target',
      illustration: {
        id: 'snc-funzioni-cerebrali',
        alt: 'Mappa delle funzioni corticali',
        prompt: 'simplified brain map showing motor cortex, sensory cortex, Broca area and Wernicke area',
        icon: 'Target',
      },
      bullets: [
        '**Lobo frontale**: motricità volontaria, linguaggio (Broca), personalità',
        '**Lobo parietale**: sensibilità somatica, integrazione sensoriale',
        '**Lobo temporale**: udito, linguaggio (Wernicke), memoria',
        '**Lobo occipitale**: visione, elaborazione visiva',
        '**Giro di Rolando**: separa corteccia motoria e sensitiva',
      ],
    },
    {
      title: 'Sistema limbico e memoria',
      accent: 'pink',
      icon: 'Heart',
      illustration: {
        id: 'snc-sistema-limbico',
        alt: 'Sistema limbico con amigdala e ippocampo',
        prompt: 'sagittal view of the brain highlighting the limbic system: amygdala, hippocampus, hypothalamus',
        icon: 'Heart',
      },
      bullets: [
        '**Ippocampo**: formazione della memoria a lungo termine',
        '**Amigdala**: emozioni, paura, risposta allo stress',
        '**Ippocampo + Amigdala**: base della memoria episodica e semantica',
        '**Danno ippocampale**: amnesia anterograda (es. encefalite, ictus)',
        '**Danno amigdala**: alterazioni emotive, ansia, aggressività',
      ],
    },
    {
      title: 'Ventricoli e liquor',
      accent: 'teal',
      icon: 'Droplet',
      illustration: {
        id: 'snc-ventricoli-liquor',
        alt: 'Ventricoli cerebrali e produzione di liquor',
        prompt: 'sagittal section of the brain showing the four ventricles and the flow of cerebrospinal fluid',
        icon: 'Droplet',
      },
      inset: {
        label: 'Produzione di liquor',
        illustration: {
          id: 'snc-liquor-produzione',
          alt: 'Plesso corioideale e flusso del liquor',
          prompt: 'close-up of the choroid plexus in the lateral ventricle producing cerebrospinal fluid',
          icon: 'Droplet',
        },
      },
      bullets: [
        '**4 ventricoli**: 2 laterali, 3° (mesencefalico), 4° (ponte/midollo)',
        '**Liquor**: prodotto dai **plessi corioideali**',
        '**Volume**: 120–150 mL totali, produzione **500 mL/giorno**',
        '**Pressione intracranica (PIC)**: 7–15 mmHg in adulto',
        '**Circolo**: ventricoli → cisterna → spazio subaracnoideo → assorbimento',
      ],
    },
    {
      title: 'Midollo spinale',
      accent: 'green',
      icon: 'Bone',
      illustration: {
        id: 'snc-midollo-spinale',
        alt: 'Midollo spinale con sostanza grigia e bianca',
        prompt: 'cross-section of the spinal cord showing the butterfly-shaped gray matter and surrounding white matter tracts',
        icon: 'Bone',
      },
      bullets: [
        '**Sostanza grigia**: corna anteriori (motorie), posteriori (sensibili)',
        '**Sostanza bianca**: fasci ascendenti (sensitivi) e discendenti (motori)',
        '**Livelli**: cervicale (C1–C8), toracico (T1–T12), lombare (L1–L5), sacrale (S1–S5)',
        '**Coni medullari**: terminazione a livello L1–L2',
        '**Funzioni**: riflesso spinale, trasmissione, controllo motorio e sensitivo',
      ],
    },
    {
      title: 'Valutazione neurologica',
      accent: 'orange',
      icon: 'Stethoscope',
      illustration: {
        id: 'snc-valutazione-neuro',
        alt: 'Infermiere che valuta lo stato neurologico',
        prompt: 'nurse performing a neurological assessment on a patient, checking pupil reaction and motor response',
        icon: 'Stethoscope',
      },
      bullets: [
        '**GCS (Glasgow Coma Scale)**: oculari, verbali, motorie (3–15)',
        '**Pupille**: dimensione, simmetria, reattività alla luce',
        '**Forza muscolare**: 0–5 (scala MRC)',
        '**Sensibilità**: tattile, dolorifica, termica',
        '**Segni di localizzazione**: emiparesi, afasia, nistagmo',
      ],
    },
  ],
  keyPoints: [
    '**GCS ≤ 8**: intubazione e ventilazione meccanica',
    '**PIC > 20 mmHg**: rischio di ernia cerebrale',
    '**Liquor**: 1,25–1,45 g/dL, glucosio 60–80 mg/dL, proteine 15–45 mg/dL',
  ],
}

export default map
