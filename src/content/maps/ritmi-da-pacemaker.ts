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
    'ESC 2023 — Guidelines on cardiac pacing and resynchronization therapy',
    'Hindricks G, et al. — ACC/AHA/HRS Guideline for the Management of Patients With Supraventricular Tachycardia (2015)',
    'Klein H, et al. — Pacemaker and ICD programming: A practical guide',
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
      title: 'Codice NACC (5 lettere)',
      icon: 'ClipboardList',
      accent: 'blue',
      items: [
        '1ª: Camera stimolata (A, V, D)',
        '2ª: Camera inibita (A, V, D, 0)',
        '3ª: Camera stimolata in risposta (A, V, D, 0)',
        '4ª: Modalità (Fissa, Rate-Responsive, Resync)',
        '5ª: Modalità aggiuntiva (es. Pacing di riserva)',
        'Esempio: **VVI** = Stimola V, Inibisce V, non risponde',
      ],
    },
    {
      title: 'Tipi di pacing',
      icon: 'Layers',
      accent: 'purple',
      items: [
        '**VVI**: Pacing ventricolare fisso, più comune',
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
        '**Non-sensing**: Pacing inappropriato (doppia stimolazione)',
        '**Oversensing**: Inibizione del pacing (asistolia)',
        '**Atrio-fibrillazione con pacing**: Ritmo irregolare',
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
