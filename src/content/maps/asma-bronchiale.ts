import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'asma-bronchiale',
  chapter: 'patologie',
  title: 'Asma bronchiale',
  subtitle: 'Malattia cronica delle vie aeree: fisiopatologia, stadi GINA, terapia e assistenza',
  icon: 'Wind',
  status: 'bozza',
  sources: [
    'GINA — Global Strategy for Asthma Management and Prevention (2024)',
    'Linee guida SIP per la gestione dell\'asma (2022)',
    'Codice deontologico FNOPI',
  ],
  definition:
    'Malattia cronica infiammatoria delle vie aeree caratterizzata da **iperreattività bronchiale**, **ostruzione reversibile** e sintomi ricorrenti.',
  illustration: {
    id: 'asma-bronchi-infiammati',
    alt: 'Confronto tra bronchi sani e bronchi asmatici infiammati',
    prompt: 'cross-section of healthy bronchus and inflamed asthmatic bronchus with mucus plugs and smooth muscle contraction',
    icon: 'Wind',
  },
  types: [
    { name: 'Asma allergico', text: 'Scatenato da allergeni (acari, pollini). Spesso insorge in età pediatrica.' },
    { name: 'Asma non allergico', text: 'Trigger: infezioni, aria fredda, esercizio fisico, stress. Più comune in adulti.' },
    { name: 'Asma occupazionale', text: 'Causato da agenti chimici o organici sul luogo di lavoro (es. isocianati).' },
    { name: 'Asma notturno', text: 'Sintomi prevalenti nelle ore notturne o al risveglio. Segno di controllo subottimale.' },
  ],
  sections: [
    {
      title: 'Fisiopatologia',
      icon: 'Microscope',
      accent: 'purple',
      items: [
        '**Infiammazione cronica**: infiltrato di eosinofili, mastociti, linfociti T',
        '**Edema della mucosa** e ipersecrezione di muco viscoso',
        '**Broncospasmo**: contrazione della muscolatura liscia bronchiale',
        '**Rimodellamento**: ispessimento della membrana basale (cronicità)',
        'Riduzione del flusso aereo espiratorio (rapporto FEV1/FVC < 0,70)',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Dispnea** e sensazione di costrizione toracica',
        '**Sibili** espiratori (wheezing) e rantoli',
        '**Tosse** secca o con scarse secrezioni, spesso notturna',
        'Sintomi peggiorati da allergeni, freddo, esercizio fisico, stress',
        'Episodi acuti con tachipnea, uso dei muscoli accessori, cianosi',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**Spirometria**: ostruzione reversibile (miglioramento FEV1 ≥ 12% e ≥ 200 mL dopo broncodilatatore)',
        'Test di provocazione bronchiale (metacolina) se spirometria normale',
        'Dosaggio IgE specifiche (prick test) per asma allergico',
        'Esclusione di altre cause (BPCO, insufficienza cardiaca, corpo estraneo)',
        'Valutazione del controllo: GINA Control Test o ACT',
      ],
    },
    {
      title: 'Stadi GINA',
      icon: 'Layers',
      accent: 'navy',
      items: [
        '**Step 1**: Sintomi < 2 volte/mese, nessun risveglio notturno. Solo SABA on-demand',
        '**Step 2**: Sintomi > 2 volte/mese. ICS a basso dosaggio + SABA',
        '**Step 3**: Sintomi frequenti o notturni. ICS a medio dosaggio + LABA',
        '**Step 4**: Asma grave. ICS ad alto dosaggio + LABA ± LAMA',
        '**Step 5**: Asma grave refrattaria. Biologici (anti-IgE, anti-IL5, anti-IL4/13)',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**SABA** (salbutamolo): sollievo rapido, non da solo se sintomi frequenti',
        '**ICS** (budesonide, fluticasone): terapia di base, ridurre infiammazione',
        '**LABA** (salmeterolo, formoterolo): solo in associazione con ICS',
        '**LAMA** (tiotropio): aggiunta negli stadi avanzati',
        '**Biologici**: omalizumab, mepolizumab, dupilumab per asma grave',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Crisi asmatica grave**: ostruzione severa, rischio di insufficienza respiratoria',
        '**Atelettasia** da tappi di muco',
        '**Pneumotorace spontaneo** (raro, ma possibile)',
        '**Polmonite** secondaria a stasi di secrezioni',
        'Sindrome da astma grave refrattaria (status asthmaticus)',
      ],
    },
  ],
  nursing: [
    'Verificare la **tecnica di inalazione** corretta (spacer, espirazione completa)',
    'Monitorare la **frequenza respiratoria**, saturazione O₂ e uso dei muscoli accessori',
    'Educare al riconoscimento dei **segnali d’allarme** e all’uso corretto del piano d’azione',
    'Controllare l’**aderenza terapeutica** e gli effetti collaterali (candidosi orale, disfonia)',
    'Valutare l’impatto psicologico e la qualità della vita del paziente',
  ],
  redFlags: [
    '**Crisi grave**: dispnea a riposo, incapacità di completare le frasi, SpO₂ < 90%',
    '**Silenzio toracico**: assenza di sibili per grave ostruzione (segno di pericolo imminente)',
    '**Cianosi** e alterazione dello stato di coscienza: **avvisare subito il medico**',
  ],
}

export default map
