import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'fratture-e-frattura-di-femore',
  chapter: 'patologie',
  title: 'Fratture e frattura di femore',
  subtitle: 'Classificazione, gestione acuta, complicanze e assistenza infermieristica',
  icon: 'Bone',
  status: 'bozza',
  sources: [
    'AAOS — American Academy of Orthopaedic Surgeons: Fracture Care Guidelines',
    'NICE — NG213: Fractures and dislocations (2023)',
    'Ministero della Salute — Linee guida per la gestione delle fratture di femore (2022)',
  ],
  definition:
    'Interruzione della continuità ossea dovuta a trauma o fragilità. La **frattura di femore** è l’emergenza ortopedica più comune nell’anziano, con alto rischio di complicanze sistemiche.',
  illustration: {
    id: 'fratture-femore-anatomia',
    alt: 'Femore con frattura del collo e della diafisi',
    prompt: 'human thigh bone seen from the front, its rounded upper end sitting in the hip socket, a clean break across the narrow neck just below the rounded head',
    icon: 'Bone',
  },
  types: [
    { name: 'Collo del femore', text: 'Sottocapsulari (intracapsulari): rischio **necrosi avascolare**.' },
    { name: 'Trocanterica', text: 'Extracapsulare: sanguinamento abbondante, instabilità.' },
    { name: 'Diafisaria', text: 'Frattura del corpo del femore: spesso da trauma ad alta energia.' },
    { name: 'Intertrocanterica', text: 'Tra grande e piccolo trocantere: comune negli anziani.' },
  ],
  sections: [
    {
      title: 'Cause e fattori di rischio',
      icon: 'ShieldAlert',
      accent: 'purple',
      items: [
        '**Traumi ad alta energia**: incidenti stradali, cadute da altezza',
        '**Fragilità ossea**: osteoporosi, sarcopenia',
        '**Fattori di rischio**: età > 70 anni, sesso femminile, uso cortisonici',
        '**Cadute**: causa principale nelle fratture di femore negli anziani',
        '**Malattie metaboliche**: iperparatiroidismo, diabete',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Dolore intenso** alla coscia o all’inguine',
        '**Deformità** visibile, accorciamento e rotazione esterna dell’arto',
        '**Impossibilità** di appoggio o deambulazione',
        '**Edema** e ecchimosi locale',
        '**Shock ipovolemico** in fratture diafisarie (sanguinamento occulto)',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'Microscope',
      accent: 'blue',
      items: [
        '**Radiografia** AP e laterale: prima scelta',
        '**TC** se la radiografia è dubbia o per pianificazione chirurgica',
        '**Risonanza magnetica** se sospetta frattura da stress o occultata',
        '**Esami ematochimici**: emoglobina, coagulazione, elettroliti',
        '**Valutazione neurovascolare** distale prima e dopo la riduzione',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Riduzione** e immobilizzazione temporanea (trazione, tutore)',
        '**Chirurgia**: osteosintesi (chiodo endomidollare, placche) o protesi',
        '**Analgesia**: paracetamolo, oppioidi, blocchi periferici (femore)',
        '**Profilassi antitrombotica**: eparina a basso peso molecolare (EBPM)',
        '**Riabilitazione** precoce: mobilizzazione assistita, carico graduale',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Trombosi venosa profonda** ed embolia polmonare',
        '**Necrosi avascolare** della testa femorale (fratture intracapsulari)',
        '**Infezione** ossea o articolare (osteomielite)',
        '**Sindrome compartimentale** (rara, ma grave)',
        '**Pneumopatia** da stasi e dolore (atelettasia)',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        '**Parametri vitali** ogni 4 ore (o più frequente se instabile)',
        '**Pulsazioni periferiche**, sensibilità e motilità distale',
        '**Dolore**: scala NRS, efficacia analgesica',
        '**Diuresi** e bilancio idrico (rischio emorragia)',
        '**Segni di tromboembolismo**: dolore alla gamba, dispnea, cianosi',
      ],
    },
  ],
  nursing: [
    'Posizionare l’arto in **trazione** o immobilizzazione secondo protocollo',
    'Somministrare **analgesici** prima delle manovre (es. cambio bendaggio)',
    'Eseguire **mobilizzazione passiva** delle articolazioni non coinvolte',
    'Educare al **carico graduale** e all’uso di ausili (deambulatore, stampelle)',
    'Prevenire le **lesioni da pressione**: cambio posizione ogni 2 ore, materasso antidecubito',
  ],
  redFlags: [
    '**Dolore improvviso** e intenso con deformità: sospetta frattura, immobilizzare e chiamare il medico',
    '**Dispnea acuta**, dolore toracico, cianosi: sospetta **embolia polmonare**, attivazione emergenza',
    '**Perdita di sensibilità** o motilità distale: possibile compressione neurovascolare, valutazione urgente',
  ],
}

export default map
