import type { AlgorithmMap } from '../../book/types'

const map: AlgorithmMap = {
  kind: 'algorithm',
  id: 'maxi-emergenze-e-triage-start',
  chapter: 'emergenze',
  title: 'Maxi-emergenze e triage START',
  subtitle: 'Gestione del paziente in scenari con molte vittime e triage rapido',
  icon: 'Siren',
  status: 'bozza',
  sources: [
    'Dipartimento della Protezione Civile — Piano Nazionale di Emergenza e Protezione Civile (PNPC)',
    'ISS — Istituto Superiore di Sanità, Linee guida per la gestione delle maxi-emergenze',
    'FNOPI — Codice deontologico delle professioni infermieristiche (2019)',
  ],
  intro: 'Il triage START (Simple Triage and Rapid Treatment) è il metodo standard per classificare rapidamente i pazienti in una maxi-emergenza, quando le risorse sono scarse e le vittime numerose.',
  steps: [
    { kind: 'start', title: 'Sicurezza e comando', text: 'Valuta la scena, stabilisci un punto di comando e una zona sicura per il triage' },
    { kind: 'action', title: 'Identifica i camminabili', text: 'Chiedi a chi è cosciente e mobile di **alzarsi e camminare** verso la zona verde' },
    { kind: 'decision', title: 'Respiro presente?', text: 'Valuta la respirazione per **massimo 30 secondi**', branches: [
      { label: 'Sì', text: 'Procedi alla valutazione del circolo' },
      { label: 'No', text: 'Apri le vie aeree e rivaluta. Se non respira: **Etichetta Nera (Deceduto)**' },
    ]},
    { kind: 'decision', title: 'Pulse o capillare?', text: 'Valuta il **polso radiale** o il riempimento capillare (CRT)', branches: [
      { label: 'CRT > 2s / Polso assente', text: '**Etichetta Rossa (Priorità 1)**' },
      { label: 'CRT ≤ 2s / Polso presente', text: 'Procedi alla valutazione neurologica' },
    ]},
    { kind: 'decision', title: 'Obbedisce agli ordini?', text: 'Chiedi al paziente di **aprire e chiudere le mani**', branches: [
      { label: 'Sì', text: '**Etichetta Gialla (Priorità 2)**' },
      { label: 'No', text: '**Etichetta Rossa (Priorità 1)**' },
    ]},
    { kind: 'end', title: 'Trasporto e rivalutazione', text: 'Trasporta i Rossi, poi i Gialli. Rivaluta i Gialli ogni **15-30 minuti**' },
  ],
  side: [
    {
      title: 'Etichette di Triage',
      icon: 'Tag',
      accent: 'red',
      items: [
        '**ROSSA**: Immediata (Vita in pericolo, trattabile)',
        '**GIALLA**: Ritardata (Grave ma non immediata)',
        '**VERDE**: Minore (Camminabile, "walking wounded")',
        '**NERA**: Deceduto o non trattabile',
        'Usare **nastro adesivo** o braccialetti colorati',
        'Annotare **ora** e **nome** del triagista',
      ],
    },
    {
      title: 'Ruolo Infermieristico',
      icon: 'ClipboardCheck',
      accent: 'blue',
      items: [
        'Coordinare il **flusso** dei pazienti',
        'Apporre le **etichette** in modo visibile',
        'Comunicare lo **stato** al team di cura',
        'Gestire l’**ansia** dei pazienti e familiari',
        'Registrare i dati per la **tracciabilità**',
        'Rispettare la **privacy** anche in emergenza',
      ],
    },
    {
      title: 'Errori da Evitare',
      icon: 'TriangleAlert',
      accent: 'orange',
      items: [
        'Non perdere tempo in **anamnesi** dettagliata',
        'Non trascurare i **bambini** (criteri START modificati)',
        'Non dimenticare i **pazienti incoscienti**',
        'Non confondere **shock** con **trauma**',
        'Non trascurare la **sicurezza** del personale',
        'Non trascurare la **documentazione**',
      ],
    },
  ],
  keyPoints: [
    'START = **S**imple **T**riage and **R**apid **T**reatment',
    'Ordine di valutazione: **Respiro → Circolo → Neurologia**',
    'Etichetta **ROSSA** = Priorità assoluta',
    'Rivalutare i **GIALLI** periodicamente',
  ],
}

export default map
