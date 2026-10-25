import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'microrganismi-multiresistenti',
  chapter: 'specialistica',
  title: 'Microrganismi multiresistenti',
  subtitle: 'Definizioni, acronimi, prevenzione e gestione in ambito sanitario',
  icon: 'ShieldAlert',
  status: 'bozza',
  sources: [
    'Ministero della Salute — Piano Nazionale di Prevenzione e Controllo delle Infezioni Correlate all’Assistenza (PNAICA)',
    'OMS — Global Action Plan on Antimicrobial Resistance (AMR)',
    'CDC — Core Elements of an Infection Prevention and Control Program',
  ],
  intro:
    'I microrganismi multiresistenti (MDR) sono batteri, funghi o virus che hanno sviluppato resistenza a **più classi** di antimicrobici, rendendo le infezioni difficili da trattare e aumentando il rischio di trasmissione in ambito sanitario.',
  illustration: {
    id: 'microrganismi-multiresistenti-batteri',
    alt: 'Batteri multiresistenti al microscopio',
    prompt: 'microscopic view of rod-shaped bacteria with irregular surface texture, some appearing clustered',
    icon: 'Microscope',
  },
  columns: 2,
  blocks: [
    {
      title: 'Definizioni chiave',
      icon: 'BookOpen',
      accent: 'blue',
      items: [
        '**MDR** (Multidrug-Resistant): resistenza a ≥ 1 agente in ≥ 3 classi di antibiotici',
        '**XDR** (Extensively Drug-Resistant): resistenza a ≥ 1 agente in ≥ 5 classi',
        '**PDR** (Pan-Drug-Resistant): resistenza a tutti gli agenti di tutte le classi',
        '**ESBL** (Beta-lattamasi a spettro esteso): enzimi che idrolizzano cefalosporine e ampicilline',
        '**MRSA**: Staphylococcus aureus resistente alla meticillina',
        '**VRE**: Enterococcus resistente alla vancomicina',
        '**CRE**: Enterobacterales produttivi di carbapenemasi',
      ],
    },
    {
      title: 'Principali patogeni MDR',
      icon: 'FlaskConical',
      accent: 'purple',
      items: [
        '**Staphylococcus aureus** (MRSA): pelle, ferite, cateteri, polmonite',
        '**Enterococcus faecalis/faecium** (VRE): urinarie, addominali, ematiche',
        '**Klebsiella pneumoniae** (ESBL/CRE): polmonite, urinarie, ematiche',
        '**Escherichia coli** (ESBL): urinarie, addominali',
        '**Pseudomonas aeruginosa**: polmonite, ferite, ustioni',
        '**Acinetobacter baumannii**: polmonite, ferite, ustioni',
        '**Clostridioides difficile**: diarrea associata a antibiotici',
      ],
    },
    {
      title: 'Fattori di rischio',
      icon: 'TriangleAlert',
      accent: 'orange',
      items: [
        'Uso **prolungato** o **improprio** di antibiotici',
        'Soggiorno **prolungato** in reparto o in Rianimazione',
        'Presenza di **dispositivi** invasivi (cateteri, sondini, ventilatori)',
        'Immunosoppressione (chemioterapia, trapianti, HIV)',
        'Età **avanzata** o **neonatale**',
        'Precedente infezione o colonizzazione da MDR',
        'Trasferimento tra **strutture** sanitarie',
      ],
    },
    {
      title: 'Prevenzione: misure chiave',
      icon: 'ShieldCheck',
      accent: 'green',
      items: [
        '**Igiene delle mani**: prima e dopo ogni contatto con paziente o ambiente',
        'Uso di **guanti** e **camice** per pazienti con MDR noti o sospetti',
        '**Isolamento** di contatto per pazienti colonizzati o infetti',
        '**Pulizia e disinfezione** frequente di superfici e dispositivi',
        '**Stewardship antibiotica**: prescrizione appropriata e monitoraggio',
        '**Sorveglianza** attiva: screening di ingresso e periodico',
        '**Formazione** del personale su protocolli e segnali d’allarme',
      ],
    },
    {
      title: 'Gestione del paziente',
      icon: 'ClipboardCheck',
      accent: 'teal',
      items: [
        'Posizionare in **camera singola** o con altri pazienti con stesso MDR',
        'Segnalare con **etichetta** o cartellino alla porta e in cartella',
        'Limitare le **visite** e informare i visitatori sulle precauzioni',
        'Dedicare **dispositivi** (tens, fonendoscopio) al singolo paziente',
        'Rimuovere **dispositivi** invasivi non necessari il prima possibile',
        'Monitorare **temperatura**, segni di infezione, risposta alla terapia',
        'Comunicare alla **équipe** multidisciplinare e al microbiologo',
      ],
    },
    {
      title: 'Ruolo infermieristico',
      icon: 'Hand',
      accent: 'navy',
      checks: [
        { text: 'Applicare rigorosamente le **precauzioni standard** e di **contatto**', kind: 'ok' },
        { text: 'Riconoscere i **segnali** di infezione e segnalare al medico', kind: 'ok' },
        { text: 'Promuovere l’**igiene delle mani** e la conformità del personale', kind: 'ok' },
        { text: 'Partecipare alla **stewardship antibiotica** e al monitoraggio', kind: 'ok' },
        { text: 'Educare **pazienti e familiari** alla prevenzione', kind: 'ok' },
        { text: 'Documentare **screening**, isolamento, misure adottate', kind: 'ok' },
        { text: 'Collaborare con il **servizio igiene** e la microbiologia', kind: 'ok' },
      ],
    },
  ],
  keyPoints: [
    'La **prevenzione** è la strategia più efficace: igiene delle mani, isolamento, stewardship antibiotica',
    'I **MDR** richiedono un approccio multidisciplinare e una comunicazione efficace tra tutti gli operatori',
    'Il **ruolo infermieristico** è centrale: vigilanza, educazione, applicazione delle precauzioni, documentazione',
  ],
}

export default map
