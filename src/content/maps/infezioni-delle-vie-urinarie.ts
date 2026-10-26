import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'infezioni-delle-vie-urinarie',
  chapter: 'patologie',
  title: 'Infezioni delle vie urinarie',
  subtitle: 'Cistite, pielonefrite, urosepsi: diagnosi, terapia e assistenza infermieristica',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'IDSA — Clinical Practice Guideline for the Management of Uncomplicated and Complicated Urinary Tract Infections (2011, aggiornamento)',
    'ESCMID — Guidelines for the Management of Urinary Tract Infections',
    'Linee guida nazionali per la prevenzione e il trattamento delle infezioni associate all’assistenza sanitaria (Ministero della Salute)',
  ],
  definition:
    'Infezione batterica del tratto urinario, più spesso causata da **Escherichia coli**, che può colpire vescica (cistite) o reni (pielonefrite).',
  illustration: {
    id: 'ivu-anatomia-tratto-urinario',
    alt: 'Anatomia del tratto urinario con evidenziazione di vescica e reni',
    prompt: 'anatomical diagram of the urinary tract showing kidneys, ureters, bladder and urethra, highlighting infection sites in red',
    icon: 'Droplet',
  },
  types: [
    { name: 'Cistite semplice', text: 'Infezione della vescica senza coinvolgimento renale. Più comune nelle donne.' },
    { name: 'Pielonefrite', text: 'Infezione del tessuto renale. Sintomi sistemici, febbre, dolore lombare.' },
    { name: 'IVU complicata', text: 'In presenza di anomalie anatomiche, catetere, gravidanza o immunosoppressione.' },
    { name: 'Urosepsi', text: 'Infezione urinaria con risposta sistemica sproporzionata. Emergenza medica.' },
  ],
  sections: [
    {
      title: 'Fattori di rischio',
      icon: 'ShieldAlert',
      accent: 'purple',
      items: [
        '**Sesso femminile**: uretra più corta, vicinanza all’ano',
        '**Cateterismo urinario**: rischio maggiore dopo 7 giorni di catetere',
        'Stasi urinaria: calcoli, ostruzioni, prostatica',
        'Diabete mellito, immunosoppressione',
        'Rapporti sessuali frequenti, uso di spermicidi',
        'Gravidanza: compressione ureteri, stasi',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Thermometer',
      accent: 'orange',
      items: [
        '**Disuria**, frequenza, urgenza (cistite)',
        'Dolore suprapubico, ematuria',
        '**Febbre > 38 °C**, brividi, dolore lombare (pielonefrite)',
        'Nausea, vomito, malessere generale',
        'Confusione, ipotensione (anziani, urosepsi)',
        'Segni di shock settico: tachicardia, tachipnea, alterazione coscienza',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**Esame urine**: leucociti, batteri, nitriti positivi',
        '**Urocultura**: > 10⁵ UFC/mL (cistite), > 10⁴ UFC/mL (pielonefrite)',
        'Emocromo: leucocitosi, PCR elevata',
        'Ecografia renale: esclusione ostruzioni, ascessi',
        'TC addome: se sospetta complicanza o dolore atipico',
        'Emocoltura: se febbre alta o segni di sepsi',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Cistite semplice**: nitrofurantoina (5 giorni), fosfomicina (dose singola), trimetoprim‑sulfametossazolo (3 giorni)',
        '**Pielonefrite**: cefalosporine, fluoroquinoloni, aminoglicosidi (7–14 giorni)',
        '**Urosepsi**: antibiotici ad ampio spettro EV, fluidoterapia, supporto emodinamico',
        'Rimozione catetere urinario se presente',
        'Analgesici, antipiretici, idratazione abbondante',
        'Terapia mirata dopo antibiogramma',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Urosepsi**: shock settico, multi-organ failure',
        'Ascesso renale o perirenale',
        'Cisti renale infetta',
        'Insufficienza renale acuta',
        'Recidiva: > 3 episodi/anno o > 2 in 6 mesi',
        'Infezione cronica del tessuto renale',
      ],
    },
    {
      title: 'Prevenzione',
      icon: 'ShieldCheck',
      accent: 'teal',
      items: [
        'Idratazione adeguata: > 1,5–2 L/giorno',
        'Svuotamento vescicale regolare, non trattenere urina',
        'Igiene perineale corretta, da anteriore a posteriore',
        'Rimozione precoce del catetere urinario',
        'Evitare spermicidi, usare lubrificanti non spermicidi',
        'Profilassi antibiotica: solo su indicazione medica',
      ],
    },
  ],
  nursing: [
    'Raccogliere campione di urine **a mezzo getto** o da catetere, evitare contaminazione',
    'Monitorare temperatura, frequenza cardiaca, pressione arteriosa, stato di coscienza',
    'Somministrare antibiotici secondo schema, verificare allergie e interazioni',
    'Educare al riconoscimento precoce dei sintomi e all’importanza della terapia completa',
    'Valutare dolore, fornire analgesici, posizionamento confortevole',
    'Documentare diuresi, caratteristiche urine, risposta alla terapia',
  ],
  redFlags: [
    '**Febbre > 39 °C** con brividi, dolore lombare intenso: sospetta pielonefrite, avvisare medico',
    '**Ipotensione, tachicardia, confusione**: segni di urosepsi, attivazione protocollo sepsi',
    'Paziente con catetere e segni di infezione: **valutare rimozione** e raccogliere coltura prima antibiotico',
  ],
}

export default map
