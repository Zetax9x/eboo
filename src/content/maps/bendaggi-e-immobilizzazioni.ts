import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'bendaggi-e-immobilizzazioni',
  chapter: 'procedure',
  title: 'Bendaggi e immobilizzazioni',
  subtitle: 'Fasciatura e stabilizzazione delle fratture',
  icon: 'Bandage',
  status: 'bozza',
  sources: [
    'Potter & Perry — Fondamenti di assistenza infermieristica, 9ª ed. (2021)',
    'Linee guida nazionali per la gestione delle lesioni cutanee (Ministero della Salute)',
    'Tortora & Derrick — Anatomia e fisiologia umana, 15ª ed. (2022)',
  ],
  materials: [
    { label: 'Bende elastiche', icon: 'Bandage' },
    { label: 'Gaze sterile', icon: 'Sticker' },
    { label: 'Tutori in gesso', icon: 'Bone' },
    { label: 'Stecche rigide', icon: 'Ruler' },
    { label: 'Nastro medico', icon: 'Tag' },
    { label: 'Guanti monouso', icon: 'Hand' },
    { label: 'Forbici', icon: 'Scissors' },
    { label: 'Pomata emolliente', icon: 'Droplet' },
  ],
  sites: {
    title: 'Sedi principali',
    illustration: {
      id: 'bendaggi-sedi',
      alt: 'Articolazioni per bendaggi',
      prompt: 'human body outline highlighting wrist, elbow, knee, and ankle joints',
      icon: 'Target',
    },
    items: [
      '**Mano/polso**: a 8 o spirale',
      '**Avambraccio**: spirale o a 8',
      '**Gamba/ginocchio**: spirale o a 8',
      '**Piede/caviglia**: a 8 o spirale',
    ],
  },
  safety: [
    { text: 'Valutare **circolazione** prima/dopo', kind: 'ok' },
    { text: 'Verificare **sensibilità** e movimento', kind: 'ok' },
    { text: '**Non stringere** troppo: rischio ischemia', kind: 'alert' },
    { text: 'Usare **gaze sterile** per ferite', kind: 'warn' },
    { text: '**Documentare** data, tipo, stato', kind: 'ok' },
  ],
  steps: [
    {
      title: 'Preparazione',
      items: ['Igiene mani, guanti', 'Spiegare procedura', 'Posizionare paziente'],
      icon: 'Package',
    },
    {
      title: 'Valutazione',
      items: ['Controllare **circolazione**', 'Verificare **sensibilità**', 'Documentare stato'],
      icon: 'Eye',
    },
    {
      title: 'Applicazione',
      items: ['Partire **distalmente**', 'Sovrapporre **50%**', 'Pressione **uniforme**'],
      icon: 'ListChecks',
    },
    {
      title: 'Fissaggio',
      items: ['Fissare con **nastro**', 'Verificare **stabilità**', 'Evitare pieghe'],
      icon: 'Bandage',
    },
    {
      title: 'Verifica',
      items: ['Rivalutare **circolazione**', 'Controllare **posizione** dita', 'Documentare'],
      icon: 'Eye',
    },
    {
      title: 'Istruzioni',
      items: ['Alzare l’**arto**', 'Segnalare **dolore**', 'Cambiare se **sporco**'],
      icon: 'ListChecks',
    },
  ],
  complications: [
    { label: 'Ischemia', sub: 'dolore, pallore, no polso' },
    { label: 'Edema', sub: 'gonfiore, tensione' },
    { label: 'Infezione', sub: 'rossore, pus' },
    { label: 'Lesione cutanea', sub: 'vesciche' },
    { label: 'Sindrome compartimentale', sub: 'dolore intenso' },
  ],
  nurseRole: [
    'Monitorare **circolazione**',
    'Cambiare se **sporco/allentato**',
    'Valutare **segnali d’allarme**',
    'Educare al **cambiamento**',
  ],
}

export default map
