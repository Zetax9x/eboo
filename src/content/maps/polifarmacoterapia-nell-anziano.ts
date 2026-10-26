import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'polifarmacoterapia-nell-anziano',
  chapter: 'specialistica',
  title: 'Polifarmacoterapia nell’anziano',
  subtitle: 'Rischio, criteri di appropriatezza e strategie di razionalizzazione',
  icon: 'Pill',
  status: 'bozza',
  sources: [
    'Beers Criteria for Potentially Inappropriate Medication Use in Older Adults, AGS 2023',
    'Ministero della Salute – Linee guida per la prescrizione di farmaci negli anziani, 2022',
    'Società Italiana di Geriatria e Gerontologia (SIGG) – Linee guida per la polifarmacia, 2021',
  ],
  intro:
    'La **polifarmacoterapia** (≥ 5 farmaci) è un fattore di rischio indipendente per **cadute**, **interazioni** e **adverse drug events** (ADE) nell’anziano. L’obiettivo è la **deprescrizione** mirata e l’uso di criteri di appropriatezza.',
  columns: 2,
  blocks: [
    {
      title: 'Definizione e epidemiologia',
      icon: 'Users',
      accent: 'blue',
      items: [
        'Definizione operativa: assunzione di **≥ 5 farmaci** concomitanti',
        'Prevalenza: **> 50%** negli anziani istituzionalizzati e in RSA',
        'Fattori di rischio: **multimorbilità**, polipatologie croniche, età > 80 anni',
        'Impatto: aumento del rischio di **ADE** del 20-30% rispetto a < 5 farmaci',
        'Correlazione con **ospedalizzazioni** e **mortalità** a 1 anno',
        'Costo sociale: aumento delle **cadute** e della **fragilità**',
      ],
    },
    {
      title: 'Criteri di inappropriatezza',
      icon: 'ClipboardCheck',
      accent: 'purple',
      items: [
        '**Beers Criteria 2023**: lista di farmaci da evitare o usare con cautela',
        '**STOPP/START**: criteri per la sospensione e l’inizio della terapia',
        '**Anticoagulanti**: criteri specifici per gli anticoagulanti orali',
        '**PRISCUS**: criteri per la prescrizione in geriatria (Italia)',
        'Farmaci con **emivita lunga** o metabolismo epatico/renale alterato',
        'Farmaci con **effetto anticolinergico** o **sedativo** elevato',
      ],
    },
    {
      title: 'Farmaci ad alto rischio (Beers)',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        '**Benzodiazepine** e Z-drugs: rischio di sedazione, confusione, cadute',
        '**Anticolinergici** (es. amitriptilina, difenidramina): delirium, ritenzione urinaria',
        '**NSAID** sistemici: rischio gastrointestinale e renale',
        '**Digossina**: stretta finestra terapeutica, tossicità facile',
        '**Anticoagulanti** (warfarin, DOAC): rischio emorragico senza monitoraggio',
        '**Alfa-bloccanti** (es. prazosina): ipotensione ortostatica',
      ],
    },
    {
      title: 'Strategie di razionalizzazione',
      icon: 'Workflow',
      accent: 'green',
      items: [
        '**Deprescrizione**: sospensione graduale di farmaci non necessari',
        '**Rivisitazione** della terapia a ogni cambio di stato di salute',
        '**Semplificazione** del regime posologico (es. 1 volta al giorno se possibile)',
        '**Educazione terapeutica**: coinvolgere il paziente e i caregiver',
        '**Monitoraggio** degli effetti avversi e delle interazioni',
        '**Collaborazione** con il farmacista ospedaliero e il medico di base',
      ],
    },
    {
      title: 'Ruolo dell’infermiere',
      icon: 'Stethoscope',
      accent: 'teal',
      items: [
        '**Accertamento** dell’aderenza terapeutica e delle interazioni',
        '**Monitoraggio** dei parametri vitali (PA, FC) per ipotensione/sedazione',
        '**Segnalazione** di effetti avversi (confusione, cadute, sanguinamenti)',
        '**Educazione** su modalità di assunzione e conservazione dei farmaci',
        '**Documentazione** della terapia e delle modifiche prescritte',
        '**Promozione** della sicurezza: evitare duplicazioni e omissioni',
      ],
    },
    {
      title: 'Indicatori di qualità',
      icon: 'Gauge',
      accent: 'navy',
      checks: [
        { text: 'Riduzione del numero di farmaci **> 5**', kind: 'ok' },
        { text: 'Diminuzione degli **ADE** correlati ai farmaci', kind: 'ok' },
        { text: 'Miglioramento dell’**aderenza** terapeutica', kind: 'ok' },
        { text: 'Riduzione delle **cadute** e della **confusione**', kind: 'ok' },
        { text: 'Aumento della **qualità di vita** percepita', kind: 'ok' },
        { text: 'Diminuzione dei **costi** sanitari evitabili', kind: 'ok' },
      ],
    },
  ],
  keyPoints: [
    'La polifarmacoterapia non è di per sé negativa, ma richiede **razionalizzazione** continua',
    'L’obiettivo è la **terapia minima efficace** con il minimo rischio',
    'L’infermiere è il **sentinella** degli effetti avversi e dell’aderenza',
  ],
}

export default map
