import type { RhythmMap } from '../../book/types'

const map: RhythmMap = {
  kind: 'rhythm',
  id: 'asistolia-e-pea',
  chapter: 'ecg',
  title: 'Asistolia e PEA',
  subtitle: 'Riconoscere l’assenza di attività elettrica e la dissociazione elettromeccanica',
  icon: 'HeartPulse',
  status: 'bozza',
  sources: [
    'ERC 2025 — Guidelines for Resuscitation',
    'AHA 2020 — Guidelines for CPR and ECC',
    'Ministero della Salute — Raccomandazioni per la gestione delle emergenze',
  ],
  rhythm: 'asystole',
  stripLabel: 'Asistolia vs PEA',
  features: [
    { label: 'Frequenza', value: 'Asistolia: **assente**; PEA: **variabile** (spesso bradicardia)' },
    { label: 'Ritmo', value: 'Asistolia: **piatto**; PEA: **organizzato** ma inefficace' },
    { label: 'Onde P', value: 'Asistolia: **assenti**; PEA: **presenti** (spesso)' },
    { label: 'QRS', value: 'Asistolia: **assente**; PEA: **presente** (stretto o largo)' },
    { label: 'Polso', value: 'Asistolia: **assente**; PEA: **assente** (dissociazione)' },
  ],
  sections: [
    {
      title: 'Cause principali',
      icon: 'Layers',
      accent: 'purple',
      items: [
        'Asistolia: **ipossia**, ipokaliemia, acidosi, emorragia massiva',
        'Asistolia: sovradosaggio farmaci (beta-bloccanti, calcio-antagonisti)',
        'PEA: **tamponamento cardiaco**, embolia polmonare massiva',
        'PEA: ipovolemia grave, pneumotorace a tensione',
        'PEA: ipokaliemia, ipercaliemia, ipocalcemia',
        'PEA: trauma toracico, rottura aortica',
      ],
    },
    {
      title: 'Diagnosi differenziale',
      icon: 'Microscope',
      accent: 'blue',
      items: [
        'Asistolia: escludere **artefatti** (cavi staccati, interferenze)',
        'Asistolia: verificare con **2 derivazioni** (es. I e V1)',
        'PEA: cercare **polso carotideo** per 10 s (non oltre)',
        'PEA: distinguere da **fibrillazione ventricolare** (QRS caotico)',
        'PEA: ecocardiogramma point-of-care per tamponamento',
        'PEA: TTE per pneumotorace a tensione (assenza sliding lung)',
      ],
    },
    {
      title: 'Gestione immediata',
      icon: 'Siren',
      accent: 'red',
      items: [
        'Asistolia: **BLS** di alta qualità (compressioni 100–120/min)',
        'Asistolia: **nessuna defibrillazione** (non è shockable)',
        'Asistolia: adrenalina 1 mg IV ogni 3–5 min',
        'PEA: **BLS** + ricerca e trattamento della causa reversibile',
        'PEA: **nessuna defibrillazione** (non è shockable)',
        'PEA: considerare **pericardiocentesi** se tamponamento',
      ],
    },
  ],
  nurseRole: [
    'Rilevare il **polso carotideo** per 10 s (non oltre) per confermare l’assenza',
    'Monitorare l’**ECG** in 2 derivazioni per escludere artefatti',
    'Somministrare **adrenalina** secondo protocollo (1 mg IV ogni 3–5 min)',
    'Cercare e trattare le **cause reversibili** (4H e 4T)',
    'Documentare tempi, farmaci e risposte del paziente',
  ],
  redFlags: [
    'Asistolia persistente dopo **10 min** di RCP: considerare prognosi sfavorevole',
    'PEA con **tamponamento**: rischio di collasso emodinamico immediato',
    'PEA con **embolia polmonare**: rischio di morte improvvisa',
  ],
}

export default map
