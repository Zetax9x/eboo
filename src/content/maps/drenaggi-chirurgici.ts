import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'drenaggi-chirurgici',
  chapter: 'procedure',
  title: 'Drenaggi chirurgici',
  subtitle: 'Tipi, gestione, monitoraggio e rimozione dei drenaggi post-operatori',
  icon: 'Droplets',
  status: 'bozza',
  sources: [
    'SIR — Società Italiana di Chirurgia, Linee guida sulla gestione dei drenaggi chirurgici',
    'NICE — Surgical site infections: prevention and treatment (2023)',
    'AORN — Guidelines for Management of Surgical Drains',
  ],
  materials: [
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Medicazione sterile', icon: 'Sticker' },
    { label: 'Siringa per lavaggio', icon: 'Syringe' },
    { label: 'Contenitore raccolta', icon: 'Droplets' },
    { label: 'Pinze emostatiche', icon: 'Scissors' },
    { label: 'Registro drenaggi', icon: 'ClipboardList' },
    { label: 'Soluzione fisiologica', icon: 'FlaskConical' },
    { label: 'Benda elastica', icon: 'Bandage' },
  ],
  sites: {
    title: 'Sedi e tipi di drenaggio',
    illustration: {
      id: 'drenaggi-sedi',
      alt: 'Posizionamento dei drenaggi in sede addominale e toracica',
      prompt: 'surgical drains placed in abdominal and thoracic cavities, showing different types of tubing',
      icon: 'Target',
    },
    items: [
      '**Drenaggio passivo**: Penrose, Redon (a vuoto)',
      '**Drenaggio attivo**: con aspirazione continua o intermittente',
      '**Sedi comuni**: addome, torace, spazio retroperitoneale, ferite chirurgiche',
    ],
  },
  safety: [
    { text: 'Verificare **integrità** del sistema (niente perdite)', kind: 'ok' },
    { text: 'Mani **igienizzate** prima e dopo la manipolazione', kind: 'ok' },
    { text: '**Non comprimere** il tubo per sbloccarlo', kind: 'no' },
    { text: 'Contenitore sempre **sotto il livello** del sito', kind: 'warn' },
    { text: 'Segnalare **dolore improvviso** o sanguinamento', kind: 'alert' },
  ],
  steps: [
    {
      title: 'Valutazione iniziale',
      items: ['Tipo di drenaggio e sede', 'Quantità e caratteri del secreto', 'Integrità della medicazione'],
      icon: 'Eye',
    },
    {
      title: 'Monitoraggio del secreto',
      items: ['**Volume** ogni turno (registrare)', 'Colore: seroso, ematico, purulento', 'Odore e consistenza'],
      icon: 'Droplets',
    },
    {
      title: 'Manutenzione del sistema',
      items: ['Verificare **aspirazione** (se attivo)', 'Svuotare il contenitore se pieno', 'Cambiare la medicazione se sporca'],
      icon: 'RefreshCw',
    },
    {
      title: 'Prevenzione delle complicanze',
      items: ['Fissare bene il tubo alla cute', 'Evitare **torsioni** o piegature', 'Mantenere il contenitore basso'],
      icon: 'ShieldCheck',
    },
    {
      title: 'Rimozione',
      items: ['Solo su **prescrizione medica**', 'Solitamente < 100 mL/die per 24-48h', 'Disinfettare il sito dopo la rimozione'],
      icon: 'Scissors',
    },
    {
      title: 'Documentazione',
      items: ['Data e ora di ogni valutazione', 'Volume e caratteri del secreto', 'Eventuali complicanze o interventi'],
      icon: 'FileText',
    },
  ],
  complications: [
    { label: 'Occlusione', sub: 'tubo piegato o coagulo' },
    { label: 'Infezione', sub: 'eritema, pus, febbre' },
    { label: 'Sanguinamento', sub: 'secreto ematico abbondante' },
    { label: 'Fistola', sub: 'persistenza del drenaggio' },
    { label: 'Dolore', sub: 'irritazione o trazione' },
    { label: 'Ritrazione', sub: 'il tubo si sposta' },
  ],
  nurseRole: [
    'Monitorare **volume e caratteri** del secreto',
    'Verificare la **funzionalità** del sistema',
    'Prevenire **infezioni** e complicanze',
    'Segnalare al medico **alterazioni** o segni d’allarme',
  ],
}

export default map
