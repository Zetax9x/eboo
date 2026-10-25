import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'sistema-nervoso-periferico-e-autonomo',
  chapter: 'anatomia',
  title: 'Sistema nervoso periferico e autonomo',
  subtitle: 'Nervi cranici, spinali e divisioni simpatica e parasimpatica',
  icon: 'Brain',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Guyton A.C., Hall J.E. — Fisiologia medica, Elsevier',
    'FNOPI — Codice deontologico e linee guida sulla valutazione neurologica',
  ],
  blocks: [
    {
      title: 'Sistema nervoso periferico (SNP)',
      accent: 'blue',
      icon: 'Brain',
      illustration: {
        id: 'snp-anatomia',
        alt: 'Sistema nervoso periferico con nervi cranici e spinali',
        prompt: 'human nervous system showing peripheral nerves extending from the brain and spinal cord to the limbs, blue and red nerve fibers',
        icon: 'Brain',
      },
      inset: {
        label: 'Struttura del nervo',
        illustration: {
          id: 'snp-nervo-struttura',
          alt: 'Sezione trasversale di un nervo periferico',
          prompt: 'cross-section of a peripheral nerve showing axons, myelin sheath, endoneurium, perineurium and epineurium',
          icon: 'Layers',
        },
      },
      bullets: [
        '**Nervi cranici** (12 paia) e **nervi spinali** (31 paia)',
        'I nervi spinali emergono dai forami intervertebrali',
        'Composti da **fibre sensoriali**, **motorie** e **autonome**',
        'Mielina prodotta da cellule di **Schwann**',
        'Recettori sensoriali: meccanici, termici, chimici, nocicettori',
      ],
    },
    {
      title: 'Nervi cranici',
      accent: 'purple',
      icon: 'Brain',
      illustration: {
        id: 'snp-nervi-cranici',
        alt: 'Nervi cranici visti dal basso',
        prompt: 'base of the human brain showing the twelve cranial nerves emerging from the brainstem and diencephalon, numbered 1 to 12',
        icon: 'Brain',
      },
      bullets: [
        '**I Olfattivo**: olfatto',
        '**II Ottico**: visione',
        '**III, IV, VI**: motricità oculare',
        '**V Trigemino**: masticazione e sensibilità facciale',
        '**VII Facciale**: mimica facciale, gusto',
        '**VIII Vestibolococleare**: udito e equilibrio',
        '**IX, X**: deglutizione, fonazione, gusto',
        '**XI Accessorio**: muscoli sternocleidomastoideo e trapezio',
        '**XII Ipocondrio**: motricità linguale',
      ],
    },
    {
      title: 'Nervi spinali',
      accent: 'teal',
      icon: 'Bone',
      illustration: {
        id: 'snp-nervi-spinali',
        alt: 'Nervi spinali che emergono dalla colonna vertebrale',
        prompt: 'human spine seen from behind with the spinal cord inside the vertebral canal and a pair of nerves leaving between every two vertebrae from the neck to the lower back',
        icon: 'Bone',
      },
      bullets: [
        '**31 paia**: 8 cervicali, 12 toracici, 5 lombari, 5 sacrali, 1 coccigeo',
        'Ogni nervo spinale ha una **radice anteriore** (motrice) e una **posteriore** (sensoriale)',
        'Formano i **plesso brachiale** e **lombosacrale**',
        'Dermatomi: aree cutanee innervate da un singolo nervo spinale',
        'Miomeri: gruppi muscolari innervati da un singolo nervo spinale',
      ],
    },
    {
      title: 'Sistema nervoso autonomo (SNA)',
      accent: 'orange',
      icon: 'Zap',
      bullets: [
        'Regola funzioni **involontarie**: cuore, viscere, ghiandole',
        'Due divisioni principali: **simpatica** e **parasimpatica**',
        'Effetti generalmente **antagonisti** ma complementari',
        'Neurotrasmettitori: **acetilcolina** e **noradrenalina**',
        'Vie efferenti a due neuroni: **pregangliare** e **postgangliare**',
      ],
    },
    {
      title: 'Divisione simpatica',
      accent: 'red',
      icon: 'Zap',
      illustration: {
        id: 'snp-simpatico',
        alt: 'Sistema nervoso simpatico con catena gangliare',
        prompt: 'sympathetic nervous system showing the thoracolumbar outflow, sympathetic chain ganglia, and nerve fibers to target organs',
        icon: 'Zap',
      },
      bullets: [
        'Origine: **midollo spinale T1-L2**',
        'Gangli: **catena simpatica** laterale alla colonna',
        'Neurotrasmettitore postgangliare: **noradrenalina** (tranne sudorazione)',
        'Effetti: **tachicardia**, **midriasi**, **broncodilatazione**',
        'Mobilizzazione energetica: **lipolisi**, **glicogenolisi**',
        'Vasocostrizione periferica, vasodilatazione muscolare',
      ],
    },
    {
      title: 'Divisione parasimpatica',
      accent: 'green',
      icon: 'Droplet',
      illustration: {
        id: 'snp-parasimpatico',
        alt: 'Sistema nervoso parasimpatico con nervi cranici e sacrali',
        prompt: 'side view of a human figure with nerves leaving the base of the brain and the lower end of the spine, reaching the eye, salivary glands, heart, lungs, stomach, intestines and bladder',
        icon: 'Droplet',
      },
      bullets: [
        'Origine: **midollo allungato** e **midollo sacrale S2-S4**',
        'Gangli: **vicini o dentro** l’organo bersaglio',
        'Neurotrasmettitore: **acetilcolina** (sia pre che postgangliare)',
        'Effetti: **bradicardia**, **miosi**, **broncocostrizione**',
        'Stimola peristalsi, secrezione gastrica, diuresi',
        'Rilasciamento muscolare liscio, contrazione muscolare liscio',
      ],
    },
  ],
  keyPoints: [
    '**SNP**: 12 nervi cranici + 31 nervi spinali',
    '**SNA simpatico**: T1-L2, noradrenalina, “lotta o fuga”',
    '**SNA parasimpatico**: cranio-sacrale, acetilcolina, “riposo e digestione”',
    '**Dermatomi**: mappa la sensibilità cutanea per nervo spinale',
  ],
}

export default map
