import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'lesioni-da-pressione-prevenzione',
  chapter: 'fondamenti',
  title: 'Lesioni da pressione: prevenzione',
  subtitle: 'Strategie evidence-based per evitare la formazione di ulcere da decubito',
  icon: 'ShieldCheck',
  status: 'bozza',
  sources: [
    'NPIAP/EPUAP/PPPIA — International Guideline for the Prevention and Treatment of Pressure Ulcers, 3rd ed. (2024)',
    'Ministero della Salute — Raccomandazioni per la prevenzione delle lesioni da pressione in ambito ospedaliero (2019)',
    'AIFA — Linee guida per la gestione delle lesioni cutanee e mucose (2023)',
  ],
  intro:
    'Le **lesioni da pressione** (LDP) sono danni localizzati a cute e/o tessuti sottostanti, causati da **pressione** e/o **forze di taglio** prolungate su un osso prominente. La prevenzione è un **obbligo deontologico** e clinico.',
  illustration: {
    id: 'ldp-prevenzione-posizione',
    alt: 'Paziente allettato con cuscino tra le ginocchia e materasso antidecubito',
    prompt: 'elderly patient lying in bed with pillow between knees and anti-decubitus mattress, nurse adjusting position',
    icon: 'User',
  },
  columns: 2,
  blocks: [
    {
      title: 'Fattori di rischio',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        '**Immobilità** prolungata o ridotta mobilità',
        '**Incontinenza** urinaria o fecale (umidità)',
        '**Malnutrizione** o disidratazione',
        '**Età** > 65 anni, fragilità cutanea',
        '**Alterazione sensoriale** (diabete, ictus)',
        '**Dispositivi medici** (sonde, cateteri, ossigeno)',
        '**Sedazione** o alterazione del livello di coscienza',
      ],
    },
    {
      title: 'Valutazione del rischio',
      icon: 'ClipboardCheck',
      accent: 'blue',
      items: [
        'Utilizzo di **scale validate**: Braden, Norton, Waterlow',
        '**Braden**: 6 dimensioni (percezione, umidità, attività, mobilità, alimentazione, attrito/taglio)',
        'Punteggio Braden: **≤ 12** = alto rischio, **13–14** = rischio moderato',
        'Valutazione **all’ingresso** e **quotidiana** se rischio alto',
        'Documentare **sedi a rischio**: sacro, talloni, orecchie, gomiti',
        'Rivalutare dopo **cambiamenti clinici** (febbre, shock, intervento)',
      ],
    },
    {
      title: 'Mobilizzazione e posizionamento',
      icon: 'RefreshCw',
      accent: 'green',
      items: [
        'Cambiare posizione **ogni 2 ore** (o più spesso se rischio alto)',
        'Posizione a **45°** (non > 30°) per ridurre la pressione sul sacro',
        'Evitare la **posizione supina** prolungata',
        'Usare **cuscini** per separare le ossa (ginocchia, talloni)',
        '**Sollevare** i talloni con cuscini (non appoggiarli sul materasso)',
        'Evitare il **trascinamento** durante la mobilizzazione',
      ],
    },
    {
      title: 'Superfici di supporto',
      icon: 'Layers',
      accent: 'purple',
      items: [
        '**Materasso antidecubito** ad aria alternata o a celle',
        'Scegliere in base al **punteggio Braden** e alla mobilità',
        'Per rischio alto: **superfici avanzate** (aria alternata, gel)',
        'Evitare **anelli** o cerotti che concentrano la pressione',
        'Verificare la **funzionalità** del dispositivo ogni turno',
        'Usare **coperte morbide** per ridurre attrito e taglio',
      ],
    },
    {
      title: 'Cura della cute e nutrizione',
      icon: 'Droplet',
      accent: 'teal',
      items: [
        'Mantenere la cute **pulita e asciutta**',
        'Lavare con **acqua tiepida** e sapone neutro, asciugare delicatamente',
        'Applicare **barriera cutanea** (ossido di zinco) se incontinenza',
        'Cambiare **pannoloni** frequentemente',
        'Valutare lo **stato nutrizionale**: albumina, prealbumina',
        'Integrare **proteine** e **calorie** secondo prescrizione dietetica',
      ],
    },
    {
      title: 'Educazione e monitoraggio',
      icon: 'BookOpen',
      accent: 'orange',
      items: [
        'Educare **paziente e caregiver** alla prevenzione',
        'Insegnare a **riconoscere** arrossamenti persistenti',
        'Monitorare **quotidianamente** le sedi a rischio',
        'Documentare **ogni valutazione** e intervento',
        'Coinvolgere l’**équipe multiprofessionale** (medico, dietista, fisioterapista)',
        'Usare **indicatori di qualità** per il miglioramento continuo',
      ],
    },
  ],
  keyPoints: [
    'La prevenzione è **più efficace** del trattamento: agire precocemente riduce costi e complicanze',
    'Un arrossamento che **non sbianca** alla pressione digitale è un **segnale d’allarme** (LDP stadio 1)',
    'La **mobilizzazione** e la **superficie di supporto** sono i pilastri della prevenzione',
  ],
}

export default map
