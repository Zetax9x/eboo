import type { AlgorithmMap } from '../../book/types'

const map: AlgorithmMap = {
  kind: 'algorithm',
  id: 'bls-d-adulto',
  chapter: 'emergenze',
  title: 'BLS-D adulto',
  subtitle: 'Rianimazione cardiopolmonare e defibrillazione precoce',
  icon: 'HeartPulse',
  status: 'bozza',
  sources: [
    'ERC — European Resuscitation Council Guidelines, Basic Life Support (ultimo aggiornamento)',
    'IRC — Italian Resuscitation Council, manuale BLSD',
  ],
  steps: [
    { kind: 'start', title: 'Sicurezza della scena', text: 'Valuta i pericoli per te, la vittima e gli astanti' },
    {
      kind: 'decision',
      title: 'Risponde?',
      text: 'Chiamala e scuotila delicatamente per le spalle',
      branches: [
        { label: 'Sì', text: 'Lasciala nella posizione trovata e rivaluta' },
        { label: 'No', text: 'Grida aiuto e **apri le vie aeree**' },
      ],
    },
    {
      kind: 'decision',
      title: 'Respira normalmente?',
      text: 'Guarda, ascolta e senti per **massimo 10 secondi**',
      branches: [
        { label: 'Sì', text: '**Posizione laterale di sicurezza**, chiama il 112/118' },
        { label: 'No', text: 'Respiro assente o **agonico** = arresto cardiaco' },
      ],
    },
    { kind: 'alert', title: 'Chiama il 112/118 e fai portare il DAE', text: 'Telefono in **vivavoce**; non lasciare la vittima' },
    { kind: 'action', title: 'RCP 30:2', text: '30 compressioni (**5–6 cm**, **100–120/min**) e 2 ventilazioni' },
    { kind: 'action', title: 'Arriva il DAE', text: 'Accendilo, applica le placche e segui le istruzioni vocali' },
    {
      kind: 'decision',
      title: 'Shock indicato?',
      branches: [
        { label: 'Sì', text: '1 shock, nessuno tocca la vittima, poi **RCP 2 min**' },
        { label: 'No', text: 'Riprendi subito **RCP 2 min**' },
      ],
    },
    { kind: 'end', title: 'Continua fino a…', text: 'ripresa della vittima, arrivo del soccorso avanzato o esaurimento' },
  ],
  side: [
    {
      title: 'Compressioni efficaci',
      icon: 'HeartPulse',
      accent: 'red',
      items: [
        'Mani al **centro del torace**',
        'Profondità **5–6 cm**',
        'Frequenza **100–120/min**',
        'Rilascio completo, pause **minime**',
        'Cambio soccorritore ogni **2 min**',
        'Vittima su superficie **rigida**, braccia tese',
      ],
    },
    {
      title: 'Ventilazioni',
      icon: 'Wind',
      accent: 'blue',
      items: [
        'Ogni insufflazione dura **1 secondo**',
        'Volume che **solleva il torace**',
        'Se non sai o non puoi ventilare: **solo compressioni**',
        'Vie aeree: **iperestensione del capo** e sollevamento del mento',
        'Usare **maschera tascabile** o pallone-maschera se disponibili',
      ],
    },
    {
      title: 'Uso del DAE',
      icon: 'Zap',
      accent: 'orange',
      items: [
        'Placche: sotto la **clavicola destra** e sul fianco **sinistro** (ascellare media)',
        'Torace **nudo e asciutto**',
        'Durante analisi e shock **nessuno tocca** la vittima',
        'Rimuovere i **cerotti medicati** dal torace',
        'Pacemaker o defibrillatore impiantato: placca **non sopra** il dispositivo',
        'Dopo lo shock: **riprendere subito** le compressioni',
      ],
    },
  ],
  keyPoints: ['Rapporto **30:2** nell’adulto', 'Ogni minuto senza RCP riduce la sopravvivenza: **inizia subito**'],
}

export default map
