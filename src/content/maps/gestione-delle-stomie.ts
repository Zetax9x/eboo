import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'gestione-delle-stomie',
  chapter: 'procedure',
  title: 'Gestione delle stomie',
  subtitle: 'Cura della cute peristomiale, cambio del dispositivo e prevenzione delle complicanze',
  icon: 'Bandage',
  status: 'bozza',
  sources: [
    'WOCN — Clinical Practice Guidelines: Ostomy Care (2023)',
    'Ministero della Salute – Linee guida per la cura delle stomie intestinali (2020)',
    'Società Italiana di Cura delle Ferite (SICF) – Guida alla gestione delle stomie (2021)',
  ],
  materials: [
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Soluzione detergente', icon: 'Droplets' },
    { label: 'Garze sterili', icon: 'Bandage' },
    { label: 'Barriera cutanea', icon: 'ShieldCheck' },
    { label: 'Sistema di raccolta', icon: 'CircleDot' },
    { label: 'Misuratore stomia', icon: 'Ruler' },
    { label: 'Forbici sterili', icon: 'Scissors' },
    { label: 'Contenitore rifiuti', icon: 'Trash2' },
  ],
  sites: {
    title: 'Sedi delle stomie',
    illustration: {
      id: 'stomie-sedi',
      alt: 'Sedi addominali delle stomie intestinali',
      prompt: 'human abdomen with three circular stoma sites marked: upper right (ileostomy), lower left (sigmoid colostomy), and upper left (transverse colostomy)',
      icon: 'Target',
    },
    items: [
      '**Ileostomia**: quadrante superiore destro',
      '**Colostomia sigmoidea**: quadrante inferiore sinistro',
      '**Colostomia trasversa**: quadrante superiore sinistro',
      'Evitare cicatrici, pieghe cutanee e irritazioni',
    ],
  },
  safety: [
    { text: 'Paziente identificato con **2 identificativi**', kind: 'ok' },
    { text: '**Igiene delle mani** prima e dopo', kind: 'ok' },
    { text: 'Valutare la **cute peristomiale** a ogni cambio', kind: 'warn' },
    { text: '**Non toccare** la mucosa stomale', kind: 'no' },
    { text: 'Verificare la **dimensione** del foro', kind: 'warn' },
  ],
  steps: [
    {
      title: 'Preparazione',
      items: ['Spiegare la procedura', 'Preparare il materiale', 'Posizionare il paziente'],
      icon: 'Package',
    },
    {
      title: 'Rimozione vecchio',
      items: ['Svuotare la sacca', 'Rimuovere delicatamente', 'Osservare la cute'],
      icon: 'Scissors',
    },
    {
      title: 'Detersione',
      items: ['Acqua tiepida o soluzione', 'Asciugare tamponando', 'Valutare la mucosa'],
      icon: 'ListChecks',
    },
    {
      title: 'Misurazione',
      items: ['Usare il misuratore', 'Foro **1–2 cm** più grande', 'Tagliare il nuovo dispositivo'],
      icon: 'ListChecks',
    },
    {
      title: 'Applicazione',
      items: ['Barriera cutanea (se serve)', 'Applicare il dispositivo', 'Premere per 1 minuto'],
      icon: 'ListChecks',
    },
    {
      title: 'Documentazione',
      items: ['Aspetto della mucosa', 'Caratteristiche secrezioni', 'Condizioni della cute'],
      icon: 'FileText',
    },
  ],
  complications: [
    { label: 'Dermite peristomiale', sub: 'irritazione, arrossamento, macerazione' },
    { label: 'Retrazione', sub: 'stoma rientrata, perdita di aderenza' },
    { label: 'Prolapso', sub: 'stoma protrusa, rischio ischemia' },
    { label: 'Stenosi', sub: 'restringimento del lume, ostruzione' },
    { label: 'Ernia parastomale', sub: 'tumefazione, dolore' },
    { label: 'Ostruzione', sub: 'distensione, nausea, vomito' },
  ],
  nurseRole: [
    'Valutare la **cute** e la **mucosa** a ogni cambio',
    'Insegnare al paziente l’**autocura**',
    'Monitorare le **secrezioni** (colore, quantità)',
    'Prevenire le **complicanze** cutanee',
  ],
}

export default map
