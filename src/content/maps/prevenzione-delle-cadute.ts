import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'prevenzione-delle-cadute',
  chapter: 'fondamenti',
  title: 'Prevenzione delle cadute',
  subtitle: 'Identificazione del rischio, interventi ambientali e assistenziali',
  icon: 'ShieldAlert',
  status: 'bozza',
  sources: [
    'Ministero della Salute — Raccomandazione n. 13 per la prevenzione e la gestione della caduta del paziente (2011)',
    'NICE — Falls: assessment and prevention in older people and in people 50 and over at higher risk (NG249, 2025)',
    'Montero-Odasso M. et al. — World guidelines for falls prevention and management for older adults, Age Ageing 2022',
  ],
  intro:
    'La **caduta** è un evento imprevisto che porta la persona a terra o su un livello inferiore. La prevenzione è un **obbligo deontologico** e un indicatore di qualità assistenziale.',
  illustration: {
    id: 'prevenzione-cadute-assistenza',
    alt: 'Infermiere che aiuta un anziano a camminare con le stampelle',
    prompt: 'nurse assisting an elderly patient walking with crutches in a hospital corridor',
    icon: 'User',
  },
  columns: 2,
  blocks: [
    {
      title: 'Fattori di rischio',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        '**Età** > 65 anni, storia di cadute precedenti',
        '**Farmaci**: sedativi, antipertensivi, diuretici, ipoglicemizzanti',
        '**Deficit sensoriali**: visivi, uditivi, cognitivi (demenza, delirium)',
        '**Mobilità ridotta**: debolezza muscolare, instabilità posturale',
        '**Incontinenza urinaria**: urgenza di raggiungere il bagno',
        '**Ambiente**: pavimenti scivolosi, illuminazione scarsa, cavi a terra',
        '**Condizioni acute**: ipotensione ortostatica, ipoglicemia, emorragia',
      ],
    },
    {
      title: 'Valutazione del rischio',
      icon: 'ClipboardCheck',
      accent: 'blue',
      items: [
        'Scale validate: **Morse**, **STRATIFY**, **Hendrich II**',
        'Valutazione **all’ingresso** e dopo ogni variazione clinica',
        'Verificare **pressione arteriosa** in ortostatismo (sdraiato/seduto/ortostatico)',
        'Valutare **funzione cognitiva** e capacità di giudizio',
        'Rivedere la **terapia farmacologica** in corso',
        'Documentare il **punteggio** e il livello di rischio (basso/medio/alto)',
        'Aggiornare la valutazione **quotidianamente** o dopo una caduta',
      ],
    },
    {
      title: 'Interventi ambientali',
      icon: 'Hospital',
      accent: 'green',
      items: [
        '**Illuminazione** adeguata, luce notturna accessibile',
        '**Pavimento** antiscivolo, privo di cavi e oggetti sparsi',
        '**Lettino** con ruote bloccate, materasso a terra se indicato',
        '**Campanello** e telefono a portata di mano',
        '**Scarpe** antiscivolo, adatte alla deambulazione',
        '**Segnaletica** chiara, ringhiere stabili nei bagni',
        '**Bagno** vicino alla stanza o accessibile senza ostacoli',
      ],
    },
    {
      title: 'Interventi assistenziali',
      icon: 'Hand',
      accent: 'orange',
      items: [
        '**Svezzamento** graduale dai farmaci sedativi se possibile',
        '**Mobilizzazione** assistita: mai lasciare solo il paziente a rischio',
        '**Educazione** a persona e familiari: alzarsi lentamente, chiedere aiuto',
        '**Controllo** frequente (ogni 1-2 ore) per pazienti ad alto rischio',
        '**Riconoscere** i segni di instabilità: vertigini, debolezza, confusione',
        '**Collaborare** con fisioterapista per esercizi di equilibrio e forza',
        '**Documentare** ogni intervento e la risposta del paziente',
      ],
    },
    {
      title: 'Gestione della caduta',
      icon: 'Siren',
      accent: 'purple',
      items: [
        '**Non sollevare** il paziente: valutare prima lesioni e dolore',
        '**Chiamare aiuto** (118 se necessario) e avvisare il medico',
        '**Valutare** segni vitali, livello di coscienza, dolore, deformità',
        '**Proteggere** la scena e altri pazienti',
        '**Documentare** l’evento: ora, luogo, circostanze, lesioni, interventi',
        '**Non colpevolizzare** il paziente; morte o grave danno da caduta = **evento sentinella**',
        '**Rivedere** il piano di prevenzione e gli interventi effettuati',
      ],
    },
    {
      title: 'Documentazione e indicatori',
      icon: 'FileText',
      accent: 'navy',
      items: [
        'Registrare **data, ora, luogo** della caduta',
        'Descrivere **circostanze** e **lesioni** riportate',
        'Indicare **interventi** immediati e **avvisi** dati',
        'Compilare la **scheda di segnalazione** (incident reporting)',
        'Monitorare **indicatori**: cadute per 1000 giornate di degenza',
        'Partecipare alle **riunioni di qualità** e analisi degli eventi',
        'Aggiornare il **piano di assistenza** dopo ogni caduta',
      ],
    },
  ],
  keyPoints: [
    'La prevenzione è **multifattoriale**: ambiente, farmaci, mobilità, educazione',
    'Valutare il rischio **all’ingresso** e **quotidianamente**',
    'Ogni caduta va **segnalata** e analizzata; morte o grave danno = **evento sentinella**',
  ],
}

export default map
