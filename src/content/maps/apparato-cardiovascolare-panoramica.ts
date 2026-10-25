import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'apparato-cardiovascolare-panoramica',
  chapter: 'anatomia',
  title: 'Apparato cardiovascolare',
  subtitle: 'Cuore, vasi e regolazione della pressione in una pagina',
  icon: 'HeartPulse',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Linee guida ESC 2024 sulla gestione della pressione arteriosa elevata e dell’ipertensione',
  ],
  blocks: [
    {
      title: 'Anatomia del cuore',
      accent: 'red',
      icon: 'Heart',
      illustration: {
        id: 'cv-cuore-anatomia',
        alt: 'Cuore con atri, ventricoli e grandi vasi',
        prompt: 'anatomical human heart, front view, showing aorta, pulmonary trunk and venae cavae, red and blue vessels',
        icon: 'Heart',
      },
      inset: {
        label: 'Le 4 camere',
        illustration: {
          id: 'cv-cuore-sezione',
          alt: 'Sezione del cuore',
          prompt: 'human heart cut open in frontal section, front view, all four inner cavities and the dividing wall between the ventricles visible',
          icon: 'Layers',
        },
      },
      bullets: [
        '**2 atri** e **2 ventricoli**, separati dai setti',
        'Parete: **epicardio**, **miocardio**, **endocardio**; avvolto dal **pericardio**',
        'Irrorato dalle **coronarie** destra e sinistra',
        'Il ventricolo sinistro ha la parete più spessa',
      ],
    },
    {
      title: 'Valvole cardiache',
      accent: 'purple',
      icon: 'GitBranch',
      illustration: {
        id: 'cv-valvole',
        alt: 'Piano valvolare visto dall’alto',
        prompt: 'top view of the four heart valves (mitral, tricuspid, aortic, pulmonary) in the cardiac skeleton',
        icon: 'CircleDot',
      },
      bullets: [
        '**Atrioventricolari**: tricuspide (dx) e mitrale (sx)',
        '**Semilunari**: polmonare e aortica',
        'Garantiscono un flusso **unidirezionale**',
        '**S1** = chiusura AV · **S2** = chiusura semilunari',
      ],
    },
    {
      title: 'Grande e piccolo circolo',
      accent: 'blue',
      icon: 'Repeat',
      illustration: {
        id: 'cv-circolazione',
        alt: 'Schema della circolazione sistemica e polmonare',
        prompt: 'simple diagram of systemic and pulmonary circulation, heart in the centre, lungs above, body organs below, oxygenated vessels red and deoxygenated vessels blue',
        icon: 'Repeat',
      },
      bullets: [
        '**Grande circolo**: VS → aorta → tessuti → vene cave → AD',
        '**Piccolo circolo**: VD → a. polmonare → polmoni → vene polmonari → AS',
        '**Arterie** portano il sangue dal cuore, **vene** al cuore',
      ],
    },
    {
      title: 'Sistema di conduzione',
      accent: 'orange',
      icon: 'Zap',
      illustration: {
        id: 'cv-conduzione',
        alt: 'Sistema di conduzione elettrica del cuore',
        prompt: 'heart with the electrical conduction system highlighted in yellow: sinoatrial node, atrioventricular node, bundle of His, bundle branches, Purkinje fibres',
        icon: 'Zap',
      },
      inset: {
        label: 'Nodo senoatriale',
        illustration: {
          id: 'cv-conduzione-nodo-sa',
          alt: 'Impulso elettrico che parte dal nodo senoatriale',
          prompt: 'whole human heart, front view, a small glowing spot at the top of the right atrium with soft waves of light spreading across both atria',
          icon: 'Zap',
        },
      },
      bullets: [
        '**Nodo senoatriale**: pacemaker, 60–100 bpm',
        '**Nodo atrioventricolare**: rallenta l’impulso',
        '**Fascio di His** → branche dx e sx',
        '**Fibre di Purkinje**: contrazione dei ventricoli',
      ],
    },
    {
      title: 'Ciclo cardiaco e gittata',
      accent: 'teal',
      icon: 'RefreshCw',
      illustration: {
        id: 'cv-ciclo-cardiaco',
        alt: 'Cuore in sistole e in diastole',
        prompt: 'two small hearts side by side, the left one squeezed with blood pushed out into the arteries, the right one relaxed and filling with blood, curved arrows showing blood flow',
        icon: 'RefreshCw',
      },
      bullets: [
        '**Sistole**: contrazione ed eiezione',
        '**Diastole**: rilasciamento e riempimento',
        '**Gittata cardiaca** = FC × gittata sistolica',
        'A riposo circa **4–8 L/min**',
      ],
    },
    {
      title: 'Pressione arteriosa',
      accent: 'green',
      icon: 'Gauge',
      illustration: {
        id: 'cv-pressione',
        alt: 'Sfigmomanometro al braccio',
        prompt: 'upper arm with blood pressure cuff and aneroid gauge, stethoscope on the brachial artery',
        icon: 'Gauge',
      },
      bullets: [
        '**PA** = gittata cardiaca × resistenze periferiche',
        '**Non elevata** < 120/70 · **Elevata** 120–139/70–89',
        '**Ipertensione** ≥ 140/90 mmHg (in ambulatorio)',
        'Regolazione: **barocettori**, **SNA**, sistema **renina-angiotensina-aldosterone**',
      ],
    },
  ],
  keyPoints: [
    '**FC adulto**: 60–100 bpm',
    '**PAM** = (PAS + 2 × PAD) / 3',
    '**PAM** ≥ 65 mmHg per una buona perfusione d’organo',
  ],
}

export default map
