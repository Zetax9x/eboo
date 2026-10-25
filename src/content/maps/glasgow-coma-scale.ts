import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'glasgow-coma-scale',
  chapter: 'specialistica',
  title: 'Glasgow Coma Scale',
  subtitle: 'Valutazione oggettiva del livello di coscienza in 3 parametri',
  icon: 'Brain',
  status: 'bozza',
  sources: [
    'Teasdale G., Jennett B. — Assessment of coma and impaired consciousness: a practical scale, Lancet 1974',
    'Guideline AAN — Assessment and Management of Traumatic Brain Injury (2016)',
    'Manuale di Neurologia Clinica — Edizioni Minerva Medica',
  ],
  intro:
    'Strumento standard per quantificare la **gravità** del danno cerebrale. Punteggio totale: **3–15**. < 8 = **coma** (intubazione).',
  tableTitle: 'Punteggio GCS: Apertura oculare, Verbal, Motorio',
  tableIcon: 'ClipboardCheck',
  columns: ['Parametro', 'Punteggio 4', 'Punteggio 3', 'Punteggio 2', 'Punteggio 1'],
  rows: [
    [
      '**Apertura oculare**',
      'Spontanea',
      'A comando (stimolo verbale)',
      'Al dolore (stimolo tattile)',
      'Assente',
    ],
    [
      '**Risposta verbale**',
      'Orientata (persona, luogo, tempo)',
      'Confusa (disorientata)',
      'Parole incomprensibili',
      'Suoni inappropriati',
      'Assente',
    ],
    [
      '**Risposta motoria**',
      'Obbedisce ai comandi',
      'Localizza il dolore',
      'Flessione anomala (decorticazione)',
      'Estensione anomala (decerebrazione)',
      'Movimento assente',
    ],
  ],
  widths: [1.2, 1.5, 1.5, 1.5, 1.5],
  notes: [
    {
      title: 'Interpretazione del punteggio',
      icon: 'Gauge',
      accent: 'red',
      items: [
        '**15**: Cosciente e orientato (normale)',
        '**13–14**: Danno cerebrale lieve',
        '**9–12**: Danno cerebrale moderato',
        '**3–8**: Danno cerebrale grave (coma)',
        '**< 8**: Indicazione per **intubazione** orotracheale',
      ],
    },
    {
      title: 'Note cliniche e limiti',
      icon: 'Info',
      accent: 'blue',
      items: [
        'In **intubati**: verbal = 1T (T = Tube)',
        'In **sedati**: GCS non affidabile (effetto farmacologico)',
        'In **bambini < 2 anni**: usare GCS pediatrica (modificata)',
        'In **anestetizzati**: non valutabile',
        'Valutare **entrambi** gli occhi se asimmetrici (prendere il migliore)',
      ],
    },
    {
      title: 'Ruolo infermieristico',
      icon: 'Stethoscope',
      accent: 'green',
      items: [
        'Valutare **ogni turno** e a ogni cambiamento clinico',
        'Documentare **ora**, **punteggio**, **stimolo** usato',
        'Segnalare **calo ≥ 2 punti** al medico (allarme)',
        'Mantenere **via aerea** pervia se GCS < 8',
        'Prevenire **ulcere da decubito** e **trombosi**',
      ],
    },
  ],
  keyPoints: [
    'Formula: **E + V + M** (Eyes + Verbal + Motor). Massimo 15, minimo 3.',
    'GCS **< 8** = coma → **intubazione** e monitoraggio in Rianimazione/UTIN.',
    'Un **calo improvviso** del punteggio è un’emergenza neurologica.',
  ],
}

export default map
