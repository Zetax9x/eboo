import type { RhythmMap } from '../../book/types'

const map: RhythmMap = {
  kind: 'rhythm',
  id: 'stemi-e-nstemi',
  chapter: 'ecg',
  title: 'STEMI e NSTEMI',
  subtitle: 'Sindrome coronarica acuta: riconoscere la differenza all’ECG',
  icon: 'HeartPulse',
  status: 'bozza',
  sources: [
    'ESC 2023 — Guidelines for the management of acute coronary syndromes',
    'Hampton J. — ECG facile, Elsevier',
    'Thygesen K. et al. — Fourth universal definition of myocardial infarction, 2018',
  ],
  rhythm: 'stemi',
  stripLabel: 'STEMI — Sollevazione del tratto ST',
  features: [
    { label: 'Frequenza', value: 'Variabile (spesso sinusale o tachicardia)' },
    { label: 'Ritmo', value: 'Regolare o irregolare (possibili aritmie associate)' },
    { label: 'Onde P', value: 'Presenti (se ritmo sinusale)' },
    { label: 'PR', value: 'Normale o allungato (blocco AV)' },
    { label: 'QRS', value: 'Stretto (< 0,12 s) salvo blocchi di branca' },
    { label: 'ST', value: '**Sollevato** (STEMI) o **depresso** (NSTEMI)' },
  ],
  sections: [
    {
      title: 'STEMI: Caratteristiche ECG',
      icon: 'Activity',
      accent: 'red',
      items: [
        '**Sopraslivellamento ST** ≥ 1 mm in ≥ 2 contigue (V2–V3: 1,5–2,5 mm)',
        'Derivazioni inferiori (II, III, aVF) → **arteria coronaria destra**',
        'Derivazioni anteriori (V1-V4) → **interventricolare anteriore**',
        'Onda Q patologica (> 0,04 s) in fase evolutiva',
        'Inversione delle onde T nelle fasi successive',
        'Tempo di insorgenza sintomi: **< 2 ore** per massimizzare beneficio',
      ],
    },
    {
      title: 'NSTEMI: Caratteristiche ECG',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Depressione ST** ≥ 0,5 mm in ≥ 2 derivazioni contigue',
        'Inversione delle onde T profonde e simmetriche',
        'Assenza di sollevamento ST significativo',
        'ECG può essere **normale** o con alterazioni minime',
        'Diagnosi confermata da **troponina** elevata',
        'Rischio trombotico elevato ma occlusione non completa',
      ],
    },
    {
      title: 'Differenze Cliniche e Gestione',
      icon: 'Workflow',
      accent: 'blue',
      items: [
        'STEMI: **PCI primaria** se eseguibile entro **120 min** dalla diagnosi',
        'NSTEMI: coronarografia **< 2 h** (rischio altissimo) o **< 24 h** (alto)',
        'Entrambi: **aspirina** + **ticagrelor/clopidogrel** + **eparina**',
        'STEMI: **trombolisi** se angioplastica non disponibile in tempo',
        'NSTEMI: **anticoagulazione** + antiaggreganti, no trombolisi',
        'Monitoraggio continuo ECG per aritmie e recidive',
      ],
    },
  ],
  nurseRole: [
    'Riconoscere **dolore toracico** tipico e atipico, chiedere durata e caratteristiche',
    'Effettuare **ECG a 12 derivazioni** entro 10 minuti dal primo contatto',
    'Somministrare **aspirina 300 mg** masticata se non controindicata',
    'Monitorare **PA, FC, SpO₂** e segni di shock cardiogeno',
    'Preparare per **angioplastica** o trombolisi secondo protocollo',
    'Sorvegliare **aritmie** (TV, FV, blocchi AV) e segni di scompenso',
  ],
  redFlags: [
    'STEMI con **shock cardiogeno** (PA < 90 mmHg, oliguria, confusione)',
    'NSTEMI con **instabilità emodinamica** o aritmie maligne',
    'Dolore toracico ricorrente nonostante **terapia antiaggregante**',
  ],
}

export default map
