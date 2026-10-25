import type { RhythmMap } from '../../book/types'

const map: RhythmMap = {
  kind: 'rhythm',
  id: 'bradicardia-sinusale',
  chapter: 'ecg',
  title: 'Bradicardia sinusale',
  subtitle: 'Ritmo sinusale regolare ma lento: fisiologica o segno di malattia',
  icon: 'HeartPulse',
  status: 'bozza',
  sources: [
    'ERC 2025 — Linee guida per la rianimazione: Advanced Life Support (algoritmo bradicardia)',
    'ESC 2021 — Guidelines on cardiac pacing and cardiac resynchronization therapy',
    'Hampton J. — ECG facile, Elsevier',
  ],
  rhythm: 'sinus-brady',
  stripLabel: 'Bradicardia sinusale · FC ≈ 45/min',
  features: [
    { label: 'Frequenza', value: '**< 60/min** (strip: RR ≈ 33 mm → **≈ 45/min**)' },
    { label: 'Ritmo', value: '**Regolare**: intervalli RR costanti' },
    { label: 'Onde P', value: '**Presenti**, positive in DII, una prima di ogni QRS' },
    { label: 'PR', value: 'Normale e costante (0,12–0,20 s; strip **0,16 s**)' },
    { label: 'QRS', value: '**Stretto** (< 0,12 s), ogni P è condotta' },
    { label: 'Soglia', value: 'Classica **< 60/min**; ESC usa **< 50/min**' },
  ],
  sections: [
    {
      title: 'Cause',
      icon: 'Layers',
      accent: 'purple',
      items: [
        '**Fisiologiche**: atleta allenato, sonno, stimolo vagale (vomito, defecazione, aspirazione)',
        '**Farmaci**: beta-bloccanti, calcio-antagonisti, **digossina**, amiodarone',
        '**Ipotiroidismo**, **ipotermia**, iperkaliemia',
        '**IMA inferiore** (coronaria destra irrora il nodo SA)',
        '**Ipertensione endocranica** (triade di Cushing)',
        'Malattia del nodo del seno; **ipossia** grave (soprattutto nel bambino)',
      ],
    },
    {
      title: 'Sintomi e valutazione',
      icon: 'Eye',
      accent: 'orange',
      items: [
        'Spesso **asintomatica** (atleta: anche 40/min)',
        'Ipoperfusione: astenia, **vertigini**, lipotimia, sincope',
        'Ipotensione, confusione, dolore toracico, dispnea',
        'Valutare con approccio **ABCDE**',
        'ECG a 12 derivazioni: escludere **BAV**',
      ],
    },
    {
      title: 'Segni di instabilità (ERC)',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        '**Shock** (ipotensione, cute fredda e marezzata)',
        '**Sincope**',
        '**Ischemia** miocardica (dolore toracico)',
        '**Scompenso** cardiaco grave',
        'Rischio di **asistolia**: pause > 3 s, BAV Mobitz II o III grado',
      ],
    },
    {
      title: 'Trattamento',
      icon: 'Pill',
      accent: 'green',
      items: [
        'Asintomatica: **nessuna terapia**, cercare e correggere la causa',
        'Rivedere i **farmaci** bradicardizzanti',
        'Instabile: **atropina** EV secondo protocollo ALS',
        'Se inefficace: **pacing transcutaneo**, infusione di adrenalina o isoprenalina',
        'Malattia del nodo sintomatica: **pacemaker** definitivo',
      ],
    },
  ],
  nurseRole: [
    'Rilevare **FC per 60 s**, PA, SpO₂, stato di coscienza',
    'Monitoraggio **ECG continuo** e ECG a 12 derivazioni',
    'Controllare la terapia: **sospendere e segnalare** se FC bassa prima di beta-bloccanti/digossina',
    'Accesso venoso; preparare **atropina** e piastre per pacing',
    'Paziente sintomatico: **a letto**, alzarsi con cautela',
  ],
  redFlags: [
    'Bradicardia con **ipotensione**, sincope o dolore toracico',
    'FC in rapido calo o **pause** sinusali',
    'Bradicardia + **ipertensione** + respiro irregolare: ipertensione endocranica',
    'Comparsa di **BAV** avanzato al monitor',
  ],
}

export default map
