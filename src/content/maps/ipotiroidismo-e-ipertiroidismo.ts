import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'ipotiroidismo-e-ipertiroidismo',
  chapter: 'patologie',
  title: 'Ipotiroidismo e ipertiroidismo',
  subtitle: 'Disfunzioni della tiroide: cause, sintomi, diagnosi e gestione infermieristica',
  icon: 'Activity',
  status: 'bozza',
  sources: [
    'ETA — European Thyroid Association Guidelines (2023)',
    'AIFA — Linee guida per la terapia sostitutiva e antitiroidea',
    'Ministero della Salute — Raccomandazioni per il follow-up delle patologie tiroidee',
  ],
  definition:
    'Alterazioni della funzione tiroidea: **ipotiroidismo** (deficit ormonale) e **ipertiroidismo** (eccesso ormonale) che impattano sul metabolismo globale.',
  illustration: {
    id: 'tiroide-anatomia',
    alt: 'Ghiandola tiroidea e lobuli',
    prompt: 'human thyroid gland anatomy, two lobes connected by isthmus, trachea in background, blood vessels',
    icon: 'Activity',
  },
  types: [
    { name: 'Ipotiroidismo', text: 'Deficit di T3/T4. Cause: Hashimoto, post-terapia, iodio.' },
    { name: 'Ipertiroidismo', text: 'Eccesso di T3/T4. Cause: Morbo di Basedow, noduli iperfunzionanti.' },
    { name: 'Tireoidite', text: 'Infiammazione (subacuta, post-partum) con fasi iper/ipotiroidizzanti.' },
    { name: 'Noduli', text: 'Lesioni focali; possono essere funzionalmente attivi o inattivi.' },
  ],
  sections: [
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Ipotiroidismo**: stanchezza, intolleranza al freddo, costipazione, bradicardia',
        '**Ipertiroidismo**: tachicardia, calo ponderale, intolleranza al caldo, tremori',
        'Alterazioni del ciclo mestruale (irregolarità o amenorrea)',
        'Cambiamenti cutanei (seccità o iperidrosi)',
        'Alterazioni dello stato emotivo (depressione o ansia)',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**TSH**: marker primario (aumentata nell’ipotiroidismo, soppressa nell’ipertiroidismo)',
        '**FT4 e FT3**: livelli liberi degli ormoni tiroidei',
        'Anticorpi anti-TPO e anti-tiroglobulina (per Hashimoto)',
        'Ecografia tiroidea: morfologia, noduli, vascularizzazione',
        'Scintigrafia: solo se noduli o ipertiroidismo da causa non chiara',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Ipotiroidismo**: levotiroxina (T4) a vita, dose individualizzata',
        '**Ipertiroidismo**: antitiroidei (metimazolo, propiltiouracile)',
        'Radioterapia interna (iodio radioattivo) o chirurgia (tiroidectomia)',
        'Beta-bloccanti per sintomi adrenergici (tachicardia, tremori)',
        'Monitoraggio TSH ogni 6-8 settimane fino a stabilizzazione',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Mixedema**: stato ipotiroidico grave (ipotermia, coma)',
        '**Crisi tiroidea**: stato ipertiroideo acuto (febbre, tachicardia, delirio)',
        'Aritmie cardiache (fibrillazione atriale nell’ipertiroidismo)',
        'Osteoporosi (iperturnover osseo nell’ipertiroidismo cronico)',
        'Ipertensione arteriosa (associata a entrambe le condizioni)',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        '**TSH** a digiuno, prima della somministrazione di levotiroxina',
        'Peso corporeo e parametri vitali (FC, PA)',
        'Funzionalità epatica (con antitiroidei)',
        'Emocromo (con propiltiouracile: rischio agranulocitosi)',
        'Follow-up ecografico per noduli o gozzo',
      ],
    },
    {
      title: 'Assistenza infermieristica',
      icon: 'Stethoscope',
      accent: 'purple',
      items: [
        'Educare alla **somministrazione corretta** della levotiroxina (a stomaco vuoto)',
        'Monitorare i sintomi di **sovradose** (tachicardia, insonnia, calo ponderale)',
        'Verificare l’aderenza terapeutica e gli effetti collaterali',
        'Supporto psicologico per l’impatto sulla qualità di vita',
        'Coordinare gli esami di laboratorio e i controlli specialistici',
      ],
    },
  ],
  nursing: [
    'Somministrare la levotiroxina **30 minuti prima** del pasto, con acqua',
    'Controllare la **frequenza cardiaca** prima di somministrare beta-bloccanti',
    'Educare al riconoscimento dei sintomi di **carenza o eccesso** ormonale',
    'Monitorare i **valori ematici** (emocromo, funzionalità epatica) con antitiroidei',
    'Documentare i sintomi e le variazioni del peso corporeo',
  ],
  redFlags: [
    '**Crisi tiroidea**: febbre > 39°C, tachicardia > 140 bpm, confusione → **emergenza medica**',
    '**Miixedema**: ipotermia, bradicardia, stato confusionale → **ricovero immediato**',
    'Agranulocitosi (con propiltiouracile): febbre, faringite → **sospendere il farmaco e avvisare il medico**',
  ],
}

export default map
