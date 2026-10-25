import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'sindromi-geriatriche',
  chapter: 'specialistica',
  title: 'Sindromi geriatriche',
  subtitle: 'Sindrome di fragilità: declino multifattoriale e vulnerabilità dell’anziano',
  icon: 'Users',
  status: 'bozza',
  sources: [
    'Fried L.P., et al. — Frailty phenotype and frailty index: a systematic review, J Gerontol A Biol Sci Med Sci, 2018',
    'Ministero della Salute — Linee guida per la cura della fragilità in età avanzata, 2023',
    'Boult C., et al. — Comprehensive Geriatric Assessment: A Guide for Clinicians, 2022',
  ],
  intro:
    'La **sindrome di fragilità** è una condizione clinica caratterizzata da un **declino multifattoriale** delle funzioni fisiche, cognitive e psicologiche, che aumenta la vulnerabilità a stressori e il rischio di complicanze. Non è una malattia specifica, ma un **fenotipo** che richiede una valutazione globale.',
  illustration: {
    id: 'sindromi-geriatriche-fragilita',
    alt: 'Anziano seduto su una sedia, con un infermiere che lo assiste',
    prompt: 'an elderly person sitting in a chair, a nurse standing beside them offering support',
    icon: 'User',
  },
  columns: 3,
  blocks: [
    {
      title: 'Definizione e Fenotipo',
      icon: 'Info',
      accent: 'blue',
      items: [
        'Declino **multisistemico** (muscolare, cognitivo, metabolico)',
        'Fenotipo di Fried: **bassa forza di presa**, **lentezza**, **bassa attività**, **deplezione**, **perdita di peso**',
        'Indice di fragilità (Rockwood): accumulo di **deficit** (ogni deficit = 1 punto)',
        'Non è sinonimo di vecchiaia: **non tutti gli anziani sono fragili**',
        'Distinzione: **robusto** → **pre-frail** → **fragile**',
        'Rischio di **cadute**, **disabilità**, **ricovero**, **morte**',
      ],
    },
    {
      title: 'Fattori di Rischio',
      icon: 'TriangleAlert',
      accent: 'orange',
      items: [
        '**Età** avanzata (>80 anni)',
        '**Malattie croniche** multiple (diabete, BPCO, ICH)',
        '**Polifarmacoterapia** (>5 farmaci)',
        '**Sarcopenia** e perdita di massa muscolare',
        '**Isolamento sociale** e solitudine',
        '**Cattiva alimentazione** e disidratazione',
        '**Inattività** e sedentarietà',
      ],
    },
    {
      title: 'Valutazione Geriatrica',
      icon: 'ClipboardCheck',
      accent: 'green',
      items: [
        '**CGA** (Comprehensive Geriatric Assessment): valutazione multidimensionale',
        'Scale: **FRAIL**, **Fried**, **Rockwood**, **SARC-F**',
        'Valutazione **cognitiva** (MMSE, MoCA)',
        'Valutazione **funzionale** (ADL, IADL)',
        'Valutazione **nutrizionale** (MNA, MUST)',
        'Valutazione **sociale** e **psicologica**',
        'Screening **delirium** (4AT, CAM)',
      ],
    },
    {
      title: 'Interventi Infermieristici',
      icon: 'Hand',
      accent: 'teal',
      items: [
        '**Educazione terapeutica** su stile di vita e prevenzione',
        '**Monitoraggio** dei parametri vitali e della funzionalità',
        '**Prevenzione delle cadute**: valutazione del rischio, ambiente sicuro',
        '**Supporto nutrizionale**: integrazione proteica, idratazione',
        '**Attività fisica**: esercizi di forza e equilibrio (es. Tai Chi)',
        '**Coordinamento** con équipe multiprofessionale (medico, fisioterapista, assistente sociale)',
        '**Educazione** del caregiver e della famiglia',
      ],
    },
    {
      title: 'Segnali di Allarme',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Perdita di peso** involontaria (>5% in 6 mesi)',
        '**Rallentamento** della deambulazione',
        '**Difficoltà** nelle attività quotidiane (vestirsi, cucinare)',
        '**Confusione** o disorientamento recente',
        '**Cadute** frequenti o con conseguenze',
        '**Isolamento** sociale e perdita di interessi',
        '**Interruzione** di farmaci o terapie',
      ],
    },
    {
      title: 'Obiettivi di Assistenza',
      icon: 'Target',
      accent: 'purple',
      items: [
        'Mantenere la **funzionalità** e l’autonomia il più a lungo possibile',
        'Prevenire le **complicanze** (infezioni, ulcere, disidratazione)',
        'Migliorare la **qualità della vita** e il benessere psicologico',
        'Ridurre il **rischio di ricovero** e di istituzionalizzazione',
        'Promuovere la **prevenzione** e la gestione delle malattie croniche',
        'Supportare il **caregiver** e la rete familiare',
        'Garantire la **continuità assistenziale** tra setting (casa, ospedale, RSA)',
      ],
    },
  ],
  keyPoints: [
    'La fragilità è un **fenotipo** reversibile in parte: la valutazione precoce è fondamentale',
    'L’**attività fisica** e la **nutrizione** sono i pilastri della prevenzione',
    'La **valutazione multidimensionale** (CGA) è lo strumento chiave per identificare i bisogni',
  ],
}

export default map
