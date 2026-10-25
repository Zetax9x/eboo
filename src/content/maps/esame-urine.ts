import type { LabMap } from '../../book/types'

const map: LabMap = {
  kind: 'lab',
  id: 'esame-urine',
  chapter: 'laboratorio',
  title: 'Esame urine',
  subtitle: 'Strisciuria: alterazioni chiave e assistenza',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'SIAU — Linee guida per l’esame urine',
    'Harrison — Principi di medicina interna, sezione nefrologia',
  ],
  intro: 'Range indicativi per l’adulto; fa fede il **referto del laboratorio**.',
  rows: [
    {
      name: 'Proteine',
      symbol: 'PRO',
      range: '< 15',
      unit: 'mg/dL',
      accent: 'blue',
      low: {
        name: 'Assenti',
        signs: 'Normale',
        causes: '—',
      },
      high: {
        name: 'Proteinuria',
        signs: 'Schiuma, edemi',
        causes: 'Diabete, ipertensione, glomerulonefrite',
      },
      nursing: 'Quantificare con urine **24 h**; monitorare **peso** e PA.',
    },
    {
      name: 'Glucosio',
      symbol: 'GLU',
      range: 'Assente',
      unit: 'mg/dL',
      accent: 'green',
      low: {
        name: 'Assente',
        signs: 'Normale',
        causes: '—',
      },
      high: {
        name: 'Glicosuria',
        signs: 'Poliuria, sete',
        causes: 'Diabete, glicemia > 180 mg/dL',
      },
      nursing: 'Verificare **glicemia** capillare; monitorare diuresi.',
    },
    {
      name: 'Emoglobina',
      symbol: 'BLO',
      range: 'Assente',
      unit: '—',
      accent: 'red',
      low: {
        name: 'Assente',
        signs: 'Normale',
        causes: '—',
      },
      high: {
        name: 'Ematuria',
        signs: 'Urine rosse, dolore',
        causes: 'Calcoli, infezione, neoplasie',
      },
      nursing: 'Escludere mestruazioni; segnalare **ematuria macroscopica**.',
    },
    {
      name: 'Leucociti',
      symbol: 'LEU',
      range: 'Assenti',
      unit: '—',
      accent: 'orange',
      low: {
        name: 'Assenti',
        signs: 'Normale',
        causes: '—',
      },
      high: {
        name: 'Leucocituria',
        signs: 'Disuria, febbre',
        causes: 'Infezione urinaria, contaminazione',
      },
      nursing: 'Raccogliere **medio getto**; inviare al batterio entro **2 h**.',
    },
  ],
  tips: [
    'Raccogliere **medio getto** dopo igiene intima',
    'Inviare al lab entro **2 h** o refrigerare a 4 °C',
  ],
}

export default map
