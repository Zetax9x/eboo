import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'ipertensione-arteriosa',
  chapter: 'patologie',
  title: 'Ipertensione arteriosa',
  subtitle: 'Il “killer silenzioso”: classificazione ESC 2024, misurazione, terapia e danno d’organo',
  icon: 'Gauge',
  status: 'bozza',
  sources: [
    'ESC 2024 Guidelines for the management of elevated blood pressure and hypertension (Eur Heart J 2024)',
    'ESH 2023 Guidelines for the management of arterial hypertension (J Hypertens 2023)',
  ],
  definition:
    'Aumento persistente della pressione arteriosa: in ambulatorio **PA ≥ 140/90 mmHg** confermata in più misurazioni. Fattore di rischio maggiore per **ictus, infarto, scompenso e IRC**.',
  illustration: {
    id: 'ipertensione-arteriosa-misurazione',
    alt: 'Misurazione della pressione con sfigmomanometro al braccio',
    prompt: 'seated adult patient with arm resting at heart level, blood pressure cuff on upper arm, digital sphygmomanometer, cross-section of a thickened artery wall',
    icon: 'Gauge',
  },
  types: [
    { name: 'Non elevata', text: 'PA in ambulatorio **< 120/70 mmHg** (ESC 2024).' },
    { name: 'Elevata', text: '**120–139 / 70–89 mmHg**: terapia se rischio CV alto.' },
    { name: 'Ipertensione', text: '**≥ 140/90 mmHg**. Primaria (essenziale) nel **90–95%** dei casi.' },
    { name: 'Secondaria', text: 'Nefropatie, iperaldosteronismo, apnee notturne, farmaci (FANS, cortisonici).' },
  ],
  sections: [
    {
      title: 'Fattori di rischio',
      icon: 'Users',
      accent: 'orange',
      items: [
        '**Età**, familiarità, sesso maschile',
        'Eccesso di **sale**, alcol, fumo',
        '**Obesità**, sedentarietà, diabete',
        'Stress, apnee ostruttive nel sonno',
        'Farmaci: **FANS**, cortisonici, contraccettivi',
        'Di solito **asintomatica**: si scopre misurando',
      ],
    },
    {
      title: 'Misurazione corretta',
      icon: 'Stethoscope',
      accent: 'blue',
      items: [
        'Seduto, dopo **5 min di riposo**',
        'Braccio a livello del **cuore**, bracciale adatto',
        '**3 misure** a 1–2 min: media delle ultime 2',
        'Prima visita: **entrambe le braccia**',
        'Domicilio **≥ 135/85**, Holter **≥ 130/80**',
      ],
    },
    {
      title: 'Danno d’organo',
      icon: 'Target',
      accent: 'purple',
      items: [
        '**Cuore**: ipertrofia ventricolare sx, scompenso',
        '**Cervello**: ictus, demenza vascolare',
        '**Rene**: albuminuria, malattia renale cronica',
        '**Occhio**: retinopatia ipertensiva',
        '**Arterie**: aterosclerosi, aneurismi',
      ],
    },
    {
      title: 'Stile di vita',
      icon: 'Apple',
      accent: 'green',
      items: [
        'Sodio **≤ 2 g/die** (circa 5 g di sale)',
        'Dieta **mediterranea/DASH**, più potassio',
        'Attività aerobica **≥ 150 min/settimana**',
        'Calo ponderale, stop **fumo**, poco alcol',
        'Valido per tutti, anche con farmaci',
      ],
    },
    {
      title: 'Farmaci',
      icon: 'Pill',
      accent: 'teal',
      items: [
        'Prima linea: **ACE-inibitori/sartani**, **calcioantagonisti**, **diuretici tiazidici**',
        'Spesso subito **associazione** in pillola unica',
        '**Beta-bloccanti** se indicazione specifica',
        'Obiettivo: PAS **120–129 mmHg** se tollerata',
      ],
    },
    {
      title: 'Crisi ipertensive',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Emergenza**: PA molto alta + **danno d’organo acuto**',
        'Es. encefalopatia, edema polmonare, dissezione, SCA',
        'Riduzione **graduale** con farmaci ev in area critica',
        '**Urgenza**: PA molto alta senza danno acuto, terapia orale',
      ],
    },
  ],
  nursing: [
    'Misurare la PA con **tecnica standard** e documentare braccio, posizione, valori',
    'Educare all’**automisurazione domiciliare** e al diario pressorio',
    'Promuovere **aderenza** alla terapia: non sospendere se “la pressione è buona”',
    'Monitorare effetti collaterali: **ipotensione ortostatica**, tosse da ACE-i, edemi da calcioantagonisti',
    'Controllare **peso**, diuresi, potassio e creatinina con diuretici e ACE-i/sartani',
  ],
  redFlags: [
    'PA molto elevata con **cefalea intensa, confusione, deficit neurologici**',
    'Dolore toracico o dispnea acuta con PA alta: **avvisare subito** il medico',
    'Epistassi importante o PA **≥ 180/110** ricorrente: segnalare',
    'Evitare riduzioni brusche della PA: rischio di **ischemia** cerebrale e coronarica',
  ],
}

export default map
