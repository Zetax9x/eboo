import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'respiro-e-saturazione',
  chapter: 'fondamenti',
  title: 'Respiro e saturazione',
  subtitle: 'Valutazione della funzione respiratoria e SpO₂',
  icon: 'Wind',
  status: 'bozza',
  sources: [
    'Potter P.A., Perry A.G. — Fondamenti di assistenza infermieristica, CEA',
    'Linee guida ERC 2025 — Rianimazione cardiopolmonare',
    'OMS — Global report on air pollution (2022)',
  ],
  intro:
    'La valutazione respiratoria comprende **frequenza**, **ritmo**, **profondità** e **saturazione** (SpO₂). È un parametro vitale essenziale per identificare precocemente l’insufficienza respiratoria.',
  illustration: {
    id: 'respiro-anatomia',
    alt: 'Polmoni sani e polmone con enfisema, dettaglio alveoli',
    prompt: 'healthy lungs and emphysematous lungs side by side, alveoli detail',
    icon: 'Wind',
  },
  columns: 2,
  blocks: [
    {
      title: 'Parametri respiratori',
      icon: 'Activity',
      accent: 'blue',
      items: [
        '**Frequenza**: 12–20 atti/min (adulto)',
        '**Ritmo**: regolare, sincrono con il polso',
        '**Profondità**: eutanea, non dispnoica',
        '**Tipo**: toracico, addominale, misto',
        '**Sforzo**: uso muscoli accessori = allarme',
        '**Suono**: rantoli, sibili, wheezing',
        '**Cianosi**: labbra, unghie, mucose',
      ],
    },
    {
      title: 'Saturazione (SpO₂)',
      icon: 'Gauge',
      accent: 'green',
      items: [
        '**Normale**: ≥ 95% in aria ambiente',
        '**Accettabile**: 92–94% (BPCO, O₂ terapia)',
        '**Critica**: < 90% → ipossiemia',
        '**Dispositivo**: pulsossimetro (dito, orecchio)',
        '**Tempo**: attendere 30–60 s per lettura stabile',
        '**Fattori interferenti**: unghie smaltate, freddo, movimento',
        '**Non misura**: CO₂ (serve emogasanalisi)',
      ],
    },
    {
      title: 'Valutazione infermieristica',
      icon: 'Stethoscope',
      accent: 'purple',
      items: [
        'Osservare **asimmetria** toracica',
        'Ascoltare **vescicolare** bilaterale',
        'Verificare **efficienza** del respiro',
        'Controllare **livello di coscienza** (ipossia → confusione)',
        'Misurare **SpO₂** a riposo e sotto sforzo',
        'Documentare **valori** e **tendenze**',
        'Rivalutare dopo **interventi** terapeutici',
      ],
    },
    {
      title: 'Segnali d’allarme',
      icon: 'ShieldAlert',
      accent: 'red',
      checks: [
        { text: '**SpO₂ < 90%** persistente', kind: 'alert' },
        { text: '**Dispnea** a riposo o con sforzo minimo', kind: 'alert' },
        { text: '**Frequenza** > 24 o < 10 atti/min', kind: 'alert' },
        { text: '**Cianosi** periferica o centrale', kind: 'alert' },
        { text: '**Uso muscoli** intercostali o sternocleidomastoidei', kind: 'alert' },
        { text: '**Confusione**, agitazione, sonnolenza', kind: 'alert' },
        { text: '**Rantoli** o **sibili** nuovi o peggiorati', kind: 'alert' },
      ],
    },
    {
      title: 'Interventi infermieristici',
      icon: 'Hand',
      accent: 'teal',
      items: [
        'Posizionare in **decubito semi-seduto** (45–60°)',
        'Somministrare **O₂** secondo prescrizione',
        'Monitorare **SpO₂** e **frequenza** ogni 15–30 min',
        'Ascoltare **vescicolare** prima e dopo O₂',
        'Incentivare **respirazione** diaframmatica',
        'Prevenire **aspirazione** (saliva, vomito)',
        'Preparare **emogasanalisi** se indicato',
      ],
    },
    {
      title: 'Errori comuni',
      icon: 'CircleX',
      accent: 'orange',
      items: [
        'Leggere SpO₂ **troppo presto** (< 30 s)',
        'Ignorare **freddo** periferico (falsi valori)',
        'Non **rivalutare** dopo O₂ terapia',
        'Confondere **SpO₂** con **PaO₂**',
        'Non documentare **valori** e **tendenze**',
        'Sottovalutare **dispnea** soggettiva',
        'Non verificare **funzionamento** pulsossimetro',
      ],
    },
  ],
  keyPoints: [
    'SpO₂ **< 90%** = emergenza: chiamare medico, O₂, monitorare',
    'La **dispnea** è il sintomo più soggettivo: chiedere sempre “Come respira?”',
    'La SpO₂ **non sostituisce** l’emogasanalisi: misura solo O₂, non CO₂',
  ],
}

export default map
