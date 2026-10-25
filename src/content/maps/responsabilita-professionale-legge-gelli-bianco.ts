import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'responsabilita-professionale-legge-gelli-bianco',
  chapter: 'concorsi',
  title: 'Responsabilità professionale: Legge Gelli-Bianco',
  subtitle: 'L. 24/2017: colpa, consenso, assicurazione e limiti di azione',
  icon: 'ShieldCheck',
  status: 'bozza',
  sources: [
    'Legge 8 marzo 2017, n. 24 — Modifiche al sistema penale e alla disciplina della responsabilità professionale degli esercenti le professioni sanitarie',
    'Codice deontologico delle professioni infermieristiche (FNOPI, 2014)',
    'Codice Civile, artt. 2043, 2049, 2050',
  ],
  intro:
    'La **L. 24/2017** (Gelli-Bianco) riforma la responsabilità degli esercenti le professioni sanitarie, introducendo il criterio della **colpa grave**, il **consenso informato** come elemento autonomo e obblighi di **assicurazione** e **documentazione**.',
  columns: 2,
  blocks: [
    {
      title: 'Principi generali',
      icon: 'BookOpen',
      accent: 'blue',
      items: [
        'Responsabilità per **colpa grave** (non lieve o media)',
        'Colpa grave: **negligenza**, **imprudenza**, **imperizia**',
        'Presunzione di colpa grave in caso di **violazione di protocolli** o linee guida',
        'Onere della prova a carico del **paziente** (art. 2733 c.c.)',
        'Responsabilità del **datore di lavoro** (art. 2049 c.c.)',
        'Responsabilità **diretta** dell’infermiere per atti personali',
      ],
    },
    {
      title: 'Consenso informato',
      icon: 'FileText',
      accent: 'green',
      items: [
        'Elemento **autonomo** di responsabilità (art. 12 L. 24/2017)',
        'Il paziente deve essere informato su: **rischi**, **alternative**, **conseguenze**',
        'Consenso **libero**, **consapevole**, **specifico**',
        'Documentazione del consenso nella **cartella clinica**',
        'Mancato consenso = **lesione dell’autodeterminazione**',
        'Eccezioni: **urgenza** senza possibilità di consenso',
      ],
    },
    {
      title: 'Assicurazione obbligatoria',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        'Obbligo di **polizza assicurativa** per tutti gli esercenti (art. 10 L. 24/2017)',
        'Copertura per **danni** a pazienti e terzi',
        'Obbligo per **strutture sanitarie** pubbliche e private',
        'Polizza deve coprire **atti professionali** e **omissioni**',
        'Sanzione: **sospensione** dall’esercizio per 6 mesi',
        'Obbligo di **comunicare** la polizza al paziente',
      ],
    },
    {
      title: 'Documentazione sanitaria',
      icon: 'ClipboardList',
      accent: 'purple',
      items: [
        'La **cartella clinica** è prova privilegiata',
        'Obbligo di **documentare** ogni atto, intervento, comunicazione',
        'Documentazione **contemporanea** all’atto',
        'Mancata documentazione = **presunzione di colpa**',
        'Diritto del paziente di **accedere** alla cartella',
        'Conservazione: **20 anni** per atti sanitari',
      ],
    },
    {
      title: 'Limiti di azione',
      icon: 'Ban',
      accent: 'orange',
      items: [
        'Divieto di azioni **diffamatorie** o **minatorie**',
        'Divieto di **ricatti** o pressioni sul paziente',
        'Divieto di **rappresentanza** in giudizio senza mandato',
        'Divieto di **commercializzazione** di servizi sanitari',
        'Divieto di **pubblicità** ingannevole',
        'Divieto di **conflitto di interessi** non dichiarato',
      ],
    },
    {
      title: 'Ruolo dell’infermiere',
      icon: 'User',
      accent: 'teal',
      checks: [
        { text: 'Rispettare **protocolli** e linee guida', kind: 'ok' },
        { text: 'Ottenere e **documentare** il consenso', kind: 'ok' },
        { text: 'Mantenere **assicurazione** valida', kind: 'ok' },
        { text: 'Agire con **diligenza** e competenza', kind: 'ok' },
        { text: 'Riferire **eventi avversi**', kind: 'ok' },
        { text: 'Rispettare **segreto professionale**', kind: 'ok' },
        { text: 'Partecipare a **formazione continua** (ECM)', kind: 'ok' },
      ],
    },
  ],
  keyPoints: [
    'Colpa **grave** = negligenza, imprudenza, imperizia',
    'Consenso informato: **libero**, **consapevole**, **specifico**',
    'Assicurazione **obbligatoria** per tutti gli esercenti',
    'Documentazione: **contemporanea**, **completa**, **accessibile**',
  ],
}

export default map
