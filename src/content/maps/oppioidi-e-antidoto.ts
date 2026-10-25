import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'oppioidi-e-antidoto',
  chapter: 'farmacologia',
  title: 'Oppioidi e antidoto',
  subtitle: 'Classificazione, effetti collaterali e gestione della naltrexone',
  icon: 'Pill',
  status: 'bozza',
  sources: [
    'OMS — Linee guida per la gestione del dolore (2018)',
    'AIFA — Farmaci oppioidi: scheda tecnica e avvertenze',
    'Ministero della Salute — Raccomandazioni per la terapia del dolore',
  ],
  intro: 'Gli oppioidi sono analgesici potenti che agiscono sui recettori μ, κ e δ. L’antidoto specifico è la **naloxone** (Narcan).',
  tableTitle: 'Principali oppioidi e caratteristiche',
  tableIcon: 'Pill',
  columns: ['Farmaco', 'Potenza relativa', 'Durata d’azione', 'Via di somministrazione', 'Note cliniche'],
  widths: [1.2, 1, 1, 1.5, 2],
  rows: [
    ['Morfina', '1', '4–6 h', 'EV, IM, SC, PO', 'Riferimento per scala OMS; rischio di tachifilassi'],
    ['Codeina', '0,1', '4–6 h', 'PO, SC', 'Prodroga: convertita in morfina; evitare in lattanti < 2 mesi'],
    ['Tramadolo', '0,1', '4–6 h', 'PO, EV, IM', 'Agisce anche su recettori serotoninergici; rischio convulsioni'],
    ['Fentanil', '100', '1–2 h (EV)', 'EV, transdermica', 'Molto lipofilo; rischio di accumulo; uso in PCA'],
    ['Metadone', '3–5', '8–12 h', 'PO, EV', 'Emivita lunga; rischio di sovradosaggio tardivo'],
    ['Ossicodone', '1,5', '4–6 h', 'PO, EV', 'Metabolita attivo: norossicodone; evitare in insufficienza epatica'],
  ],
  notes: [
    {
      title: 'Effetti collaterali comuni',
      icon: 'TriangleAlert',
      accent: 'orange',
      items: [
        'Depressione respiratoria: **rischio maggiore** con fentanil e metadone',
        'Stitichezza: **non si sviluppa tolleranza**; usare lassativi preventivi',
        'Nausea e vomito: spesso transitori (2–3 giorni)',
        'Sedazione: monitorare con scala di Ramsay o Pasero',
        'Prurito: da liberazione di istamina (soprattutto morfina)',
        'Ritenzione urinaria: più frequente in pazienti anziani',
      ],
    },
    {
      title: 'Antidoto: Naloxone',
      icon: 'ShieldCheck',
      accent: 'green',
      items: [
        'Agonista-antagonista competitivo sui recettori μ',
        'Dose iniziale: **0,4–2 mg** EV/IM/SC; ripetere ogni 2–3 min',
        'Dose massima: **10 mg** in 1 ora (valutare caso per caso)',
        'Emivita breve (30–80 min): rischio di **re-sedazione** dopo 1–2 h',
        'Somministrare in **bolus lenti** per evitare crisi di astinenza acuta',
        'Monitorare la respirazione per almeno **4 ore** dopo la somministrazione',
      ],
    },
    {
      title: 'Precauzioni infermieristiche',
      icon: 'ClipboardCheck',
      accent: 'blue',
      items: [
        'Valutare la **scala del dolore** prima e dopo la somministrazione',
        'Monitorare **FR, SpO₂, livello di coscienza** ogni 15 min per le prime 2 h',
        'Avere la **naloxone** a portata di mano in ogni reparto che somministra oppioidi',
        'Educare il paziente e i familiari ai **segnali d’allarme** (sedazione eccessiva, respiro lento)',
        'Registrare la somministrazione nel **foglio terapie** con ora e dose',
        'Evitare l’uso concomitante di **benzodiazepine** senza stretta indicazione',
      ],
    },
  ],
  keyPoints: [
    'La **naloxone** ha emivita più breve degli oppioidi: rischio di **re-sedazione**',
    'La **stitichezza** non sviluppa tolleranza: prescrivere sempre lassativi',
    'Il **fentanil** è 100 volte più potente della morfina: attenzione alle dosi',
  ],
}

export default map
