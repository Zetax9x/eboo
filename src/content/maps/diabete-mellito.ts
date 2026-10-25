import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'diabete-mellito',
  chapter: 'patologie',
  title: 'Diabete mellito',
  subtitle: 'Iperglicemia cronica: tipi, diagnosi, complicanze e assistenza',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'ADA — Standards of Care in Diabetes (aggiornamento annuale)',
    'SID-AMD — Linee guida per la terapia del diabete mellito di tipo 2',
  ],
  definition:
    'Malattia metabolica cronica caratterizzata da **iperglicemia** dovuta a un difetto di **secrezione** e/o di **azione dell’insulina**.',
  illustration: {
    id: 'dm-pancreas-insulina',
    alt: 'Pancreas, cellule beta e glucosio nel sangue',
    prompt: 'pancreas with a magnified islet of Langerhans, insulin molecules opening a cell to glucose, blood vessel with glucose particles',
    icon: 'Droplet',
  },
  types: [
    { name: 'Tipo 1', text: 'Autoimmune: distruzione delle cellule β. **Insulina indispensabile**.' },
    { name: 'Tipo 2', text: 'Insulino-resistenza + deficit relativo. Circa **90%** dei casi.' },
    { name: 'Gestazionale', text: 'Insorge in gravidanza; aumenta il rischio futuro di tipo 2.' },
    { name: 'Altre forme', text: 'Secondario a farmaci (es. cortisonici), pancreatite, forme monogeniche.' },
  ],
  sections: [
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Poliuria**, **polidipsia**, polifagia',
        'Calo di peso (tipico del tipo 1)',
        'Astenia, visione offuscata',
        'Infezioni ricorrenti, ferite che guariscono lentamente',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        'Glicemia a digiuno (≥ 8 h) **≥ 126 mg/dL**',
        '**HbA1c ≥ 6,5%** (48 mmol/mol)',
        'Glicemia **≥ 200 mg/dL** a 2 h dall’OGTT (75 g)',
        'Glicemia casuale **≥ 200 mg/dL** con sintomi',
        'Senza sintomi: **confermare** con un 2° test alterato',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Stile di vita**: dieta, attività fisica, calo ponderale',
        '**Metformina**: di norma prima scelta nel tipo 2',
        'Con malattia CV, scompenso o IRC: **SGLT2-i** o **GLP-1 RA**',
        '**Insulina**: basale (lenta) e prandiale (rapida)',
      ],
    },
    {
      title: 'Complicanze acute',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Ipoglicemia** (< 70 mg/dL): sudorazione, tremori, confusione',
        '**Chetoacidosi**: respiro di Kussmaul, alito acetonemico',
        '**Stato iperosmolare**: disidratazione grave (tipo 2)',
      ],
    },
    {
      title: 'Complicanze croniche',
      icon: 'Layers',
      accent: 'purple',
      items: [
        '**Microangiopatia**: retinopatia, nefropatia, neuropatia',
        '**Macroangiopatia**: infarto, ictus, arteriopatia periferica',
        '**Piede diabetico**: ulcere, infezioni, amputazioni',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        '**Glicemia capillare** o sensore (CGM)',
        '**HbA1c** ogni 3–6 mesi',
        'Fondo oculare, funzione renale, esame del piede',
      ],
    },
  ],
  nursing: [
    'Controllare la glicemia e **ruotare le sedi** di iniezione',
    'Prima dell’insulina verificare **tipo, dose e orario del pasto**',
    'Educare all’autocontrollo e al riconoscimento dell’ipoglicemia',
    'Ispezionare il **piede** e consigliare calzature adeguate',
  ],
  redFlags: [
    '**Regola del 15**: 15 g di zuccheri semplici, ricontrollo dopo 15 min; se ancora < 70 ripetere, poi carboidrati complessi',
    'Paziente non cosciente in ipoglicemia: **nulla per bocca**, glucagone o glucosio ev secondo protocollo',
    'Respiro di Kussmaul e alito fruttato: **avvisare subito il medico**',
  ],
}

export default map
