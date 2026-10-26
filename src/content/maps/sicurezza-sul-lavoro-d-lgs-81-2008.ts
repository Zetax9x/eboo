import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'sicurezza-sul-lavoro-d-lgs-81-2008',
  chapter: 'concorsi',
  title: 'Sicurezza sul lavoro: D.Lgs. 81/2008',
  subtitle: 'Ruoli, obblighi e figure chiave nella struttura sanitaria',
  icon: 'ShieldCheck',
  status: 'bozza',
  sources: [
    'D.Lgs. 81/2008 — Testo Unico sulla salute e sicurezza nei luoghi di lavoro',
    'D.Lgs. 81/2008 — Testo unico sulla salute e sicurezza sul lavoro, Titolo X (esposizione ad agenti biologici)',
    'FNOPI — Codice Deontologico dell’Infermiere (2019), artt. 19-22',
  ],
  intro:
    'Il **D.Lgs. 81/2008** è il Testo Unico sulla salute e sicurezza nei luoghi di lavoro. In ambito sanitario introduce obblighi specifici per la prevenzione dei **rischi biologici** e definisce le figure di riferimento per la gestione della sicurezza.',
  columns: 3,
  blocks: [
    {
      title: 'Principi Fondamentali',
      icon: 'BookOpen',
      accent: 'blue',
      items: [
        'Prevenzione dei **rischi** per la salute e la sicurezza',
        'Principio di **precauzione**: agire anche in caso di incertezza',
        'Valutazione di **tutti** i rischi presenti',
        'Eliminare o ridurre i rischi alla **fonte**',
        'Formazione e informazione di **tutti** i lavoratori',
        'Partecipazione dei **lavoratori** alla sicurezza',
        'Aggiornamento continuo delle misure di prevenzione',
      ],
    },
    {
      title: 'Figure Chiave',
      icon: 'Users',
      accent: 'purple',
      items: [
        '**Datore di lavoro**: assume le responsabilità principali',
        '**Dirigente**: dirige l’organizzazione e le risorse',
        '**Preposto**: sorveglia l’attività dei lavoratori',
        '**RSPP**: Responsabile del Servizio di Prevenzione e Protezione',
        '**Medico Competente**: sorveglianza sanitaria',
        '**Rappresentante dei Lavoratori per la Sicurezza (RLS)**',
        '**Addetti antincendio e primo soccorso**',
      ],
    },
    {
      title: 'Obblighi del Datore di Lavoro',
      icon: 'ClipboardCheck',
      accent: 'green',
      items: [
        'Valutare i **rischi** e redigere il **DVR**',
        'Nominare **RSPP** e **Medico Competente**',
        'Fornire **DPI** adeguati e gratuiti',
        'Organizzare **formazione** e informazione',
        'Designare **addetti** antincendio e primo soccorso',
        'Garantire la **sorveglianza sanitaria**',
        'Gestire le **emergenze** e le evacuazioni',
      ],
    },
    {
      title: 'Obblighi del Lavoratore',
      icon: 'Hand',
      accent: 'orange',
      items: [
        'Partecipare alla **formazione** obbligatoria',
        'Utilizzare correttamente i **DPI** forniti',
        'Seguire le **istruzioni** di sicurezza',
        'Segnalare **rischi** e **malfunzionamenti**',
        'Non rimuovere o manomettere i **dispositivi** di sicurezza',
        'Partecipare alle **riunioni** di sicurezza',
        'Rispettare le **procedure** operative',
      ],
    },
    {
      title: 'Rischi Biologici in Sanità',
      icon: 'FlaskConical',
      accent: 'red',
      items: [
        'Agenti biologici: **virus**, batteri, funghi, parassiti',
        'Gruppi di rischio: **1** (basso) a **4** (alto)',
        'Esposizione a **sangue** e fluidi corporei',
        'Rischio di **punture** accidentali',
        'Necessità di **DPI** specifici (guanti, mascherine, occhiali)',
        'Procedure di **isolamento** e precauzioni standard',
        'Gestione dei **rifiuti** sanitari',
      ],
    },
    {
      title: 'Documentazione e Formazione',
      icon: 'FileText',
      accent: 'teal',
      items: [
        '**DVR** (Documento di Valutazione dei Rischi)',
        '**Piano di Emergenza** e evacuazione',
        '**Registro infortuni** e malattie professionali',
        'Formazione **obbligatoria** per tutti i lavoratori',
        'Aggiornamento **periodico** della formazione',
        'Informazione sui **rischi** specifici del reparto',
        'Formazione su **DPI** e procedure di sicurezza',
      ],
    },
  ],
  keyPoints: [
    'Il **DVR** è il documento fondamentale: deve essere aggiornato e accessibile a tutti',
    'La **formazione** è obbligatoria e deve essere documentata',
    'I **DPI** devono essere forniti gratuitamente e utilizzati correttamente',
    'Il **RLS** rappresenta i lavoratori nelle questioni di sicurezza',
  ],
}

export default map
