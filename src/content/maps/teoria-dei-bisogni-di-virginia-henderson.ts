import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'teoria-dei-bisogni-di-virginia-henderson',
  chapter: 'fondamenti',
  title: 'Virginia Henderson',
  subtitle: 'I 14 bisogni fondamentali e il ruolo dell’infermiere',
  icon: 'User',
  status: 'bozza',
  sources: [
    'Henderson V. — Basic Principles of Nursing Care, ICN (1960)',
    'Henderson V. — The Nature of Nursing, Macmillan (1966)',
    'Cantarelli M. — Il modello delle prestazioni infermieristiche, Elsevier Masson',
  ],
  intro:
    'L’infermiere **assiste** la persona, sana o malata, nelle attività che contribuiscono alla salute, al recupero o a una **morte serena**, che compirebbe da sola se avesse **forza, volontà o conoscenza**, per renderla **indipendente** il prima possibile.',
  columns: 3,
  blocks: [
    {
      title: 'Bisogni 1–5',
      icon: 'HeartPulse',
      accent: 'red',
      items: [
        '**1** · Respirare normalmente',
        '**2** · Mangiare e bere adeguatamente',
        '**3** · Eliminare i rifiuti del corpo',
        '**4** · Muoversi e mantenere posizioni corrette',
        '**5** · Dormire e riposare',
        'Bisogni a prevalente base **biologica**',
      ],
    },
    {
      title: 'Bisogni 6–10',
      icon: 'ShieldCheck',
      accent: 'blue',
      items: [
        '**6** · Scegliere gli abiti, vestirsi e svestirsi',
        '**7** · Mantenere la temperatura corporea nella norma',
        '**8** · Mantenere il corpo pulito e proteggere la cute',
        '**9** · Evitare i pericoli dell’ambiente e di nuocere agli altri',
        '**10** · Comunicare emozioni, bisogni, paure, opinioni',
      ],
    },
    {
      title: 'Bisogni 11–14',
      icon: 'Users',
      accent: 'purple',
      items: [
        '**11** · Praticare la propria religione e i propri valori',
        '**12** · Lavorare / occuparsi di qualcosa che dia realizzazione',
        '**13** · Giocare, partecipare ad attività ricreative',
        '**14** · Apprendere, scoprire, soddisfare la curiosità',
        'Bisogni **psicologici, sociali, spirituali**',
      ],
    },
    {
      title: 'Cause di dipendenza',
      icon: 'TriangleAlert',
      accent: 'orange',
      items: [
        'Mancanza di **forza** fisica (es. emiplegia)',
        'Mancanza di **volontà** (es. depressione)',
        'Mancanza di **conoscenza** (es. nuova terapia insulinica)',
        'L’accertamento individua **quale** bisogno è alterato e **perché**',
        'Obiettivo: massima **indipendenza** possibile',
      ],
    },
    {
      title: 'Ruoli dell’infermiere',
      icon: 'Hand',
      accent: 'green',
      items: [
        '**Sostituto**: fa per la persona ciò che non può fare',
        '**Aiuto**: la sostiene nel recupero dell’autonomia',
        '**Compagno**: collabora con lei nel piano di cura',
        'Il livello di aiuto **cambia** con l’evoluzione clinica',
        'Collabora con medico ed équipe nel piano terapeutico',
      ],
    },
    {
      title: 'Il modello di Cantarelli',
      icon: 'BookOpen',
      accent: 'teal',
      items: [
        'Modello **italiano** (Marisa Cantarelli) ispirato ai bisogni',
        '**11 bisogni** di assistenza infermieristica',
        'Prestazioni: **indirizzare**, **guidare**, **sostenere**, **compensare**, **sostituire**',
        'Molto usato nella didattica e nelle **cartelle** italiane',
      ],
    },
  ],
  keyPoints: [
    'Le 3 cause di dipendenza: mancanza di **forza**, **volontà**, **conoscenza**',
    'Henderson: definizione di assistenza adottata dall’**ICN** (1960), base di molti modelli a bisogni',
  ],
}

export default map
