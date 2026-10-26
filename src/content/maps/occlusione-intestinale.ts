import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'occlusione-intestinale',
  chapter: 'patologie',
  title: 'Occlusione intestinale',
  subtitle: 'Ostruzione del transito intestinale: cause, segni, diagnosi e assistenza',
  icon: 'Wind',
  status: 'bozza',
  sources: [
    'SIC — Linee guida per la gestione dell’occlusione intestinale',
    'SICUO — Società Italiana di Chirurgia d’Urgenza e d’Organo',
    'Schwartz’s Principles of Surgery (11th ed.)',
  ],
  definition:
    'Interruzione parziale o totale del transito del contenuto intestinale, con distensione prossimale e segni di **stasi** o **ischemia**.',
  illustration: {
    id: 'occlusione-intestinale-anatomia',
    alt: 'Intestino tenue e crasso con punto di occlusione',
    prompt: 'human small and large intestine side view, showing a blockage point with distended loops proximal to the obstruction, medical illustration style',
    icon: 'Wind',
  },
  types: [
    { name: 'Meccanica', text: 'Ostruzione fisica: **ernie**, aderenze, tumori, volvolo, intussuscezione.' },
    { name: 'Dinamica', text: 'Paralisi intestinale (**ileo paralitico**): post-operatoria, peritonite, farmaci oppioidi.' },
    { name: 'Semplice', text: 'Solo stasi; la parete intestinale è **vitale**.' },
    { name: 'Strangolativa', text: 'Compromissione vascolare: **ischemia**, necrosi, perforazione. Emergenza chirurgica.' },
  ],
  sections: [
    {
      title: 'Cause e fattori di rischio',
      icon: 'Layers',
      accent: 'purple',
      items: [
        '**Aderenze** post-chirurgiche: causa più frequente (60–70%)',
        '**Ernie** (inguinale, ombelicale, epigastrica)',
        'Neoplasie intestinali (colon, retto)',
        'Volvolo sigmoideo o cecale',
        'Corpi estranei, stercorali',
        'Ileo paralitico: post-operatorio, peritonite, ipokaliemia',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Dolore addominale** colico (meccanica) o continuo (strangolamento)',
        '**Vomito**: precoce e bilioso (alto), tardivo e fecaloide (basso)',
        '**Distensione addominale** e timpanismo',
        'Assenza di **flatulenza** e **alvo** (occlusione completa)',
        'Rumori intestinali **iperattivi** (meccanica) o **assenti** (paralitica)',
        'Sede alta: vomito intenso, disidratazione; Sede bassa: distensione marcata',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'Microscope',
      accent: 'blue',
      items: [
        '**RX addome in ortostatismo**: livelli idroaerei a gradinata',
        '**TC addome con contrasto**: gold standard; identifica sede e causa',
        'Emocromo: **leucocitosi** (infiammazione/strangolamento)',
        'Elettroliti: **ipokaliemia**, iponatriemia (vomito)',
        'Lattato ematico: elevato in caso di **ischemia**',
        'Ecografia addominale: utile in ernie e gravidanza',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Digiuno** e decompressione nasogastrica',
        'Reidratazione endovenosa e correzione elettrolitica',
        'Antibioticoterapia se segni di **strangolamento** o perforazione',
        '**Chirurgia**: indicata in strangolamento, perforazione, fallimento conservativo',
        'Riduzione manuale se ernia riducibile senza segni di strangolamento',
        'Monitoraggio continuo del dolore e dei segni vitali',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Strangolamento**: ischemia, necrosi, perforazione',
        '**Peritonite** e sepsi',
        'Sindrome compartimentale addominale',
        'Aspirazione polmonare da vomito',
        'Tromboembolia venosa (immobilizzazione)',
        'Sindrome da re-alimentazione (se malnutrito)',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        'Segni vitali ogni **1–2 ore** (shock, tachicardia)',
        'Bilancio idrico e **diuresi** (target ≥ 0,5 mL/kg/h)',
        'Output nasogastrico: quantità, colore, odore',
        'Esami ematochimici ripetuti: **lattato**, elettroliti, creatinina',
        'Valutazione del dolore e della distensione addominale',
        'Controllare la sede del catetere vescicale (se presente)',
      ],
    },
  ],
  nursing: [
    'Posizionare il paziente in **decubito laterale sinistro** o Fowler per ridurre il rischio di aspirazione',
    'Monitorare l’output nasogastrico e mantenere la decompressione efficace',
    'Somministrare fluidi EV secondo prescrizione e controllare la **diuresi**',
    'Valutare il dolore con scala numerica e riferire al medico variazioni acute',
    'Prevenire la **tromboembolia**: mobilizzazione passiva, calze antitrombiche',
    'Educare il paziente alla dieta post-operatoria e ai segni di recidiva',
  ],
  redFlags: [
    '**Dolore improvviso e intenso** con rigidità addominale: sospetto di **strangolamento** o perforazione',
    'Vomito **fecaloide** o ematemico: occlusione bassa o ischemia',
    'Tachicardia, ipotensione, **lattato > 4 mmol/L**: shock settico o emorragico',
  ],
}

export default map
