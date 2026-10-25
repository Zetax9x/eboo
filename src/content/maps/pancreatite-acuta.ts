import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'pancreatite-acuta',
  chapter: 'patologie',
  title: 'Pancreatite acuta',
  subtitle: 'Infiammazione acuta del pancreas: cause, diagnosi, stadi e assistenza',
  icon: 'FlaskConical',
  status: 'bozza',
  sources: [
    'RACG — Linee guida per la pancreatite acuta (2023)',
    'AGA — American Gastroenterological Association Guidelines for Acute Pancreatitis',
    'NICE — Acute pancreatitis: assessment and management (2022)',
  ],
  definition:
    'Infiammazione acuta del pancreas con **attivazione intrapancreatica** delle enzimi digestivi, che provoca danno tissutale, edema e, nei casi gravi, necrosi.',
  illustration: {
    id: 'pancreatite-acuta-pancreas',
    alt: 'Pancreas infiammato ed edematoso',
    prompt: 'inflamed swollen pancreas with redness and edema, cross-section showing tissue damage',
    icon: 'FlaskConical',
  },
  types: [
    { name: 'Lieve', text: 'Edema senza necrosi. **Recupero rapido** (< 7 giorni).' },
    { name: 'Moderata', text: 'Complicanze locali o sistemiche transitorie. **Necrosi sterile**.' },
    { name: 'Grave', text: '**Necrosi** pancreatica o extrapancreatica, shock, insufficienza multiorgano.' },
  ],
  sections: [
    {
      title: 'Cause e fattori di rischio',
      icon: 'TriangleAlert',
      accent: 'purple',
      items: [
        '**Calcoli biliari**: 40–60% dei casi',
        '**Alcol**: 25–35% dei casi',
        'Ipertrigliceridemia (> 500 mg/dL)',
        'Farmaci (es. azatioprina, valproato)',
        'Post-ERCP, traumi, cause idiopatiche',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Dolore epigastrico** intenso, irradiato al dorso',
        'Nausea, vomito, distensione addominale',
        'Febbre, tachicardia',
        'Segno di Cullen (equimosi periombelicale) o Grey-Turner (flanc)',
        'Inappetenza, ileo paralitico',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**Lipasi sierica** > 3 volte il limite superiore (gold standard)',
        'Amilasi sierica (meno specifica)',
        'Ecografia addominale: calcoli, edema pancreas',
        'TC addome con contrasto: **necrosi**, collections',
        'Biliverdina, AST, ALT (sospetto biliare)',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Idratazione endovenosa** aggressiva (Ringer lattato)',
        'Analgesia: **paracetamolo**, oppioidi se necessario',
        'Alimentazione enterale precoce (24–48 h) se tollerata',
        'ERCP urgente solo se **colangite** o ostruzione biliare persistente',
        'Antibiotici solo se **infezione** documentata',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Necrosi** pancreatica o peripancreatica',
        'Pseudocisti, ascessi',
        'Insufficienza respiratoria (ARDS)',
        'Shock, coagulopatia (DIC)',
        'Diabete secondario, steatorrea',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        '**Parametri vitali** ogni 4–6 h (o più frequente se grave)',
        'Bilancino idrico, diuresi oraria',
        'Emogasanalisi, lattato, creatinina',
        'Lipasi, amilasi, bilirubina, transaminasi',
        'TC addome con contrasto se peggioramento clinico',
      ],
    },
  ],
  nursing: [
    'Posizionare il paziente in **decubito laterale sinistro** o semi-seduto',
    'Monitorare il **dolore** (scala EVA/NRS) e somministrare analgesici secondo protocollo',
    'Controllare la **tolleranza alimentare** e iniziare l’alimentazione enterale precoce',
    'Sorvegliare i **parametri vitali** e la diuresi; avvisare il medico per segni di shock',
    'Educare al **rifiuto dell’alcol** e alla gestione dei calcoli biliari',
  ],
  redFlags: [
    '**Dolore addominale** improvviso e intenso con vomito: sospetto pancreatite acuta',
    'Febbre alta, tachicardia, ipotensione: **avvisare subito** il medico (possibile necrosi infetta)',
    'Distensione addominale, ileo, assenza di rumori intestinali: **monitorare strettamente**',
  ],
}

export default map
