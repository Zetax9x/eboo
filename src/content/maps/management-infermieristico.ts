import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'management-infermieristico',
  chapter: 'concorsi',
  title: 'Management infermieristico',
  subtitle: 'Competenze gestionali, leadership e organizzazione del lavoro',
  icon: 'Workflow',
  status: 'bozza',
  sources: [
    'FNOPI — Codice Deontologico dell’Infermiere (2014)',
    'Ministero della Salute — DM 739/1994 (Profilo professionale)',
    'Mantellassi P. — Management e leadership in sanità, CEA',
  ],
  intro:
    'Il **management infermieristico** è l’insieme delle competenze per pianificare, organizzare, dirigere e controllare l’assistenza, garantendo **qualità**, **sicurezza** e **efficienza** delle risorse.',
  columns: 2,
  blocks: [
    {
      title: 'Funzioni di Management',
      icon: 'ClipboardList',
      accent: 'blue',
      items: [
        '**Pianificazione**: definire obiettivi, priorità e risorse',
        '**Organizzazione**: strutturare compiti, turni e flussi di lavoro',
        '**Direzione**: guidare, motivare e coordinare l’équipe',
        '**Controllo**: monitorare esiti, KPI e indicatori di qualità',
        'Ciclo **PDCA** (Plan-Do-Check-Act) per il miglioramento continuo',
        'Gestione del **budget** e delle risorse materiali e umane',
        'Ottimizzazione dei **flussi assistenziali** e dei tempi di risposta',
      ],
    },
    {
      title: 'Leadership Infermieristica',
      icon: 'User',
      accent: 'green',
      items: [
        'Stili: **trasformazionale**, **serviziale**, **situazionale**',
        'Promuovere un clima di **sicurezza psicologica** e rispetto',
        'Comunicazione efficace: **attiva**, **non violenta**, **assertiva**',
        'Gestione del **conflitto** e mediazione nelle équipe',
        'Mentoring e **supervisione** dei tirocinanti e neoassunti',
        'Promuovere la **partecipazione** del personale alle decisioni',
        'Modella i **valori etici** e la cultura della sicurezza',
      ],
    },
    {
      title: 'Gestione del Turno e delle Risorse',
      icon: 'Clock',
      accent: 'orange',
      items: [
        'Pianificazione dei **turni** basata sui bisogni assistenziali',
        'Assegnazione razionale dei **pazienti** per complessità',
        'Gestione delle **emergenze** e delle priorità (triage)',
        'Ottimizzazione dei **materiali** e dei farmaci',
        'Coordinamento con **OSS**, medici e altre figure',
        'Gestione delle **assenze** e dei carichi di lavoro imprevisti',
        'Utilizzo di **software** gestionali e cartelle elettroniche',
      ],
    },
    {
      title: 'Qualità e Sicurezza',
      icon: 'ShieldCheck',
      accent: 'red',
      items: [
        'Implementazione delle **linee guida** e protocolli operativi',
        'Monitoraggio degli **eventi avversi** e quasi-eventi',
        'Analisi dei **rischi clinici** e piani di prevenzione',
        'Promozione della **cultura della sicurezza** (non colpevole)',
        'Partecipazione ai **comitati di qualità** e audit interni',
        'Formazione continua su **errori** e fattori umani',
        'Indicatori: infezioni ospedaliere, cadute, errori da farmaci',
      ],
    },
    {
      title: 'Competenze Chiave (Concorsi)',
      icon: 'Target',
      accent: 'purple',
      checks: [
        { text: 'Pianificazione e gestione delle **priorità** assistenziali', kind: 'ok' },
        { text: 'Capacità di **leadership** e gestione del team', kind: 'ok' },
        { text: 'Conoscenza degli **indicatori di qualità** e sicurezza', kind: 'ok' },
        { text: 'Gestione del **conflitto** e comunicazione efficace', kind: 'ok' },
        { text: 'Competenze di **problem solving** e pensiero critico', kind: 'ok' },
        { text: 'Conoscenza della **normativa** su turni e carichi di lavoro', kind: 'ok' },
        { text: 'Capacità di **delega** appropriata e supervisione', kind: 'ok' },
      ],
    },
    {
      title: 'Esempi Pratici',
      icon: 'Lightbulb',
      accent: 'teal',
      items: [
        'Gestione di un **picco di ricoveri**: riallocazione personale',
        'Risoluzione di un **disaccordo** tra infermieri su un protocollo',
        'Introduzione di un **nuovo dispositivo** e formazione del team',
        'Analisi di un **quasi-evento** e azioni correttive',
        'Pianificazione della **dimissione** con continuità assistenziale',
        'Gestione di una **carenza di personale** in emergenza',
        'Promozione di un **progetto di miglioramento** del servizio',
      ],
    },
  ],
  keyPoints: [
    'Il management infermieristico integra **competenze cliniche** e **gestionali** per garantire assistenza sicura ed efficiente',
    'La **leadership** trasformativa promuove engagement, qualità e sicurezza del team',
    'La gestione delle **priorità** e delle **risorse** è centrale per l’efficacia assistenziale',
  ],
}

export default map
