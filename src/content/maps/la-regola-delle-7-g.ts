import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'la-regola-delle-7-g',
  chapter: 'farmacologia',
  title: 'La regola delle 7 G',
  subtitle: 'I controlli per una somministrazione sicura della terapia',
  icon: 'ClipboardCheck',
  status: 'bozza',
  sources: [
    'Ministero della Salute — Raccomandazione n. 7 per la prevenzione della morte, coma o grave danno derivati da errori in terapia farmacologica, 2008',
    'Ministero della Salute — Raccomandazione n. 17 per la riconciliazione della terapia farmacologica, 2014',
    'FNOPI — Codice deontologico delle Professioni infermieristiche, 2019',
  ],
  intro:
    'Prima di ogni somministrazione l’infermiere verifica **7 “giusti”**. L’errore può nascere in ogni fase: **prescrizione**, trascrizione, preparazione, **somministrazione**, monitoraggio.',
  tableTitle: 'Le 7 G',
  tableIcon: 'ListChecks',
  columns: ['G', 'Che cosa verificare', 'Errore tipico da evitare'],
  widths: [1.1, 2.4, 2],
  rows: [
    ['1 · Giusto **farmaco**', 'Nome (principio attivo), forma, concentrazione; **scadenza** e integrità; **allergie** note; prescrizione completa e leggibile', 'Farmaci **LASA** scambiati; confezioni simili; farmaco a cui il paziente è **allergico**'],
    ['2 · Giusta **dose**', 'Dose prescritta = dose preparata; **ricalcolare** e far verificare i calcoli critici; peso aggiornato se dose/kg', 'Errore di **virgola** o di unità (mg/mcg, UI); “U” letta come zero'],
    ['3 · Giusta **via**', 'Via prescritta e forma farmaceutica adatta; accesso **pervio**; velocità di infusione corretta', 'Farmaco orale/enterale somministrato **EV**; IM al posto di SC; bolo invece di infusione'],
    ['4 · Giusto **orario**', 'Ora e intervallo corretti; rapporto con **pasti** e altri farmaci; orari di antibiotici e **insulina**', 'Dose **omessa**, doppia o in ritardo; insulina senza pasto'],
    ['5 · Giusto **paziente**', 'Almeno **2 identificativi** (nome e cognome, data di nascita) + **braccialetto**; domanda aperta “come si chiama?”', 'Omonimie; letti scambiati; chiedere “è lei il signor…?” (domanda chiusa)'],
    ['6 · Giusta **registrazione**', 'Firmare **dopo** la somministrazione; annotare dose non data e **motivo**; firma leggibile', 'Registrare **prima** di somministrare; registrazioni incomplete o dimenticate'],
    ['7 · Giusto **controllo**', 'Monitorare **efficacia** ed effetti avversi; parametri pre-somministrazione; **educazione** del paziente', 'Non rilevare **FC** prima di digossina o **PA** prima di antipertensivi; glicemia prima dell’insulina'],
  ],
  notes: [
    {
      title: 'Raccomandazione n. 7',
      icon: 'FileText',
      accent: 'blue',
      items: [
        'Prescrizione **scritta**, leggibile; evitare ordini verbali',
        'Scheda **terapeutica unica**',
        'Evitare **abbreviazioni** a rischio (Raccomandazione n. 18)',
        'Procedure per i farmaci **ad alto rischio**',
      ],
    },
    {
      title: 'I 3 controlli',
      icon: 'RefreshCw',
      accent: 'purple',
      items: [
        'Quando si **preleva** il farmaco',
        'Durante la **preparazione**',
        'Al **letto** del paziente, prima di somministrare',
        '**Doppio controllo** indipendente per farmaci ad alto rischio',
      ],
    },
    {
      title: 'Se si verifica un errore',
      icon: 'Siren',
      accent: 'red',
      items: [
        'Valutare e **mettere in sicurezza** il paziente',
        'Avvisare subito il **medico**',
        'Documentare e **segnalare** (incident reporting)',
        'Analizzare l’evento, **non** cercare il colpevole',
      ],
    },
  ],
  keyPoints: [
    'Somministra solo ciò che **hai preparato tu** e mai un farmaco **non etichettato**',
    'Se il paziente dice “**questa pillola non l’ho mai presa**”: fermati e verifica',
  ],
}

export default map
