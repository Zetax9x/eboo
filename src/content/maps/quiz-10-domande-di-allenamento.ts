import type { QuizMap } from '../../book/types'

const map: QuizMap = {
  kind: 'quiz',
  id: 'quiz-10-domande-di-allenamento',
  chapter: 'concorsi',
  title: 'Quiz di allenamento',
  subtitle: '10 domande su normativa e clinica, con risposta commentata',
  icon: 'ListChecks',
  status: 'bozza',
  sources: [
    'DM 739/1994; L. 833/1978; L. 24/2017; L. 219/2017',
    'Ministero della Salute — Raccomandazione n. 1 (KCl concentrato)',
    'OMS — I 5 momenti per l’igiene delle mani; ERC — BLS',
  ],
  questions: [
    {
      q: 'Il profilo professionale dell’infermiere è definito da:',
      options: ['DM 739/1994', 'L. 42/1999', 'DPR 225/1974', 'L. 251/2000'],
      answer: 0,
      why: 'Il DPR 225/74 era il mansionario, abolito dalla L. 42/99.',
    },
    {
      q: 'La Legge Gelli-Bianco (L. 24/2017) riguarda:',
      options: ['Sicurezza delle cure e responsabilità professionale', 'Il consenso informato', 'La privacy', 'La formazione ECM'],
      answer: 0,
      why: 'Disciplina sicurezza delle cure e responsabilità degli esercenti le professioni sanitarie.',
    },
    {
      q: 'Le DAT (disposizioni anticipate di trattamento) sono previste dalla:',
      options: ['L. 833/1978', 'L. 219/2017', 'L. 38/2010', 'D.Lgs. 81/2008'],
      answer: 1,
      why: 'La L. 219/2017 regola consenso informato e DAT.',
    },
    {
      q: 'Il Servizio Sanitario Nazionale è stato istituito dalla:',
      options: ['L. 180/1978', 'D.Lgs. 502/1992', 'L. 833/1978', 'L. 251/2000'],
      answer: 2,
      why: 'Principi: universalità, uguaglianza, equità.',
    },
    {
      q: 'Quanti sono i momenti OMS per l’igiene delle mani?',
      options: ['3', '4', '5', '6'],
      answer: 2,
      why: 'Prima e dopo il contatto, prima di manovre asettiche, dopo liquidi biologici, dopo l’ambiente.',
    },
    {
      q: 'Il punteggio minimo della Glasgow Coma Scale è:',
      options: ['0', '1', '3', '5'],
      answer: 2,
      why: 'Range 3–15; GCS ≤ 8 indica coma.',
    },
    {
      q: 'La scala di Braden valuta il rischio di:',
      options: ['Cadute', 'Lesioni da pressione', 'Malnutrizione', 'Delirium'],
      answer: 1,
      why: 'Punteggio 6–23: più è basso, più il rischio è alto.',
    },
    {
      q: 'Nel BLS dell’adulto il rapporto compressioni/ventilazioni è:',
      options: ['15:2', '30:2', '5:1', '30:1'],
      answer: 1,
      why: 'Compressioni profonde 5–6 cm a 100–120/min.',
    },
    {
      q: 'Il KCl concentrato (Raccomandazione ministeriale n. 1):',
      options: ['Si può dare in bolo', 'Va conservato separato dagli altri farmaci', 'Non richiede diluizione', 'Si conserva liberamente in reparto'],
      answer: 1,
      why: 'Conservato separato ed etichettato, sempre diluito, mai in bolo.',
    },
    {
      q: 'L’acronimo ECM indica:',
      options: ['Educazione Continua in Medicina', 'Esame Clinico Mirato', 'Emergenza Coordinata Medica', 'Elenco Competenze Minime'],
      answer: 0,
      why: 'Formazione continua obbligatoria: crediti da acquisire ogni triennio.',
    },
  ],
}

export default map
