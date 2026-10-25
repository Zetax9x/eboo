import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'sistema-immunitario',
  chapter: 'anatomia',
  title: 'Sistema immunitario',
  subtitle: 'Difese innate, immunità adattativa e organi linfoidi in una pagina',
  icon: 'ShieldCheck',
  status: 'bozza',
  sources: [
    'Abbas A.K., Lichtman A.H., Pillai S. — Cellular and Molecular Immunology, 10th ed.',
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Linee guida EULAR/ACR sulle malattie autoimmuni e immunodeficienze primarie (2023)',
  ],
  blocks: [
    {
      title: 'Organi linfoidi',
      accent: 'blue',
      icon: 'Layers',
      illustration: {
        id: 'sistema-immunitario-organi',
        alt: 'Organi linfoidi primari e secondari',
        prompt: 'human body silhouette with highlighted thymus in the chest, bone marrow in the pelvis, and lymph nodes along the neck, armpits, and groin',
        icon: 'Layers',
      },
      inset: {
        label: 'Timo',
        illustration: {
          id: 'sistema-immunitario-timo',
          alt: 'Timo nel mediastino',
          prompt: 'anatomical view of the thymus gland located in the anterior mediastinum behind the sternum',
          icon: 'ShieldCheck',
        },
      },
      bullets: [
        '**Primari**: midollo osseo (maturazione B) e **timo** (maturazione T)',
        '**Secondari**: milza, linfonodi, tonsille, Peyer patches (GII)',
        'Il **timo** regredisce dopo la pubertà (involuzione timica)',
        'La **milza** filtra il sangue e produce anticorpi',
      ],
    },
    {
      title: 'Cellule immunitarie',
      accent: 'green',
      icon: 'User',
      illustration: {
        id: 'sistema-immunitario-cellule',
        alt: 'Principali cellule del sistema immunitario',
        prompt: 'microscopic view of white blood cells: neutrophils, lymphocytes, monocytes, eosinophils, and basophils on a blood smear',
        icon: 'User',
      },
      bullets: [
        '**Linfociti B**: producono **anticorpi** (immunità umorale)',
        '**Linfociti T**: citotossici (CD8+) e helper (CD4+)',
        '**Neutrofili**: fagocitosi batterica, 60–70% dei globuli bianchi',
        '**Monociti/Macrofagi**: fagocitosi e presentazione antigenica',
        '**Eosinofili**: difesa contro parassiti e reazioni allergiche',
      ],
    },
    {
      title: 'Immunità innata',
      accent: 'orange',
      icon: 'ShieldAlert',
      illustration: {
        id: 'sistema-immunitario-innata',
        alt: 'Barriere fisiche e cellule innate',
        prompt: 'skin barrier with hair and mucus membranes, macrophages engulfing bacteria, and complement proteins activating',
        icon: 'ShieldAlert',
      },
      bullets: [
        '**Barriere fisiche**: cute, mucose, secrezioni (muco, lacrime)',
        '**Barriere chimiche**: pH gastrico, lisozima, acidi grassi cutanei',
        '**Cellule**: neutrofili, macrofagi, cellule NK (Natural Killer)',
        '**Sistema complemento**: attivazione classica, alternativa, lezina',
        'Risposta **immediata** (minuti-ore), non specifica',
      ],
    },
    {
      title: 'Immunità adattativa',
      accent: 'purple',
      icon: 'Target',
      illustration: {
        id: 'sistema-immunitario-adattativa',
        alt: 'Linfociti B e T in azione',
        prompt: 'B cell producing antibodies against a virus, and T cell killing an infected cell, with memory cells forming',
        icon: 'Target',
      },
      bullets: [
        '**Specificità**: riconosce antigeni unici',
        '**Memoria**: risposta più rapida e intensa al 2° contatto',
        '**Linfociti B**: differenziano in plasmacellule → anticorpi',
        '**Linfociti T**: attivati da APC (cellule presentanti antigeni)',
        'Risposta **ritardata** (giorni), altamente specifica',
      ],
    },
    {
      title: 'Anticorpi (Immunoglobuline)',
      accent: 'teal',
      icon: 'Droplet',
      illustration: {
        id: 'sistema-immunitario-anticorpi',
        alt: 'Struttura delle immunoglobuline',
        prompt: 'Y-shaped antibody molecule with heavy and light chains, binding sites for antigens, different classes IgG IgM IgA IgE IgD',
        icon: 'Droplet',
      },
      bullets: [
        '**IgG**: 80% delle Ig, attraversa la placenta, opsonizzazione',
        '**IgM**: prima Ig prodotta, pentamerica, emolisi',
        '**IgA**: secrezioni (saliva, latte, mucose), difesa locale',
        '**IgE**: allergie e parassiti, legame con mastociti',
        '**IgD**: recettore di superficie dei linfociti B',
      ],
    },
    {
      title: 'Citochine e infiammazione',
      accent: 'red',
      icon: 'Zap',
      illustration: {
        id: 'sistema-immunitario-citochine',
        alt: 'Molecole di segnalazione infiammatoria',
        prompt: 'inflammatory response with redness, swelling, heat, and pain, cytokines signaling between immune cells',
        icon: 'Zap',
      },
      bullets: [
        '**Citochine**: IL-1, IL-6, TNF-α, interferoni, chemochine',
        'Mediano la comunicazione tra cellule immunitarie',
        '**Infiammazione acuta**: 5 segni (rubor, tumor, calor, dolor, functio laesa)',
        'Fase cronica: granulomi, fibrosi, danno tissutale',
        'Citochine pro-infiammatorie → febbre, vasodilatazione',
      ],
    },
  ],
  keyPoints: [
    '**Linfociti T CD4+**: “helper”, attivano B e macrofagi',
    '**Linfociti T CD8+**: “citotossici”, uccidono cellule infette',
    '**Apoptosi**: eliminazione programmata delle cellule autoreattive',
  ],
}

export default map
