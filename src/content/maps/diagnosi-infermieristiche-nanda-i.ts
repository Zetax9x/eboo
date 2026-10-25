import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'diagnosi-infermieristiche-nanda-i',
  chapter: 'fondamenti',
  title: 'Diagnosi infermieristiche NANDA-I',
  subtitle: 'Struttura, tipi e formulazione corretta',
  icon: 'ClipboardList',
  status: 'bozza',
  sources: [
    'Herdman T.H., Kamitsuru S., Lopes C. — NANDA International. Diagnosi infermieristiche 2024-2026, CEA',
    'Carpenito L.J. — Diagnosi infermieristiche. Applicazione alla pratica clinica, CEA',
  ],
  intro:
    'Giudizio clinico su una **risposta umana** a condizioni di salute o processi vitali (o sulla vulnerabilità a tale risposta) di una persona, famiglia, gruppo o comunità. È la base per scegliere **interventi** di cui l’infermiere è responsabile.',
  columns: 3,
  blocks: [
    {
      title: 'Componenti',
      icon: 'Layers',
      accent: 'blue',
      items: [
        '**Titolo** (etichetta): nome sintetico della diagnosi',
        '**Definizione**: descrizione precisa del significato',
        '**Caratteristiche definenti**: segni e sintomi che la confermano',
        '**Fattori correlati**: cause su cui l’infermiere **può intervenire**',
        '**Fattori di rischio**: aumentano la vulnerabilità',
        '**Popolazioni a rischio** e **condizioni associate**: utili per l’accertamento, non modificabili dall’infermiere',
      ],
    },
    {
      title: 'Tipi di diagnosi',
      icon: 'GitBranch',
      accent: 'purple',
      items: [
        '**Focalizzata sul problema**: risposta già presente',
        '**Di rischio**: vulnerabilità a sviluppare il problema',
        '**Di promozione della salute**: motivazione a migliorare il benessere',
        '**Sindrome**: gruppo di diagnosi che si presentano insieme',
        'Es. sindrome: **sindrome da fragilità dell’anziano**',
        'Organizzate in **13 domini** e relative classi',
      ],
    },
    {
      title: 'Come si scrive',
      icon: 'FileText',
      accent: 'green',
      items: [
        'Focalizzata: formato **PES** = Problema + Eziologia + Segni',
        '“**correlato a**” → fattori correlati',
        '“**evidenziato da**” (o “come dimostrato da”) → caratteristiche definenti',
        'Di rischio: titolo + **fattori di rischio**, nessun segno (il problema non c’è ancora)',
        'Promozione della salute: “**Disponibilità a migliorare…**” + segni',
      ],
    },
    {
      title: 'Esempi',
      icon: 'ClipboardCheck',
      accent: 'orange',
      items: [
        '**Liberazione inefficace delle vie aeree** correlata a secrezioni dense, evidenziata da tosse inefficace e ronchi',
        '**Dolore acuto** correlato ad agenti lesivi fisici (ferita chirurgica), evidenziato da NRS 7/10 e postura antalgica',
        '**Rischio di infezione** — fattore di rischio: procedura invasiva (catetere vescicale)',
        '**Rischio di cadute nell’adulto** — fattori: deficit di equilibrio, uso di sedativi',
      ],
    },
    {
      title: 'Diagnosi infermieristica ≠ medica',
      icon: 'Scale',
      accent: 'teal',
      items: [
        '**Medica**: identifica una **malattia** (es. polmonite)',
        '**Infermieristica**: descrive la **risposta** della persona (es. intolleranza all’attività)',
        'La medica resta invariata; l’infermieristica **cambia** con le risposte',
        'Una stessa malattia genera diagnosi diverse in persone diverse',
        '**Problemi collaborativi** (Carpenito): complicanze potenziali gestite con il medico, es. “CP: emorragia”',
      ],
    },
    {
      title: 'Errori frequenti',
      icon: 'TriangleAlert',
      accent: 'red',
      checks: [
        { text: 'Usare la **diagnosi medica** come eziologia', kind: 'no' },
        { text: 'Scrivere un **intervento** o un bisogno al posto del problema', kind: 'no' },
        { text: 'Formulare giudizi di valore o termini legalmente rischiosi', kind: 'no' },
        { text: 'Invertire problema ed eziologia', kind: 'warn' },
        { text: 'Diagnosi senza **dati** a supporto', kind: 'warn' },
        { text: 'Eziologia **modificabile** con interventi infermieristici', kind: 'ok' },
      ],
    },
  ],
  keyPoints: [
    'PES: **P**roblema “correlato a” **E**ziologia “evidenziato da” **S**egni e sintomi',
    'Diagnosi di rischio: **senza** caratteristiche definenti, solo fattori di rischio',
  ],
}

export default map
