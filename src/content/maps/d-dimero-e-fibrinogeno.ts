import type { LabMap } from '../../book/types'

const map: LabMap = {
  kind: 'lab',
  id: 'd-dimero-e-fibrinogeno',
  chapter: 'laboratorio',
  title: 'D-dimero e fibrinogeno',
  subtitle: 'Marcatori della coagulazione: valori, interpretazione e ruolo infermieristico',
  icon: 'Droplets',
  status: 'bozza',
  sources: [
    'ISTH — International Society on Thrombosis and Haemostasis: D-dimer testing guidelines',
    'ACCP — American College of Chest Physicians: Antithrombotic Therapy guidelines',
    'Ministero della Salute — Linee guida sulla prevenzione e trattamento della TROMBOEMBOLIA VENOSA',
  ],
  intro: 'Il **D-dimero** è un prodotto di degradazione della fibrina; il **fibrinogeno** è un fattore della coagulazione. Entrambi riflettono l’attività del sistema emostatico.',
  rows: [
    {
      name: 'D-dimero',
      symbol: 'D-D',
      range: '< 500',
      unit: 'ng/mL (FEU)',
      accent: 'blue',
      low: {
        name: 'Valore normale',
        signs: 'Assenza di segni clinici specifici',
        causes: 'Stato fisiologico o assenza di attivazione della coagulazione',
      },
      high: {
        name: 'Elevazione',
        signs: 'Dispnea, dolore toracico, edema unilaterale degli arti inferiori',
        causes: 'Tromboembolia venosa (TEV), embolia polmonare (EP), coagulazione intravascolare disseminata (CID), gravidanza, post-chirurgia, neoplasie, infezioni gravi',
      },
      nursing: 'Il D-dimero ha **alta sensibilità** ma bassa specificità. Un valore normale esclude con alta probabilità la TEV/EP in pazienti a basso rischio clinico. Un valore elevato **non conferma** la diagnosi: serve imaging (angio-TC, ecodoppler).',
    },
    {
      name: 'Fibrinogeno',
      symbol: 'FIB',
      range: '200–400',
      unit: 'mg/dL',
      accent: 'purple',
      low: {
        name: 'Ipoprotrombinemia',
        signs: 'Sanguinamenti, ecchimosi, ematomi',
        causes: 'Coagulazione intravascolare disseminata (CID), epatopatie gravi, emodiluizione massiva, uso di anticoagulanti',
      },
      high: {
        name: 'Iperprotrombinemia',
        signs: 'Aumentato rischio trombotico',
        causes: 'Stato infiammatorio acuto/cronico, gravidanza, post-parto, neoplasie, post-chirurgia, fumo di sigaretta',
      },
      nursing: 'Il fibrinogeno è una **proteina di fase acuta**: si alza in ogni stato infiammatorio. Valori molto bassi (< 100 mg/dL) sono un segno di **consumo** (CID) e richiedono attenzione immediata.',
    },
  ],
  tips: [
    'Il D-dimero è **affidabile solo se negativo**: un valore normale esclude la TEV/EP in pazienti a basso rischio clinico',
    'Il fibrinogeno è una **proteina di fase acuta**: si alza in ogni stato infiammatorio',
    'Valori inattesi? **Ripetere il prelievo** e verificare l’assenza di emolisi',
    'Comunicare **subito** al medico valori di D-dimero > 500 ng/mL in pazienti con sospetto clinico di TEV/EP',
  ],
}

export default map
