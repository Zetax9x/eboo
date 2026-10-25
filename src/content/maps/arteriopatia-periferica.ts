import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'arteriopatia-periferica',
  chapter: 'patologie',
  title: 'Arteriopatia periferica',
  subtitle: 'Malattia arteriosa cronica degli arti inferiori: classificazione, diagnosi e gestione',
  icon: 'Activity',
  status: 'bozza',
  sources: [
    'ESC — Guidelines on the diagnosis and treatment of peripheral arterial disease (2024)',
    'SICVE — Linee guida per la diagnosi e il trattamento delle arteriopatie periferiche',
    'AIFA — Raccomandazioni per la terapia dell’arteriopatia periferica',
  ],
  definition:
    'Malattia cronica progressiva delle arterie degli arti inferiori causata da **aterosclerosi**, che riduce il flusso ematico e provoca **claudicatio intermittente** o **ischemia critica**.',
  illustration: {
    id: 'ap-arterie-gamba',
    alt: 'Confronto tra arteria sana e arteria con placca aterosclerotica',
    prompt: 'cross-section of a healthy leg artery next to a diseased artery with atherosclerotic plaque narrowing the lumen, blood flow visualization',
    icon: 'Activity',
  },
  types: [
    { name: 'Claudicatio intermittente', text: 'Dolore muscolare agli arti inferiori durante la **marcia**, risolto dal riposo. Stadio I-II di Fontaine.' },
    { name: 'Ischemia critica', text: 'Dolore a riposo, ulcere o necrosi. Stadio III-IV di Fontaine. **Rischio amputazione**.' },
    { name: 'Acuta', text: 'Insorgenza improvvisa (< 2 settimane). Causa: embolia o trombosi in situ. **Emergenza**.' },
    { name: 'Cronica', text: 'Evoluzione lenta. Sintomi stabili o progressivi. Gestione medica e/o chirurgica.' },
  ],
  sections: [
    {
      title: 'Fattori di rischio',
      icon: 'ShieldAlert',
      accent: 'purple',
      items: [
        '**Diabete mellito** (soprattutto tipo 2)',
        '**Ipertensione arteriosa**',
        '**Fumo di sigaretta** (fattore principale)',
        '**Dislipidemia** (colesterolo LDL alto)',
        '**Età** > 65 anni e **sesso maschile**',
        'Storia di **malattia cardiovascolare** (infarto, ictus)',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Claudicatio intermittente**: dolore a coscia, coscia o polpaccio durante la camminata',
        'Dolore a riposo (stadio avanzato)',
        '**Ulcere** plantari o digitali, **necrosi** tissutale',
        'Pelle fredda, pallida o cianotica',
        'Assenza o riduzione dei **polso** periferici',
        'Caduta dei capelli, unghie spesse e fragili',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**Indice caviglio-brachiale (ICB)** < 0,9 (patologico)',
        'ICB **< 0,5**: ischemia critica',
        'ICB **> 1,3**: arterie calcificate (falso alto)',
        '**Eco-color-Doppler**: localizzazione e gravità dello stenosi',
        '**Angio-TC** o **Angio-RM**: pianificazione chirurgica',
        'Esami ematochimici: glicemia, profilo lipidico, funzionalità renale',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Modifica stile di vita**: smettere di fumare, esercizio fisico supervisionato',
        '**Antiaggreganti**: aspirina o clopidogrel',
        '**Statine**: per ridurre il rischio cardiovascolare',
        '**Antipertensivi** e **ipoglicemizzanti**',
        '**Cilostazolo**: per claudicatio intermittente (controindicato in scompenso)',
        'Intervento chirurgico: angioplastica, bypass o amputazione (casi gravi)',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Ischemia critica**: dolore a riposo, ulcere, gangrena',
        '**Amputazione** dell’arto o del dito',
        '**Trombosi arteriosa** acuta',
        '**Infezione** delle lesioni cutanee',
        '**Morte** per eventi cardiovascolari (infarto, ictus)',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        'Valutazione periodica dell’**ICB**',
        'Ispezione quotidiana della **pelle** e dei **polso**',
        'Controllo di **glicemia**, **pressione arteriosa** e **lipidi**',
        'Valutazione del **dolore** e della **distanza di claudicatio**',
        'Follow-up con **angiologo** o **vascolare**',
      ],
    },
  ],
  nursing: [
    'Educare al **riconoscimento** dei sintomi e alla **prevenzione** delle lesioni',
    'Promuovere il **cessazione del fumo** e l’**attività fisica** regolare',
    'Ispezionare gli **arti inferiori** per lesioni, infezioni o cambiamenti di colore',
    'Somministrare i farmaci secondo prescrizione e monitorare gli **effetti collaterali**',
    'Preparare il paziente per **interventi diagnostici** o **chirurgici**',
  ],
  redFlags: [
    '**Dolore a riposo** o **ulcere** non cicatrizzanti: segnalare subito al medico',
    '**Pelle fredda, pallida o cianotica** con assenza di polso: **emergenza**',
    '**Dolore improvviso** e intenso all’arto: sospetto di **trombosi acuta**, avvisare il team',
  ],
}

export default map
