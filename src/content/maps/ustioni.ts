import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'ustioni',
  chapter: 'patologie',
  title: 'Ustioni',
  subtitle: 'Classificazione, stadi, shock ustico e gestione infermieristica',
  icon: 'Zap',
  status: 'bozza',
  sources: [
    'ISBI — International Society for Burn Injuries (Guidelines)',
    'Ministero della Salute — Linee guida per la gestione delle ustioni',
    'Società Italiana di Chirurgia — Linee guida per la gestione delle ustioni (2020)',
  ],
  definition:
    'Lesione cutanea e dei tessuti sottostanti causata da **calore**, **chimici**, **elettricità** o **raggi**. La gravità dipende da **superficie** e **profondità**.',
  illustration: {
    id: 'ustioni-lesioni',
    alt: 'Lesioni cutanee da ustione di diverso grado',
    prompt: 'close up of human skin showing different stages of burn injury, red inflamed skin, blistered skin, white charred tissue',
    icon: 'Zap',
  },
  types: [
    { name: 'Superficiale (1°)', text: 'Eritema, dolore, pelle integra. **Recupero in 3-7 giorni**.' },
    { name: 'Parziale (2°)', text: 'Bolle, essudato, dolore intenso. **Recupero in 2-3 settimane**.' },
    { name: 'Profonda (3°)', text: 'Pelle bianca/grigia, **indolore**, coinvolge strato basale.' },
    { name: 'Full-thickness (4°)', text: 'Coinvolge muscoli, tendini, ossa. **Necessaria chirurgia**.' },
  ],
  sections: [
    {
      title: 'Cause e fattori di rischio',
      icon: 'Zap',
      accent: 'purple',
      items: [
        '**Termiche**: liquidi caldi, fiamme, vapore',
        '**Chimiche**: acidi, alcali, solventi',
        '**Elettriche**: contatto con corrente, fulmini',
        '**Radianti**: sole, raggi X, laser',
        'Fattori di rischio: età < 2 o > 65 anni, diabete, uso di farmaci',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Dolore** (assente nelle ustioni profonde)',
        'Eritema, edema, formazione di bolle',
        'Alterazione della sensibilità cutanea',
        'Nausea, vomito, tachicardia (shock ustico)',
        'Difficoltà respiratoria (ustioni facciali/collo)',
      ],
    },
    {
      title: 'Diagnosi e valutazione',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**Regola dei nove**: stima della superficie ustionata (BSA)',
        'Valutazione della profondità (1°, 2°, 3°, 4°)',
        'Verifica di **shock ipovolemico** (PA, FC, diuresi)',
        'Esami: emoglobina, ematocrito, elettroliti, creatinina',
        'Risonanza magnetica o TAC per ustioni elettriche profonde',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Fluidoterapia**: formula Parkland (4 ml × kg × %BSA)',
        'Analgesia: oppioidi, FANS (evitare nelle ustioni estese)',
        'Antibiotici: solo se infezione documentata',
        'Cure topiche: detergenti, debriding, medicazioni',
        'Chirurgia: innesti cutanei, plastica ricostruttiva',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Shock ipovolemico**: perdita di liquidi e proteine',
        '**Infezione**: sepsi, batteriemia (rischio maggiore dopo 48h)',
        '**Complicanze respiratorie**: edema polmonare, ARDS',
        '**Complicanze renali**: insufficienza renale acuta',
        '**Complicanze gastrointestinali**: ulcere di Curling',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        '**Parametri vitali**: PA, FC, SpO2, temperatura',
        '**Diuresi**: target 0,5-1 ml/kg/h (adulti)',
        'Bilanciamento idrico: entrate/uscite',
        'Emogasanalisi, elettroliti, emoglobina',
        'Valutazione del dolore (scala NRS)',
      ],
    },
  ],
  nursing: [
    'Valutare la **superficie ustionata** con la regola dei 9',
    'Monitorare la **diuresi** e il bilancio idrico',
    'Somministrare **fluidi** secondo protocollo (es. Parkland)',
    'Gestire il **dolore** con analgesici e tecniche non farmacologiche',
    'Prevenire le **infezioni**: asepsi, medicazioni, igiene',
  ],
  redFlags: [
    '**Shock ustico**: tachicardia, ipotensione, diuresi < 0,5 ml/kg/h',
    '**Infezione**: febbre, pus, odore sgradevole, batteriemia',
    '**Compromissione respiratoria**: stridore, dispnea, cianosi',
  ],
}

export default map
