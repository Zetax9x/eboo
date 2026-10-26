import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'triage-codici-e-principi',
  chapter: 'emergenze',
  title: 'Triage: codici e principi',
  subtitle: 'Il sistema a 5 codici numerici delle linee nazionali 2019',
  icon: 'Tag',
  status: 'bozza',
  sources: [
    'Ministero della Salute — Linee di indirizzo nazionali sul triage intraospedaliero (Accordo Stato-Regioni 1 agosto 2019)',
    'Ministero della Salute — Linee di indirizzo nazionali per lo sviluppo del piano di gestione del sovraffollamento in Pronto Soccorso (2019)',
  ],
  intro:
    'Il triage è una **funzione infermieristica** che stabilisce la **priorità di accesso** alle cure in base alla gravità clinica e al **rischio evolutivo**, non all’ordine di arrivo. Attivo **h24**.',
  tableTitle: 'Codici di priorità (tempo massimo di attesa per l’accesso alle aree di trattamento)',
  tableIcon: 'Tag',
  columns: ['Codice', 'Denominazione', 'Definizione', 'Accesso', 'Esempi'],
  widths: [1.1, 1.2, 2.6, 1, 2.1],
  rows: [
    [
      '**1** · rosso',
      '**Emergenza**',
      'Interruzione o compromissione di una o più **funzioni vitali**',
      '**Immediato**',
      'Arresto cardiaco, **shock**, coma, insufficienza respiratoria grave, convulsioni in atto, politrauma instabile',
    ],
    [
      '**2** · arancione',
      '**Urgenza**',
      'Rischio di compromissione delle funzioni vitali; condizione stabile con **rischio evolutivo** o dolore severo',
      'Entro **10 min**',
      '**Dolore toracico** tipico, sospetto **ictus**, trauma con dinamica maggiore, dolore severo, alterazione della coscienza',
    ],
    [
      '**3** · giallo',
      '**Urgenza differibile**',
      'Condizione stabile senza rischio evolutivo, con sofferenza; richiede in genere prestazioni **complesse**',
      'Entro **30 min**',
      'Dolore addominale moderato, dispnea lieve con parametri stabili, febbre con malessere, vomito persistente',
    ],
    [
      '**4** · verde',
      '**Urgenza minore**',
      'Condizione stabile senza rischio evolutivo; prestazioni **semplici** mono-specialistiche',
      'Entro **60 min**',
      'Trauma minore di un arto, ferita superficiale da suturare, lombalgia, sintomi urinari',
    ],
    [
      '**5** · bianco',
      '**Non urgenza**',
      'Problema non urgente o di **minima rilevanza** clinica',
      'Entro **120 min**',
      'Disturbi gestibili dal medico di medicina generale, rinnovo di terapia, sintomi di lunga data invariati',
    ],
  ],
  notes: [
    {
      title: 'Le fasi del triage',
      icon: 'ListChecks',
      accent: 'blue',
      items: [
        '**Valutazione immediata** “sulla porta”: riconosce subito chi è critico',
        '**Valutazione soggettiva e oggettiva**: intervista, parametri vitali, esame mirato',
        '**Decisione** di triage: assegna il codice e il percorso',
        '**Rivalutazione** periodica di chi attende',
      ],
    },
    {
      title: 'Principi',
      icon: 'Scale',
      accent: 'purple',
      items: [
        'Svolto da **infermieri** formati e con esperienza in PS',
        'Si valuta la **gravità**, non la diagnosi',
        'Il codice può **cambiare** alla rivalutazione',
        'Colori associabili ai numeri a scelta delle **Regioni**',
      ],
    },
    {
      title: 'Percorsi e tempi',
      icon: 'Route',
      accent: 'teal',
      items: [
        '**Fast track**: invio diretto allo specialista (es. oculistica)',
        '**See and treat**: problemi minori gestiti da infermieri formati',
        'Permanenza in PS: obiettivo massimo **8 ore** dalla presa in carico',
        'Documentare **orari**, parametri e motivazione del codice',
      ],
    },
  ],
  keyPoints: [
    'Codici **1–5**: rosso, arancione, giallo, verde, bianco',
    'Tempi massimi: **0 – 10 – 30 – 60 – 120** minuti',
  ],
}

export default map
