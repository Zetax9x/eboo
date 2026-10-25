import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'glicemia-capillare',
  chapter: 'procedure',
  title: 'Glicemia capillare',
  subtitle: 'Misurazione con glucometro: tecnica, fonti di errore, valori da segnalare',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'ADA — Standards of Care in Diabetes 2025 (sez. 6 Glycemic Goals and Hypoglycemia; sez. 16 Diabetes Care in the Hospital)',
    'OMS — WHO Guidelines on Drawing Blood: Best Practices in Phlebotomy (2010), capitolo sul prelievo capillare',
    'SID-AMD — Standard italiani per la cura del diabete mellito (ultima edizione)',
  ],
  materials: [
    { label: 'Glucometro', icon: 'Gauge' },
    { label: 'Strisce reattive', icon: 'Sticker' },
    { label: 'Lancetta monouso di sicurezza', icon: 'Pipette' },
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Garze o cotone', icon: 'Bandage' },
    { label: 'Alcol 70% (se previsto)', icon: 'Droplets' },
    { label: 'Contenitore taglienti', icon: 'Trash2' },
    { label: 'Scheda glicemica', icon: 'ClipboardList' },
  ],
  sites: {
    title: 'Sede della puntura',
    illustration: {
      id: 'glicemia-capillare-dito',
      alt: 'Polpastrello del dito con una goccia di sangue sul lato',
      prompt: 'close-up of an adult hand with the fingertip of the ring finger seen from the side, a single small round drop of blood on the side of the fingertip',
      icon: 'Target',
    },
    items: [
      '**Lato del polpastrello** di medio o anulare',
      'Non il centro (più dolore); **ruotare** le dita',
      'Neonato: **tallone**, margine mediale o laterale',
    ],
  },
  safety: [
    { text: 'Paziente identificato con **2 identificativi**', kind: 'ok' },
    { text: 'Glucometro con **controllo di qualità** eseguito', kind: 'ok' },
    { text: 'Strisce **non scadute**, conservate chiuse', kind: 'warn' },
    { text: '**Pungidito mai condiviso** tra pazienti', kind: 'no' },
    { text: 'Shock o ipoperfusione: valore poco attendibile, **prelievo venoso**', kind: 'alert' },
  ],
  steps: [
    {
      title: 'Preparazione',
      items: ['Igiene delle mani, guanti', 'Spiegare la procedura', 'Inserire la striscia'],
      icon: 'Package',
    },
    {
      title: 'Mani del paziente',
      items: ['Lavare con **acqua tiepida**, asciugare', 'Mano in basso per favorire il flusso'],
      icon: 'Hand',
    },
    {
      title: 'Antisepsi',
      items: ['Alcol solo se previsto', 'Lasciarlo **asciugare** del tutto'],
      icon: 'Droplets',
    },
    {
      title: 'Puntura',
      items: ['Lancetta sul **lato** del dito', '**Non spremere** con forza', 'Prima goccia: secondo protocollo'],
      icon: 'Pipette',
    },
    {
      title: 'Lettura',
      items: ['Goccia a contatto con la striscia', 'Attendere il **valore**'],
      icon: 'Gauge',
    },
    {
      title: 'Fine',
      items: ['Comprimere con garza', 'Lancetta nei **taglienti**', 'Registrare valore, **ora**, pasto'],
      icon: 'ClipboardList',
    },
  ],
  complications: [
    { label: 'Falso valore alto', sub: 'zucchero sulle dita' },
    { label: 'Falso valore basso', sub: 'goccia spremuta, diluita' },
    { label: 'Errore di lettura', sub: 'alcol non asciutto, striscia scaduta' },
    { label: 'Dolore, callosità', sub: 'sempre lo stesso dito' },
    { label: 'Infezione', sub: 'locale, rara' },
    { label: 'Valori HI / LO', sub: 'fuori scala: prelievo venoso' },
  ],
  nurseRole: [
    '**< 70 mg/dL**: ipoglicemia, **15 g** di glucosio e ricontrollo dopo **15 min**',
    '**< 54 mg/dL**: ipoglicemia clinicamente significativa, avvisare il medico',
    'Obiettivo in ospedale (paziente in insulina): **140–180 mg/dL**',
    'Valori alti persistenti: avvisare il medico, **chetoni** nel tipo 1',
  ],
}

export default map
