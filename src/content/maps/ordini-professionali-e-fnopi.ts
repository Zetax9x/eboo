import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'ordini-professionali-e-fnopi',
  chapter: 'concorsi',
  title: 'Ordini professionali e FNOPI',
  subtitle: 'Struttura, funzioni e competenze degli Ordini e della Federazione nazionale',
  icon: 'ShieldCheck',
  status: 'bozza',
  sources: [
    'Legge 14 gennaio 2013, n. 4 — Riforma degli Ordini professionali',
    'FNOPI — Statuto e Regolamento (ultima revisione)',
    'Codice deontologico dell’infermiere (FNOPI, 2014)',
  ],
  intro:
    'Gli **Ordini** sono enti pubblici non economici che vigilano sull’esercizio della professione. La **FNOPI** è l’ente nazionale che coordina gli Ordini e rappresenta la categoria a livello istituzionale.',
  columns: 2,
  blocks: [
    {
      title: 'Natura giuridica',
      icon: 'BookOpen',
      accent: 'navy',
      items: [
        'Enti **pubblici non economici** (L. 4/2013)',
        'Soggetti di **diritto pubblico** con funzioni pubbliche',
        'Autonomie: patrimoniale, organizzativa, regolamentare',
        'Sottoposti al controllo del **Ministero della Salute**',
        'Non sono enti del Servizio Sanitario Nazionale',
        'Gestiscono il **Registro** degli iscritti',
      ],
    },
    {
      title: 'Funzioni degli Ordini',
      icon: 'ClipboardCheck',
      accent: 'blue',
      items: [
        'Tenerne il **Registro** degli iscritti',
        'Vigilare sul **rispetto** del Codice deontologico',
        'Esercitare la **disciplina** (sanzioni)',
        'Promuovere la **formazione continua** (ECM)',
        'Rappresentare la categoria nelle sedi istituzionali',
        'Erogare **contributi** per attività formative',
        'Gestire il **tesserino** e la tessera sanitaria',
      ],
    },
    {
      title: 'FNOPI: ruolo e compiti',
      icon: 'Users',
      accent: 'purple',
      items: [
        'Federazione di **tutti** gli Ordini provinciali',
        'Rappresentanza **nazionale** della professione',
        'Elaborare il **Codice deontologico**',
        'Definire i **criteri** per l’ECM',
        'Partecipare alla **formazione** universitaria',
        'Rapporti con **Ministero della Salute** e Parlamento',
        'Pubblicare **linee guida** e raccomandazioni',
      ],
    },
    {
      title: 'Struttura organizzativa',
      icon: 'Layers',
      accent: 'teal',
      items: [
        '**Consiglio dell’Ordine**: organo decisionale',
        '**Presidente**: eletto dai consiglieri',
        '**Segretario**: gestione amministrativa',
        '**Collegio dei revisori**: controllo contabile',
        '**Commissioni** tematiche (ECM, deontologia)',
        'Sede: **provinciale** (uno per provincia)',
        'Durata mandato: **4 anni**',
      ],
    },
    {
      title: 'Iscrizione e requisiti',
      icon: 'CircleCheck',
      accent: 'green',
      items: [
        'Laurea in **Scienze Infermieristiche** (3 anni)',
        'Esame di **Stato** superato',
        'Iscrizione al **Registro** dell’Ordine',
        'Tesserino con **numero** di iscrizione',
        'Obbligo di **aggiornamento** professionale',
        'Iscrizione **obbligatoria** per esercitare',
        'Sospensione in caso di **sanzioni**',
      ],
    },
    {
      title: 'Disciplina e sanzioni',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        'Competenza dell’**Ordine** (non del giudice)',
        'Sanzioni: **richiamo**, **sospensione**, **radiamento**',
        'Procedimento: **difesa** dell’iscritto',
        'Ricorso al **TAR** entro 60 giorni',
        'Distinzione: sanzione **deontologica** vs penale',
        'La sanzione non sostituisce la **responsabilità civile**',
        'Registro delle **sanzioni** consultabile',
      ],
    },
  ],
  keyPoints: [
    'Gli Ordini sono **enti pubblici** con funzioni di vigilanza e disciplina',
    'La **FNOPI** coordina gli Ordini e rappresenta la professione a livello nazionale',
    'L’iscrizione al **Registro** è obbligatoria per esercitare la professione',
  ],
}

export default map
