import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'emoderivati-ed-emocomponenti',
  chapter: 'farmacologia',
  title: 'Emoderivati ed emocomponenti',
  subtitle: 'Indicazioni, dosaggi, rischi trasfusionali e ruolo infermieristico',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'Ministero della Salute — Raccomandazioni per la trasfusione di emocomponenti (2023)',
    'SIT (Società Italiana di Trasfusione) — Linee guida per la pratica trasfusionale',
    'AIFA — Elenco farmaci emoderivati e criteri di prescrizione',
  ],
  intro: 'La trasfusione è un **atto medico** che l’infermiere esegue sotto prescrizione. Ogni componente ha indicazioni, dosaggi e rischi specifici. La **sicurezza** passa per il controllo a 3 livelli e il monitoraggio continuo.',
  tableTitle: 'Componenti ematici: caratteristiche e uso',
  tableIcon: 'Droplet',
  columns: ['Componente', 'Contenuto principale', 'Indicazione principale', 'Dose standard', 'Durata infusione'],
  widths: [1.2, 1.5, 1.8, 1.2, 1.2],
  rows: [
    ['Concentrato di globuli rossi (CGR)', 'Emoglobina, eritrociti', 'Anemia sintomatica, emorragia acuta', '1 unità (250–300 mL)', '2–4 ore'],
    ['Plasma fresco congelato (PFC)', 'Fattori coagulativi, albumina', 'Coagulopatia, epatite, sovradosaggio anticoagulanti', '10–15 mL/kg', '1–2 ore'],
    ['Concentrato piastrinico', 'Piastrine', 'Trombocitopenia (< 50.000/µL) con sanguinamento', '1 pool (≈ 250–300 mL)', '30–60 min'],
    ['Crioconcentrato', 'Fattore VIII, von Willebrand', 'Emofilia A, sindrome di von Willebrand', '1 unità (10–20 mL)', '30–60 min'],
    ['Albumina umana', 'Proteina plasmatica', 'Edema, ipoproteinemia, emodialisi', '25% o 5% secondo indicazione', 'Variabile'],
    ['Immunoglobuline (IgG)', 'Anticorpi', 'Immunodeficienze, immunoglobulinemia', '100–400 mg/kg', '1–3 ore'],
  ],
  notes: [
    {
      title: 'Controlli pre-trasfusionali',
      icon: 'ClipboardCheck',
      accent: 'blue',
      items: [
        'Verifica **identità paziente** con 2 identificativi (nome + data di nascita)',
        'Controllo **compatibilità ABO e Rh** su etichetta sacca',
        'Verifica **data scadenza** e integrità sacca (niente coaguli, torbidità)',
        'Controllo **prescrizione medica** e consenso informato',
        'Preparazione **linea trasfusionale** dedicata (niente altri farmaci)',
      ],
    },
    {
      title: 'Reazioni trasfusionali: segnali d’allarme',
      icon: 'Siren',
      accent: 'red',
      items: [
        'Febbre **> 38 °C**, brividi, tachicardia → **sospendere trasfusione**',
        'Dispnea, cianosi, ipotensione → **reazione emolitica acuta**',
        'Urticaria, prurito → **reazione allergica** (spesso lieve)',
        'Dolore lombare, ematuria → **reazione emolitica** (emergenza)',
        'Tachicardia, dispnea, edema polmonare → **TACO (sovraccarico circolatorio da trasfusione)**',
      ],
    },
    {
      title: 'Ruolo infermieristico',
      icon: 'Stethoscope',
      accent: 'green',
      items: [
        'Monitorare **parametri vitali** ogni 15 min per i primi 30 min, poi ogni 30 min',
        'Riconoscere e **sospendere** immediatamente la trasfusione in caso di reazione',
        'Comunicare al medico e **documentare** l’evento nel diario infermieristico',
        'Conservare la **sacca residua** e il set trasfusionale per analisi',
        'Informare il paziente su **rischi e benefici** prima della trasfusione',
      ],
    },
  ],
  keyPoints: [
    'La trasfusione è un **farmaco**: richiede prescrizione, consenso e documentazione',
    'Ogni sacca ha un **tempo di conservazione** specifico: CGR 42 giorni, PFC 12 mesi, piastrine 5–7 giorni',
    'Le **reazioni emolitiche** sono rare ma potenzialmente letali: la prevenzione è nel controllo dell’identità',
  ],
}

export default map
