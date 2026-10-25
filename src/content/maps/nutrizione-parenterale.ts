import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'nutrizione-parenterale',
  chapter: 'procedure',
  title: 'Nutrizione parenterale',
  subtitle: 'Somministrazione di soluzioni iperotoniche per via centrale: sicurezza e monitoraggio',
  icon: 'Droplets',
  status: 'bozza',
  sources: [
    'ESPEN — Guidelines on Parenteral Nutrition: Adult (2019)',
    'INS — Infusion Therapy Standards of Practice, 9ª ed. (2024)',
    'AIFA — Linee guida per la somministrazione di farmaci e soluzioni',
  ],
  materials: [
    { label: 'Busta NP', icon: 'Package' },
    { label: 'Set sterile', icon: 'Cable' },
    { label: 'Filtro 1,2 µm', icon: 'CircleDot' },
    { label: 'Guanti sterili', icon: 'Hand' },
    { label: 'Clorexidina', icon: 'Droplets' },
    { label: 'Medicazione', icon: 'Sticker' },
    { label: 'NaCl 0,9%', icon: 'Pipette' },
    { label: 'Glucometro', icon: 'Scale' },
  ],
  sites: {
    title: 'Accesso venoso',
    illustration: {
      id: 'np-accesso',
      alt: 'Catetere venoso centrale',
      prompt: 'central venous catheter inserted in the internal jugular vein',
      icon: 'Target',
    },
    items: [
      '**CVC** o **PICC**: obbligatori per NP',
      '**CVP**: **vietato** (osmolarità > 900 mOsm/L)',
      'Verificare **posizione** punta (RX/ECG)',
    ],
  },
  safety: [
    { text: 'NP **solo** per via centrale', kind: 'alert' },
    { text: 'Verificare **integrità** busta', kind: 'ok' },
    { text: 'Usare **filtro** 1,2 µm', kind: 'ok' },
    { text: '**Mai** diluire o aggiungere farmaci', kind: 'no' },
    { text: 'Glicemia ogni **4–6 ore**', kind: 'warn' },
  ],
  steps: [
    {
      title: 'Verifica',
      items: ['Confrontare prescrizione', 'Controllare **scadenza**'],
      icon: 'Eye',
    },
    {
      title: 'Preparazione',
      items: ['Guanti sterili', 'Collegare set con **filtro**'],
      icon: 'Package',
    },
    {
      title: 'Connessione',
      items: ['Disinfettare **luer-lock**', 'Collegare al CVC'],
      icon: 'ListChecks',
    },
    {
      title: 'Avvio',
      items: ['Velocità **bassa** (25–50 mL/h)', 'Aumentare gradualmente'],
      icon: 'Syringe',
    },
    {
      title: 'Monitoraggio',
      items: ['**Glicemia** ogni 4–6 h', 'Peso corporeo giornaliero'],
      icon: 'Eye',
    },
    {
      title: 'Sospensione',
      items: ['Ridurre **gradualmente**', 'Lavare con NaCl 0,9%'],
      icon: 'ListChecks',
    },
  ],
  complications: [
    { label: 'Iperglicemia', sub: 'glicemia > 250 mg/dL' },
    { label: 'Ipoglicemia', sub: 'da interruzione brusca' },
    { label: 'Infezione', sub: 'febbre, arrossamento sede' },
    { label: 'Squilibrio elettrolitico', sub: 'ipokaliemia, ipofosfatemia' },
  ],
  nurseRole: [
    'Monitorare **glicemia** ed elettroliti',
    'Valutare **segni di infezione**',
    'Garantire **continuità** infusione',
    'Educare alla **sicurezza** accesso',
  ],
}

export default map
