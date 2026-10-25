import type { AlgorithmMap } from '../../book/types'

const map: AlgorithmMap = {
  kind: 'algorithm',
  id: 'emergenze-diabetiche',
  chapter: 'emergenze',
  title: 'Emergenze diabetiche',
  subtitle: 'Riconoscimento e gestione dell’ipoglicemia e delle chetoacidosi',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'ADA — American Diabetes Association, Standards of Care in Diabetes (ultima edizione)',
    'Ministero della Salute — Raccomandazioni per la gestione delle complicanze acute del diabete',
    'SIC — Società Italiana di Diabetologia, Linee guida per la gestione delle emergenze diabetiche',
  ],
  intro: 'Le due emergenze principali sono l’ipoglicemia (glicemia < 70 mg/dL) e le chetoacidosi (DKA/HHS). Il riconoscimento rapido e la terapia mirata salvano vite.',
  steps: [
    { kind: 'start', title: 'Valutazione iniziale', text: 'Stato di coscienza, respiro, segni di disidratazione, glicemia capillare immediata' },
    {
      kind: 'decision',
      title: 'Glicemia < 70 mg/dL?',
      branches: [
        { label: 'Sì', text: '**Ipoglicemia**: paziente cosciente → 15–20 g glucosio per os; incosciente → glucosio 40% EV' },
        { label: 'No', text: 'Procedi alla valutazione di chetoacidosi o iperglicemia iperosmolare' },
      ],
    },
    {
      kind: 'decision',
      title: 'Chetoni urinari/ematici elevati?',
      branches: [
        { label: 'Sì', text: '**DKA/HHS**: inizia terapia con fluidi e insulina secondo protocollo' },
        { label: 'No', text: 'Rivaluta: iperglicemia senza chetosi, altre cause di alterazione dello stato di coscienza' },
      ],
    },
    { kind: 'action', title: 'DKA: terapia iniziale', text: 'Soluzione fisiologica 0,9% (1–2 L in 1ª ora), insulina regolare EV a infusione continua (0,1 U/kg/h)' },
    { kind: 'action', title: 'HHS: terapia iniziale', text: 'Soluzione fisiologica 0,9% (1 L in 1ª ora, poi 0,45%), insulina a basso dosaggio (0,05–0,1 U/kg/h), monitoraggio attento della natriemia' },
    { kind: 'alert', title: 'Monitoraggio critico', text: 'Glicemia ogni 1 h, elettroliti (K⁺, Na⁺, Cl⁻) ogni 2–4 h, gas ematici, diuresi, stato neurologico' },
    { kind: 'end', title: 'Risoluzione', text: 'Glicemia < 200 mg/dL, chetoni negativi, pH > 7,3, paziente in grado di alimentarsi' },
  ],
  side: [
    {
      title: 'Ipoglicemia: gestione',
      icon: 'Droplet',
      accent: 'red',
      items: [
        'Cosciente: **15–20 g glucosio** (succo, caramelle, gel) per os',
        'Rivalutare glicemia dopo **15 minuti**',
        'Incosciente: **glucosio 40% EV** (25–50 mL) o glucagone 1 mg IM/SC',
        'Evitare somministrazione per os in paziente con **alterata coscienza**',
        'Causa comune: eccesso di insulina, mancato pasto, esercizio fisico intenso',
        'Prevenzione: educazione al riconoscimento dei sintomi (tremori, sudorazione, tachicardia)',
      ],
    },
    {
      title: 'DKA vs HHS: differenze',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**DKA**: glicemia 250–600 mg/dL, pH < 7,3, chetoni elevati, più comune in DM1',
        '**HHS**: glicemia > 600 mg/dL, pH > 7,3, osmolarità > 320 mOsm/kg, più comune in DM2',
        'HHS: disidratazione più marcata, alterazione dello stato di coscienza più frequente',
        'DKA: respiro di Kussmaul (profondo e rapido), alito acetonico',
        'HHS: osmolarità plasmatica elevata, rischio di ictus ischemico',
        'Entrambe: causa scatenante spesso infezione, infarto, stress, interruzione terapia',
      ],
    },
    {
      title: 'Errori da evitare',
      icon: 'ShieldAlert',
      accent: 'orange',
      items: [
        'Non somministrare insulina **prima** di aver corretto la disidratazione',
        'Non correggere la glicemia troppo rapidamente (rischio edema cerebrale)',
        'Monitorare il **potassio**: l’insulina sposta K⁺ intracellularmente, rischio ipokaliemia',
        'Non sospendere l’insulina finché il paziente non mangia e la glicemia è stabile',
        'Evitare soluzioni ipotoniche (glucosio 5%) finché la glicemia > 300 mg/dL',
        'Non trascurare la ricerca della **causa scatenante** (infezione, infarto, ecc.)',
      ],
    },
  ],
  keyPoints: [
    'Ipoglicemia: **< 70 mg/dL**, agire entro minuti',
    'DKA: pH < 7,3, chetoni elevati, glicemia 250–600 mg/dL',
    'HHS: glicemia > 600 mg/dL, osmolarità > 320 mOsm/kg, pH > 7,3',
    'Monitorare **K⁺** prima e durante la terapia con insulina',
  ],
}

export default map
