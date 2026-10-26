import type { AlgorithmMap } from '../../book/types'

const map: AlgorithmMap = {
  kind: 'algorithm',
  id: 'sindrome-coronarica-acuta-in-urgenza',
  chapter: 'emergenze',
  title: 'Sindrome coronarica acuta in urgenza',
  subtitle: 'Riconoscimento, primo trattamento e attivazione del percorso di cura',
  icon: 'HeartPulse',
  status: 'bozza',
  sources: [
    'ESC — 2023 Guidelines for the management of acute coronary syndromes',
    'Ministero della Salute — Linee guida nazionali per la gestione delle sindromi coronariche acute',
    'FNOPI — Codice deontologico e standard assistenziali in emergenza',
  ],
  steps: [
    {
      kind: 'start',
      title: 'Riconoscimento',
      text: 'Dolore toracico oppressivo, irradiato a braccio sinistro, mandibola o epigastrio; durata > 20 min; associato a dispnea, sudorazione, nausea',
    },
    {
      kind: 'action',
      title: 'Valutazione rapida',
      text: 'PA, FC, SpO₂, ECG 12 derivazioni entro 10 minuti dal ricovero',
    },
    {
      kind: 'decision',
      title: 'ECG: ST elevato?',
      branches: [
        { label: 'Sì', text: '**STEMI**: attivazione immediata del laboratorio di emodinamica' },
        { label: 'No', text: 'Valutare troponine, monitorare, considerare **NSTEMI** o instabilità' },
      ],
    },
    {
      kind: 'action',
      title: 'Primo trattamento (MONA-B)',
      text: 'Aspirina 300 mg (masticata), ossigeno se SpO₂ < 90%, nitrati sublinguali, beta-bloccanti se indicati, morfina se dolore persistente',
    },
    {
      kind: 'decision',
      title: 'STEMI confermato?',
      branches: [
        { label: 'Sì', text: '**PCI primaria** entro 90 min dal primo contatto medico' },
        { label: 'No', text: 'Stratificazione del rischio, terapia medica, eventuale coronarografia' },
      ],
    },
    {
      kind: 'alert',
      title: 'Complicanze da monitorare',
      text: 'Aritmie (VF, VT), shock cardiogeno, scompenso acuto, morte improvvisa',
    },
    {
      kind: 'end',
      title: 'Continuità assistenziale',
      text: 'Trasferimento in reparto coronarico, educazione al paziente, follow-up cardiologico',
    },
  ],
  side: [
    {
      title: 'Segnali d’allarme',
      icon: 'Siren',
      accent: 'red',
      items: [
        'Dolore toracico **oppressivo** > 20 min',
        'Irradiazione a **braccio sinistro**, mandibola, epigastrio',
        '**Sudorazione fredda**, nausea, vomito',
        'Dispnea, senso di morte imminente',
        'PA < 90/60 mmHg o FC > 100/min',
        'SpO₂ < 90%',
      ],
    },
    {
      title: 'Farmaci chiave',
      icon: 'Pill',
      accent: 'green',
      items: [
        'Aspirina **300 mg** (masticata)',
        'Nitrati sublinguali **0,5 mg**',
        'Beta-bloccanti (es. metoprololo) se PA sistolica > 100 mmHg',
        'Anticoagulanti (es. enoxaparina) secondo protocollo',
        'Inibitori P2Y12 (es. ticagrelor) se PCI prevista',
        'Morfina **2–4 mg IV** se dolore persistente',
      ],
    },
    {
      title: 'Tempo è muscolo',
      icon: 'Clock',
      accent: 'blue',
      items: [
        'ECG entro **10 minuti** dal ricovero',
        'STEMI: PCI entro **90 min** dal primo contatto',
        'Troponine: dosaggio iniziale e a 3–6 ore',
        'Monitoraggio continuo ECG e SpO₂',
        'Accesso venoso calibro ≥ 18G',
        'Documentazione accurata dei tempi',
      ],
    },
  ],
  keyPoints: [
    'STEMI: **PCI primaria** entro 90 min',
    'NSTEMI: stratificazione del rischio e terapia medica',
    'Tempo di trattamento = sopravvivenza',
  ],
}

export default map
