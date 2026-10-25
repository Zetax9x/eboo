import type { AlgorithmMap } from '../../book/types'

const map: AlgorithmMap = {
  kind: 'algorithm',
  id: 'crisi-ipertensiva',
  chapter: 'emergenze',
  title: 'Crisi ipertensiva',
  subtitle: 'Riconoscimento, valutazione e gestione dell’ipertensione severa',
  icon: 'Gauge',
  status: 'bozza',
  sources: [
    'ESC/ESH Guidelines for the management of arterial hypertension (2023)',
    'SIC — Società Italiana di Cardiologia, Linee guida sulla crisi ipertensiva',
    'AHA/ACC — Hypertension in Adults: A Guideline (2017, aggiornato)',
  ],
  steps: [
    {
      kind: 'start',
      title: 'Riconoscimento',
      text: 'PA sistolica **≥ 180 mmHg** e/o diastolica **≥ 120 mmHg**',
    },
    {
      kind: 'action',
      title: 'Valutazione immediata',
      text: 'Misurare la PA in **entrambi gli arti** e verificare la tecnica di misurazione',
    },
    {
      kind: 'decision',
      title: 'Presenza di sintomi o segni di danno d’organo?',
      branches: [
        {
          label: 'Sì',
          text: '**Crisi ipertensiva con danno d’organo** (urgenza ipertensiva)',
        },
        {
          label: 'No',
          text: '**Crisi ipertensiva senza danno d’organo** (emergenza ipertensiva)',
        },
      ],
    },
    {
      kind: 'alert',
      title: 'Urgenza ipertensiva: attivazione immediata',
      text: 'Chiama il **112/118**, monitora continuamente, prepara la terapia IV',
    },
    {
      kind: 'action',
      title: 'Emergenza ipertensiva: gestione ambulatoriale',
      text: 'Riposo, rivalutazione PA dopo **30–60 min**, educazione al paziente',
    },
    {
      kind: 'end',
      title: 'Documentazione e follow-up',
      text: 'Registra valori, sintomi, terapie somministrate e piano di controllo',
    },
  ],
  side: [
    {
      title: 'Segni di danno d’organo (Urgenza)',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        '**Encefalopatia ipertensiva**: cefalea, confusione, convulsioni',
        '**Edema polmonare acuto**: dispnea, rantoli, SpO₂ < 90%',
        '**Sindrome coronarica acuta**: dolore toracico, ECG alterato',
        '**Ictus ischemico o emorragico**: deficit neurologici, GCS alterato',
        '**Insufficienza renale acuta**: oliguria, creatinina > 1,5 mg/dL',
        '**Retinopatia ipertensiva**: emorragie, essudati, papilledema',
      ],
    },
    {
      title: 'Terapia IV (Urgenza)',
      icon: 'Syringe',
      accent: 'blue',
      items: [
        '**Nicardipina** IV: 5–15 mg/h, titolabile',
        '**Labetalolo** IV: 20 mg bolo, poi 1–2 mg/min',
        '**Nitroglicerina** IV: 5–100 µg/min, per edema polmonare',
        '**Clonidina** IV: 0,5–1,5 mg, per encefalopatia',
        '**Obiettivo**: ridurre PA del **20–25%** in 1–2 ore',
        'Evitare cali rapidi > **25%** in 24 ore (rischio ischemia)',
      ],
    },
    {
      title: 'Gestione ambulatoriale (Emergenza)',
      icon: 'Stethoscope',
      accent: 'green',
      items: [
        'Riposo in ambiente tranquillo, **evitare stimoli**',
        'Rivalutazione PA dopo **30–60 minuti**',
        'Se PA scende < **160/100 mmHg**: monitoraggio e dimissione',
        'Se PA resta alta: prescrizione di **terapia orale** (es. captopril, amlodipina)',
        'Educazione: aderenza terapeutica, dieta **DASH**, limitare sale',
        'Controllo PA entro **48–72 ore**',
      ],
    },
  ],
  keyPoints: [
    'Distinzione cruciale: **urgenza** (danno d’organo) vs **emergenza** (asintomatica)',
    'Nell’urgenza: **terapia IV** e riduzione PA graduale (**20–25%** in 1–2 ore)',
    'Nell’emergenza: **terapia orale** e monitoraggio, evitare panico',
  ],
}

export default map
