import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'sclerosi-multipla',
  chapter: 'patologie',
  title: 'Sclerosi multipla',
  subtitle: 'Malattia demielinizzante del SNC: forme, sintomi, terapia e assistenza',
  icon: 'Brain',
  status: 'bozza',
  sources: [
    'Criteri diagnostici di McDonald (revisione 2017 e successivo aggiornamento)',
    'ECTRIMS/EAN — Guideline on the pharmacological treatment of people with multiple sclerosis',
    'AISM — Associazione Italiana Sclerosi Multipla, Barometro della SM',
  ],
  definition:
    'Malattia **autoimmune** cronica del sistema nervoso centrale: **infiammazione**, **demielinizzazione** e danno assonale. Esordio tipico tra **20 e 40 anni**, più frequente nelle **donne**.',
  illustration: {
    id: 'sm-mielina',
    alt: 'Neurone con guaina mielinica danneggiata a chiazze',
    prompt: 'neuron with an axon whose myelin sheath is damaged in patches, immune cells attacking the myelin, brain with white matter plaques',
    icon: 'Brain',
  },
  types: [
    { name: 'Recidivante-remittente', text: '**~85%** all’esordio: ricadute seguite da recupero.' },
    { name: 'Secondariamente progressiva', text: 'Evoluzione della RR con **disabilità crescente**.' },
    { name: 'Primariamente progressiva', text: '**~10–15%**: peggioramento graduale dall’esordio.' },
    { name: 'CIS', text: 'Sindrome clinicamente isolata: **primo episodio** suggestivo.' },
  ],
  sections: [
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Neurite ottica**: calo visivo, dolore oculare',
        '**Parestesie**, ipoestesie, deficit di forza',
        'Diplopia, **atassia**, vertigini',
        '**Fatica** (fatigue), molto frequente',
        'Disturbi **vescicali**, intestinali, sessuali',
        'Segno di **Lhermitte**, fenomeno di **Uhthoff** (caldo)',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'Microscope',
      accent: 'blue',
      items: [
        '**RM** encefalo e midollo con gadolinio',
        'Disseminazione **spaziale** e **temporale** (McDonald)',
        'Liquor: **bande oligoclonali** IgG',
        'Potenziali evocati (visivi)',
        'Disabilità: scala **EDSS** (0–10)',
        'Escludere altre cause (es. **NMOSD**, carenze)',
      ],
    },
    {
      title: 'Terapia della ricaduta',
      icon: 'Syringe',
      accent: 'red',
      items: [
        '**Metilprednisolone** ad alte dosi per 3–5 giorni',
        'EV o per os secondo prescrizione',
        'Plasmaferesi se non risposta',
        'Escludere **infezioni** (pseudo-ricaduta)',
        'Durante i boli: **glicemia**, PA, gastroprotezione se prescritta',
      ],
    },
    {
      title: 'Terapie modificanti (DMT)',
      icon: 'Pill',
      accent: 'green',
      items: [
        'Moderata efficacia: **interferone β**, glatiramer, teriflunomide, dimetilfumarato',
        'Alta efficacia: **natalizumab**, anti‑CD20 (ocrelizumab, ofatumumab), S1P‑modulatori, cladribina',
        'Ocrelizumab anche nella **PP**',
      ],
    },
    {
      title: 'Sintomatica e riabilitazione',
      icon: 'Footprints',
      accent: 'purple',
      items: [
        '**Spasticità**: baclofene, fisioterapia',
        'Vescica: cateterismo **intermittente**',
        'Fatigue: gestione delle energie, pause',
        'Riabilitazione motoria e cognitiva',
        'Supporto psicologico (depressione)',
      ],
    },
    {
      title: 'Sicurezza dei DMT',
      icon: 'ShieldAlert',
      accent: 'teal',
      items: [
        'Natalizumab: rischio di **PML** (test JCV)',
        'immunosoppressione: **infezioni**',
        'Controlli periodici: emocromo, funzione epatica',
        'Vaccinazioni prima della terapia',
        'Gravidanza da **pianificare**',
      ],
    },
  ],
  nursing: [
    'Educare all’**autoiniezione** e alla rotazione delle sedi',
    'Evitare il **caldo** (bagni, febbre): peggiora transitoriamente i sintomi',
    'Valutare **fatigue**, continenza, cute, rischio di cadute',
    'Infusioni: monitorare **reazioni** e parametri vitali',
    'Sostenere lavoro, vita sociale e progetti familiari',
  ],
  redFlags: [
    'Nuovi sintomi per **> 24 h** senza febbre: possibile **ricaduta**',
    'In terapia immunosoppressiva: **febbre**, infezioni',
    'Disturbi cognitivi o di comportamento nuovi (sospetta **PML**)',
  ],
}

export default map
