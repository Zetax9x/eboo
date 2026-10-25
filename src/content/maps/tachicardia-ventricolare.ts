import type { RhythmMap } from '../../book/types'

const map: RhythmMap = {
  kind: 'rhythm',
  id: 'tachicardia-ventricolare',
  chapter: 'ecg',
  title: 'Tachicardia ventricolare',
  subtitle: 'Riconoscere la TV monomorfa e polimorfa e agire in emergenza',
  icon: 'Activity',
  status: 'bozza',
  sources: [
    'ESC 2024 — Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death',
    'AHA/ACC/HRS 2017 — Guideline for Management of Patients With Ventricular Arrhythmias',
    'Hampton J. — ECG facile, Elsevier',
  ],
  rhythm: 'vt',
  stripLabel: 'Tachicardia ventricolare monomorfa',
  features: [
    { label: 'Frequenza', value: '**> 100 bpm** (spesso 120–250/min)' },
    { label: 'Ritmo', value: '**Regolare** (monomorfa) o irregolare (polimorfa)' },
    { label: 'Onde P', value: '**Assenti** o dissociazione AV' },
    { label: 'PR', value: 'Non misurabile' },
    { label: 'QRS', value: '**Largo** (> 0,12 s), morfologia atipica' },
  ],
  sections: [
    {
      title: 'Cause principali',
      icon: 'Layers',
      accent: 'purple',
      items: [
        '**Cardiopatia ischemica** (infarto miocardico pregresso o acuto)',
        '**Scompenso cardiaco** severo',
        '**Miocardiopatie** (dilated, aritmogene)',
        '**Sindrome del QT lungo** (congenita o farmacologica)',
        '**Squilibrio elettrolitico** (ipokaliemia, ipomagnesemia)',
        'Farmaci pro-aritmici (antiaritmici di classe IA/III)',
      ],
    },
    {
      title: 'Sintomi e segni',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Palpitazioni**, dispnea, dolore toracico',
        '**Svenimento** o presincope',
        'Ipotensione, cianosi, alterazione della coscienza',
        'Polso irregolare o assente',
        'In TV polimorfa (Torsade): **svenimento ricorrente**',
      ],
    },
    {
      title: 'Terapia e gestione',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**TV instabile** (ipotensione, coscienza alterata): **cardioversione elettrica sincronizzata** immediata',
        '**TV stabile**: amiodarone IV (150 mg in 10 min, poi 1 mg/min per 6 h, poi 0,5 mg/min)',
        'Correggere cause reversibili: **elettroliti**, ipossia, ischemia',
        'TV polimorfa con QT lungo: **magnesio** IV (2 g in 15–20 min)',
        'Evitare antiaritmici di classe IA/IC in TV da ischemia',
      ],
    },
  ],
  nurseRole: [
    'Riconoscere il tracciato: **QRS largo**, frequenza > 100, assenza di onde P',
    'Valutare **stato di coscienza** e pressione arteriosa ogni 1–2 min',
    'Preparare **defibrillatore** e farmaci (amiodarone, magnesio)',
    'Monitorare **elettroliti** (K⁺, Mg²⁺, Ca²⁺) e gas ematici',
    'Documentare **tempo di insorgenza** e risposta alla terapia',
  ],
  redFlags: [
    '**Ipotensione** + TV: rischio di degenerazione in **fibrillazione ventricolare**',
    'TV con **QT lungo**: alta probabilità di Torsade de Pointes',
    'Svenimento ricorrente senza causa evidente: indagare **sindrome del QT lungo**',
  ],
}

export default map
