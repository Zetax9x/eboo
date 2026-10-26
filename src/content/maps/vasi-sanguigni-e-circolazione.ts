import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'vasi-sanguigni-e-circolazione',
  chapter: 'anatomia',
  title: 'Vasi sanguigni e circolazione',
  subtitle: 'Arterie, vene, capillari e microcircolo: struttura, funzioni e valori di riferimento',
  icon: 'Waves',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Guyton A.C., Hall J.E. — Fisiologia medica, Elsevier',
  ],
  blocks: [
    {
      title: 'Arterie',
      accent: 'red',
      icon: 'ArrowUp',
      illustration: {
        id: 'vasi-arterie-struttura',
        alt: 'Sezione trasversale di un’arteria',
        prompt: 'cross-section of a human artery showing thick muscular wall, red lumen, three layers of tissue',
        icon: 'ArrowUp',
      },
      inset: {
        label: 'Strati vascolari',
        illustration: {
          id: 'vasi-strati',
          alt: 'I tre strati della parete vascolare',
          prompt: 'diagram of the three layers of a blood vessel wall: tunica intima, tunica media, tunica adventitia',
          icon: 'Layers',
        },
      },
      bullets: [
        'Portano sangue **dal cuore** ai tessuti',
        'Parete spessa con **tunica media muscolare** sviluppata',
        'Regolano il flusso tramite **vasocostrizione** e **vasodilatazione**',
        'Sistema **elastico** (aorta) e **resistente** (arterie medie)',
        'Pressione alta: **120/80 mmHg** a riposo',
      ],
    },
    {
      title: 'Vene',
      accent: 'blue',
      icon: 'ArrowDown',
      illustration: {
        id: 'vasi-vene-struttura',
        alt: 'Sezione trasversale di una vena',
        prompt: 'cross-section of a human vein showing thin wall, blue lumen, valves inside the vessel',
        icon: 'ArrowDown',
      },
      bullets: [
        'Portano sangue al cuore (veine sistemiche) o dai polmoni al cuore (vene polmonari)',
        'Parete sottile, **tunica media** meno muscolare',
        'Valve unidirezionali nelle vene degli arti inferiori',
        'Pressione bassa: **2–10 mmHg**',
        'Capacità di **stoccaggio** del sangue (circa 64% del volume totale)',
      ],
    },
    {
      title: 'Capillari',
      accent: 'purple',
      icon: 'CircleDot',
      illustration: {
        id: 'vasi-capillari',
        alt: 'Rete capillare tra arteriola e venula',
        prompt: 'network of tiny capillaries connecting an arteriole and a venule, single cell layer walls, red blood cells passing through',
        icon: 'CircleDot',
      },
      bullets: [
        'Diametro **5–10 µm**, parete di **un solo endotelio**',
        'Sede degli **scambi gassosi** e dei nutrienti',
        'Permeabilità selettiva: **O₂, CO₂, glucosio, elettroliti**',
        'Superficie totale: circa **500 m²**',
        'Flusso lento: **0,3–0,5 mm/s**',
      ],
    },
    {
      title: 'Microcircolo',
      accent: 'teal',
      icon: 'GitBranch',
      illustration: {
        id: 'vasi-microcircolo',
        alt: 'Schema del microcircolo con arteriola, capillari, venula',
        prompt: 'schematic diagram of microcirculation: arteriole branching into capillary bed, then venule, with precapillary sphincters',
        icon: 'GitBranch',
      },
      bullets: [
        'Arteriole → **sfiintere precapillare** → capillari → venula',
        'I **sfiinteri** regolano il flusso verso i capillari',
        'Circa **20%** del flusso passa attraverso i capillari funzionali',
        'Il resto scorre nei **shunt artero‑venosi**',
        'Pressione capillare: **15–35 mmHg**',
      ],
    },
    {
      title: 'Circolazione sistemica',
      accent: 'orange',
      icon: 'Route',
      illustration: {
        id: 'vasi-circolazione-sistemica',
        alt: 'Schema della circolazione sistemica',
        prompt: 'diagram of systemic circulation: left ventricle to aorta to body organs to vena cava to right atrium, red and blue vessels',
        icon: 'Route',
      },
      bullets: [
        'Ventricolo sinistro → **aorta** → arterie → capillari → vene → **vene cave** → atrio destro',
        'Pressione alta: **120/80 mmHg**',
        'Flusso: **4–8 L/min** a riposo',
        'Irriga tutti gli organi e tessuti del corpo',
        'Resistenze periferiche: **1000–1500 dyn·s·cm⁻⁵**',
      ],
    },
    {
      title: 'Circolazione polmonare',
      accent: 'green',
      icon: 'Wind',
      illustration: {
        id: 'vasi-circolazione-polmonare',
        alt: 'Schema della circolazione polmonare',
        prompt: 'diagram of pulmonary circulation: right ventricle to pulmonary artery to lungs to pulmonary veins to left atrium, blue and red vessels',
        icon: 'Wind',
      },
      bullets: [
        'Ventricolo destro → **arteria polmonare** → capillari polmonari → **vene polmonari** → atrio sinistro',
        'Pressione bassa: **15–25 mmHg**',
        'Flusso: **4–8 L/min** (uguale alla sistemica)',
        'Sede degli **scambi gassosi**: O₂ entra, CO₂ esce',
        'Parete vascolare sottile, bassa resistenza',
      ],
    },
  ],
  keyPoints: [
    '**Arterie**: alta pressione, parete spessa, flusso dal cuore',
    '**Vene**: bassa pressione, parete sottile, flusso al cuore',
    '**Capillari**: sede degli scambi, parete di un solo strato',
    '**PAM** = (PAS + 2 × PAD) / 3 · **PAM** ≥ 65 mmHg per perfusione d’organo',
  ],
}

export default map
