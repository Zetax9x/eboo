import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'calcolo-dei-farmaci-in-pediatria',
  chapter: 'specialistica',
  title: 'Calcolo dei farmaci in pediatria',
  subtitle: 'Dosi per kg, volumi, infusioni ed esempi svolti',
  icon: 'Calculator',
  status: 'bozza',
  sources: [
    'Ministero della Salute — Raccomandazione n. 7 per la prevenzione degli errori in terapia farmacologica, 2008',
    'Holliday M.A., Segar W.E. — The maintenance need for water in parenteral fluid therapy, Pediatrics 1957',
    'Badon P., Cesaro S. — Assistenza infermieristica in pediatria, CEA',
  ],
  intro:
    'In pediatria la dose si calcola quasi sempre in base al **peso in kg** (mg/kg/dose o mg/kg/die). Un errore di virgola produce un sovradosaggio di **10 volte**: ogni calcolo va verificato.',
  columns: 2,
  blocks: [
    {
      title: 'Formule di base',
      icon: 'Calculator',
      accent: 'blue',
      items: [
        'Dose (mg) = **dose prescritta (mg/kg) × peso (kg)**',
        'Volume (mL) = **dose (mg) ÷ concentrazione (mg/mL)**',
        'Dose/die ÷ n. somministrazioni = **dose singola**',
        'Velocità (mL/h) = volume (mL) ÷ tempo (h)',
        'Gocce/min (macro, 20 gtt/mL) = mL/h ÷ 3; con **microgocciolatore** (60 gtt/mL) **gtt/min = mL/h**',
        'Superficie corporea (Mosteller) = **√(altezza cm × peso kg ÷ 3600)** m², per chemioterapici',
        'Riportare sempre il risultato con l’**unità di misura**',
      ],
    },
    {
      title: 'Esempio 1 · Dose per kg',
      icon: 'Pill',
      accent: 'green',
      items: [
        'Prescritto paracetamolo **15 mg/kg/dose**; bambino di **12 kg**',
        'Dose: 15 × 12 = **180 mg**',
        'Sciroppo **120 mg/5 mL** = 24 mg/mL',
        'Volume: 180 ÷ 24 = **7,5 mL**',
        'Verifica inversa: 7,5 mL × 24 = 180 mg ✓',
        'Registrare **ora e dose**: evitare doppie somministrazioni (anche prodotti da banco o supposte)',
        'Usare la **siringa dosatrice** della confezione o una siringa orale',
      ],
    },
    {
      title: 'Esempio 2 · Dose giornaliera',
      icon: 'Syringe',
      accent: 'purple',
      items: [
        'Prescritti **50 mg/kg/die in 2 dosi**; bambino di **18 kg**',
        'Dose/die: 50 × 18 = **900 mg** → per dose 900 ÷ 2 = **450 mg**',
        'Sospensione **250 mg/5 mL** = 50 mg/mL',
        'Volume per dose: 450 ÷ 50 = **9 mL** ogni 12 h',
        'Verifica: 900 mg ÷ 18 kg = **50 mg/kg/die** ✓',
        'Agitare la sospensione; dopo ricostituzione rispettare **scadenza e conservazione**',
      ],
    },
    {
      title: 'Esempio 3 · Liquidi di mantenimento',
      icon: 'Droplet',
      accent: 'teal',
      items: [
        'Holliday-Segar: **100 mL/kg** primi 10 kg + **50 mL/kg** 11–20 kg + **20 mL/kg** oltre 20 kg (al giorno)',
        'Bambino **25 kg**: 1000 + 500 + 100 = **1600 mL/die**',
        'Regola **4-2-1** (mL/kg/h): 40 + 20 + 5 = **65 mL/h**',
        'Volume e tipo di soluzione sempre **secondo prescrizione**',
        'Ricalcolare se variano peso, febbre o **perdite** (vomito, diarrea)',
        'Infusione sempre con **pompa volumetrica** nel bambino piccolo',
      ],
    },
    {
      title: 'Controllo di sicurezza',
      icon: 'ShieldCheck',
      accent: 'orange',
      checks: [
        { text: '**Peso reale** recente in kg, scritto in terapia', kind: 'ok' },
        { text: 'Dose calcolata dentro il **range** per kg del farmaco', kind: 'ok' },
        { text: 'Mai oltre la **dose massima** dell’adulto', kind: 'warn' },
        { text: '**Doppio controllo** indipendente per farmaci ad alto rischio', kind: 'ok' },
        { text: 'Rileggere la prescrizione: **farmaco, dose, via, orario**', kind: 'ok' },
        { text: 'Es. 300 mg a 12 kg = 25 mg/kg: **fuori range**, segnalare', kind: 'alert' },
      ],
    },
    {
      title: 'Errori da evitare',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'Scrivere **0,5** e mai “,5”; mai lo **zero finale** (5 e non 5,0)',
        'Confondere **mg/kg/dose** con **mg/kg/die**',
        'Unità di misura miste (mg / µg / mL): convertire prima',
        'Usare **siringhe orali** dedicate, non cucchiai domestici',
        'Diluizioni non standard: documentare la **concentrazione finale**',
      ],
    },
  ],
  keyPoints: [
    '1 mg = **1000 µg** · 1 g = **1000 mg** · 1 L = **1000 mL**',
    'Peso stimato (1–10 anni) = **(età + 4) × 2** kg: solo se il peso reale non è disponibile',
  ],
}

export default map
