import type { LabMap } from '../../book/types'

const map: LabMap = {
  kind: 'lab',
  id: 'profilo-lipidico',
  chapter: 'laboratorio',
  title: 'Profilo lipidico',
  subtitle: 'Colesterolo, trigliceridi e frazioni: valori, rischi e ruolo infermieristico',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'ESC/EAS Guidelines for the management of dyslipidemia (2019)',
    'AIFA – Linee guida per la prescrizione di farmaci ipolipemizzanti (2020)',
    'Ministero della Salute — Raccomandazioni per la prevenzione delle malattie cardiovascolari',
  ],
  intro: 'Il profilo lipidico valuta il rischio cardiovascolare. I valori di riferimento variano in base al rischio cardiovascolare complessivo del paziente (basso, moderato, alto, molto alto).',
  rows: [
    {
      name: 'Colesterolo Totale',
      symbol: 'CT',
      range: '< 200 (basso rischio) – < 190 (alto rischio)',
      unit: 'mg/dL',
      accent: 'blue',
      low: {
        name: 'Ipocolesterolemia',
        signs: 'raro, spesso asintomatico; può indicare malassorbimento',
        causes: 'malnutrizione, cirrosi epatica, ipertiroidismo, malassorbimento',
      },
      high: {
        name: 'Ipercolesterolemia',
        signs: 'asintomatica; xantelasmi, xantomi tubercolari',
        causes: 'ipercolesterolemia familiare, dieta ricca di grassi saturi, ipotiroidismo, sindrome nefrosica',
      },
      nursing: 'Educare alla dieta mediterranea; verificare l’aderenza alla terapia ipolipemizzante; monitorare gli effetti collaterali (dolore muscolare, enzimi epatici).',
    },
    {
      name: 'LDL-Colesterolo',
      symbol: 'LDL',
      range: '< 100 (basso rischio) – < 70 (molto alto rischio)',
      unit: 'mg/dL',
      accent: 'red',
      low: {
        name: 'LDL molto basso',
        signs: 'generalmente ben tollerato; raramente associato a malassorbimento',
        causes: 'terapia con statine ad alta intensità, malassorbimento, ipertiroidismo',
      },
      high: {
        name: 'Iper-LDL',
        signs: 'asintomatica; principale fattore di rischio per aterosclerosi',
        causes: 'ipercolesterolemia familiare omozigote/eterozigote, dieta, ipotiroidismo, colestasi',
      },
      nursing: 'Obiettivo primario della terapia. Verificare il valore target in base al rischio CV. Monitorare CK e transaminasi se in terapia con statine.',
    },
    {
      name: 'HDL-Colesterolo',
      symbol: 'HDL',
      range: '> 40 (uomini) – > 50 (donne)',
      unit: 'mg/dL',
      accent: 'green',
      low: {
        name: 'HDL basso',
        signs: 'aumenta il rischio cardiovascolare',
        causes: 'diabete, obesità, fumo, sedentarietà, sindrome metabolica',
      },
      high: {
        name: 'Iper-HDL',
        signs: 'considerato protettivo, ma valori > 100 mg/dL possono essere paradosso',
        causes: 'genetica, esercizio fisico regolare',
      },
      nursing: 'Promuovere l’attività fisica aerobica; smettere di fumare; controllare glicemia e pressione arteriosa.',
    },
    {
      name: 'Trigliceridi',
      symbol: 'TG',
      range: '< 150',
      unit: 'mg/dL',
      accent: 'orange',
      low: {
        name: 'Ipotrigliceridemia',
        signs: 'rara, spesso asintomatica',
        causes: 'malnutrizione, ipertiroidismo, malassorbimento',
      },
      high: {
        name: 'Ipertrigliceridemia',
        signs: 'pancreatite acuta se > 500 mg/dL; eritema necrotizzante',
        causes: 'diabete non controllato, alcolismo, sindrome metabolica, ipotiroidismo, farmaci (estrogeni, diuretici)',
      },
      nursing: 'Se TG > 500 mg/dL: rischio pancreatite. Educazione su alcol e zuccheri semplici. Verificare il digiuno pre-prelievo (12-14 h).',
    },
  ],
  tips: [
    'Il prelievo richiede **12-14 ore di digiuno** (acqua e farmaci consentiti se prescritti).',
    'Calcolo LDL (Friedewald): LDL = CT - HDL - (TG/5). Non valido se TG > 400 mg/dL.',
  ],
}

export default map
