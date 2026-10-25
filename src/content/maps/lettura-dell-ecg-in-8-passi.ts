import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'lettura-dell-ecg-in-8-passi',
  chapter: 'ecg',
  title: 'Lettura dell’ECG in 8 passi',
  subtitle: 'Il metodo sistematico per analizzare un tracciato in modo rapido e sicuro',
  icon: 'Workflow',
  status: 'bozza',
  sources: [
    'ESC 2024 — Guidelines for the management of atrial fibrillation',
    'Hampton J. — ECG facile, Elsevier',
    'ACLS Provider Manual, AHA 2020',
  ],
  intro: 'Segui sempre la stessa sequenza per non perdere dettagli. Ogni passo risponde a una domanda specifica sul tracciato.',
  columns: 2,
  blocks: [
    {
      title: '1. Identificazione',
      icon: 'User',
      accent: 'blue',
      items: [
        'Verifica **paziente**, data, ora',
        'Controlla **derivazioni** e velocità carta (25 mm/s)',
        'Assicurati che il tracciato sia leggibile',
      ],
    },
    {
      title: '2. Frequenza',
      icon: 'Gauge',
      accent: 'green',
      items: [
        'Metodo rapido: **300 / n° di grandi quadretti** tra due QRS',
        'Se ritmo regolare: 1500 / n° piccoli quadretti',
        'Se irregolare: conta i QRS in 6 secondi × 10',
      ],
    },
    {
      title: '3. Ritmo',
      icon: 'Repeat',
      accent: 'purple',
      items: [
        'Regolare: distanza R-R costante',
        'Irregolare: distanza R-R variabile',
        'Valuta se l’irregolarità è **costante** o casuale',
      ],
    },
    {
      title: '4. Onde P',
      icon: 'Activity',
      accent: 'orange',
      items: [
        'Presenti? Una prima di ogni QRS?',
        'Morfologia: positiva in I, II, aVF',
        'Assenti o anormali: sospetta **aritmia atriale**',
      ],
    },
    {
      title: '5. Intervallo PR',
      icon: 'Timer',
      accent: 'teal',
      items: [
        'Normale: **0,12–0,20 s** (3–5 piccoli quadretti)',
        'Allungato: blocco AV di 1° grado',
        'Variabile o assente: blocchi AV di 2° o 3° grado',
      ],
    },
    {
      title: '6. Complesso QRS',
      icon: 'Zap',
      accent: 'red',
      items: [
        'Durata normale: **< 0,12 s** (3 piccoli quadretti)',
        'Largo: blocco di branca o origine ventricolare',
        'Morfologia: cerca onde Q patologiche o ST alterato',
      ],
    },
    {
      title: '7. Asse elettrico',
      icon: 'Target',
      accent: 'navy',
      items: [
        'Valuta QRS in **I** e **aVF**',
        'Asse normale: positivo in I e aVF',
        'Deviato: sospetta ipertrofia o blocco di branca',
      ],
    },
    {
      title: '8. Interpretazione',
      icon: 'ClipboardCheck',
      accent: 'slate',
      items: [
        'Sintetizza: ritmo, frequenza, asse, alterazioni',
        'Confronta con tracciati precedenti',
        'Cerca **pattern noti**: ischemia, aritmie, blocchi',
      ],
    },
  ],
  keyPoints: [
    'Non saltare mai un passo: l’ordine sistematico evita errori',
    'Il **QRS largo** è il segnale più importante da non perdere',
    'Confronta sempre con l’ECG precedente se disponibile',
  ],
}

export default map
