import type { ProcedureMap } from '../../book/types'

const step = (id: string, alt: string, prompt: string) => ({ id: `trach-${id}`, alt, prompt, icon: 'Wind' as const })

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'gestione-della-tracheostomia',
  chapter: 'procedure',
  title: 'Gestione della tracheostomia',
  subtitle: 'Cannula, cuffia, medicazione dello stoma ed emergenze',
  icon: 'Wind',
  status: 'bozza',
  sources: [
    'National Tracheostomy Safety Project (NTSP) — Comprehensive Tracheostomy Care, Wiley-Blackwell',
    'McGrath B.A. et al. — Multidisciplinary guidelines for the management of tracheostomy and laryngectomy airway emergencies, Anaesthesia 2012',
    'Saiani L., Brugnolli A. — Trattato di cure infermieristiche, Idelson-Gnocchi',
  ],
  materials: [
    { label: 'Guanti, DPI', icon: 'Hand' },
    { label: 'NaCl 0,9% sterile', icon: 'Droplets' },
    { label: 'Garze sterili / metallina', icon: 'Bandage' },
    { label: 'Fettuccia di fissaggio', icon: 'Cable' },
    { label: 'Controcannula pulita', icon: 'RefreshCw' },
    { label: 'Manometro cuffia', icon: 'Gauge' },
    { label: 'Aspiratore pronto', icon: 'Wind' },
    { label: 'Kit di emergenza', icon: 'Siren' },
  ],
  sites: {
    title: 'La cannula',
    illustration: {
      id: 'trach-cannula',
      alt: 'Cannula tracheostomica cuffiata',
      prompt: 'cuffed tracheostomy tube with inner cannula, neck flange and pilot balloon, side view',
      icon: 'Wind',
    },
    items: [
      '**Esterna** + **controcannula** (interna) rimovibile',
      '**Cuffiata**: protegge da inalazione, permette la VM',
      '**Fenestrata**: con valvola fonatoria favorisce la voce',
    ],
  },
  safety: [
    { text: 'Al letto: **cannula di riserva** stessa misura e **una più piccola**', kind: 'ok' },
    { text: 'Aspiratore funzionante, **O₂**, dilatatore', kind: 'ok' },
    { text: 'Pressione cuffia **20–30 cmH₂O**', kind: 'warn' },
    { text: '**Valvola fonatoria** solo a cuffia **sgonfia**', kind: 'no' },
    { text: 'Primi giorni: fissaggio da **2 operatori**', kind: 'warn' },
    { text: 'Dispnea, cannula ostruita: **emergenza**', kind: 'alert' },
  ],
  steps: [
    {
      title: 'Valutare',
      items: ['Respiro, SpO₂, **pervietà**', 'Stoma: cute, secrezioni, odore', 'Spiegare: comunicazione con **lavagna**'],
      illustration: step('valutare', 'Paziente tracheostomizzato', 'adult patient with a tracheostomy tube sitting upright in a hospital bed'),
    },
    {
      title: 'Aspirare se serve',
      items: ['Tecnica **sterile**', 'Sondino **≤ 50%** del lume', 'Prima della medicazione'],
      illustration: step('aspirare', 'Aspirazione dalla cannula', 'suction catheter inserted into a tracheostomy tube'),
    },
    {
      title: 'Controcannula',
      items: ['Rimuovere e **sostituire** o pulire', 'Frequenza: secondo **secrezioni** e protocollo', 'Reinserirla **subito** dopo la pulizia'],
      illustration: step('controcannula', 'Rimozione della controcannula', 'gloved hands removing the inner cannula from a tracheostomy tube'),
    },
    {
      title: 'Detersione stoma',
      items: ['Garza con **NaCl 0,9%**', 'Dall’interno **verso l’esterno**', 'Asciugare tamponando'],
      illustration: step('stoma', 'Pulizia dello stoma', 'cleaning the skin around a tracheostomy stoma with a sterile gauze'),
    },
    {
      title: 'Medicazione',
      items: ['Garza **pre-tagliata** (metallina)', '**Non** tagliare garze comuni (fili)', 'Cambiare se umida o sporca'],
      illustration: step('medicazione', 'Garza a Y sotto la flangia', 'pre-cut keyhole dressing placed under a tracheostomy flange'),
    },
    {
      title: 'Fissaggio',
      items: ['Fettuccia: passa **1 dito**', 'Tenere la flangia durante il cambio', 'Controllare cute del collo'],
      illustration: step('fissaggio', 'Fettuccia attorno al collo', 'tracheostomy tube holder around the neck with one finger under the strap'),
    },
    {
      title: 'Cuffia',
      items: ['Misurare con **manometro**', 'Almeno **ogni turno**', 'Aspirare sopra cuffia se presente'],
      illustration: step('cuffia', 'Manometro sul palloncino pilota', 'cuff pressure manometer connected to the pilot balloon of a tracheostomy tube'),
    },
    {
      title: 'Umidificare e registrare',
      items: ['**HME** (naso artificiale) o umidificatore', 'Stato dello stoma, secrezioni', 'Pressione cuffia'],
      illustration: step('umidificare', 'Filtro HME sulla cannula', 'heat and moisture exchanger filter attached to a tracheostomy tube'),
    },
  ],
  complications: [
    { label: 'Ostruzione', sub: 'tappo di muco: controcannula' },
    { label: 'Decannulazione accidentale', sub: 'stoma recente: emergenza' },
    { label: 'Emorragia', sub: 'stoma o arteria anonima' },
    { label: 'Enfisema sottocutaneo', sub: 'crepitio al collo' },
    { label: 'Infezione dello stoma', sub: 'arrossamento, pus' },
    { label: 'Lesioni da pressione', sub: 'flangia, fettuccia, cuffia' },
  ],
  nurseRole: [
    'Ostruzione: **togliere controcannula**, aspirare, sgonfiare la cuffia',
    'Decannulazione: **chiamare aiuto**, O₂ a viso **e** stoma',
    'Cambio cannula: personale **esperto**, il primo di norma dopo **5–7 giorni**',
    'Educare paziente e caregiver alla gestione **a domicilio**',
  ],
}

export default map
