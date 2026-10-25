import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'il-servizio-sanitario-nazionale',
  chapter: 'concorsi',
  title: 'Il Servizio Sanitario Nazionale',
  subtitle: 'Principi, riforme e livelli essenziali di assistenza',
  icon: 'Hospital',
  status: 'bozza',
  sources: [
    'Costituzione della Repubblica Italiana, art. 32; L. 23 dicembre 1978 n. 833',
    'D.Lgs. 30 dicembre 1992 n. 502 e D.Lgs. 19 giugno 1999 n. 229; DPCM 12 gennaio 2017 (LEA)',
    'DM 23 maggio 2022 n. 77 — Modelli e standard per l’assistenza territoriale',
  ],
  intro:
    'Il **SSN** è l’insieme di funzioni, strutture e servizi con cui lo Stato tutela la salute come **diritto fondamentale** dell’individuo e **interesse della collettività** (art. 32 Cost.).',
  columns: 3,
  blocks: [
    {
      title: 'Art. 32 Costituzione',
      icon: 'Scale',
      accent: 'navy',
      items: [
        'Salute: **diritto fondamentale** dell’individuo e interesse della collettività',
        '**Cure gratuite** agli indigenti',
        'Nessuno obbligato a un trattamento sanitario se non per **disposizione di legge**',
        'La legge non può violare il **rispetto della persona umana**',
        'Base di TSO, vaccinazioni obbligatorie, consenso informato',
        'Unico diritto definito “**fondamentale**” dalla Costituzione',
      ],
    },
    {
      title: 'L. 833/1978 — nascita',
      icon: 'Hospital',
      accent: 'blue',
      items: [
        'Istituisce il SSN il **23 dicembre 1978**',
        'Supera il sistema delle **mutue**',
        'Crea le **USL** (Unità Sanitarie Locali)',
        'Finanziamento con **fiscalità generale**',
        'Disciplina **TSO** e ASO',
        'Programmazione con il **Piano Sanitario Nazionale**',
        'Pilastri: **prevenzione**, cura, **riabilitazione**',
        'Gestione delle USL affidata ai **Comuni**',
        'Riforma voluta dal ministro **Tina Anselmi**',
      ],
    },
    {
      title: 'Principi del SSN',
      icon: 'Users',
      accent: 'green',
      checks: [
        { text: '**Universalità**: assistenza a tutta la popolazione', kind: 'ok' },
        { text: '**Uguaglianza**: accesso senza distinzioni di condizioni individuali e sociali', kind: 'ok' },
        { text: '**Globalità**: prevenzione, cura e riabilitazione', kind: 'ok' },
        { text: '**Equità**: pari opportunità di accesso a parità di bisogno', kind: 'ok' },
        { text: 'Dignità della persona, bisogno di salute, appropriatezza, economicità', kind: 'ok' },
      ],
    },
    {
      title: 'D.Lgs. 502/1992 — aziendalizzazione',
      icon: 'Layers',
      accent: 'purple',
      items: [
        'Riforma “**De Lorenzo**” (modificata dal D.Lgs. 517/1993)',
        'USL → **Aziende Sanitarie Locali** con personalità giuridica',
        'Nascono le **Aziende Ospedaliere**',
        '**Regionalizzazione**: alle Regioni programmazione e organizzazione',
        'Finanziamento a **quota capitaria** e tariffe per prestazione (DRG)',
        'Guida affidata al **Direttore generale**',
        '**Libera scelta** del luogo di cura del cittadino',
      ],
    },
    {
      title: 'D.Lgs. 229/1999 — riforma Bindi',
      icon: 'RefreshCw',
      accent: 'orange',
      items: [
        '**Aziendalizzazione** completata: autonomia imprenditoriale',
        'Introduce i **LEA** (livelli essenziali di assistenza)',
        'Accreditamento: **autorizzazione**, **accreditamento** istituzionale, **accordi** contrattuali',
        'Rafforza il **Distretto** e il Dipartimento di prevenzione',
        'Istituisce la **formazione continua** (ECM)',
        '**Rapporto esclusivo** dei dirigenti medici',
      ],
    },
    {
      title: 'LEA e territorio oggi',
      icon: 'ClipboardList',
      accent: 'teal',
      items: [
        'LEA aggiornati con **DPCM 12 gennaio 2017**',
        '3 macro-livelli: **prevenzione collettiva** e sanità pubblica, **assistenza distrettuale**, **assistenza ospedaliera**',
        'L. cost. 3/2001: tutela della salute a **legislazione concorrente** Stato-Regioni',
        '**DM 77/2022** (PNRR): Case della Comunità, Ospedali di Comunità, **COT**',
        '**Infermiere di Famiglia e Comunità**: standard 1 ogni 3.000 abitanti',
      ],
    },
  ],
  keyPoints: [
    'Tre leggi chiave: **833/1978** (istituzione) → **502/1992** (aziende) → **229/1999** (LEA, accreditamento, ECM)',
    'LEA = prestazioni che il SSN garantisce a tutti, **gratuitamente** o con **ticket**, finanziate dal Fondo Sanitario Nazionale',
  ],
}

export default map
