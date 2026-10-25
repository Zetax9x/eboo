import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'nitrati-e-farmaci-per-l-angina',
  chapter: 'farmacologia',
  title: 'Nitrati e farmaci per l’angina',
  subtitle: 'Sollievo dell’attacco, prevenzione delle crisi e protezione cardiovascolare',
  icon: 'Heart',
  status: 'bozza',
  sources: [
    'ESC 2024 Guidelines for the management of chronic coronary syndromes',
    'ESC 2023 Guidelines for the management of acute coronary syndromes',
    'AIFA — Riassunti delle Caratteristiche del Prodotto (RCP), banca dati farmaci',
  ],
  intro:
    'Obiettivo: ridurre il **consumo di ossigeno** del miocardio (↓ FC, ↓ precarico, ↓ postcarico) o aumentarne l’apporto, e prevenire gli **eventi** (antiaggreganti, statine).',
  tableTitle: 'Farmaci antianginosi',
  tableIcon: 'Pill',
  columns: ['Farmaco / forma', 'Esempi', 'Azione e uso', 'Effetti avversi', 'Note infermieristiche'],
  widths: [1.3, 1.4, 1.7, 1.6, 2],
  rows: [
    ['Nitroglicerina sublinguale', 'Trinitrina compresse o spray SL', 'Venodilatazione → ↓ precarico; **attacco acuto**, effetto in 1–3 min', '**Cefalea**, ipotensione, flushing, tachicardia riflessa', 'Paziente **seduto**; ripetibile ogni 5 min (max 3 dosi); a domicilio, se non migliora dopo 5 min → **118**'],
    ['Nitrati orali a lunga durata', 'Isosorbide mononitrato, isosorbide dinitrato', 'Prevenzione delle crisi', 'Cefalea, ipotensione ortostatica', 'Prevedere un **intervallo libero** da nitrati per evitare la tolleranza'],
    ['Nitroglicerina transdermica', 'Cerotto', 'Prevenzione, rilascio continuo', 'Cefalea, irritazione cutanea', 'Rimuovere per **8–12 h** (di solito la notte); ruotare la sede; togliere prima della defibrillazione'],
    ['Nitroglicerina ev', 'Infusione continua', 'SCA, edema polmonare acuto, crisi ipertensiva', '**Ipotensione**, cefalea', 'Pompa, PA frequente; set **senza PVC** (il farmaco viene adsorbito)'],
    ['Beta-bloccanti', 'Bisoprololo, metoprololo', '↓ FC e contrattilità; prima linea nell’angina stabile', 'Bradicardia, astenia, broncospasmo', 'FC e PA prima della dose; non sospendere bruscamente'],
    ['Calcio-antagonisti', 'Amlodipina; verapamil, diltiazem', 'Vasodilatazione coronarica; angina vasospastica', 'Edemi, bradicardia (non DHP)', 'FC, edemi declivi'],
    ['Altri antianginosi', 'Ranolazina, ivabradina', 'Ranolazina: corrente tardiva del Na⁺; ivabradina: ↓ FC (nodo SA)', 'Ranolazina: ↑ QT; ivabradina: bradicardia, fosfeni', 'ECG; ivabradina solo in **ritmo sinusale**'],
    ['Prevenzione eventi', 'ASA, clopidogrel, ticagrelor, prasugrel; statine', 'Antiaggregazione; riduzione LDL', '**Sanguinamenti**; mialgie (statine)', 'Segni di sanguinamento; aderenza alla doppia antiaggregazione dopo stent'],
  ],
  notes: [
    {
      title: 'Controindicazioni nitrati',
      icon: 'Ban',
      accent: 'red',
      items: [
        'PAS **< 90 mmHg** o ipotensione marcata',
        'Inibitori **PDE-5** recenti (sildenafil 24 h, tadalafil 48 h)',
        'Infarto del **ventricolo destro**, stenosi aortica severa',
      ],
    },
    {
      title: 'Durante l’attacco',
      icon: 'Stethoscope',
      accent: 'blue',
      items: [
        'Interrompere l’attività, far sedere o sdraiare',
        'Misurare **PA e FC** prima e dopo la nitroglicerina',
        'ECG a 12 derivazioni appena possibile',
      ],
    },
    {
      title: 'Educazione',
      icon: 'Users',
      accent: 'green',
      items: [
        'Compresse SL in contenitore originale, **al riparo da luce** e umidità',
        'Bruciore sotto la lingua e cefalea: segni attesi',
        'Annotare frequenza e durata delle crisi',
      ],
    },
  ],
  keyPoints: [
    'Dolore non risolto dopo la nitroglicerina → sospetta **sindrome coronarica acuta**',
    'Nitrati + inibitori PDE-5 = **ipotensione grave**: chiedere sempre',
  ],
}

export default map
