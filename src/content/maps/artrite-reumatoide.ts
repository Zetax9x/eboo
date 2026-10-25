import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'artrite-reumatoide',
  chapter: 'patologie',
  title: 'Artrite reumatoide',
  subtitle: 'Malattia autoimmune sistemica: sinovite cronica, diagnosi, terapia e assistenza',
  icon: 'Bone',
  status: 'bozza',
  sources: [
    'ACR/EULAR — 2022 Update of the Guidelines for the Management of Rheumatoid Arthritis',
    'SIR — Società Italiana di Reumatologia: Linee guida per la gestione dell’artrite reumatoide',
    'NICE — Rheumatoid arthritis: diagnosis and management (NG15)',
  ],
  definition:
    'Malattia autoimmune **cronica** e sistemica che colpisce principalmente le articolazioni, causando **sinovite** infiammatoria, erosione ossea e deformità se non trattata precocemente.',
  illustration: {
    id: 'artrite-reumatoide-giunta',
    alt: 'Giunto infiammato con sinovite e erosione ossea',
    prompt: 'cross-section of a knee joint showing inflamed synovial membrane, swelling, and bone erosion at the joint surface',
    icon: 'Bone',
  },
  types: [
    { name: 'Seropositiva', text: 'Anticorpi anti-CCP e/o Fattore Reumatoide **positivi**. Prognosi spesso peggiore.' },
    { name: 'Seronegativa', text: 'Anticorpi negativi. Diagnosi basata su criteri clinici e di imaging.' },
    { name: 'Juvenile (JIA)', text: 'Insorgenza < 16 anni. Distinta dall’AR dell’adulto ma con sovrapposizioni.' },
    { name: 'Extra-articolare', text: 'Coinvolgimento di polmoni, cuore, occhi, nervi. Segno di malattia **aggressiva**.' },
  ],
  sections: [
    {
      title: 'Cause e fattori di rischio',
      icon: 'ShieldAlert',
      accent: 'purple',
      items: [
        'Predisposizione genetica (HLA-DR4, HLA-DR1)',
        'Fumo di sigaretta (fattore di rischio **maggiore**)',
        'Sesso femminile (rapporto 3:1 rispetto agli uomini)',
        'Età insorgenza: picco tra 30 e 50 anni',
        'Infezioni (es. parodontite) come possibile trigger',
        'Stress ossidativo e disregolazione immunitaria',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Rigidezza mattutina** > 30 minuti (caratteristica)',
        'Dolore e tumefazione simmetrica di piccole articolazioni (MCP, PIP, MTF)',
        'Debolezza muscolare e astenia',
        'Febbre bassa e calo ponderale in fase attiva',
        'Nodi reumatoidi (sotto-cutanei, su superfici estensorie)',
        'Sintomi extra-articolari: secchezza oculare/orale, vasculite',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        'Criteri ACR/EULAR 2010 (punteggio ≥ 6/10 per diagnosi certa)',
        'Anticorpi anti-CCP: specificità **> 95%**',
        'Fattore Reumatoide (FR): sensibilità ~70-80%',
        'ESR e PCR elevate (marcatori di attività)',
        'Radiografia: erosioni marginali, riduzione spazio articolare',
        'Ecografia articolare: sinovite, emartro, erosioni precoci',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        'FANS per il controllo del dolore (non modificano la malattia)',
        'Corticosteridi a breve termine per "bridge therapy"',
        'DMARDs convenzionali: **Metotrexato** (gold standard)',
        'DMARDs biologici: anti-TNF, anti-IL-6, inibitori JAK',
        'Terapia mirata: abatacept, rituximab, tofacitinib',
        'Riabilitazione motoria e supporto psicologico',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        'Deformità articolari permanenti (ulna, swan-neck, boutonniere)',
        'Polmonite interstiziale e nodi polmonari',
        'Cardite: pericardite, miocardite, aterosclerosi accelerata',
        'Neuropatia periferica (es. compressione del nervo mediano)',
        'Anemia normocitica da malattia cronica',
        'Aumento rischio infezioni (soprattutto con immunosoppressori)',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        'DAS28 o CDAI per valutare l’attività della malattia',
        'ESR, PCR, emocromo, funzionalità epatica e renale',
        'Radiografia o ecografia ogni 6-12 mesi',
        'Screening per infezioni (tubercolosi, epatite B/C) prima di biologic',
        'Valutazione della qualità di vita e della funzionalità',
        'Controlli oculistici se in terapia con idrossiclorochina',
      ],
    },
  ],
  nursing: [
    'Somministrare i farmaci antireumatici secondo prescrizione e monitorare effetti collaterali',
    'Educare al riconoscimento dei segni di **flare** (rinfiammamento)',
    'Supportare la riabilitazione: esercizi di range of motion, ausili',
    'Monitorare la risposta alla terapia e la tolleranza (es. epatite da metotrexato)',
    'Gestire il dolore e la rigidità con calore locale e tecniche non farmacologiche',
  ],
  redFlags: [
    'Febbre alta, malessere generale e segni di infezione: **sospendere immunosoppressori** e avvisare il medico',
    'Dolore toracico, dispnea o emottisi: possibile coinvolgimento polmonare o cardiovascolare',
    'Deformità improvvisa o perdita di funzione articolare: valutare urgenza ortopedica',
  ],
}

export default map
