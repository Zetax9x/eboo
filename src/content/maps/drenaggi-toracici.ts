import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'drenaggi-toracici',
  chapter: 'procedure',
  title: 'Drenaggi toracici',
  subtitle: 'Posizionamento, gestione e monitoraggio del drenaggio pleurico',
  icon: 'Wind',
  status: 'bozza',
  sources: [
    'British Thoracic Society – Pleural Disease Guideline (2023)',
    'Società Italiana di Medicina d\'Urgenza e Pronto Soccorso (SIMEU) – Linee guida per il drenaggio toracico (2022)',
  ],
  materials: [
    { label: 'Drenaggio toracico (Pigtail o Blake)', icon: 'Wind' },
    { label: 'Sistema a 3 camere (sigillo ad acqua)', icon: 'Droplets' },
    { label: 'Guanti sterili', icon: 'Hand' },
    { label: 'Clorexidina 2% in alcol', icon: 'Droplets' },
    { label: 'Medicazione trasparente', icon: 'Sticker' },
    { label: 'Siringa con NaCl 0,9%', icon: 'Pipette' },
    { label: 'Forbici sterili', icon: 'Scissors' },
    { label: 'Raccolta rifiuti sanitari', icon: 'Trash2' },
  ],
  sites: {
    title: 'Sedi di inserzione',
    illustration: {
      id: 'drenaggi-toracici-sedi',
      alt: 'Sedi di inserzione del drenaggio toracico',
      prompt: 'human thorax with two insertion points marked: one in the 4th intercostal space mid-axillary line and one in the 5th intercostal space anterior axillary line',
      icon: 'Target',
    },
    items: [
      '**Pneumotorace**: 4° spazio intercostale, linea ascellare media',
      '**Effusione**: 5°-7° spazio intercostale, linea ascellare posteriore',
      'Sopra la costata superiore per evitare il **plesso neurovascolare**',
    ],
  },
  safety: [
    { text: 'Verificare **consenso informato** e diagnosi', kind: 'ok' },
    { text: 'Tecnica **sterile** durante l’inserzione', kind: 'ok' },
    { text: '**Mai** staccare il tubo dal sistema di raccolta', kind: 'no' },
    { text: 'Se il tubo si stacca: **sigillare** con garza imbevuta di soluzione salina', kind: 'alert' },
    { text: 'Monitorare **saturazione** e segni di distress respiratorio', kind: 'warn' },
  ],
  steps: [
    {
      title: 'Preparazione',
      items: ['Verificare ordine medico', 'Spiegare la procedura', 'Posizionare il paziente (seduto o semi-seduto)'],
      icon: 'Package',
    },
    {
      title: 'Antisepsi',
      items: ['Disinfettare la cute con **clorexidina**', 'Lasciare asciugare', 'Indossare guanti sterili'],
      icon: 'Droplets',
    },
    {
      title: 'Inserzione',
      items: ['Incisione cutanea', 'Dilatare i tessuti', 'Inserire il **drenaggio** sopra la costata superiore'],
      icon: 'Syringe',
    },
    {
      title: 'Fissaggio',
      items: ['Cucire o fissare con **medicazione**', 'Collegare al sistema a 3 camere', 'Verificare la **sigillatura**'],
      icon: 'Bandage',
    },
    {
      title: 'Verifica flusso',
      items: ['Osservare le **bollicine d\'aria** nella camera di sigillo', 'Valutare la **sanguinamento**', 'Documentare il volume'],
      icon: 'Eye',
    },
    {
      title: 'Monitoraggio',
      items: ['Controllare **ogni turno**', 'Misurare il **volume** di drenato', 'Valutare i **sintomi** del paziente'],
      icon: 'Eye',
    },
  ],
  complications: [
    { label: 'Pneumotorace iatrogeno', sub: 'durante l’inserzione' },
    { label: 'Emotorace', sub: 'lesione di vasi intercostali' },
    { label: 'Infezione', sub: 'cellulite, ascesso' },
    { label: 'Occlusione del drenaggio', sub: 'coaguli o tessuto' },
    { label: 'Riaccensione del pneumotorace', sub: 'se il drenaggio è rimosso troppo presto' },
    { label: 'Dolore', sub: 'alla sede di inserzione' },
  ],
  nurseRole: [
    'Monitorare il **flusso** e il **volume** di drenato',
    'Valutare i **sintomi** respiratori del paziente',
    'Garantire la **sigillatura** del sistema',
    'Rimuovere il drenaggio solo su **ordine medico** dopo radiografia',
  ],
}

export default map
