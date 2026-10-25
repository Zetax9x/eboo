import type { RhythmMap } from '../../book/types'

const map: RhythmMap = {
  kind: 'rhythm',
  id: 'ecg-e-squilibri-elettrolitici',
  chapter: 'ecg',
  title: 'ECG e squilibri elettrolitici',
  subtitle: 'Riconoscere ipokaliemia, iperkaliemia e ipercalcemia sul tracciato',
  icon: 'Activity',
  status: 'bozza',
  sources: [
    'Katz L. — ECG: interpretazione pratica, 2a ed.',
    'AHA — Advanced Cardiovascular Life Support (ACLS) Guidelines',
    'UpToDate — Electrolyte abnormalities and ECG changes',
  ],
  rhythm: 'hyperk',
  stripLabel: 'ECG in iperkaliemia',
  features: [
    { label: 'Frequenza', value: 'Spesso **bradicardia** o normale' },
    { label: 'Ritmo', value: 'Regolare, ma con **QRS allargato**' },
    { label: 'Onde P', value: '**Basse** o assenti (fusione con QRS)' },
    { label: 'PR', value: '**Allungato** o non misurabile' },
    { label: 'QRS', value: '**Allargato** (> 0,12 s), forma a triangolo' },
    { label: 'Onda T', value: '**Picco acuminata** (a tenda), simmetrica' },
  ],
  sections: [
    {
      title: 'Iperkaliemia (K⁺ > 5,5 mEq/L)',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'K⁺ 5,5–6,5: **Onda T acuminata**, PR allungato',
        'K⁺ 6,5–7,5: **QRS allargato**, onde P basse',
        'K⁺ > 7,5: **QRS a triangolo**, rischio asistolia',
        'Cause: **insufficienza renale**, ACE-inibitori, digossina',
        'Emergenza: **glucagone**, calcio gluconato, insulina + glucosio',
      ],
    },
    {
      title: 'Ipokaliemia (K⁺ < 3,5 mEq/L)',
      icon: 'Droplet',
      accent: 'blue',
      items: [
        'K⁺ 3,0–3,5: **Onda U** visibile, T bassa',
        'K⁺ < 3,0: **ST depresso**, QT allungato',
        'Rischio: **aritmie ventricolari**, torsade di punta',
        'Cause: **diuretici**, vomito, diarrea, iperaldosteronismo',
        'Terapia: **sostituzione K⁺** per via EV o orale',
      ],
    },
    {
      title: 'Alterazioni del calcio',
      icon: 'Bone',
      accent: 'purple',
      items: [
        '**Ipercalcemia**: QT **accorciato**, rischio aritmie',
        '**Ipopotassiemia**: QT **allungato**, rischio torsade',
        'Ipopotassiemia: **Onda T invertita**, ST depresso',
        'Cause: **paratiroidismo**, tumori, farmaci (tiazidici)',
        'Monitoraggio: **ionogramma** + ECG continuo',
      ],
    },
  ],
  nurseRole: [
    'Rilevare **ipotensione**, debolezza muscolare, aritmie',
    'Monitoraggio **ECG continuo** in pazienti a rischio',
    'Somministrare **K⁺** lentamente (max 10 mEq/h per CVC)',
    'Segnalare **QRS allargato** o onde T acuminata al medico',
  ],
  redFlags: [
    'K⁺ > 6,5 mEq/L con **QRS allargato**: rischio arresto cardiaco',
    'K⁺ < 2,5 mEq/L con **QT allungato**: rischio torsade di punta',
  ],
}

export default map
