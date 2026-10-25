import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'pediatria-parametri-vitali-per-eta',
  chapter: 'specialistica',
  title: 'Parametri vitali in pediatria',
  subtitle: 'Valori normali per fascia d’età e soglie d’allarme',
  icon: 'Baby',
  status: 'bozza',
  sources: [
    'American Heart Association — PALS Provider Manual 2020, tabelle dei parametri vitali',
    'ERC — Linee guida per il supporto vitale pediatrico',
  ],
  intro: 'Valori indicativi **a riposo e da sveglio**: pianto, febbre e dolore li modificano. Interpreta sempre il **trend** e il quadro clinico.',
  tableTitle: 'Valori normali per età',
  tableIcon: 'HeartPulse',
  columns: ['Età', 'FC (bpm)', 'FR (atti/min)', 'PAS (mmHg)', 'Ipotensione se PAS <'],
  widths: [1.5, 1, 1, 1, 1.5],
  rows: [
    ['Neonato (< 1 mese)', '100–205', '30–60', '67–84', '60'],
    ['Lattante (1–12 mesi)', '100–180', '30–53', '72–104', '70'],
    ['1–2 anni', '98–140', '22–37', '86–106', '70 + (2 × età)'],
    ['3–5 anni', '80–120', '20–28', '89–112', '70 + (2 × età)'],
    ['6–11 anni', '75–118', '18–25', '97–115', '70 + (2 × età) fino a 10 anni'],
    ['12–15 anni', '60–100', '12–20', '110–131', '90'],
  ],
  notes: [
    {
      title: 'Come misurare',
      icon: 'Stethoscope',
      accent: 'blue',
      items: [
        'Lattante: FC al **polso apicale** per 60 s',
        'FR: osservare l’**addome** per 60 s',
        'Bracciale: larghezza circa **40%** della circonferenza del braccio',
        'Misurare con il bambino **tranquillo**',
      ],
    },
    {
      title: 'Segni d’allarme',
      icon: 'Siren',
      accent: 'red',
      items: [
        'FR **> 60** a qualsiasi età',
        'FC **< 60** con segni di ipoperfusione: **iniziare RCP**',
        'Riempimento capillare **> 2 s**',
        'Letargia, gemito, **rientramenti**',
      ],
    },
    {
      title: 'Formule utili',
      icon: 'Calculator',
      accent: 'purple',
      items: [
        'Peso stimato (1–10 anni) = **(età + 4) × 2** kg',
        'PAS minima (1–10 anni) = **70 + (2 × età)**',
        'Febbre: temperatura **≥ 38 °C**',
      ],
    },
  ],
  keyPoints: [
    'Nel bambino la **bradicardia** è spesso segno di **ipossia**',
    'L’ipotensione è un segno **tardivo**: il bambino compensa a lungo',
  ],
}

export default map
