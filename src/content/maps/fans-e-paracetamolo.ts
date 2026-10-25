import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'fans-e-paracetamolo',
  chapter: 'farmacologia',
  title: 'FANS e paracetamolo',
  subtitle: 'Analgesici e antipiretici: dosaggi, controindicazioni e interazioni',
  icon: 'Pill',
  status: 'bozza',
  sources: [
    'AIFA — Farmaci antinfiammatori non steroidei e paracetamolo: scheda di sicurezza',
    'OMS — Linee guida per la terapia del dolore (2018)',
    'Ministero della Salute — Raccomandazioni per l’uso sicuro degli analgesici',
  ],
  intro: 'I FANS e il paracetamolo sono i farmaci di prima scelta per il dolore lieve-moderato. Conoscere dosi, controindicazioni e interazioni è fondamentale per la sicurezza del paziente.',
  tableTitle: 'Confronto tra FANS e paracetamolo',
  tableIcon: 'Pill',
  columns: ['Caratteristica', 'Paracetamolo', 'FANS (es. ibuprofene, naprossene)'],
  widths: [1.5, 2, 2],
  rows: [
    ['Meccanismo d’azione', 'Inibizione centrale della COX-3', 'Inibizione periferica della COX-1 e COX-2'],
    ['Effetto antinfiammatorio', 'Assente o minimo', 'Presente'],
    ['Effetto antiaggregante', 'Assente', 'Presente (aspirina) o reversibile (altri FANS)'],
    ['Rischio gastrointestinale', 'Basso', 'Elevato (ulcere, sanguinamenti)'],
    ['Rischio renale', 'Basso', 'Elevato (soprattutto in IRC)'],
    ['Dose max giornaliera adulto', '4 g (2 g in epatopatia)', 'Variabile: 1,2–3,2 g (ibuprofene)'],
    ['Interazioni principali', 'Warfarin (aumenta rischio emorragico)', 'Diuretici, ACE-inibitori, litio, metotrexato'],
    ['Controindicazioni assolute', 'Grave insufficienza epatica', 'Ulcera attiva, grave insufficienza renale, asma da FANS'],
    ['Uso in gravidanza', 'Sicuro in tutte le fasi (con cautela)', 'Evitare nel 3° trimestre (chiusura dotto arterioso)'],
    ['Uso in allattamento', 'Sicuro', 'Sicuro (ibuprofene)'],
  ],
  notes: [
    {
      title: 'Dosaggi standard adulto',
      icon: 'Calculator',
      accent: 'blue',
      items: [
        'Paracetamolo: **500–1000 mg** ogni 6–8 h, max **4 g/die**',
        'Ibuprofene: **400–600 mg** ogni 8 h, max **2,4 g/die**',
        'Naprossene: **500 mg** ogni 12 h, max **1,5 g/die**',
        'Aspirina (antiaggregante): **100 mg** al giorno',
        'In epatopatia: paracetamolo max **2 g/die**',
      ],
    },
    {
      title: 'Effetti collaterali e rischi',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        'FANS: **ulcera gastrica**, sanguinamento GI, ritenzione idrica',
        'Paracetamolo: **epatotossicità** in caso di sovradosaggio',
        'FANS: **insufficienza renale** acuta, soprattutto in disidratazione',
        'Aspirina: **sindrome di Reye** nei bambini con virus',
        'Tutti: **reazioni allergiche** (orticaria, angioedema)',
      ],
    },
    {
      title: 'Precauzioni infermieristiche',
      icon: 'ClipboardCheck',
      accent: 'green',
      items: [
        'Verificare **allergie** e storia di ulcera gastrica prima della somministrazione',
        'Monitorare **funzione renale** (creatinina, eGFR) in pazienti a rischio',
        'Somministrare FANS **a stomaco pieno** per ridurre il rischio gastrico',
        'Evitare **doppia somministrazione** di FANS (es. ibuprofene + naprossene)',
        'Informare il paziente di **non associare** FANS con anticoagulanti senza prescrizione',
      ],
    },
  ],
  keyPoints: [
    'Il paracetamolo è **primo scelta** per il dolore lieve-moderato e la febbre',
    'I FANS hanno effetto **antinfiammatorio** ma maggior rischio GI e renale',
    'In caso di **sovradosaggio di paracetamolo**: N-acetilcisteina entro 8–10 h',
  ],
}

export default map
