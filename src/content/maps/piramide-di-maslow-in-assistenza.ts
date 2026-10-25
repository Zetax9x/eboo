import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'piramide-di-maslow-in-assistenza',
  chapter: 'fondamenti',
  title: 'Piramide di Maslow in assistenza',
  subtitle: 'Gerarchia dei bisogni per prioritizzare gli interventi infermieristici',
  icon: 'Layers',
  status: 'bozza',
  sources: [
    'Maslow A.H. — A Theory of Human Motivation, Psychological Review, 1943',
    'Potter P.A., Perry A.G. — Fundamentals of Nursing, 10th ed., Elsevier',
    'FNOPI — Codice Deontologico delle Professioni Infermieristiche (2019)',
  ],
  intro:
    'Modello teorico che organizza i bisogni umani in **5 livelli gerarchici**: dalla sopravvivenza fisica all’attualizzazione di sé. In infermieristica serve a **stabilire le priorità** degli interventi quando i bisogni sono multipli.',
  illustration: {
    id: 'maslow-piramide',
    alt: 'Piramide a 5 livelli con icone simboliche',
    prompt: 'pyramid with five distinct levels, each level containing simple symbolic icons representing physiological needs, safety, belonging, esteem, and self-actualization',
    icon: 'Layers',
  },
  columns: 2,
  blocks: [
    {
      title: '1 · Bisogni fisiologici',
      icon: 'HeartPulse',
      accent: 'red',
      items: [
        'Ossigenazione, **respiro**, circolazione',
        'Idratazione, **alimentazione**, eliminazione',
        'Temperatura corporea, **sonno**, riposo',
        'Riduzione del **dolore** acuto',
        'Priorità assoluta: **ABC** (Airway, Breathing, Circulation)',
        'Intervento: ossigenoterapia, accesso venoso, analgesia',
      ],
    },
    {
      title: '2 · Sicurezza e protezione',
      icon: 'ShieldCheck',
      accent: 'blue',
      items: [
        'Sicurezza **fisica**: prevenzione cadute, infezioni',
        'Sicurezza **psicologica**: ridurre ansia e paura',
        'Ambiente sicuro: luci, corrimano, **DPI**',
        'Continuità terapeutica e **privacy**',
        'Intervento: valutazione rischio caduta, educazione',
        'Include protezione da **abusi** e violenze',
      ],
    },
    {
      title: '3 · Appartenenza e amore',
      icon: 'Users',
      accent: 'green',
      items: [
        'Relazione d’aiuto e **comunicazione** efficace',
        'Coinvolgimento della **famiglia** e caregiver',
        'Prevenire l’**isolamento** sociale e la solitudine',
        'Rispetto della **dignità** e dell’intimità',
        'Intervento: presenza attiva, ascolto empatico',
        'Promuovere il **supporto** tra pazienti (peer support)',
      ],
    },
    {
      title: '4 · Stima e autostima',
      icon: 'CircleCheck',
      accent: 'purple',
      items: [
        'Rispetto dell’**autonomia** nelle scelte possibili',
        'Valorizzare le **competenze** residue',
        'Evitare infantilizzazione e **paternalismo**',
        'Riconoscere i **successi** e i progressi',
        'Intervento: coinvolgere nelle decisioni (L. 219/2017)',
        'Promuovere l’**immagine corporea** positiva',
      ],
    },
    {
      title: '5 · Attualizzazione di sé',
      icon: 'Lightbulb',
      accent: 'orange',
      items: [
        'Realizzazione del **potenziale** personale',
        'Crescita **spirituale** e senso della vita',
        'Creatività, **apprendimento** continuo',
        'Intervento: facilitare accesso a risorse culturali',
        'Rispettare le **scelte di fine vita** (DAT, L. 219/2017)',
        'Supporto alla **crescita** anche in malattia cronica',
      ],
    },
    {
      title: 'Applicazione pratica',
      icon: 'Target',
      accent: 'navy',
      checks: [
        { text: 'Priorità: **fisiologici** prima di tutto', kind: 'ok' },
        { text: 'I bisogni non sono **rigidamente** sequenziali', kind: 'warn' },
        { text: 'Un bisogno di base insoddisfatto **ostacola** i successivi', kind: 'warn' },
        { text: 'Valutare **individualmente** ogni persona', kind: 'ok' },
        { text: 'Rivalutare dopo ogni **intervento**', kind: 'ok' },
        { text: 'Integrare con **processo di nursing**', kind: 'ok' },
      ],
    },
  ],
  keyPoints: [
    'La piramide è una **guida**, non una regola rigida: i bisogni possono coesistere',
    'In emergenza: **ABC** e bisogni fisiologici hanno priorità assoluta',
    'L’infermiere valuta i bisogni **in modo olistico** e personalizzato',
  ],
}

export default map
