import type { RhythmMap } from '../../book/types'

const map: RhythmMap = {
  kind: 'rhythm',
  id: 'fibrillazione-ventricolare',
  chapter: 'ecg',
  title: 'Fibrillazione ventricolare',
  subtitle: 'Arresto cardiaco senza attività meccanica: riconoscimento e defibrillazione immediata',
  icon: 'Zap',
  status: 'bozza',
  sources: [
    'ERC 2021 — European Resuscitation Council Guidelines',
    'AHA 2020 — American Heart Association Guidelines for CPR and ECC',
    'FIO — Federazione Italiana di Cardiologia, Linee guida sulla rianimazione',
  ],
  rhythm: 'vf',
  stripLabel: 'Fibrillazione ventricolare',
  features: [
    { label: 'Frequenza', value: 'Non misurabile (attività caotica)' },
    { label: 'Ritmo', value: '**Completamente irregolare**, onde di ampiezza variabile' },
    { label: 'Onde P', value: '**Assenti**' },
    { label: 'QRS', value: '**Assente** o indistinguibile dalla linea di base' },
    { label: 'Linea di base', value: 'Onde **caotiche**, ampiezza e forma variabili' },
  ],
  sections: [
    {
      title: 'Cause principali',
      icon: 'Layers',
      accent: 'purple',
      items: [
        '**Infarto miocardico acuto** (causa più comune)',
        'Ischemia cronica, cardiopatia ischemica',
        'Scompenso cardiaco avanzato',
        'Aritmie maligne: **QT lungo**, sindrome di Brugada',
        'Squilibri elettrolitici: **ipokaliemia**, iperkaliemia',
        'Tossici: digitale, antipsicotici, cocaina',
        'Trauma toracico, ipotermia grave',
      ],
    },
    {
      title: 'Riconoscimento clinico',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Perdita di coscienza** improvvisa',
        'Apnea o respirazione agonica (gasp)',
        '**Assenza di polso** carotideo',
        'Cianosi, miosi midriatiche',
        'Attività elettrica caotica al monitor',
        'Distinzione da PEA: in VF c’è attività elettrica ma **nessuna contrazione**',
      ],
    },
    {
      title: 'Trattamento immediato',
      icon: 'Zap',
      accent: 'red',
      items: [
        '**Defibrillazione immediata**: 150–200 J biphasica (o 360 J monofasica)',
        'RCP di alta qualità: compressioni 100–120/min, profondità 5–6 cm',
        'Minimizzare le interruzioni (< 10 s)',
        '**Adrenalina** 1 mg IV ogni 3–5 min (dopo 2 defibrillazioni)',
        'Amiodarone 300 mg IV se VF/TV senza polso refrattaria',
        'Correggere le cause reversibili (4H e 4T)',
      ],
    },
  ],
  nurseRole: [
    'Riconoscere immediatamente la **VF** al monitor e attivare il team di rianimazione',
    'Applicare i **paddles** o i **paddles adesivi** e preparare la defibrillazione',
    'Eseguire **compressioni toraciche** di alta qualità durante le fasi di analisi',
    'Somministrare i farmaci secondo protocollo e documentare tempi e dosaggi',
    'Monitorare il **ritmo** dopo ogni defibrillazione e continuare la RCP',
  ],
  redFlags: [
    'VF è una **causa di arresto cardiaco** reversibile: ogni minuto senza defibrillazione riduce la sopravvivenza del 7–10%',
    'Distinguere da **PEA** e **asistolia**: in VF c’è attività elettrica caotica, in PEA attività organizzata ma senza polso, in asistolia linea piatta',
    'Non confondere con **artefatti**: verificare la presenza di polso e la qualità del segnale',
  ],
}

export default map
