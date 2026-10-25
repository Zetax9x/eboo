import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'fegato-e-vie-biliari',
  chapter: 'anatomia',
  title: 'Fegato e vie biliari',
  subtitle: 'Anatomia, funzioni metaboliche e vie di deflusso della bile',
  icon: 'Layers',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Guyton A.C., Hall J.E. — Fisiologia medica, Elsevier',
    'Linee guida EASL 2024 sulla gestione delle malattie epatiche',
  ],
  blocks: [
    {
      title: 'Anatomia del fegato',
      accent: 'red',
      icon: 'Layers',
      illustration: {
        id: 'fegato-anatomia',
        alt: 'Fegato con lobi e vasi principali',
        prompt: 'anatomical human liver, front view, showing right and left lobes, portal vein, hepatic artery and hepatic veins, red and blue vessels',
        icon: 'Layers',
      },
      inset: {
        label: 'Lobuli epatici',
        illustration: {
          id: 'fegato-lobulo',
          alt: 'Struttura di un lobulo epatico',
          prompt: 'cross-section of a hepatic lobule showing hexagonal arrangement of hepatocytes around a central vein and portal triad',
          icon: 'CircleDot',
        },
      },
      bullets: [
        'Organo più grande del corpo, peso **1,2–1,5 kg**',
        'Diviso in **4 lobi**: destro, sinistro, caudato, quadrato',
        'Irrorato da **a. epatica** (sanguigna) e **v. porta** (nutritiva)',
        'Drenato dalle **vene epatiche** → v. cava inferiore',
      ],
    },
    {
      title: 'Vie biliari',
      accent: 'green',
      icon: 'GitBranch',
      illustration: {
        id: 'fegato-vie-biliari',
        alt: 'Sistema delle vie biliari',
        prompt: 'diagram of the biliary tree: intrahepatic ducts, common hepatic duct, cystic duct, common bile duct, gallbladder and ampulla of Vater',
        icon: 'GitBranch',
      },
      bullets: [
        '**Dotti epatici** dx e sx → **dotto epatico comune**',
        '**Dotto cistico** (dalla colecisti) si unisce al dotto epatico',
        '**Dotto biliare comune** → **ampulla di Vater** → duodeno',
        '**Colecisti**: riserva e concentrazione della bile',
      ],
    },
    {
      title: 'Produzione della bile',
      accent: 'blue',
      icon: 'Droplet',
      illustration: {
        id: 'fegato-bile',
        alt: 'Produzione e deflusso della bile',
        prompt: 'liver cells producing bile, arrows showing flow through bile canaliculi, ducts and into the gallbladder',
        icon: 'Droplet',
      },
      bullets: [
        '**600–1000 mL/giorno** prodotti dagli epatociti',
        'Composizione: **sali biliari**, bilirubina, colesterolo, elettroliti',
        'Concentrata nella colecisti (fino a **10–20 volte**)',
        'Rilasciata nel duodeno per emulsificare i grassi',
      ],
    },
    {
      title: 'Funzioni metaboliche',
      accent: 'purple',
      icon: 'FlaskConical',
      illustration: {
        id: 'fegato-metabolismo',
        alt: 'Processi metabolici nel fegato',
        prompt: 'liver with icons representing glucose metabolism, protein synthesis, detoxification and lipid processing',
        icon: 'FlaskConical',
      },
      bullets: [
        '**Glicogeno**: sintesi e degradazione (glicogenolisi)',
        '**Proteine**: sintesi di albumina, fattori di coagulazione',
        '**Detossificazione**: metabolismo di farmaci e tossine',
        '**Lipidi**: sintesi di colesterolo e trigliceridi',
      ],
    },
    {
      title: 'Circolo portale',
      accent: 'orange',
      icon: 'Repeat',
      illustration: {
        id: 'fegato-circolo-portale',
        alt: 'Circolo portale epatico',
        prompt: 'diagram of the portal circulation: blood from intestines and spleen flowing through the portal vein into the liver sinusoids',
        icon: 'Repeat',
      },
      bullets: [
        'Sangue da **intestino**, **milza**, **pancreas** → v. porta',
        'Passa per i **sinusoidi epatici** prima di tornare al cuore',
        'Consente al fegato di **filtrare** sostanze assorbite',
        'Pressione portale normale: **5–10 mmHg**',
      ],
    },
    {
      title: 'Funzioni ematologiche',
      accent: 'teal',
      icon: 'Droplets',
      illustration: {
        id: 'fegato-ematologia',
        alt: 'Ruolo del fegato nel sangue',
        prompt: 'liver with red blood cells, platelets and clotting factors, showing storage of iron and synthesis of proteins',
        icon: 'Droplets',
      },
      bullets: [
        '**Sintesi** di fattori di coagulazione (I, II, V, VII, IX, X)',
        '**Riserva** di ferro (ferritina) e vitamina A',
        '**Emopoiesi** fetale (poi sostituita dal midollo)',
        '**Catabolismo** degli eritrociti → bilirubina',
      ],
    },
  ],
  keyPoints: [
    '**Fegato**: organo duale (arterioso + portale)',
    '**Bile**: 600–1000 mL/giorno, concentrata nella colecisti',
    '**Pressione portale**: 5–10 mmHg',
  ],
}

export default map
