import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'osteoporosi',
  chapter: 'patologie',
  title: 'Osteoporosi',
  subtitle: 'Riduzione della densità ossea: fattori di rischio, diagnosi, terapia e prevenzione delle fratture',
  icon: 'Bone',
  status: 'bozza',
  sources: [
    'AIO — Linee guida per la diagnosi e la terapia dell’osteoporosi (2023)',
    'IST — Istituto Superiore di Sanità: Raccomandazioni per la prevenzione delle fratture da fragilità',
    'NOF — National Osteoporosis Foundation: Clinician’s Guide (2024)',
  ],
  definition:
    'Malattia metabolica scheletrica caratterizzata da una **riduzione della massa ossea** e da un deterioramento della microarchitettura del tessuto osseo, che aumenta la fragilità e il rischio di **fratture**.',
  illustration: {
    id: 'osteoporosi-osso-trabecolare',
    alt: 'Confronto tra osso sano e osso osteoporotico',
    prompt: 'cross-section of healthy bone with dense trabecular network next to osteoporotic bone with thin sparse trabeculae, magnified view',
    icon: 'Bone',
  },
  types: [
    { name: 'Postmenopausale', text: 'Tipo I: legata al **deficit estrogenico**. Colpisce prevalentemente donne > 50 anni. Siti tipici: vertebre, polso, femore.' },
    { name: 'Senile', text: 'Tipo II: legata all’**invecchiamento** e al calo dell’assorbimento del calcio. Colpisce uomini e donne > 70 anni. Siti tipici: femore, vertebre, bacino.' },
    { name: 'Secondaria', text: 'Dovuta a patologie o farmaci: **corticosteroidi**, iperparatiroidismo, ipogonadismo, malassorbimento, malattie reumatiche.' },
  ],
  sections: [
    {
      title: 'Fattori di rischio',
      icon: 'ShieldAlert',
      accent: 'purple',
      items: [
        '**Età avanzata** e sesso femminile (postmenopausa)',
        '**Bassa massa corporea** (BMI < 20 kg/m²)',
        'Familiarità per fratture da fragilità',
        'Uso cronico di **corticosteroidi** (> 3 mesi)',
        'Sedentarietà, **fumo di sigaretta**, abuso di alcol',
        'Carenza di **vitamina D** e calcio',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        'Spesso **asintomatica** fino alla prima frattura',
        '**Dolore lombare** o dorsale (fratture vertebrali)',
        'Perdita di altezza (> 3 cm in pochi anni)',
        'Gibbosità (chifosi) da collasso vertebrale',
        'Dolore acuto dopo traumi minimi (tosse, caduta da altezza propria)',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**Densitometria ossea** (DXA): T-score **≤ -2,5** = osteoporosi',
        'T-score tra **-1,0 e -2,5** = osteopenia',
        'Valutazione del rischio frattura con **FRAX**',
        'Esami ematochimici: Ca, P, Vit D, PTH, creatinina, emocromo',
        'RX: ricerca di **fratture vertebrali** silenti',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Integrazione**: Calcio (1000–1200 mg/die) + Vitamina D (800–1000 UI/die)',
        '**Bisfosfonati** (es. Alendronato): inibiscono il riassorbimento osseo',
        '**Denosumab**: anticorpo anti-RANKL, iniezione ogni 6 mesi',
        '**Terapia ormonale** (HRT): solo in donne giovani con sintomi vasomotori',
        'Terapie anaboliche (es. Teriparatide) in casi gravi',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Frattura di femore**: alta mortalità e disabilità',
        '**Fratture vertebrali**: dolore cronico, perdita di autonomia',
        'Frattura del **polso** (Colles) o dell’omero',
        'Riduzione della qualità della vita e istituzionalizzazione',
      ],
    },
    {
      title: 'Prevenzione e stile di vita',
      icon: 'Activity',
      accent: 'teal',
      items: [
        '**Attività fisica** con carico (camminata, pesi leggeri)',
        'Dieta ricca di **calcio** (latticini, verdure a foglia verde)',
        'Esposizione al **sole** (10-15 min/die) per sintesi Vitamina D',
        'Evitare **fumo** e limitare l’alcol',
        'Prevenzione **cadute**: illuminazione, scarpe antiscivolo, revisione farmaci',
      ],
    },
  ],
  nursing: [
    'Valutare il **rischio di caduta** e rimuovere ostacoli nell’ambiente',
    'Somministrare i farmaci orali (es. Alendronato) a **digiuno**, con acqua, restando in piedi per 30 min',
    'Educare al **riconoscimento** dei sintomi di frattura (dolore improvviso, deformità)',
    'Promuovere l’**attività fisica** sicura e l’aderenza alla terapia',
    'Monitorare gli effetti collaterali (es. esofagite da bisfosfonati, ipocalcemia)',
  ],
  redFlags: [
    '**Dolore lombare acuto** dopo un trauma minimo: sospetto di frattura vertebrale, avvisare il medico',
    '**Impossibilità a deambulare** dopo una caduta: sospetto di frattura di femore, chiamata al 118',
    'Segni di **ipocalcemia** (tetania, parestesie) durante la terapia: monitorare i livelli di Ca',
  ],
}

export default map
