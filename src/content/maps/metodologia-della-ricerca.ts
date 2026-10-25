import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'metodologia-della-ricerca',
  chapter: 'concorsi',
  title: 'Metodologia della ricerca',
  subtitle: 'Disegni, livelli di evidenza e bias: le basi per l’EBN',
  icon: 'Microscope',
  status: 'bozza',
  sources: [
    'Polit D.F., Beck C.T. — Nursing Research: Generating and Assessing Evidence for Nursing Practice, 11th ed., Wolters Kluwer',
    'Fugate M., et al. — Evidence-Based Practice in Nursing, 4th ed., Jones & Bartlett',
    'FNOPI — Linee guida per la pratica basata sulle evidenze',
  ],
  intro:
    'La **metodologia della ricerca** è l’insieme di metodi e strumenti per generare conoscenza affidabile. In infermieristica serve per valutare la letteratura e applicare l’**Evidence Based Nursing (EBN)**.',
  columns: 3,
  blocks: [
    {
      title: 'Tipi di disegno',
      icon: 'GitBranch',
      accent: 'blue',
      items: [
        '**Sperimentale**: randomizzazione, gruppo controllo, variabile indipendente manipolata',
        '**Quasi-sperimentale**: confronto senza randomizzazione (es. pre-test/post-test)',
        '**Descrittivo**: descrive fenomeni senza manipolazioni (es. prevalenza di una condizione)',
        '**Correlazionale**: associa variabili senza causazione (es. dolore e qualità del sonno)',
        '**Qualitativo**: interviste, focus group, analisi tematica (fenomenologia, etnografia)',
        '**Sistematico**: revisione sistematica, meta-analisi, evidence summary',
      ],
    },
    {
      title: 'Livelli di evidenza',
      icon: 'Layers',
      accent: 'purple',
      items: [
        '**Livello 1**: revisioni sistematiche e meta-analisi di RCT',
        '**Livello 2**: singoli RCT di buona qualità',
        '**Livello 3**: studi quasi-sperimentali e di coorte',
        '**Livello 4**: studi trasversali, correlazionali, casi-controllo',
        '**Livello 5**: studi qualitativi, report di esperti, consenso',
        'Più alto è il livello, più forte è la raccomandazione clinica',
      ],
    },
    {
      title: 'Bias e validità',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        '**Bias di selezione**: campione non rappresentativo o non randomizzato',
        '**Bias di misurazione**: strumenti inaffidabili o osservatori non ciechi',
        '**Bias di attrito**: perdita di partecipanti durante lo studio',
        '**Bias di pubblicazione**: tendenza a pubblicare solo risultati positivi',
        '**Conflitto di interessi**: finanziamenti che influenzano l’analisi',
        'Validità interna (causazione) vs. esterna (generalizzabilità)',
      ],
    },
    {
      title: 'Criteri di qualità',
      icon: 'ClipboardCheck',
      accent: 'green',
      items: [
        '**Campionamento**: dimensione adeguata, inclusione/esclusione chiare',
        '**Randomizzazione**: assegnazione casuale e nascosta (allocation concealment)',
        '**Cieca**: singolo o doppio cieco per ridurre il bias di performance',
        '**Strumenti validati**: affidabilità (Cronbach’s α) e validità (contenuto, criterio)',
        '**Analisi statistica**: test appropriati, intervallo di confidenza, p-value',
        '**Riproducibilità**: protocollo registrato, dati accessibili',
      ],
    },
    {
      title: 'Strumenti di valutazione',
      icon: 'Scale',
      accent: 'teal',
      items: [
        '**CASP** (Critical Appraisal Skills Programme): checklist per RCT, coorti, qualitativi',
        '**JBI** (Joanna Briggs Institute): livelli di evidenza e checklist di appraisement',
        '**GRADE**: sistema per valutare la qualità delle evidenze e formulare raccomandazioni',
        '**PRISMA**: linee guida per la reporting delle revisioni sistematiche',
        '**CONSORT**: checklist per la reporting degli RCT',
        'Usare questi strumenti rende la critica della letteratura strutturata e oggettiva',
      ],
    },
    {
      title: 'Dalla ricerca alla pratica',
      icon: 'Workflow',
      accent: 'navy',
      checks: [
        { text: 'Formulare una domanda clinica (PICO)', kind: 'ok' },
        { text: 'Cercare la letteratura (PubMed, CINAHL, Cochrane)', kind: 'ok' },
        { text: 'Valutare criticamente gli studi (CASP, JBI)', kind: 'ok' },
        { text: 'Sintetizzare le evidenze (revisione sistematica)', kind: 'ok' },
        { text: 'Applicare in pratica con il paziente e l’équipe', kind: 'ok' },
        { text: 'Valutare l’impatto e documentare il cambiamento', kind: 'ok' },
      ],
    },
  ],
  keyPoints: [
    'La **randomizzazione** e il **doppio cieco** sono i pilastri degli RCT: riducono bias di selezione e performance',
    'Una **revisione sistematica** non è un semplice riassunto: segue un protocollo predefinito e include una ricerca esaustiva',
    'Il **livello di evidenza** non è uguale alla qualità: uno studio di livello 1 mal condotto è meno utile di uno di livello 3 ben eseguito',
  ],
}

export default map
