import type { RhythmMap } from '../../book/types'

const map: RhythmMap = {
  kind: 'rhythm',
  id: 'tachicardia-ventricolare',
  chapter: 'ecg',
  title: 'Tachicardia ventricolare',
  subtitle: 'Riconoscere e gestire l’aritmia ventricolare sostenuta',
  icon: 'Activity',
  status: 'bozza',
  sources: [
    'ESC 2024 — Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death',
    'AHA/ACC/HRS 2015 — Guidelines for Management of Adult Patients With Supraventricular Tachycardia (aggiornamenti successivi)',
    'Hampton J. — ECG facile, Elsevier',
  ],
  rhythm: 'vt',
  stripLabel: 'Tachicardia ventricolare',
  features: [
    { label: 'Frequenza', value: '**100–250 bpm** (ventricolare)' },
    { label: 'Ritmo', value: '**Regolare** o leggermente irregolare' },
    { label: 'Onde P', value: '**Assenti** o dissociazione AV' },
    { label: 'PR', value: 'Non misurabile' },
    { label: 'QRS', value: '**Largo** (> 0,12 s), morfologia atipica' },
  ],
  sections: [
    {
      title: 'Cause e fattori di rischio',
      icon: 'Layers',
      accent: 'purple',
      items: [
        '**Cardiopatia ischemica** (post-infarto, cardiomiopatia ischemica)',
        '**Cardiomiopatie** (dilated, aritmogene, ipertrofica)',
        'Scompenso cardiaco, **valvulopatie**',
        'Squilibri elettrolitici (ipokaliemia, ipomagnesemia)',
        'Tossicità da farmaci (antiaritmici, digitalici)',
      ],
    },
    {
      title: 'Sintomi e segni',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Palpitazioni**, dispnea, dolore toracico',
        'Svenimento, presincope, **sincope**',
        'Ipotensione, tachicardia, **alterazione della coscienza**',
        'Spesso **asintomatica** se stabile',
      ],
    },
    {
      title: 'Terapia e gestione',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Stabile**: amiodarone IV, lidocaina, beta-bloccanti',
        '**Instabile**: cardioversione sincronizzata immediata',
        '**Senza polso**: defibrillazione non sincronizzata + BLS',
        'Correggere cause reversibili (elettroliti, ischemia)',
      ],
    },
  ],
  nurseRole: [
    'Riconoscere il tracciato: **QRS largo**, FC > 100, assenza di onde P',
    'Valutare **stabilità emodinamica**: PA, coscienza, perfusione',
    'Preparare **cardioversione** o defibrillazione se indicato',
    'Monitorare **elettroliti** e livelli di farmaci antiaritmici',
    'Documentare **orari**, frequenza, risposta al trattamento',
  ],
  redFlags: [
    '**Ipotensione** con tachicardia ventricolare: instabilità emodinamica',
    'Svenimento o **alterazione della coscienza**: rischio di degenerazione in VF',
    'QRS molto largo con **dissociazione AV**: VT ad alto rischio',
  ],
}

export default map
