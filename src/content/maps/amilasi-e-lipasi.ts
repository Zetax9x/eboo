import type { LabMap } from '../../book/types'

const map: LabMap = {
  kind: 'lab',
  id: 'amilasi-e-lipasi',
  chapter: 'laboratorio',
  title: 'Amilasi e lipasi',
  subtitle: 'Enzimi pancreatici: valori, interpretazione e ruolo infermieristico',
  icon: 'FlaskConical',
  status: 'bozza',
  sources: [
    'Harrison — Principi di medicina interna, sezione pancreatite e malattie pancreatiche',
    'ACG Clinical Guidelines: Diagnosis and Management of Acute Pancreatitis (2018)',
    'Ministero della Salute — Linee guida per la gestione della pancreatite acuta',
  ],
  intro: 'Range indicativi per l’adulto: fa sempre fede il **referto del proprio laboratorio**. La lipasi è più specifica per il pancreas rispetto all’amilasi.',
  rows: [
    {
      name: 'Amilasi',
      symbol: 'AMS',
      range: '30–110',
      unit: 'U/L',
      accent: 'blue',
      low: {
        name: 'Ipamilasemia',
        signs: 'rara; insufficienza pancreatica cronica',
        causes: 'pancreatite cronica, fibrosi cistica',
      },
      high: {
        name: 'Iperamilasemia',
        signs: 'dolore epigastrico, nausea, vomito',
        causes: 'pancreatite acuta, calcolosi biliare, perforazione, farmaci',
      },
      nursing: 'Monitorare **dolore** e segni di shock; verificare **diuresi**; comunicare valori > 3 volte il limite superiore.',
    },
    {
      name: 'Lipasi',
      symbol: 'LIP',
      range: '0–160',
      unit: 'U/L',
      accent: 'purple',
      low: {
        name: 'Ipolipasiemia',
        signs: 'rara; insufficienza pancreatica esocrina',
        causes: 'pancreatite cronica, fibrosi cistica',
      },
      high: {
        name: 'Iperlipasiemia',
        signs: 'dolore intenso, distensione, febbre',
        causes: 'pancreatite acuta, occlusione intestinale, insufficienza renale',
      },
      nursing: 'Resta elevata **più a lungo** dell’amilasi; monitorare **parametri vitali** e segni di complicanze.',
    },
    {
      name: 'Amilasi pancreatica',
      symbol: 'AMS-P',
      range: '< 10',
      unit: 'U/L',
      accent: 'teal',
      low: {
        name: 'Valori bassi',
        signs: 'non clinicamente rilevanti',
        causes: 'non significativo',
      },
      high: {
        name: 'Elevazione pancreatica',
        signs: 'specifico per pancreas',
        causes: 'pancreatite acuta, pancreatite cronica acutizzata',
      },
      nursing: 'Richiesta quando l’amilasi totale è alta ma la causa è incerta; **differenzia** origine pancreatica da salivare.',
    },
    {
      name: 'Lipasi pancreatica',
      symbol: 'LIP-P',
      range: '< 5',
      unit: 'U/L',
      accent: 'green',
      low: {
        name: 'Valori bassi',
        signs: 'non clinicamente rilevanti',
        causes: 'non significativo',
      },
      high: {
        name: 'Elevazione pancreatica',
        signs: 'alta specificità per pancreas',
        causes: 'pancreatite acuta, complicanze pancreatiche',
      },
      nursing: 'Più specifica della lipasi totale; utile in casi dubbi o con altre cause di iperlipasemia.',
    },
  ],
  tips: [
    'Elevazione > 3 volte il limite superiore + dolore addominale = **pancreatite acuta** fino a prova contraria',
    'La lipasi è **più sensibile e specifica** dell’amilasi; preferirla quando possibile',
    'Comunicare **subito** al medico valori > 3 volte il limite superiore con sintomatologia compatibile',
  ],
}

export default map
