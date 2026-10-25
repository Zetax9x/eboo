import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'teoria-dei-bisogni-di-virginia-henderson',
  chapter: 'fondamenti',
  title: 'Teoria dei bisogni di Virginia Henderson',
  subtitle: 'I 14 bisogni fondamentali e la funzione propria dell’infermiere',
  icon: 'Users',
  status: 'bozza',
  sources: [
    'Henderson V. — The Nature of Nursing: A Definition and Its Implications for Practice, Research, and Education, Macmillan, 1966',
    'Henderson V. — Basic Principles of Nursing Care, International Council of Nurses (ICN), 1960',
    'Alligood M.R. — Nursing Theorists and Their Work, Elsevier (ultima edizione)',
  ],
  intro:
    'Virginia **Henderson** (1897–1996) definisce la **funzione propria** dell’infermiere: assistere la persona, malata o sana, nelle attività che contribuiscono alla salute, al recupero o a una **morte serena**, che compirebbe da sola se avesse la necessaria **forza, volontà o conoscenza**, aiutandola a riacquistare l’**indipendenza** il più rapidamente possibile.',
  illustration: {
    id: 'henderson-assistenza',
    alt: 'Infermiera che aiuta un anziano a camminare',
    prompt: 'a nurse in scrubs gently supporting an elderly man by the arm as he walks slowly in a bright hospital corridor',
    icon: 'Users',
  },
  columns: 3,
  blocks: [
    {
      title: 'I 14 bisogni fondamentali',
      icon: 'ListChecks',
      accent: 'blue',
      span: 2,
      items: [
        '**1** Respirare normalmente',
        '**2** Mangiare e bere in modo adeguato',
        '**3** Eliminare i rifiuti del corpo',
        '**4** Muoversi e mantenere una postura corretta',
        '**5** Dormire e riposare',
        '**6** Scegliere gli indumenti, vestirsi e svestirsi',
        '**7** Mantenere la temperatura corporea nei limiti normali',
        '**8** Mantenere il corpo pulito e proteggere la cute',
        '**9** Evitare i pericoli dell’ambiente e di nuocere agli altri',
        '**10** Comunicare emozioni, bisogni, paure, opinioni',
        '**11** Praticare il proprio culto secondo la propria fede',
        '**12** Lavorare in modo da sentirsi realizzati',
        '**13** Giocare o partecipare ad attività ricreative',
        '**14** Apprendere, scoprire, soddisfare la curiosità; usare i servizi sanitari',
      ],
    },
    {
      title: 'Gruppi di bisogni',
      icon: 'Layers',
      accent: 'purple',
      items: [
        '**1–9**: fisiologici',
        '**10** e **14**: psicologici (comunicazione, apprendimento)',
        '**11**: spirituale e morale',
        '**12–13**: sociali (lavoro, svago)',
        'Bisogni **comuni a tutti**, soddisfatti in modo **individuale**',
        'Influenzati da età, cultura, stato emotivo, condizioni fisiche',
        'Ogni bisogno va accertato: **autonomo** o **dipendente**?',
      ],
    },
    {
      title: 'Cause di dipendenza',
      icon: 'TriangleAlert',
      accent: 'orange',
      checks: [
        { text: 'Mancanza di **forza** (fisica)', kind: 'warn' },
        { text: 'Mancanza di **volontà** (motivazione)', kind: 'warn' },
        { text: 'Mancanza di **conoscenza** (sapere come)', kind: 'warn' },
        { text: 'L’infermiere interviene sulla **causa**, non solo sul bisogno', kind: 'ok' },
        { text: 'Obiettivo: **indipendenza** o, se impossibile, morte serena', kind: 'ok' },
      ],
    },
    {
      title: 'Ruoli dell’infermiere',
      icon: 'Hand',
      accent: 'green',
      items: [
        '**Sostituto**: fa per la persona ciò che non può fare',
        '**Aiuto**: la assiste nel recupero dell’autonomia',
        '**Compagno**: collabora con lei al piano di cure',
        'Collabora al **piano terapeutico** del medico',
        'Parte dell’**équipe** sanitaria',
      ],
    },
    {
      title: 'Eredità e applicazione',
      icon: 'BookOpen',
      accent: 'teal',
      items: [
        'Definizione adottata dall’**ICN** (1960)',
        'Base dell’**accertamento per bisogni**',
        'Ispira il **modello delle prestazioni** di M. **Cantarelli**',
        'Guida la raccolta dati nel **processo di nursing**',
        'Metaparadigma: persona, salute, ambiente, nursing',
      ],
    },
  ],
  keyPoints: [
    'Henderson = **14 bisogni** + **indipendenza** + cause: mancanza di **forza, volontà, conoscenza**',
    'Testo chiave: **The Nature of Nursing** (1966); definizione già pubblicata nel **1955**',
  ],
}

export default map
