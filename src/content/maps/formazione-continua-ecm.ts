import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'formazione-continua-ecm',
  chapter: 'concorsi',
  title: 'Formazione continua ECM',
  subtitle: 'Obblighi, crediti e sanzioni per infermieri',
  icon: 'BookOpen',
  status: 'bozza',
  sources: [
    'D.M. 739/1994 — Profilo professionale dell’infermiere',
    'Codice deontologico FNOPI (2020)',
    'Accordo Stato-Regioni 2011 — Piano Nazionale di Formazione Continua',
  ],
  intro:
    'L’ECM (Educazione Continua in Medicina) è un **obbligo deontologico e legale** per tutti i professionisti sanitari. Serve a mantenere e aggiornare le competenze, garantendo qualità e sicurezza delle cure.',
  columns: 2,
  blocks: [
    {
      title: 'Base Normativa e Obbligo',
      icon: 'ShieldCheck',
      accent: 'navy',
      items: [
        'Obbligo previsto dal **Codice Deontologico** (art. 30) e dal **D.M. 739/1994**',
        'Riconosciuto come diritto-dovere di ogni professionista sanitario',
        'Obiettivo: mantenere, aggiornare e sviluppare le **competenze** professionali',
        'Non è una semplice “formazione”, ma un **processo continuo** di apprendimento',
        'Si applica a tutti: medici, infermieri, OSS, farmacisti, ecc.',
        'La mancata adesione può configurare **negligenza** o **imperizia**',
      ],
    },
    {
      title: 'Crediti ECM: Come si calcolano',
      icon: 'Calculator',
      accent: 'blue',
      items: [
        'Unità di misura: il **credito ECM**',
        '1 ora di attività formativa = **1 credito** (in genere)',
        'Obiettivo triennale: **50 crediti** ogni 3 anni',
        'Massimo **20 crediti** ottenibili in un singolo anno',
        'Minimo **10 crediti** da acquisire in ogni anno del triennio',
        'I crediti si accumulano nel **Piano Formativo Individuale (PFI)**',
      ],
    },
    {
      title: 'Tipologie di Attività',
      icon: 'Layers',
      accent: 'purple',
      items: [
        '**Formazione accreditata**: congressi, corsi, webinar (max 10 crediti/anno)',
        '**Autoformazione**: lettura di articoli, guide, manuali (max 10 crediti/anno)',
        '**Formazione obbligatoria**: corsi su temi specifici (es. sicurezza, privacy)',
        '**Attività di ricerca e docenza**: pubblicazioni, insegnamento universitario',
        '**Formazione sul lavoro**: attività di miglioramento della qualità (QI)',
        'Gli eventi sono erogati da **provider ECM accreditati** (Agenas / Commissione nazionale per la formazione continua)',
      ],
    },
    {
      title: 'Piano Formativo Individuale (PFI)',
      icon: 'ClipboardList',
      accent: 'green',
      items: [
        'Documento che traccia i **bisogni formativi** del professionista',
        'Va aggiornato ogni **3 anni** (a fine triennio)',
        'Include: obiettivi, attività previste, crediti acquisiti',
        'Crediti e dossier si consultano sul portale **Co.Ge.A.P.S.**',
        'Serve a dimostrare l’adempimento dell’obbligo ECM',
        'È un documento **personale** e **tracciabile**',
      ],
    },
    {
      title: 'Sanzioni e Conseguenze',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'Mancato raggiungimento dei 50 crediti triennali',
        'Sanzione: **sospensione** dall’albo professionale',
        'Durata sospensione: proporzionale al numero di crediti mancanti',
        'Esempio: 10 crediti mancanti = 1 mese di sospensione',
        'La sospensione è decisa dall’**Ordine** o dal **Ministero della Salute**',
        'In caso di recidiva, sanzioni più severe o radiazione',
      ],
    },
    {
      title: 'Ruolo dell’Infermiere',
      icon: 'Users',
      accent: 'teal',
      checks: [
        { text: 'Monitorare i propri **crediti ECM** regolarmente', kind: 'ok' },
        { text: 'Aggiornare il **PFI** entro i termini previsti', kind: 'ok' },
        { text: 'Partecipare a corsi **accreditati** e validi', kind: 'ok' },
        { text: 'Documentare ogni attività formativa', kind: 'ok' },
        { text: 'Promuovere la cultura dell’**aggiornamento continuo**', kind: 'ok' },
        { text: 'Seguire le **linee guida** e le **raccomandazioni** nazionali', kind: 'ok' },
      ],
    },
  ],
  keyPoints: [
    '**50 crediti** ogni 3 anni, con min 10 e max 20 per anno',
    'L’ECM è un **obbligo deontologico**: la mancata adesione può portare a **sospensione** dall’albo',
  ],
}

export default map
