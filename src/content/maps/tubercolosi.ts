import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'tubercolosi',
  chapter: 'patologie',
  title: 'Tubercolosi',
  subtitle: 'Infezione cronica da Mycobacterium tuberculosis: diagnosi, terapia e prevenzione',
  icon: 'Wind',
  status: 'bozza',
  sources: [
    'OMS — Global Tuberculosis Report 2024',
    'ISS — Linee guida per la diagnosi e il trattamento della tubercolosi in Italia',
    'Ministero della Salute — Piano Nazionale Tubercolosi',
  ],
  definition:
    'Infezione cronica causata da **Mycobacterium tuberculosis**, che colpisce principalmente i **polmoni** ma può interessare qualsiasi organo (tubercolosi miliare, meningite, ossea).',
  illustration: {
    id: 'tubercolosi-polmoni-bacilli',
    alt: 'Polmoni con lesioni tubercolari e bacilli di Koch',
    prompt: 'human lungs with white tuberculous nodules and cavities, magnified view of acid-fast bacilli Mycobacterium tuberculosis',
    icon: 'Wind',
  },
  types: [
    { name: 'Latente (LTBI)', text: 'Infezione senza sintomi. **GPT positiva**, RX torace normale. Non trasmissibile.' },
    { name: 'Attiva polmonare', text: 'Sintomi respiratori, **GPT positiva**, RX alterata, **Bacilloscopia** positiva o negativa.' },
    { name: 'Extra-polmonare', text: 'Linfonodi, pleura, ossea, renale, meningite. Spesso **bacilloscopia negativa**.' },
    { name: 'Multiresistente (MDR-TB)', text: 'Resistenza ad almeno **isoniazide** e **rifampicina**. Richiede terapia estesa.' },
  ],
  sections: [
    {
      title: 'Fattori di rischio',
      icon: 'ShieldAlert',
      accent: 'purple',
      items: [
        'Contatto stretto con caso attivo',
        '**HIV** positiva o immunosoppressione',
        'Diabete mellito, IRC, neoplasie',
        'Alcolismo, malnutrizione, età < 5 o > 65 anni',
        'Soggiorno in aree ad alta endemicità',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Thermometer',
      accent: 'orange',
      items: [
        '**Tosse** produttiva o secca > 3 settimane',
        '**Emottisi** (sangue nelle secrezioni)',
        'Febbre vespertina, sudorazioni notturne',
        'Calo ponderale, astenia, dispnea',
        'Dolore toracico (pleurite)',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'Microscope',
      accent: 'blue',
      items: [
        '**GPT** (Tuberculin test) o **IGRA** (QuantiFERON/T-SPOT)',
        '**RX torace**: infiltrati, cavitazioni, noduli',
        '**Bacilloscopia** su espettorato (colorazione di Ziehl-Neelsen)',
        '**Coltura** su Lowenstein-Jensen (gold standard, 6-8 settimane)',
        '**GeneXpert MTB/RIF**: rapido, rileva anche resistenza alla rifampicina',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Fase intensiva** (2 mesi): Isoniazide (H) + Rifampicina (R) + Pirazinamide (Z) + Etambutolo (E)',
        '**Fase di continuazione** (4 mesi): Isoniazide (H) + Rifampicina (R)',
        'Durata totale standard: **6 mesi** (può essere estesa)',
        'Monitoraggio epatico (AST/ALT) e visivo (neuropatia ottica da etambutolo)',
        'Adesione al trattamento: rischio di **resistenza** se interrotto',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Fibrosi** polmonare e insufficienza respiratoria',
        '**Empiema** pleurico o ascesso polmonare',
        'Tubercolosi **miliare** (dispersione ematogena)',
        'Meningite tubercolare (prognosi grave)',
        'Sindrome da **IRIS** (in pazienti HIV in terapia antiretrovirale)',
      ],
    },
    {
      title: 'Prevenzione',
      icon: 'ShieldCheck',
      accent: 'teal',
      items: [
        '**Vaccinazione BCG**: neonati e bambini < 15 anni (non previene la malattia adulta)',
        'Screening GPT/IGRA nei contatti stretti',
        'Profilassi farmacologica (H o R) per LTBI ad alto rischio',
        'Isolamento respiratorio (maschera FFP2) per casi attivi',
        'Ventilazione adeguata degli ambienti sanitari',
      ],
    },
  ],
  nursing: [
    'Educare alla **corretta assunzione** dei farmaci (a stomaco vuoto per H, R, Z)',
    'Monitorare **effetti collaterali**: ittero, nausea, neuropatia periferica, cefalea',
    'Verificare l’**adesione terapeutica** e la regolarità dei controlli ematochimici',
    'Istruire sull’**igiene respiratoria**: tossire in fazzoletto, smaltire rifiuti in sacchetto chiuso',
    'Supporto psicologico: malattia cronica, stigma sociale, durata terapia',
  ],
  redFlags: [
    '**Emottisi massiva**: posizione laterale con lato malato a terra, avvisare subito il medico',
    'Segni di **epatite** (ittero, nausea, dolore epigastrico): sospendere terapia e avvisare',
    'Cefalea intensa, rigidità nucale, fotofobia: sospetto di **meningite tubercolare**',
  ],
}

export default map
