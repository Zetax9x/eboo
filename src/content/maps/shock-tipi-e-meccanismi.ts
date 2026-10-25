import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'shock-tipi-e-meccanismi',
  chapter: 'patologie',
  title: 'Shock: tipi e meccanismi',
  subtitle: 'Classificazione, fisiopatologia e gestione infermieristica delle sindromi da shock',
  icon: 'Siren',
  status: 'bozza',
  sources: [
    'Surviving Sepsis Campaign: International Guidelines (2021)',
    'AHA — Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care (2020)',
    'FNOPI — Codice Deontologico e Linee guida per la pratica infermieristica',
  ],
  definition:
    'Sindrome clinica caratterizzata da **ipoperfusione tissutale** e **malfunzionamento cellulare** dovuta a un’alterazione della circolazione ematica.',
  illustration: {
    id: 'shock-circolazione',
    alt: 'Sistema cardiovascolare con flusso ematico ridotto',
    prompt: 'human heart and major blood vessels with reduced blood flow, cells showing stress, medical context',
    icon: 'HeartPulse',
  },
  types: [
    { name: 'Ipoipolemico', text: 'Perdita di volume ematico (emorragia) o extravasazione (ustioni, pancreatite).' },
    { name: 'Cardiogeno', text: 'Insufficienza della pompa cardiaca (infarto, miocardite, aritmie).' },
    { name: 'Distributivo', text: 'Vasodilatazione patologica (anafilassi, sepsi, neurogeno).' },
    { name: 'Ostruttivo', text: 'Ostruzione meccanica del flusso (embolia polmonare, tamponamento).' },
  ],
  sections: [
    {
      title: 'Fisiopatologia',
      icon: 'Brain',
      accent: 'purple',
      items: [
        'Diminuzione del **gasto cardiaco** o della **resistenza vascolare**',
        'Attivazione dei sistemi di compensazione (simpatico, renina-angiotensina)',
        'Riduzione della **perfusione tissutale** e dell’ossigenazione cellulare',
        'Passaggio da metabolismo aerobico a **anaerobico** (acidosi lattica)',
        'Danno d’organo multiorgano (MODS) se non trattato',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Tachicardia**, ipotensione (PAS < 90 mmHg o Δ > 40 mmHg)',
        'Pelle fredda, umida, pallida o cianotica',
        'Diuresi ridotta (< 0,5 mL/kg/h)',
        'Confusione, agitazione, alterazione dello stato di coscienza',
        'Tachipnea, dolore toracico (se cardiogeno)',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        'Valutazione rapida: **ABC**, parametri vitali, stato di coscienza',
        'Emogasanalisi: **lattato** > 2 mmol/L, pH, BE',
        'Ecocardiografia: funzione ventricolare, tamponamento',
        'Emocromo, coagulazione, elettroliti, funzionalità renale',
        'RX torace, ECG, TAC (se indicato)',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Ossigeno** ad alto flusso, ventilazione meccanica se necessaria',
        'Accesso venoso calibro 14-16, **fluidoterapia** (cristalloidi)',
        'Vasopressori (noradrenalina, adrenalina) secondo tipo di shock',
        'Trattamento della causa (chirurgia, antibiotici, emostasi)',
        'Monitoraggio invasivo (catetere arterioso, CVC) in UTI',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Danno d’organo multiorgano** (renale, epatico, polmonare)',
        'Coagulopatia da consumo (DIC)',
        'Lesione renale acuta (LRA)',
        'Sindrome da distress respiratorio acuto (SDRA)',
        'Morte per arresto cardiaco',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        'Parametri vitali ogni 5-15 min (PA, FC, FR, SpO₂, T°)',
        '**Diuresi** oraria (target > 0,5 mL/kg/h)',
        'Emogasanalisi e lattato ematico seriati',
        'Stato neurologico (GCS) e perfusione periferica',
        'Bilancio idrico e risposta alla fluidoterapia',
      ],
    },
  ],
  nursing: [
    'Posizionare il paziente in **posizione di Trendelenburg** (solo se indicato) o con gambe elevate',
    'Garantire un **accesso venoso** rapido e somministrare fluidi secondo protocollo',
    'Monitorare continuamente **PA, FC, SpO₂** e stato di coscienza',
    'Raccogliere campioni per **emogasanalisi** e lattato ematico',
    'Preparare e somministrare **vasopressori** e farmaci secondo prescrizione',
  ],
  redFlags: [
    '**Ipotensione refrattaria** alla fluidoterapia: avvisare subito il medico',
    'Alterazione dello stato di coscienza o **arresto cardiaco**: iniziare BLS/ACLS',
    'Diuresi assente o **lattato > 4 mmol/L**: rischio di danno d’organo imminente',
  ],
}

export default map
