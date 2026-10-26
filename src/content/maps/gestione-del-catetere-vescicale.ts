import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'gestione-del-catetere-vescicale',
  chapter: 'procedure',
  title: 'Gestione del catetere vescicale',
  subtitle: 'Monitoraggio, igiene, prevenzione delle infezioni e rimozione',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'SIAARTI — Linee guida per la prevenzione delle infezioni del tratto urinario (2023)',
    'IDSA — Guidelines for the Diagnosis, Treatment, Prevention, and Risk Assessment of Catheter-Associated Urinary Tract Infections in the Acute Care Hospital (2022)',
    'FNOPI — Codice Deontologico e standard assistenziali',
  ],
  materials: [
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Soluzione detergente', icon: 'Droplets' },
    { label: 'Garze sterili', icon: 'Bandage' },
    { label: 'Borsa di raccolta', icon: 'Box' },
    { label: 'Tubicino di collegamento', icon: 'Cable' },
    { label: 'Siringa per lavaggio', icon: 'Pipette' },
    { label: 'NaCl 0,9%', icon: 'FlaskConical' },
    { label: 'Raccolta urinaria', icon: 'TestTube' },
  ],
  sites: {
    title: 'Posizionamento e sedi',
    illustration: {
      id: 'catetere-vescicale-sede',
      alt: 'Catetere vescicale con sacca di raccolta',
      prompt: 'urinary catheter tube connected to a drainage bag, showing the connection point and the bag hanging below the level of the bladder',
      icon: 'Droplet',
    },
    items: [
      '**Uretra**: sede di inserzione',
      'Sacca di raccolta **sotto il livello della vescica**',
      'Tubo **senza pieghe** o torsioni',
    ],
  },
  safety: [
    { text: 'Mani lavate e **guanti monouso**', kind: 'ok' },
    { text: 'Sacca di raccolta **mai sopra** la vescica', kind: 'warn' },
    { text: '**Non toccare** la parte sterile del catetere', kind: 'no' },
    { text: 'Verificare la **tenuta** del sistema', kind: 'ok' },
    { text: 'Rispettare la **privacy** del paziente', kind: 'ok' },
  ],
  steps: [
    {
      title: 'Valutazione iniziale',
      items: [
        'Verificare la **necessità** del catetere',
        'Controllare la **tenuta** del sistema',
        'Valutare la **posizione** della sacca',
      ],
      icon: 'ClipboardCheck',
    },
    {
      title: 'Igiene del sito',
      items: [
        'Lavare la **meato uretrale** con soluzione detergente',
        'Usare **garze sterili**',
        'Asciugare senza sfregare',
      ],
      icon: 'Droplets',
    },
    {
      title: 'Monitoraggio della diuresi',
      items: [
        'Registrare **volume e colore** delle urine',
        'Valutare la **frequenza** dello svuotamento',
        'Segnalare **anomalie** (sangue, torbidità)',
      ],
      icon: 'Gauge',
    },
    {
      title: 'Prevenzione delle infezioni',
      items: [
        'Mantenere il sistema **chiuso**',
        'Evitare **disconnessioni** non necessarie',
        'Cambiare la sacca **solo se necessario**',
      ],
      icon: 'ShieldCheck',
    },
    {
      title: 'Gestione della sacca',
      items: [
        'Svuotare la sacca **ogni 8-12 ore** o quando piena a 2/3',
        'Usare un **contenitore sterile**',
        'Registrare il **volume** raccolto',
      ],
      icon: 'Box',
    },
    {
      title: 'Rimozione del catetere',
      items: [
        'Deflare il **palloncino** con siringa',
        'Rimuovere il catetere **lentamente**',
        'Istruire il paziente sulla **diuresi** successiva',
      ],
      icon: 'ArrowDown',
    },
  ],
  complications: [
    { label: 'Infezione del tratto urinario', sub: 'febbre, bruciore, urine torbide' },
    { label: 'Occlusione del catetere', sub: 'assenza di diuresi, dolore' },
    { label: 'Trauma uretrale', sub: 'sangue nelle urine, dolore' },
    { label: 'Calcolosi vescicale', sub: 'raro, in cateteri a lungo termine' },
    { label: 'Incontinenza da urgenza', sub: 'dopo la rimozione' },
  ],
  nurseRole: [
    'Valutare la **necessità** del catetere a ogni turno',
    'Mantenere il sistema **chiuso** e integro',
    'Educare il paziente alla **prevenzione** delle infezioni',
    'Documentare **volume, colore e consistenza** delle urine',
  ],
}

export default map
