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
    'Hampton J. — ECG facile, Elsevier',
    'AHA — Advanced Cardiovascular Life Support (ACLS) Guidelines',
    'ERC 2021 — Cardiac arrest in special circumstances (iperkaliemia)',
  ],
  rhythm: 'hyperk',
  stripLabel: 'ECG in iperkaliemia',
  features: [
    { label: 'Frequenza', value: 'Normale o **bradicardia** (strip ≈ 75/min)' },
    { label: 'Ritmo', value: '**Regolare**' },
    { label: 'Onde P', value: '**Basse** o assenti (fusione con QRS)' },
    { label: 'PR', value: '**Allungato** o non misurabile' },
    { label: 'QRS', value: 'Normale; **allargato** (> 0,12 s) se K⁺ molto alto' },
    { label: 'Onda T', value: '**Alta e appuntita** (a tenda), simmetrica' },
  ],
  sections: [
    {
      title: 'Iperkaliemia (K⁺ > 5,5 mEq/L)',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'K⁺ 5,5–6,5: **Onda T acuminata**, PR allungato',
        'K⁺ 6,5–7,5: **QRS allargato**, onde P basse',
        'K⁺ > 7,5: **onda sinusoidale**, rischio FV/asistolia',
        'Cause: **insufficienza renale**, ACE-inibitori, digossina',
        'Emergenza: **calcio** EV, insulina + glucosio, salbutamolo',
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
        '**Ipocalcemia**: QT **allungato** (ST lungo), rischio torsade',
        'Ipocalcemia: rischio di **tetania**, laringospasmo',
        'Cause ipercalcemia: **iperparatiroidismo**, tumori, tiazidici',
        'Monitoraggio: **ionogramma** + ECG continuo',
      ],
    },
  ],
  nurseRole: [
    'Rilevare **ipotensione**, debolezza muscolare, aritmie',
    'Monitoraggio **ECG continuo** in pazienti a rischio',
    '**K⁺** EV sempre diluito in pompa, **mai in bolo** (di norma ≤ 10 mEq/h)',
    'Segnalare **QRS allargato** o onde T a tenda al medico',
  ],
  redFlags: [
    'K⁺ > 6,5 mEq/L con **QRS allargato**: rischio arresto cardiaco',
    'K⁺ < 2,5 mEq/L con **QT allungato**: rischio torsade di punta',
  ],
}

export default map
