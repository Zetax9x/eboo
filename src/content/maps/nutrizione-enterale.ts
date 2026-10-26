import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'nutrizione-enterale',
  chapter: 'procedure',
  title: 'Nutrizione enterale',
  subtitle: 'Somministrazione di dieta liquida tramite sonda: sicurezza, velocità e monitoraggio',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'SIE — Linee guida per la nutrizione clinica (2020)',
    'ESPEN — Guidelines on Clinical Nutrition in the ICU (2019)',
    'Ministero della Salute — Raccomandazioni per la prevenzione delle infezioni correlate all’assistenza',
  ],
  materials: [
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Sonda nasogastrica', icon: 'Droplet' },
    { label: 'Siringa 20 mL', icon: 'Syringe' },
    { label: 'Soluzione dietetica', icon: 'FlaskConical' },
    { label: 'Acqua sterile', icon: 'Droplet' },
    { label: 'Medicazione trasparente', icon: 'Sticker' },
    { label: 'Sacchetto di drenaggio', icon: 'Box' },
    { label: 'Pompa di infusione', icon: 'Monitor' },
  ],
  sites: {
    title: 'Sedi di inserimento',
    illustration: {
      id: 'nutrizione-enterale-sedi',
      alt: 'Vie di accesso enterale',
      prompt: 'side view of a human head and neck showing a tube entering the nose and going down the esophagus into the stomach, another tube entering the abdomen directly into the stomach',
      icon: 'Target',
    },
    items: [
      '**Nasogastrica**: uso breve',
      '**Nasoenterica**: bypassa lo stomaco',
      '**Gastrostomia**: uso medio-lungo',
      '**Jejunostomia**: accesso intestinale',
    ],
  },
  safety: [
    { text: 'Verificare la **posizione** della sonda', kind: 'alert' },
    { text: 'Testa del letto a **30–45°**', kind: 'ok' },
    { text: 'Controllare il **residuo gastrico**', kind: 'warn' },
    { text: 'Mai in **posizione supina**', kind: 'no' },
    { text: 'Lavare la sonda con **acqua**', kind: 'ok' },
  ],
  steps: [
    {
      title: 'Verifica posizione',
      items: ['Aspirare e misurare il **pH** (< 5,5)', 'Oppure: radiografia o analisi gas'],
      icon: 'User',
    },
    {
      title: 'Preparazione',
      items: ['Lavare le mani, guanti', 'Preparare soluzione e acqua', 'Collegare pompa o sistema'],
      icon: 'Package',
    },
    {
      title: 'Posizione paziente',
      items: ['Testa del letto a **30–45°**', 'Verificare assenza di vomito', 'Spiegare la procedura'],
      icon: 'User',
    },
    {
      title: 'Somministrazione',
      items: ['Velocità lenta (**20–50 mL/h**)', 'Monitorare **sintomi**', 'Aumentare gradualmente'],
      icon: 'Syringe',
    },
    {
      title: 'Monitoraggio',
      items: ['Residuo gastrico ogni **4–6 h**', 'Valutare **parametri vitali**', 'Registrare assunzione'],
      icon: 'Eye',
    },
    {
      title: 'Terminazione',
      items: ['Lavare con **20–30 mL di acqua**', 'Chiudere e fissare sonda', 'Riabbassare gradualmente'],
      icon: 'ListChecks',
    },
  ],
  complications: [
    { label: 'Aspirazione polmonare', sub: 'rischio in posizione supina' },
    { label: 'Vomito / rigurgito', sub: 'segnale di intolleranza' },
    { label: 'Diarrea', sub: 'velocità eccessiva' },
    { label: 'Occlusione sonda', sub: 'farmaci non frantumati' },
    { label: 'Dislocazione', sub: 'spostamento della sonda' },
    { label: 'Infezione', sub: 'contaminazione circuito' },
  ],
  nurseRole: [
    'Verificare **posizione** sonda',
    'Monitorare **sintomi** intolleranza',
    'Lavare sonda con **acqua**',
    'Registrare assunzione e reazioni',
  ],
}

export default map
