import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'ipoglicemia',
  chapter: 'patologie',
  title: 'Ipoglicemia',
  subtitle: 'Definizione, cause, sintomi, gestione acuta e prevenzione',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'ADA — Standards of Care in Diabetes: Hypoglycemia in Diabetes',
    'SID-AMD — Linee guida per la prevenzione e la gestione dell’ipoglicemia',
    'OMS — Global report on diabetes',
  ],
  definition:
    'Condizione acuta caratterizzata da **glicemia < 70 mg/dL** (3,9 mmol/L) che può provocare sintomi neuroglicopenici e, se grave, perdita di coscienza.',
  illustration: {
    id: 'ipoglicemia-metabolismo',
    alt: 'Rappresentazione schematica del metabolismo del glucosio e dell’insulina',
    prompt: 'pale sweaty person with trembling hands sitting at a table, a glass of fruit juice and a few sugar cubes in front of them',
    icon: 'Droplet',
  },
  types: [
    { name: 'Lieve', text: 'Glicemia **70–54 mg/dL**. Sintomi autolimitanti, risolvibile con zuccheri orali.' },
    { name: 'Moderata', text: 'Glicemia **< 55 mg/dL**. Richiede intervento attivo e monitoraggio.' },
    { name: 'Grave', text: 'Glicemia **< 40 mg/dL** o perdita di coscienza. Necessita glucagone o glucosio EV.' },
    { name: 'Ricorrente', text: 'Episodi frequenti (> 2/mese). Richiede rivedere terapia e stile di vita.' },
  ],
  sections: [
    {
      title: 'Cause principali',
      icon: 'FlaskConical',
      accent: 'purple',
      items: [
        '**Eccesso di insulina** o ipoglicemizzanti orali (sulfoniluree, glinidi)',
        'Pasto saltato o ritardato dopo somministrazione farmaco',
        'Attività fisica intensa senza adeguamento della terapia',
        'Alcol a stomaco vuoto (inibisce la gluconeogenesi epatica)',
        'Insufficienza renale o epatica (ridotta clearance dei farmaci)',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Adrenergici**: tremori, sudorazione fredda, tachicardia, ansia',
        '**Neuroglicopenici**: confusione, difficoltà di parola, visione doppia',
        'Debolezza muscolare, cefalea, fame intensa',
        'Comportamento anomalo, aggressività, sonnolenza',
        'In casi gravi: convulsioni, coma',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'TestTube',
      accent: 'blue',
      items: [
        '**Glicemia capillare** < 70 mg/dL (3,9 mmol/L)',
        'Sintomi coerenti con la glicemia bassa',
        'Risoluzione dei sintomi dopo correzione della glicemia',
        'Escludere altre cause (es. ictus, avvelenamento)',
        'In caso di ricorrenza: dosaggio insulina, C-peptide, anticonsumi',
      ],
    },
    {
      title: 'Terapia immediata',
      icon: 'Syringe',
      accent: 'green',
      items: [
        '**Regola del 15**: 15 g di glucosio orale, attendere 15 min, ricontrollare',
        'Se glicemia ancora < 70: ripetere la dose di zuccheri',
        'Paziente non cosciente: **glucagone IM/SC** (1 mg adulto)',
        'In ambito ospedaliero: **glucosio 50% EV** (25–50 ml)',
        'Dopo la correzione: pasto con carboidrati complessi',
      ],
    },
    {
      title: 'Prevenzione',
      icon: 'ShieldCheck',
      accent: 'teal',
      items: [
        'Educare al riconoscimento precoce dei sintomi',
        'Verificare l’aderenza alla terapia e la correttezza delle dosi',
        'Pianificare pasti regolari e attività fisica',
        'Monitorare la glicemia prima di pasti, esercizio, guida',
        'Rivedere la terapia con il medico in caso di episodi ricorrenti',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Perdita di coscienza** e rischio di trauma (cadute, incidenti)',
        'Convulsioni e danno cerebrale in caso di ipoglicemia prolungata',
        'Aritmie cardiache (tachicardia, aritmie ventricolari)',
        'Morte in rari casi di ipoglicemia grave non trattata',
        'Tolleranza all’ipoglicemia (riduzione dei sintomi di allarme)',
      ],
    },
  ],
  nursing: [
    'Monitorare la glicemia capillare e **documentare i valori**',
    'Verificare la somministrazione corretta di insulina e farmaci',
    'Educare il paziente alla **regola del 15** e al riconoscimento dei sintomi',
    'Controllare la disponibilità di glucosio orale e glucagone',
    'Valutare la necessità di adeguare la terapia con il medico',
  ],
  redFlags: [
    '**Paziente non cosciente**: non somministrare nulla per bocca, chiamare il 118',
    'Ipoglicemia ricorrente (> 2/mese): segnalare al medico per rivedere la terapia',
    'Sintomi neurologici persistenti dopo correzione: escludere ictus o altre cause',
  ],
}

export default map
