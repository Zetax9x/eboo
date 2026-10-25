import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'apparato-muscolo-scheletrico',
  chapter: 'anatomia',
  title: 'Apparato muscolo-scheletrico',
  subtitle: 'Ossa, articolazioni e muscoli: struttura, funzione e implicazioni infermieristiche',
  icon: 'Bone',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Linee guida ACR/EULAR per la gestione dell’artrite reumatoide e dell’osteoporosi',
    'Ministero della Salute — Raccomandazioni per la prevenzione delle fratture da fragilità',
  ],
  blocks: [
    {
      title: 'Struttura ossea',
      accent: 'blue',
      icon: 'Bone',
      illustration: {
        id: 'ms-ossa-struttura',
        alt: 'Sezione di un osso lungo mostrando midollo e tessuto osseo',
        prompt: 'cross-section of a long bone showing compact bone, spongy bone, red and yellow bone marrow, periosteum and endosteum',
        icon: 'Bone',
      },
      inset: {
        label: 'Tipi di tessuto osseo',
        illustration: {
          id: 'ms-ossa-tessuto',
          alt: 'Dettaglio del tessuto osseo compatto e spugnoso',
          prompt: 'microscopic view of compact bone with osteons and spongy bone with trabeculae',
          icon: 'Layers',
        },
      },
      bullets: [
        '**Osso compatto**: 80% del volume, struttura densa',
        '**Osso spugnoso**: 20%, reticolo di trabecole',
        '**Periostio**: membrana esterna con vasi e nervi',
        '**Midollo osseo**: emopoiesi (rosso) e riserva lipidica (giallo)',
        'Rinnovamento continuo: **osteoclasti** (resorzione) e **osteoblasti** (formazione)',
      ],
    },
    {
      title: 'Articolazioni',
      accent: 'purple',
      icon: 'GitBranch',
      illustration: {
        id: 'ms-articolazioni',
        alt: 'Schema delle diverse tipologie di articolazioni',
        prompt: 'diagram of synovial, cartilaginous and fibrous joints with labels for ligaments, cartilage and joint capsule',
        icon: 'GitBranch',
      },
      bullets: [
        '**Sinoviali**: mobili, con cavità articolare e liquido sinoviale',
        '**Cartilaginee**: unite da cartilagine (es. vertebre)',
        '**Fibrose**: unite da tessuto fibroso (es. cranio)',
        '**Liquido sinoviale**: lubrificazione e nutrimento della cartilagine',
        '**Legamenti**: stabilizzano l’articolazione',
      ],
    },
    {
      title: 'Muscoli scheletrici',
      accent: 'red',
      icon: 'Activity',
      illustration: {
        id: 'ms-muscoli',
        alt: 'Muscoli scheletrici del corpo umano',
        prompt: 'anatomical illustration of human skeletal muscles, anterior and posterior views, highlighting major muscle groups',
        icon: 'Activity',
      },
      inset: {
        label: 'Unità motoria',
        illustration: {
          id: 'ms-muscoli-unita',
          alt: 'Schema di una unità motoria',
          prompt: 'diagram of a motor unit showing a motor neuron and the muscle fibers it innervates',
          icon: 'Zap',
        },
      },
      bullets: [
        '**Contrazione volontaria**: controllata dal SNC',
        '**Fibre muscolari**: rosse (ossidative) e bianche (glicolitiche)',
        '**Tendini**: collegano il muscolo all’osso',
        '**Aponeurosi**: espansione tendinea piatta',
        '**Recettori propriocettivi**: fusetti neuromuscolari e organi tendinei',
      ],
    },
    {
      title: 'Movimento e biomeccanica',
      accent: 'orange',
      icon: 'Workflow',
      illustration: {
        id: 'ms-movimento',
        alt: 'Schema delle leve muscolo-scheletriche',
        prompt: 'diagram of the musculoskeletal lever system showing fulcrum, effort and load in the elbow joint',
        icon: 'Workflow',
      },
      bullets: [
        '**Leve**: osso = leva, articolazione = fulcro, muscolo = forza',
        '**Tipi di leva**: 1° (es. testa), 2° (es. punta dei piedi), 3° (es. braccio)',
        '**Movimenti**: flessione, estensione, abduzione, adduzione, rotazione',
        '**Range di movimento (ROM)**: attivo e passivo',
        '**Stabilità articolare**: legamenti, capsule, muscoli',
      ],
    },
    {
      title: 'Nutrizione ossea e muscolare',
      accent: 'green',
      icon: 'Apple',
      illustration: {
        id: 'ms-nutrizione',
        alt: 'Alimenti ricchi di calcio e vitamina D',
        prompt: 'plate with dairy products, leafy greens, fish and fortified foods, representing calcium and vitamin D sources',
        icon: 'Apple',
      },
      bullets: [
        '**Calcio**: 99% nelle ossa, 1% nel sangue',
        '**Vitamina D**: assorbito nell’intestino, attiva l’assorbimento del Ca²⁺',
        '**Fosforo**: componente dell’idrossiapatite ossea',
        '**Proteine**: struttura muscolare e tendinea',
        '**Magnesio**: cofattore enzimatico per la contrazione muscolare',
      ],
    },
    {
      title: 'Implicazioni infermieristiche',
      accent: 'teal',
      icon: 'Stethoscope',
      illustration: {
        id: 'ms-infermieristica',
        alt: 'Infermiere che assiste un paziente con dolore muscolo-scheletrico',
        prompt: 'nurse assisting an elderly patient with knee pain, providing support and evaluating mobility',
        icon: 'Stethoscope',
      },
      bullets: [
        '**Valutazione del dolore**: localizzazione, intensità, fattori scatenanti',
        '**Mobilità**: ROM attivo/passivo, forza muscolare',
        '**Prevenzione ulcere da pressione**: cambio posizione, materassi speciali',
        '**Educazione**: esercizi di rinforzo, postura, sicurezza domestica',
        '**Monitoraggio**: segni di frattura, infezione, infiammazione',
      ],
    },
  ],
  keyPoints: [
    '**Ossa**: 206 nell’adulto, 300 nel neonato',
    '**Articolazioni sinoviali**: 90% delle articolazioni del corpo',
    '**Muscoli scheletrici**: ~600, controllati dal SNC',
    '**Calcio**: 1000 mg/die negli adulti, 1300 mg/die negli adolescenti',
    '**Vitamina D**: 600–800 UI/die negli adulti sani',
  ],
}

export default map
