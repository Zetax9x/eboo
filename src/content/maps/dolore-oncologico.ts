import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'dolore-oncologico',
  chapter: 'specialistica',
  title: 'Dolore oncologico',
  subtitle: 'Valutazione, classificazione e gestione multimodale',
  icon: 'HeartPulse',
  status: 'bozza',
  sources: [
    'OMS — Three-step analgesic ladder (1986, revisione 2018)',
    'AIFA — Linee guida per la terapia del dolore in oncologia',
    'Fondazione A.I.R.C. — Guida al dolore oncologico',
  ],
  intro:
    'Il dolore è il **quinto segno vitale**. Nella neoplasia può essere somatico, viscerale, neuropatico o psicogeno. La gestione richiede un approccio **multimodale** e personalizzato.',
  illustration: {
    id: 'dolore-oncologico-valutazione',
    alt: 'Infermiere che valuta il dolore con una scala numerica',
    prompt: 'nurse holding a clipboard with a pain scale, talking to a patient in a hospital bed',
    icon: 'ClipboardCheck',
  },
  columns: 2,
  blocks: [
    {
      title: 'Classificazione del dolore',
      icon: 'Layers',
      accent: 'purple',
      items: [
        '**Somatico**: muscoli, ossa, pelle (localizzato, acuto)',
        '**Viscerale**: organi interni (diffuso, sordo, crampiforme)',
        '**Neuropatico**: lesione o compressione nervosa (bruciante, scossa)',
        '**Psicogeno**: ansia, depressione, paura (difficile da localizzare)',
        '**Misto**: combinazione di più tipi (frequente in fase avanzata)',
      ],
    },
    {
      title: 'Valutazione del dolore',
      icon: 'Gauge',
      accent: 'blue',
      items: [
        '**Scala NRS**: 0-10 (0 = nessun dolore, 10 = massimo)',
        '**Scala VAS**: linea da 0 a 10 cm da segnare',
        '**Scala FACES**: faccine (per bambini o difficoltà verbali)',
        '**Punti chiave**: sede, intensità, durata, fattori scatenanti',
        '**Documentare** ogni valutazione nella cartella infermieristica',
        '**Rivalutare** 30-60 min dopo somministrazione analgesico',
      ],
    },
    {
      title: 'Scala analgesica OMS',
      icon: 'Route',
      accent: 'green',
      items: [
        '**Step 1**: dolore lieve (NRS 1-3) → Paracetamolo, FANS',
        '**Step 2**: dolore moderato (NRS 4-6) → Opioidi deboli (tramadolo, codeina)',
        '**Step 3**: dolore severo (NRS 7-10) → Opioidi forti (morfina, ossicodone)',
        '**Principio**: "per os, per clock, per patient, by the ladder"',
        '**Titolazione**: adattare la dose al singolo paziente',
        '**Non esiste** un tetto massimo di dose per la morfina',
      ],
    },
    {
      title: 'Farmaci analgesici',
      icon: 'Pill',
      accent: 'teal',
      items: [
        '**Paracetamolo**: max 3-4 g/die (attenzione epatopatie)',
        '**FANS**: ibuprofene, ketoprofene (rischio gastrointestinale)',
        '**Opioidi deboli**: tramadolo, codeina (effetti sedativi)',
        '**Opioidi forti**: morfina, ossicodone, fentanile (patch)',
        '**Adiuvanti**: anticonvulsivanti (gabapentin), cortisonici, antidepressivi',
        '**Via di somministrazione**: orale, transdermica, sottocutanea, epidurale',
      ],
    },
    {
      title: 'Effetti collaterali',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        '**Stipsi**: quasi sempre presente con oppioidi → lassativi',
        '**Nausea/vomito**: spesso transitorio (prime 48-72h)',
        '**Sedazione**: più marcata nelle prime 24-48h',
        '**Prurito**: da istamina (morfina) o allergia',
        '**Retenzione urinaria**: soprattutto in anziani e prostatici',
        '**Tolleranza**: aumento necessità di dose (non è dipendenza)',
      ],
    },
    {
      title: 'Ruolo infermieristico',
      icon: 'Hand',
      accent: 'orange',
      items: [
        '**Valutare** il dolore ad ogni turno e dopo ogni intervento',
        '**Somministrare** analgesici "per clock" (a orari fissi)',
        '**Monitorare** effetti collaterali e risposta terapeutica',
        '**Educare** paziente e famiglia alla terapia del dolore',
        '**Riconoscere** segnali di dolore non verbale (espressioni, postura)',
        '**Collaborare** con équipe per adattamento terapia',
      ],
    },
    {
      title: 'Dolore in fase terminale',
      icon: 'ShieldAlert',
      accent: 'navy',
      checks: [
        { text: '**Sedazione palliativa** per sintomi refrattari', kind: 'warn' },
        { text: '**Via sottocutanea** se non possibile via orale', kind: 'ok' },
        { text: '**Gestione della stipsi** con lassativi osmotici', kind: 'ok' },
        { text: '**Comunicazione** empatica con paziente e famiglia', kind: 'ok' },
        { text: '**Rispetto** della volontà del paziente (L. 219/2017)', kind: 'ok' },
        { text: '**Documentazione** accurata di dosi e risposte', kind: 'ok' },
      ],
    },
  ],
  keyPoints: [
    'Il dolore **va sempre creduto**: "se il paziente dice di avere dolore, ha dolore"',
    'La **stipsi** da oppioidi non crea tolleranza: usare sempre lassativo',
    '**Non esiste** dipendenza psicologica se la dose è adeguata al dolore',
  ],
}

export default map
