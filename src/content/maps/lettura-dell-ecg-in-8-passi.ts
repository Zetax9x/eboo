import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'lettura-dell-ecg-in-8-passi',
  chapter: 'ecg',
  title: 'Lettura dell’ECG in 8 passi',
  subtitle: 'Metodo sistematico per analizzare un elettrocardiogramma in modo rapido e sicuro',
  icon: 'ClipboardCheck',
  status: 'bozza',
  sources: [
    'AHA — Basic Life Support and Cardiopulmonary Resuscitation (2020 Guidelines)',
    'ESC 2024 — Guidelines for the management of atrial fibrillation',
    'Kligfield P. et al. — Recommendations for the standardization and interpretation of the electrocardiogram, Part I, Heart Rhythm (2007)',
  ],
  columns: 2,
  intro: 'Segui questi 8 passi in ordine per non perdere informazioni critiche. Ogni passo si basa sul precedente.',
  blocks: [
    {
      title: '1. Verifica tecnica',
      icon: 'ShieldCheck',
      accent: 'blue',
      items: [
        'Identificare **paziente** e data/ora',
        'Velocità carta: **25 mm/s** (standard)',
        'Calibrazione: **10 mm/mV**',
        'Controllare artefatti (tremori, elettrodi)',
      ],
    },
    {
      title: '2. Frequenza cardiaca',
      icon: 'Gauge',
      accent: 'teal',
      items: [
        'Metodo 1: 300 / n° di grandi quadretti tra due onde R',
        'Metodo 2: 1500 / n° di piccoli quadretti tra due onde R',
        'Normale adulto: **60–100 bpm**',
        'Bradicardia: < 60 bpm; Tachicardia: > 100 bpm',
      ],
    },
    {
      title: '3. Ritmo',
      icon: 'Activity',
      accent: 'green',
      items: [
        'Regolare? (distanza R-R costante)',
        'Onde P presenti prima di ogni QRS?',
        'Rapporto P:QRS = 1:1?',
        'Origine: sinusale (P positiva in DI, aVF)',
      ],
    },
    {
      title: '4. Asse elettrico',
      icon: 'Route',
      accent: 'purple',
      items: [
        'Valutare QRS in **DI** e **aVF**',
        'DI positivo + aVF positivo → asse normale (-30° a +90°)',
        'DI positivo + aVF negativo → deviazione asse sinistra',
        'DI negativo + aVF positivo → deviazione asse destra',
      ],
    },
    {
      title: '5. Onde P',
      icon: 'Heart',
      accent: 'pink',
      items: [
        'Durata: < **0,12 s** (3 piccoli quadretti)',
        'Ampiezza: < **2,5 mm** in V1',
        'P biphasica in V1: possibile ipertrofia atriale sinistra',
        'P alta e appuntita: possibile ipertrofia atriale destra',
      ],
    },
    {
      title: '6. Intervallo PR',
      icon: 'Timer',
      accent: 'orange',
      items: [
        'Misurare da inizio P a inizio QRS',
        'Normale: **0,12–0,20 s**',
        'PR lungo: blocco AV di I grado',
        'PR corto: pre-eccitazione (WPW)',
      ],
    },
    {
      title: '7. Complesso QRS',
      icon: 'Zap',
      accent: 'red',
      items: [
        'Durata: < **0,12 s** (3 piccoli quadretti)',
        'QRS largo: blocco di branca o origine ventricolare',
        'Onde Q patologiche: > 25% ampiezza R o > 0,04 s',
        'Delta wave: pre-eccitazione',
      ],
    },
    {
      title: '8. ST e T',
      icon: 'Waves',
      accent: 'navy',
      items: [
        'ST isoelettrico o < 1 mm di rialzo/abbassamento',
        'Rialzo ST: infarto acuto, pericardite',
        'Abbassamento ST: ischemia, digossina',
        'Onde T: simmetriche, non invertite (tranne V1, aVR)',
      ],
    },
  ],
  keyPoints: [
    'Parti sempre dalla **verifica tecnica**: un ECG non calibrato è inaffidabile',
    'Se il ritmo è **irregolare**, conta le onde R in 10 secondi e moltiplica per 6',
    'Un **QRS largo** (> 0,12 s) cambia completamente l’interpretazione: pensa a blocchi o aritmie ventricolari',
  ],
}

export default map
