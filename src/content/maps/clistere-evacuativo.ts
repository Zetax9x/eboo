import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'clistere-evacuativo',
  chapter: 'procedure',
  title: 'Clistere evacuativo',
  subtitle: 'Tecnica di somministrazione, sicurezza e assistenza infermieristica',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'FNOPI — Codice Deontologico dell’Infermiere (2014)',
    'Mandelli P. et al. — Trattato di Infermieristica Clinica (2023)',
    'Linee guida nazionali sulla gestione della stipsi (Ministero della Salute)',
  ],
  materials: [
    { label: 'Cannula da clistere', icon: 'Syringe' },
    { label: 'Soluzione fisiologica', icon: 'Droplets' },
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Lubrificante idrosolubile', icon: 'Droplet' },
    { label: 'Bacinella / vasino', icon: 'Box' },
    { label: 'Coperta impermeabile', icon: 'Layers' },
    { label: 'Sacco raccoglitore', icon: 'Trash2' },
    { label: 'Carta igienica', icon: 'Sticker' },
  ],
  sites: {
    title: 'Posizione del paziente',
    illustration: {
      id: 'clistere-posizione',
      alt: 'Paziente in posizione laterale sinistra',
      prompt: 'patient lying on left side with knees slightly flexed towards chest',
      icon: 'User',
    },
    items: [
      '**Laterale sinistra**: posizione standard',
      'Ginocchia flesse verso l’addome',
      'Proteggere il letto con **coperta impermeabile**',
    ],
  },
  safety: [
    { text: 'Verificare **prescrizione** e consenso', kind: 'ok' },
    { text: 'Controllare **controindicazioni** (ernia, emorroidi)', kind: 'warn' },
    { text: 'Rispettare **privacy** e dignità', kind: 'ok' },
    { text: '**Non forzare** l’inserzione', kind: 'no' },
    { text: 'Soluzione a **37 °C**', kind: 'warn' },
  ],
  steps: [
    {
      title: 'Preparazione',
      items: [
        'Spiegare la procedura, **consenso**',
        'Igiene mani, **guanti**',
        'Posizionare in **laterale sinistra**',
      ],
      icon: 'ClipboardCheck',
    },
    {
      title: 'Riempimento',
      items: [
        'Sacco con **500–1000 mL**',
        'Espellere **aria** dal tubo',
        'Lubrificare la **cannula**',
      ],
      icon: 'Droplets',
    },
    {
      title: 'Insertione',
      items: [
        'Inserire **7–10 cm** (adulto)',
        'Movimento **dolce e rotatorio**',
        '**Non forzare** se resistenza',
      ],
      icon: 'Syringe',
    },
    {
      title: 'Somministrazione',
      items: [
        'Sacco a **30–40 cm** sopra l’ano',
        'Flusso **lento**',
        'Interrompere per **dolore**',
      ],
      icon: 'ArrowDown',
    },
    {
      title: 'Rimozione',
      items: [
        'Chiudere il **tappo**',
        'Rimuovere **lentamente**',
        'Mantenere posizione **5–10 min**',
      ],
      icon: 'ArrowUp',
    },
    {
      title: 'Evacuazione',
      items: [
        'Aiutare al **water** o al vasino',
        'Valutare **colore, consistenza**',
        'Offrire **acqua**',
      ],
      icon: 'User',
    },
    {
      title: 'Documentazione',
      items: [
        'Registrare **ora, volume**',
        'Descrivere **caratteristiche** feci',
        'Smaltire **materiale**',
      ],
      icon: 'FileText',
    },
  ],
  complications: [
    { label: 'Dolore addominale', sub: 'crampi, tensione' },
    { label: 'Nausea / vomito', sub: 'stimolazione vagale' },
    { label: 'Perforazione', sub: 'rara, grave' },
    { label: 'Disidratazione', sub: 'perdita liquidi' },
    { label: 'Diarrea', sub: 'eccesso volume' },
  ],
  nurseRole: [
    'Valutare **indicazioni** e controindicazioni',
    'Garantire **privacy** e dignità',
    'Monitorare **reazioni**',
    'Educare alla **prevenzione** stipsi',
  ],
}

export default map
