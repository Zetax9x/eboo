import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'antipertensivi',
  chapter: 'farmacologia',
  title: 'Antipertensivi',
  subtitle: 'Classi, meccanismo, effetti avversi e controlli infermieristici',
  icon: 'Gauge',
  status: 'bozza',
  sources: [
    'ESC 2024 Guidelines for the management of elevated blood pressure and hypertension',
    'Rossi F., Cuomo V., Riccardi C. — Farmacologia. Principi di base e applicazioni terapeutiche, Minerva Medica',
    'AIFA — Riassunti delle Caratteristiche del Prodotto (RCP), banca dati farmaci',
  ],
  intro:
    'Prima scelta (ESC 2024): **ACE-inibitori o sartani, calcio-antagonisti diidropiridinici, diuretici tiazidici/simil-tiazidici**, spesso in **associazione** a dose fissa. I beta-bloccanti hanno indicazioni specifiche.',
  tableTitle: 'Classi principali',
  tableIcon: 'Pill',
  columns: ['Classe', 'Esempi', 'Meccanismo', 'Effetti avversi chiave', 'Controlli'],
  widths: [1.3, 1.3, 1.6, 1.8, 1.8],
  rows: [
    ['ACE-inibitori', 'Ramipril, enalapril, lisinopril', 'Bloccano la conversione angiotensina I → II; ↓ degradazione bradichinina', '**Tosse secca**, **angioedema**, iperkaliemia, ipotensione prima dose', 'PA, **K⁺** e creatinina; segnalare gonfiore di labbra/lingua'],
    ['Sartani (ARB)', 'Losartan, valsartan, irbesartan', 'Bloccano il recettore AT1 dell’angiotensina II', 'Iperkaliemia, ipotensione, ↑ creatinina; tosse rara', 'K⁺ e funzione renale; **mai insieme ad ACE-i**'],
    ['Calcio-antagonisti DHP', 'Amlodipina, nifedipina, lercanidipina', 'Vasodilatazione arteriolare (blocco canali Ca²⁺ L)', '**Edemi malleolari**, cefalea, vampate, tachicardia riflessa', 'Edemi declivi, FC, PA ortostatica'],
    ['Calcio-antagonisti non DHP', 'Verapamil, diltiazem', 'Azione su cuore: ↓ FC e contrattilità', '**Bradicardia**, BAV, stipsi (verapamil)', 'FC ed ECG; cautela con beta-bloccanti'],
    ['Diuretici tiazidici e simili', 'Idroclorotiazide, clortalidone, indapamide', 'Inibiscono il riassorbimento di Na⁺ nel tubulo distale', '**Ipokaliemia**, iponatriemia, iperuricemia, iperglicemia', 'Elettroliti, peso, glicemia; somministrare al mattino'],
    ['Beta-bloccanti', 'Bisoprololo, metoprololo, atenololo, carvedilolo', 'Blocco β1: ↓ FC, contrattilità e renina', '**Bradicardia**, astenia, broncospasmo (non selettivi), mascherano ipoglicemia', 'FC < 50–60: avvisare; **non sospendere bruscamente**'],
    ['Alfa-bloccanti', 'Doxazosina', 'Blocco α1: vasodilatazione', '**Ipotensione ortostatica** (prima dose)', 'Prima dose la sera, alzarsi lentamente'],
    ['Altri', 'Clonidina, metildopa (gravidanza), antialdosteronici', 'Azione centrale α2; antagonismo aldosterone', 'Sedazione, ipertensione da rimbalzo (clonidina)', 'Metildopa e labetalolo: scelte in **gravidanza**'],
  ],
  notes: [
    {
      title: 'Prima di somministrare',
      icon: 'Stethoscope',
      accent: 'blue',
      items: [
        'Misurare **PA e FC**; valutare ortostatismo nell’anziano',
        'Se PA o FC sotto i limiti prescritti: **non somministrare**, avvisare',
        'Controllare **K⁺, creatinina** e diuresi',
      ],
    },
    {
      title: 'Attenzione',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'ACE-i/sartani **controindicati in gravidanza**',
        '**FANS** riducono l’effetto e peggiorano la funzione renale',
        'K⁺ + ACE-i/sartani/antialdosteronici: rischio **iperkaliemia**',
      ],
    },
    {
      title: 'Educazione',
      icon: 'Users',
      accent: 'green',
      items: [
        'Assunzione **regolare**, anche senza sintomi',
        'Alzarsi **gradualmente** da letto',
        'Dieta povera di sale, attività fisica, automisurazione PA',
      ],
    },
  ],
  keyPoints: [
    'Tosse secca da ACE-inibitore → passaggio a **sartano**; angioedema → **sospensione** e urgenza',
    'I beta-bloccanti **mascherano** tachicardia e tremori dell’ipoglicemia',
  ],
}

export default map
