import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'il-processo-di-nursing',
  chapter: 'fondamenti',
  title: 'Il processo di nursing',
  subtitle: 'Il metodo dell’assistenza in 5 fasi',
  icon: 'Workflow',
  status: 'bozza',
  sources: [
    'Wilkinson J.M. — Processo infermieristico e pensiero critico, CEA',
    'Herdman T.H., Kamitsuru S., Lopes C. — NANDA International. Diagnosi infermieristiche 2024-2026, CEA',
  ],
  intro:
    'Metodo **scientifico e sistematico** con cui l’infermiere identifica i bisogni di assistenza della persona, poi pianifica, attua e valuta interventi **personalizzati**.',
  illustration: {
    id: 'pn-ciclo',
    alt: 'Infermiere che parla con un paziente, ciclo a 5 frecce',
    prompt: 'nurse talking with a seated patient, a circular cycle of five arrows around them',
    icon: 'RefreshCw',
  },
  columns: 3,
  blocks: [
    {
      title: '1 · Accertamento',
      icon: 'Target',
      accent: 'blue',
      items: [
        'Dati **soggettivi** (riferiti) e **oggettivi** (osservati, misurati)',
        'Fonti: persona, familiari, documentazione, équipe',
        'Strumenti: intervista, esame fisico, **scale**',
        'Modelli guida: **Gordon**, **Henderson**',
      ],
    },
    {
      title: '2 · Diagnosi',
      icon: 'ClipboardList',
      accent: 'purple',
      items: [
        'Giudizio clinico sulle **risposte** della persona (NANDA-I)',
        'Formato **PES**: problema, eziologia (“correlato a”), segni (“evidenziato da”)',
        'Tipi: focalizzata sul problema, **di rischio**, di promozione della salute',
        'Non è la diagnosi medica: riguarda risposte, non malattie',
      ],
    },
    {
      title: '3 · Pianificazione',
      icon: 'ListChecks',
      accent: 'green',
      items: [
        'Stabilire le **priorità** (ABC, Maslow)',
        'Definire **risultati attesi** misurabili (NOC)',
        'Scegliere gli **interventi** (NIC)',
        'Scrivere il **piano di assistenza**',
      ],
    },
    {
      title: '4 · Attuazione',
      icon: 'Hand',
      accent: 'orange',
      items: [
        'Eseguire gli interventi pianificati',
        'Interventi **autonomi**, su **prescrizione**, **collaborativi**',
        'Attribuire all’OSS solo attività appropriate',
        '**Documentare** ciò che si è fatto',
      ],
    },
    {
      title: '5 · Valutazione',
      icon: 'RefreshCw',
      accent: 'teal',
      items: [
        'Confrontare risultati **ottenuti** e **attesi**',
        'Obiettivo raggiunto, parzialmente raggiunto, non raggiunto',
        'Se serve, **rivedere** diagnosi, obiettivi e interventi',
      ],
    },
    {
      title: 'Caratteristiche',
      icon: 'Workflow',
      accent: 'navy',
      checks: [
        { text: '**Ciclico** e dinamico', kind: 'ok' },
        { text: '**Centrato** sulla persona', kind: 'ok' },
        { text: 'Orientato agli **obiettivi**', kind: 'ok' },
        { text: 'Documentato nella **cartella infermieristica**', kind: 'ok' },
      ],
    },
  ],
  keyPoints: [
    'Le 5 fasi: **A**ccertamento → **D**iagnosi → **P**ianificazione → **A**ttuazione → **V**alutazione',
    'Obiettivi **SMART**: specifici, misurabili, raggiungibili, realistici, a tempo',
  ],
}

export default map
