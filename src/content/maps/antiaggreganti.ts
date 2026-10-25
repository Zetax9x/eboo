import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'antiaggreganti',
  chapter: 'farmacologia',
  title: 'Antiaggreganti',
  subtitle: 'Meccanismo d’azione, dosaggi standard e punti chiave per l’esame',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'ESC Guidelines for the management of acute coronary syndromes (2023)',
    'AIFA — Elenco farmaci e schede tecniche (ultima revisione)',
    'Linee guida nazionali per la prevenzione cardiovascolare (Ministero della Salute)',
  ],
  intro: 'Gli antiaggreganti inibiscono l’aggregazione piastrinica. A differenza degli anticoagulanti, **non richiedono monitoraggio** di routine (tranne il ticagrelor in casi specifici o interazioni).',
  tableTitle: 'Principali farmaci antiaggreganti',
  tableIcon: 'Pill',
  columns: ['Farmaco', 'Classe', 'Meccanismo', 'Dose standard (adulto)', 'Note cliniche'],
  widths: [1.2, 1, 1.5, 1.2, 2],
  rows: [
    ['Aspirina', 'Inibitore COX-1', 'Blocco irreversibile della sintesi di tromboxano A2', '100–300 mg/die', 'Effetto immediato; rischio emorragico gastrico'],
    ['Clopidogrel', 'TIA (inibitore P2Y12)', 'Blocco irreversibile del recettore P2Y12', '75 mg/die', 'Richiede attivazione epatica; interazione con Omeprazolo'],
    ['Ticagrelor', 'TIA (inibitore P2Y12)', 'Blocco reversibile del recettore P2Y12', '90 mg 2 volte/die', 'Più potente; effetto rapido; rischio di dispnea'],
    ['Prasugrel', 'TIA (inibitore P2Y12)', 'Blocco irreversibile del recettore P2Y12', '10 mg/die', 'Solo in ACS; controindicato in età > 75 o peso < 60 kg'],
    ['Dipyridamolo', 'Inibitore PDE', 'Aumento cAMP piastrinico', '75–100 mg 2-3 volte/die', 'Spesso associato ad aspirina; cefalea comune'],
  ],
  notes: [
    {
      title: 'Terapia doppia antiaggregante (DAPT)',
      icon: 'ShieldCheck',
      accent: 'green',
      items: [
        'Standard post-IMA o post-stent: **Aspirina + TIA**',
        'Durata tipica: **12 mesi** (più lunga in caso di rischio trombotico)',
        'Ridurre a **1 mese** se alto rischio emorragico',
        'Monitorare segni di **sanguinamento** (ematochezia, ematomi)',
      ],
    },
    {
      title: 'Controindicazioni e precauzioni',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'Ulcera peptica attiva o sanguinamento recente',
        'Trombocitopenia grave (< 50.000/µL)',
        'Prasugrel: **controindicato** in età > 75 anni o peso < 60 kg',
        'Evitare interazioni: Clopidogrel + **Omeprazolo** (riduce efficacia)',
      ],
    },
    {
      title: 'Ruolo infermieristico',
      icon: 'ClipboardCheck',
      accent: 'blue',
      items: [
        'Verificare allergie e storia di **sanguinamenti**',
        'Educare al riconoscimento di segni di emorragia',
        'Monitorare emoglobina e piastrine se indicato',
        'Segnalare interazioni farmacologiche (es. FANS, anticoagulanti)',
      ],
    },
  ],
  keyPoints: [
    'L’**aspirina** è il primo antiaggregante per prevenzione primaria e secondaria',
    'I **TIA** (Clopidogrel, Ticagrelor, Prasugrel) sono preferiti nell’ACS e post-stent',
    'La **DAPT** bilancia rischio trombotico ed emorragico: personalizzare la durata',
  ],
}

export default map
