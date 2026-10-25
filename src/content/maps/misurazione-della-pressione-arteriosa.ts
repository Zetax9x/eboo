import type { ProcedureMap } from '../../book/types'

const step = (id: string, alt: string, prompt: string) => ({ id: `pressione-${id}`, alt, prompt, icon: 'Gauge' as const })

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'misurazione-della-pressione-arteriosa',
  chapter: 'procedure',
  title: 'Pressione arteriosa',
  subtitle: 'Misurazione corretta con metodo auscultatorio e oscillometrico',
  icon: 'Gauge',
  status: 'bozza',
  sources: [
    'ESH — Guidelines for the management of arterial hypertension (2023)',
    'ESC — Guidelines for the management of elevated blood pressure and hypertension (2024)',
    'ESH — Practice guidelines for office and out-of-office blood pressure measurement (2021)',
  ],
  materials: [
    { label: 'Apparecchio validato', icon: 'Gauge' },
    { label: 'Bracciali di più misure', icon: 'Ruler' },
    { label: 'Fonendoscopio', icon: 'Stethoscope' },
    { label: 'Metro a nastro', icon: 'Ruler' },
    { label: 'Salviette disinfettanti', icon: 'Droplets' },
    { label: 'Sedia con schienale', icon: 'User' },
    { label: 'Orologio', icon: 'Clock' },
    { label: 'Scheda parametri', icon: 'ClipboardList' },
  ],
  sites: {
    title: 'Sede di misurazione',
    illustration: {
      id: 'pressione-sede',
      alt: 'Bracciale sul braccio e fonendoscopio sull’arteria brachiale',
      prompt: 'upper arm with a blood pressure cuff, stethoscope diaphragm placed over the brachial artery at the elbow crease',
      icon: 'Target',
    },
    items: [
      '**Braccio** (a. brachiale): sede standard',
      'Coscia (a. poplitea) se braccio non utilizzabile',
      '**Evitare** il braccio con fistola AV, linfedema, infusione, plegia',
    ],
  },
  safety: [
    { text: 'Bracciale **piccolo** → sovrastima; **grande** → sottostima', kind: 'warn' },
    { text: 'Paziente e operatore **non parlano** durante la misura', kind: 'ok' },
    { text: 'Stima palpatoria per evitare il **gap auscultatorio**', kind: 'warn' },
    { text: '**Mai** sul braccio con fistola artero-venosa', kind: 'no' },
    { text: 'PAS **< 90** o **≥ 180** mmHg: avvisare subito il medico', kind: 'alert' },
  ],
  steps: [
    {
      title: 'Preparazione',
      items: ['**3–5 min** di riposo, seduto', 'No caffè, fumo, sforzi nei **30 min** prima', 'Vescica vuota, ambiente tranquillo'],
      illustration: step('riposo', 'Paziente seduto a riposo', 'adult patient sitting relaxed on a chair next to a table in a quiet clinic room'),
    },
    {
      title: 'Posizione',
      items: ['Schiena appoggiata, **gambe non accavallate**', 'Piedi a terra', 'Braccio sostenuto **a livello del cuore**'],
      illustration: step('posizione', 'Braccio al livello del cuore', 'seated patient with the arm resting on a table at heart level, feet flat on the floor'),
    },
    {
      title: 'Bracciale',
      items: ['Misura in base alla **circonferenza** del braccio', 'Bordo **2–3 cm** sopra la piega del gomito', 'Camera d’aria centrata sull’arteria'],
      illustration: step('bracciale', 'Applicazione del bracciale', 'deflated blood pressure cuff wrapped snugly around a bare upper arm, above the elbow crease'),
    },
    {
      title: 'Stima palpatoria',
      items: ['Palpare il **polso radiale**', 'Gonfiare fino alla sua scomparsa', 'Gonfiare poi **+30 mmHg** oltre'],
      illustration: step('palpazione', 'Palpazione del polso radiale', 'fingers palpating the radial pulse at the wrist while the cuff is inflated with a bulb'),
    },
    {
      title: 'Auscultazione',
      items: ['Membrana sull’**arteria brachiale**', 'Non sotto il bracciale', 'Sgonfiare a **2–3 mmHg/s**'],
      illustration: step('auscultazione', 'Membrana sull’arteria', 'stethoscope diaphragm on the inner elbow below the cuff, hand slowly releasing the valve of the bulb'),
    },
    {
      title: 'Lettura',
      items: ['**I tono** di Korotkoff = sistolica', '**V tono** (scomparsa) = diastolica', 'Leggere all’altezza degli occhi'],
      illustration: step('lettura', 'Lettura del manometro', 'close-up of an aneroid manometer dial with the needle descending'),
    },
    {
      title: 'Ripetere',
      items: ['**2–3 misure** a 1–2 min di distanza', 'Registrare la **media** delle ultime 2', 'Prima visita: **entrambe le braccia**'],
      illustration: step('ripetere', 'Misure ripetute', 'automatic upper-arm blood pressure monitor on a table with the cuff on the patient arm'),
    },
    {
      title: 'Ortostatismo e registrazione',
      items: ['In piedi: misura a **1 e 3 min**', 'Calo PAS **≥ 20** o PAD **≥ 10** = ipotensione ortostatica', 'Registrare valori, braccio, posizione'],
      illustration: step('ortostatismo', 'Misura in piedi', 'patient standing up beside a bed while a nurse measures blood pressure on the arm'),
    },
  ],
  complications: [
    { label: 'Sovrastima', sub: 'braccio sotto il cuore o non sostenuto' },
    { label: 'Sottostima', sub: 'braccio sopra il cuore, sgonfiaggio rapido' },
    { label: 'Gap auscultatorio', sub: 'toni assenti tra PAS e PAD' },
    { label: 'Effetto camice bianco', sub: 'valori alti solo in ambulatorio' },
    { label: 'Petecchie, dolore', sub: 'gonfiaggi ripetuti e prolungati' },
    { label: 'Aritmie (es. FA)', sub: 'misure variabili: ripeterle' },
  ],
  nurseRole: [
    'Ipertensione in ambulatorio: **≥ 140/90** mmHg',
    'A domicilio: soglia **≥ 135/85** mmHg',
    'Braccio con valori più alti: usarlo come **riferimento**',
    'Educare all’**automisurazione** con apparecchio validato',
    'Inserire i valori nello score **NEWS2**',
  ],
}

export default map
