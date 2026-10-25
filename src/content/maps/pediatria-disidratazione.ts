import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'pediatria-disidratazione',
  chapter: 'specialistica',
  title: 'Disidratazione in pediatria',
  subtitle: 'Valutazione della gravità e reidratazione',
  icon: 'Droplets',
  status: 'bozza',
  sources: [
    'ESPGHAN/ESPID — Evidence-based guidelines for the management of acute gastroenteritis in children in Europe, 2014',
    'NICE CG84 — Diarrhoea and vomiting caused by gastroenteritis in under 5s',
    'WHO — The treatment of diarrhoea: a manual for physicians and other senior health workers',
  ],
  intro:
    'Il bambino, e soprattutto il **lattante**, si disidrata in fretta: più acqua corporea, ricambio idrico elevato, rene immaturo. Gravità stimata con il **calo di peso %** = (peso precedente − peso attuale) / peso precedente × 100.',
  tableTitle: 'Segni clinici per gravità',
  tableIcon: 'Droplets',
  columns: ['Segno', 'Lieve (< 5%)', 'Moderata (5–10%)', 'Grave (> 10%)'],
  widths: [1.2, 1.3, 1.5, 1.6],
  rows: [
    ['Stato generale', 'Vigile, normale', '**Irritabile**, agitato', '**Letargico**, soporoso, ipotonico'],
    ['Occhi / lacrime', 'Normali, lacrime presenti', '**Infossati**, lacrime ridotte', 'Molto infossati, **lacrime assenti**'],
    ['Mucose', 'Umide', 'Asciutte', 'Molto secche, **lingua arida**'],
    ['Sete', 'Beve normalmente', '**Beve avidamente**', 'Beve poco o non riesce a bere'],
    ['Fontanella (lattante)', 'Normotesa', 'Lievemente depressa', '**Molto depressa**'],
    ['Plica cutanea', 'Si distende subito', 'Si distende lentamente', 'Persiste **> 2 s**'],
    ['Circolo', 'FC e polsi normali', '**Tachicardia**, refill ≈ 2 s', 'Polsi deboli, refill **> 3 s**, estremità fredde, ipotensione (tardiva)'],
    ['Diuresi', 'Normale', '**Ridotta**, urine concentrate', 'Oliguria / **anuria**'],
  ],
  notes: [
    {
      title: 'Reidratazione orale (SRO)',
      icon: 'Droplet',
      accent: 'blue',
      items: [
        'Prima scelta nella forma **lieve-moderata**',
        'SRO **ipo-osmolare**, non bevande zuccherate o succhi',
        '**50–100 mL/kg in 3–4 h**, a piccoli sorsi (cucchiaino/siringa)',
        'Più **10 mL/kg** per ogni scarica e **2 mL/kg** per ogni vomito',
        'Poi **rialimentare** precocemente; allattamento al seno continuato',
      ],
    },
    {
      title: 'Forma grave: subito',
      icon: 'Siren',
      accent: 'red',
      items: [
        'Accesso venoso o **intraosseo**',
        'Boli di **cristalloide isotonico** (es. NaCl 0,9%) secondo protocollo, poi rivalutare',
        'Prelievi: **glicemia**, elettroliti, EGA',
        'SNG se il bambino non beve ma è stabile',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Scale',
      accent: 'teal',
      items: [
        '**Peso** quotidiano, stessa bilancia',
        'Diuresi: pesare i **pannolini** (1 g ≈ 1 mL)',
        'Diuresi attesa lattante **1–2 mL/kg/h**',
        'Bilancio entrate/uscite, FC, refill, coscienza',
      ],
    },
  ],
  keyPoints: [
    '**Clinical Dehydration Scale** (0–8): 0 assente, 1–4 lieve, 5–8 moderata-grave',
    'Allarme: lattante **< 6 mesi**, letargia, vomito incoercibile, **sangue nelle feci**, oliguria',
  ],
}

export default map
