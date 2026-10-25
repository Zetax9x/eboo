import type { RhythmMap } from '../../book/types'

const map: RhythmMap = {
  kind: 'rhythm',
  id: 'extrasistoli-sopraventricolari-e-ventricolari',
  chapter: 'ecg',
  title: 'Extrasistoli',
  subtitle: 'Battiti prematuri: sopraventricolari (BESV) e ventricolari (BEV)',
  icon: 'Activity',
  status: 'bozza',
  sources: [
    'ESC 2022 — Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death',
    'Hampton J. — ECG facile, Elsevier',
  ],
  rhythm: 'pvc',
  stripLabel: 'Ritmo sinusale ≈ 75/min con un battito ectopico ventricolare (BEV)',
  features: [
    { label: 'Ritmo di base', value: 'Sinusale, RR 20 mm → **≈ 75/min**' },
    { label: 'Battito ectopico', value: '**Prematuro** (4° complesso), arriva prima del previsto' },
    { label: 'Onda P', value: '**Assente** prima del BEV' },
    { label: 'QRS', value: '**Largo (≥ 0,12 s)**, bizzarro, T di **polarità opposta**' },
    { label: 'Pausa', value: '**Compensatoria completa**: RR attorno al BEV = 2 RR' },
    { label: 'BESV', value: 'P precoce e **diversa**, QRS **stretto**, pausa non compensatoria' },
  ],
  sections: [
    {
      title: 'BESV vs BEV',
      icon: 'GitBranch',
      accent: 'purple',
      items: [
        '**BESV**: origine atriale/giunzionale; P anomala (anche invertita o nascosta)',
        'BESV: QRS **uguale** a quello sinusale',
        '**BEV**: origine ventricolare; nessuna P, QRS **largo e deforme**',
        'BEV: l’impulso non usa il sistema di conduzione, depolarizzazione **lenta**',
        'Entrambi frequenti anche nel **cuore sano**',
      ],
    },
    {
      title: 'Forme dei BEV',
      icon: 'Repeat',
      accent: 'blue',
      items: [
        '**Bigeminismo**: 1 normale + 1 BEV; **trigeminismo**: 2 + 1',
        '**Coppia**: 2 BEV di fila; **tripletta**: 3 BEV',
        '**Monomorfi** (un focus) o **polimorfi** (più foci)',
        '**R su T**: BEV sulla T precedente, rischio di FV',
        '≥ **3 BEV** consecutivi a > 100/min = **tachicardia ventricolare**',
        'TV **non sostenuta** se dura < 30 s',
      ],
    },
    {
      title: 'Cause',
      icon: 'Layers',
      accent: 'orange',
      items: [
        '**Caffeina**, alcol, fumo, stress, poco sonno',
        '**Ipokaliemia**, ipomagnesiemia',
        '**Ischemia**/IMA, scompenso, cardiomiopatie',
        '**Ipossia**, ipertiroidismo',
        'Farmaci: **digossina**, simpaticomimetici, triciclici',
        'Catetere venoso centrale o guida troppo **profondi**',
      ],
    },
    {
      title: 'Sintomi e terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        'Spesso **asintomatici**; “**battito mancato**”, colpo in gola',
        'Polso: pausa o battito debole (**deficit di polso**)',
        'Isolati e cuore sano: **nessuna terapia**, ridurre gli stimolanti',
        'Correggere **K⁺ e Mg²⁺**',
        'Frequenti e sintomatici: beta-bloccanti o **ablazione** su prescrizione',
        'Carico molto elevato: rischio di **cardiomiopatia**',
      ],
    },
  ],
  nurseRole: [
    'Valutare il paziente: **sintomi**, PA, polso apicale e radiale',
    'Registrare una **striscia** e un ECG a 12 derivazioni',
    'Controllare **elettroliti** (K⁺, Mg²⁺) e terapia (digossina)',
    'Annotare in cartella **forma e frequenza** dei BEV',
    'Educare a ridurre **caffeina**, alcol, fumo',
  ],
  redFlags: [
    'BEV **polimorfi**, a coppie o **R su T**',
    'BEV in corso di **IMA** o con dolore toracico',
    'Aumento rapido del numero di BEV',
    'Salve di **TV** al monitor: avvisare subito il medico',
  ],
}

export default map
