import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'malattie-infiammatorie-intestinali',
  chapter: 'patologie',
  title: 'Malattie infiammatorie intestinali',
  subtitle: 'Crohn e colite ulcerosa: distinzione, diagnosi, terapia e assistenza infermieristica',
  icon: 'Waves',
  status: 'bozza',
  sources: [
    'ECCO — European Crohn’s and Colitis Organisation (Linee guida 2024)',
    'AIGO — Associazione Italiana Gastroenterologi Ospedalieri (Raccomandazioni sulle MICI)',
    'NICE — Inflammatory bowel disease (NG196, aggiornato)',
  ],
  definition:
    'Gruppo di patologie croniche dell’apparato gastrointestinale caratterizzate da **infiammazione immuno-mediata**, ricadute e remissioni. Le due forme principali sono la **Malattia di Crohn** e la **Colite Ulcerosa**.',
  illustration: {
    id: 'mici-intestino-comparato',
    alt: 'Intestino tenue e crasso con aree di infiammazione tipiche di Crohn e Colite Ulcerosa',
    prompt: 'side by side comparison of healthy and inflamed small intestine and colon, showing skip lesions in small bowel and continuous mucosal inflammation in colon',
    icon: 'Waves',
  },
  types: [
    { name: 'Malattia di Crohn', text: 'Può colpire **qualsiasi tratto** del tratto GI (bocca-anus). Infiammazione **transmurale** (tutta la parete). Lesioni a **salti** (skip lesions).' },
    { name: 'Colite Ulcerosa', text: 'Confinata al **colon e retto**. Infiammazione **mucosa e sottomucosa**. Lesioni **continue** che partono dal retto.' },
    { name: 'Indeterminata', text: 'Circa **10-20%** dei casi. Non è possibile distinguere tra Crohn e CU alla prima diagnosi; si rivede nel tempo.' },
  ],
  sections: [
    {
      title: 'Fattori di rischio e cause',
      icon: 'ShieldAlert',
      accent: 'purple',
      items: [
        'Predisposizione **genetica** (es. gene NOD2/CARD15 nel Crohn)',
        'Alterazione del **microbiota** intestinale',
        'Risposta immunitaria **disregolata** verso antigeni luminali',
        'Fumo: **aumenta** il rischio di Crohn, **protegge** (paradossalmente) dalla CU',
        'Familiarità: rischio 2-5 volte superiore se un familiare è affetto',
        'Uso cronico di **FANS** può peggiorare le riacutizzazioni',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Thermometer',
      accent: 'orange',
      items: [
        '**Crohn**: dolore addominale (spesso ileo-ciecale), diarrea, calo ponderale, fistole, ascessi',
        '**Colite Ulcerosa**: diarrea **con sangue e muco**, tenesmo, urgenza fecale',
        'Febbre, astenia, anemia sideropenica',
        'Manifestazioni extra-intestinali: **artrite**, uveite, eritema nodoso, colangite sclerosante primitiva',
        'Ritardo della crescita nei **bambini** e adolescenti',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'Microscope',
      accent: 'blue',
      items: [
        '**Endoscopia** con biopsie: gold standard per localizzazione e istologia',
        'Crohn: **aspetti a “piastrelle”**, ulcere longitudinali, stenosi; CU: mucosa fragile, ulcere superficiali continue',
        'Esami ematici: **VES**, PCR elevate; emocromo (anemia); albumina bassa',
        'Coprocultura, calprotectina fecale (marcatore di infiammazione intestinale)',
        'Imaging: **TC enterografia** o RM enterografia (preferita nei giovani per evitare radiazioni)',
        'Esclusione di altre cause: infezioni (C. difficile, parassiti), ischemia, tumori',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**5-ASA** (mesalazina): prima linea nella CU lieve-moderata',
        '**Corticosteroidi** (prednisone, budesonide): per riacutizzazioni acute, **non** per mantenimento',
        '**Immunosoppressori** (azatioprina, metotrexato): per mantenimento della remissione',
        '**Biologici** (anti-TNF: infliximab, adalimumab; anti-integrine: vedolizumab; anti-IL-12/23: ustekinumab): per forme moderate-gravi',
        '**JAK-inibitori** (tofacitinib, upadacitinib): opzione orale per CU',
        'Chirurgia: **non curativa** nel Crohn (recidiva post-operatoria), **curativa** nella CU (colectomia)',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Crohn**: stenosi intestinale, fistole (entero-enteriche, entero-cutanee), ascessi, perforazione',
        '**Colite Ulcerosa**: colite tossica megacolon, sanguinamento massivo, perforazione',
        'Rischio aumentato di **adenocarcinoma** del colon (soprattutto CU estesa > 8-10 anni)',
        'Anemia cronica, malassorbimento (Crohn ileale: carenza B12, acidi biliari)',
        'Tromboembolismo venoso (VTE) durante le riacutizzazioni',
      ],
    },
    {
      title: 'Monitoraggio e follow-up',
      icon: 'ClipboardCheck',
      accent: 'teal',
      items: [
        'Valutazione dell’attività di malattia: **calprotectina fecale**, PCR, VES',
        'Endoscopia di controllo: ogni **1-2 anni** nella CU estesa per sorveglianza neoplastica',
        'Controllo ematologico e epatico se in terapia con **immunosoppressori**',
        'Screening per **osteoporosi** (corticosteroidi cronici)',
        'Valutazione nutrizionale: peso, albumina, ferro, B12, folati',
        'Supporto psicologico: impatto sulla qualità di vita e sull’ansia',
      ],
    },
  ],
  nursing: [
    'Valutare la **diarrea** (frequenza, consistenza, presenza di sangue) e il dolore addominale',
    'Monitorare i **parametri vitali** e i segni di disidratazione o shock',
    'Somministrare i farmaci secondo prescrizione, verificando **interazioni** e reazioni avverse (es. infusionali)',
    'Educare il paziente alla **dieta** (evitare FANS, alcol, cibi irritanti; integrare ferro, B12, calcio/vitamina D)',
    'Riconoscere i segni di **complicanze** (dolore acuto, febbre, sanguinamento) e avvisare il medico',
    'Supporto emotivo e invio a **dieta**, **psicologia** e gruppi di auto-aiuto',
  ],
  redFlags: [
    '**Dolore addominale acuto** con febbre e leucocitosi: sospetto ascesso o perforazione → **chiamare il medico subito**',
    '**Sanguinamento rettale massivo** o segni di shock (ipotensione, tachicardia): **attivare il protocollo emorragia**',
    '**Megacolon tossico**: distensione addominale, tachicardia, febbre alta, leucocitosi → **emergenza chirurgica**',
  ],
}

export default map
