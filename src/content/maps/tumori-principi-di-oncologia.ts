import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'tumori-principi-di-oncologia',
  chapter: 'patologie',
  title: 'Tumori: principi di oncologia',
  subtitle: 'Classificazione, stadiazione, diagnosi e assistenza infermieristica',
  icon: 'Microscope',
  status: 'bozza',
  sources: [
    'AIRTUM — Registro tumori in Italia (ultimo aggiornamento)',
    'NCCN Guidelines — Principles of Oncology (ultima edizione)',
    'IST — Istituto Superiore di Sanità: Linee guida per la prevenzione e lo screening dei tumori',
  ],
  definition:
    'Proliferazione cellulare **disordinata** e **autonoma**, con perdita dei controlli sulla crescita e sulla morte programmata (apoptosi).',
  illustration: {
    id: 'tumori-cellula-maligna',
    alt: 'Cellula normale e cellula tumorale in confronto',
    prompt: 'side by side comparison of a healthy cell and a malignant cancer cell, showing irregular shape and nucleus, microscopic view',
    icon: 'Microscope',
  },
  types: [
    { name: 'Benigni', text: 'Crescita **contenuta**, non invadono tessuti sani, non metastatizzano. Esempio: lipoma.' },
    { name: 'Maligni', text: 'Invasione dei tessuti circostanti, capacità di **metastatizzare**, recidiva locale.' },
    { name: 'In situ', text: 'Cellule anormali confinate nello strato di origine, **non invasive** (es. carcinoma mammario in situ).' },
    { name: 'Pre-maligni', text: 'Lesioni che possono evolvere in maligne se non trattate (es. displasia cervicale).' },
  ],
  sections: [
    {
      title: 'Fattori di rischio',
      icon: 'ShieldAlert',
      accent: 'purple',
      items: [
        '**Genetici**: mutazioni ereditarie (BRCA1/2, Lynch)',
        '**Ambientali**: fumo, radiazioni UV, amianto, virus (HPV, HCV)',
        '**Stile di vita**: obesità, sedentarietà, alcol, dieta scorretta',
        '**Età**: rischio aumenta con l’età, ma tumori rari in giovani',
        '**Esposizioni professionali**: solventi, piombo, cadmio',
      ],
    },
    {
      title: 'Stadiazione TNM',
      icon: 'ClipboardList',
      accent: 'blue',
      items: [
        '**T** (Tumore): dimensione e invasione locale (T0–T4)',
        '**N** (Nodi linfatici): coinvolgimento regionale (N0–N3)',
        '**M** (Metastasi): assenza (M0) o presenza (M1) di metastasi a distanza',
        '**Stadio I–IV**: combinazione di T, N, M per guidare la terapia',
        'La stadiazione è **fondamentale** per scegliere il trattamento',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'teal',
      items: [
        '**Anamnesi** e visita clinica mirata',
        '**Esami del sangue**: marcatori tumorali (CA-125, PSA, CEA) — non diagnostici da soli',
        '**Imaging**: ecografia, TAC, RM, PET-CT per stadiazione',
        '**Biopsia**: esame istologico e citologico (gold standard)',
        '**Genetica**: test per mutazioni specifiche (es. EGFR, ALK) in alcuni tumori',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Chirurgia**: rimozione del tumore e dei linfonodi regionali',
        '**Chimioterapia**: farmaci sistemici citotossici o mirati',
        '**Radioterapia**: fasci di radiazioni ionizzanti localizzati',
        '**Immunoterapia**: anticorpi monoclonali, inibitori di checkpoint',
        '**Terapia ormonale**: per tumori ormono-sensibili (mammella, prostata)',
      ],
    },
    {
      title: 'Effetti collaterali',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Chimioterapia**: nausea, vomito, alopecia, neutropenia, mucosite',
        '**Radioterapia**: dermatite, stanchezza, effetti locali (es. diarrea)',
        '**Chirurgia**: dolore, infezione, ematoma, linfedema',
        '**Immunoterapia**: reazioni autoimmuni (tiroidite, colite)',
        '**Generali**: astenia, calo ponderale, alterazioni ematologiche',
      ],
    },
    {
      title: 'Screening e prevenzione',
      icon: 'ShieldCheck',
      accent: 'olive',
      items: [
        '**Primaria**: evitare fumo, alcol, obesità; vaccino HPV',
        '**Secondaria**: screening (mammella, colon, cervice, prostata, polmone)',
        '**Mammografia**: donne 50–69 anni ogni 2 anni (estendibile a 45–74 in alcune regioni)',
        '**Colonoscopia**: da 50 anni ogni 10 anni, o prima se familiarità',
        '**Pap test**: donne 25–64 anni ogni 3–5 anni',
      ],
    },
  ],
  nursing: [
    'Valutare lo **stato nutrizionale** e prevenire la sarcopenia',
    'Monitorare i **parametri ematologici** (emocromo, piastrine) prima di ogni ciclo',
    'Gestire il **dolore** con scala NRS e somministrazione di analgesici',
    'Supporto **psico-emotivo**: ascolto, informazione, coinvolgimento della famiglia',
    'Educare al **riconoscimento** degli effetti collaterali e quando avvisare il medico',
  ],
  redFlags: [
    '**Febbre > 38 °C** con neutropenia: emergenza, avvisare subito il medico',
    '**Sanguinamento** persistente o ematomi improvvisi: verificare piastrine',
    '**Vomito incoercibile** o dolore addominale acuto: valutare occlusione o perforazione',
  ],
}

export default map
