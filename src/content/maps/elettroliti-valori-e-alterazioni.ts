import type { LabMap } from '../../book/types'

const map: LabMap = {
  kind: 'lab',
  id: 'elettroliti-valori-e-alterazioni',
  chapter: 'laboratorio',
  title: 'Elettroliti',
  subtitle: 'Valori normali, alterazioni e cosa fa l’infermiere',
  icon: 'FlaskConical',
  status: 'bozza',
  sources: [
    'Harrison — Principi di medicina interna, sezione disordini idro-elettrolitici',
    'Ministero della Salute — Raccomandazione n. 1 sull’uso del cloruro di potassio concentrato',
  ],
  intro: 'I range sono indicativi per l’adulto: fa sempre fede il **referto del proprio laboratorio**.',
  rows: [
    {
      name: 'Sodio',
      symbol: 'Na⁺',
      range: '135–145',
      unit: 'mEq/L',
      accent: 'blue',
      low: {
        name: 'Iponatriemia',
        signs: 'cefalea, nausea, confusione, convulsioni nei casi gravi',
        causes: 'SIADH, diuretici tiazidici, vomito/diarrea, eccesso di liquidi ipotonici',
      },
      high: {
        name: 'Ipernatriemia',
        signs: 'sete intensa, agitazione, letargia, convulsioni',
        causes: 'disidratazione, diabete insipido, scarso accesso all’acqua (anziani)',
      },
      nursing: 'Iponatriemia: aumento **≤ 8–10 mEq/L in 24 h** (rischio di demielinizzazione osmotica); ipernatriemia: correzione **lenta** (edema cerebrale). Monitorare **bilancio idrico** e coscienza.',
    },
    {
      name: 'Potassio',
      symbol: 'K⁺',
      range: '3,5–5,0',
      unit: 'mEq/L',
      accent: 'purple',
      low: {
        name: 'Ipokaliemia',
        signs: 'debolezza muscolare, crampi, stipsi, aritmie, onde U all’ECG',
        causes: 'diuretici, vomito, diarrea, terapia insulinica',
      },
      high: {
        name: 'Iperkaliemia',
        signs: 'parestesie, debolezza, onde T alte e appuntite, aritmie gravi',
        causes: 'insufficienza renale, ACE-inibitori, risparmiatori di K⁺, **emolisi del campione**',
      },
      nursing: 'K⁺ ev **mai in bolo**: diluito e ben miscelato, in pompa; in vena periferica di norma **≤ 10 mEq/h**. Verificare la **diuresi**; KCl concentrato conservato **separato**.',
    },
    {
      name: 'Calcio',
      symbol: 'Ca²⁺',
      range: '8,5–10,5',
      unit: 'mg/dL (totale)',
      accent: 'teal',
      low: {
        name: 'Ipocalcemia',
        signs: 'parestesie periorali, tetania, segni di Chvostek e Trousseau, QT lungo',
        causes: 'ipoparatiroidismo (anche dopo tiroidectomia), deficit di vitamina D, pancreatite',
      },
      high: {
        name: 'Ipercalcemia',
        signs: 'debolezza, stipsi, poliuria, calcoli renali, confusione, QT corto',
        causes: 'iperparatiroidismo, neoplasie, eccesso di vitamina D',
      },
      nursing: 'Interpretare il calcio totale **insieme all’albumina**; dopo tiroidectomia sorvegliare segni di tetania.',
    },
    {
      name: 'Magnesio',
      symbol: 'Mg²⁺',
      range: '1,7–2,2',
      unit: 'mg/dL',
      accent: 'green',
      low: {
        name: 'Ipomagnesemia',
        signs: 'tremori, iperreflessia, aritmie (torsade di punta)',
        causes: 'alcolismo, malnutrizione, diuretici, diarrea cronica',
      },
      high: {
        name: 'Ipermagnesemia',
        signs: 'iporeflessia, ipotensione, bradicardia, depressione respiratoria',
        causes: 'insufficienza renale, eccesso di somministrazione (es. Mg ev in ostetricia)',
      },
      nursing: 'Durante Mg ev controllare **riflessi osteotendinei**, frequenza respiratoria e diuresi; tenere pronto il **calcio gluconato** (antidoto).',
    },
  ],
  tips: [
    'Valore inatteso? **Ripetere il prelievo**: l’emolisi falsa il potassio',
    'Comunicare **subito** i valori critici al medico',
  ],
}

export default map
