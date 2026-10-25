import type { AlgorithmMap } from '../../book/types'

const map: AlgorithmMap = {
  kind: 'algorithm',
  id: 'ictus-riconoscimento-e-codice-ictus',
  chapter: 'emergenze',
  title: 'Ictus: riconoscimento e codice ictus',
  subtitle: 'Identificazione rapida, attivazione del percorso e prime manovre infermieristiche',
  icon: 'Brain',
  status: 'bozza',
  sources: [
    'Linee guida AIN (Associazione Italiana Neurologia) e SIN (Società Italiana di Neurologia) sulla gestione dell’ictus acuto',
    'Ministero della Salute — Percorso Diagnostico Terapeutico Assistenziale (PDTA) Ictus',
    'NICE Guidelines — Stroke: diagnosis and initial management (NG229)',
  ],
  intro: 'L’ictus è un’emergenza medica e chirurgica. Il tempo è cervello: ogni minuto di ischemia provoca la morte di circa 1,9 milioni di neuroni. Il riconoscimento precoce e l’attivazione immediata del “Codice Ictus” sono determinanti per la sopravvivenza e la riduzione del deficit neurologico.',
  steps: [
    {
      kind: 'start',
      title: 'Riconoscimento immediato',
      text: 'Utilizza la mnemonica **FAST**: **F**ace (asimmetria facciale), **A**rm (debolezza/paralisi di un braccio), **S**peech (difficoltà a parlare o a capire), **T**ime (chiamare subito il 112/118).',
    },
    {
      kind: 'action',
      title: 'Valutazione iniziale',
      text: 'Verificare la **coscienza**, le **vie aeree** e la **respirazione**. Misurare **glicemia capillare** per escludere ipoglicemia (mimico di ictus).',
    },
    {
      kind: 'decision',
      title: 'Sospetto ictus?',
      branches: [
        { label: 'Sì', text: 'Attivare **Codice Ictus** e chiamare il 112/118 specificando “sospetto ictus”.' },
        { label: 'No', text: 'Rivalutare i sintomi e monitorare. Se persistono dubbi, chiamare comunque il 112.' },
      ],
    },
    {
      kind: 'action',
      title: 'Primi interventi',
      text: 'Posizionare il paziente in **posizione laterale di sicurezza** se incosciente. **Non somministrare cibo o bevande** (rischio di aspirazione). Tenere il paziente **calmo** e **monitorare i parametri vitali**.',
    },
    {
      kind: 'alert',
      title: 'Raccolta dati critici',
      text: 'Annotare l’**ora esatta di insorgenza** dei sintomi (ultima volta in cui il paziente era normale). Questa informazione è cruciale per la decisione sulla **trombectomia** o **trombolisi**.',
    },
    {
      kind: 'end',
      title: 'Trasferimento in ospedale',
      text: 'Il paziente deve essere trasferito in un **Centro Ictus** (Stroke Unit) o in un ospedale con **TC encefalo** e **angio-TC** disponibili. Non attendere la TAC per partire se il paziente è stabile.',
    },
  ],
  side: [
    {
      title: 'Sintomi di allarme (Red Flags)',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'Asimmetria facciale (calo di un lato)',
        'Debolezza o perdita di sensibilità a un braccio o una gamba',
        'Difficoltà a parlare o a comprendere il linguaggio',
        'Disturbi visivi improvvisi (monoculari o binoculari)',
        'Vertigini intense con atassia (incapacità di camminare)',
        'Cefalea improvvisa e violenta (“peggio della mia vita”)',
      ],
    },
    {
      title: 'Cosa NON fare',
      icon: 'Ban',
      accent: 'orange',
      items: [
        'Non somministrare **aspirina** o anticoagulanti prima della TAC (rischio emorragico)',
        'Non dare **cibo o bevande** (rischio di disfagia)',
        'Non lasciare il paziente **solo**',
        'Non attendere che i sintomi **passino** da soli',
        'Non somministrare **farmaci** non prescritti',
      ],
    },
    {
      title: 'Ruolo dell’infermiere',
      icon: 'Stethoscope',
      accent: 'blue',
      items: [
        'Riconoscere i sintomi con la scala **FAST** o **CIRCOLO** (Cervello, Ictus, Riconoscere, Chiamare, Osservare, Localizzare, Orario)',
        'Misurare **glicemia** e **pressione arteriosa**',
        'Registrare l’**ora di insorgenza** dei sintomi',
        'Attivare il **Codice Ictus** e preparare il trasferimento',
        'Monitorare **SAO₂**, **FC**, **PA** e **temperatura**',
        'Garantire la **sicurezza** del paziente (prevenire cadute)',
      ],
    },
  ],
  keyPoints: [
    '**Tempo è cervello**: ogni minuto di ritardo aumenta il danno neurologico',
    'La **glicemia** va sempre misurata per escludere ipoglicemia',
    'L’**ora di insorgenza** è il dato più importante per la terapia',
    'Non somministrare **aspirina** prima della TAC',
  ],
}

export default map
