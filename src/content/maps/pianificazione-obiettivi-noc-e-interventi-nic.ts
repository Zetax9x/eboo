import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'pianificazione-obiettivi-noc-e-interventi-nic',
  chapter: 'fondamenti',
  title: 'Pianificazione: NOC e NIC',
  subtitle: 'Priorità, risultati attesi e interventi infermieristici',
  icon: 'ListChecks',
  status: 'bozza',
  sources: [
    'Moorhead S. et al. — Classificazione NOC dei risultati infermieristici, CEA',
    'Butcher H.K. et al. — Classificazione NIC degli interventi infermieristici, CEA',
    'Johnson M. et al. — NOC and NIC Linkages to NANDA-I and Clinical Conditions, Elsevier',
  ],
  intro:
    'Dopo la diagnosi si decide **cosa vogliamo ottenere** (risultati, linguaggio **NOC**) e **come** ottenerlo (interventi, linguaggio **NIC**). Le tre tassonomie collegate formano il linguaggio **NNN**: NANDA-I → NOC → NIC.',
  columns: 3,
  blocks: [
    {
      title: 'Stabilire le priorità',
      icon: 'ArrowUp',
      accent: 'red',
      items: [
        'Prima i problemi che minacciano la **vita**: **ABC**',
        'Poi **sicurezza** (cadute, infezioni, rischio di danno)',
        'Bisogni **fisiologici** prima di quelli psicosociali (Maslow)',
        'Problemi **attuali** di solito prima di quelli di rischio',
        'Considerare le **priorità della persona**',
        'Le priorità **cambiano** con le condizioni cliniche',
      ],
    },
    {
      title: 'Obiettivi (risultati attesi)',
      icon: 'Target',
      accent: 'blue',
      items: [
        'Centrati sulla **persona**, non sull’infermiere',
        'Elementi: **soggetto**, **verbo** osservabile, **criterio**, condizioni, **tempo**',
        'Es. “**Entro 48 h** la persona cammina per **20 m** con deambulatore”',
        'A **breve termine** (ore-giorni) e a **lungo termine** (settimane)',
        'Concordati con la persona e realistici',
        'Evitare verbi vaghi: “capire”, “sapere”, “migliorare”',
      ],
    },
    {
      title: 'NOC: i risultati',
      icon: 'Gauge',
      accent: 'green',
      items: [
        'Nursing Outcomes Classification (Università dell’**Iowa**)',
        'Ogni risultato ha titolo, definizione e **indicatori**',
        'Misura su **scala Likert a 5 punti**',
        'Es. **1** = gravemente compromesso → **5** = non compromesso',
        'Punteggio **iniziale**, punteggio **atteso**, poi rivalutazione',
        'Es. NOC “**Livello del dolore**”: dolore riferito, espressione facciale, irrequietezza',
      ],
    },
    {
      title: 'NIC: gli interventi',
      icon: 'Hand',
      accent: 'orange',
      items: [
        'Nursing Interventions Classification (**Iowa**)',
        'Ogni intervento ha titolo, definizione e una lista di **attività**',
        'Si scelgono le attività adatte alla **singola persona**',
        'Comprende interventi diretti e indiretti, fisiologici e psicosociali',
        'Es. NIC “**Gestione del dolore**”, “**Prevenzione delle cadute**”',
        'Ogni intervento ha una **motivazione** (razionale)',
      ],
    },
    {
      title: 'Tipi di intervento',
      icon: 'Users',
      accent: 'purple',
      items: [
        '**Autonomi**: decisi dall’infermiere (es. riposizionamento, educazione)',
        '**Su prescrizione**: terapia, esami (es. somministrare un analgesico)',
        '**Collaborativi**: con altri professionisti (fisioterapista, dietista)',
        'Attività **attribuibili all’OSS**: la responsabilità resta all’infermiere',
        'Ogni prescrizione infermieristica: **cosa, come, quando, chi**',
      ],
    },
    {
      title: 'Piano di assistenza',
      icon: 'ClipboardCheck',
      accent: 'teal',
      checks: [
        { text: 'Scritto e **condiviso** con l’équipe', kind: 'ok' },
        { text: '**Personalizzato**, anche partendo da piani standard', kind: 'ok' },
        { text: 'Collegamento chiaro diagnosi → NOC → NIC', kind: 'ok' },
        { text: '**Rivisto** a ogni variazione clinica', kind: 'ok' },
        { text: 'Obiettivi non misurabili = valutazione impossibile', kind: 'warn' },
        { text: 'Interventi copiati senza adattarli alla persona', kind: 'no' },
      ],
    },
  ],
  keyPoints: [
    '**NANDA-I** = il problema · **NOC** = il risultato atteso · **NIC** = l’intervento',
    'L’obiettivo descrive un **comportamento della persona** osservabile entro un **tempo** definito',
  ],
}

export default map
