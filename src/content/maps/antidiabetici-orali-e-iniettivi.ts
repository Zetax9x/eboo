import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'antidiabetici-orali-e-iniettivi',
  chapter: 'farmacologia',
  title: 'Antidiabetici non insulinici',
  subtitle: 'Farmaci orali e iniettivi per il diabete tipo 2',
  icon: 'Pill',
  status: 'bozza',
  sources: [
    'SID-AMD — Linea guida: la terapia del diabete mellito di tipo 2 (Sistema Nazionale Linee Guida ISS, 2021, aggiornamenti successivi)',
    'ADA — Standards of Care in Diabetes 2025',
    'AIFA — Nota 100 (prescrizione di SGLT2-i, GLP-1 RA, DPP-4i)',
  ],
  intro:
    '**Metformina** resta la base; **SGLT2-i** e **GLP-1 RA** sono preferiti in caso di malattia cardiovascolare, scompenso o malattia renale. In Italia la prescrizione segue la **Nota AIFA 100**.',
  tableTitle: 'Classi principali',
  tableIcon: 'Pill',
  columns: ['Classe', 'Esempi', 'Meccanismo', 'Effetti avversi chiave', 'Note infermieristiche'],
  widths: [1.3, 1.5, 1.7, 1.8, 1.8],
  rows: [
    ['Biguanidi', '**Metformina**', '↓ produzione epatica di glucosio, ↑ sensibilità insulinica', 'Disturbi **GI**, carenza vit. B12, **acidosi lattica** (rara)', 'Ai pasti; stop se eGFR < 30, disidratazione, mdc secondo protocollo'],
    ['Sulfaniluree', 'Gliclazide, glimepiride', 'Stimolano la secrezione di insulina', '**Ipoglicemia** (anche prolungata), aumento di peso', 'Rischio alto in anziani e nefropatici'],
    ['Glinidi', 'Repaglinide', 'Secretagoghi a breve durata', 'Ipoglicemia', 'Prima del pasto; pasto saltato = dose saltata'],
    ['Tiazolidinedioni', 'Pioglitazone', '↑ sensibilità insulinica (PPAR-γ)', 'Ritenzione idrica, edemi, fratture', '**Controindicato nello scompenso**; peso ed edemi'],
    ['DPP-4 inibitori (gliptine)', 'Sitagliptin, vildagliptin, linagliptin', '↑ incretine endogene', 'Ben tollerati; pancreatite rara', 'Basso rischio di ipoglicemia; neutri sul peso'],
    ['SGLT2 inibitori (gliflozine)', 'Dapagliflozin, empagliflozin', 'Glicosuria: ↑ eliminazione renale di glucosio', '**Infezioni genitali**, disidratazione, **chetoacidosi euglicemica**', 'Igiene intima, idratazione; stop prima di interventi e in malattia acuta'],
    ['GLP-1 agonisti (iniettivi o orali)', 'Semaglutide, dulaglutide, liraglutide', '↑ insulina glucosio-dipendente, ↓ glucagone, sazietà', '**Nausea, vomito**, rallentato svuotamento gastrico, pancreatite', 'Sc settimanale o giornaliero; semaglutide orale **a digiuno**'],
    ['Doppio agonista', 'Tirzepatide', 'Agonista GIP e GLP-1', 'Disturbi GI, perdita di peso', 'Sc **settimanale**; segnalare dolore addominale intenso'],
    ['Inibitori α-glucosidasi', 'Acarbosio', '↓ assorbimento intestinale dei carboidrati', 'Flatulenza, diarrea', 'Ipoglicemia: correggere con **glucosio**, non saccarosio'],
  ],
  notes: [
    {
      title: 'Ricovero e procedure',
      icon: 'Hospital',
      accent: 'blue',
      items: [
        'In ospedale spesso si passa all’**insulina** (acuzie, digiuno)',
        'GLP-1 RA: rischio di **stomaco pieno** in sedazione: seguire il protocollo',
        'Digiuno e mdc: verificare metformina e gliflozine',
      ],
    },
    {
      title: 'Ipoglicemia',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'Più probabile con **sulfaniluree**, glinidi e insulina',
        'Sintomi: sudorazione, tremori, confusione',
        'Sulfaniluree: ipoglicemie **ricorrenti**, sorvegliare a lungo',
      ],
    },
    {
      title: 'Educazione',
      icon: 'Users',
      accent: 'green',
      items: [
        '**Autocontrollo** glicemico e diario',
        'Dieta, attività fisica, controllo del peso',
        'Penne settimanali: stesso giorno, ruotare le sedi',
      ],
    },
  ],
  keyPoints: [
    'Gliflozine: chetoacidosi anche con **glicemia quasi normale**',
    'Metformina, DPP-4i, SGLT2-i e GLP-1 RA in monoterapia: **basso rischio** di ipoglicemia',
  ],
}

export default map
