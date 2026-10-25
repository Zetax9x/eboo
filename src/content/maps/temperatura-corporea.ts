import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'temperatura-corporea',
  chapter: 'fondamenti',
  title: 'Temperatura corporea',
  subtitle: 'Valori, sedi di misurazione e interpretazione clinica',
  icon: 'Thermometer',
  status: 'bozza',
  sources: [
    'Potter P.A., Perry A.G. — Fundamentals of Nursing, 10th ed., Elsevier',
    'Craven R.F., Hirnle C.J. — Principi fondamentali dell’assistenza infermieristica, CEA',
    'NICE — Fever in under 5s: assessment and initial management (NG143, 2019)',
  ],
  intro:
    'La temperatura corporea è un **parametro vitale** che riflette l’equilibrio tra produzione e dispersione di calore. La sua misurazione corretta è fondamentale per la diagnosi precoce di infezioni, shock e altre condizioni critiche.',
  illustration: {
    id: 'temp-corporea-termometro',
    alt: 'Termometro digitale e termometro a infrarossi',
    prompt: 'digital thermometer and infrared ear thermometer on a white surface',
    icon: 'Thermometer',
  },
  columns: 2,
  blocks: [
    {
      title: 'Valori di riferimento',
      icon: 'Gauge',
      accent: 'blue',
      items: [
        '**36,5–37,5 °C**: intervallo normale (variabile per età, ora, attività)',
        '**< 35,0 °C**: ipotermia',
        '**> 37,5 °C**: febbre',
        '**> 39,0 °C**: febbre alta',
        '**> 41,0 °C**: iperpiressia (es. colpo di calore)',
        'Neonati: **36,4–37,5 °C** (retto)',
        'Anziani: spesso valori più bassi, **36,0–37,0 °C**',
      ],
    },
    {
      title: 'Sedi di misurazione',
      icon: 'Target',
      accent: 'green',
      items: [
        '**Retto**: più accurata, riferimento per neonati e pazienti critici',
        '**Orale**: comoda, non usabile in pazienti con alterazioni della coscienza',
        '**Ascellare**: meno accurata (~0,5 °C sotto l’orale), **registrare la sede**',
        '**Timpanica**: rapida, utile in pediatria',
        '**Frontale**: non invasiva, meno precisa',
        'Scegliere la sede in base a **età, stato clinico, disponibilità**',
        'Usare lo stesso metodo per confronti nel tempo',
      ],
    },
    {
      title: 'Cause di alterazioni',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        '**Rialzo termico**: infezioni, infiammazioni, farmaci, neoplasie',
        '**Ipotermia**: esposizione al freddo, shock, ipotiroidismo',
        '**Febbre**: risposta immunitaria a citochine (IL-1, TNF)',
        'Farmaci: antipiretici, corticosteroidi, chemioterapici',
        'Condizioni: sepsi, meningite, polmonite, IVU',
        'Fattori: esercizio fisico, ciclo mestruale, stress',
        'Misurare dopo **30 min** da pasti, bevande calde/fredde',
      ],
    },
    {
      title: 'Tecniche di misurazione',
      icon: 'ClipboardCheck',
      accent: 'purple',
      items: [
        'Lavare le mani prima e dopo la misurazione',
        'Verificare il funzionamento del termometro',
        'Usare il **coprisonda** monouso',
        'Ascellare: braccio addotto, termometro in posizione centrale',
        'Orale: sotto la lingua, bocca chiusa, **3-5 min**',
        'Retto: lubrificare, inserire **2,5 cm**, **1-2 min**',
        'Timpanica: tirare l’orecchio in alto e indietro (adulti)',
      ],
    },
    {
      title: 'Interventi infermieristici',
      icon: 'Hand',
      accent: 'orange',
      items: [
        'Monitorare la temperatura ogni **4-8 ore** (o più spesso se indicato)',
        'Registrare valore, sede, ora, condizioni del paziente',
        'Valutare **sintomi associati**: brividi, sudorazione, cefalea',
        'Somministrare antipiretici **su prescrizione**',
        'Applicare **bagni tiepidi** se febbre > 39,0 °C',
        'Idratare il paziente, monitorare la diuresi',
        'Segnalare al medico valori **< 35,0 °C** o **> 39,5 °C**',
      ],
    },
    {
      title: 'Errori comuni',
      icon: 'CircleX',
      accent: 'slate',
      checks: [
        { text: 'Misurare subito dopo pasti o bevande calde', kind: 'no' },
        { text: 'Usare termometro non calibrato', kind: 'no' },
        { text: 'Non considerare l’età del paziente', kind: 'warn' },
        { text: 'Ignorare i sintomi associati alla febbre', kind: 'warn' },
        { text: 'Non documentare la sede di misurazione', kind: 'no' },
        { text: 'Confrontare valori misurati in sedi diverse', kind: 'warn' },
        { text: 'Non rivalutare dopo terapia antipiretica', kind: 'no' },
      ],
    },
  ],
  keyPoints: [
    'La temperatura normale varia tra **36,5 e 37,5 °C**, ma può essere influenzata da età, ora del giorno, attività fisica e ciclo mestruale',
    'Scegliere la sede di misurazione in base all’età e allo stato clinico: **retto** per neonati e pazienti critici, **ascellare** per adulti stabili',
    'Valori **< 35,0 °C** (ipotermia) o **> 39,5 °C** (febbre alta) richiedono **valutazione immediata** e intervento',
  ],
}

export default map
