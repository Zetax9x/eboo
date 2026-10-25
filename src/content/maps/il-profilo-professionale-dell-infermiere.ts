import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'il-profilo-professionale-dell-infermiere',
  chapter: 'concorsi',
  title: 'Il profilo professionale',
  subtitle: 'DM 739/1994 e le leggi che hanno reso autonoma la professione',
  icon: 'User',
  status: 'bozza',
  sources: [
    'DM 14 settembre 1994 n. 739 — Regolamento concernente il profilo professionale dell’infermiere',
    'L. 26 febbraio 1999 n. 42; L. 10 agosto 2000 n. 251; L. 1 febbraio 2006 n. 43',
    'FNOPI — Codice deontologico delle professioni infermieristiche (2019, aggiornato 2025)',
  ],
  intro:
    'L’infermiere è l’operatore sanitario che, in possesso del **diploma universitario abilitante** e dell’**iscrizione all’albo**, è **responsabile dell’assistenza generale infermieristica** (DM 739/1994).',
  columns: 3,
  blocks: [
    {
      title: 'DM 739/1994 — chi è',
      icon: 'User',
      accent: 'blue',
      items: [
        'Assistenza **preventiva, curativa, palliativa e riabilitativa**',
        'Natura **tecnica, relazionale, educativa**',
        'Funzioni principali: **prevenzione** delle malattie, **assistenza** dei malati e dei disabili di tutte le età, **educazione sanitaria**',
        'Opera in strutture **pubbliche o private**, sul territorio e a **domicilio**',
        'Come **dipendente** o **libero professionista**',
      ],
    },
    {
      title: 'Cosa fa (DM 739/1994)',
      icon: 'ListChecks',
      accent: 'green',
      items: [
        'Partecipa all’identificazione dei **bisogni di salute**',
        'Identifica i **bisogni di assistenza infermieristica** e formula i relativi **obiettivi**',
        '**Pianifica, gestisce e valuta** l’intervento assistenziale',
        'Garantisce la corretta applicazione delle **prescrizioni diagnostico-terapeutiche**',
        'Agisce individualmente e in **collaborazione** con altri operatori',
        'Si avvale, se necessario, del **personale di supporto**',
      ],
    },
    {
      title: 'Formazione e ricerca',
      icon: 'BookOpen',
      accent: 'purple',
      items: [
        'Contribuisce alla **formazione** del personale di supporto',
        'Concorre all’**aggiornamento** del proprio profilo e alla **ricerca**',
        'Laurea triennale abilitante (classe **L/SNT1**)',
        'Laurea magistrale (**LM/SNT1**), master di I e II livello, dottorato',
        'Formazione post-base in 5 aree: **sanità pubblica**, **pediatria**, **salute mentale-psichiatria**, **geriatria**, **area critica**',
      ],
    },
    {
      title: 'L. 42/1999',
      icon: 'Scale',
      accent: 'orange',
      items: [
        'Elimina la definizione di **professione sanitaria ausiliaria**',
        'Abroga il **mansionario** (DPR 225/1974)',
        'Campo di attività definito da: **profilo professionale**, **ordinamento didattico**, **codice deontologico**',
        'Limite: le competenze previste per i **medici** e per le altre professioni sanitarie',
        'Equipollenza dei titoli pregressi (diploma regionale) al titolo universitario',
      ],
    },
    {
      title: 'L. 251/2000',
      icon: 'Target',
      accent: 'teal',
      items: [
        '**Autonomia professionale** nelle attività di prevenzione, cura e salvaguardia della salute',
        'Uso di **metodologia** di pianificazione per obiettivi',
        'Istituisce la **dirigenza** delle professioni sanitarie',
        'Prevede la **laurea specialistica** (oggi magistrale)',
        'Valorizza la **responsabilità** diretta dell’assistenza',
      ],
    },
    {
      title: 'L. 43/2006',
      icon: 'Layers',
      accent: 'navy',
      items: [
        'Articola la professione in 4 livelli:',
        '**Professionista** (laurea triennale)',
        '**Coordinatore** (master in management/coordinamento + 3 anni di esperienza)',
        '**Specialista** (master di I livello per le funzioni specialistiche)',
        '**Dirigente** (laurea magistrale + 5 anni di esperienza)',
        '**Iscrizione all’albo** obbligatoria anche per i dipendenti pubblici',
      ],
    },
  ],
  keyPoints: [
    'Responsabilità = **DM 739/1994** + **ordinamento didattico** + **Codice deontologico** (L. 42/1999), non più il mansionario',
    'L’infermiere è **responsabile dell’assistenza generale infermieristica**: autonomo, non “ausiliario” del medico',
  ],
}

export default map
