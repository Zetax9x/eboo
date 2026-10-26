import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'ictus-ischemico-ed-emorragico',
  chapter: 'patologie',
  title: 'Ictus ischemico ed emorragico',
  subtitle: 'Deficit neurologico acuto di origine vascolare: tipi, cause, terapia e assistenza',
  icon: 'Brain',
  status: 'bozza',
  sources: [
    'ESO — European Stroke Organisation guidelines on intravenous thrombolysis (2021) e su tenecteplase (2023)',
    'AHA/ASA — Guideline for the management of spontaneous intracerebral hemorrhage (2022)',
  ],
  definition:
    'Deficit neurologico **focale** a esordio **improvviso** da **ischemia** o **emorragia** cerebrale. **Tempo è cervello**: trattare il prima possibile.',
  illustration: {
    id: 'ictus-cervello-vasi',
    alt: 'Cervello con un’arteria occlusa da un trombo e un vaso rotto con sanguinamento',
    prompt: 'human brain with cerebral arteries, one artery blocked by a blood clot with a pale ischemic area, another vessel ruptured with bleeding into brain tissue',
    icon: 'Brain',
  },
  types: [
    { name: 'Ischemico (~80%)', text: '**Trombotico** (aterosclerosi), **cardioembolico** (FA), lacunare.' },
    { name: 'Emorragico (~15%)', text: 'Emorragia **intraparenchimale**: ipertensione, angiopatia amiloide, anticoagulanti.' },
    { name: 'Emorragia subaracnoidea', text: 'Rottura di **aneurisma**: cefalea “a rombo di tuono”.' },
    { name: 'TIA', text: 'Deficit transitorio **senza lesione** all’imaging: alto rischio di ictus a breve.' },
  ],
  sections: [
    {
      title: 'Fattori di rischio',
      icon: 'Target',
      accent: 'orange',
      items: [
        '**Ipertensione** arteriosa (il principale)',
        '**Fibrillazione atriale**, cardiopatie',
        'Diabete, dislipidemia, fumo, obesità',
        'Età avanzata, sesso maschile',
        'Alcol, sedentarietà, terapia **anticoagulante**',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'red',
      items: [
        '**BE-FAST**: equilibrio, vista, volto, braccio, linguaggio, tempo',
        '**Emiparesi**/emiplegia, ipoestesia controlaterale',
        '**Afasia**, disartria, deviazione dello sguardo',
        'Emorragia: **cefalea** intensa, vomito, calo di coscienza',
        'Gravità: scala **NIHSS**',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'Microscope',
      accent: 'blue',
      items: [
        '**TC encefalo** senza mdc: esclude l’emorragia',
        '**Angio-TC** / TC perfusione: occlusione di grosso vaso',
        '**RM** (DWI) se orario d’esordio incerto',
        'Glicemia capillare subito (esclude **ipoglicemia**)',
        'ECG, coagulazione, emocromo',
      ],
    },
    {
      title: 'Terapia ischemico',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Trombolisi ev** entro **4,5 h**: alteplase o tenecteplase',
        'Prima della trombolisi PA **< 185/110**',
        '**Trombectomia**: grosso vaso, fino a **24 h** se selezionato',
        'Poi **antiaggreganti**; se FA anticoagulanti',
        '**Statine**, controllo del rischio',
      ],
    },
    {
      title: 'Terapia emorragico',
      icon: 'Droplet',
      accent: 'purple',
      items: [
        'Riduzione rapida della **PAS** (obiettivo circa **140 mmHg**)',
        '**Reversal** degli anticoagulanti secondo protocollo',
        'Controllo di ICP, glicemia, temperatura',
        'Neurochirurgia in casi selezionati',
        'Trattamento endovascolare dell’aneurisma (**coiling**/clipping)',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Layers',
      accent: 'teal',
      items: [
        '**Polmonite da aspirazione**',
        'Edema cerebrale, trasformazione emorragica',
        '**TVP**/embolia polmonare, lesioni da pressione',
        'Spalla dolorosa, cadute, depressione',
        'Crisi epilettiche, incontinenza',
      ],
    },
  ],
  nursing: [
    'Annotare l’**ora di esordio** (ultima volta visto bene)',
    '**Screening della disfagia** prima di cibo, liquidi o farmaci per os',
    'Monitorare **GCS/NIHSS**, PA, SpO₂, glicemia, temperatura',
    '**Posizionamento** e mobilizzazione precoce dell’arto plegico, prevenzione LdP',
    'Riabilitazione precoce in **stroke unit**, educazione su terapia e rischio',
  ],
  redFlags: [
    '**Peggioramento** del deficit o calo di coscienza: avvisare subito (emorragia, edema)',
    'Durante trombolisi: **cefalea**, vomito, sanguinamenti → sospendere e avvisare',
    'Glicemia **< 70** o **> 180 mg/dL**, febbre: correggere, peggiorano l’esito',
  ],
}

export default map
