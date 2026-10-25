import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'il-cuore-camere-e-valvole',
  chapter: 'anatomia',
  title: 'Il cuore: camere e valvole',
  subtitle: 'Cavità, valvole, toni, pareti e coronarie',
  icon: 'Heart',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Bickley L.S. — Bates. Esame obiettivo e anamnesi, Piccin',
  ],
  blocks: [
    {
      title: 'Cuore destro',
      accent: 'blue',
      icon: 'Droplet',
      illustration: {
        id: 'cuore-camere-destre',
        alt: 'Atrio e ventricolo destro aperti',
        prompt: 'opened right atrium and right ventricle of the human heart, venae cavae entering, tricuspid valve and pulmonary trunk, deoxygenated blood in blue',
        icon: 'Droplet',
      },
      bullets: [
        '**Atrio dx**: riceve **vene cave** e **seno coronarico**',
                '**Ventricolo dx**: parete sottile (**3–5 mm**)',
        'Pompa a bassa pressione nel **tronco polmonare**',
        'Ospita il **nodo senoatriale** e la fossa ovale',
      ],
    },
    {
      title: 'Cuore sinistro',
      accent: 'red',
      icon: 'HeartPulse',
      illustration: {
        id: 'cuore-camere-sinistre',
        alt: 'Atrio e ventricolo sinistro aperti',
        prompt: 'opened left atrium and thick-walled left ventricle of the human heart, four pulmonary veins entering, mitral valve and aorta, oxygenated blood in red',
        icon: 'HeartPulse',
      },
      bullets: [
        '**Atrio sx**: riceve sangue ossigenato dalle **4 vene polmonari**',
        '**Ventricolo sx**: parete spessa (**10–15 mm**)',
                'Alta pressione in **aorta** · ipertrofia se **ipertensione**',
        'Il VS forma l’**apice** (itto al 5° spazio ic sx)',
      ],
    },
    {
      title: 'Valvole atrioventricolari',
      accent: 'purple',
      icon: 'GitBranch',
      illustration: {
        id: 'cuore-valvole-av',
        alt: 'Valvola mitrale con corde tendinee e muscoli papillari',
        prompt: 'mitral valve leaflets attached by chordae tendineae to papillary muscles inside the left ventricle',
        icon: 'GitBranch',
      },
      bullets: [
        '**Tricuspide** (3 lembi) · **mitrale** (2 lembi)',
        '**Corde tendinee** e **m. papillari**: no prolasso',
        'Si chiudono a inizio sistole → **S1** (“TUM”)',
        'Rottura papillare post-IMA → **insuff. mitralica**',
      ],
    },
    {
      title: 'Valvole semilunari',
      accent: 'orange',
      icon: 'CircleDot',
      illustration: {
        id: 'cuore-valvole-semilunari',
        alt: 'Valvola aortica a tre cuspidi',
        prompt: 'aortic valve seen from above inside the aorta, three crescent-shaped cusps meeting in the center, two small round openings of the coronary arteries just above the cusps',
        icon: 'CircleDot',
      },
      bullets: [
        '**Polmonare** e **aortica**: 3 cuspidi, senza corde',
        'Si chiudono a inizio diastole → **S2** (“TA”)',
        '**Stenosi** = non si apre · **insufficienza** = rigurgito',
        'Toni aggiunti: **S3** scompenso · **S4** VS rigido',
      ],
    },
    {
      title: 'Parete e pericardio',
      accent: 'teal',
      icon: 'Layers',
      illustration: {
        id: 'cuore-pericardio',
        alt: 'Strati della parete cardiaca e sacco pericardico',
        prompt: 'layered cut of the heart wall showing endocardium, myocardium, epicardium and the pericardial sac with pericardial cavity',
        icon: 'Layers',
      },
      bullets: [
        '**Endocardio** · **miocardio** (muscolo) · **epicardio**',
        '**Pericardio** fibroso + sieroso, liquido **15–50 mL**',
        'Versamento rapido → **tamponamento cardiaco**',
        'Peso del cuore adulto ≈ **250–350 g**',
              ],
    },
    {
      title: 'Coronarie',
      accent: 'green',
      icon: 'Route',
      illustration: {
        id: 'cuore-coronarie',
        alt: 'Arterie coronarie sulla superficie del cuore',
        prompt: 'anterior view of the heart surface showing right coronary artery, left main, left anterior descending and circumflex arteries',
        icon: 'Route',
      },
      bullets: [
        'Originano dai **seni aortici** (di Valsalva)',
        '**Sx**: tronco comune → **discendente anteriore** e **circonflessa**',
        '**Dx**: VD, parete inferiore, spesso nodi **SA** e **AV**',
        'Il VS si perfonde soprattutto in **diastole**',
      ],
    },
  ],
  keyPoints: [
    '**Focolai**: aortico 2° ic dx · polmonare 2° sx · tricuspide 4°–5° sx · mitrale 5° sx emiclaveare',
    '**Tamponamento** (Beck): ipotensione, turgore giugulare, toni ovattati',
  ],
}

export default map
