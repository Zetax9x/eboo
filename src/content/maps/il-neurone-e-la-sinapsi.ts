import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'il-neurone-e-la-sinapsi',
  chapter: 'anatomia',
  title: 'Il neurone e la sinapsi',
  subtitle: 'Struttura, impulso nervoso e trasmissione sinaptica',
  icon: 'Brain',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Guyton A.C., Hall J.E. — Fisiologia medica, Elsevier',
    'Kandel E.R. et al. — Principi di neuroscienze, McGraw-Hill',
  ],
  blocks: [
    {
      title: 'Struttura del neurone',
      accent: 'blue',
      icon: 'Brain',
      illustration: {
        id: 'neurone-struttura',
        alt: 'Schema di un neurone multipolare',
        prompt: 'detailed diagram of a multipolar neuron showing soma, dendrites, axon hillock, myelin sheath, and axon terminals',
        icon: 'Brain',
      },
      inset: {
        label: 'Corpo cellulare',
        illustration: {
          id: 'neurone-soma',
          alt: 'Dettaglio del soma neuronale',
          prompt: 'close up of a neuron cell body with nucleus and Nissl bodies, dendrites extending outward',
          icon: 'CircleDot',
        },
      },
      bullets: [
        '**Soma**: contiene nucleo e organelli, centro metabolico',
        '**Dendriti**: ricevono segnali, superficie ricoperta di recettori',
        '**Assone**: trasporta l’impulso lontano dal soma',
        '**Terminali assonici**: rilasciano neurotrasmettitori',
        '**Assone mielinizzato**: velocità di conduzione fino a **120 m/s**',
      ],
    },
    {
      title: 'Glia e supporto',
      accent: 'purple',
      icon: 'Layers',
      illustration: {
        id: 'glia-cellule',
        alt: 'Cellule gliali attorno a un assoni',
        prompt: 'astrocyte, oligodendrocyte, microglia and schwann cell surrounding a nerve fiber, distinct shapes and colors',
        icon: 'Layers',
      },
      bullets: [
        '**Astrociti**: barriera emato-encefalica, supporto metabolico',
        '**Oligodendrociti**: mielinizzazione nel SNC',
        '**Cellule di Schwann**: mielinizzazione nel SNP',
        '**Microglia**: fagocitosi e difesa immunitaria',
        '**Ependimociti**: produzione e circolazione del liquor',
      ],
    },
    {
      title: 'Potenziale di membrana',
      accent: 'green',
      icon: 'Zap',
      bullets: [
        '**Riposo**: -70 mV (interno negativo rispetto all’esterno)',
        '**Soglia**: -55 mV, necessaria per aprire canali Na⁺ voltaggio-dipendenti',
        '**Depolarizzazione**: ingresso massivo di Na⁺',
        '**Ripolarizzazione**: uscita di K⁺',
        '**Iperpolarizzazione**: breve periodo refrattario assoluto',
      ],
    },
    {
      title: 'Conduzione dell’impulso',
      accent: 'orange',
      icon: 'Activity',
      illustration: {
        id: 'conduzione-assone',
        alt: 'Impulso che viaggia lungo l’assone',
        prompt: 'axon with nodes of Ranvier, electrical signal jumping from node to node, arrows indicating direction of propagation',
        icon: 'Activity',
      },
      bullets: [
        '**Conduzione saltatoria**: nei nervi mielinizzati',
        '**Nodi di Ranvier**: zone prive di mielina, ricchi di canali Na⁺',
        '**Velocità**: dipende dal diametro e dalla mielinizzazione',
        '**Principio del tutto o niente**: l’ampiezza non varia con lo stimolo',
        '**Frequenza**: codifica l’intensità dello stimolo',
      ],
    },
    {
      title: 'La sinapsi chimica',
      accent: 'red',
      icon: 'GitBranch',
      illustration: {
        id: 'sinapsi-chimica',
        alt: 'Schema di una giunzione sinaptica',
        prompt: 'synaptic cleft between presynaptic terminal and postsynaptic membrane, vesicles releasing neurotransmitters, receptors on postsynaptic side',
        icon: 'GitBranch',
      },
      inset: {
        label: 'Fessura sinaptica',
        illustration: {
          id: 'sinapsi-fessura',
          alt: 'Dettaglio della fessura sinaptica',
          prompt: 'molecular view of synaptic cleft, neurotransmitter molecules diffusing across the gap to bind receptors',
          icon: 'Droplet',
        },
      },
      bullets: [
        '**Terminale presinaptico**: vescicole con neurotrasmettitori',
        '**Fessura sinaptica**: 20–40 nm di spazio extracellulare',
        '**Membrana postsinaptica**: recettori specifici',
        '**Neurotrasmettitori**: acetilcolina, glutammato, GABA, dopamina',
        '**Rimodulazione**: ricaptazione o degradazione enzimatica',
      ],
    },
    {
      title: 'Potenziali postsinaptici',
      accent: 'teal',
      icon: 'Scale',
      bullets: [
        '**EPSP** (Eccitatorio): depolarizzazione, apertura canali Na⁺/K⁺',
        '**IPSP** (Inibitorio): iperpolarizzazione, apertura canali Cl⁻/K⁺',
        '**Somma temporale**: stimoli ravvicinati nello stesso punto',
        '**Somma spaziale**: stimoli simultanei in punti diversi',
        '**Soglia**: se raggiunta, scatta l’impulso nervoso',
      ],
    },
  ],
  keyPoints: [
    '**Potenziale di riposo**: -70 mV',
    '**Soglia di attivazione**: -55 mV',
    '**Sinapsi**: punto di comunicazione tra neuroni o neurone-effettore',
  ],
}

export default map
