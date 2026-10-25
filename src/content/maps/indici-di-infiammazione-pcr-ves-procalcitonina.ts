import type { LabMap } from '../../book/types'

const map: LabMap = {
  kind: 'lab',
  id: 'indici-di-infiammazione-pcr-ves-procalcitonina',
  chapter: 'laboratorio',
  title: 'Indici di infiammazione',
  subtitle: 'PCR, VES e procalcitonina: valori, interpretazione e ruolo infermieristico',
  icon: 'FlaskConical',
  status: 'bozza',
  sources: [
    'Bassetti M, et al. — Procalcitonina e gestione delle infezioni batteriche: Linee guida Italiane',
    'Ministero della Salute — Raccomandazioni per il prelievo venoso e la gestione del campione',
    'Harrison — Principi di medicina interna, sezione Infiammazione e Immunologia',
  ],
  intro: 'Questi tre esami aiutano a distinguere infezioni batteriche da processi virali o autoimmuni. I valori variano tra laboratori: fa sempre fede il **referto del proprio laboratorio**.',
  rows: [
    {
      name: 'Proteina C-reattiva',
      symbol: 'PCR',
      range: '0–5',
      unit: 'mg/L',
      accent: 'blue',
      low: {
        name: 'Valore normale',
        signs: 'Assenza di infiammazione acuta significativa',
        causes: 'Stato fisiologico, infezioni virali lievi',
      },
      high: {
        name: 'Elevazione',
        signs: 'Febbre, dolore, segni di infezione o trauma',
        causes: 'Infezioni batteriche, traumi, interventi chirurgici, malattie autoimmuni',
      },
      nursing: 'La PCR sale in **6-8 ore** e torna normale in **24-48 h** dopo la risoluzione. Utile per monitorare la risposta alla terapia antibiotica.',
    },
    {
      name: 'Velocità di eritrosedimentazione',
      symbol: 'VES',
      range: '0–20 (U) / 0–30 (M)',
      unit: 'mm/h',
      accent: 'purple',
      low: {
        name: 'Valore normale',
        signs: 'Nessuna infiammazione cronica rilevante',
        causes: 'Stato fisiologico',
      },
      high: {
        name: 'Elevazione',
        signs: 'Febbre persistente, perdita di peso, dolore articolare',
        causes: 'Infezioni croniche, artrite reumatoide, lupus, neoplasie',
      },
      nursing: 'La VES sale lentamente (**giorni**) e scende lentamente. È influenzata da anemia, gravidanza e età. Non specifica per il tipo di infezione.',
    },
    {
      name: 'Procalcitonina',
      symbol: 'PCT',
      range: '< 0,05',
      unit: 'ng/mL',
      accent: 'teal',
      low: {
        name: 'Valore normale',
        signs: 'Bassa probabilità di infezione batterica sistemica',
        causes: 'Stato fisiologico, infezioni virali',
      },
      high: {
        name: 'Elevazione',
        signs: 'Sintomi di sepsi, febbre alta, instabilità emodinamica',
        causes: 'Infezioni batteriche sistemiche, sepsi, shock settico',
      },
      nursing: 'La PCT è il marcatore più specifico per **infezioni batteriche sistemiche**. Soglie: **< 0,25 ng/mL** (bassa probabilità), **0,25–0,5** (possibile), **> 0,5** (alta probabilità). Guida la decisione di iniziare/interrompere antibiotici.',
    },
  ],
  tips: [
    'PCR e VES sono **non specifiche**: possono essere alte in molte condizioni. La PCT è più specifica per infezioni batteriche.',
    'Comunicare **subito** valori di PCT > 2 ng/mL o PCR > 100 mg/L al medico: possibile sepsi o infezione grave.',
  ],
}

export default map
