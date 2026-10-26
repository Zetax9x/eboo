import type { AlgorithmMap } from '../../book/types'

const map: AlgorithmMap = {
  kind: 'algorithm',
  id: 'ostruzione-delle-vie-aeree-da-corpo-estraneo',
  chapter: 'emergenze',
  title: 'Ostruzione delle vie aeree da corpo estraneo',
  subtitle: 'Riconoscimento, manovre di disostruzione e gestione dell’arresto respiratorio',
  icon: 'Wind',
  status: 'bozza',
  sources: [
    'ERC — European Resuscitation Council Guidelines 2021, Basic Life Support',
    'IRC — Italian Resuscitation Council, Linee guida BLS-D',
    'OMS — World Health Organization, First Aid Guidelines',
  ],
  intro: 'Protocollo per la gestione dell’ostruzione acuta delle vie aeree da corpo estraneo (CE) in adulti e bambini coscienti e incoscienti.',
  steps: [
    {
      kind: 'start',
      title: 'Riconoscimento',
      text: 'Il paziente si porta le mani al collo, non riesce a parlare, tossire o respirare. Cianosi labiale e distress respiratorio.',
    },
    {
      kind: 'decision',
      title: 'Ostruzione parziale o completa?',
      branches: [
        { label: 'Parziale', text: 'Il paziente tosse o parla. Incoraggiare la **tosse** e non toccare la gola.' },
        { label: 'Completa', text: 'Nessun suono, nessuna tosse, nessuna respirazione. Iniziale **manovre di disostruzione**.' },
      ],
    },
    {
      kind: 'action',
      title: 'Adulto/Bambino cosciente (>1 anno)',
      text: '5 **colpi dorsali** (palmo tra le scapole) seguiti da 5 **compressioni addominali** (manovra di Heimlich). Alternare fino a risoluzione o incoscienza.',
    },
    {
      kind: 'action',
      title: 'Bambino < 1 anno cosciente',
      text: '5 **colpi dorsali** (sulla schiena, bambino a testa in giù) seguiti da 5 **compressioni toraciche** (2 dita, sterno). **Mai** compressioni addominali.',
    },
    {
      kind: 'alert',
      title: 'Il paziente diventa incosciente',
      text: 'Mettere a terra, chiamare **112/118**. Iniziare **RCP**. Prima di ogni ventilazione, guardare in bocca e rimuovere il CE solo se visibile.',
    },
    {
      kind: 'action',
      title: 'RCP con controllo della bocca',
      text: '30 compressioni toraciche. Prima di ogni insufflazione, **aprire la bocca** e rimuovere il corpo estraneo se visibile. Se non si riesce a ventilare, continuare le compressioni.',
    },
    {
      kind: 'end',
      title: 'Fine del protocollo',
      text: 'Ripresa della respirazione, arrivo del soccorso avanzato o esaurimento del soccorritore.',
    },
  ],
  side: [
    {
      title: 'Errori da evitare',
      icon: 'Ban',
      accent: 'red',
      items: [
        'Non fare **compressioni addominali** nei bambini < 1 anno',
        'Non inserire dita in bocca alla cieca (rischio di spingere il CE più in profondità)',
        'Non perdere tempo a cercare il CE se non è visibile',
        'Non sospendere la RCP per tentativi ripetuti di rimozione',
        'Non intervenire se il paziente può tossire efficacemente',
      ],
    },
    {
      title: 'Segni di ostruzione completa',
      icon: 'TriangleAlert',
      accent: 'orange',
      items: [
        'Impossibilità a parlare o tossire',
        'Assenza di suoni respiratori',
        'Cianosi (labbra, unghie bluastre)',
        'Movimenti respiratori inefficaci o assenti',
        'Agitazione, panico, perdita di coscienza',
      ],
    },
    {
      title: 'Ruolo infermieristico',
      icon: 'Stethoscope',
      accent: 'green',
      items: [
        'Formare il personale alla manovra di Heimlich e ai colpi dorsali',
        'Verificare la presenza di DAE e kit di emergenza in reparto',
        'Documentare l’evento, le manovre eseguite e l’esito',
        'Supportare psicologicamente il paziente e i familiari',
        'Segnalare casi di ostruzione ricorrente per valutazione specialistica',
      ],
    },
  ],
  keyPoints: [
    'Ostruzione completa = **5 colpi dorsali + 5 compressioni addominali** (adulto/bambino > 1 anno)',
    'Bambino < 1 anno = **5 colpi dorsali + 5 compressioni toraciche**',
    'Incoscienza = **RCP** con controllo della bocca prima di ogni ventilazione',
  ],
}

export default map
