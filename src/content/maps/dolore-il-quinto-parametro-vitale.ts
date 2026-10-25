import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'dolore-il-quinto-parametro-vitale',
  chapter: 'fondamenti',
  title: 'Dolore: il quinto parametro vitale',
  subtitle: 'Valutazione, classificazione e gestione infermieristica',
  icon: 'HeartPulse',
  status: 'bozza',
  sources: [
    'OMS — Definition of Pain (1979, revisione 2020)',
    'Linee Guida Nazionali per la Gestione del Dolore (Ministero della Salute)',
    'Codice Deontologico dell’Infermiere (FNOPI, art. 19)',
  ],
  intro:
    'Il dolore è un’**esperienza sensoriale ed emotiva sgradevole** associata a danno tissutale reale o potenziale. È il **quinto parametro vitale** perché va misurato e documentato come pressione, polso, temperatura e respiro.',
  illustration: {
    id: 'dolore-valutazione',
    alt: 'Infermiere che valuta il dolore con una scala numerica',
    prompt: 'nurse holding a pain scale chart while talking to a patient in a hospital bed',
    icon: 'ClipboardCheck',
  },
  columns: 2,
  blocks: [
    {
      title: 'Definizione e Classificazione',
      icon: 'BookOpen',
      accent: 'blue',
      items: [
        'Definizione IASP: esperienza soggettiva, **non verificabile** oggettivamente',
        'Acuto: durata < 3 mesi, causa identificabile, prognosi favorevole',
        'Cronico: durata > 3 mesi, spesso senza causa chiara, altera la qualità di vita',
        'Nocicettivo: da danno tissutale (somatico o viscerale)',
        'Neuropatico: da lesione o malattia del sistema nervoso (bruciore, formicolio)',
        'Misto: combinazione di nocicettivo e neuropatico',
      ],
    },
    {
      title: 'Scale di Valutazione',
      icon: 'Gauge',
      accent: 'green',
      items: [
        '**NRS** (Numerical Rating Scale): 0–10, standard per adulti coscienti',
        '**VRS** (Visual Analog Scale): linea 10 cm, segna il punto di intensità',
        '**Wong-Baker**: faccine 0–6, per bambini > 3 anni e adulti con difficoltà',
        '**FLACC**: per neonati e bambini non verbalizzanti (5 parametri)',
        '**CPOT**: per pazienti in coma o sedazione profonda',
        'Valutare **prima** e **dopo** ogni intervento analgesico',
      ],
    },
    {
      title: 'Dimensioni del Dolore',
      icon: 'Layers',
      accent: 'purple',
      items: [
        'Sensitiva: intensità, localizzazione, qualità (bruciante, trafittivo)',
        'Affective: ansia, paura, rabbia, impotenza',
        'Cognitiva: pensieri automatici, catastrofizzazione',
        'Comportamentale: postura, vocalizzo, inibizione delle attività',
        'Sociale: isolamento, perdita di ruoli, impatto sulla famiglia',
        'Spirituale: senso di abbandono, perdita di significato',
      ],
    },
    {
      title: 'Ruolo Infermieristico',
      icon: 'Hand',
      accent: 'orange',
      items: [
        'Valutare il dolore a **ogni contatto** con il paziente',
        'Documentare: sede, intensità, caratteristiche, fattori scatenanti',
        'Somministrare analgesici **secondo prescrizione** e protocolli',
        'Applicare tecniche non farmacologiche (respirazione, distrazione)',
        'Educare il paziente e la famiglia alla gestione del dolore',
        'Rivalutare l’efficacia della terapia entro **30-60 min**',
      ],
    },
    {
      title: 'Aspetti Etici e Normativi',
      icon: 'ShieldCheck',
      accent: 'navy',
      checks: [
        { text: 'Diritto alla **cura del dolore** (L. 38/2010)', kind: 'ok' },
        { text: 'Obbligo di **valutazione** sistematica (Codice Deontologico)', kind: 'ok' },
        { text: 'Rispetto della **soggettività** del dolore', kind: 'ok' },
        { text: 'Documentazione **obbligatoria** in cartella', kind: 'ok' },
        { text: 'Accesso equo agli **oppio** e analgesici', kind: 'ok' },
        { text: 'Coinvolgimento del paziente nelle **scelte terapeutiche**', kind: 'ok' },
      ],
    },
    {
      title: 'Errori da Evitare',
      icon: 'TriangleAlert',
      accent: 'red',
      checks: [
        { text: 'Sottovalutare il dolore per **assenza di segni oggettivi**', kind: 'no' },
        { text: 'Assumere che il paziente **non possa sentire** dolore (es. demenza)', kind: 'no' },
        { text: 'Ritardare la somministrazione di analgesici per **paura della dipendenza**', kind: 'no' },
        { text: 'Non rivalutare dopo la **somministrazione** del farmaco', kind: 'no' },
        { text: 'Ignorare il dolore **psicogeno** o di origine emotiva', kind: 'no' },
        { text: 'Non documentare la **valutazione** e la risposta alla terapia', kind: 'no' },
      ],
    },
  ],
  keyPoints: [
    'Il dolore è **soggettivo**: la parola del paziente è la fonte primaria',
    'Valutare con **scale validate** e documentare sempre',
    'Gestire dolore = **diritto del paziente** e **dovere dell’infermiere**',
  ],
}

export default map
