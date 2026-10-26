import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'isolamento-contatto-droplet-via-aerea',
  chapter: 'specialistica',
  title: 'Isolamento: contatto, droplet, via aerea',
  subtitle: 'Precauzioni standard e aggiuntive per la prevenzione delle infezioni',
  icon: 'ShieldCheck',
  status: 'bozza',
  sources: [
    'Ministero della Salute — Raccomandazioni per la prevenzione delle infezioni correlate all’assistenza (ICA)',
    'CDC — Guideline for Isolation Precautions: Preventing Transmission of Infectious Agents in Healthcare Settings (2007)',
    'OMS — Infection Prevention and Control in Health Care (2016)',
  ],
  intro:
    'Le precauzioni di isolamento si aggiungono alle **precauzioni standard** (igiene delle mani, DPI per tutti i contatti con sangue/fluidi) e si attivano in base alla **via di trasmissione** del microrganismo.',
  columns: 3,
  blocks: [
    {
      title: 'Precauzioni di Contatto',
      icon: 'Hand',
      accent: 'blue',
      items: [
        'Trasmissione: contatto diretto con paziente o superfici contaminate',
        'Esempi: **C. difficile**, stafilococco meticillino-resistente (SARM), VRE',
        'DPI: **guanti** e **camice** a maniche lunghe',
        'Camera singola o coorte; se condivisa, mantenere distanza ≥ 1 m',
        'Disinfezione ambientale con prodotti attivi su spore (es. ipoclorito di sodio)',
        'Lavaggio mani **prima e dopo** ogni contatto',
        'Segnaletica visibile sulla porta della camera',
      ],
    },
    {
      title: 'Precauzioni per Droplet',
      icon: 'Wind',
      accent: 'orange',
      items: [
        'Trasmissione: goccioline > 5 µm, distanza ≤ 1 m',
        'Esempi: **Influenza**, meningococco, parotite, rubella, adenovirus',
        'DPI: **mascherina chirurgica** (tipo IIR), guanti, camice, occhiali se rischio schizzi',
        'Camera singola o coorte; se condivisa, distanza ≥ 1 m',
        'Ventilazione naturale o meccanica adeguata',
        'Limitare il numero di visitatori; se presenti, mascherina chirurgica',
        'Durata: fino a 24 h dall’inizio della terapia antimicrobica efficace (per meningococco)',
      ],
    },
    {
      title: 'Precauzioni per Via Aerea',
      icon: 'Siren',
      accent: 'red',
      items: [
        'Trasmissione: particelle < 5 µm, restano sospese nell’aria',
        'Esempi: **Tubercolosi** (M. tuberculosis), varicella, morbillo',
        'DPI: **mascherina FFP2/FFP3** (certificata EN 149), guanti, camice',
        'Camera singola con **ventilazione negativa** (6-12 ricambi/ora) e porta chiusa',
        'Se camera non disponibile: coorte in camera con ventilazione dedicata',
        'Limitare al minimo i visitatori; se presenti, FFP2/FFP3',
        'Durata: fino a negativizzazione di 3 campioni di espettorato (TB) o 5° giorno dall’inizio delle lesioni (varicella)',
      ],
    },
    {
      title: 'Precauzioni Standard',
      icon: 'ShieldCheck',
      accent: 'green',
      items: [
        'Applicate a **tutti** i pazienti, sempre',
        'Igiene delle mani: **prima e dopo** ogni contatto con paziente/ambiente',
        'DPI: guanti, camice, occhiali, mascherina se rischio schizzi',
        'Smaltimento DPI in **rifiuti sanitari** (gialli)',
        'Disinfezione di superfici e attrezzature',
        'Posizionamento sicuro dei pazienti (camera singola se possibile)',
        'Educazione del paziente e visitatori',
      ],
    },
    {
      title: 'Scegliere il DPI corretto',
      icon: 'ClipboardCheck',
      accent: 'purple',
      items: [
        '**Mascherina chirurgica**: filtra droplet, protegge l’ambiente dal paziente',
        '**FFP2/FFP3**: filtra particelle aeree, protegge l’operatore',
        '**Guanti**: monouso, cambiare tra pazienti e dopo contaminazione',
        '**Camice**: a maniche lunghe, coprire torso e braccia',
        '**Occhiali/schermo**: se rischio schizzi di fluidi corporei',
        'Mettere DPI **prima** di entrare nella camera',
        'Togliere DPI **dopo** aver lasciato la camera, in ordine inverso',
      ],
    },
    {
      title: 'Errori comuni da evitare',
      icon: 'TriangleAlert',
      accent: 'pink',
      checks: [
        { text: 'Usare mascherina chirurgica per via aerea', kind: 'no' },
        { text: 'Non cambiare guanti tra pazienti', kind: 'no' },
        { text: 'Lasciare la porta della camera aperta (via aerea)', kind: 'no' },
        { text: 'Non lavare le mani dopo aver tolto i DPI', kind: 'no' },
        { text: 'Riutilizzare DPI monouso', kind: 'no' },
        { text: 'Non segnalare l’isolamento sulla porta', kind: 'warn' },
        { text: 'Non educare il paziente sulle precauzioni', kind: 'warn' },
      ],
    },
  ],
  keyPoints: [
    '**Contatto** = guanti + camice; **Droplet** = mascherina chirurgica; **Via aerea** = FFP2/FFP3 + camera ventilata',
    'Le precauzioni standard sono **sempre** attive; le precauzioni aggiuntive si attivano in base alla via di trasmissione',
    'La **ventilazione** è cruciale per la via aerea: 6-12 ricambi/ora in camera singola',
  ],
}

export default map
