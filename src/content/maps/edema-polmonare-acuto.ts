import type { AlgorithmMap } from '../../book/types'

const map: AlgorithmMap = {
  kind: 'algorithm',
  id: 'edema-polmonare-acuto',
  chapter: 'emergenze',
  title: 'Edema polmonare acuto',
  subtitle: 'Riconoscimento, stabilizzazione e assistenza infermieristica',
  icon: 'Wind',
  status: 'bozza',
  sources: [
    'ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure (2021)',
    'Linee guida nazionali per la gestione dell’insufficienza cardiaca acuta (Ministero della Salute)',
    'Ferri F., Cazzola M. — Medicina interna, capitolo su insufficienza cardiaca ed edema polmonare',
  ],
  intro: 'Accumulo rapido di liquido negli alveoli con dispnea grave. Causa più comune: insufficienza cardiaca acuta.',
  steps: [
    {
      kind: 'start',
      title: 'Riconoscimento',
      text: 'Dispnea grave, ortopnea, tosse con espettorato schiumoso, cianosi, crepitii diffusi.',
    },
    {
      kind: 'action',
      title: 'Stabilizzazione',
      text: 'Posizione **seduta 45–90°**, gambe penzoloni. O₂ ad alto flusso (**10–15 L/min**). Monitoraggio continuo.',
    },
    {
      kind: 'decision',
      title: 'SpO₂ < 90% o distress severo?',
      branches: [
        { label: 'Sì', text: '**CPAP/BiPAP** (PEEP 5–10 cmH₂O). Se inefficace: **intubazione**.' },
        { label: 'No', text: 'Mantenere O₂ ad alto flusso. Rivalutare ogni **5 min**.' },
      ],
    },
    {
      kind: 'action',
      title: 'Accessi e prelievi',
      text: 'Due accessi venosi. Prelievi: **BNP**, emogasanalisi, elettroliti, troponina.',
    },
    {
      kind: 'decision',
      title: 'Cardiogeno o non cardiogeno?',
      branches: [
        { label: 'Cardiogeno', text: '**Furosemide** EV + **vasodilatazione**. Evitare fluidi.' },
        { label: 'Non cardiogeno', text: 'Supporto ventilatorio. Indagare causa (ARDS, sepsi). **Evitare diuretici**.' },
      ],
    },
    {
      kind: 'action',
      title: 'Terapia farmacologica',
      text: '**Furosemide** 40–80 mg EV. **Nitroglicerina** SL/EV. Morfina solo se PA sistolica > 90 mmHg.',
    },
    {
      kind: 'alert',
      title: 'Segnali di peggioramento',
      text: 'SpO₂ in calo, PA sistolica < 90 mmHg, alterazione coscienza. **Chiamare medico/USCI**.',
    },
    {
      kind: 'end',
      title: 'Monitoraggio',
      text: 'Diuresi oraria (> 0,5 mL/kg/h), elettroliti, PA, FC, SpO₂. Documentare tempi e terapie.',
    },
  ],
  side: [
    {
      title: 'Segni e sintomi',
      icon: 'Stethoscope',
      accent: 'orange',
      items: [
        '**Dispnea** intensa, ortopnea',
        'Tosse con **espettorato schiumoso**',
        'Crepitii polmonari **diffusi**',
        'Tachicardia, tachipnea',
        'Cianosi, sudorazione fredda',
        'Agitazione, ansia',
        'Rumori cardiaci: **S3**, soffio mitralico',
      ],
    },
    {
      title: 'Parametri chiave',
      icon: 'TestTubes',
      accent: 'blue',
      items: [
        '**SpO₂**: target ≥ 94%',
        '**PA**: sistolica > 90 mmHg',
        '**BNP**: elevato in cardiogeno',
        '**K⁺**: 3,5–5,0 mEq/L',
        '**Diuresi**: > 0,5 mL/kg/h',
        '**FC**: 100–120 bpm',
        '**EtCO₂**: 35–45 mmHg',
      ],
    },
    {
      title: 'Ruolo infermieristico',
      icon: 'ShieldCheck',
      accent: 'green',
      items: [
        'Posizione **seduta 45–90°**',
        'O₂ ad alto flusso, monitorare SpO₂',
        'Somministrare farmaci, monitorare PA',
        'Monitorare **diuresi oraria**',
        'Riconoscere peggioramento, chiamare medico',
        'Documentare tempi e terapie',
        'Rassicurare il paziente',
      ],
    },
  ],
  keyPoints: [
    'Posizione **seduta** e O₂ ad alto flusso sono le prime azioni',
    'Distinguere **cardiogeno** (diuretici) da **non cardiogeno** (supporto)',
    'Monitorare **SpO₂, PA, diuresi** continuamente',
    'Evitare fluidi in caso di **cardiogeno**',
    'Riconoscere **shock cardiaco** (PA < 90 mmHg)',
  ],
}

export default map
