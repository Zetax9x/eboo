import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'comunicazione-e-relazione-d-aiuto',
  chapter: 'fondamenti',
  title: 'Comunicazione e relazione d’aiuto',
  subtitle: 'Le competenze comunicative e i principi della relazione terapeutica',
  icon: 'Users',
  status: 'bozza',
  sources: [
    'Carpenito L.J. — Manuale di comunicazione e relazione d’aiuto, CEA',
    'FNOPI — Codice deontologico dell’infermiere (2020)',
    'L. 219/2017 — Norme in materia di consenso informato e di disposizioni anticipate di trattamento',
  ],
  intro:
    'La comunicazione è lo strumento primario dell’assistenza. La **relazione d’aiuto** è un processo intenzionale, strutturato e centrato sulla persona, finalizzato al raggiungimento di obiettivi di salute.',
  columns: 2,
  blocks: [
    {
      title: 'Comunicazione verbale e non verbale',
      icon: 'Activity',
      accent: 'blue',
      items: [
        '**Verbale**: parole, tono, volume, velocità, uso di termini tecnici',
        '**Non verbale**: postura, contatto visivo, espressioni facciali, prossemica',
        'Il non verbale trasmette spesso più del verbale (regola del 7-38-55)',
        'Coerenza tra messaggio verbale e non verbale: incongruenze generano diffidenza',
        'Adattare il linguaggio al livello di istruzione e alla cultura del paziente',
        'Evitare gergo medico senza spiegazione; usare termini comprensibili',
        'Ascolto attivo: mantenere contatto visivo, annuire, riformulare',
      ],
    },
    {
      title: 'Barriere alla comunicazione',
      icon: 'Ban',
      accent: 'red',
      items: [
        '**Barriere fisiche**: rumore, dolore, deficit uditivi o visivi',
        '**Barriere psicologiche**: ansia, paura, rabbia, negazione',
        '**Barriere culturali**: differenze linguistiche, credenze, tabù',
        '**Barriere professionali**: uso eccessivo di termini tecnici, fretta',
        'Interferenze ambientali: luci, odori, presenza di terzi',
        'Stato emotivo dell’infermiere: stanchezza, stress, pregiudizi',
        'Disabilità cognitive o sensoriali del paziente',
      ],
    },
    {
      title: 'Tecniche comunicative efficaci',
      icon: 'Lightbulb',
      accent: 'green',
      items: [
        '**Ascolto attivo**: attenzione totale, assenza di giudizi, riformulazione',
        '**Riformulazione**: ripetere con parole proprie per verificare la comprensione',
        '**Chiusura**: sintetizzare i punti chiave della conversazione',
        '**Silenzio terapeutico**: dare tempo al paziente per elaborare',
        '**Domande aperte**: “Come si sente?” vs “Ha mal di testa?”',
        '**Validazione emotiva**: riconoscere e accettare i sentimenti espressi',
        'Evitare domande a risposta chiusa quando serve approfondimento',
      ],
    },
    {
      title: 'Fasi della relazione d’aiuto',
      icon: 'Workflow',
      accent: 'purple',
      items: [
        '**Preorientamento**: contatto iniziale, presentazione, creazione di fiducia',
        '**Orientamento**: definizione dei bisogni, obiettivi condivisi, contratto terapeutico',
        '**Lavoro**: attuazione degli interventi, confronto, feedback',
        '**Terminazione**: valutazione degli obiettivi raggiunti, chiusura della relazione',
        'Ogni fase richiede competenze comunicative specifiche',
        'La relazione è **intenzionale**, **strutturata** e **temporanea**',
        'Centrata sulla persona, non sulla malattia',
      ],
    },
    {
      title: 'Principi etici e deontologici',
      icon: 'ShieldCheck',
      accent: 'navy',
      checks: [
        { text: '**Rispetto** della dignità e dell’autonomia della persona', kind: 'ok' },
        { text: '**Consenso informato**: spiegazione chiara di interventi e rischi', kind: 'ok' },
        { text: '**Riservatezza**: protezione dei dati personali (GDPR)', kind: 'ok' },
        { text: '**Non discriminazione**: uguale cura indipendentemente da etnia, religione, orientamento', kind: 'ok' },
        { text: '**Verità**: onestà nelle informazioni, senza falsi rassicurazioni', kind: 'ok' },
        { text: '**Empatia**: capacità di comprendere la prospettiva del paziente', kind: 'ok' },
      ],
    },
    {
      title: 'Comunicazione in contesti critici',
      icon: 'Siren',
      accent: 'orange',
      items: [
        '**Annuncio di diagnosi grave**: usare parole chiare, evitare eufemismi',
        'Fornire informazioni in modo **graduale**, verificando la comprensione',
        'Riconoscere e validare le reazioni emotive del paziente e della famiglia',
        'Coinvolgere i **familiari** se il paziente lo desidera',
        'Offrire supporto psicologico e riferimenti a servizi di aiuto',
        'Documentare accuratamente le informazioni fornite e le reazioni',
        'Rispettare il **diritto di non sapere** del paziente',
      ],
    },
  ],
  keyPoints: [
    'La comunicazione efficace richiede **ascolto attivo**, **empatia** e **coerenza** tra verbale e non verbale',
    'La relazione d’aiuto è **intenzionale**, **strutturata** e **centrata sulla persona**: non è casualità',
    'Il consenso informato (L. 219/2017) è un **diritto** del paziente e un **dovere** dell’infermiere',
  ],
}

export default map
