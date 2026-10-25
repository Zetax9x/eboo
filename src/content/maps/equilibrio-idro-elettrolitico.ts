import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'equilibrio-idro-elettrolitico',
  chapter: 'anatomia',
  title: 'Equilibrio idro-elettrolitico',
  subtitle: 'Distribuzione dei liquidi, elettroliti e meccanismi di regolazione',
  icon: 'Droplets',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Guyton A.C., Hall J.E. — Fisiologia medica, Elsevier',
    'Linee guida KDIGO 2024 sulla gestione delle alterazioni idro-elettrolitiche',
  ],
  blocks: [
    {
      title: 'Compartimenti idrici',
      accent: 'blue',
      icon: 'Droplets',
      illustration: {
        id: 'idro-compartimenti',
        alt: 'Schema dei compartimenti idrici corporei',
        prompt: 'human body diagram showing total body water divided into intracellular and extracellular compartments, extracellular further divided into plasma and interstitial fluid, blue and teal colors',
        icon: 'Droplets',
      },
      bullets: [
        '**Acqua corporea totale**: ~60% del peso corporeo',
        '**Intracellulare (ICF)**: ~40% (2/3 del totale)',
        '**Extracellulare (ECF)**: ~20% (1/3 del totale)',
        'ECF = **plasma** (~5%) + **liquido interstiziale** (~15%)',
        'Neonati: ~75% · Anziani: ~50%',
      ],
    },
    {
      title: 'Elettroliti principali',
      accent: 'green',
      icon: 'TestTubes',
      bullets: [
        '**Na⁺**: principale catione ECF, 135–145 mEq/L',
        '**K⁺**: principale catione ICF, 3,5–5,0 mEq/L',
        '**Cl⁻**: principale anione ECF, 98–106 mEq/L',
        '**HCO₃⁻**: tampone principale, 22–26 mEq/L',
        '**Ca²⁺**: 8,5–10,5 mg/dL · **Mg²⁺**: 1,7–2,2 mg/dL',
      ],
    },
    {
      title: 'Regolazione renale',
      accent: 'purple',
      icon: 'Droplets',
      bullets: [
        '**Filtrazione glomerulare**: ~180 L/giorno',
        '**Riassorbimento**: 99% acqua ed elettroliti',
        '**Tubulo prossimale**: Na⁺, Cl⁻, HCO₃⁻, glucosio',
        '**Ansa di Henle**: gradiente osmotico, Na⁺/K⁺/2Cl⁻',
        '**Tubulo distale e dotto collettore**: regolazione fine',
      ],
    },
    {
      title: 'Ormone antidiuretico (ADH)',
      accent: 'orange',
      icon: 'Droplet',
      illustration: {
        id: 'idro-adh',
        alt: 'Sintesi e rilascio dell’ADH',
        prompt: 'hypothalamus and posterior pituitary gland with ADH hormone being released into bloodstream, arrows showing effect on kidney collecting ducts',
        icon: 'Droplet',
      },
      bullets: [
        'Sintetizzato nell’**ipotalamo**, rilasciato dalla **neuroipofisi**',
        'Aumenta la **permeabilità** dei dotti collettori all’acqua',
        'Stimolato da: **iperosmolarità**, **ipovolemia**, dolore, stress',
        'Inibito da: **ipovolemia**, etanolo, iponatriemia',
        'Effetto: urine concentrate, volume ridotto',
      ],
    },
    {
      title: 'Sistema renina-angiotensina-aldosterone',
      accent: 'red',
      icon: 'Workflow',
      bullets: [
        '**Renina**: rilasciata dai granulosomi renali',
        '**Angiotensina II**: vasocostrizione, stimola ADH e sete',
        '**Aldosterone**: riassorbimento Na⁺, escrezione K⁺ e H⁺',
        'Attivato da: **ipovolemia**, **iponatriemia**, **ipokaliemia**',
        'Effetto: ritenzione idrica, aumento PA',
      ],
    },
    {
      title: 'Equilibrio acido-base',
      accent: 'teal',
      icon: 'Scale',
      bullets: [
        '**pH ematico**: 7,35–7,45',
        '**Tampone bicarbonato**: HCO₃⁻/H₂CO₃ (rapporto 20:1)',
        '**Polmoni**: eliminano CO₂ (regolazione respiratoria)',
        '**Renale**: escretono H⁺, riassorbono HCO₃⁻',
        '**Tampone fosfato** e **proteine**: azione intracellulare',
      ],
    },
  ],
  keyPoints: [
    '**Na⁺** regola il volume ECF · **K⁺** regola il volume ICF',
    '**ADH** e **aldosterone** sono i principali ormoni regolatori',
    '**pH** 7,35–7,45: mantenuto da tamponi, polmoni e reni',
  ],
}

export default map
