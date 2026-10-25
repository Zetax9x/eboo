import type { RhythmMap } from '../../book/types'

const map: RhythmMap = {
  kind: 'rhythm',
  id: 'flutter-atriale',
  chapter: 'ecg',
  title: 'Flutter atriale',
  subtitle: 'Macrorientro atriale: onde a dente di sega e conduzione regolare',
  icon: 'Waves',
  status: 'bozza',
  sources: [
    'ESC 2019 — Guidelines for the management of patients with supraventricular tachycardia',
    'ESC 2024 — Guidelines for the management of atrial fibrillation (anticoagulazione)',
    'Hampton J. — ECG facile, Elsevier',
  ],
  rhythm: 'flutter',
  stripLabel: 'Flutter atriale con conduzione 4:1 · FC ventricolare ≈ 75/min',
  features: [
    { label: 'Freq. atriale', value: '**250–350/min** (tipica ≈ **300**; strip: onda F ogni 5 mm)' },
    { label: 'Freq. ventricolare', value: 'Dipende dal blocco: 2:1 ≈ **150**, 4:1 ≈ **75/min** (strip)' },
    { label: 'Ritmo', value: 'Di solito **regolare** (irregolare se conduzione variabile)' },
    { label: 'Onde P', value: 'Assenti: **onde F a dente di sega**, nette in DII, DIII, aVF' },
    { label: 'Isoelettrica', value: '**Assente** tra le onde F' },
    { label: 'QRS', value: '**Stretto** (< 0,12 s)' },
  ],
  sections: [
    {
      title: 'Meccanismo',
      icon: 'RefreshCw',
      accent: 'purple',
      items: [
        '**Macrorientro** nell’atrio destro (flutter tipico)',
        'Circuito che passa per l’**istmo cavo-tricuspidale**',
        'Il nodo AV filtra: conduce **1 onda F ogni 2, 3 o 4**',
        'Conduzione **1:1** (≈ 300/min) rara e pericolosa',
        'Spesso coesiste o si alterna con la **FA**',
      ],
    },
    {
      title: 'Cause',
      icon: 'Layers',
      accent: 'orange',
      items: [
        '**Cardiopatia** ischemica, ipertensiva, valvolare',
        '**BPCO**, embolia polmonare',
        'Dopo **cardiochirurgia**',
        'Ipertiroidismo, alcol',
        'Dilatazione atriale, **scompenso**',
        'Antiaritmici di classe IC possono favorire la **conduzione 1:1**',
      ],
    },
    {
      title: 'Come smascherarlo',
      icon: 'Target',
      accent: 'blue',
      items: [
        'FC **fissa ≈ 150/min**: pensare a flutter 2:1',
        'Cercare le onde F in **DII, DIII, aVF** e V1',
        '**Manovre vagali** o adenosina aumentano il blocco e rivelano le F',
        'Sintomi: **palpitazioni**, dispnea, astenia, angina',
        'Spesso parossistico e **recidivante**',
        'Rischio **tromboembolico** simile alla FA',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        'Instabile: **cardioversione elettrica sincronizzata**',
        'Frequenza: **beta-bloccanti**, calcio-antagonisti',
        'Ritmo: cardioversione elettrica o farmacologica',
        '**Ablazione** dell’istmo cavo-tricuspidale: alto successo',
        '**Anticoagulazione** con gli stessi criteri della FA',
      ],
    },
  ],
  nurseRole: [
    'Monitoraggio **ECG continuo**, PA, SpO₂, sintomi',
    'ECG a 12 derivazioni; **striscia** durante manovre o farmaci',
    'Preparare il **defibrillatore** in modalità SYNC',
    'Terapia anticoagulante: controllare i **sanguinamenti**',
    'Cardioversione: digiuno, **consenso**, sedazione, monitoraggio dopo',
  ],
  redFlags: [
    'Conduzione **1:1**: FC ≈ 300/min, rischio di collasso',
    '**Ipotensione**, dolore toracico, sincope',
    'Segni di **scompenso** acuto',
    'Deficit neurologico: possibile **ictus** embolico',
  ],
}

export default map
