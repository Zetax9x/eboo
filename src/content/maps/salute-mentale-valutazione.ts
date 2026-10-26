import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'salute-mentale-valutazione',
  chapter: 'specialistica',
  title: 'Salute mentale: valutazione',
  subtitle: 'Accertamento infermieristico, scale validate e sicurezza del paziente',
  icon: 'Brain',
  status: 'bozza',
  sources: [
    'NICE — Mental health: assessment and management of mental disorders (NG22, 2023)',
    'FNOPI — Linee guida per la pratica infermieristica in salute mentale (2022)',
    'APA — Practice guidelines for the assessment and treatment of patients with mental disorders (2023)',
  ],
  intro:
    'La valutazione in salute mentale è un processo **dinamico e continuativo** che integra osservazione, intervista e strumenti standardizzati per identificare bisogni, rischi e risorse della persona.',
  columns: 3,
  blocks: [
    {
      title: 'Accertamento iniziale',
      icon: 'ClipboardCheck',
      accent: 'blue',
      items: [
        'Raccolta dati **soggettivi** (storia clinica, farmaci, sostanze) e **oggettivi** (aspetto, comportamento)',
        'Valutazione dello **stato mentale** (MSE): coscienza, orientamento, pensiero, percezione, umore',
        'Screening **rischio suicidario** (Columbia C-SSRS) e **aggressività** (Buss-Perry Aggression Questionnaire, Brøset Violence Checklist - BVC)',
        'Verifica **capacità decisionale** e consenso informato (L. 219/2017)',
        'Identificazione **risorse** sociali, familiari e di coping',
        'Documentazione in **cartella infermieristica** con linguaggio oggettivo',
      ],
    },
    {
      title: 'Scale validate',
      icon: 'Scale',
      accent: 'purple',
      items: [
        '**PHQ-9**: depressione (0-27; ≥10 moderata, ≥15 severa)',
        '**GAD-7**: ansia (0-21; ≥10 moderata, ≥15 severa)',
        '**PANSS**: psicosi (30-210; >60 severa)',
        '**YMRS**: mania (0-60; ≥13 mania lieve, ≥40 severa)',
        '**MMSE**: cognizione (0-30; <24 possibile demenza)',
        '**C-SSRS**: rischio suicidio (≥4 alto rischio)',
      ],
    },
    {
      title: 'Sicurezza e rischio',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        'Valutazione **immediata** del rischio suicidario e aggressivo',
        'Rimozione oggetti **pericolosi** dall’ambiente (punti vivi, cavi, vetri)',
        'Monitoraggio **1:1** o **1:2** in base al livello di rischio',
        'Piano di **de-escalation** verbale e non verbale',
        'Documentazione **oggettiva** di ogni episodio critico',
        'Comunicazione tempestiva al **medico** e all’équipe',
      ],
    },
    {
      title: 'Aspetti etici e legali',
      icon: 'BookOpen',
      accent: 'navy',
      items: [
        '**Rispetto** della dignità e dell’autonomia della persona',
        'Consenso informato per ogni intervento (L. 219/2017)',
        'Riservatezza e **segreto professionale** (Codice deontologico FNOPI)',
        'Tutela dei **diritti** della persona con disagio psichico (L. 180/1978, L. 134/2003)',
        'Evitare **stigma** e linguaggio giudicante',
        'Coinvolgimento della **famiglia** con consenso',
      ],
    },
    {
      title: 'Monitoraggio continuo',
      icon: 'Activity',
      accent: 'green',
      items: [
        'Valutazione **prospettica** e **retrospettiva** del rischio',
        'Osservazione **comportamentale** (sonno, appetito, interazione sociale)',
        'Verifica **aderenza** alla terapia farmacologica',
        'Screening **uso di sostanze** (alcol, droghe, tabacco)',
        'Valutazione **funzionale** (ADL, IADL, occupazione)',
        'Aggiornamento del **piano di cura** in base all’evoluzione',
      ],
    },
    {
      title: 'Ruolo infermieristico',
      icon: 'Hand',
      accent: 'teal',
      checks: [
        { text: 'Accertamento **completo** e documentato', kind: 'ok' },
        { text: 'Applicazione **scale validate**', kind: 'ok' },
        { text: 'Gestione **rischio** e sicurezza', kind: 'ok' },
        { text: 'Educazione **terapeutica** a persona e famiglia', kind: 'ok' },
        { text: 'Coordinamento **équipe** multiprofessionale', kind: 'ok' },
        { text: 'Promozione **risorse** e autonomia', kind: 'ok' },
      ],
    },
  ],
  keyPoints: [
    'La valutazione è **continua** e si adatta all’evoluzione clinica',
    'Le **scale validate** (PHQ-9, GAD-7, PANSS) supportano la diagnosi e il monitoraggio',
    'La **sicurezza** della persona e dell’équipe è prioritaria',
    'Il **rispetto** dei diritti e della dignità è fondamentale',
  ],
}

export default map
