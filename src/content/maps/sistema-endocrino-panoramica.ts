import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'sistema-endocrino-panoramica',
  chapter: 'anatomia',
  title: 'Sistema endocrino',
  subtitle: 'Ghiandole, ormoni e regolazione a feedback',
  icon: 'FlaskConical',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Silverthorn D.U. — Fisiologia umana. Un approccio integrato, Pearson',
  ],
  blocks: [
    {
      title: 'Ormoni: cosa sono',
      accent: 'purple',
      icon: 'FlaskConical',
      illustration: {
        id: 'sistema-endocrino-ghiandole',
        alt: 'Sagoma umana con le principali ghiandole endocrine',
        prompt: 'human body silhouette, front view, with the main endocrine glands highlighted: hypothalamus, pituitary, thyroid, parathyroids, adrenal glands, pancreas, ovaries and testes',
        icon: 'User',
      },
      bullets: [
        'Messaggeri nel **sangue** verso cellule con **recettori** specifici',
        '**Idrosolubili** (peptidi): recettore di membrana, rapidi',
        '**Liposolubili** (steroidi, T3/T4): recettore intracellulare',
        'Azione **endocrina**, **paracrina**, **autocrina**',
      ],
    },
    {
      title: 'Asse ipotalamo-ipofisi',
      accent: 'navy',
      icon: 'Brain',
      illustration: {
        id: 'sistema-endocrino-ipofisi',
        alt: 'Ipotalamo e ipofisi con il peduncolo ipofisario',
        prompt: 'sagittal view of the brain base showing the hypothalamus connected by the pituitary stalk to the anterior and posterior pituitary gland in the sella turcica',
        icon: 'Brain',
      },
      bullets: [
        '**Ipotalamo**: TRH, CRH, GnRH, GHRH, dopamina',
        '**Adenoipofisi**: TSH, ACTH, FSH, LH, GH, prolattina',
        '**Neuroipofisi**: libera **ADH** e **ossitocina**',
        'Comanda tiroide, corticale del surrene, gonadi',
      ],
    },
    {
      title: 'Feedback negativo',
      accent: 'teal',
      icon: 'RefreshCw',
      bullets: [
        'L’ormone finale **inibisce** ipotalamo e ipofisi',
        'Es. T3/T4 alti → ↓ TRH e ↓ TSH',
        '**Feedback positivo** (raro): ossitocina nel parto, picco di LH',
        'Ritmi **circadiani**: cortisolo massimo al **mattino**',
      ],
    },
    {
      title: 'Tiroide e paratiroidi',
      accent: 'blue',
      icon: 'Target',
      illustration: {
        id: 'sistema-endocrino-tiroide',
        alt: 'Tiroide davanti alla trachea',
        prompt: 'butterfly-shaped thyroid gland in front of the trachea below the larynx, four small parathyroid glands on its back surface',
        icon: 'Target',
      },
      bullets: [
        '**T3 e T4**: regolano il **metabolismo** basale, servono **iodio**',
        'Follicoli: T4 (prevalente) → convertita in **T3** attiva',
        '**Calcitonina** (cellule C): ↓ calcemia',
        '**Paratormone (PTH)**: ↑ calcemia (osso, rene, vit. D)',
      ],
    },
    {
      title: 'Surreni e pancreas',
      accent: 'orange',
      icon: 'Droplet',
      illustration: {
        id: 'sistema-endocrino-surrene-pancreas',
        alt: 'Surreni sopra i reni e pancreas',
        prompt: 'adrenal glands on top of both kidneys and the pancreas lying behind the stomach, anterior view',
        icon: 'Droplet',
      },
      bullets: [
        '**Corticale**: aldosterone, cortisolo, androgeni',
        '**Midollare**: adrenalina e noradrenalina',
        '**Pancreas** (isole di Langerhans): cellule α e β',
        '**Insulina** ↓ glicemia · **glucagone** ↑ glicemia',
      ],
    },
    {
      title: 'Gonadi e altri organi',
      accent: 'pink',
      icon: 'Users',
      illustration: {
        id: 'sistema-endocrino-altri',
        alt: 'Ovaio, testicolo, rene e cuore come organi endocrini',
        prompt: 'small set of organs with endocrine function: ovary, testis, kidney and heart, arranged side by side',
        icon: 'Users',
      },
      bullets: [
        '**Ovaio**: estrogeni, progesterone · **testicolo**: testosterone',
        '**Rene**: eritropoietina, renina, calcitriolo',
        '**Epifisi**: melatonina (ritmo sonno-veglia)',
        '**Cuore**: ANP · **stomaco**: gastrina · **adipe**: leptina',
      ],
    },
  ],
  keyPoints: [
    'Alterazioni **primarie** = ghiandola; **secondarie** = ipofisi · tiroide: primo esame il **TSH**',
    '**ADH** trattiene acqua · **aldosterone** trattiene Na⁺ ed elimina K⁺',
  ],
}

export default map
