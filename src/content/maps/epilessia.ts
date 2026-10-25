import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'epilessia',
  chapter: 'patologie',
  title: 'Epilessia',
  subtitle: 'Predisposizione a crisi ricorrenti: classificazione, terapia e assistenza',
  icon: 'Zap',
  status: 'bozza',
  sources: [
    'ILAE — Classificazione delle crisi e delle epilessie (2017) e definizione clinica pratica (2014)',
    'LICE — Lega Italiana Contro l’Epilessia, raccomandazioni',
    'NICE NG217 — Epilepsies in children, young people and adults (2022)',
  ],
  definition:
    'Malattia cerebrale con **predisposizione duratura** a crisi epilettiche: scariche neuronali **anomale, eccessive e sincrone** della corteccia.',
  illustration: {
    id: 'epilessia-scarica-eeg',
    alt: 'Cervello con scarica elettrica diffusa e tracciato EEG',
    prompt: 'human brain with abnormal electrical discharges spreading across the cortex, an electroencephalogram trace with spikes below',
    icon: 'Zap',
  },
  types: [
    { name: 'Crisi focali', text: 'Origine in un emisfero; con o **senza alterazione della consapevolezza**.' },
    { name: 'Crisi generalizzate', text: '**Tonico-cloniche**, assenze, miocloniche, atoniche: entrambi gli emisferi.' },
    { name: 'Esordio sconosciuto', text: 'Inizio non osservato o non determinabile.' },
    { name: 'Diagnosi (ILAE)', text: '**≥ 2 crisi non provocate** a > 24 h, o 1 crisi con alto rischio di recidiva.' },
  ],
  sections: [
    {
      title: 'Cause e fattori',
      icon: 'Target',
      accent: 'orange',
      items: [
        '**Genetiche**, strutturali (malformazioni)',
        'Esiti di **ictus**, trauma cranico, tumori',
        'Infezioni (encefaliti), cause metaboliche',
        'Scatenanti: **privazione di sonno**, alcol',
        'Mancata assunzione della terapia, luci intermittenti',
      ],
    },
    {
      title: 'La crisi tonico-clonica',
      icon: 'Eye',
      accent: 'red',
      items: [
        'Possibile **aura** (crisi focale iniziale)',
        '**Fase tonica**: rigidità, caduta, apnea, cianosi',
        '**Fase clonica**: scosse ritmiche, morso della lingua',
        'Incontinenza, scialorrea',
        '**Fase post-critica**: confusione, sonnolenza, cefalea',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'Microscope',
      accent: 'blue',
      items: [
        '**Anamnesi** e racconto del testimone (anche video)',
        '**EEG** standard, in sonno o video-EEG',
        '**RM encefalo** (lesioni strutturali)',
        'Esami: glicemia, elettroliti, tossicologici',
        'Distinguere da **sincope** e crisi psicogene',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Farmaci antiepilettici**: levetiracetam, lamotrigina, carbamazepina',
        '**Valproato**: evitare in donne in età fertile',
        'Monoterapia, dosaggio **graduale**',
        'Farmacoresistenza: **chirurgia**, VNS, dieta chetogenica',
        'Attenzione alle **interazioni** (es. contraccettivi)',
      ],
    },
    {
      title: 'Stato epilettico',
      icon: 'Timer',
      accent: 'purple',
      items: [
        'Crisi convulsiva **≥ 5 minuti** o crisi ripetute senza recupero',
        'Emergenza: rischio di **danno neuronale**',
        '1ª linea: **benzodiazepine** (midazolam, lorazepam, diazepam)',
        'Poi antiepilettici ev secondo protocollo',
        'Monitorare **ABC**, SpO₂, glicemia',
      ],
    },
    {
      title: 'Vita quotidiana',
      icon: 'User',
      accent: 'teal',
      items: [
        '**Aderenza** alla terapia, orari regolari',
        'Sonno regolare, limitare l’**alcol**',
        'Guida: idoneità valutata dalla commissione medica',
        'Gravidanza da **pianificare** (acido folico)',
        'Diario delle crisi',
      ],
    },
  ],
  nursing: [
    'Durante la crisi: **proteggere il capo**, allontanare oggetti, **cronometrare**',
    '**Non** mettere nulla in bocca, **non** bloccare i movimenti',
    'Dopo la crisi: **posizione laterale di sicurezza**, SpO₂, glicemia',
    'Osservare e **documentare**: esordio, durata, tipo di movimenti, post-critico',
    'Letto basso con **sponde imbottite**, aspiratore e O₂ pronti',
  ],
  redFlags: [
    'Crisi che dura **≥ 5 min** o crisi in serie: chiamare subito il medico',
    'Mancato recupero della coscienza, **difficoltà respiratoria**',
    'Prima crisi, trauma cranico, febbre, gravidanza',
  ],
}

export default map
