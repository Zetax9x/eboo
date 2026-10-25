import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'antipsicotici-e-antidepressivi',
  chapter: 'farmacologia',
  title: 'Antipsicotici e antidepressivi',
  subtitle: 'Classi, meccanismi, effetti collaterali e monitoraggio',
  icon: 'Pill',
  status: 'bozza',
  sources: [
    'Goodman & Gilman — Le basi farmacologiche della terapia, Zanichelli',
    'NICE NG222 — Depression in adults: treatment and management (2022)',
    'NICE CG178 — Psychosis and schizophrenia in adults (2014)',
  ],
  intro: 'Distinzione tra **tipici** e **atipici** per prevedere effetti avversi e guidare il monitoraggio.',
  tableTitle: 'Confronto tra classi',
  tableIcon: 'Pill',
  columns: ['Classe', 'Esempi', 'Meccanismo', 'Effetti collaterali', 'Monitoraggio'],
  widths: [1.2, 1.2, 1.2, 1.2, 1.2],
  rows: [
    [
      'Antipsicotici Tipici',
      'Haloperidolo, Clorpromazina',
      'Blocco **D2** dopaminergici',
      'EPS, acatisia, ipotensione ortostatica',
      'Rigidità, tremori, PA ortostatica',
    ],
    [
      'Antipsicotici Atipici',
      'Risperidone, Olanzapina',
      'Blocco **D2** e **5-HT2A**',
      'Sindrome metabolica, sedazione',
      'Peso, glicemia, profilo lipidico',
    ],
    [
      'SSRI',
      'Fluoxetina, Sertralina',
      'Inibizione ricaptazione **5-HT**',
      'Nausea, insonnia, rischio emorragico',
      'Stato emotivo, appetito, sonno',
    ],
    [
      'SNRI',
      'Venlafaxina, Duloxetina',
      'Inibizione **5-HT** e **NA**',
      'Ipertensione, secchezza fauci',
      'PA, idratazione, transito intestinale',
    ],
    [
      'Triciclici (TCA)',
      'Amitriptilina, Imipramina',
      'Inibizione **5-HT/NA**, effetto anticolinergico',
      'Tachicardia, ritenzione urinaria, **sovradosaggio letale**',
      'ECG (QT), FC, rischio suicidario',
    ],
    [
      'MAO-I',
      'Fenelzina, Tranilcipromina',
      'Inibizione **MAO**',
      'Crisi ipertensiva (tiramina)',
      'Dieta povera di tiramina, interazioni',
    ],
  ],
  notes: [
    {
      title: 'Sindrome Maligna da Neurolettici',
      icon: 'Siren',
      accent: 'red',
      items: [
        'Ipertermia > 40 °C, rigidità, alterazione coscienza',
        'Causa: blocco dopaminergico acuto',
        'Trattamento: sospensione, **Dantrolene**, raffreddamento',
        'Monitorare CK, emogasanalisi, funzione renale',
      ],
    },
    {
      title: 'Sindrome Anticolinergica',
      icon: 'Droplet',
      accent: 'orange',
      items: [
        'Tipica di TCA e Quetiapina',
        'Secchezza fauci, ritenzione urinaria, costipazione',
        'Rischio maggiore in anziani e glaucoma',
        'Incoraggiare idratazione, valutare cateterismo',
      ],
    },
    {
      title: 'Sindrome da sospensione',
      icon: 'RefreshCw',
      accent: 'blue',
      items: [
        'Nausea, vertigini, cefalea, irrequietezza',
        'Causa: sospensione brusca SSRI/SNRI',
        'Prevenzione: **tapering** graduale (2-4 sett.)',
        'Mai interrompere improvvisamente',
      ],
    },
  ],
  keyPoints: [
    'Atipici: minor rischio EPS, maggior rischio metabolico',
    'TCA: letali in sovradosaggio, limitare quantità',
    'MAO-I: dieta specifica, attenzione interazioni',
    'Monitoraggio metabolico obbligatorio per atipici',
  ],
}

export default map
