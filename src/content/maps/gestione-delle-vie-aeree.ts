import type { AlgorithmMap } from '../../book/types'

const map: AlgorithmMap = {
  kind: 'algorithm',
  id: 'gestione-delle-vie-aeree',
  chapter: 'emergenze',
  title: 'Gestione delle vie aeree',
  subtitle: 'Valutazione, manovre di apertura e supporto ventilatorio',
  icon: 'Wind',
  status: 'bozza',
  sources: [
    'ERC — European Resuscitation Council Guidelines 2021: Airway Management',
    'SIAARTI — Società Italiana di Anestesia e Rianimazione, Linee guida sulla gestione delle vie aeree (2020)',
    'Difficult Airway Society (DAS) — Guidelines for management of unanticipated difficult intubation in adults (2015)',
  ],
  intro: 'La gestione delle vie aeree è la prima priorità nella catena della sopravvivenza e nella stabilizzazione del paziente critico. Un’aria non perviabile o non ventilata porta all’arresto cardiaco in pochi minuti.',
  steps: [
    {
      kind: 'start',
      title: 'Valutazione iniziale',
      text: 'Verificare coscienza, respiro, rumori respiratori e segni di ostruzione (stridore, cianosi, dispnea)'
    },
    {
      kind: 'decision',
      title: 'Le vie aeree sono pervie?',
      branches: [
        { label: 'Sì', text: 'Monitorare, posizionare in **PLS** se incosciente, ossigeno se indicato' },
        { label: 'No', text: 'Procedere con manovre di apertura e/o rimozione corpo estraneo' },
      ],
    },
    {
      kind: 'action',
      title: 'Manovre di apertura',
      text: 'Iperestensione del capo (tilt-back) + sollevamento del mento (chin-lift). Se trauma cervicale sospetto: **trazione mandibolare** (jaw-thrust) senza estensione del capo'
    },
    {
      kind: 'decision',
      title: 'Respiro ripristinato?',
      branches: [
        { label: 'Sì', text: 'Ventilare con **pallone-maschera** (BVM) se necessario, ossigeno **15 L/min**' },
        { label: 'No', text: 'Verificare ostruzione (corpo estraneo, vomito, ematoma) e ripulire le vie aeree' },
      ],
    },
    {
      kind: 'alert',
      title: 'Ostruzione persistente',
      text: 'Se il paziente è cosciente e non riesce a parlare o tossire: **manovre di disostruzione** (compressioni addominali (manovra di Heimlich)). Se incosciente: **RCP** e ricerca del corpo estraneo in bocca'
    },
    {
      kind: 'action',
      title: 'Ventilazione di supporto',
      text: 'Pallone-maschera con **valvola unidirezionale** e **O₂ ad alto flusso**. **10–12 ventilazioni al minuto** (una ogni 5–6 secondi) nel paziente con respiro assente o inefficace'
    },
    {
      kind: 'end',
      title: 'Rivalutazione continua',
      text: 'Controllare saturazione (**SpO₂**), frequenza respiratoria, livello di coscienza. Preparare la **cannulazione orofaringea/nasofaringea** o l’intubazione se il supporto non è sufficiente'
    },
  ],
  side: [
    {
      title: 'Manovre di base',
      icon: 'Hand',
      accent: 'blue',
      items: [
        '**Tilt-back + chin-lift**: manovra standard per pazienti senza trauma cervicale',
        '**Jaw-thrust**: manovra di scelta se sospetto di **trauma cervicale**',
        'Rimuovere corpi estranei visibili con **dito guantato** (solo se visibili)',
        'Aspirare vomito o secrezioni con **sonda di Yankauer** o aspiratore portatile',
        'Posizionare il paziente in **posizione laterale di sicurezza** se incosciente e non intubato',
        'Evitare l’iperestensione forzata in caso di **rigidità cervicale** o trauma',
      ],
    },
    {
      title: 'Dispositivi di supporto',
      icon: 'Wind',
      accent: 'green',
      items: [
        '**Pallone-maschera (BVM)**: con valvola unidirezionale e O₂ **15 L/min**',
        '**Cannula orofaringea (Guedel)**: per pazienti incoscienti con riflesso faringeo assente',
        '**Cannula nasofaringea**: alternativa se bocca non accessibile o trisma',
        '**Maschera laringea (LMA)**: dispositivo supraglottico per ventilazione temporanea',
        'Taglie cannule: **orofaringea** (misurare da angolo bocca a orecchio), **nasofaringea** (da narice a lobo orecchio)',
        'Se la ventilazione con BVM è inefficace: preparare per **intubazione orotracheale**',
      ],
    },
    {
      title: 'Segnali di allarme',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        '**Stridore inspiratorio**: ostruzione extratoracica (laringe, trachea)',
        '**Cianosi periorale**: ipossiemia grave, agire immediatamente',
        '**Assenza di movimento toracico** nonostante la ventilazione: vie aeree occluse',
        '**SpO₂ < 90%** nonostante O₂ ad alto flusso: considerare intubazione',
        '**Rumori respiratori assenti** o molto ridotti: ostruzione completa',
        '**Alterazione del livello di coscienza** progressiva: rischio di perdita delle vie aeree',
      ],
    },
  ],
  keyPoints: [
    'La **posizione laterale di sicurezza** è fondamentale per pazienti incoscienti non intubati',
    'In caso di **trauma cervicale sospetto**, usare sempre la **trazione mandibolare**',
    'La **SpO₂** deve essere monitorata continuamente durante la ventilazione di supporto',
  ],
}

export default map
