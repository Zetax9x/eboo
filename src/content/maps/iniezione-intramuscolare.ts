import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'iniezione-intramuscolare',
  chapter: 'procedure',
  title: 'Iniezione intramuscolare',
  subtitle: 'Somministrazione di farmaci nel tessuto muscolare: sedi, tecnica e sicurezza',
  icon: 'Syringe',
  status: 'bozza',
  sources: [
    'Ministero della Salute — Linee guida per la somministrazione di farmaci per via intramuscolare (2022)',
    'AIFA — Raccomandazioni per la somministrazione parenterale di farmaci',
    'OMS — Linee guida sulla sicurezza delle iniezioni (Safe Injection)',
  ],
  materials: [
    { label: 'Siringa sterile', icon: 'Syringe' },
    { label: 'Ago 21–23G', icon: 'Pipette' },
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Alcol 70%', icon: 'Droplets' },
    { label: 'Garza sterile', icon: 'Bandage' },
    { label: 'Contenitore taglienti', icon: 'Trash2' },
  ],
  sites: {
    title: 'Sedi anatomiche',
    illustration: {
      id: 'im-sedi',
      alt: 'Sedi per iniezione intramuscolare',
      prompt: 'anatomical diagram showing deltoid muscle on upper arm, vastus lateralis on thigh, and gluteal region on buttock',
      icon: 'Target',
    },
    items: [
      '**Vasto laterale**: prima scelta',
      '**Deltoide**: 2–3 dita sotto acromion',
      '**Gluteo**: rischio di lesione del nervo sciatico',
      'Evitare: cicatrici, lesioni, masse',
    ],
  },
  safety: [
    { text: 'Verificare **prescrizione** e allergie', kind: 'ok' },
    { text: 'Igiene delle mani e **guanti**', kind: 'ok' },
    {
      text: 'Volume max: **1 mL** (deltoide), **2–3 mL** (vasto laterale), **3–5 mL** (gluteo)',
      kind: 'warn',
    },
    { text: '**Mai** iniettare in vene o sottocute', kind: 'no' },
    { text: 'Smaltire ago in **contenitore taglienti**', kind: 'ok' },
  ],
  steps: [
    {
      title: 'Preparazione',
      items: ['Verificare farmaco e dose', 'Preparare siringa e ago'],
      icon: 'Package',
    },
    {
      title: 'Identificazione sede',
      items: ['Palpare il muscolo', 'Posizionare il paziente'],
      icon: 'User',
    },
    {
      title: 'Disinfezione',
      items: ['Alcol 70% con garza', 'Lasciare asciugare'],
      icon: 'Droplets',
    },
    {
      title: 'Inserimento ago',
      items: ['Angolo **90°** rispetto alla cute', 'Inserire con movimento rapido'],
      icon: 'Syringe',
    },
    {
      title: 'Aspirazione',
      items: [
        '(Facoltativa) Tirare lo stantuffo per verificare assenza di sangue',
        'Se presente sangue, non iniettare e segnalare',
      ],
      icon: 'Wind',
    },
    {
      title: 'Iniezione',
      items: ['Iniettare lentamente (≈ 1 mL/10‑15 s)', 'Velocità costante'],
      icon: 'Syringe',
    },
    {
      title: 'Rimozione ago',
      items: ['Rimuovere con movimento rapido', 'Comprimere con garza'],
      icon: 'Syringe',
    },
    {
      title: 'Documentazione',
      items: ['Farmaco, dose, ora, sede', 'Smaltire rifiuti'],
      icon: 'FileText',
    },
  ],
  complications: [
    { label: 'Ematoma', sub: 'puntura di vaso' },
    { label: 'Infezione', sub: 'sepsi locale' },
    { label: 'Lesione nervosa', sub: 'nervo sciatico' },
    { label: 'Reazione allergica', sub: 'orticaria, anafilassi' },
    { label: 'Necrosi tissutale', sub: 'volume eccessivo' },
  ],
  nurseRole: [
    'Valutare la **sede** e lo stato del paziente',
    'Monitorare **reazioni avverse** post‑iniezione',
    'Educare il paziente alla **sicurezza**',
    'Documentare ogni **dettaglio** della procedura',
  ],
}

export default map
