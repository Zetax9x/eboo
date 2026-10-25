import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'cirrosi-epatica',
  chapter: 'patologie',
  title: 'Cirrosi epatica',
  subtitle: 'Fibrosi e noduli di rigenerazione: cause, complicanze e assistenza',
  icon: 'Droplets',
  status: 'bozza',
  sources: [
    'EASL — Clinical Practice Guidelines on decompensated cirrhosis (2018)',
    'Baveno VII — Renewing consensus in portal hypertension (2022)',
    'AISF — Associazione Italiana per lo Studio del Fegato, position paper',
  ],
  definition:
    'Stadio finale delle epatopatie croniche: **fibrosi** diffusa e **noduli di rigenerazione** che sovvertono la struttura del fegato → **insufficienza epatica** e **ipertensione portale**.',
  illustration: {
    id: 'cirrosi-fegato-nodulare',
    alt: 'Fegato cirrotico nodulare con vena porta dilatata',
    prompt: 'shrunken nodular cirrhotic liver with a dilated portal vein, enlarged spleen and fluid in the abdomen',
    icon: 'Droplets',
  },
  types: [
    { name: 'Cause principali', text: '**Alcol**, **HCV**, **HBV**, steatosi metabolica (**MASLD**).' },
    { name: 'Altre cause', text: 'Autoimmune, biliare, emocromatosi, Wilson.' },
    { name: 'Compensata', text: 'Spesso **asintomatica**; diagnosi occasionale.' },
    { name: 'Scompensata', text: 'Ascite, ittero, varici sanguinanti, encefalopatia. Gravità: **Child-Pugh**, **MELD**.' },
  ],
  sections: [
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Ittero**, prurito, astenia',
        '**Spider naevi**, eritema palmare',
        'Ascite, **circolo collaterale** (caput medusae)',
        'Splenomegalia, ginecomastia',
        '**Asterixis** (flapping tremor)',
        'Ecchimosi, sanguinamento gengivale',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '↓ **Albumina**, ↑ **INR**, ↑ bilirubina',
        '**Piastrinopenia** (ipersplenismo)',
        '**Ecografia** addome, elastografia (FibroScan)',
        '**EGDS**: ricerca delle varici esofagee',
        'Biopsia solo in casi dubbi',
        'Ascite nuova: **paracentesi diagnostica**',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Layers',
      accent: 'red',
      items: [
        '**Emorragia da varici** esofagee',
        '**Ascite** e peritonite batterica spontanea',
        '**Encefalopatia** epatica',
        'Sindrome **epatorenale**',
        '**Epatocarcinoma** (HCC)',
        '**Malnutrizione**, sarcopenia, coagulopatia',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        'Trattare la **causa**: astensione dall’alcol, antivirali',
        'Ascite: **restrizione di sodio**, spironolattone ± furosemide',
        '**Paracentesi** evacuativa + **albumina** ev',
        'β-bloccanti **non selettivi** (carvedilolo) per le varici',
        '**Trapianto** di fegato nei casi selezionati',
      ],
    },
    {
      title: 'Encefalopatia epatica',
      icon: 'Brain',
      accent: 'purple',
      items: [
        'Da **ammoniaca** non detossificata',
        'Confusione, inversione **sonno-veglia**, asterixis, coma',
        'Scatenanti: emorragia, infezioni, **stipsi**, sedativi',
        '**Lattulosio**: 2–3 evacuazioni morbide/die',
        '**Rifaximina** per prevenire le recidive',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        '**Peso** quotidiano e circonferenza addominale',
        '**Bilancio idrico**, diuresi, elettroliti',
        'Stato mentale, **alvo**',
        'Ecografia ogni **6 mesi** (screening HCC)',
        'Sanguinamenti, funzione renale',
      ],
    },
  ],
  nursing: [
    'Pesare il paziente ogni giorno **alla stessa ora**, a digiuno',
    'Dieta **iposodica**, **senza restrizione proteica**; spuntino serale',
    'Evitare **sedativi**, FANS e farmaci epatotossici',
    'Cura della cute (prurito, edemi) e prevenzione delle **LdP**',
    'Paracentesi: posizione, PA, sede di puntura, **volume drenato**',
  ],
  redFlags: [
    '**Ematemesi**, melena, ipotensione: emorragia da varici → emergenza',
    'Ascite con **febbre** o dolore addominale: sospetta **PBS**',
    'Confusione, sonnolenza, **calo della diuresi**: avvisare il medico',
  ],
}

export default map
