import type { EcgMap } from '../../book/types'

const map: EcgMap = {
  kind: 'ecg',
  id: 'ecg-le-basi-e-il-ritmo-sinusale',
  chapter: 'ecg',
  title: 'ECG: le basi',
  subtitle: 'Carta, onde, intervalli e riconoscimento del ritmo sinusale',
  icon: 'Activity',
  status: 'bozza',
  sources: [
    'Hampton J. — ECG facile, Elsevier',
    'ERC — Linee guida per la rianimazione (sezione ritmi)',
    'AHA/ACCF/HRS — Recommendations for the standardization and interpretation of the ECG',
  ],
  paper: [
    { label: 'Velocità', value: '**25 mm/s**' },
    { label: 'Quadretto piccolo', value: '1 mm = **0,04 s**' },
    { label: 'Quadrato grande', value: '5 mm = **0,20 s**' },
    { label: '5 quadrati grandi', value: '**1 secondo**' },
    { label: 'Ampiezza', value: '10 mm = **1 mV**' },
  ],
  waves: [
    { name: 'Onda P', meaning: 'Depolarizzazione degli atri', normal: '< **0,12 s**' },
    { name: 'Intervallo PR', meaning: 'Dall’inizio di P all’inizio del QRS', normal: '**0,12–0,20 s** (3–5 quadretti)' },
    { name: 'Complesso QRS', meaning: 'Depolarizzazione dei ventricoli', normal: '< **0,12 s** (< 3 quadretti)' },
    { name: 'Tratto ST', meaning: 'Inizio della ripolarizzazione', normal: '**Isoelettrico**' },
    { name: 'Onda T', meaning: 'Ripolarizzazione dei ventricoli', normal: 'Concorde col QRS' },
    { name: 'QTc', meaning: 'Dall’inizio del QRS alla fine della T, corretto per la FC', normal: '< **0,45 s** M · < **0,46 s** F' },
  ],
  rateMethods: [
    { formula: '300 ÷ quadrati grandi', when: 'tra due onde R, con ritmo regolare' },
    { formula: '1500 ÷ quadretti piccoli', when: 'più preciso, ritmo regolare' },
    { formula: 'QRS in 6 s × 10', when: 'quando il ritmo è irregolare' },
  ],
  sinusCriteria: [
    'FC **60–100 bpm**',
    'Una **P** per ogni **QRS** (1:1)',
    'P **positiva in DII**',
    'PR **costante** 0,12–0,20 s',
    'Intervalli R-R **regolari**',
  ],
  readingSteps: [
    '**Frequenza**: lenta, normale o rapida?',
    '**Ritmo**: R-R regolare?',
    '**Onde P**: presenti e tutte uguali?',
    '**PR e QRS**: durata normale?',
    '**ST e T**: sopra o sotto la linea di base?',
  ],
  limbLeads: [
    { label: 'Rosso', position: 'braccio destro', color: '#d7263d' },
    { label: 'Giallo', position: 'braccio sinistro', color: '#f6d32d' },
    { label: 'Verde', position: 'gamba sinistra', color: '#2fa84f' },
    { label: 'Nero', position: 'gamba destra', color: '#17212f' },
  ],
  chestLeads: [
    { label: 'V1', position: 'IV spazio intercostale, margine sternale dx' },
    { label: 'V2', position: 'IV spazio intercostale, margine sternale sx' },
    { label: 'V3', position: 'a metà tra V2 e V4' },
    { label: 'V4', position: 'V spazio, linea emiclaveare sx' },
    { label: 'V5', position: 'linea ascellare anteriore (livello di V4)' },
    { label: 'V6', position: 'linea ascellare media (livello di V4)' },
  ],
  nurseRole: [
    'Paziente **supino** e rilassato, cute pulita e asciutta',
    'Verificare la **qualità del tracciato** (artefatti, linea di base)',
    'Riportare nome, data e ora sul tracciato',
    'Segnalare **subito** alterazioni nuove o sintomi',
  ],
}

export default map
