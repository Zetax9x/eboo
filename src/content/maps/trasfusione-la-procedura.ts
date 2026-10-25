import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'trasfusione-la-procedura',
  chapter: 'procedure',
  title: 'Trasfusione: la procedura',
  subtitle: 'Somministrazione di emocomponenti: verifica, avvio, monitoraggio',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'SITR — Società Italiana di Trasfusioni e Terapia Cellulare, Linee guida (ultima edizione)',
    'AIFA — Raccomandazioni per la sicurezza trasfusionale',
    'Ministero della Salute — Raccomandazioni per la gestione della trasfusione',
  ],
  materials: [
    { label: 'Set trasfusionale', icon: 'Package' },
    { label: 'Tubo con filtro', icon: 'Cable' },
    { label: 'NaCl 0,9%', icon: 'Droplets' },
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Cartella trasfusionale', icon: 'ClipboardList' },
    { label: 'Termometro', icon: 'Thermometer' },
    { label: 'Tensivoglia', icon: 'Gauge' },
    { label: 'SpO2', icon: 'Activity' },
  ],
  sites: {
    title: 'Accesso venoso',
    illustration: {
      id: 'trasfusione-accesso',
      alt: 'Catetere venoso periferico calibro 18G o 16G',
      prompt: 'peripheral IV cannula in the forearm, large bore needle, blue vein visible under the skin',
      icon: 'Target',
    },
    items: [
      'Preferire **CVP 18G o 16G**',
      'Evitare vene fragili o flebite',
      'Urgenza: **CVC** o accesso centrale',
    ],
  },
  safety: [
    { text: 'Verifica **duplice** con paziente presente', kind: 'ok' },
    { text: 'Controllare **compatibilità** ABO e Rh', kind: 'ok' },
    { text: 'Verificare **scadenza** e integrità sacchetto', kind: 'warn' },
    { text: '**Mai** aggiungere farmaci al sangue', kind: 'no' },
    { text: 'Usare **solo NaCl 0,9%** per lavaggi', kind: 'warn' },
    { text: 'Monitorare **ogni 15 min** primi 30 min', kind: 'alert' },
  ],
  steps: [
    {
      title: 'Verifica pre-trasfusione',
      items: [
        'Identificare paziente (nome, cognome, data nascita)',
        'Verificare **compatibilità** ematica (ABO, Rh)',
        'Controllare **scadenza** e integrità sacchetto',
      ],
      icon: 'Eye',
    },
    {
      title: 'Preparazione set',
      items: [
        'Collegare **tubo trasfusionale** al sacchetto',
        'Verificare **filtro** (170–200 µm)',
        'Riempire tubo con **NaCl 0,9%**',
      ],
      icon: 'Package',
    },
    {
      title: 'Avvio trasfusione',
      items: [
        'Aprire rubinetto lentamente',
        'Iniziare a **velocità bassa** (2–3 mL/min)',
        'Monitorare paziente per **15 minuti**',
      ],
      icon: 'Syringe',
    },
    {
      title: 'Monitoraggio',
      items: [
        'Misurare **PA, FC, T, SpO2** ogni 15 min primi 30 min',
        'Poi ogni **30–60 min** fino al termine',
        'Osservare segni di **reazione trasfusionale**',
      ],
      icon: 'Eye',
    },
    {
      title: 'Gestione reazioni',
      items: [
        'Sospendere **immediatamente** trasfusione',
        'Mantenere accesso con **NaCl 0,9%**',
        'Notificare **medico** e **centro trasfusionale**',
      ],
      icon: 'ListChecks',
    },
    {
      title: 'Termine e documentazione',
      items: [
        'Lavare accesso con **NaCl 0,9%**',
        'Rimuovere set trasfusionale',
        'Registrare **ora inizio/fine**, volume trasfuso',
      ],
      icon: 'FileText',
    },
  ],
  complications: [
    { label: 'Reazione emolitica', sub: 'febbre, dolore lombare, emoglobinuria' },
    { label: 'Reazione allergica', sub: 'orticaria, prurito, angioedema' },
    { label: 'Reazione febbrile', sub: 'febbre, brividi, tachicardia' },
    { label: 'TRALI', sub: 'edema polmonare, ipossia' },
    { label: 'TAI', sub: 'sovraccarico volumico, dispnea' },
    { label: 'Infezione', sub: 'batteriemia, sepsi' },
  ],
  nurseRole: [
    'Verificare **duplice identificazione** prima di ogni trasfusione',
    'Monitorare **parametri vitali** secondo protocollo',
    'Riconoscere e gestire **reazioni trasfusionali**',
    'Documentare **ogni aspetto** della trasfusione',
  ],
}

export default map
