import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'rischio-suicidario',
  chapter: 'specialistica',
  title: 'Rischio suicidario',
  subtitle: 'Valutazione, fattori di rischio e interventi infermieristici',
  icon: 'ShieldAlert',
  status: 'bozza',
  sources: [
    'OMS — Prevenzione del suicidio: una guida per i professionisti sanitari, 2017',
    'NICE — Self-harm and suicide: assessment and management, 2023',
    'Codice deontologico FNOPI, 2014',
  ],
  intro:
    'Il rischio suicidario è una **condizione dinamica** che richiede valutazione immediata, monitoraggio continuo e un piano di sicurezza personalizzato. L’infermiere ha un ruolo centrale nella **rilevazione precoce** e nella **prevenzione**.',
  illustration: {
    id: 'rischio-suicidario-valutazione',
    alt: 'Infermiere che ascolta un paziente in un ambiente sicuro',
    prompt: 'nurse sitting next to a patient in a calm room, listening attentively, supportive posture',
    icon: 'User',
  },
  columns: 2,
  blocks: [
    {
      title: 'Fattori di rischio',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'Antecedenti di **tentativi** di suicidio (fattore predittivo più forte)',
        'Diagnosi psichiatrica: **depressione**, schizofrenia, disturbo bipolare',
        'Abuso di **alcol** o sostanze stupefacenti',
        'Isolamento sociale, lutto recente, **crisi** relazionale o lavorativa',
        'Accesso a **mezzi letali** (armi, farmaci in eccesso)',
        'Sintomi: **ideazione** suicidaria, piano, intenzione, temporizzazione',
        'Sesso maschile (tasso di completamento), femminile (tasso di tentativi)',
      ],
    },
    {
      title: 'Fattori protettivi',
      icon: 'ShieldCheck',
      accent: 'green',
      items: [
        'Legami familiari e **sociali** solidi',
        'Accesso a **servizi** di salute mentale',
        'Sensso di **responsabilità** verso figli o familiari',
        'Fede religiosa o valori spirituali',
        'Capacità di **problem solving** e coping efficace',
        'Percezione di **futuro** e speranza',
        'Supporto dell’**équipe** sanitaria e continuità assistenziale',
      ],
    },
    {
      title: 'Valutazione infermieristica',
      icon: 'ClipboardCheck',
      accent: 'blue',
      items: [
        'Domanda diretta: “**Pensa di farla finita**?” (non aumenta il rischio)',
        'Valutare **ideazione**, **piano**, **intenzione**, **temporizzazione** (4I)',
        'Identificare **mezzi** disponibili e accessibilità',
        'Valutare **antecedenti** di tentativi e storia familiare',
        'Screening con scale validate: **Columbia**, **Beck**, **QIDS**',
        'Valutare **funzionamento** cognitivo, emotivo, sociale',
        'Documentare **oggettivamente** ogni risposta e comportamento',
      ],
    },
    {
      title: 'Interventi immediati',
      icon: 'Siren',
      accent: 'orange',
      items: [
        '**Rimozione** di oggetti pericolosi dalla stanza',
        '**Sorveglianza** continua (1:1) se rischio alto',
        '**Contatto** verbale frequente, tono calmo e non giudicante',
        'Evitare **solitudine**: presenza fisica o visiva',
        'Comunicare al **medico** e all’équipe per piano terapeutico',
        'Preparare **ambiente** sicuro (no oggetti appuntiti, no farmaci)',
        'Coinvolgere **familiari** con consenso del paziente',
      ],
    },
    {
      title: 'Piano di sicurezza',
      icon: 'ListChecks',
      accent: 'purple',
      items: [
        'Elenco di **strategie** di coping apprese con il paziente',
        'Numeri di **emergenza** (112, 118, Telefono Amico 02 2327 2327)',
        'Identificare **persone di fiducia** da contattare in crisi',
        'Piano di **allontanamento** da situazioni a rischio',
        'Ripasso settimanale del piano con l’infermiere',
        'Aggiornamento del piano in base all’**evoluzione** clinica',
        'Condivisione del piano con **familiari** e altri operatori',
      ],
    },
    {
      title: 'Aspetti etici e legali',
      icon: 'BookOpen',
      accent: 'navy',
      checks: [
        { text: '**Riservatezza** con eccezione per rischio imminente (L. 219/2017)', kind: 'ok' },
        { text: '**Consenso** informato per trattamenti e contenimento', kind: 'ok' },
        { text: '**Documentazione** accurata di ogni valutazione e intervento', kind: 'ok' },
        { text: '**Non abbandono**: continuità assistenziale 24/7', kind: 'ok' },
        { text: '**Rispetto** della dignità e autonomia del paziente', kind: 'ok' },
        { text: '**Collaborazione** multidisciplinare (psichiatra, psicologo, OSS)', kind: 'ok' },
      ],
    },
  ],
  keyPoints: [
    'La domanda diretta sul suicidio **non aumenta** il rischio: riduce la vergogna e apre il dialogo',
    'Rischio alto = **ideazione + piano + intenzione + temporizzazione + accesso a mezzi**',
    'Il piano di sicurezza è un **contratto** tra paziente e équipe, non una punizione',
  ],
}

export default map
