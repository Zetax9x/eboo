import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'modelli-funzionali-di-gordon',
  chapter: 'fondamenti',
  title: 'Modelli funzionali di Gordon',
  subtitle: 'Gli 11 modelli per organizzare l’accertamento',
  icon: 'Layers',
  status: 'bozza',
  sources: [
    'Gordon M. — Manual of Nursing Diagnosis, Jones & Bartlett',
    'Gordon M. — Diagnosi infermieristiche. Processo e applicazioni, CEA',
  ],
  intro:
    'Marjory **Gordon** propone **11 modelli funzionali di salute**: aree di comportamento da accertare in ogni persona. Ogni modello è valutato come **funzionale** o **disfunzionale** e orienta alle diagnosi NANDA-I.',
  tableTitle: 'Gli 11 modelli',
  tableIcon: 'ListChecks',
  columns: ['Modello', 'Cosa accertare', 'Esempi di dati'],
  widths: [1.3, 2, 1.8],
  rows: [
    ['1 · Percezione e gestione della salute', 'Come la persona percepisce e cura la propria salute', 'Fumo, alcol, adesione alla terapia, vaccinazioni'],
    ['2 · Nutrizionale-metabolico', 'Assunzione di cibo e liquidi, stato di cute e mucose', 'Peso, BMI, appetito, disfagia, integrità cutanea'],
    ['3 · Eliminazione', 'Funzione intestinale, urinaria e cutanea', 'Alvo, diuresi, incontinenza, uso di lassativi'],
    ['4 · Attività-esercizio fisico', 'Mobilità, autonomia nelle ADL, funzione cardio-respiratoria', 'Ausili, dispnea da sforzo, cadute'],
    ['5 · Sonno-riposo', 'Qualità e quantità del sonno e del riposo', 'Ore di sonno, risvegli, ipnotici'],
    ['6 · Cognitivo-percettivo', 'Organi di senso, memoria, linguaggio, dolore', 'Vista, udito, orientamento, NRS'],
    ['7 · Percezione di sé-concetto di sé', 'Immagine corporea, autostima, stato d’animo', 'Ansia, paura, umore, stomia'],
    ['8 · Ruolo-relazioni', 'Famiglia, lavoro, rete sociale', 'Caregiver, chi vive con la persona'],
    ['9 · Sessualità-riproduzione', 'Soddisfazione sessuale, fase riproduttiva', 'Menopausa, contraccezione, gravidanze'],
    ['10 · Coping-tolleranza allo stress', 'Modo di affrontare stress e cambiamenti', 'Strategie, supporto, reazioni alla malattia'],
    ['11 · Valori-convinzioni', 'Valori, credenze, spiritualità', 'Religione, scelte sulle cure, DAT'],
  ],
  notes: [
    {
      title: 'Come si usano',
      icon: 'ClipboardList',
      accent: 'blue',
      items: [
        'Guida per **intervista** ed esame fisico',
        'Per ogni modello: dati **soggettivi** e **oggettivi**',
        'Un modello disfunzionale ne influenza altri',
      ],
    },
    {
      title: 'Punti di forza',
      icon: 'CircleCheck',
      accent: 'green',
      items: [
        'Valido per ogni età e contesto',
        'Visione **olistica** della persona',
        'Collegamento diretto con **NANDA-I**',
      ],
    },
    {
      title: 'Esempio',
      icon: 'Lightbulb',
      accent: 'orange',
      items: [
        'Disfagia (modello **2**) → rischio di **aspirazione**',
        'Insonnia (modello **5**) → affaticamento (modello **4**)',
      ],
    },
  ],
  keyPoints: [
    'Mnemonica: **salute → nutrizione → eliminazione → attività → sonno → cognizione → sé → ruoli → sessualità → coping → valori**',
  ],
}

export default map
