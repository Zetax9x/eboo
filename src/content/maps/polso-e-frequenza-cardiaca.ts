import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'polso-e-frequenza-cardiaca',
  chapter: 'fondamenti',
  title: 'Polso e frequenza cardiaca',
  subtitle: 'Valutazione del polso periferico e parametri di riferimento',
  icon: 'HeartPulse',
  status: 'bozza',
  sources: [
    'Potter P.A., Perry A.G. — Fundamentals of Nursing, Elsevier',
    'Craven R.F., Hirnle C.J. — Principi fondamentali dell’assistenza infermieristica, CEA',
  ],
  intro:
    'Il **polso** è l’onda di pressione che si propaga nelle arterie a ogni sistole. La sua valutazione fornisce informazioni su **frequenza**, **ritmo** e **ampiezza** del flusso ematico.',
  illustration: {
    id: 'polso-anatomia',
    alt: 'Mano con polso radiale evidenziato',
    prompt: 'close up of a human wrist showing the radial artery pulse point, fingers placed gently on the wrist',
    icon: 'Hand',
  },
  columns: 2,
  blocks: [
    {
      title: 'Sedi di palpazione',
      icon: 'Target',
      accent: 'blue',
      items: [
        '**Radiale**: polso del polso, sede più comune',
        '**Carotidea**: collo, solo in urgenza o se il radiale è assente',
        '**Femorale**: inguine, utile in neonati e bambini piccoli',
        '**Ulnare**: lato mignolo del polso',
        '**Brachiale**: faccia interna del braccio, usato nel lattante',
        '**Temporale**: davanti all’orecchio, sopra lo zigomo',
        '**Pedidio**: dorso del piede',
      ],
    },
    {
      title: 'Parametri da valutare',
      icon: 'Gauge',
      accent: 'purple',
      items: [
        '**Frequenza**: battiti per minuto (bpm)',
        '**Ritmo**: regolare o irregolare',
        '**Ampiezza**: pieno, debole, filiforme, assente',
        '**Simmetria**: confronto tra arti controlaterali',
        '**Tensione**: forza dell’impulso',
        '**Qualità**: pieno vs vuoto',
      ],
    },
    {
      title: 'Valori di riferimento',
      icon: 'Calculator',
      accent: 'green',
      items: [
        '**Adulto**: 60–100 bpm a riposo',
        '**Bambino (1-10 anni)**: 70–110 bpm',
        '**Neonato**: 120–160 bpm',
        '**Anziano**: può essere leggermente più bassa',
        '**Atleta**: spesso 40–60 bpm (bradicardia fisiologica)',
        '**Febbre**: +10 bpm per ogni grado di temperatura',
      ],
    },
    {
      title: 'Tecniche di misurazione',
      icon: 'Timer',
      accent: 'orange',
      items: [
        'Contare per **60 secondi** se il ritmo è irregolare',
        'Contare per **30 secondi** e moltiplicare per 2 se regolare',
        'Usare i polpastrelli di **indice, medio e anulare**',
        'Non usare il pollice (ha il proprio polso)',
        'Posizionare il paziente in **riposo** da almeno 5 min',
        'Evitare misurazioni dopo sforzo o stress',
      ],
    },
    {
      title: 'Alterazioni comuni',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        '**Tachicardia**: >100 bpm (dolore, febbre, anemia, ansia)',
        '**Bradicardia**: <60 bpm (atleti, farmaci, ipotiroidismo)',
        '**Aritmia**: ritmo irregolare (fibrillazione atriale)',
        '**Polso filiforme**: debole, difficile da percepire (shock)',
        '**Polso assente**: urgenza medica, verificare sedi alternative',
        '**Polso paradossale**: calo della PA sistolica >10 mmHg in inspirazione',
      ],
    },
    {
      title: 'Aspetti infermieristici',
      icon: 'ShieldCheck',
      accent: 'teal',
      checks: [
        { text: 'Documentare **sede**, **frequenza**, **ritmo**, **ampiezza**', kind: 'ok' },
        { text: 'Confrontare con **valori precedenti** del paziente', kind: 'ok' },
        { text: 'Segnalare **valori anomali** al medico', kind: 'ok' },
        { text: 'Valutare **simmetria** tra arti', kind: 'ok' },
        { text: 'Considerare **farmaci** che influenzano il polso', kind: 'ok' },
        { text: 'Monitorare in **continuo** in pazienti critici', kind: 'ok' },
      ],
    },
  ],
  keyPoints: [
    'Il polso radiale è la sede **preferita** per la valutazione di routine',
    'Un polso **assente** o **molto debole** richiede valutazione immediata',
    'La **bradicardia** in atleti può essere fisiologica; in altri pazienti è un segnale d’allarme',
  ],
}

export default map
