import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'broncodilatatori-e-terapia-inalatoria',
  chapter: 'farmacologia',
  title: 'Broncodilatatori e terapia inalatoria',
  subtitle: 'Classi, meccanismi, dosi e tecniche di somministrazione',
  icon: 'Wind',
  status: 'bozza',
  sources: [
    'GOLD — Global Strategy for COPD (2024)',
    'GINA — Global Initiative for Asthma (2024)',
    'AIFA — Riassunti delle Caratteristiche del Prodotto (RCP), banca dati farmaci',
  ],
  intro: 'Via inalatoria: effetto rapido, dosi basse, meno effetti sistemici. La **tecnica** è cruciale per l’efficacia.',
  tableTitle: 'Classi di broncodilatatori',
  tableIcon: 'Wind',
  columns: ['Classe', 'Esempi', 'Inizio', 'Durata', 'Note'],
  widths: [1.2, 1.2, 0.8, 0.8, 1.5],
  rows: [
    ['SABA', 'Salbutamolo, Terbutalina', '5–15 min', '4–6 h', 'Al bisogno; tachicardia, tremori'],
    ['LABA', 'Salmeterolo, Formoterolo', '10–30 min', '12–24 h', 'Mai solo in asma; sempre con ICS'],
    ['SAMA', 'Ipratropio', '15–30 min', '4–6 h', 'Utile in BPCO; meno effetti cardiaci'],
    ['LAMA', 'Tiotropio, Umeclidinio', '15–30 min', '24 h', 'Prima scelta BPCO; secchezza orale'],
    ['ICS', 'Budesonide, Fluticasone', 'Ore–giorni', 'Cronico', 'Risciacquare bocca; candidosi'],
    ['Combinazioni', 'LABA+ICS, LAMA+LABA', 'Variabile', 'Variabile', 'LAMA+LABA: BPCO gruppi B ed E'],
  ],
  notes: [
    {
      title: 'Tecniche di somministrazione',
      icon: 'ClipboardCheck',
      accent: 'blue',
      items: [
        'MDI: sigillare labbra, inalare lentamente, trattenere **10 s**',
        'Dopo ICS: **risciacquare** bocca',
        'Spacer: riduce deposizione orofaringea',
        'DPI: inalazione rapida, **non** espirare nel dispositivo',
        'Nebulizzatore: **10–15 min**, posizione seduta',
      ],
    },
    {
      title: 'Effetti collaterali',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        'SABA: **tachicardia**, tremori, ipokaliemia',
        'LABA: rischio crisi se **senza ICS**',
        'ICS: **candidosi orale**, disfonia',
        'LAMA: **secchezza orale**, visione offuscata',
        'Ipratropio: **ritenzione urinaria**',
      ],
    },
    {
      title: 'Ruolo infermieristico',
      icon: 'User',
      accent: 'green',
      items: [
        'Insegnare e **verificare** tecnica inalatoria',
        'Monitorare **FC, PA, SpO₂** post-SABA',
        'Controllare **candidosi orale** con ICS',
        'Documentare **aderenza** e risposta',
        'Riconoscere segni di **crisi** respiratoria',
      ],
    },
  ],
  keyPoints: [
    'In **asma** l’ICS è la base: **mai SABA da solo**; al bisogno meglio ICS-formoterolo',
    'In **BPCO** base: broncodilatatori **a lunga durata** (LAMA, LABA o LAMA+LABA)',
    'La **tecnica errata** riduce l’efficacia del 50% o più',
  ],
}

export default map
