import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'cardiopatia-ischemica-e-angina',
  chapter: 'patologie',
  title: 'Cardiopatia ischemica e angina',
  subtitle: 'Squilibrio tra domanda e offerta di ossigeno al miocardio',
  icon: 'Heart',
  status: 'bozza',
  sources: [
    'ESC 2024 Guidelines for the management of chronic coronary syndromes (Eur Heart J 2024)',
    'ESC 2023 Guidelines for the management of acute coronary syndromes (Eur Heart J 2023)',
  ],
  definition:
    'Ischemia miocardica dovuta di solito ad **aterosclerosi coronarica**: l’apporto di O₂ non copre il fabbisogno del cuore. Il sintomo tipico è l’**angina pectoris**.',
  illustration: {
    id: 'cardiopatia-ischemica-placca',
    alt: 'Cuore con arteria coronaria ristretta da una placca',
    prompt: 'human heart with coronary arteries, magnified section of a coronary artery narrowed by an atherosclerotic plaque, reduced blood flow',
    icon: 'Heart',
  },
  types: [
    { name: 'Angina stabile', text: 'Da **sforzo** o emozioni, prevedibile; cede con **riposo/nitrati** in pochi minuti.' },
    { name: 'Angina instabile', text: 'Nuova, ingravescente o **a riposo**: è una **SCA**, urgenza.' },
    { name: 'Vasospastica', text: 'Spasmo coronarico (Prinzmetal), spesso **notturna/a riposo**.' },
    { name: 'Microvascolare', text: 'Angina con coronarie epicardiche **senza stenosi** significative.' },
  ],
  sections: [
    {
      title: 'Fattori di rischio',
      icon: 'Users',
      accent: 'orange',
      items: [
        '**Fumo**, ipertensione, **dislipidemia**',
        '**Diabete**, obesità, sedentarietà',
        'Età, sesso maschile, familiarità precoce',
        'Malattia renale cronica',
        'Modificabili → bersaglio della **prevenzione**',
      ],
    },
    {
      title: 'Il dolore anginoso',
      icon: 'HeartPulse',
      accent: 'red',
      items: [
        '**Retrosternale**, oppressivo, “a morsa”',
        'Irradiato a **braccio sx**, collo, mandibola, dorso',
        'Durata di solito **< 10–15 min**',
        'Equivalenti: **dispnea**, astenia, epigastralgia',
        'Sintomi atipici in **donne, anziani, diabetici**',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**ECG a riposo**: spesso normale',
        'Eco, lipidi, glicemia, HbA1c',
        '**Angio-TC coronarica** se probabilità bassa-intermedia',
        'Test **funzionali**: eco da stress, scintigrafia, RM',
        '**Coronarografia** se rischio alto',
      ],
    },
    {
      title: 'Terapia antianginosa',
      icon: 'Pill',
      accent: 'teal',
      items: [
        '**Nitroglicerina sublinguale** al bisogno',
        '**Beta-bloccanti** e/o **calcioantagonisti** di 1ª linea',
        'Altri: nitrati a lunga durata, ranolazina, ivabradina',
        'Nella vasospastica: **calcioantagonisti** e nitrati',
      ],
    },
    {
      title: 'Prevenzione eventi',
      icon: 'ShieldCheck',
      accent: 'green',
      items: [
        '**Antiaggregante**: aspirina a basso dosaggio',
        '**Statina** ad alta intensità: LDL **< 55 mg/dL**',
        'ACE-i se ipertensione, diabete, disfunzione VS',
        'Stop fumo, dieta, attività fisica, controllo peso',
      ],
    },
    {
      title: 'Rivascolarizzazione',
      icon: 'Route',
      accent: 'purple',
      items: [
        '**PCI**: angioplastica con stent',
        '**By-pass aorto-coronarico** (CABG): malattia multivasale, tronco comune',
        'Indicata se sintomi persistenti o anatomia ad alto rischio',
        'Dopo stent: **doppia antiaggregazione** per il tempo prescritto',
      ],
    },
  ],
  nursing: [
    'Durante il dolore: **riposo**, ECG a 12 derivazioni, parametri vitali, SpO₂',
    'Nitroglicerina sl secondo prescrizione: verificare **PAS** prima (rischio ipotensione)',
    'No nitrati se assunti **inibitori PDE-5** (es. sildenafil) nelle 24–48 h precedenti',
    'Educare a portare sempre la **nitroglicerina** e a riconoscere i sintomi d’allarme',
    'Sostenere **aderenza** a statine e antiaggreganti; riabilitazione cardiologica',
  ],
  redFlags: [
    'Dolore **a riposo**, > 20 min o che non cede ai nitrati: **chiamare il 112**',
    'Angina nuova o in peggioramento: possibile **SCA**',
    'Dolore con sudorazione, sincope, dispnea o aritmie: **ECG subito**',
    'Ipotensione dopo nitroglicerina: **supino**, gambe sollevate, avvisare',
  ],
}

export default map
