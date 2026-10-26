import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'apparato-digerente-panoramica',
  chapter: 'anatomia',
  title: 'Apparato digerente',
  subtitle: 'Dalla bocca all’ano: anatomia, funzioni e punti chiave per l’esame',
  icon: 'Apple',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Guyton A.C., Hall J.E. — Fisiologia medica, Elsevier',
    'OMS – Linee guida sulla nutrizione, 2020',
  ],
  blocks: [
    {
      title: 'Bocca e faringe',
      accent: 'orange',
      icon: 'Utensils',
      illustration: {
        id: 'dig-bocca-faringe',
        alt: 'Bocca e faringe con denti, lingua e tonsille',
        prompt: 'anatomical view of the human mouth and pharynx, showing teeth, tongue, tonsils and soft palate',
        icon: 'Utensils',
      },
      inset: {
        label: 'Denti e saliva',
        illustration: {
          id: 'dig-denti-saliva',
          alt: 'Denti e ghiandole salivari',
          prompt: 'close-up of human teeth and salivary glands (parotid, submandibular, sublingual) with saliva flow',
          icon: 'Droplet',
        },
      },
      bullets: [
        '**32 denti** permanenti: 8 incisivi, 4 canini, 8 premolari, 12 molari',
        'Saliva: **0,5–1,5 L/giorno**, pH 6,0–7,0, contiene **amilasi** e **mucine**',
        'Masticazione: triturazione e formazione del **bolo alimentare**',
        'Faringe: passaggio comune di **aria** e **alimento**',
        'Deglutizione: fase orale (volontaria) e faringea (involontaria)',
      ],
    },
    {
      title: 'Esofago',
      accent: 'blue',
      icon: 'ArrowDown',
      illustration: {
        id: 'dig-esofago',
        alt: 'Esofago con sfintere superiore e inferiore',
        prompt: 'anatomical esophagus with upper and lower sphincters, showing peristalsis arrows',
        icon: 'ArrowDown',
      },
      bullets: [
        'Lunghezza **25 cm**, diametro **2 cm**',
        'Muscolatura: **striata** (1/3 prossimale), **liscia** (2/3 distale)',
        '**Peristalsi**: onde contrattili che spingono il bolo verso lo stomaco',
        '**Sfintere esofageo inferiore**: previene il reflusso gastroesofageo',
        'Tempo di transito: **10–20 secondi** per un bolo solido',
      ],
    },
    {
      title: 'Stomaco',
      accent: 'red',
      icon: 'CircleDot',
      illustration: {
        id: 'dig-stomaco',
        alt: 'Stomaco con cardias, corpo, piloro e mucosa',
        prompt: 'anatomical stomach showing cardia, fundus, body, antrum and pylorus, with mucosal folds',
        icon: 'CircleDot',
      },
      inset: {
        label: 'Cellule ghiandolari',
        illustration: {
          id: 'dig-stomaco-cellule',
          alt: 'Cellule ghiandolari dello stomaco',
          prompt: 'microscopic view of gastric glands with parietal cells, chief cells and mucous cells',
          icon: 'Microscope',
        },
      },
      bullets: [
        'Capacità: **1–1,5 L** a riposo, fino a **4 L** dopo un pasto',
        '**Acido cloridrico** (pH 1,5–3,5): sterilizza e attiva il pepsinogeno',
        '**Pepsina**: idrolizza le proteine; prodotta dalle cellule principali',
        '**Mucina**: protegge la mucosa; **bicarbonato**: tampona l’acido',
        'Tempo di svuotamento: **2–6 ore** (liquidi più rapidi)',
      ],
    },
    {
      title: 'Intestino tenue',
      accent: 'green',
      icon: 'Waves',
      illustration: {
        id: 'dig-intestino-tenue',
        alt: 'Intestino tenue con duodeno, digiuno e ileo',
        prompt: 'loops of the small intestine filling the abdomen, framed by the large intestine, stomach above, front view',
        icon: 'Waves',
      },
      inset: {
        label: 'Villi intestinali',
        illustration: {
          id: 'dig-villi',
          alt: 'Villi e microvilli della mucosa intestinale',
          prompt: 'cross-section of intestinal villi with microvilli, lacteal and capillaries',
          icon: 'Layers',
        },
      },
      bullets: [
        'Lunghezza: **6–7 m**, superficie di assorbimento **200–300 m²**',
        '**Duodeno**: riceve bile e succo pancreatico; pH alcalinizzato',
        '**Duodeno**: principale sito di assorbimento di nutrienti',
        '**Ileo**: assorbe **vitamina B12** e acidi biliari',
        'Movimenti: **segmentazione** (mescolamento) e **peristalsi** (trasporto)',
      ],
    },
    {
      title: 'Intestino crasso',
      accent: 'purple',
      icon: 'Route',
      illustration: {
        id: 'dig-intestino-crasso',
        alt: 'Intestino crasso con cieco, colon e retto',
        prompt: 'anatomical large intestine showing cecum, ascending colon, transverse colon, descending colon, sigmoid colon and rectum',
        icon: 'Route',
      },
      bullets: [
        'Lunghezza: **1,5 m**, diametro **6 cm**',
        '**Cieco** e **appendice**: valvola ileocecale previene il reflusso',
        '**Colon**: assorbe **acqua** e **elettroliti**; forma le feci',
        '**Microbiota intestinale**: 100 trilioni di batteri, fermentazione',
        'Tempo di transito: **12–48 ore** (variabile)',
      ],
    },
    {
      title: 'Ghiandole annesse',
      accent: 'teal',
      icon: 'Droplets',
      illustration: {
        id: 'dig-ghiandole-annesse',
        alt: 'Fegato, cistifellea e pancreas',
        prompt: 'anatomical liver, gallbladder and pancreas with bile ducts and pancreatic duct',
        icon: 'Droplets',
      },
      inset: {
        label: 'Vie biliari',
        illustration: {
          id: 'dig-vie-biliari',
          alt: 'Vie biliari e dotto pancreatico',
          prompt: 'liver, gallbladder and pancreas seen from the front, green bile ducts from liver and gallbladder joining the pancreatic duct and opening into the duodenum',
          icon: 'GitBranch',
        },
      },
      bullets: [
        '**Fegato**: produce **600–1000 mL** di bile/giorno, detossifica',
        '**Cistifellea**: concentra e immagazzina la bile (capacità **30–50 mL**)',
        '**Pancreas**: secrezione **esocrina** (enzimi) ed **endocrina** (insulina)',
        'Bile: **sali biliari** emulsionano i grassi; pH 7,5–8,5',
        'Succo pancreatico: **lipasi**, **amilasi**, **tripsina**, pH 7,5–8,5',
      ],
    },
  ],
  keyPoints: [
    '**Lunghezza totale** del tratto digestivo: **9–10 m**',
    '**Assorbimento**: 90% nell’intestino tenue, 10% nel crasso',
    '**pH gastrico**: 1,5–3,5 · **pH duodenale**: 6–7',
  ],
}

export default map
