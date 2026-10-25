import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'ansiolitici-e-ipnotici',
  chapter: 'farmacologia',
  title: 'Ansiolitici e ipnotici',
  subtitle: 'Benzodiazepine, Z-drugs e non-benzodiazepine: meccanismi, dosaggi e rischi',
  icon: 'Pill',
  status: 'bozza',
  sources: [
    'AIFA — Elenco farmaci a rischio di dipendenza e abuso (aggiornato)',
    'OMS — International Classification of Diseases (ICD-11) — Disturbi da uso di sedativi',
    'Linee guida nazionali per la gestione dell’insonnia e dell’ansia (Ministero della Salute)',
  ],
  intro: 'Questi farmaci agiscono sul sistema GABA-A. Sono **a rischio di dipendenza** e richiedono prescrizione controllata. La scelta dipende dall’indicazione (ansia vs insonnia) e dalla durata del trattamento.',
  tableTitle: 'Classi principali e farmaci di riferimento',
  tableIcon: 'Pill',
  columns: ['Classe', 'Esempi', 'Emivita (h)', 'Indicazione principale', 'Note cliniche'],
  widths: [1.2, 1.5, 1, 1.5, 2],
  rows: [
    ['Benzodiazepine a emivita breve', 'Alprazolam, Lorazepam', '6–20', 'Ansia acuta, agitazione', 'Rischio di **astinenza** se interrotti bruscamente'],
    ['Benzodiazepine a emivita lunga', 'Diazepam, Clonazepam', '20–100', 'Ansia cronica, miorelaxazione', 'Accumulo in anziani e epatopatici; **sedazione residua**'],
    ['Z-drugs (non-benzodiazepine)', 'Zolpidem, Zopiclone', '1–6', 'Insonnia di addormentamento', 'Effetto "hangover" se dosi elevate; **rischio di allucinazioni**'],
    ['Antistaminici sedativi', 'Dipidrossilamina, Doxepina', 'Variabile', 'Insonnia lieve', 'Anticolinergici: **secchezza delle fauci**, ritenzione urinaria'],
    ['Agonisti melatoninergici', 'Melatonina, Ramelteon', '1–4', 'Insonnia circadiana', 'Basso rischio di dipendenza; **effetto modesto**'],
  ],
  notes: [
    {
      title: 'Meccanismo d’azione',
      icon: 'Brain',
      accent: 'blue',
      items: [
        'Potenziano l’effetto inibitorio del **GABA** sui recettori GABA-A',
        'Aumentano la frequenza di apertura dei canali del **cloro**',
        'Effetto: sedazione, ansiolisi, miorelaxazione, amnesia anterograda',
        'Non sono agonisti diretti: **non producono tolleranza** come i barbiturici',
        'La selettività per le subunità del recettore spiega le differenze tra classi',
      ],
    },
    {
      title: 'Effetti indesiderati e rischi',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        '**Sedazione diurna**: rischio di cadute e incidenti stradali',
        '**Depressione respiratoria**: soprattutto in combinazione con oppioidi',
        '**Amnesia anterograda**: perdita di memoria degli eventi successivi all’assunzione',
        '**Paradosso**: agitazione, aggressività, allucinazioni (raro)',
        '**Sindrome d’astinenza**: ansia, insonnia, tremori, convulsioni (dopo uso > 4 settimane)',
      ],
    },
    {
      title: 'Precauzioni infermieristiche',
      icon: 'ShieldCheck',
      accent: 'green',
      items: [
        'Verificare la **prescrizione**: dose, durata, indicazione',
        'Educare al **tapering graduale**: ridurre la dose del 10–25% ogni 1–2 settimane',
        'Monitorare i **parametri vitali**: PA, FC, SpO₂, livello di coscienza',
        'Evitare l’uso in **gravidanza** (rischio di "feto flaccido") e **allattamento**',
        'Attenzione alla **polifarmacia**: interazioni con altri sedativi e alcol',
      ],
    },
  ],
  keyPoints: [
    'Le benzodiazepine a emivita lunga sono preferite per l’**ansia cronica**; quelle brevi per l’**ansia acuta**',
    'Gli Z-drugs sono indicati solo per l’**insonnia di addormentamento**, non per il mantenimento del sonno',
    'L’uso prolungato (> 4 settimane) richiede una **pianificazione della sospensione** per evitare l’astinenza',
  ],
}

export default map
