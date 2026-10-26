import type { AlgorithmMap } from '../../book/types'

const map: AlgorithmMap = {
  kind: 'algorithm',
  id: 'pbls-pediatrico',
  chapter: 'emergenze',
  title: 'PBLS pediatrico',
  subtitle: 'Supporto vitale di base nel lattante e nel bambino',
  icon: 'Baby',
  status: 'bozza',
  sources: [
    'ERC — European Resuscitation Council Guidelines 2021: Paediatric Life Support (Resuscitation 2021;152:115‑138)',
    'IRC — Italian Resuscitation Council, manuale PBLSD',
  ],
  intro:
    'Nel bambino l’arresto è quasi sempre **secondario a ipossia**: per questo si parte con **5 ventilazioni** e il rapporto è **15:2**. Lattante < 1 anno; bambino da 1 anno alla pubertà.',
  steps: [
    { kind: 'start', title: 'Sicurezza e coscienza', text: 'Stimolo **verbale e tattile**, senza stimoli dolorosi' },
    {
      kind: 'alert',
      title: 'Non risponde: chiama aiuto e il 112/118',
      text: 'Telefono in **vivavoce** (video se possibile); un secondo soccorritore chiama e porta il **DAE**',
    },
    {
      kind: 'decision',
      title: 'Respira normalmente?',
      text: 'Apri le vie aeree e valuta respiro e **segni di vita** per max **10 s**',
      branches: [
        { label: 'Sì', text: 'Vie aeree aperte o **posizione laterale** (non nel trauma); rivaluta ogni minuto' },
        { label: 'No', text: 'Respiro assente o anomalo: procedi con le ventilazioni' },
      ],
    },
    {
      kind: 'action',
      title: '5 ventilazioni iniziali',
      text: 'Insufflazioni di circa **1 s** che sollevano il torace; lattante bocca–**bocca-naso**, bambino bocca-bocca',
    },
    {
      kind: 'action',
      title: 'RCP 15:2',
      text: '15 compressioni e 2 ventilazioni; **100–120/min**, profondità **≥ 1/3** del torace (mai oltre **5 cm per bambini** (≈1/3 del torace))',
    },
    {
      kind: 'action',
      title: 'Applica il DAE appena possibile',
      text: 'Modalità pediatrica sotto **25 kg** (~8 anni); placche **antero-posteriori** sotto i 25 kg',
    },
    {
      kind: 'decision',
      title: 'Shock indicato?',
      branches: [
        { label: 'Sì', text: '1 shock, nessuno tocca, riprendi subito **RCP 15:2**' },
        { label: 'No', text: 'Riprendi subito **RCP 15:2** per 2 min' },
      ],
    },
    { kind: 'end', title: 'Continua fino a…', text: 'chiari **segni di vita**, arrivo del soccorso avanzato o esaurimento' },
  ],
  side: [
    {
      title: 'Compressioni per età',
      icon: 'HeartPulse',
      accent: 'red',
      items: [
        'Posizione: **metà inferiore** dello sterno a ogni età',
        'Lattante: tecnica a **due pollici** con mani che circondano il torace',
        'Bambino: **una o due mani** secondo corporatura',
        'Profondità ≥ **1/3** del diametro antero-posteriore',
        'Adolescente: come l’adulto, **5–6 cm**',
        'Rilascio completo, cambio soccorritore ogni **2 min**',
      ],
    },
    {
      title: 'Vie aeree e ventilazione',
      icon: 'Wind',
      accent: 'blue',
      items: [
        'Lattante: capo in **posizione neutra**',
        'Bambino: posizione “**annusare**”; adolescente: iperestensione piena',
        'Se il torace non si alza: riposiziona, rimuovi corpi estranei **visibili**',
        'Mai lo **svuotamento alla cieca** con le dita',
        'Operatori: **pallone-maschera** con O₂',
      ],
    },
    {
      title: 'Situazioni particolari',
      icon: 'TriangleAlert',
      accent: 'orange',
      items: [
        'Soccorritore **solo senza telefono**: 1 min di RCP poi chiama',
        'Non formati in PBLS: **30:2** con 5 ventilazioni iniziali',
        'FC **< 60/min** con segni di ipoperfusione: inizia le compressioni',
      ],
    },
  ],
  keyPoints: ['**5 ventilazioni**, poi **15:2**', 'Placche **antero-posteriori** sotto i **25 kg**'],
}

export default map
