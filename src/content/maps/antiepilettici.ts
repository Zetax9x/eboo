import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'antiepilettici',
  chapter: 'farmacologia',
  title: 'Antiepilettici',
  subtitle: 'Classi, meccanismi d’azione, indicazioni e effetti collaterali principali',
  icon: 'Brain',
  status: 'bozza',
  sources: [
    'NICE NG217 — Epilepsies in children, young people and adults (2022)',
    'Trinka E. et al. — A definition and classification of status epilepticus (ILAE), Epilepsia 2015',
    'AIFA — Riassunti delle Caratteristiche del Prodotto (RCP), banca dati farmaci',
  ],
  intro: 'La scelta del farmaco dipende dal **tipo di crisi**, dall’**età** e dalle **comorbidità**. La maggior parte degli AED agisce su canali ionici o recettori GABA/glutammato.',
  tableTitle: 'Principali antiepilettici',
  tableIcon: 'Pill',
  columns: ['Farmaco', 'Classe / Meccanismo', 'Indicazioni principali', 'Effetti collaterali / Note'],
  widths: [1.2, 1.8, 1.5, 2],
  rows: [
    ['Fenitoina', 'Blocco canali Na⁺', 'Crisi tonico-cloniche, status epilettico', 'Atassia, nistagmo, iperplasia gengivale, sindrome di Stevens-Johnson'],
    ['Carbamazepina', 'Blocco canali Na⁺', 'Crisi parziali, crisi tonico-cloniche', 'Agranulocitosi, iponatriemia, sindrome di Stevens-Johnson'],
    ['Valproato', 'Aumento GABA, blocco canali Na⁺', 'Crisi generalizzate, miocloniche, tonico-cloniche', 'Epatotossicità, trombocitopenia, teratogeno (evitare in gravidanza)'],
    ['Fosfenitoina', 'Pro-farmaco della fenitoina', 'Status epilettico (via IV)', 'Reazioni infusionali, ipotensione, bradicardia'],
    ['Levetiracetam', 'Modulazione SV2A', 'Crisi parziali, generalizzate', 'Irritabilità, depressione, agitazione'],
    ['Lamotrigina', 'Blocco canali Na⁺', 'Crisi parziali, tonico-cloniche', 'Rash cutaneo grave (sindrome di Stevens-Johnson)'],
    ['Oxcarbazepina', 'Blocco canali Na⁺', 'Crisi parziali', 'Iponatriemia, rash cutaneo'],
    ['Topiramato', 'Meccanismo multiplo (Na⁺, GABA, AMPA)', 'Crisi parziali, tonico-cloniche', 'Parestesie, calo ponderale, glaucoma acuto, litiasi renale'],
    ['Gabapentin', 'Modulazione canali Ca²⁺', 'Crisi parziali (aggiunta)', 'Sonnolenza, vertigini, edema periferico'],
  ],
  notes: [
    {
      title: 'Status epilettico',
      icon: 'Siren',
      accent: 'red',
      items: [
        'Definizione: crisi **> 5 min** o crisi ricorrenti senza recupero',
        'Prima linea: **Benzodiazepine** (Midazolam IM/IV, Diazepam IV)',
        'Seconda linea: **Levetiracetam**, **Fosfenitoina** o **Valproato** IV',
        'Terza linea: **Fenobarbital** o **Midazolam** (infusione)',
        'Monitorare **respirazione** e **pressione arteriosa** durante l’infusione',
      ],
    },
    {
      title: 'Aspetti infermieristici',
      icon: 'ShieldCheck',
      accent: 'green',
      items: [
        'Somministrare **oralmente** se possibile; IV solo in emergenza',
        'Monitorare **emocromo** (agranulocitosi da carbamazepina)',
        'Controllare **funzionalità epatica** (valproato, fenitoina)',
        'Educare al **riconoscimento** delle crisi e alla prevenzione delle cadute',
        'Verificare **aderenza** alla terapia: interruzione brusca = rischio status',
      ],
    },
    {
      title: 'Controindicazioni e interazioni',
      icon: 'TriangleAlert',
      accent: 'orange',
      items: [
        'Valproato: **controindicato** in gravidanza (teratogeno)',
        'Carbamazepina: induttore enzimatico → riduce efficacia di contraccettivi orali',
        'Fenitoina: saturazione cinetica → piccole variazioni di dose = grandi variazioni di livello',
        'Evitare **alcol** e sedativi: rischio di depressione respiratoria',
      ],
    },
  ],
  keyPoints: [
    'La **fenitoina** ha cinetica non lineare: monitorare i livelli sierici',
    'Il **valproato** è teratogeno: evitare in donne in età fertile senza contraccezione efficace',
    'Lo **status epilettico** è un’emergenza: iniziare benzodiazepine entro **5 minuti**',
  ],
}

export default map
