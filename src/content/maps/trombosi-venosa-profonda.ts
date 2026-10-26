import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'trombosi-venosa-profonda',
  chapter: 'patologie',
  title: 'Trombosi venosa profonda',
  subtitle: 'Coagulo nelle vene profonde: fattori di rischio, diagnosi, anticoagulazione e assistenza',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'ACCP — Antithrombotic Therapy for VTE Disease (9th ed., 2021)',
    'ISTH — International Society on Thrombosis and Haemostasis Guidelines',
    'NICE — Venous thromboembolism: reducing the risk of VTE (2022)',
  ],
  definition:
    'Formazione di un **trombo** all’interno delle vene profonde (soprattutto degli arti inferiori) che può occludere il flusso venoso e migrare causando **embolia polmonare**.',
  illustration: {
    id: 'tvp-vena-trombo',
    alt: 'Vena profonda dell’arto inferiore con trombo',
    prompt: 'cross section of a deep vein in the leg showing a blood clot blocking the lumen, red and blue blood cells, healthy vein next to it for comparison',
    icon: 'Droplet',
  },
  types: [
    { name: 'Prossimale', text: 'Vene poplitea, femorale o iliaca. Rischio **EP** più alto.' },
    { name: 'Distale', text: 'Vene tibiali o muscolari. Rischio EP più basso, ma può estendersi.' },
    { name: 'Acuta', text: 'Sintomi insorti da **< 14 giorni**. Edema marcato.' },
    { name: 'Cronica', text: 'Sintomi persistenti > 3 mesi. **Sindrome post-trombotica**.' },
  ],
  sections: [
    {
      title: 'Fattori di rischio',
      icon: 'TriangleAlert',
      accent: 'purple',
      items: [
        '**Immobilità** prolungata (lettino, volo lungo)',
        '**Chirurgia** recente (anca, ginocchio, addome)',
        '**Cancro** attivo o terapia chemioterapica',
        '**Trombofilia** ereditaria (Fattore V Leiden, Protrombina G20210A)',
        '**Gravidanza** e post-partum',
        '**Contraccettivi** orali o terapia ormonale sostitutiva',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Edema** unilaterale della gamba o caviglia',
        '**Dolore** alla coscia o polpaccio (segno di Homans)',
        'Pelle **calda**, rossa o violacea',
        'Vene superficiali dilatate e palpabili',
        'Assenza di sintomi in **~50%** dei casi (TVP silente)',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**D-dimero**: alta sensibilità, bassa specificità (utile per escludere)',
        '**Eco-Doppler** venoso: esame di prima scelta (visualizza il trombo)',
        '**Angio-TAC** venosa: se l’eco è inconcludente o sospetta EP',
        'Punteggio di **Wells**: stratifica la probabilità clinica',
        'Biopsia tissutale: rara, solo in casi dubbi',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Anticoagulanti** a basso peso molecolare (eparina enoxaparina)',
        '**DOAC** (rivaroxaban, apixaban, dabigatran): prima scelta se possibile',
        '**Warfarin**: se DOAC controindicati (INR target 2,0–3,0)',
        '**Filtro cava** venoso: solo se anticoagulazione controindicata',
        'Trombolisi: riservata a TVP massive o EP ad alto rischio',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Embolia polmonare** (EP): dispnea, dolore toracico, tachicardia',
        '**Sindrome post-trombotica**: edema cronico, ulcere venose',
        '**Embolia paradossa**: attraverso forame ovale pervio',
        'Sanguinamento: effetto collaterale degli anticoagulanti',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        'Controllare **INR** se in terapia con warfarin',
        'Monitorare segni di **sanguinamento** (ematuria, ematomi)',
        'Valutare l’edema e il dolore quotidianamente',
        'Eco-Doppler di controllo se sintomi persistenti',
        'Verificare l’aderenza alla terapia anticoagulante',
      ],
    },
  ],
  nursing: [
    'Somministrare gli anticoagulanti secondo protocollo, verificando **dose e via di somministrazione**',
    'Monitorare i segni vitali e la **periferia** (colore, temperatura, edema)',
    'Educare il paziente a riconoscere i sintomi di **EP** (dispnea, dolore toracico)',
    'Promuovere la **mobilità** precoce e l’uso di calze elastiche compressive',
    'Verificare la presenza di **controindicazioni** al movimento (es. trombo mobile)',
  ],
  redFlags: [
    '**Dispnea improvvisa**, dolore toracico pleuritico o sincope: sospetta **EP**, avvisare subito il medico',
    'Sanguinamento attivo (vomito, ematemesi, ematuria): **sospendere** l’anticoagulante e avvisare',
    'Edema improvviso e grave con dolore intenso: valutare **trombo mobile** o sindrome compartimentale',
  ],
}

export default map
