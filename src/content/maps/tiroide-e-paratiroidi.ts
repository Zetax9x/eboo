import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'tiroide-e-paratiroidi',
  chapter: 'anatomia',
  title: 'Tiroide e paratiroidi',
  subtitle: 'Metabolismo, ormoni tiroidei e controllo del calcio',
  icon: 'Target',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Silverthorn D.U. — Fisiologia umana. Un approccio integrato, Pearson',
    'Ministero della Salute — Iodoprofilassi (Legge 55/2005)',
  ],
  blocks: [
    {
      title: 'Anatomia della tiroide',
      accent: 'blue',
      icon: 'Target',
      illustration: {
        id: 'tiroide-e-paratiroidi-anatomia',
        alt: 'Tiroide a farfalla davanti alla trachea',
        prompt: 'anterior view of the neck showing the butterfly-shaped thyroid gland with two lobes and isthmus in front of the trachea, below the thyroid cartilage of the larynx',
        icon: 'Target',
      },
      inset: {
        label: 'Follicoli',
        illustration: {
          id: 'tiroide-e-paratiroidi-follicoli',
          alt: 'Follicoli tiroidei al microscopio',
          prompt: 'microscopic view of thyroid follicles filled with pink colloid, lined by cuboidal cells, with parafollicular cells between follicles',
          icon: 'Microscope',
        },
      },
      bullets: [
        '**2 lobi** uniti dall’**istmo**, davanti alla trachea sotto la cartilagine cricoide',
        '**Follicoli** pieni di colloide (**tireoglobulina**) → T3 e T4',
        '**Cellule C** parafollicolari → **calcitonina**',
        'Dietro decorrono i **nervi laringei ricorrenti** (voce)',
        'Organo molto **vascolarizzato**: rischio di **ematoma** compressivo dopo chirurgia',
        'Peso nell’adulto circa **20–25 g**; si sposta con la **deglutizione**',
        '**Gozzo**: aumento di volume (spesso da carenza di iodio)',
        'Esami: **ecografia**, scintigrafia, agoaspirato dei noduli',
      ],
    },
    {
      title: 'Ormoni tiroidei',
      accent: 'purple',
      icon: 'Zap',
      illustration: {
        id: 'tiroide-e-paratiroidi-asse',
        alt: 'Asse ipotalamo-ipofisi-tiroide',
        prompt: 'diagram of brain hypothalamus, pituitary gland and thyroid gland linked by arrows, with a returning inhibitory arrow',
        icon: 'RefreshCw',
      },
      bullets: [
        'Asse **TRH → TSH → T4/T3**, con feedback negativo',
        'Secreta soprattutto **T4**; la **T3** (più attiva) deriva dalla conversione periferica',
        'Circolano legati a proteine: attiva solo la quota **libera** (FT3, FT4)',
        '↑ **metabolismo basale**, calore, FC, motilità intestinale',
        'Essenziali per lo **sviluppo cerebrale**: screening neonatale obbligatorio',
        'Servono **iodio**: 150 µg/die nell’adulto · usare **sale iodato**',
        'Fabbisogno di iodio ↑ in **gravidanza** e allattamento',
      ],
    },
    {
      title: 'Ipo- e ipertiroidismo',
      accent: 'orange',
      icon: 'Thermometer',
      illustration: {
        id: 'tiroide-e-paratiroidi-ipo-iper',
        alt: 'Confronto tra paziente ipotiroideo e ipertiroideo',
        prompt: 'two adult figures side by side: one tired, wrapped in a blanket with puffy face; the other thin, sweating, with bulging eyes and trembling hands',
        icon: 'Users',
      },
      bullets: [
        '**Ipo**: bradicardia, **freddo**, aumento di peso, stipsi, cute secca, sonnolenza',
        '**Ipo**: causa più frequente **tiroidite di Hashimoto**; terapia **levotiroxina**',
        '**Iper**: tachicardia/**FA**, calo di peso, **caldo**, tremori, ansia, diarrea',
        '**Iper**: Graves-Basedow con **esoftalmo**',
        'Ipo primario: **TSH ↑** e FT4 ↓ · iper primario: **TSH ↓** e FT4 ↑',
        '**Coma mixedematoso**: ipotermia, bradicardia, sopore (emergenza)',
        '**Crisi tireotossica**: febbre alta, tachiaritmie, agitazione (emergenza)',
      ],
    },
    {
      title: 'Paratiroidi e calcio',
      accent: 'green',
      icon: 'Bone',
      bullets: [
        '**4 ghiandole** sulla faccia posteriore della tiroide',
        '**PTH** ↑ calcemia: libera Ca²⁺ dall’**osso**, lo trattiene nel **rene**, attiva la **vitamina D**',
        'PTH ↑ eliminazione renale dei **fosfati**',
        '**Calcitonina**: azione opposta, ruolo minore nell’adulto',
        'Calcemia totale **8,5–10,5 mg/dL** (correggere per l’albumina)',
        '**Ipocalcemia**: parestesie periorali, segni di **Chvostek** e **Trousseau**, tetania',
        '**Ipercalcemia**: astenia, stipsi, poliuria, calcoli renali',
        'Vitamina D attiva (**calcitriolo**) ↑ assorbimento intestinale di Ca²⁺',
      ],
    },
  ],
  keyPoints: [
    'Dopo **tiroidectomia**: controllare **voce**, respiro (ematoma al collo) e **calcemia**',
    '**Levotiroxina**: a digiuno, 30–60 min prima della colazione',
  ],
}

export default map
