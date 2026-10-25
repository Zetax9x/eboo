import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'prelievo-arterioso-per-emogasanalisi',
  chapter: 'procedure',
  title: 'Prelievo arterioso per emogasanalisi',
  subtitle: 'Tecnica di prelievo dal polso radiale o dall’arteria femorale',
  icon: 'Syringe',
  status: 'bozza',
  sources: [
    'INS — Infusion Therapy Standards of Practice, 9ª ed. (2024)',
    'Linee guida nazionali per il prelievo arterioso (Ministero della Salute)',
    'Testi di riferimento per infermieristica clinica (es. Potter & Perry)',
  ],
  materials: [
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Siringa 3–5 mL con ago 21–23G', icon: 'Syringe' },
    { label: 'Clorexidina 2% in alcol', icon: 'Droplets' },
    { label: 'Garze sterili', icon: 'Bandage' },
    { label: 'Tubo vuoto (senza anticoagulante)', icon: 'TestTube' },
    { label: 'Alcol 70% per la punta', icon: 'FlaskConical' },
    { label: 'Contenitore taglienti', icon: 'Trash2' },
    { label: 'Etichetta paziente', icon: 'Tag' },
  ],
  sites: {
    title: 'Sedi di prelievo',
    illustration: {
      id: 'prelievo-arterioso-siti',
      alt: 'Arteria radiale al polso e arteria femorale',
      prompt: 'wrist showing radial artery pulse point and groin area showing femoral artery pulse point',
      icon: 'Target',
    },
    items: [
      '**Radiale**: prima scelta (meno complicanze)',
      'Femorale: se radiale non accessibile',
      'Ulnare: alternativa (test di Allen prima)',
    ],
  },
  safety: [
    { text: 'Paziente identificato con **2 identificativi**', kind: 'ok' },
    { text: '**Test di Allen** obbligatorio prima di radiale/ulnare', kind: 'alert' },
    { text: '**Igiene delle mani**, tecnica asettica', kind: 'ok' },
    { text: 'Verificare **coagulopatie** o anticoagulanti', kind: 'warn' },
    { text: '**Mai** prelevare su arto con fistola AV o linfoedema', kind: 'no' },
    { text: 'Spiegare la procedura e ottenere **consenso**', kind: 'ok' },
  ],
  steps: [
    {
      title: 'Preparazione',
      items: ['Igiene delle mani, guanti sterili', 'Spiegare la procedura', 'Posizionare il paziente (braccio esteso, polso appoggiato)'],
      icon: 'Package',
    },
    {
      title: 'Test di Allen',
      items: ['Comprimere **radiale e ulnare** insieme', 'Rilasciare una arteria, verificare **riperfusione** < 5 s', 'Se negativo: **non prelevare** da quel lato'],
      icon: 'ListChecks',
    },
    {
      title: 'Palpazione',
      items: ['Palpare il **polso radiale** (o femorale)', 'Identificare il punto di massima pulsazione', 'Fissare l’arteria con le dita'],
      icon: 'ListChecks',
    },
    {
      title: 'Antisepsi',
      items: ['Clorexidina 2% in alcol 70%', 'Lasciare **asciugare** (≥ 30 s)', '**Non ripalpare** il sito'],
      icon: 'Droplets',
    },
    {
      title: 'Inserimento ago',
      items: ['Ago **21–23G**, angolo **30–45°**', 'Avanzare lentamente, sentire la **resistenza** dell’arteria', 'Osservare il **reflusso** di sangue arterioso (pulsatile)'],
      icon: 'Syringe',
    },
    {
      title: 'Raccolta campione',
      items: ['Raccogliere **2–3 mL** di sangue', '**Espellere l’aria** dalla siringa', 'Inserire l’ago nel **tubo vuoto** (senza anticoagulante)'],
      icon: 'TestTube',
    },
    {
      title: 'Compressione',
      items: ['Rimuovere l’ago', 'Comprimere il sito per **5–10 minuti**', 'Verificare l’assenza di **ematoma**'],
      icon: 'ListChecks',
    },
    {
      title: 'Documentazione',
      items: ['Data, ora, sede, volume', 'Smaltire i taglienti', 'Inviare il campione **immediatamente** al laboratorio'],
      icon: 'FileText',
    },
  ],
  complications: [
    { label: 'Ematoma', sub: 'compressione insufficiente' },
    { label: 'Emorragia', sub: 'coagulopatia o trauma' },
    { label: 'Ischemia', sub: 'trombosi arteriosa (raro)' },
    { label: 'Infezione', sub: 'tecnica non asettica' },
    { label: 'Vasovago', sub: 'svenimento, tachicardia' },
    { label: 'Nervo danneggiato', sub: 'dolore, parestesie' },
  ],
  nurseRole: [
    'Effettuare il **test di Allen** prima di ogni prelievo radiale',
    'Garantire la **compressione** adeguata post-prelievo',
    'Monitorare il sito per **ematoma** o ischemia',
    'Inviare il campione **entro 5 minuti** per evitare alterazioni',
  ],
}

export default map
