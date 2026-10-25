import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'funzionalita-epatica',
  chapter: 'laboratorio',
  title: 'Funzionalità epatica',
  subtitle: 'Transaminasi, indici di colestasi, bilirubina e test di sintesi',
  icon: 'FlaskConical',
  status: 'bozza',
  sources: [
    'Harrison — Principi di medicina interna, sezione valutazione della funzione epatica',
    'EASL — Clinical Practice Guidelines (danno epatico da farmaci, encefalopatia epatica)',
    'Pagana K.D., Pagana T.J. — Mosby’s Manual of Diagnostic and Laboratory Tests, Elsevier',
  ],
  intro:
    'Gli “**esami del fegato**” misurano danno cellulare, colestasi e capacità di **sintesi**. Range indicativi per l’adulto: variano molto tra laboratori e metodi.',
  tableTitle: 'Esami e significato',
  tableIcon: 'TestTubes',
  columns: ['Esame', 'Valori (adulto)', 'Che cosa indica', 'Aumenta / si altera in'],
  widths: [1.3, 1.2, 1.6, 2.2],
  rows: [
    ['**AST** (GOT)', '< 35–40 U/L', 'Danno cellulare: fegato, ma anche **cuore e muscolo**', 'Epatiti, cirrosi, rabdomiolisi; **AST/ALT > 2** suggerisce danno da **alcol**'],
    ['**ALT** (GPT)', '< 40–45 U/L', 'Danno degli epatociti, **più specifica** per il fegato', 'Epatiti virali, steatosi, farmaci; **> 10 volte** il limite: danno acuto (virus, **paracetamolo**, ischemia)'],
    ['**GGT**', 'M < 60 · F < 40 U/L', 'Colestasi e induzione enzimatica', '**Alcol**, ostruzione biliare, farmaci (antiepilettici)'],
    ['**Fosfatasi alcalina** (ALP)', '40–130 U/L', 'Colestasi; prodotta anche dall’**osso**', 'Calcolosi del coledoco, neoplasie, metastasi ossee, **gravidanza**, crescita'],
    ['**Bilirubina totale**', '0,3–1,2 mg/dL', 'Ittero visibile oltre **2–3 mg/dL** (prima alle **sclere**)', 'Indiretta ↑: **emolisi**, sindrome di Gilbert · diretta ↑: epatite, **ostruzione biliare**'],
    ['**Bilirubina diretta**', '< 0,3 mg/dL', 'Quota **coniugata** dal fegato, eliminata con la bile', 'Colestasi: **urine scure**, feci chiare (acoliche), prurito'],
    ['**Albumina**', '3,5–5,0 g/dL', 'Funzione di **sintesi** (emivita circa 3 settimane)', '↓ in cirrosi, malnutrizione, sindrome nefrosica, infiammazione: **edemi, ascite**'],
    ['**PT / INR**', 'INR 0,8–1,2', 'Sintesi dei fattori della coagulazione: indice **rapido**', '↑ in insufficienza epatica acuta e cronica, deficit di **vitamina K**'],
    ['**Ammoniemia**', 'circa < 50 µmol/L', 'Mancata detossificazione dell’azoto', '↑ in **encefalopatia epatica**; prelievo **su ghiaccio**, analisi entro 30 min'],
  ],
  notes: [
    {
      title: 'Due quadri tipici',
      icon: 'GitBranch',
      accent: 'blue',
      items: [
        '**Epatocellulare**: AST e ALT molto alte',
        '**Colestatico**: ALP e GGT alte, bilirubina **diretta** ↑',
        'Albumina e INR alterati = fegato che **non sintetizza**',
      ],
    },
    {
      title: 'Osservare',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Ittero** di sclere e cute, prurito',
        'Colore di **urine e feci**',
        'Confusione, **flapping tremor**, sonnolenza',
        'Ascite: peso e **circonferenza addominale**',
      ],
    },
    {
      title: 'Ruolo dell’infermiere',
      icon: 'Stethoscope',
      accent: 'green',
      items: [
        'INR alto: segni di **sanguinamento**, compressione prolungata',
        'Paracetamolo: rispettare la **dose massima** giornaliera',
        'Encefalopatia: **alvo** regolare (lattulosio secondo prescrizione)',
      ],
    },
  ],
  keyPoints: [
    'Le transaminasi indicano **danno**, non la **funzione**: per la funzione guardare **albumina, INR, bilirubina**',
  ],
}

export default map
