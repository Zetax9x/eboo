import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'morbo-di-parkinson',
  chapter: 'patologie',
  title: 'Morbo di Parkinson',
  subtitle: 'Malattia neurodegenerativa del movimento: sintomi, terapia e assistenza',
  icon: 'Hand',
  status: 'bozza',
  sources: [
    'MDS — Movement Disorder Society clinical diagnostic criteria for Parkinson’s disease (2015)',
    'ISS‑SNLG — Linee guida per la diagnosi e la terapia della malattia di Parkinson',
    'NICE NG71 — Parkinson’s disease in adults (2017, aggiornamenti)',
  ],
  definition:
    'Malattia **neurodegenerativa** progressiva: perdita dei neuroni **dopaminergici** della **substantia nigra** con accumulo di **α-sinucleina** (corpi di Lewy).',
  illustration: {
    id: 'parkinson-substantia-nigra',
    alt: 'Mesencefalo con substantia nigra impoverita e persona anziana curva con tremore',
    prompt: 'midbrain cross-section showing a pale depigmented substantia nigra next to a healthy dark one, elderly person with stooped posture and shuffling gait',
    icon: 'Brain',
  },
  types: [
    { name: 'Idiopatico', text: 'Forma più frequente; esordio di norma dopo i **60 anni**.' },
    { name: 'Genetico', text: 'Forme familiari (es. LRRK2, GBA, PRKN), spesso a esordio precoce.' },
    { name: 'Parkinsonismi secondari', text: 'Da **farmaci** (neurolettici, metoclopramide), vascolare.' },
    { name: 'Parkinsonismi atipici', text: 'MSA, PSP: scarsa risposta alla **levodopa**.' },
  ],
  sections: [
    {
      title: 'Sintomi motori',
      icon: 'Activity',
      accent: 'orange',
      items: [
        '**Bradicinesia** (criterio obbligatorio)',
        '**Tremore a riposo** “conta monete”, spesso asimmetrico',
        '**Rigidità** “a ruota dentata”',
        '**Instabilità posturale**, cadute (fase avanzata)',
        'Marcia a piccoli passi, **freezing**, ipomimia, micrografia',
      ],
    },
    {
      title: 'Sintomi non motori',
      icon: 'Brain',
      accent: 'purple',
      items: [
        'Precoci: **iposmia**, **stipsi**, disturbo del sonno REM',
        'Depressione, ansia, apatia',
        '**Ipotensione ortostatica**, disturbi urinari',
        'Disfagia, scialorrea, dolore',
        'Deterioramento cognitivo, allucinazioni',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'Microscope',
      accent: 'blue',
      items: [
        'Essenzialmente **clinica** (criteri MDS)',
        'Buona **risposta alla levodopa** a sostegno',
        '**DaTSCAN** (SPECT): deficit dopaminergico',
        'RM per escludere altre cause',
        'Scale: **UPDRS**, Hoehn e Yahr',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Levodopa** + carbidopa/benserazide: la più efficace',
        '**Dopamino‑agonisti**: pramipexolo, ropinirolo, rotigotine',
        '**MAO‑B** (rasagilina), **COMT‑inibitori** (entacapone)',
        'Avanzata: **DBS**, infusione intestinale, apomorfina',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Layers',
      accent: 'red',
      items: [
        '**Fluttuazioni** “on‑off”, wearing‑off',
        '**Discinesie** da levodopa',
        'Cadute, **fratture**',
        '**Polmonite ab ingestis** da disfagia',
        'Agonisti: **gioco d’azzardo**, ipersessualità',
        'Demenza, psicosi, **ipotensione** ortostatica',
      ],
    },
    {
      title: 'Riabilitazione',
      icon: 'Footprints',
      accent: 'teal',
      items: [
        '**Fisioterapia**: equilibrio, marcia, cueing',
        'Attività fisica regolare',
        '**Logopedia**: voce e deglutizione',
        'Terapia occupazionale, ausili',
        'Supporto al **caregiver**',
      ],
    },
  ],
  nursing: [
    'Somministrare i farmaci **all’orario esatto** (non posticipare le dosi)',
    'Levodopa preferibilmente **lontano da pasti ricchi di proteine**',
    'Prevenire le **cadute**: alzarsi lentamente, ambiente sicuro, calzature',
    '**Screening disfagia**, consistenze adeguate, igiene orale',
    'Monitorare **PA in ortostatismo**, alvo, umore, sonno',
  ],
  redFlags: [
    '**Non sospendere** bruscamente la levodopa: rischio di rigidità grave e ipertermia',
    'Evitare **antidopaminergici** (aloperidolo, metoclopramide)',
    'Allucinazioni, confusione acuta, cadute ripetute: segnalare',
  ],
}

export default map
