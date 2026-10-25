import type { ProcedureMap } from '../../book/types'

const step = (id: string, alt: string, prompt: string) => ({ id: `asp-${id}`, alt, prompt, icon: 'Wind' as const })

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'aspirazione-delle-vie-aeree',
  chapter: 'procedure',
  title: 'Aspirazione delle vie aeree',
  subtitle: 'Aspirazione oro/nasofaringea e tracheale (tubo, tracheostomia)',
  icon: 'Wind',
  status: 'bozza',
  sources: [
    'AARC Clinical Practice Guideline — Endotracheal suctioning of mechanically ventilated patients with artificial airways (2010)',
    'Saiani L., Brugnolli A. — Trattato di cure infermieristiche, Idelson-Gnocchi',
    'Potter P.A., Perry A.G. — Fondamenti di infermieristica, Elsevier',
  ],
  materials: [
    { label: 'Aspiratore e vaso di raccolta', icon: 'Gauge' },
    { label: 'Sondino sterile (Fr)', icon: 'Cable' },
    { label: 'Guanti sterili e monouso', icon: 'Hand' },
    { label: 'Fonte di O₂ / pallone', icon: 'Wind' },
    { label: 'Acqua sterile per lavaggio', icon: 'Droplets' },
    { label: 'Saturimetro', icon: 'Activity' },
    { label: 'Occhiali, mascherina', icon: 'Eye' },
    { label: 'Sistema chiuso (se VM)', icon: 'RefreshCw' },
  ],
  safety: [
    { text: 'Aspirare **solo se serve**, non a orario', kind: 'ok' },
    { text: 'Vie aeree artificiali: tecnica **sterile**', kind: 'ok' },
    { text: 'Pressione adulto **≤ 150 mmHg** (di solito 100–150)', kind: 'warn' },
    { text: 'Sondino **≤ 50%** del lume del tubo nell’adulto', kind: 'warn' },
    { text: 'Ogni passaggio **≤ 10–15 s**, aspirazione **solo in risalita**', kind: 'warn' },
    { text: '**Non** instillare NaCl di routine nel tubo', kind: 'no' },
    { text: 'Bradicardia o SpO₂ ↓: **sospendere**, ossigenare', kind: 'alert' },
  ],
  steps: [
    {
      title: 'Valutare',
      items: ['Auscultare: rumori umidi, ronchi', 'SpO₂, FC, tosse efficace?', 'Spiegare, posizione **semi-Fowler**', 'Incosciente: **laterale**, verso l’operatore'],
      illustration: step('valutare', 'Infermiere che ausculta il torace', 'nurse auscultating the chest of a patient sitting in semi-Fowler position'),
    },
    {
      title: 'Preparare',
      items: ['Igiene mani, **DPI** (schizzi)', 'Verificare la **pressione** occludendo il tubo', 'Aprire il sondino sterile', 'Raccordarlo al tubo dell’aspiratore'],
      illustration: step('preparare', 'Aspiratore con manometro', 'wall suction unit with pressure gauge and collection canister'),
    },
    {
      title: 'Preossigenare',
      items: ['Intubato: **O₂ 100%** per 30–60 s', 'Non ventilato: aumentare O₂ su prescrizione', 'Annotare SpO₂ di base'],
      illustration: step('ossigeno', 'Paziente ventilato e monitor', 'intubated patient connected to a ventilator with a pulse oximeter on the finger'),
    },
    {
      title: 'Introdurre',
      items: ['Guanto sterile sulla mano dominante', 'Inserire **senza aspirare**', 'Se resistenza (carena): **ritrarre 1 cm**'],
      illustration: step('introdurre', 'Sondino introdotto nel tubo', 'sterile gloved hand inserting a suction catheter into an endotracheal tube'),
    },
    {
      title: 'Aspirare',
      items: ['Occludere la valvola **in risalita**', 'Ruotare il sondino tra le dita', 'Durata **≤ 15 s**', 'Osservare SpO₂, FC e colorito'],
      illustration: step('aspirare', 'Pollice sulla valvola del sondino', 'thumb covering the control port of a suction catheter while withdrawing it'),
    },
    {
      title: 'Ripetere se serve',
      items: ['Riossigenare tra i passaggi', 'Max **2–3 passaggi**', 'Prima **trachea**, poi bocca: mai il contrario'],
      icon: 'ListChecks',
    },
    {
      title: 'Riordinare',
      items: ['Lavare il circuito con **acqua sterile**', 'Eliminare sondino e guanti', 'Sondino nuovo **ogni volta**', 'Cure del **cavo orale**'],
      illustration: step('riordino', 'Sondino eliminato nei rifiuti', 'used suction catheter discarded into a clinical waste bin'),
    },
    {
      title: 'Documentare',
      items: ['Auscultare di nuovo, SpO₂, FC', 'Secrezioni: **quantità, colore**, densità', 'Tolleranza del paziente'],
      illustration: step('documentare', 'Cartella e monitor', 'nurse recording notes next to a bedside monitor'),
    },
  ],
  complications: [
    { label: 'Ipossiemia', sub: 'aspirazione lunga o ripetuta' },
    { label: 'Bradicardia, aritmie', sub: 'stimolo vagale' },
    { label: 'Trauma della mucosa', sub: 'sanguinamento, edema' },
    { label: 'Broncospasmo', sub: 'tosse, sibili' },
    { label: 'Atelettasia', sub: 'pressione o sondino eccessivi' },
    { label: 'Infezione / VAP', sub: 'contaminazione del sondino' },
  ],
  nurseRole: [
    'Prima: **tosse assistita**, idratazione, **umidificazione**',
    'Ventilato: preferire il **sistema chiuso** (non si perde PEEP)',
    'Aspirazione **superficiale** (fino alla punta del tubo) quando possibile',
    'Secrezioni dense: **non** aumentare la pressione',
  ],
}

export default map
