import type { AlgorithmMap } from '../../book/types'

const map: AlgorithmMap = {
  kind: 'algorithm',
  id: 'crisi-convulsiva',
  chapter: 'emergenze',
  title: 'Crisi convulsiva',
  subtitle: 'Approccio infermieristico: sicurezza, gestione acuta e monitoraggio',
  icon: 'Brain',
  status: 'bozza',
  sources: [
    'AAN — American Academy of Neurology: Practice guideline update: Evidence-based management of status epilepticus (2016)',
    'NICE — National Institute for Health and Care Excellence: Seizures and epilepsy (NG217, ultima revisione)',
    'FNOPI — Codice Deontologico dell’Infermiere (2020)',
  ],
  steps: [
    { kind: 'start', title: 'Valutazione immediata', text: 'Verifica coscienza, respiro e segni vitali. **Non** inserire nulla in bocca' },
    { kind: 'action', title: 'Protezione del paziente', text: 'Allontanare oggetti pericolosi, proteggere la testa, posizionare in **PLS** se possibile' },
    { kind: 'decision', title: 'Durata della crisi', branches: [
      { label: '< 5 min', text: 'Monitoraggio continuo, ossigeno se SpO₂ < 94%' },
      { label: '≥ 5 min', text: '**Emergenza medica**: prepara benzodiazepine (es. midazolam, diazepam)' },
    ]},
    { kind: 'action', title: 'Somministrazione farmaci', text: 'Somministrare benzodiazepine secondo protocollo (es. **midazolam 10 mg** IM/IN o **diazepam 10 mg** IV lento)' },
    { kind: 'decision', title: 'Crisi controllata?', branches: [
      { label: 'Sì', text: 'Monitoraggio post-ictale, valutazione neurologica, ricerca causa' },
      { label: 'No', text: '**Status epilettico**: chiamare 118, preparare fenitoina/fosfenitoina o levetiracetam' },
    ]},
    { kind: 'alert', title: 'Status epilettico', text: 'Crisi > 5 min o crisi ripetute senza recupero. **Chiamare il 118** e iniziare terapia di seconda linea' },
    { kind: 'end', title: 'Documentazione e follow-up', text: 'Registrare durata, tipo di crisi, farmaci somministrati, parametri vitali, stato neurologico' },
  ],
  side: [
    {
      title: 'Cosa NON fare',
      icon: 'Ban',
      accent: 'red',
      items: [
        'Non inserire oggetti in bocca',
        'Non trattenere il paziente',
        'Non somministrare liquidi per via orale',
        'Non misurare la glicemia durante la crisi',
        'Non lasciare il paziente solo',
      ],
    },
    {
      title: 'Parametri da monitorare',
      icon: 'Activity',
      accent: 'blue',
      items: [
        'SpO₂ continua (target **≥ 94%**)',
        'Pressione arteriosa ogni 5 min',
        'Frequenza cardiaca e ritmo',
        'Glicemia capillare (se possibile)',
        'Temperatura corporea',
        'Stato di coscienza (GCS)',
      ],
    },
    {
      title: 'Farmaci di prima linea',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Midazolam** 10 mg IM/IN (adulto)',
        '**Diazepam** 10 mg IV lento (adulto)',
        '**Lorazepam** 4 mg IV (adulto)',
        'Se inefficaci: **fenitoina** 18 mg/kg IV o **fosfenitoina** 20 mg PE/kg',
        'Terapia di terza linea: **levetiracetam** o **fenobarbital**',
      ],
    },
  ],
  keyPoints: [
    'La priorità è la **sicurezza** del paziente e delle vie aeree',
    'Crisi > 5 min = **status epilettico**: emergenza medica',
    'Documentare sempre **durata**, **tipo** e **farmaci** somministrati',
  ],
}

export default map
