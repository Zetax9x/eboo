import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'trasferimento-letto-carrozzina',
  chapter: 'procedure',
  title: 'Trasferimento letto-carrozzina',
  subtitle: 'Tecnica di sicurezza per la mobilità assistita',
  icon: 'User',
  status: 'bozza',
  sources: [
    'FNOPI — Codice Deontologico dell’Infermiere (2014)',
    'Ministero della Salute — Raccomandazioni per la sicurezza del paziente',
    'Linee guida nazionali per la prevenzione e la gestione delle lesioni da pressione (2019) – Ministero della Salute',
  ],
  materials: [
    { label: 'Carrozzina a rotelle', icon: 'User' },
    { label: 'Cintura di trasferimento', icon: 'Cable' },
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Dispositivo di sollevamento', icon: 'ArrowUp' },
    { label: 'Tappetino antiscivolo', icon: 'Layers' },
    { label: 'Cuscino di protezione', icon: 'Box' },
  ],
  sites: {
    title: 'Posizionamento carrozzina',
    illustration: {
      id: 'trasferimento-sito',
      alt: 'Carrozzina accanto al letto',
      prompt: 'empty wheelchair placed alongside a hospital bed at a slight angle, brakes on, footrests swung aside, seen from above at three quarters',
      icon: 'Target',
    },
    items: [
      'Angolazione **45°** rispetto al letto',
      'Freni **bloccati**',
      'Poggiapiedi **ribaltati**',
      'Lato del paziente **più debole**',
    ],
  },
  safety: [
    { text: 'Valutare **capacità di collaborazione**', kind: 'ok' },
    { text: 'Verificare **stabilità** carrozzina', kind: 'ok' },
    { text: 'Usare **sollevamento meccanico** se non collaborante', kind: 'ok' },
    { text: '**Mai trascinare** il paziente', kind: 'no' },
    { text: 'Chiedere **aiuto** se paziente pesante', kind: 'warn' },
  ],
  steps: [
    {
      title: 'Preparazione',
      items: [
        'Spiegare la procedura',
        'Bloccare freni, ribaltare poggiapiedi',
        'Posizionare a 45°',
      ],
      icon: 'ClipboardCheck',
    },
    {
      title: 'Posizionamento paziente',
      items: [
        'Seduto sul **bordo del letto**',
        'Piedi **appoggiati** a terra',
        'Braccia **incrociate**',
      ],
      icon: 'User',
    },
    {
      title: 'Assistenza infermieristica',
      items: [
        'Posizione **bassa** (ginocchia flesse)',
        'Mani sotto **ascelle** o cintura',
        'Comando: “Alzo tra 3, 2, 1”',
      ],
      icon: 'Hand',
    },
    {
      title: 'Sollevamento e rotazione',
      items: [
        'Sollevare con le **gambe**',
        'Ruotare verso la carrozzina',
        'Abbassare **lentamente**',
      ],
      icon: 'RefreshCw',
    },
    {
      title: 'Sistemazione finale',
      items: [
        'Paziente **centrato** sulla seduta',
        'Poggiapiedi **abbassati**',
        'Cintura di **sicurezza** allacciata',
      ],
      icon: 'CircleCheck',
    },
    {
      title: 'Documentazione',
      items: [
        'Data e **ora** del trasferimento',
        'Livello di **collaborazione**',
        'Eventuali **difficoltà** o dolori',
      ],
      icon: 'FileText',
    },
  ],
  complications: [
    { label: 'Caduta', sub: 'perdita di equilibrio' },
    { label: 'Lesioni muscolo-scheletriche', sub: 'dolori lombari' },
    { label: 'Lesioni da pressione', sub: 'ulcere da pressione' },
    { label: 'Ansia e stress', sub: 'paura di cadere' },
  ],
  nurseRole: [
    'Valutare **capacità funzionale**',
    'Usare **sollevamento meccanico** se necessario',
    'Rispettare **dignità** e privacy',
    'Promuovere **partecipazione attiva**',
  ],
}

export default map
