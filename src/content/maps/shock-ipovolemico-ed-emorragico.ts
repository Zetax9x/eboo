import type { AlgorithmMap } from '../../book/types'

const map: AlgorithmMap = {
  kind: 'algorithm',
  id: 'shock-ipovolemico-ed-emorragico',
  chapter: 'emergenze',
  title: 'Shock ipovolemico ed emorragico',
  subtitle: 'Riconoscimento, stabilizzazione e gestione della perdita di volume ematico',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'ATLS — Advanced Trauma Life Support, 10th Edition (ACS/CCE)',
    'Surviving Sepsis Campaign: International Guidelines (2021)',
    'Linee guida nazionali per la gestione dell’emorragia traumatica (Ministero della Salute)',
  ],
  intro: 'Lo shock ipovolemico è una condizione di emergenza in cui il volume circolante insufficiente compromette la perfusione tissutale. La forma emorragica richiede un approccio immediato per controllare la perdita di sangue e ripristinare il volume.',
  steps: [
    { kind: 'start', title: 'Riconoscimento immediato', text: 'Pelle fredda, umida, pallida; tachicardia; ipotensione; alterazione dello stato di coscienza' },
    { kind: 'action', title: 'Chiamata al 112/118', text: 'Comunica: paziente in shock, emorragia attiva, età, sesso, eventuali traumi' },
    { kind: 'decision', title: 'Emorragia esterna visibile?', branches: [
      { label: 'Sì', text: 'Applica pressione diretta con garze sterili; se necessario, turapressore o laccio emostatico (nota l’ora)' },
      { label: 'No', text: 'Prosegui con la valutazione dei segni di shock interno' },
    ]},
    { kind: 'action', title: 'Posizione e termoregolazione', text: 'Decubito supino con arti inferiori elevati (se non controindicato); copri il paziente per prevenire l’ipotermia' },
    { kind: 'action', title: 'Accesso venoso e fluidoterapia', text: 'Instaura 2 vie venose periferiche di grosso calibro (14-16G); inizia infusione di cristalloidi (es. Ringer lattato o NaCl 0,9%)' },
    { kind: 'decision', title: 'Risposta alla fluidoterapia?', branches: [
      { label: 'Sì', text: 'Continua il monitoraggio; valuta la necessità di trasfusione di emazie concentrate' },
      { label: 'No', text: 'Escalation: trasfusione di sangue, attivazione del protocollo di massiva trasfusione' },
    ]},
    { kind: 'alert', title: 'Segnali di peggioramento', text: 'Peggioramento della coscienza, bradicardia, ipotensione refrattaria: prepara per l’intervento chirurgico o la TACE' },
    { kind: 'end', title: 'Trasferimento in reparto', text: 'Documenta: ora di inizio, volume infuso, risposta clinica, interventi eseguiti' },
  ],
  side: [
    {
      title: 'Segni di shock',
      icon: 'Activity',
      accent: 'red',
      items: [
        'Tachicardia (>100 bpm)',
        'Ipotensione (PAS <90 mmHg)',
        'Pelle fredda, umida, pallida',
        'Oliguria (<0,5 ml/kg/h)',
        'Alterazione dello stato di coscienza',
        'Tachipnea (>20 atti/min)',
      ],
    },
    {
      title: 'Fluidoterapia iniziale',
      icon: 'Droplet',
      accent: 'blue',
      items: [
        'Cristalloidi: Ringer lattato o NaCl 0,9%',
        'Volume iniziale: 1-2 litri (adulto)',
        'Rivalutare la risposta dopo ogni 500 ml',
        'Evitare il sovraccarico idrico',
        'Considerare la trasfusione se emoglobina <7 g/dL',
        'Monitorare la diuresi con catetere urinario',
      ],
    },
    {
      title: 'Controlli emostatici',
      icon: 'Bandage',
      accent: 'orange',
      items: [
        'Pressione diretta con garze sterili',
        'Turapressore per emorragie degli arti',
        'Laccio emostatico (solo se necessario, nota l’ora)',
        'Evitare la rimozione del laccio in sede preospedaliera',
        'Valutare le emorragie interne (addome, torace)',
        'Preparare per la TACE o la chirurgia',
      ],
    },
  ],
  keyPoints: [
    'Il tempo è cruciale: ogni minuto di emorragia non controllata peggiora la prognosi',
    'La fluidoterapia non sostituisce il controllo emostatico',
    'Monitora continuamente: pressione, frequenza cardiaca, saturazione, diuresi',
  ],
}

export default map
