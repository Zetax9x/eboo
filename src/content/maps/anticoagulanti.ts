import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'anticoagulanti',
  chapter: 'farmacologia',
  title: 'Anticoagulanti',
  subtitle: 'Classi, meccanismi, monitoraggio e antidoti',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'AIFA — Raccomandazioni per l’uso sicuro dei farmaci anticoagulanti',
    'IST — Linee guida sulla profilassi tromboembolica',
    'ESC — Guidelines on atrial fibrillation (2024)',
  ],
  intro: 'Agiscono sulla **cascata della coagulazione**. La scelta dipende dall’indicazione, dal rischio emorragico e dalla reversibilità.',
  tableTitle: 'Confronto tra le principali classi',
  tableIcon: 'Pill',
  columns: ['Classe / Farmaco', 'Meccanismo', 'Somministrazione', 'Monitoraggio', 'Antidoto'],
  widths: [1.2, 1.5, 1, 1.2, 1.5],
  rows: [
    [
      'Eparina non frazionata (ENF)',
      'Attiva antitrombina III → inibizione **Xa** e **IIa**',
      'EV / SC',
      '**aPTT** (target 1,5–2,5× base)',
      '**Solfato di protamina**',
    ],
    [
      'Eparina a basso peso molecolare (EBPM)',
      'Attiva antitrombina III → inibizione **Xa**',
      'SC 1–2 volte/die',
      '**Anti-Xa** (obesità, gravidanza, IRC)',
      '**Solfato di protamina** (parziale)',
    ],
    [
      'Antagonisti Vitamina K (AVK)',
      'Inibisce sintesi fattori **II, VII, IX, X**',
      'PO 1–2 volte/die',
      '**INR** (target 2,0–3,0 o 2,5–3,5)',
      '**Vitamina K** / **PCC**',
    ],
    [
      'Inibitori diretti Trombina (Dabigatran)',
      'Inibizione diretta **trombina (IIa)**',
      'PO 2 volte/die',
      'Generalmente **non richiesto**',
      '**Idroxizim** / **PCC**',
    ],
    [
      'Inibitori diretti Xa (Rivaroxaban, Apixaban)',
      'Inibizione diretta **Fattore Xa**',
      'PO 1–2 volte/die',
      'Generalmente **non richiesto**',
      '**Andexanet alfa** / **PCC**',
    ],
  ],
  notes: [
    {
      title: 'Interazioni e avvertenze',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'AVK: interazioni con **FANS**, **antibiotici**, **alcol**',
        'DOAC: evitare inibitori/induttori **CYP3A4** e **P-gp**',
        'ENF/EBPM: rischio **HIT** → monitorare piastrine a 5–10 gg',
        'Verificare **funzione renale** (eGFR) prima e periodicamente',
        'Gravidanza: **solo EBPM** sicura',
      ],
    },
    {
      title: 'Ruolo infermieristico',
      icon: 'Stethoscope',
      accent: 'green',
      items: [
        'Verificare **prescrizione** e dose in base a peso, età, eGFR',
        'Monitorare segni di emorragia (ecchimosi, melena, ematuria)',
        'Somministrare EBPM **SC profonda**, ruotare le sedi',
        'Educare: assunzione regolare, segnalare **sanguinamenti anomali**',
        'Gestire transizione ENF → AVK/DOAC secondo protocollo',
      ],
    },
    {
      title: 'Segnali d’allarme',
      icon: 'Siren',
      accent: 'orange',
      items: [
        'Emorragia attiva: **vomito ematico**, **melena**, **cefalea improvvisa**',
        'INR **> 4,5** senza emorragia → sospendere e consultare',
        'INR **> 5** con emorragia → **PCC + Vitamina K**',
        'Sospetto **HIT**: piastrine **< 150.000/µL** o calo > 50%',
      ],
    },
  ],
  keyPoints: [
    'La **reversibilità** è cruciale: ENF/EBPM con protamina; DOAC con antidoti specifici',
    'Il **monitoraggio** varia: aPTT (ENF), INR (AVK), Anti-Xa (EBPM selettivo)',
    'La **funzione renale** influenza la clearance di tutti gli anticoagulanti',
  ],
}

export default map
