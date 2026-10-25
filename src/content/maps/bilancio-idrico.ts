import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'bilancio-idrico',
  chapter: 'fondamenti',
  title: 'Bilancio idrico',
  subtitle: 'Monitoraggio di entrate e uscite: il metodo per valutare lo stato di idratazione',
  icon: 'Droplets',
  status: 'bozza',
  sources: [
    'Potter P.A., Perry A.G. — Fundamentals of Nursing, 10th ed., Elsevier',
    'Craven R.F., Hirnle C.J. — Principi fondamentali dell’assistenza infermieristica, CEA',
    'NICE — Intravenous fluid therapy in adults in hospital (CG174, 2013, agg. 2017)',
  ],
  intro:
    'Il **bilancio idrico** è il registro giornaliero delle **entrate** (liquidi assunti) e delle **uscite** (liquidi persi). Un bilancio **positivo** indica ritenzione, uno **negativo** indica perdita netta. È fondamentale in terapia intensiva, chirurgia, insufficienza renale e cardiaca.',
  columns: 2,
  blocks: [
    {
      title: 'Entrate (Intake)',
      icon: 'ArrowDown',
      accent: 'blue',
      items: [
        'Liquidi **orali**: acqua, tè, succhi, brodo (misurati in mL)',
        'Alimenti **solidi** con contenuto idrico (es. frutta, gelato)',
        'Fluidoterapia **endovenosa**: cristalloidi, colloidi, emoderivati',
        'Alimentazione **enterale** (sonda naso-gastrica o naso-duodenale)',
        'Alimentazione **parenterale** (TPN)',
        'Liquidi per **lavaggi** (vescicale, ferite) se non drenati',
        'Farmaci **iniettabili** con volume significativo',
      ],
    },
    {
      title: 'Uscite (Output)',
      icon: 'ArrowUp',
      accent: 'orange',
      items: [
        'Urina: misurata con **catetere** o raccolta in bacinella',
        'Feci: volume e consistenza (diarrea = perdita elevata)',
        'Vomito: stimare il volume (es. 200 mL)',
        'Drenaggi: toracici, addominali, ferite (misurare in mL)',
        'Perdite **insensibili** (cute, respiro) ≈ 800–1000 mL/die',
        'Sangue perso: chirurgia, emorragie (registrare in mL)',
        'Liquidi in **dialisi** (ultrafiltrazione)',
      ],
    },
    {
      title: 'Calcolo e Interpretazione',
      icon: 'Calculator',
      accent: 'green',
      items: [
        'Bilancio = **Entrate totali** – **Uscite totali**',
        'Bilancio **positivo**: Entrate > Uscite → rischio **edema**, ipertensione',
        'Bilancio **negativo**: Uscite > Entrate → rischio **disidratazione**, ipovolemia',
        'Bilancio **neutro**: Entrate ≈ Uscite → stato di equilibrio',
        'Registrare ogni **4–6 ore** o a fine turno (secondo protocollo)',
        'Confrontare con il **peso corporeo**: 1 kg di variazione ≈ 1 L di liquidi',
        'Valutare in relazione a **diuresi**, pressione, turgore cutaneo',
      ],
    },
    {
      title: 'Segnali di Allarme',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        'Diuresi **< 0,5 mL/kg/h** per ≥ 6 ore → oliguria (KDIGO)',
        'Bilancio negativo **> 1000 mL** in 24h senza causa nota',
        'Bilancio positivo **> 1000 mL** in 24h → rischio sovraccarico',
        'Aumento di peso **> 1 kg** in 24h senza assunzione nota',
        'Turgore cutaneo **assente**, mucose secche, tachicardia',
        'Edema **periorbitale**, **periferico** o **polmonare**',
        'Confusione, letargia, pressione **< 90/60 mmHg**',
      ],
    },
    {
      title: 'Ruolo Infermieristico',
      icon: 'ClipboardCheck',
      accent: 'teal',
      items: [
        'Misurare e registrare **accuratamente** tutte le entrate e uscite',
        'Utilizzare **strumenti standardizzati** (bacinelle graduate, sacche)',
        'Valutare **turgore cutaneo**, mucose, pressione venosa centrale (CVP)',
        'Monitorare **peso corporeo** giornaliero (stesso orario, stessa bilancia)',
        'Segnalare al medico **squilibri** significativi o improvvisi',
        'Adattare le **terapie** (diuretici, fluidi) secondo prescrizione',
        'Educare il paziente alla **registrazione** autonoma se possibile',
      ],
    },
    {
      title: 'Errori Comuni da Evitare',
      icon: 'TriangleAlert',
      accent: 'purple',
      items: [
        'Sottostimare le **uscite invisibili** (sudorazione, respirazione)',
        'Dimenticare i liquidi nei **farmaci** e nell’alimentazione enterale',
        'Non misurare i **drenaggi** e i **vomiti**',
        'Registrare i dati in modo **incoerente** (ore diverse, unità diverse)',
        'Ignorare la **variazione di peso** come indicatore di ritenzione',
        'Non correlare il bilancio con i **parametri vitali** e la diuresi',
      ],
    },
  ],
  keyPoints: [
    'Bilancio **positivo** = ritenzione liquidi; **negativo** = perdita netta; **neutro** = equilibrio',
    '1 kg di variazione di peso ≈ **1 litro** di liquidi in eccesso o difetto',
    'Registrare **ogni 4–6 ore** o a fine turno, con unità standard (mL)',
  ],
}

export default map
