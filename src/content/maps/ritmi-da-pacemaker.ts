import type { RhythmMap } from '../../book/types'

const map: RhythmMap = {
  kind: 'rhythm',
  id: 'ritmi-da-pacemaker',
  chapter: 'ecg',
  title: 'Ritmi da pacemaker',
  subtitle: 'Riconoscere gli artefatti di stimolazione e le modalità di funzionamento',
  icon: 'Zap',
  status: 'bozza',
  sources: [
    'ESC 2021 — Guidelines on cardiac pacing and cardiac resynchronization therapy',
    'Bernstein AD et al. — The revised NASPE/BPEG generic code for antibradycardia pacing, PACE 2002',
    'Hampton J. — ECG facile, Elsevier',
  ],
  rhythm: 'paced',
  stripLabel: 'Pacing ventricolare (VVI)',
  features: [
    { label: 'Frequenza', value: '**Fissa** o variabile (a seconda della modalità)' },
    { label: 'Artefatto', value: '**Verticale** (spike) prima del complesso QRS' },
    { label: 'QRS', value: '**Largo** (> 0,12 s) se pacing ventricolare' },
    { label: 'Onde P', value: 'Assenti o non correlate al QRS (se VVI)' },
    { label: 'Intervalli', value: 'VV (pacing) e AV (se duale) regolari' },
  ],
  sections: [
    {
      title: 'Codice NBG (5 lettere)',
      icon: 'ClipboardList',
      accent: 'blue',
      items: [
        '1ª: Camera stimolata (A, V, D)',
        '2ª: Camera sentita (A, V, D, 0)',
        '3ª: Risposta al sensing (I = inibisce, T, D, 0)',
        '4ª: Modulazione di frequenza (R = rate-responsive, 0)',
        '5ª: Stimolazione multisito (A, V, D, 0)',
        'Esempio: **VVI** = stimola V, sente V, inibito dal battito spontaneo',
      ],
    },
    {
      title: 'Tipi di pacing',
      icon: 'Layers',
      accent: 'purple',
      items: [
        '**VVI**: pacing ventricolare **a domanda**',
        '**DDD**: Pacing duale, mantiene sequenza AV',
        '**AAI**: Pacing atriale, solo se nodo AV sano',
        '**VDD**: Stimola V, sente A e V, mantiene sequenza',
        '**Biventricolare**: Resincronizzazione (CRT) per scompenso',
      ],
    },
    {
      title: 'Complicanze e allarmi',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        '**Non-capture**: Spike presente, ma no QRS',
        '**Undersensing**: spike inappropriati, anche sulla T',
        '**Oversensing**: pacing inibito (pause, asistolia)',
        '**FA con pacing**: ritmo irregolare',
        '**Batteria esaurita**: Frequenza di riserva (es. 65 bpm)',
      ],
    },
  ],
  nurseRole: [
    'Controllare la **frequenza** e la **regolarità** del ritmo',
    'Verificare la **sincronia** tra spike e QRS',
    'Monitorare i **sintomi**: sincope, dispnea, dolore toracico',
    'Registrare gli **allarmi** del dispositivo',
    'Informare il medico in caso di **non-capture** o **asistolia**',
  ],
  redFlags: [
    '**Non-capture** con sintomi: urgenza',
    '**Asistolia** o frequenza molto bassa',
    '**Dolore toracico** o dispnea acuta',
  ],
}

export default map
