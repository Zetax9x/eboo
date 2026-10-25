import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'regolazione-della-pressione-arteriosa',
  chapter: 'anatomia',
  title: 'Regolazione della pressione arteriosa',
  subtitle: 'Meccanismi neurali, ormonali e locali per mantenere la perfusione tissutale',
  icon: 'Gauge',
  status: 'bozza',
  sources: [
    'Guyton A.C., Hall J.E. — Fisiologia medica, Elsevier (11ª ed.)',
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Linee guida ESC 2024 sulla gestione della pressione arteriosa elevata',
  ],
  blocks: [
    {
      title: 'Fattori determinanti',
      accent: 'blue',
      icon: 'Calculator',
      illustration: {
        id: 'rap-fattori',
        alt: 'Schema dei fattori che determinano la PA',
        prompt: 'simple diagram showing cardiac output and systemic vascular resistance flowing into blood pressure, with arrows',
        icon: 'Calculator',
      },
      bullets: [
        '**PA** = Gittata cardiaca (GC) × Resistenze periferiche (TPS)',
        '**GC** = Frequenza cardiaca (FC) × Gittata sistolica (GS)',
        '**GS** dipende da: precarico, postcarico, contrattilità',
        '**TPS** determinata dal diametro arteriolare',
        'Pressione di perfusione = PA – Pressione venosa centrale',
      ],
    },
    {
      title: 'Barocettori',
      accent: 'purple',
      icon: 'Activity',
      illustration: {
        id: 'rap-barocettori',
        alt: 'Posizione dei barocettori nella carotide e aorta',
        prompt: 'human neck and chest showing carotid sinus and aortic arch with baroreceptor nerves highlighted',
        icon: 'Activity',
      },
      bullets: [
        'Situati nel **seno carotideo** e nell’**arco aortico**',
        'Rilevano la **distensione** della parete vasale',
        'Inviano segnali al **nucleo del tratto solitario** (bulbo)',
        'Riduzione PA → ↓ attività vagale + ↑ simpatica → ↑ FC e ↑ TPS',
        'Aumento PA → ↑ attività vagale + ↓ simpatica → ↓ FC e ↓ TPS',
      ],
    },
    {
      title: 'Sistema renina-angiotensina',
      accent: 'green',
      icon: 'Droplet',
      illustration: {
        id: 'rap-sra',
        alt: 'Schema del sistema renina-angiotensina-aldosterone',
        prompt: 'diagram of renin-angiotensin-aldosterone system: kidney releasing renin, liver producing angiotensinogen, lungs converting to angiotensin II, adrenal gland releasing aldosterone',
        icon: 'Droplet',
      },
      bullets: [
        'Attivato da: **↓ PA renale**, **↓ Na+**, **stimolo simpatico**',
        '**Renina** (giomone renale) → **Angiotensinogeno** (fegato) → **Angiotensina I**',
        '**ACE** (polmone) converte Ang I → **Angiotensina II**',
        '**Angiotensina II**: potente vasocostrittore + stimola **aldosterone**',
        '**Aldosterone**: riassorbimento Na+ e H2O nel tubulo renale',
      ],
    },
    {
      title: 'ADH e Peptide Natriuretico',
      accent: 'teal',
      icon: 'Droplets',
      illustration: {
        id: 'rap-adh-anp',
        alt: 'Confronto tra ADH e ANP',
        prompt: 'split image showing hypothalamus releasing ADH and heart releasing ANP, with arrows to kidneys and blood vessels',
        icon: 'Droplets',
      },
      bullets: [
        '**ADH** (vasopressina): rilasciata dall’**ipofisi posteriore**',
        'Stimoli ADH: **↓ PA**, **↑ osmolarità**, **dolore**, **ansia**',
        'Effetto ADH: **vasocostrizione** + **riassorbimento H2O** (tubulo collettore)',
        '**ANP/BNP**: rilasciati dagli **atri** in caso di distensione',
        'Effetto ANP: **vasodilatazione** + **diuresi** + **natriuresi**',
      ],
    },
    {
      title: 'Meccanismi locali',
      accent: 'orange',
      icon: 'Wind',
      illustration: {
        id: 'rap-locali',
        alt: 'Vasodilatazione locale nei tessuti',
        prompt: 'microscopic view of arterioles in tissue with local metabolites causing vasodilation',
        icon: 'Wind',
      },
      bullets: [
        '**Metaboliti**: CO2, H+, lattato, adenosina → vasodilatazione',
        '**Ossigeno**: ipossia locale → vasodilatazione (es. polmoni, muscolo)',
        '**Prostaglandine**: PGI2 (prostaciclina) → vasodilatazione',
        '**Ossido nitrico (NO)**: potente vasodilatatore endoteliale',
        '**Termoregolazione**: vasodilatazione cutanea per dispersione di calore',
      ],
    },
    {
      title: 'Controllo a lungo termine',
      accent: 'navy',
      icon: 'Clock',
      bullets: [
        'Regolano il **volume plasmatico** e la **gittata cardiaca**',
        '**Reni**: meccanismo di **riassorbimento** e **secrezione** di Na+ e H2O',
        '**SRAA**: principale sistema ormonale a lungo termine',
        '**ADH**: regola l’osmolarità plasmatica (1000–1200 mOsm/kg)',
        'Alterazioni croniche → **ipertensione** o **ipotensione**',
      ],
    },
  ],
  keyPoints: [
    '**PA normale**: 90–120 / 60–80 mmHg',
    '**Riflesso barocettoriale**: risposta rapida (secondi)',
    '**SRAA**: risposta intermedia (minuti-ore)',
    '**Reni/Volume**: risposta lenta (ore-giorni)',
  ],
}

export default map
