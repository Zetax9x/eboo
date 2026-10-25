import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'analgesici-e-scala-oms-del-dolore',
  chapter: 'farmacologia',
  title: 'Analgesici e scala OMS del dolore',
  subtitle: 'Scala a tre gradini, farmaci di riferimento e principi di somministrazione',
  icon: 'Pill',
  status: 'bozza',
  sources: [
    'WHO — Cancer Pain Relief, 2ª ed. (1996): scala analgesica a tre gradini',
    'WHO — Guidelines for the pharmacological and radiotherapeutic management of cancer pain in adults and adolescents (2018)',
    'Legge 15 marzo 2010, n. 38 — Accesso alle cure palliative e alla terapia del dolore',
  ],
  intro: 'La **scala OMS** (o scala a tre gradini) è il modello di riferimento per la terapia del dolore. Si parte sempre dal **gradino più basso** efficace e si sale solo se necessario.',
  tableTitle: 'Scala OMS del dolore',
  tableIcon: 'ListChecks',
  columns: ['Gradino', 'Intensità (VAS)', 'Farmaci di riferimento', 'Note cliniche'],
  widths: [1, 1.2, 2, 2],
  rows: [
    ['1°', '1–3 / 10', 'Paracetamolo, FANS (ibuprofene, ketoprofene)', 'Dolore lieve. Prima scelta. Evitare FANS in gravidanza avanzata o insufficienza renale.'],
    ['2°', '4–6 / 10', 'Oppioidi deboli (tramadolo, codeina) + Paracetamolo/FANS', 'Dolore moderato. Associare lassativo (codeina: stipsi). Monitorare sedazione.'],
    ['3°', '7–10 / 10', 'Oppioidi forti (morfina, ossicodone, fentanile)', 'Dolore intenso. Somministrazione titrata. Associare lassativo e antiemetico.'],
  ],
  notes: [
    {
      title: 'Principi di somministrazione',
      icon: 'ClipboardCheck',
      accent: 'green',
      items: [
        'Somministrare **per via orale** se possibile (più sicura e meno invasiva)',
        'Usare dosi **regolari** (non solo "quando serve") per mantenere livelli plasmatici stabili',
        'Titolare la dose fino al controllo del dolore, poi **mantenere** quella dose',
        'Aggiungere un **farmaco di salvataggio** (breakthrough) per i picchi di dolore',
        'Monitorare sempre **effetti collaterali**: stipsi, nausea, sedazione, depressione respiratoria',
      ],
    },
    {
      title: 'Effetti collaterali e prevenzione',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        '**Stipsi**: quasi sempre presente con oppioidi → associare lassativo (lattulosio, macrogol)',
        '**Nausea/vomito**: comune nei primi giorni → antiemetico (metoclopramide, ondansetron)',
        '**Sedazione**: valutare con scala di sedazione; ridurre dose se eccessiva',
        '**Depressione respiratoria**: rischio con oppioidi forti → monitorare FR e SpO₂',
        '**Tolleranza**: può svilupparsi → aumentare gradualmente la dose se necessario',
      ],
    },
    {
      title: 'Valutazione del dolore',
      icon: 'Scale',
      accent: 'blue',
      items: [
        'Usare **scale validate**: VAS (0–10), NRS (0–10), Wong-Baker (bambini)',
        'Valutare **prima e dopo** ogni somministrazione',
        'Documentare **sede, carattere, intensità, fattori scatenanti e allevianti**',
        'Rivalutare ogni **4–6 ore** o dopo ogni somministrazione',
        'Considerare anche il **dolore non verbale** in pazienti non comunicanti',
      ],
    },
  ],
  keyPoints: [
    'La scala OMS è un **modello guida**: non è rigida, si adatta al paziente',
    'Gli **oppioidi forti** richiedono sempre un piano di monitoraggio e prevenzione degli effetti collaterali',
    'Il **paracetamolo** è il farmaco di prima scelta per il dolore lieve: sicuro, ben tollerato',
  ],
}

export default map
