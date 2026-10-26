import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'modelli-organizzativi-dell-assistenza',
  chapter: 'concorsi',
  title: 'Modelli organizzativi dell’assistenza',
  subtitle: 'Strutture, ruoli e sistemi di lavoro in sanità',
  icon: 'Layers',
  status: 'bozza',
  sources: [
    'Ministero della Salute — Piano Nazionale di Transizione Digitale in Sanità',
    'FNOPI — Codice Deontologico dell’Infermiere (2014)',
    'Legge 833/1978 — Istituzione del Servizio Sanitario Nazionale',
  ],
  intro:
    'I modelli organizzativi definiscono **come** l’assistenza viene erogata: struttura, ruoli, flussi di lavoro e responsabilità. Conoscerli è essenziale per i concorsi e per la pratica clinica.',
  columns: 2,
  blocks: [
    {
      title: 'Modelli di assistenza infermieristica',
      icon: 'User',
      accent: 'blue',
      items: [
        '**Modello tradizionale**: 1 infermiere per 4-6 pazienti, focus su compiti',
        '**Modello di gruppo**: team di infermieri + OSS, coordinamento da un capogruppo',
        '**Modello di team**: multidisciplinare (medico, infermiere, OSS, fisioterapista)',
        '**Modello di case management**: infermiere coordinatore del percorso assistenziale',
        '**Modello di primary nursing**: infermiere di riferimento per 24h, continuità assistenziale',
        '**Modello di associate nursing**: infermiere esperto + infermiere associato',
      ],
    },
    {
      title: 'Struttura organizzativa ospedaliera',
      icon: 'Hospital',
      accent: 'navy',
      items: [
        '**Direzione Sanitaria**: responsabile clinico-assistenziale',
        '**Direzione Amministrativa**: gestione risorse, budget, personale',
        '**Direzione Generale**: governance strategica dell’azienda ospedaliera',
        '**Unità Operative (UO)**: reparti clinici, chirurgici, specialistici',
        '**Servizi di supporto**: laboratorio, radiologia, farmacia, centrale sterilizzazione',
        '**Comitato Etico**: etica, bioetica, diritti del paziente',
      ],
    },
    {
      title: 'Ruoli e responsabilità',
      icon: 'ShieldCheck',
      accent: 'green',
      items: [
        '**Infermiere**: autonomia professionale, responsabilità assistenziale (DM 739/1994)',
        '**OSS**: supporto nelle attività di base, sotto supervisione infermieristica',
        '**Medico**: diagnosi, terapia, prescrizioni, responsabilità clinica',
        '**Capo reparto**: coordinamento del team, gestione turni, formazione',
        '**Coordinatore infermieristico**: pianificazione assistenziale, qualità, EBN',
        '**Direttore sanitario**: supervisione clinica, accreditamento, sicurezza',
      ],
    },
    {
      title: 'Sistemi di turnazione e gestione del personale',
      icon: 'Clock',
      accent: 'orange',
      items: [
        '**Turni**: mattina (6-14), pomeriggio (14-22), notte (22-6)',
        '**Rapporto infermiere/paziente**: varia per acuità (es. 1:4 in medicina, 1:2 in terapia intensiva)',
        '**Flessibilità**: turni rotanti, straordinari, reperibilità',
        '**Formazione continua**: ECM obbligatorio (50 crediti/3 anni)',
        '**Valutazione delle performance**: indicatori di qualità, soddisfazione paziente',
        '**Prevenzione burnout**: gestione stress, supporto psicologico, team building',
      ],
    },
    {
      title: 'Qualità e sicurezza delle cure',
      icon: 'Target',
      accent: 'purple',
      items: [
        '**Indicatori di qualità**: mortalità, infezioni ospedaliere, readmission',
        '**Eventi sentinella**: segnalazione obbligatoria, analisi causa radice',
        '**Gestione del rischio**: identificazione rischi, prevenzione, gestione incidenti',
        '**Accreditamento**: requisiti strutturali, organizzativi, funzionali (DM 70/2015)',
        '**Audit clinico**: revisione sistematica delle pratiche assistenziali',
        '**Sicurezza del paziente**: checklist, protocolli, comunicazione efficace',
      ],
    },
    {
      title: 'Innovazioni organizzative',
      icon: 'Zap',
      accent: 'teal',
      items: [
        '**Telemedicina**: visite a distanza, monitoraggio remoto, e-consulti',
        '**Digitalizzazione**: cartella clinica elettronica, fascicolo sanitario elettronico',
        '**Assistenza domiciliare**: infermiere di comunità, case management domiciliare',
        '**Integrazione ospedale-territorio**: continuità assistenziale, dimissioni protette',
        '**Intelligenza artificiale**: supporto diagnostico, predizione rischi, automazione',
        '**Modelli di community health**: infermiere di famiglia, prevenzione primaria',
      ],
    },
  ],
  keyPoints: [
    'Il **modello di assistenza** influenza direttamente la qualità delle cure e la soddisfazione del paziente',
    'La **continuità assistenziale** è un obiettivo trasversale a tutti i modelli organizzativi',
    'La **responsabilità professionale** è individuale ma anche collettiva (équipe)',
  ],
}

export default map
