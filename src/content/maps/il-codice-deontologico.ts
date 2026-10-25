import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'il-codice-deontologico',
  chapter: 'concorsi',
  title: 'Il Codice deontologico',
  subtitle: 'Principi, diritti e doveri dell’infermiere secondo la FNOPI',
  icon: 'ShieldCheck',
  status: 'bozza',
  sources: [
    'FNOPI — Codice di Deontologia Professionale dell’Infermiere (approvato 2014, aggiornato 2024)',
    'L. 427/2001 — Disciplina dell’Ordine delle professioni infermieristiche',
    'D.M. 739/1994 — Profilo professionale, ruoli e compiti dell’infermiere',
  ],
  intro:
    'Il **Codice deontologico** è il documento che definisce i **diritti** e i **doveri** dell’infermiere. È vincolante per tutti gli iscritti all’Albo e costituisce la base per la **responsabilità professionale** e la **qualità dell’assistenza**.',
  columns: 2,
  blocks: [
    {
      title: 'Principi fondamentali',
      icon: 'ShieldCheck',
      accent: 'blue',
      items: [
        '**Rispetto della dignità** della persona in ogni fase della vita',
        '**Non discriminazione**: etnia, religione, orientamento, condizione sociale',
        '**Autonomia** e **indipendenza** professionale',
        '**Riservatezza** e **segreto professionale**',
        '**Equità** nell’accesso alle cure',
        '**Solidarietà** e cooperazione nell’équipe',
      ],
    },
    {
      title: 'Diritti dell’infermiere',
      icon: 'CircleCheck',
      accent: 'green',
      items: [
        'Esercitare la professione con **autonomia** e **responsabilità**',
        'Rifiutare interventi che violano la **deontologia** o la **legge**',
        'Accedere alla **formazione continua** (ECM)',
        'Essere **riconosciuto** come professionista sanitario',
        'Protezione dalla **responsabilità** per atti conformi alla legge',
        'Partecipare alla **gestione** dei servizi sanitari',
      ],
    },
    {
      title: 'Doveri verso la persona',
      icon: 'User',
      accent: 'orange',
      items: [
        'Garantire **assistenza competente** e **personalizzata**',
        'Ottenere il **consenso informato** (o rifiuto) prima di ogni atto',
        'Rispettare la **privacy** e la **riservatezza** dei dati',
        'Promuovere la **salute** e la **prevenzione**',
        'Assistere nelle **ultime fasi** di vita con dignità',
        'Tutela dei **minori** e delle **persone vulnerabili**',
      ],
    },
    {
      title: 'Doveri verso i colleghi',
      icon: 'Users',
      accent: 'purple',
      items: [
        'Collaborare in **équipe** con rispetto e **solidarietà**',
        'Rispettare le **competenze** degli altri professionisti',
        'Non diffamare o **discredire** i colleghi',
        'Segnalare **comportamenti inappropriati** o **violazioni**',
        'Partecipare alla **formazione** e alla **ricerca**',
        'Tutela del **nome** e della **reputazione** professionale',
      ],
    },
    {
      title: 'Doveri verso l’Ordine e la società',
      icon: 'Hospital',
      accent: 'navy',
      items: [
        'Rispettare le **norme** dell’Ordine e della **FNOPI**',
        'Contribuire alla **qualità** dei servizi sanitari',
        'Partecipare alla **pianificazione** delle politiche sanitarie',
        'Promuovere la **cultura** della salute nella comunità',
        'Rispettare le **leggi** e i **regolamenti** vigenti',
        'Tutela dell’**ambiente** e della **sicurezza**',
      ],
    },
    {
      title: 'Aspetti chiave per il concorso',
      icon: 'Lightbulb',
      accent: 'red',
      checks: [
        { text: 'Il Codice è **vincolante** per tutti gli iscritti all’Albo', kind: 'ok' },
        { text: 'La **violazione** può portare a sanzioni disciplinari', kind: 'warn' },
        { text: 'Il **consenso informato** è un dovere, non un’opzione', kind: 'ok' },
        { text: 'La **riservatezza** vale anche dopo la morte del paziente', kind: 'ok' },
        { text: 'L’infermiere può **rifiutare** atti contrari alla deontologia', kind: 'ok' },
        { text: 'La **formazione continua** è un diritto e un dovere', kind: 'ok' },
      ],
    },
  ],
  keyPoints: [
    'Il Codice deontologico è **vincolante** e integra le norme di legge',
    'La **responsabilità** è personale: ogni infermiere risponde dei propri atti',
    'Il **consenso informato** e la **riservatezza** sono pilastri dell’assistenza',
  ],
}

export default map
