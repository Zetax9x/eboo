import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'iniezione-sottocutanea',
  chapter: 'procedure',
  title: 'Iniezione sottocutanea',
  subtitle: 'Somministrazione di farmaci nel tessuto adiposo: tecnica, siti e sicurezza',
  icon: 'Syringe',
  status: 'bozza',
  sources: [
    'INS — Infusion Therapy Standards of Practice, 9ª ed. (2024)',
    'Ministero della Salute — Raccomandazioni per la somministrazione di farmaci',
    'FNOPI — Codice Deontologico dell’Infermiere (2019)',
  ],
  materials: [
    { label: 'Siringa 1–5 mL', icon: 'Syringe' },
    { label: 'Ago 25–27 G', icon: 'Cable' },
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Clorexidina 2%', icon: 'Droplets' },
    { label: 'Garza sterile', icon: 'Bandage' },
    { label: 'Contenitore taglienti', icon: 'Trash2' },
    { label: 'Farmaco prescritto', icon: 'Pill' },
    { label: 'Registro iniezioni', icon: 'ClipboardList' },
  ],
  sites: {
    title: 'Sedi anatomiche',
    illustration: {
      id: 'sc-sedi',
      alt: 'Sedi per iniezione sottocutanea',
      prompt: 'human torso showing abdominal area, upper outer arm, and thigh with soft tissue layers visible',
      icon: 'Target',
    },
    items: [
      '**Addome**: 5 cm dall’ombelico, ruotare',
      '**Braccio**: faccia esterna deltoido',
      '**Coscia**: faccia anterolaterale',
      '**Evitare**: cicatrici, cute lesa, ombelico',
    ],
  },
  safety: [
    { text: 'Verificare **prescrizione** e paziente', kind: 'ok' },
    { text: 'Controllare **scadenza** farmaco', kind: 'ok' },
    { text: 'Indagare **allergie**', kind: 'warn' },
    { text: '**Mai** in cute lesa o infiammata', kind: 'no' },
    { text: 'Rispettare **rotazione** siti', kind: 'warn' },
  ],
  steps: [
    {
      title: 'Preparazione',
      items: ['Igiene mani, guanti', 'Verificare farmaco/dose', 'Preparare siringa'],
      icon: 'Package',
    },
    {
      title: 'Scelta sede',
      items: ['Ruotare rispetto dose prec.', 'Cute integra, non tesa'],
      icon: 'ListChecks',
    },
    {
      title: 'Antisepsi',
      items: ['Clorexidina 2% in alcol', 'Lasciare asciugare **completamente**'],
      icon: 'Droplets',
    },
    {
      title: 'Inserimento',
      items: ['Pinzare cute (se sottile)', 'Angolo **45°** o **90°**', 'Inserire rapido'],
      icon: 'Syringe',
    },
    {
      title: 'Somministrazione',
      items: ['Iniettare lentamente (10–15 s)', 'Osservare reazioni locali'],
      icon: 'Syringe',
    },
    {
      title: 'Rimozione',
      items: ['Estrarre ago parallelo', 'Comprimere con garza', 'Smaltire taglienti'],
      icon: 'Scissors',
    },
    {
      title: 'Documentazione',
      items: ['Data, ora, sito, dose', 'Reazioni avverse', 'Firmare registro'],
      icon: 'FileText',
    },
  ],
  complications: [
    { label: 'Lipodistrofia', sub: 'cambiamenti tessuto adiposo' },
    { label: 'Reazione locale', sub: 'eritema, prurito' },
    { label: 'Ematoma', sub: 'puntura vaso' },
    { label: 'Infezione', sub: 'arrossamento, pus' },
    { label: 'Anafilassi', sub: 'rara, grave' },
  ],
  nurseRole: [
    'Educare al **rotazione** siti',
    'Monitorare **reazioni avverse**',
    'Verificare **tecnica** auto-somministrazione',
    'Segnalare **lipodistrofia** al medico',
  ],
}

export default map
