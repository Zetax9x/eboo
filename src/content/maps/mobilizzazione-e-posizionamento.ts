import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'mobilizzazione-e-posizionamento',
  chapter: 'fondamenti',
  title: 'Mobilizzazione e posizionamento',
  subtitle: 'Tecniche di sicurezza, prevenzione delle complicanze e assistenza',
  icon: 'Activity',
  status: 'bozza',
  sources: [
    'NPIAP/EPUAP/PPPIA — International Guideline: Prevention and Treatment of Pressure Ulcers/Injuries, 3rd ed. (2019)',
    'NICE — Pressure ulcers: prevention and management (CG179, 2014)',
    'Codice Deontologico delle Professioni Infermieristiche (FNOPI, 2019) e DM 739/1994',
  ],
  intro:
    'La **mobilizzazione** attiva o assistita e il **posizionamento** corretto sono interventi infermieristici fondamentali per mantenere la **funzionalità**, prevenire le **lesioni da pressione** e garantire la **sicurezza** del paziente.',
  illustration: {
    id: 'mob-pos-infermiere',
    alt: 'Infermiere che aiuta un paziente a cambiare posizione sul letto',
    prompt: 'nurse assisting an elderly patient to reposition in a hospital bed, safe handling technique',
    icon: 'Hand',
  },
  columns: 3,
  blocks: [
    {
      title: 'Principi di base',
      icon: 'ShieldCheck',
      accent: 'blue',
      items: [
        'Rispettare la **dignità** e la **privacy** della persona',
        'Valutare la **tolleranza** al dolore e alla posizione',
        'Usare la **meccanica corporea** corretta per l’operatore',
        'Coinvolgere il paziente se possibile (**autonomia**)',
        'Verificare la **stabilità** della posizione raggiunta',
        'Documentare le **ore** di mobilizzazione',
      ],
    },
    {
      title: 'Posizioni standard',
      icon: 'User',
      accent: 'green',
      items: [
        '**Supina**: dorso, ginocchia leggermente flesse, cuscino sotto le ginocchia',
        '**Decubito laterale**: spalla libera, ginocchia flesse, cuscino tra le gambe',
        '**Seduta**: 45°–90°, supporto lombare, piedi appoggiati',
        '**Semi-seduta**: 30°–45°, utile per la **respirazione**',
        '**Prone**: solo se prescritto (es. ARDS), monitorare pressione',
        '**Trendelenburg**: NON usare per routine (rischio ICP)',
      ],
    },
    {
      title: 'Prevenzione lesioni da pressione',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'Cambiare posizione ogni **2 ore** (o più spesso se indicato)',
        'Usare **materassi** a pressione alternata o gel',
        'Proteggere le **prominenze ossee** (sacrale, talloni)',
        'Mantenere la **pelle** pulita e asciutta',
        'Valutare il rischio con la **scala Braden** o **Waterlow**',
        'Evitare **trazione** e **frizione** sulla pelle',
      ],
    },
    {
      title: 'Mobilizzazione assistita',
      icon: 'Hand',
      accent: 'orange',
      items: [
        'Spiegare la manovra e ottenere il **consenso**',
        'Usare **dispositivi** di sollevamento se necessari',
        'Coordinare il movimento con il **respiro** del paziente',
        'Sostenere il **peso** con le gambe, non con la schiena',
        'Verificare la **posizione** finale e il comfort',
        'Chiedere aiuto per pazienti **pesanti** o instabili',
      ],
    },
    {
      title: 'Sicurezza e rischi',
      icon: 'ShieldAlert',
      accent: 'purple',
      items: [
        'Prevenire le **cadute**: letto basso, scarpe antiscivolo',
        'Monitorare la **pressione arteriosa** dopo il cambio (ipotensione ortostatica)',
        'Evitare la **stasi venosa** e il **tromboembolismo**',
        'Controllare la **saturazione** e la **frequenza respiratoria**',
        'Attenzione a **cateteri**, **sonde** e **linee** durante il movimento',
        'Non forzare: valutare **dolore** e **limiti articolari**',
      ],
    },
    {
      title: 'Documentazione',
      icon: 'ClipboardList',
      accent: 'teal',
      items: [
        'Registrare **data**, **ora** e **tipo** di mobilizzazione',
        'Indicare la **posizione** assunta e la **durata**',
        'Annotare lo **stato della pelle** (integrità, arrossamenti)',
        'Segnalare **dolore** o **disagio** durante la manovra',
        'Riferire eventuali **complicanze** (ipotensione, dispnea)',
        'Firmare e datare la **cartella infermieristica**',
      ],
    },
  ],
  keyPoints: [
    'Cambiare posizione ogni **2 ore** per prevenire le **lesioni da pressione**',
    'Usare la **meccanica corporea** corretta per proteggere l’operatore',
    'Valutare sempre **dolore**, **respiro** e **pressione** dopo la mobilizzazione',
  ],
}

export default map
