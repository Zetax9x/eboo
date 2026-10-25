import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'precauzioni-standard-e-dpi',
  chapter: 'fondamenti',
  title: 'Precauzioni standard e DPI',
  subtitle: 'Profilassi delle infezioni: misure universali e dotazioni protettive',
  icon: 'ShieldCheck',
  status: 'bozza',
  sources: [
    'OMS — Linee guida sulla prevenzione delle infezioni correlate all’assistenza (ICA)',
    'Ministero della Salute — Raccomandazioni per la prevenzione delle infezioni ospedaliere',
    'CDC — Guideline for Isolation Precautions: Preventing Transmission of Infectious Agents in Healthcare Settings',
  ],
  intro:
    'Misure **universali** applicate a **tutti** i pazienti per prevenire la trasmissione di agenti infettivi. Si basano sul principio che ogni paziente può essere portatore di un agente patogeno, anche se non diagnosticato.',
  illustration: {
    id: 'precauzioni-standard-dpi',
    alt: 'Infermiere che indossa guanti, mascherina e camice protettivo',
    prompt: 'nurse wearing blue surgical mask, transparent face shield, blue disposable gloves, and blue isolation gown, standing in a hospital corridor',
    icon: 'ShieldCheck',
  },
  columns: 3,
  blocks: [
    {
      title: 'Principi fondamentali',
      icon: 'Info',
      accent: 'blue',
      items: [
        'Si applicano a **tutti** i pazienti, indipendentemente dalla diagnosi',
        'Prevenzione della trasmissione **da paziente a paziente** e **da paziente a operatore**',
        'Riconoscono che ogni paziente può essere portatore di un agente infettivo',
        'Combinano **igiene delle mani**, **DPI**, **disinfezione** e **smaltimento rifiuti**',
        'Sono la **base** su cui si aggiungono le precauzioni aggiuntive (contatto, goccioline, aeree)',
        'Obiettivo: ridurre le **infezioni correlate all’assistenza (ICA)**',
      ],
    },
    {
      title: 'Igiene delle mani',
      icon: 'Hand',
      accent: 'green',
      items: [
        'È la misura **più efficace** per prevenire le ICA',
        '5 momenti OMS: prima di contatto, prima di procedura asettica, dopo esposizione a fluidi, dopo contatto con paziente, dopo contatto con ambiente',
        'Durata: **40-60 secondi** con soluzione idroalcolica o **60-90 secondi** con acqua e sapone',
        'Usare **guanti** non sostituisce l’igiene delle mani',
        'Lavare le mani **prima e dopo** l’uso dei guanti',
        'Evitare anelli, bracciali e unghie artificiali durante l’assistenza',
      ],
    },
    {
      title: 'DPI: Guanti',
      icon: 'Hand',
      accent: 'teal',
      items: [
        'Indossare **prima** di toccare il paziente o l’ambiente circostante',
        'Usare **guanti sterili** per procedure invasive o contatto con mucose',
        'Usare **guanti non sterili** per contatto con pelle integra o superfici contaminate',
        'Cambiare guanti tra **diversi pazienti** e tra **diverse aree** dello stesso paziente',
        'Rimuovere i guanti **prima** di toccare superfici ambientali o dispositivi',
        'Non riutilizzare mai guanti monouso',
      ],
    },
    {
      title: 'DPI: Mascherine e visiere',
      icon: 'ShieldAlert',
      accent: 'orange',
      items: [
        '**Mascherina chirurgica**: protegge da goccioline e fluidi corporei',
        '**Mascherina FFP2/FFP3**: protegge da aerosol (precauzioni aeree)',
        '**Visiera o occhiali protettivi**: protezione occhi e mucose da schizzi',
        'Indossare **prima** di entrare in contatto con il paziente',
        'Rimuovere **dopo** l’assistenza, evitando il contatto con la parte esterna',
        'Smaltire come **rifiuto a rischio infettivo**',
      ],
    },
    {
      title: 'DPI: Camice e grembiule',
      icon: 'ShieldCheck',
      accent: 'purple',
      items: [
        '**Camice monouso**: protegge abiti e pelle da contaminazione',
        'Indossare quando si prevede contatto con sangue, fluidi corporei o superfici contaminate',
        'Scegliere camice **sterile** per procedure chirurgiche o invasive',
        'Scegliere camice **non sterile** per assistenza generale',
        'Rimuovere e smaltire **dopo** l’assistenza',
        'Non riutilizzare camici monouso',
      ],
    },
    {
      title: 'Smaltimento e ambiente',
      icon: 'Trash2',
      accent: 'red',
      items: [
        'DPI usati: smaltire in **contenitori per rifiuti a rischio infettivo** (sacchi gialli)',
        'Non toccare la parte **esterna** dei DPI durante la rimozione',
        'Effettuare **igiene delle mani** dopo la rimozione dei DPI',
        'Disinfettare **superfici ambientali** e dispositivi dopo l’assistenza',
        'Rispettare le procedure di **smontaggio** in ordine inverso all’indossamento',
        'Seguire le **linee guida aziendali** per lo smaltimento',
      ],
    },
  ],
  keyPoints: [
    'Le precauzioni standard sono **universali**: si applicano a **tutti** i pazienti',
    'L’**igiene delle mani** è la misura più importante: 5 momenti OMS',
    'I DPI vanno indossati **prima** del contatto e rimossi **dopo** l’assistenza',
    'Smaltire i DPI come **rifiuti a rischio infettivo** e disinfettare l’ambiente',
  ],
}

export default map
