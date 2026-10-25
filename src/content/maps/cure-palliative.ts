import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'cure-palliative',
  chapter: 'specialistica',
  title: 'Cure palliative',
  subtitle: 'Principi, equipe, sintomi e assistenza nella fase avanzata di malattia',
  icon: 'HeartPulse',
  status: 'bozza',
  sources: [
    'OMS — Definition and Guidelines for Palliative Care (2018)',
    'Ministero della Salute — Piano Nazionale delle Cure Palliative (2023)',
    'Fondazione A.I.D.A. — Linee guida per la gestione del dolore e dei sintomi terminali',
  ],
  intro:
    'Approccio che migliora la **qualità della vita** di pazienti e famiglie di fronte a malattie che minacciano la vita, attraverso la **prevenzione** e il **sollievo** dal dolore e da altri problemi fisici, psicologici e spirituali.',
  illustration: {
    id: 'cure-palliative-equipe',
    alt: 'Equipe multidisciplinare che discute il caso di un paziente',
    prompt: 'multidisciplinary team of doctors and nurses sitting around a table discussing a patient case, supportive atmosphere',
    icon: 'Users',
  },
  columns: 3,
  blocks: [
    {
      title: 'Principi fondamentali',
      icon: 'ShieldCheck',
      accent: 'green',
      items: [
        'Inizio **precoce**, non solo in fase terminale',
        'Approccio **olistico**: corpo, mente, spirito, relazioni',
        'Né accelerare né ritardare la **morte**',
        'Rispetto dell’**autonomia** e delle scelte del paziente',
        'Supporto alla **famiglia** durante e dopo la malattia',
        'Integrazione con le **terapie curative**',
      ],
    },
    {
      title: 'Equipe multidisciplinare',
      icon: 'Users',
      accent: 'blue',
      items: [
        '**Medico** e **Infermiere** (ruolo centrale)',
        '**Psicologo** e **Assistente sociale**',
        '**Cappellano** o referente spirituale',
        '**Fisioterapista** e **Nutrizionista**',
        '**Volontari** formati (A.I.D.A., ecc.)',
        'Lavoro in **rete**: ospedale, territorio, hospice',
      ],
    },
    {
      title: 'Gestione del dolore',
      icon: 'Pill',
      accent: 'red',
      items: [
        'Valutazione con **NRS** o **EVA** (0-10)',
        'Scala **analgesica di WHO** (3 step)',
        'Step 1: **Paracetamolo** / FANS',
        'Step 2: **Opioidi minori** (tramadolo, codeina)',
        'Step 3: **Opioidi maggiori** (morfina, ossicodone)',
        'Somministrazione **regolare**, non solo PRN',
        'Attenzione a **effetti collaterali** (stipsi, nausea)',
      ],
    },
    {
      title: 'Sintomi non-dolorosi',
      icon: 'Activity',
      accent: 'orange',
      items: [
        '**Dispnea**: ossigeno, ventilazione, morfina',
        '**Nausea/vomito**: metoclopramide, ondansetron',
        '**Stipsi**: lassativi osmotici, stimolanti',
        '**Ansia/depressione**: supporto psicologico, ansiolitici',
        '**Delirium**: ridurre stimoli, evitare sedativi se possibile',
        '**Secrezioni terminali**: anticolinergici (glicopirrolato)',
      ],
    },
    {
      title: 'Comunicazione e fine vita',
      icon: 'BookOpen',
      accent: 'purple',
      items: [
        'Conversazione **difficile**: usare il modello SPIKES',
        'Rispettare il **desiderio** del paziente',
        'Discussione su **DAD** (Disposizioni Anticipate di Trattamento)',
        'Evitare il **futile**: non prolungare sofferenze inutili',
        'Supporto **emotivo** a paziente e famiglia',
        'Documentare le **scelte** nella cartella',
      ],
    },
    {
      title: 'Ruolo infermieristico',
      icon: 'Stethoscope',
      accent: 'teal',
      checks: [
        { text: 'Valutare **dolore** e sintomi con scale validate', kind: 'ok' },
        { text: 'Somministrare farmaci **secondo protocollo**', kind: 'ok' },
        { text: 'Monitorare **effetti collaterali** e interazioni', kind: 'ok' },
        { text: 'Fornire **assistenza olistica** e comfort', kind: 'ok' },
        { text: 'Supportare la **famiglia** e i caregiver', kind: 'ok' },
        { text: 'Partecipare alle **riunioni di équipe**', kind: 'ok' },
        { text: 'Gestire la **fase terminale** con dignità', kind: 'ok' },
      ],
    },
  ],
  keyPoints: [
    'Le cure palliative **non sono** sinonimo di “rinuncia alle cure”: sono un **approccio complementare**',
    'L’**infermiere** è il perno dell’assistenza: valuta, somministra, educa, supporta',
    'Il **dolore** è il sintomo più frequente: va gestito con la scala WHO e monitoraggio continuo',
    'La **comunicazione** è una competenza chiave: parlare di morte, di scelte, di paura',
  ],
}

export default map
