import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'segreto-professionale',
  chapter: 'concorsi',
  title: 'Segreto professionale',
  subtitle: 'Obblighi, limiti e responsabilità dell’infermiere',
  icon: 'ShieldCheck',
  status: 'bozza',
  sources: [
    'Codice deontologico degli infermieri (FNOPI, 2014)',
    'D.Lgs. 196/2003 (Codice Privacy) e Reg. UE 2016/679 (GDPR)',
    'Art. 321 e 622 c.p. – Codice Penale',
  ],
  intro:
    'Il segreto professionale è un **obbligo giuridico e deontologico** che vincola l’infermiere a non rivelare fatti, notizie o informazioni apprese nell’esercizio della professione, salvo eccezioni previste dalla legge.',
  columns: 2,
  blocks: [
    {
      title: 'Fondamento normativo',
      icon: 'BookOpen',
      accent: 'blue',
      items: [
        '**Art. 321 c.p.**: obbligo di segreto per chi per legge deve custodirlo',
        '**Art. 622 c.p.**: violazione del segreto d’ufficio (pena detenzione fino a 2 anni)',
        '**Codice Deontologico FNOPI**: art. 26-30 (riservatezza, consenso, dati)',
        '**GDPR**: dati sanitari = categoria particolare (art. 9)',
        '**L. 833/1978**: diritto alla riservatezza del cittadino',
        'Obbligo **permanente**: non cessa con la fine del rapporto di lavoro',
      ],
    },
    {
      title: 'Cosa copre',
      icon: 'ClipboardList',
      accent: 'purple',
      items: [
        'Diagnosi, terapie, prognosi, esiti clinici',
        'Dati anagrafici, sociali, familiari',
        'Immagini, referti, cartelle cliniche',
        'Comportamenti, abitudini, stile di vita',
        'Informazioni acquisite in **qualsiasi contesto** lavorativo',
        'Comunicazioni orali, scritte, digitali',
        'Anche dopo la **morte** del paziente',
      ],
    },
    {
      title: 'Eccezioni legali',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        '**Obbligo di denuncia**: reati non prescrivibili (es. omicidio, violenza sessuale)',
        '**Mandato giudiziario**: ordine del giudice o PM',
        '**Emergenza sanitaria**: notifica obbligatoria (es. malattie infettive)',
        '**Consiglio dell’Ordine**: segnalazione per procedimento disciplinare',
        '**Tutela del paziente**: rischio grave per sé o terzi',
        '**Consenso esplicito** del paziente (scritto o orale)',
        'In questi casi: rivelare **solo** quanto strettamente necessario',
      ],
    },
    {
      title: 'Responsabilità',
      icon: 'ShieldAlert',
      accent: 'orange',
      items: [
        '**Disciplinare**: sanzione FNOPI (ammonizione, sospensione, radiazione)',
        '**Civile**: risarcimento danni al paziente',
        '**Penale**: reato di violazione del segreto (art. 622 c.p.)',
        '**Contrattuale**: licenziamento per giusta causa',
        'Responsabilità **solidale** se più professionisti coinvolti',
        'L’inosservanza è **colpevole** anche se non c’è danno effettivo',
      ],
    },
    {
      title: 'Obblighi operativi',
      icon: 'CircleCheck',
      accent: 'green',
      items: [
        'Non discutere casi clinici in **luoghi pubblici** (mense, ascensori)',
        'Proteggere **cartelle** e dispositivi (password, schermi)',
        'Non condividere informazioni con **familiar**i non autorizzati',
        'Verificare l’**identità** di chi richiede informazioni',
        'Usare canali **sicuri** per comunicazioni (non WhatsApp personale)',
        'Formare il personale su **privacy by design**',
        'Registrare ogni accesso ai dati sanitari (log)',
      ],
    },
    {
      title: 'Consenso e limiti',
      icon: 'User',
      accent: 'teal',
      items: [
        'Il paziente può **autorizzare** la divulgazione a terzi',
        'Il consenso deve essere **libero, informato, specifico**',
        'Può essere **revocato** in qualsiasi momento',
        'Minori e incapaci: consenso del **tutore** o **genitore**',
        'DAT (Disposizioni Anticipate di Trattamento): rispetto delle volontà',
        'Il segreto **non impedisce** la comunicazione interna all’équipe',
      ],
    },
  ],
  keyPoints: [
    'Il segreto è **assoluto** salvo eccezioni legali precise',
    'La violazione è un **reato** e comporta sanzioni disciplinari, civili e penali',
    'L’infermiere deve **proteggere** i dati in ogni forma (fisica, digitale, orale)',
  ],
}

export default map
