import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'organi-di-senso',
  chapter: 'anatomia',
  title: 'Organi di senso',
  subtitle: 'Vista, udito, olfatto, gusto e tatto: anatomia e fisiologia essenziale',
  icon: 'Eye',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Kandel E.R., Schwartz J.H., Jessell T.M. — Principi di neuroscienze, Zanichelli',
    'Guyton A.C., Hall J.E. — Fisiologia medica, Elsevier',
  ],
  blocks: [
    {
      title: 'Occhio e visione',
      accent: 'blue',
      icon: 'Eye',
      illustration: {
        id: 'organi-di-senso-occhio',
        alt: 'Sezione dell’occhio umano',
        prompt: 'cross-section of the human eye showing cornea, iris, lens, retina and optic nerve, clear anatomical diagram',
        icon: 'Eye',
      },
      inset: {
        label: 'Retina',
        illustration: {
          id: 'organi-di-senso-retina',
          alt: 'Dettaglio della retina con coni e bastoncelli',
          prompt: 'microscopic view of the retina showing cone and rod photoreceptor cells',
          icon: 'Microscope',
        },
      },
      bullets: [
        '**Cornea**: trasparente, aponeurotica, rifrange la luce',
        '**Iride**: muscolo sfinterico e dilatatore, regola la pupilla',
        '**Cristallino**: lente biconvessa, accomodazione',
        '**Retina**: **coni** (colore, acuità) e **bastoncelli** (scotopia)',
        '**Nervo ottico** (II): trasporta impulsi al chiasma ottico',
      ],
    },
    {
      title: 'Orecchio e udito',
      accent: 'purple',
      icon: 'Ear',
      illustration: {
        id: 'organi-di-senso-orecchio',
        alt: 'Struttura dell’orecchio',
        prompt: 'anatomical diagram of the human ear showing outer, middle and inner ear, cochlea and semicircular canals',
        icon: 'Ear',
      },
      inset: {
        label: 'Cochlea',
        illustration: {
          id: 'organi-di-senso-cochlea',
          alt: 'Cochlea e organo di Corti',
          prompt: 'cross-section of the cochlea showing the organ of Corti and hair cells',
          icon: 'Waves',
        },
      },
      bullets: [
        '**Orecchio esterno**: padiglione, condotto uditivo, timpano',
        '**Orecchio medio**: 3 ossicini (martello, incudine, staffa)',
        '**Orecchio interno**: coclea (udito) e labirinto (equilibrio)',
        '**Organo di Corti**: cellule ciliate → nervo cocleare (VIII)',
        '**Vestibolo**: canali semicircolari e utricolo/sacculo',
      ],
    },
    {
      title: 'Naso e olfatto',
      accent: 'teal',
      icon: 'Wind',
      illustration: {
        id: 'organi-di-senso-naso',
        alt: 'Cavità nasale e mucosa olfattiva',
        prompt: 'cross-section of the nasal cavity showing the olfactory epithelium in the upper part',
        icon: 'Wind',
      },
      bullets: [
        '**Mucosa olfattiva**: epitelio specializzato nella parte alta',
        '**Recettori olfattivi**: cellule ciliate che legano le molecole odorose',
        '**Nervo olfattivo** (I): unico cranico che non attraversa il chiasma',
        '**Funzioni**: filtrazione, umidificazione, risonanza vocale',
        '**Congestione nasale** riduce drasticamente la percezione olfattiva',
      ],
    },
    {
      title: 'Lingua e gusto',
      accent: 'orange',
      icon: 'Apple',
      illustration: {
        id: 'organi-di-senso-lingua',
        alt: 'Lingua con papille gustative',
        prompt: 'top view of the human tongue showing different types of papillae and taste buds',
        icon: 'Apple',
      },
      bullets: [
        '**Papille**: fungiformi, filiformi, caliciformi, foliate',
        '**Gusti base**: dolce, salato, acido, amaro, umami',
        '**Recettori**: cellule gustative nelle papille',
        '**Nervi**: VII (anteriore), IX (posteriore), X (radice)',
        '**Interazione** con l’olfatto per la percezione complessiva del sapore',
      ],
    },
    {
      title: 'Cute e tatto',
      accent: 'green',
      icon: 'Hand',
      illustration: {
        id: 'organi-di-senso-cute',
        alt: 'Sezione della pelle con recettori tattili',
        prompt: 'cross-section of human skin showing epidermis, dermis and subcutaneous tissue with various sensory receptors',
        icon: 'Hand',
      },
      bullets: [
        '**Epidermide**: strato corneo, basale, spinoso, granuloso, lucido',
        '**Derma**: papillare e reticolare, ricca di vasi e nervi',
        '**Recettori**: corpuscoli di Meissner (tatto fine), Pacini (pressione)',
        '**Corpuscoli di Krause** (freddo), **Ruffini** (caldo/tensione)',
        '**Termostato**: termoregolazione tramite sudorazione e vasodilatazione',
      ],
    },
    {
      title: 'Integrazione sensoriale',
      accent: 'navy',
      icon: 'Brain',
      illustration: {
        id: 'organi-di-senso-cervello',
        alt: 'Cervello con aree sensoriali',
        prompt: 'lateral view of the human brain highlighting the sensory cortex areas for vision, hearing and touch',
        icon: 'Brain',
      },
      bullets: [
        '**Corteccia visiva**: lobo occipitale',
        '**Corteccia uditiva**: lobo temporale',
        '**Corteccia somatosensitiva**: lobo parietale',
        '**Plasticità neurale**: il cervello può riorganizzarsi dopo lesioni',
        '**Sinestesia**: interazione tra diversi canali sensoriali',
      ],
    },
  ],
  keyPoints: [
    '**I** = olfatto · **II** = vista · **VIII** = udito/equilibrio',
    '**Coni** = colore/acuità · **Bastoncelli** = visione notturna',
    '**Acuità visiva** normale: 10/10 (o 1.0) con test di Snellen',
  ],
}

export default map
