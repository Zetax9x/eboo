import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'farmacodinamica-essenziale',
  chapter: 'farmacologia',
  title: 'Farmacodinamica essenziale',
  subtitle: 'Che cosa fa il farmaco all’organismo: bersagli, effetti, risposta',
  icon: 'Target',
  status: 'bozza',
  sources: [
    'Katzung B.G., Vanderah T.W. — Farmacologia generale e clinica, Piccin',
    'Rang H.P., Dale M.M. et al. — Farmacologia, Edra',
    'AIFA — Rete Nazionale di Farmacovigilanza, segnalazione delle reazioni avverse',
  ],
  intro:
    'La **farmacodinamica** studia il **meccanismo d’azione** e gli effetti del farmaco: il legame con un **bersaglio** (recettore, enzima, canale, trasportatore) produce la risposta clinica.',
  columns: 3,
  blocks: [
    {
      title: 'Bersagli d’azione',
      icon: 'Target',
      accent: 'blue',
      items: [
        '**Recettori**: es. β-adrenergici, oppioidi, istaminici',
        '**Enzimi**: es. COX (FANS), ACE (ACE-inibitori)',
        '**Canali ionici**: es. calcio-antagonisti, anestetici locali',
        '**Trasportatori/pompe**: es. Na⁺/K⁺-ATPasi (digossina), pompa protonica (IPP)',
        'Azioni **non recettoriali**: antiacidi, diuretici osmotici, lassativi',
        '**Selettività**: più è selettivo, meno effetti indesiderati',
      ],
    },
    {
      title: 'Agonisti e antagonisti',
      icon: 'GitBranch',
      accent: 'purple',
      items: [
        '**Agonista**: si lega e **attiva** il recettore (es. morfina, salbutamolo)',
        '**Agonista parziale**: effetto massimo inferiore (es. buprenorfina)',
        '**Antagonista**: si lega ma **blocca** (es. naloxone, β-bloccanti)',
        'Antagonismo **competitivo**: superabile aumentando l’agonista',
        'Antagonismo **irreversibile**: es. aspirina sulla COX piastrinica',
        'Base degli **antidoti**: naloxone (oppioidi), flumazenil (benzodiazepine)',
        '**Agonista inverso**: produce l’effetto opposto all’agonista',
        'Uso prolungato di antagonisti → **up‑regolazione** dei recettori (effetto rebound)',
      ],
    },
    {
      title: 'Potenza ed efficacia',
      icon: 'Gauge',
      accent: 'teal',
      items: [
        '**Affinità**: capacità di legarsi al bersaglio',
        '**Potenza**: dose necessaria per un effetto (meno mg = più potente)',
        '**Efficacia**: effetto **massimo** ottenibile',
        'Più potente **non** significa più efficace',
        'Curva **dose-risposta**: oltre il plateau aumenta solo la tossicità',
        '**Effetto tetto**: es. FANS, paracetamolo, agonisti parziali',
        'Superare la dose massima **non** aumenta l’analgesia, aumenta il rischio',
        '**Latenza**, picco e durata d’azione guidano gli **orari**',
      ],
    },
    {
      title: 'Indice terapeutico',
      icon: 'Scale',
      accent: 'red',
      items: [
        '**IT = DL50 / DE50**: rapporto dose tossica/dose efficace',
        'IT **alto** = farmaco sicuro (es. penicilline)',
        'IT **basso** = rischio di tossicità con piccole variazioni',
        'Esempi a IT basso: **digossina**, **litio**, warfarin, aminoglicosidi',
        'Richiedono **monitoraggio** clinico e dei livelli plasmatici',
        'Spesso classificati come farmaci **ad alto rischio**',
        'Fattori che aumentano la tossicità: **insufficienza renale**, ipokaliemia (digossina), disidratazione (litio)',
        'Osservare e documentare la **risposta** dopo ogni dose',
      ],
    },
    {
      title: 'Variazioni della risposta',
      icon: 'RefreshCw',
      accent: 'orange',
      items: [
        '**Tolleranza**: serve più dose per lo stesso effetto (oppioidi, nitrati)',
        '**Tachifilassi**: tolleranza rapida dopo poche dosi',
        '**Dipendenza** fisica: sindrome d’astinenza alla sospensione',
        '**Effetto rebound**: peggioramento alla sospensione brusca (β-bloccanti, corticosteroidi)',
        '**Sinergismo**: effetto combinato maggiore della somma',
        '**Antagonismo**: un farmaco riduce l’effetto dell’altro',
        '**Idiosincrasia**: risposta anomala su base genetica',
      ],
    },
    {
      title: 'Effetti indesiderati',
      icon: 'TriangleAlert',
      accent: 'navy',
      items: [
        '**Effetto collaterale**: prevedibile, legato al meccanismo',
        '**Reazione avversa (ADR)**: risposta nociva e non voluta',
        'Tipo **A** dose-dipendente; tipo **B** imprevedibile (allergia)',
        '**Allergia**: da orticaria fino ad **anafilassi**',
        '**Teratogenicità**: danno al feto (es. warfarin, isotretinoina)',
        'Segnalare ogni sospetta ADR alla **Rete Nazionale di Farmacovigilanza (AIFA)**',
        'Anche l’infermiere può **segnalare**',
      ],
    },
  ],
  keyPoints: [
    'Farmacocinetica = cosa fa l’organismo al farmaco; **farmacodinamica** = cosa fa il farmaco all’organismo',
    'Ogni nuovo sintomo dopo un farmaco è una **possibile reazione avversa** fino a prova contraria',
  ],
}

export default map
