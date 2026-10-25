import type { ProcedureMap } from '../../book/types'

const step = (id: string, alt: string, prompt: string) => ({ id: `meds-${id}`, alt, prompt, icon: 'Bandage' as const })

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'medicazione-semplice',
  chapter: 'procedure',
  title: 'Medicazione semplice',
  subtitle: 'Ferita chirurgica pulita: tecnica asettica e sorveglianza',
  icon: 'Bandage',
  status: 'bozza',
  sources: [
    'NICE NG125 — Surgical site infections: prevention and treatment (2019, agg. 2020)',
    'OMS — Global guidelines for the prevention of surgical site infection, 2ª ed. (2018)',
    'Saiani L., Brugnolli A. — Trattato di cure infermieristiche, Idelson-Gnocchi',
  ],
  materials: [
    { label: 'Guanti monouso e sterili', icon: 'Hand' },
    { label: 'Set sterile (pinze)', icon: 'Scissors' },
    { label: 'Garze sterili', icon: 'Bandage' },
    { label: 'NaCl 0,9% sterile', icon: 'Droplets' },
    { label: 'Antisettico (se indicato)', icon: 'FlaskConical' },
    { label: 'Medicazione adesiva sterile', icon: 'Sticker' },
    { label: 'Telino sterile', icon: 'Layers' },
    { label: 'Sacchetto rifiuti', icon: 'Trash2' },
  ],
  safety: [
    { text: 'Tecnica **asettica no-touch** (ANTT)', kind: 'ok' },
    { text: '**Igiene delle mani** prima e dopo, tra guanti sporchi e puliti', kind: 'ok' },
    { text: 'Prime **48 h**: detergere con **NaCl 0,9% sterile**', kind: 'ok' },
    { text: 'Non rinnovare senza motivo: medicazione **integra e asciutta** si lascia', kind: 'warn' },
    { text: 'Mai tornare da zona **sporca** a zona **pulita** con la stessa garza', kind: 'no' },
    { text: 'Febbre, pus, deiscenza: **avvisare il medico**', kind: 'alert' },
  ],
  steps: [
    {
      title: 'Preparare',
      items: ['Verificare prescrizione e **identità**', 'Spiegare, privacy, analgesia se serve', 'Piano di lavoro pulito'],
      illustration: step('preparare', 'Carrello con set sterile', 'nurse preparing a sterile dressing set on a clean trolley'),
    },
    {
      title: 'Rimuovere',
      items: ['Guanti **monouso**', 'Staccare **parallelo** alla cute, verso la ferita', 'Inumidire se adesa'],
      illustration: step('rimuovere', 'Rimozione della medicazione', 'gloved hands peeling off an old adhesive dressing from an abdominal wound'),
    },
    {
      title: 'Osservare',
      items: ['Margini **accostati**?', 'Rossore, edema, calore, **essudato**', 'Dolore, odore'],
      illustration: step('osservare', 'Ferita chirurgica suturata', 'clean sutured surgical incision on the abdomen'),
    },
    {
      title: 'Campo sterile',
      items: ['Igiene mani', 'Aprire il set **senza toccare** l’interno', 'Guanti **sterili** o pinze'],
      illustration: step('campo', 'Set sterile aperto', 'opened sterile dressing pack with forceps and gauze'),
    },
    {
      title: 'Detergere',
      items: ['Dalla zona **più pulita** alla più sporca', 'Lungo l’incisione, **dall’alto in basso**', '**1 garza = 1 passaggio**'],
      illustration: step('detergere', 'Detersione lungo l’incisione', 'forceps holding a saline-soaked gauze cleaning along a sutured incision'),
    },
    {
      title: 'Asciugare',
      items: ['Tamponare con garza sterile', 'Antisettico **solo** se previsto da protocollo', 'Lasciare asciugare'],
      illustration: step('asciugare', 'Garza che tampona', 'sterile gauze gently patting a surgical wound dry'),
    },
    {
      title: 'Coprire',
      items: ['Medicazione **sterile** adatta', 'Bordi oltre la ferita di **2–3 cm**', 'Senza tensione sulla cute'],
      illustration: step('coprire', 'Medicazione adesiva sterile', 'sterile adhesive island dressing covering an abdominal incision'),
    },
    {
      title: 'Documentare',
      items: ['Aspetto della ferita, essudato', 'Data del prossimo controllo', 'Smaltire i rifiuti'],
      illustration: step('documentare', 'Cartella infermieristica', 'nurse documenting wound assessment in a clinical chart'),
    },
  ],
  complications: [
    { label: 'Infezione del sito (ISC)', sub: 'di solito 3–7 giorni dopo' },
    { label: 'Deiscenza', sub: 'apertura dei margini' },
    { label: 'Ematoma', sub: 'raccolta di sangue' },
    { label: 'Sieroma', sub: 'raccolta di liquido sieroso' },
    { label: 'Dermatite da adesivo', sub: 'arrossamento, flittene' },
    { label: 'Contaminazione', sub: 'tecnica non asettica' },
    { label: 'Macerazione', sub: 'medicazione umida a lungo' },
    { label: 'Cicatrice ipertrofica', sub: 'o cheloide, tardiva' },
  ],
  nurseRole: [
    'Doccia possibile di norma **dopo 48 h** (NICE)',
    'Rinnovare se **bagnata, sporca** o staccata',
    'Valutare la ferita con criteri oggettivi (es. scala **ASEPSIS**)',
    'Rimozione punti / agrafes: **su prescrizione** (in genere 7–14 giorni)',
    'Educare: segni d’infezione da riferire, igiene, alimentazione',
  ],
}

export default map
