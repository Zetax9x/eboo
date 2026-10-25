import type { AlgorithmMap } from '../../book/types'

const map: AlgorithmMap = {
  kind: 'algorithm',
  id: 'insufficienza-respiratoria-acuta',
  chapter: 'emergenze',
  title: 'Insufficienza respiratoria acuta',
  subtitle: 'Diagnosi rapida, classificazione I/II tipo e gestione assistenziale',
  icon: 'Wind',
  status: 'bozza',
  sources: [
    'SIC — Società Italiana di Anestesia, Analgesia, Rianimazione e Terapia Intensiva (Linee guida su supporto ventilatorio)',
    'GOLD — Global Strategy for Diagnosis, Management, Prevention and Treatment of COPD (2024)',
    'GINA — Global Initiative for Asthma (Report 2024)',
  ],
  intro: 'L’insufficienza respiratoria acuta (IRA) è un’emergenza medica caratterizzata da un’alterazione della funzione respiratoria che porta a ipossiemia, ipercapnia o entrambe. La gestione richiede una valutazione rapida e un supporto mirato.',
  steps: [
    { kind: 'start', title: 'Riconoscimento immediato', text: 'Dispnea, uso muscoli accessori, cianosi, alterazioni dello stato di coscienza' },
    { kind: 'action', title: 'Valutazione ABC', text: 'Airway, Breathing, Circulation. Valutare la pervietà delle vie aeree e la qualità della ventilazione' },
    { kind: 'decision', title: 'SpO₂ < 90% o segni di fatica respiratoria?', branches: [
        { label: 'Sì', text: 'Iniziare supporto ossigenoterapico e considerare ventilazione non invasiva (VNI)' },
        { label: 'No', text: 'Monitoraggio continuo e ricerca della causa sottostante' },
      ]},
    { kind: 'action', title: 'Emogasanalisi arteriosa (EGA)', text: 'Determinare PaO₂, PaCO₂, pH, HCO₃⁻ per classificare il tipo di IRA' },
    { kind: 'decision', title: 'Classificazione', branches: [
        { label: 'Tipo I', text: 'PaO₂ < 60 mmHg, PaCO₂ normale o bassa (es. polmonite, edema polmonare)' },
        { label: 'Tipo II', text: 'PaO₂ < 60 mmHg e PaCO₂ > 50 mmHg (es. BPCO, asma grave)' },
      ]},
    { kind: 'action', title: 'Trattamento della causa', text: 'Antibiotici, broncodilatatori, diuretici, fluidoterapia secondo la diagnosi' },
    { kind: 'end', title: 'Rivalutazione continua', text: 'Monitorare SpO₂, frequenza respiratoria, stato di coscienza e parametri emogasanalitici' },
  ],
  side: [
    {
      title: 'Parametri di allarme',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'SpO₂ **< 90%** nonostante O₂ supplementare',
        'Frequenza respiratoria **> 30/min** o **< 8/min**',
        'PaCO₂ **> 50 mmHg** con pH **< 7,35**',
        'Alterazione dello **stato di coscienza**',
        'Uso marcato dei **muscoli accessori**',
        'Cianosi delle **labbra e delle unghie**',
      ],
    },
    {
      title: 'Supporto ossigenoterapico',
      icon: 'Wind',
      accent: 'blue',
      items: [
        'Tipo I: target SpO₂ **94–98%**',
        'Tipo II (BPCO): target SpO₂ **88–92%**',
        'Maschera Venturi per controllo preciso della FiO₂',
        'Evitare iperossigenazione nei pazienti ipercapnici',
        'Monitorare l’EGA dopo **30 min** di terapia',
        'Passare a VNI se la SpO₂ non migliora',
      ],
    },
    {
      title: 'Ruolo infermieristico',
      icon: 'Stethoscope',
      accent: 'green',
      items: [
        'Posizionare il paziente in **decubito semi-seduto**',
        'Somministrare farmaci per via **nebulizzata** o IV',
        'Monitorare la **fatica respiratoria** e la tolleranza alla VNI',
        'Prevenire le **lesioni da pressione** (maschera, tubi)',
        'Comunicare tempestivamente i **cambiamenti clinici**',
        'Assicurare la **sicurezza** durante la ventilazione',
      ],
    },
  ],
  keyPoints: [
    'La **classificazione** in Tipo I e Tipo II guida la terapia',
    'Nei pazienti con **BPCO** il target SpO₂ è **88–92%**',
    'L’**EGA** è fondamentale per la diagnosi e il monitoraggio',
  ],
}

export default map
