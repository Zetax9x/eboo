import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'apparato-urinario-panoramica',
  chapter: 'anatomia',
  title: 'Apparato urinario',
  subtitle: 'Reni, vie urinarie e funzioni escretorie in una pagina',
  icon: 'Droplets',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'KDIGO Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease (2024)',
    'Bates B. — Guida all’esame obiettivo e alla storia clinica, Elsevier',
  ],
  blocks: [
    {
      title: 'Anatomia dei reni',
      accent: 'red',
      icon: 'Droplets',
      illustration: {
        id: 'ur-reni-anatomia',
        alt: 'Reni con struttura interna',
        prompt: 'two human kidneys well apart from each other: one whole with its artery, vein and ureter, the other cut lengthwise to show its inner structure',
        icon: 'Droplets',
      },
      inset: {
        label: 'Struttura interna',
        illustration: {
          id: 'ur-rene-sezione',
          alt: 'Sezione del rene',
          prompt: 'cross-section of a kidney showing renal cortex, renal medulla, renal pyramids, renal pelvis and major calyces',
          icon: 'Layers',
        },
      },
      bullets: [
        '**2 reni** retroperitoneali, a livello T12–L3',
        'Peso: **120–150 g** ciascuno',
        'Strati: **corteccia**, **midollo**, **pelvi**',
        'Irrorati dalle **arterie renali** (rami dell’aorta)',
        'Drenati dalle **vene renali** (direttamente alla cava inferiore)',
      ],
    },
    {
      title: 'Il nefrone',
      accent: 'blue',
      icon: 'Microscope',
      illustration: {
        id: 'ur-nefrone',
        alt: 'Struttura del nefrone',
        prompt: 'detailed diagram of a single nephron showing glomerulus, Bowman capsule, proximal convoluted tubule, loop of Henle, distal convoluted tubule and collecting duct',
        icon: 'Microscope',
      },
      bullets: [
        '**Unità funzionale** del rene: ~1 milione per rene',
        '**Corpuscolo renale**: glomerulo + capsula di Bowman',
        '**Tubulo prossimale**: riassorbimento di Na⁺, glucosio, aminoacidi',
        '**Ansa di Henle**: concentrazione dell’urina',
        '**Tubulo distale** e **dotto collettore**: regolazione finale',
      ],
    },
    {
      title: 'Filtrazione glomerulare',
      accent: 'purple',
      icon: 'FlaskConical',
      illustration: {
        id: 'ur-filtrazione',
        alt: 'Processo di filtrazione glomerulare',
        prompt: 'schematic of glomerular filtration: blood entering glomerulus, plasma filtered through capillary walls into Bowman capsule, proteins and cells retained',
        icon: 'FlaskConical',
      },
      bullets: [
        '**Portata di filtrazione glomerulare (PFG)**: 120–125 mL/min',
        '**Filtrato** simile al plasma, ma senza proteine',
        'Pressioni: **idrostatica glomerulare** (favorisce), **oncotica** (oppone)',
        '**Superficie filtrante**: ~1,6 m²',
        'Regolata da **angiotensina II**, **NO**, **prostaciclina**',
      ],
    },
    {
      title: 'Riassorbimento e secrezione',
      accent: 'green',
      icon: 'ArrowDown',
      illustration: {
        id: 'ur-riassorbimento',
        alt: 'Riassorbimento tubulare',
        prompt: 'diagram of renal tubule showing reabsorption of water, sodium, glucose and amino acids back into peritubular capillaries, and secretion of hydrogen ions and creatinine into the lumen',
        icon: 'ArrowDown',
      },
      bullets: [
        '**Riassorbimento**: 99% del filtrato torna al sangue',
        '**Glucosio**: riassorbito completamente nel tubulo prossimale (soglia renale ~180 mg/dL)',
        '**Acqua**: regolata dall’**ADH** (vasopressina)',
        '**Sodio**: regolato dall’**aldosterone**',
        '**Secrezione**: H⁺, K⁺, creatinina, farmaci',
      ],
    },
    {
      title: 'Vie urinarie',
      accent: 'orange',
      icon: 'Route',
      illustration: {
        id: 'ur-vie-urinarie',
        alt: 'Ureteri, vescica e uretra',
        prompt: 'anatomical view of the urinary tract: two ureters descending from kidneys to the urinary bladder, and the urethra exiting the bladder',
        icon: 'Route',
      },
      bullets: [
        '**Ureteri**: 25–30 cm, peristalsi che spinge l’urina verso la vescica',
        '**Vescica**: capacità 400–600 mL, muscolo detrusore',
        '**Uretra**: maschile 18–20 cm, femminile 3–5 cm',
        '**Sfintere interno**: involontario (liscio)',
        '**Sfintere esterno**: volontario (striato)',
      ],
    },
    {
      title: 'Funzioni del rene',
      accent: 'teal',
      icon: 'Activity',
      bullets: [
        '**Escrezione**: urea, creatinina, acido urico, tossine',
        '**Regolazione PA**: sistema renina-angiotensina-aldosterone',
        '**Eritropoiesi**: produzione di **eritropoietina**',
        '**Attivazione vitamina D**: 1,25-(OH)₂-D₃',
        '**Equilibrio acido-base**: escrezione H⁺, riassorbimento HCO₃⁻',
      ],
    },
  ],
  keyPoints: [
    '**PFG normale**: 120–125 mL/min',
    '**Diuresi giornaliera**: 1–2 L',
    '**Soglia renale del glucosio**: ~180 mg/dL',
  ],
}

export default map
