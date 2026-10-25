import type { ProcedureMap } from '../../book/types'

const step = (id: string, alt: string, prompt: string) => ({ id: `pulsossimetria-${id}`, alt, prompt, icon: 'Activity' as const })

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'pulsossimetria',
  chapter: 'procedure',
  title: 'Pulsossimetria',
  subtitle: 'Misurazione della saturazione periferica di ossigeno (SpO2)',
  icon: 'Activity',
  status: 'bozza',
  sources: [
    'BTS — Guideline for oxygen use in healthcare and emergency settings (2017)',
    'Royal College of Physicians — National Early Warning Score (NEWS) 2 (2017)',
    'FDA — Pulse oximeters: draft guidance on accuracy and skin pigmentation (2025)',
  ],
  materials: [
    { label: 'Pulsossimetro', icon: 'Activity' },
    { label: 'Sensore a clip o adesivo', icon: 'Hand' },
    { label: 'Sensore pediatrico', icon: 'Baby' },
    { label: 'Solvente per smalto', icon: 'Droplets' },
    { label: 'Salviette disinfettanti', icon: 'ShieldCheck' },
    { label: 'Orologio', icon: 'Clock' },
    { label: 'Monitor (se continuo)', icon: 'Monitor' },
    { label: 'Scheda parametri', icon: 'ClipboardList' },
  ],
  sites: {
    title: 'Sede del sensore',
    illustration: {
      id: 'pulsossimetria-sede',
      alt: 'Sensore a clip sul dito indice',
      prompt: 'finger pulse oximeter clip on the index finger of a relaxed adult hand, red light glowing through the fingertip',
      icon: 'Target',
    },
    items: [
      '**Dito** (indice, medio): sede abituale',
      '**Lobo** dell’orecchio o **fronte** se mani fredde',
      'Neonato: **mano destra** (preduttale) e piede',
    ],
  },
  safety: [
    { text: 'SpO2 **non misura la CO2**: non esclude ipoventilazione', kind: 'warn' },
    { text: 'Intossicazione da **CO**: SpO2 falsamente normale → EGA', kind: 'alert' },
    { text: 'Su **pelle scura** può sovrastimare la saturazione', kind: 'warn' },
    { text: 'Non fidarsi di valori senza **onda** regolare', kind: 'no' },
    { text: 'Leggere sempre con **FR, FC** e clinica', kind: 'ok' },
  ],
  steps: [
    {
      title: 'Valutazione',
      items: ['Identificare il paziente', 'Osservare colorito, **FR**, sforzo respiratorio', 'Annotare O2 in corso (**L/min**)'],
      illustration: step('valutazione', 'Osservazione del paziente', 'nurse observing the breathing of an adult patient lying in a hospital bed'),
    },
    {
      title: 'Preparazione',
      items: ['Igiene delle mani', 'Disinfettare il sensore', 'Spiegare: **nessun dolore**'],
      illustration: step('preparazione', 'Sensore pulito', 'nurse wiping a reusable finger oximeter sensor with a disinfectant wipe'),
    },
    {
      title: 'Scelta del sito',
      items: ['Cute **calda**, ben perfusa', 'Rimuovere **smalto** e unghie finte', 'Evitare l’arto col **bracciale** della PA'],
      illustration: step('sito', 'Dito caldo e pulito', 'clean fingertip without nail polish, hand resting on a blanket'),
    },
    {
      title: 'Applicazione',
      items: ['Emettitore e ricevitore **allineati**', 'Non stringere il sensore', 'Mano ferma, a riposo'],
      illustration: step('applicazione', 'Sensore applicato', 'finger oximeter sensor placed with light emitter on the nail and detector on the fingertip pad'),
    },
    {
      title: 'Lettura',
      items: ['Attendere un valore **stabile**', 'Onda pletismografica **regolare**', 'Confrontare la FC col **polso** radiale'],
      illustration: step('lettura', 'Display con onda', 'pulse oximeter monitor screen showing a regular plethysmographic waveform'),
    },
    {
      title: 'Interpretazione',
      items: ['Target **94–98%** (adulto)', '**88–92%** se rischio ipercapnia (es. BPCO)', 'Variazione improvvisa: **rivalutare**'],
      illustration: step('interpretazione', 'Valori di saturazione', 'nurse looking at oxygen saturation reading next to a patient with a nasal cannula'),
    },
    {
      title: 'Monitoraggio continuo',
      items: ['Impostare gli **allarmi**', 'Ruotare il sito (rischio **lesioni**)', 'Controllare la cute del dito'],
      illustration: step('continuo', 'Monitor con allarmi', 'bedside monitor with SpO2 and heart rate values and an adhesive oximeter sensor on a finger'),
    },
    {
      title: 'Documentare',
      items: ['SpO2 con **FiO2 / L/min** di O2', 'In aria ambiente o in O2', 'Inserire nel **NEWS2**'],
      illustration: step('documentare', 'Registrazione dei parametri', 'nurse writing vital signs on a chart beside the patient bed'),
    },
  ],
  complications: [
    { label: 'Lettura bassa errata', sub: 'freddo, shock, movimento, smalto' },
    { label: 'Lettura alta errata', sub: 'CO, cute pigmentata' },
    { label: 'Lesione da pressione', sub: 'sensore a lungo sullo stesso dito' },
    { label: 'Ustione', sub: 'sensore incompatibile, RM' },
    { label: 'Falsi allarmi', sub: 'tremori, luce ambientale intensa' },
    { label: 'Falsa sicurezza', sub: 'ipercapnia con SpO2 normale in O2' },
  ],
  nurseRole: [
    'SpO2 **< 92%** di nuova insorgenza: valutare e avvisare',
    'Metaemoglobinemia: SpO2 bloccata intorno a **85%**',
    'Dubbio sul valore: **EGA** arteriosa',
    'In O2: valutare sempre anche **FR** e coscienza',
    'Educare all’uso del saturimetro domiciliare',
    'Valori **stabili e affidabili** prima di titolare l’O2',
  ],
}

export default map
