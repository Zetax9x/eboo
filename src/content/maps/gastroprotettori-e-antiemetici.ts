import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'gastroprotettori-e-antiemetici',
  chapter: 'farmacologia',
  title: 'Gastroprotettori e antiemetici',
  subtitle: 'Classi, meccanismi, dosaggi e precauzioni infermieristiche',
  icon: 'Pill',
  status: 'bozza',
  sources: [
    'AIFA — Elenco farmaci e foglietti illustrativi (aggiornato)',
    'Linee guida ACG — Management of Erosive Esophagitis and GERD',
    'Farmacologia clinica — Goodman & Gilman, 14a ed.',
  ],
  intro: 'Questi farmaci proteggono la mucosa gastrica o contrastano il vomito. La scelta dipende dalla **causa** (reflusso, ulcera, chemioterapia, post-operatorio) e dal **rischio di sanguinamento**.',
  tableTitle: 'Classi principali e caratteristiche',
  tableIcon: 'Pill',
  columns: ['Classe', 'Esempi', 'Meccanismo', 'Somministrazione', 'Precauzioni'],
  widths: [1.2, 1.5, 2, 1.2, 2],
  rows: [
    ['Inibitori di pompa protonica (IPP)', 'Omeprazolo, Pantoprazolo, Esomeprazolo', 'Blocco irreversibile della H+/K+ ATPasi', 'Orale (30 min prima dei pasti) o EV', 'Evitare uso cronico non supervisionato; rischio fratture, carenza B12'],
    ['Antagonisti H2', 'Famotidina, Ranitidina (ritirata)', 'Blocco competitivo dei recettori H2', 'Orale o EV', 'Tolleranza con uso prolungato; interazioni minori rispetto agli IPP'],
    ['Antiacidi', 'Idrossido di alluminio, Magnesio', 'Neutralizzazione diretta dell’acido cloridrico', 'Orale (sospensione)', 'Effetto breve; evitare in caso di insufficienza renale (Al/Mg)'],
    ['Mucoprotettori', 'Sucralfato, Bismuto', 'Formazione di un film protettivo sulla mucosa', 'Orale (a stomaco vuoto)', 'Sucralfato: chelazione di altri farmaci; somministrare a distanza di 2h'],
    ['Antiemetici 5-HT3', 'Ondansetron, Granisetron', 'Antagonismo dei recettori 5-HT3', 'Orale, EV, SC', 'Costipazione, cefalea; rischio QT (raro)'],
    ['Antiemetici dopaminergici', 'Metoclopramide, Domperidone', 'Blocco D2 / procinetico', 'Orale o EV', 'Metoclopramide: rischio discinesia tardiva; Domperidone: allungamento QT'],
    ['Antiemetici anticolinergici', 'Scopolamina', 'Antagonismo muscarinico', 'Transdermica, EV', 'Secchezza delle fauci, midriasi, confusione (anziani)'],
  ],
  notes: [
    {
      title: 'Gestione del rischio ulcerogeno',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        'IPP di prima scelta per **ulcera peptica** e **reflusso gastroesofageo**',
        'Profilassi in pazienti ad alto rischio: **FANS cronici**, **anticoagulanti**, **stress da ICU**',
        'Sospensione IPP: rivalutare dopo **3-6 mesi** se possibile',
        'Non interrompere bruscamente se uso > 8 settimane (sindrome da rimbalzo)',
      ],
    },
    {
      title: 'Antiemetici: scelta in base al contesto',
      icon: 'Target',
      accent: 'blue',
      items: [
        '**Chemioterapia**: Ondansetron + Dexametazone (standard) o NK1 (citostatici emetogeni)',
        'Post-operatorio: **Metoclopramide** o **Ondansetron** (evitare oppioidi se possibile)',
        'Cinetosi: **Scopolamina** transdermica (efficacia prolungata)',
        'Vomito da oppioidi: **Naloxone** (antagonista) o **Metoclopramide**',
      ],
    },
    {
      title: 'Interazioni e monitoraggio',
      icon: 'Activity',
      accent: 'green',
      items: [
        'IPP riducono l’assorbimento di **Ketoconazolo**, **Itraconazolo**, **Atazanavir**',
        'Metoclopramide + **Levodopa**: ridurre dose di Levodopa',
        'Monitorare **elettroliti** (K+, Mg2+) in caso di vomito persistente',
        'Valutare **disidratazione** e stato nutrizionale',
      ],
    },
  ],
  keyPoints: [
    'Gli **IPP** sono i più efficaci per la guarigione dell’erosione esofagea',
    'La **Metoclopramide** è procinetica: utile anche per il reflusso, ma attenzione agli effetti extrapiramidali',
    'In caso di **vomito incoercibile**, valutare causa (occlusione, meningite, chetoacidosi) prima di somministrare antiemetici',
  ],
}

export default map
