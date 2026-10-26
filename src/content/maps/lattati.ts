import type { LabMap } from '../../book/types'

const map: LabMap = {
  kind: 'lab',
  id: 'lattati',
  chapter: 'laboratorio',
  title: 'Lattati',
  subtitle: 'Valori, cause di alterazione e gestione infermieristica',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'Surviving Sepsis Campaign — International Guidelines (2021)',
    'Surviving Sepsis Campaign — International Guidelines for Management of Sepsis and Septic Shock (2021)',
    'Testi di riferimento: Fisiologia clinica e Biochimica clinica',
  ],
  intro: 'Il lattato è un indicatore di ipoperfusione tissutale e stress metabolico. I valori normali variano leggermente tra laboratori, ma le soglie critiche sono standardizzate.',
  rows: [
    {
      name: 'Lattato ematico',
      symbol: 'Lac⁻',
      range: '0,5–2,0',
      unit: 'mmol/L',
      accent: 'blue',
      low: {
        name: 'Valori bassi',
        signs: 'Raramente clinicamente significativi',
        causes: 'Fisiologico, epatite acuta (raro)',
      },
      high: {
        name: 'Lattacidosi',
        signs: 'Tachipnea, tachicardia, ipotensione, acidosi metabolica',
        causes: 'Shock settico, shock ipovolemico, insufficienza cardiaca, epatite, metformina, convulsioni',
      },
      nursing: 'Monitorare **PA**, **FC**, **FR** e **SpO₂**. Valutare il **bilancio idrico** e la **diuresi**. Comunicare subito valori > 4 mmol/L.',
    },
    {
      name: 'Lattato urinario',
      symbol: 'Lac⁻ (urine)',
      range: '< 15',
      unit: 'mg/dL',
      accent: 'purple',
      low: {
        name: 'Valori normali',
        signs: 'Assenza di sintomi',
        causes: 'Fisiologico',
      },
      high: {
        name: 'Lattacidosi',
        signs: 'Urine scure, disidratazione',
        causes: 'Esercizio fisico intenso, shock, epatite',
      },
      nursing: 'Raccogliere campione **a metà flusso** per evitare contaminazione. Valutare **colore** e **odore** delle urine.',
    },
    {
      name: 'Rapporto lattato/piruvato',
      symbol: 'L/P',
      range: '10–20',
      unit: 'rapporto',
      accent: 'teal',
      low: {
        name: 'Rapporto normale',
        signs: 'Equilibrio ossidativo',
        causes: 'Fisiologico',
      },
      high: {
        name: 'Squilibrio redox',
        signs: 'Fatica, dispnea',
        causes: 'Ipossia, mitocondriopatie',
      },
      nursing: 'Valutare **SpO₂** e **emogasanalisi**. Monitorare **sintomi respiratori**.',
    },
  ],
  tips: [
    'Valori > 4 mmol/L: **allarme rosso**, comunicare subito al medico',
    'Valori > 2 mmol/L: **monitoraggio stretto**, rivalutare in 1-2 ore',
  ],
}

export default map
