import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'infarto-miocardico-acuto',
  chapter: 'patologie',
  title: 'Infarto miocardico acuto',
  subtitle: 'Necrosi miocardica da ischemia: classificazione, diagnosi, terapia e complicanze',
  icon: 'HeartPulse',
  status: 'bozza',
  sources: [
    'ESC 2023 Guidelines for the management of acute coronary syndromes (Eur Heart J 2023)',
    'Fourth Universal Definition of Myocardial Infarction (ESC/ACC/AHA/WHF, 2018)',
  ],
  definition:
    '**Necrosi** di cellule miocardiche da ischemia prolungata: aumento della **troponina** (almeno un valore > 99° percentile) + segni clinici, ECG o di imaging di ischemia.',
  illustration: {
    id: 'infarto-miocardico-acuto-trombo',
    alt: 'Coronaria occlusa da un trombo e area di miocardio infartuato',
    prompt: 'human heart with a coronary artery occluded by a thrombus on a ruptured plaque, darkened area of damaged heart muscle downstream',
    icon: 'HeartPulse',
  },
  types: [
    { name: 'STEMI', text: '**Sopraslivellamento ST** persistente: occlusione coronarica completa, **riperfusione immediata**.' },
    { name: 'NSTEMI', text: 'Troponina elevata **senza** sopraslivellamento ST persistente.' },
    { name: 'Tipo 1', text: 'Rottura/erosione di **placca** con trombosi coronarica.' },
    { name: 'Tipo 2', text: '**Squilibrio** O₂: anemia, tachiaritmia, ipotensione, ipossia.' },
  ],
  sections: [
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        'Dolore **retrosternale** > 20 min',
        'Irradiato a braccio sx, mandibola',
        '**Sudorazione** fredda, nausea',
        '**Atipico/silente**: anziani, donne, diabetici',
        'Esordio con **arresto cardiaco**',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**ECG 12 derivazioni entro 10 min**',
        'STEMI: ST sopraslivellato in **≥ 2 derivazioni contigue**',
        '**Troponina hs**: algoritmo 0/1 h o 0/2 h',
        'Eco: alterata cinetica di parete',
        'Coronarografia: conferma e trattamento',
      ],
    },
    {
      title: 'Riperfusione',
      icon: 'Timer',
      accent: 'red',
      items: [
        'STEMI: **PCI primaria** entro **120 min** dalla diagnosi',
        'Se non possibile: **fibrinolisi** entro **30 min**, poi PCI',
        'NSTEMI: coronarografia **< 24 h** se alto rischio',
        '**Tempo è muscolo**: subito se instabile',
      ],
    },
    {
      title: 'Farmaci',
      icon: 'Pill',
      accent: 'teal',
      items: [
        '**Aspirina** + **inibitore P2Y12**',
        '**Anticoagulante** parenterale in fase acuta',
        '**Ossigeno solo se SpO₂ < 90%**',
        'Nitrati, oppioidi ev per il dolore',
        'No FANS in fase acuta',
        'Poi: **statina**, beta-bloccante, ACE-i',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'TriangleAlert',
      accent: 'purple',
      items: [
        '**Aritmie**: FV/TV (prime ore), bradicardie, BAV',
        '**Scompenso** e **shock cardiogeno**',
        'Meccaniche: rottura di parete, setto o muscolo papillare',
        'Pericardite, trombo ventricolare, aneurisma',
        'Recidiva ischemica',
      ],
    },
    {
      title: 'Dopo l’evento',
      icon: 'RefreshCw',
      accent: 'green',
      items: [
        '**Riabilitazione cardiologica**',
        'Stop **fumo**, dieta, attività graduale',
        'Obiettivo **LDL < 55 mg/dL**',
        'Doppia antiaggregazione: **mai sospendere** da sé',
        'Supporto psicologico',
        'Ripresa graduale di lavoro, guida, sessualità',
      ],
    },
  ],
  nursing: [
    '**Monitoraggio** continuo di ritmo, PA, SpO₂ e dolore (NRS)',
    '**Accesso venoso**, prelievi: troponina, emocromo, elettroliti, coagulazione',
    'Riposo, ridurre l’ansia, **defibrillatore** pronto',
    'Dopo PCI: **sito d’accesso**, polsi distali, sanguinamento',
    'Diuresi, bilancio idrico, segni di **scompenso**',
  ],
  redFlags: [
    'Ipotensione, cute fredda, oliguria, confusione: **shock cardiogeno**',
    'TV/FV sul monitor: **allarme e defibrillazione** secondo ALS',
    'Nuovo soffio o dispnea improvvisa: possibile **complicanza meccanica**',
    'Sanguinamento o ematoma in espansione al sito di puntura',
  ],
}

export default map
