import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'sistema-di-conduzione-cardiaca',
  chapter: 'anatomia',
  title: 'Sistema di conduzione',
  subtitle: 'Come nasce e si propaga l’impulso elettrico del cuore',
  icon: 'Zap',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Silverthorn D.U. — Fisiologia umana. Un approccio integrato, Pearson',
  ],
  intro:
    'Cellule miocardiche specializzate generano impulsi **spontanei** (**automatismo**) e li conducono in sequenza: prima gli **atri**, poi, dopo una breve pausa, i **ventricoli**. Ogni impulso produce una contrazione coordinata. L’attività elettrica registrata in superficie è l’**ECG**; la contrazione meccanica si verifica col **polso**.',
  illustration: {
    id: 'conduzione-percorso',
    alt: 'Percorso dell’impulso dal nodo senoatriale alle fibre di Purkinje',
    prompt: 'human heart in frontal section with the conduction pathway highlighted: sinoatrial node, internodal pathways, atrioventricular node, bundle of His, right and left bundle branches, Purkinje fibres',
    icon: 'Zap',
  },
  columns: 3,
  blocks: [
    {
      title: 'Nodo senoatriale',
      icon: 'Zap',
      accent: 'orange',
      illustration: {
        id: 'conduzione-nodo-sa',
        alt: 'Nodo senoatriale nella parete dell’atrio destro',
        prompt: 'close-up of the right atrium wall near the superior vena cava with the sinoatrial node highlighted in yellow',
        icon: 'Zap',
      },
      items: [
        'Nell’**atrio dx**, vicino allo sbocco della **cava superiore**',
        '**Pacemaker fisiologico**: 60–100 impulsi/min',
        'Depolarizzazione spontanea in **fase 4** (corrente **If**, “funny”)',
        'L’impulso si diffonde agli atri → **onda P**',
        'Irrorato in genere dalla **coronaria dx**',
        'Malattia del nodo del seno → **bradicardia**, pause',
      ],
    },
    {
      title: 'Nodo atrioventricolare',
      icon: 'Timer',
      accent: 'purple',
      items: [
        'Nel **setto interatriale** basso (triangolo di Koch)',
        'Unico passaggio atri → ventricoli (scheletro fibroso isolante)',
        '**Rallenta** l’impulso (≈ 0,1 s): gli atri si svuotano prima',
        'Ritardo visibile come **intervallo PR** (0,12–0,20 s)',
        'Filtra impulsi troppo rapidi (es. in **fibrillazione atriale**)',
        'Pacemaker di riserva: **40–60 bpm**',
        'Rallentato da **digossina**, **β-bloccanti**, **verapamil**',
        'Conduzione alterata → **blocchi AV** di 1°, 2°, 3° grado',
      ],
    },
    {
      title: 'His–Purkinje',
      icon: 'GitBranch',
      accent: 'red',
      illustration: {
        id: 'conduzione-his-purkinje',
        alt: 'Fascio di His, branche e rete di Purkinje nei ventricoli',
        prompt: 'interventricular septum with the bundle of His dividing into right and left bundle branches and a fine Purkinje fibre network in the ventricular walls',
        icon: 'GitBranch',
      },
      items: [
        '**Fascio di His** → **branca dx** e **branca sx** (fascicoli anteriore e posteriore)',
        '**Fibre di Purkinje**: conduzione più veloce (2–4 m/s)',
        'Attivazione dall’**apice** verso la base → **QRS** stretto (< 0,12 s)',
        '**Blocco di branca**: QRS ≥ 0,12 s',
        'Pacemaker di riserva più lento: **20–40 bpm**',
      ],
    },
    {
      title: 'Gerarchia dei pacemaker',
      icon: 'Layers',
      accent: 'teal',
      checks: [
        { text: '**Nodo SA**: 60–100 bpm', kind: 'ok' },
        { text: '**Giunzione AV**: 40–60 bpm (ritmo di scappamento)', kind: 'warn' },
        { text: '**Ventricoli**: 20–40 bpm, QRS largo', kind: 'alert' },
      ],
      items: [
        'Comanda il pacemaker **più veloce**',
        'Se il nodo SA tace, subentra il centro successivo',
        'Un focus **ectopico** irritabile può prendere il comando (extrasistoli, tachicardie)',
        'Ritmo lento e QRS largo = scarsa gittata → **pacing**',
      ],
    },
    {
      title: 'Potenziale d’azione',
      icon: 'Activity',
      accent: 'blue',
      items: [
        '**Fase 0**: ingresso rapido di **Na⁺** (depolarizzazione)',
        '**Fase 1**: breve ripolarizzazione (uscita di **K⁺**); **Fase 2**: plateau da ingresso di **Ca²⁺**',
        '**Fase 3**: uscita di **K⁺** (ripolarizzazione)',
        '**Fase 4**: riposo ≈ −90 mV nei miocardiociti',
        '**Refrattarietà** lunga: il cuore non va in tetano',
        'K⁺ alterato → **aritmie** (iper/ipokaliemia)',
        'Cellule nodali: fase 0 da **Ca²⁺**, conduzione lenta',
        'Sull’ECG: QRS = depolarizzazione, **T** = ripolarizzazione ventricolare',
      ],
    },
    {
      title: 'Controllo autonomo',
      icon: 'Brain',
      accent: 'green',
      illustration: {
        id: 'conduzione-autonomo',
        alt: 'Fibre simpatiche e vagali che raggiungono il cuore',
        prompt: 'heart receiving sympathetic nerve fibres from the spinal cord and parasympathetic vagus nerve fibres from the brainstem',
        icon: 'Brain',
      },
      items: [
        '**Simpatico** (noradrenalina, β1): ↑ FC, ↑ conduzione AV, ↑ contrattilità',
        '**Vago** (acetilcolina): ↓ FC, ↓ conduzione AV',
        'A riposo prevale il **tono vagale**',
        '**Manovre vagali** e **adenosina** rallentano il nodo AV',
        '**Atropina** blocca il vago → ↑ FC',
      ],
    },
  ],
  keyPoints: [
    'Sequenza: **nodo SA → atri → nodo AV → His → branche → Purkinje → ventricoli**',
    'Effetti: **cronotropo** (FC) · **dromotropo** (conduzione) · **inotropo** (forza)',
  ],
}

export default map
