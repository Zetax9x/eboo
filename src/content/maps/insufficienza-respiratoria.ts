import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'insufficienza-respiratoria',
  chapter: 'patologie',
  title: 'Insufficienza respiratoria',
  subtitle: 'Deficit di ossigenazione e/o ventilazione: classificazione, cause, diagnosi e assistenza',
  icon: 'Wind',
  status: 'bozza',
  sources: [
    'ATS/ACCP — Clinical Practice Guideline: Diagnosis and Management of Acute Hypoxemic Respiratory Failure',
    'SIC — Linee guida per la gestione dell’insufficienza respiratoria acuta',
    'NICE — Acute respiratory failure: assessment and management',
  ],
  definition:
    'Incapacità dell’apparato respiratorio di garantire un adeguato **scambio gassoso** (ossigenazione e/o eliminazione di CO₂), con alterazioni dei gas ematici arteriosi.',
  illustration: {
    id: 'ir-polmoni-gas',
    alt: 'Polmoni con alveoli e scambio gassoso alterato',
    prompt: 'patient sitting upright in a hospital bed wearing a clear oxygen face mask, breathing with visible effort, shoulders raised',
    icon: 'Wind',
  },
  types: [
    { name: 'Tipo I (ipossiemica)', text: '**PaO₂ < 60 mmHg** con PaCO₂ normale o bassa. Cause: polmonite, edema polmonare, EP.' },
    { name: 'Tipo II (ipercapnica)', text: '**PaCO₂ > 50 mmHg** con o senza ipossiemia. Cause: BPCO, miopatie, depressione del centro respiratorio.' },
    { name: 'Acuta', text: 'Insorge in **ore-giorni**. Richiede intervento immediato.' },
    { name: 'Cronica', text: 'Durata **> 4 settimane**. Compensazione renale (bicarbonati elevati).' },
  ],
  sections: [
    {
      title: 'Cause principali',
      icon: 'Layers',
      accent: 'purple',
      items: [
        '**Polmonite**, edema polmonare, embolia polmonare (Tipo I)',
        '**BPCO**, asma grave, miopatie, obesità (Tipo II)',
        'Trauma toracico, pneumotorace, emotorace',
        'Sindrome da distress respiratorio acuto (SDRA)',
        'Depressione del centro respiratorio (oppiacei, sedativi)',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Dispnea**, tachipnea (> 25 atti/min), uso muscoli accessori',
        'Cianosi, agitazione, confusione, sonnolenza',
        'Sudorazione, tachicardia, ipotensione',
        'Paradosso toracico (in caso di trauma o miopatia)',
        'Diminuzione della SpO₂ (< 90%)',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**Gas ematici arteriosi (EGA)**: PaO₂, PaCO₂, pH, HCO₃⁻',
        '**SpO₂** periferica continua',
        'RX torace: infiltrati, edema, pneumotorace',
        'ECG: aritmie, ipertensione polmonare',
        'Emogasanalisi: valutare il rapporto **PaO₂/FiO₂**',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Ossigenoterapia**: cannule nasali, maschera, Venturi',
        '**CPAP/BiPAP**: per insufficienza ipercapnica o edema polmonare',
        'Ventilazione meccanica invasiva se fallimento O₂ non invasivo',
        'Trattamento della causa: antibiotici, diuretici, broncodilatatori',
        'Posizione semi-seduta (45–90°) per facilitare la ventilazione',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Arresto cardiaco** per ipossia grave',
        'Aritmie (fibrillazione atriale, tachicardia ventricolare)',
        'Danno cerebrale anossico',
        'Infezioni nosocomiali (polmonite associata a ventilatore)',
        'Lesioni da pressione, atrofia muscolare',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        '**SpO₂** continua, target **94–98%** (o 88–92% in BPCO)',
        'Frequenza respiratoria, profondità, uso muscoli accessori',
        'EGA ogni 30–60 min in fase acuta',
        'Pressione arteriosa, frequenza cardiaca, livello di coscienza',
        'Bilanciamento idrico, diuresi',
      ],
    },
  ],
  nursing: [
    'Posizionare il paziente in **semi-seduta** o Fowler per massimizzare la ventilazione',
    'Somministrare ossigeno secondo prescrizione, monitorando **SpO₂** e parametri vitali',
    'Aspirare le vie aeree se necessario, mantenendo la **sterilità** e la delicatezza',
    'Educare il paziente alla respirazione diaframmatica e al controllo dell’ansia',
    'Documentare i parametri, la risposta alla terapia e gli eventi avversi',
  ],
  redFlags: [
    '**SpO₂ < 90%** persistente nonostante O₂ ad alto flusso: avvisare subito il medico',
    'Alterazione del livello di coscienza, agitazione o sonnolenza: possibile **ipercapnia** o ipossia cerebrale',
    'Apnea, cianosi grave, aritmie: **attivare il codice arrossato** e prepararsi alla rianimazione',
  ],
}

export default map
