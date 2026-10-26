import type { AlgorithmMap } from '../../book/types'

const map: AlgorithmMap = {
  kind: 'algorithm',
  id: 'intossicazioni-e-avvelenamenti',
  chapter: 'emergenze',
  title: 'Intossicazioni e avvelenamenti',
  subtitle: 'Approccio clinico, decontaminazione e gestione delle emergenze tossicologiche',
  icon: 'ShieldAlert',
  status: 'bozza',
  sources: [
    'IST — Istituto Superiore di Sanità, Linee guida per la gestione delle intossicazioni acute',
    'Società Italiana di Tossicologia (SITOX), Linee guida per la gestione delle intossicazioni acute',
    'Ministero della Salute, Piano Nazionale di Emergenza Sanitaria',
  ],
  intro: 'La gestione dell’intossicazione acuta richiede rapidità nel riconoscimento, stabilizzazione e decontaminazione. Il ruolo infermieristico è centrale nel monitoraggio e nella prevenzione delle complicanze.',
  steps: [
    {
      kind: 'start',
      title: 'Valutazione iniziale',
      text: 'Sicurezza scena, GCS, vie aeree, respirazione, circolazione',
    },
    {
      kind: 'action',
      title: 'Stabilizzazione ABC',
      text: 'O₂ ad alto flusso, accesso venoso, ECG e SpO₂',
    },
    {
      kind: 'decision',
      title: 'Identificazione sostanza',
      text: 'Confezione, odore, sintomi, contesto',
      branches: [
        { label: 'Nota', text: 'Scheda sicurezza e antidoto specifico' },
        { label: 'Ignota', text: 'Chiama Centro Antiveleni (02 66101029)' },
      ],
    },
    {
      kind: 'action',
      title: 'Decontaminazione',
      text: 'Rimuovi indumenti, lava pelle/occhi con acqua per 15 min',
    },
    {
      kind: 'decision',
      title: 'Via di esposizione',
      text: 'Orale, inalatoria, cutanea o iniettiva',
      branches: [
        { label: 'Orale', text: 'Lavaggio gastrico solo entro 1 h se indicato' },
        { label: 'Inalatoria', text: 'Rimuovi dalla fonte, O₂, valuta broncoscopia' },
      ],
    },
    {
      kind: 'action',
      title: 'Somministrazione antidoti',
      text: 'Naloxone, N-acetilcisteina, atropina, pralidossima',
    },
    {
      kind: 'alert',
      title: 'Monitoraggio continuo',
      text: 'Aritmie, convulsioni, edema polmonare, ipoglicemia',
    },
    {
      kind: 'end',
      title: 'Trasferimento in UTI',
      text: 'Instabilità emodinamica o alterazione coscienza',
    },
  ],
  side: [
    {
      title: 'Antidoti principali',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Naloxone**: oppioidi, 0,4–2 mg IV/IM',
        '**N-acetilcisteina**: paracetamolo, 150 mg/kg in 1 h',
        '**Atropina**: organofosfati, 1–2 mg IV ogni 5 min',
        '**Pralidossima**: organofosfati, 2 g IV in 20 min',
        '**Glucagone**: beta‑bloccanti, 1–5 mg IV',
        '**Calcio gluconato**: fluoro, 1–2 g IV lento',
        '**Metionina**: paracetamolo (alternativa)',
        '**Solfato di magnesio**: teofillina, 2 g IV',
      ],
    },
    {
      title: 'Segnali d’allarme',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'Coma o GCS < 8',
        'Convulsioni ripetute',
        'Aritmie cardiache gravi',
        'Edema polmonare acuto',
        'Ipotensione refrattaria',
        'Alterazione coagulazione',
        'Miosi o midriasi persistente',
        'Sudorazione profusa o secchezza cutanea',
      ],
    },
    {
      title: 'Ruolo infermieristico',
      icon: 'Stethoscope',
      accent: 'blue',
      items: [
        'Monitoraggio ECG, SpO₂, PA, temperatura',
        'Somministrazione tempestiva antidoti',
        'Documentazione tempi e dosaggi',
        'Supporto psicologico paziente/famiglia',
        'Prevenzione lesioni da decubito',
        'Comunicazione team multidisciplinare',
        'Verifica efficacia antidoto',
        'Preparazione eventuale emodialisi',
      ],
    },
  ],
  keyPoints: [
    'Contatta sempre il **Centro Antiveleni** per dosaggi e antidoti',
    'Decontaminazione cutanea entro **15 minuti** dall’esposizione',
    'Lavaggio gastrico solo entro **1 ora** e se paziente stabile',
    'Non indurre mai il vomito in caso di idrocarburi o acidi',
    'Raccogliere sempre la confezione o il residuo della sostanza',
  ],
}

export default map
