import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'iniezione-intradermica',
  chapter: 'procedure',
  title: 'Iniezione intradermica',
  subtitle: 'Tecnica per test allergologici e vaccinazioni (es. BCG)',
  icon: 'Syringe',
  status: 'bozza',
  sources: [
    'Ministero della Salute — Piano Nazionale Vaccinazioni (2023)',
    'CDC — Guidelines for Immunization Practices',
    'OMS — Linee guida per la gestione delle reazioni avverse post‑vaccinali',
  ],
  materials: [
    { label: 'Siringa 1 mL', icon: 'Syringe' },
    { label: 'Ago 25–27G (1/2")', icon: 'Pipette' },
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Alcool 70%', icon: 'Droplets' },
    { label: 'Garza sterile', icon: 'Bandage' },
    { label: 'Farmaco/Test', icon: 'FlaskConical' },
    { label: 'Contenitore taglienti', icon: 'Trash2' },
    { label: 'Pennarelli colorati', icon: 'Tag' },
  ],
  sites: {
    title: 'Sedi anatomiche',
    illustration: {
      id: 'id-inj-siti',
      alt: 'Avambraccio interno e scapola',
      prompt: 'inner forearm skin and upper back scapula area showing injection sites',
      icon: 'Target',
    },
    items: [
      '**Avambraccio interno**: prima scelta per test cutanei',
      '**Scapola**: alternativa per vaccini (es. BCG)',
      'Cute liscia, **senza lesioni** o cicatrici',
    ],
  },
  safety: [
    { text: 'Verificare **allergie** al principio attivo', kind: 'warn' },
    { text: 'Ago **corto e sottile** (25–27G)', kind: 'ok' },
    { text: 'Volume iniettato: **0,1 mL** (max 0,2 mL)', kind: 'ok' },
    { text: '**Mai** aspirare prima di iniettare', kind: 'no' },
    { text: 'Angolo di inserzione: **10°** (quasi parallelo)', kind: 'ok' },
  ],
  steps: [
    {
      title: 'Preparazione',
      items: ['Igiene delle mani, guanti', 'Preparare la siringa (0,1 mL)', 'Spiegare la procedura'],
      icon: 'Package',
    },
    {
      title: 'Antisepsi',
      items: ['Disinfettare con **alcol 70%**', 'Lasciare asciugare completamente', 'Tendere la cute con l’altra mano'],
      icon: 'Droplets',
    },
    {
      title: 'Inserimento',
      items: ['Bisello **verso l’alto**', 'Angolo **10°** rispetto alla cute', 'Inserire solo la **punta** dell’ago'],
      icon: 'Syringe',
    },
    {
      title: 'Iniezione',
      items: ['Iniettare lentamente **0,1 mL**', 'Osservare la formazione del **papula**', 'Nessuna aspirazione'],
      icon: 'Syringe',
    },
    {
      title: 'Rimozione',
      items: ['Estrarre l’ago **rapidamente**', 'Non comprimere il sito', 'Smaltire l’ago nel contenitore'],
      icon: 'Scissors',
    },
    {
      title: 'Monitoraggio',
      items: ['Attendere **15–20 min**', 'Osservare segni di **anafilassi**', 'Documentare la reazione'],
      icon: 'Eye',
    },
  ],
  complications: [
    { label: 'Reazione allergica', sub: 'orticaria, angioedema, anafilassi' },
    { label: 'Necrosi cutanea', sub: 'in caso di iniezione troppo profonda' },
    { label: 'Ematoma', sub: 'raro, puntura di capillare' },
    { label: 'Infezione locale', sub: 'arrossamento, pus' },
    { label: 'Reazione tardiva', sub: 'indurimento o vescicole (BCG)' },
  ],
  nurseRole: [
    'Valutare la **papula**: deve essere visibile e palpabile',
    'Monitorare i segni vitali per **30 min** post‑iniezione',
    'Documentare **sito, volume, ora** e reazione',
    'Educare il paziente sui **segnali d’allarme**',
  ],
}

export default map
