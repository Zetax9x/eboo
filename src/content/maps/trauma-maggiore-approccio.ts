import type { AlgorithmMap } from '../../book/types'

const map: AlgorithmMap = {
  kind: 'algorithm',
  id: 'trauma-maggiore-approccio',
  chapter: 'emergenze',
  title: 'Trauma maggiore: approccio',
  subtitle: 'Protocollo ATLS: valutazione primaria, secondaria e gestione delle priorità',
  icon: 'ShieldAlert',
  status: 'bozza',
  sources: [
    'ATLS — Advanced Trauma Life Support, American College of Surgeons (10th ed.)',
    'Linee guida nazionali per la gestione del trauma grave (Ministero della Salute)',
    'Codice Rosso: protocollo di attivazione e triage del paziente critico',
  ],
  intro: 'Il trauma maggiore richiede un approccio sistematico per identificare e trattare le lesioni potenzialmente letali. La sequenza ATLS (Airway, Breathing, Circulation, Disability, Exposure) è lo standard di riferimento.',
  steps: [
    {
      kind: 'start',
      title: 'Sicurezza e attivazione',
      text: 'Valuta la scena, isola l’area, attiva il **Codice Rosso** e il team di emergenza',
    },
    {
      kind: 'action',
      title: 'A — Airway (Vie aeree)',
      text: 'Garantire vie aeree permeabili con protezione cervicale. Se ostruite: **manovre di disostruzione**, intubazione o **cricotirotomia**',
    },
    {
      kind: 'decision',
      title: 'B — Breathing (Respiro)',
      text: 'Valutare simmetria toracica, auscultazione, saturazione O₂',
      branches: [
        { label: 'Anomalia', text: 'Pneumotorace a tensione, emotorace, pneumotorace aperto → **decompressione** o drenaggio toracico' },
        { label: 'Normale', text: 'Procedere alla valutazione della circolazione' },
      ],
    },
    {
      kind: 'decision',
      title: 'C — Circulation (Circolazione)',
      text: 'Valutare polsi, capillari, pressione arteriosa, segni di emorragia',
      branches: [
        { label: 'Emorragia esterna', text: '**Compressione diretta**, laccio emostatico se necessario, trasfusione ematica' },
        { label: 'Shock', text: 'Accesso venoso rapido (2 cannule di grosso calibro, 14–16G), fluidoterapia, valutazione per **toracentesi** o **paracentesi**' },
      ],
    },
    {
      kind: 'action',
      title: 'D — Disability (Disabilità neurologica)',
      text: 'Valutare **GCS** (Eye, Verbal, Motor), pupille (dimensione, reattività), glicemia capillare',
    },
    {
      kind: 'action',
      title: 'E — Exposure (Esposizione)',
      text: 'Esporre completamente il paziente, cercare lesioni nascoste, **prevenire l’ipotermia** (coperte, liquidi caldi)',
    },
    {
      kind: 'alert',
      title: 'Valutazione secondaria',
      text: 'Anamnesi completa (AMPLE), esame fisico testa-piedi, esami diagnostici (RX, TC, ecografia FAST)',
    },
    {
      kind: 'end',
      title: 'Trasferimento e follow-up',
      text: 'Trasferimento in reparto appropriato (chirurgia, rianimazione), monitoraggio continuo, documentazione',
    },
  ],
  side: [
    {
      title: 'Segnali di allarme',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**GCS < 8**: rischio di aspirazione, intubazione immediata',
        '**PA < 90 mmHg**: shock emorragico, attivazione massiva trasfusionale',
        '**SpO₂ < 90%**: compromissione respiratoria grave',
        '**Pupille anisocoriche**: ematoma intracranico, urgenza neurochirurgica',
        '**Tachicardia > 120 bpm**: compensazione emorragica o dolore',
        '**Ipotermia < 35 °C**: coagulopatia, peggioramento prognosi',
      ],
    },
    {
      title: 'Accessi venosi',
      icon: 'Droplet',
      accent: 'blue',
      items: [
        '2 accessi venosi periferici di **grosso calibro** (14–16G)',
        'Se fallimento periferico: **accesso centrale** (giugulare interna, femorale)',
        'Se urgenza estrema: **intraosseo** (tibia prossimale, sterno)',
        'Evitare arto contuso o fratturato',
        'Fluido di scelta: **Ringer lattato** o soluzione fisiologica',
        'Evitare iperidratazione: target PA sistolica **80–90 mmHg** (permissiva)',
      ],
    },
    {
      title: 'Esami diagnostici',
      icon: 'Microscope',
      accent: 'purple',
      items: [
        '**Ecografia FAST**: versamento pericardico, addominale, pleurico',
        '**RX torace**: pneumotorace, emotorace, fratture costali',
        '**RX pelvi**: fratture pelviche, ematoma',
        '**TC corpo intero**: se paziente stabile, lesioni multiple sospette',
        '**Emogasanalisi**: acidosi, ipossia, ipercapnia',
        '**Emocromo + coagulazione**: anemia, piastrinopenia, **INR/PT**',
      ],
    },
  ],
  keyPoints: [
    'Sequenza **ATLS**: A-B-C-D-E, non saltare passi',
    'Protezione cervicale **sempre** fino a esclusione di lesione',
    'Trattamento delle lesioni letali **prima** della valutazione completa',
    'Prevenire l’**ipotermia** e la coagulopatia',
  ],
}

export default map
