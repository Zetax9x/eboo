import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'igiene-delle-mani-i-5-momenti-oms',
  chapter: 'fondamenti',
  title: 'Igiene delle mani: i 5 momenti OMS',
  subtitle: 'I momenti critici per la prevenzione delle infezioni correlate all’assistenza (ICA)',
  icon: 'Hand',
  status: 'bozza',
  sources: [
    'OMS — My 5 Moments for Hand Hygiene (2009)',
    'Ministero della Salute — Raccomandazioni per la prevenzione delle infezioni correlate all’assistenza (2019)',
    'CDC — Guideline for Hand Hygiene in Health Care (2002, revisione 2024)',
  ],
  intro:
    'L’igiene delle mani è la **misura singola più efficace** per prevenire le infezioni correlate all’assistenza (ICA). I 5 momenti OMS indicano **quando** lavare o disinfettare le mani durante l’assistenza.',
  illustration: {
    id: 'hhy-5-momenti',
    alt: 'Infermiere che si lava le mani davanti a un paziente',
    prompt: 'nurse washing hands at a sink next to a patient bed, five small icons floating around',
    icon: 'Droplets',
  },
  columns: 2,
  blocks: [
    {
      title: 'I 5 Momenti OMS',
      icon: 'Target',
      accent: 'blue',
      items: [
        '**1. Prima di toccare** il paziente',
        '**2. Prima di un’azione asettica** (es. cateterismo, medicazione)',
        '**3. Dopo esposizione a fluidi corporei** (sangue, secrezioni)',
        '**4. Dopo aver toccato** il paziente',
        '**5. Dopo aver toccato** l’ambiente del paziente (lettino, barella, maniglie)',
      ],
    },
    {
      title: 'Tecnica di Lavaggio',
      icon: 'Droplets',
      accent: 'green',
      items: [
        'Durata minima: **40–60 secondi** con acqua e sapone',
        'Durata minima: **20–30 secondi** con soluzione idroalcolica (SIA)',
        'Coprire: palmo, dorso, spazi interdigitali, polpastrelli, polsi',
        'Asciugare con **panno monouso**',
        'Usare SIA solo se mani **non visibilmente sporche**',
        'Lavare con acqua e sapone se mani **sporche, viscide o dopo WC**',
      ],
    },
    {
      title: 'Quando è Obbligatoria',
      icon: 'ShieldCheck',
      accent: 'red',
      checks: [
        { text: 'Prima di ogni contatto con paziente o ambiente', kind: 'ok' },
        { text: 'Prima di procedure invasive o asettiche', kind: 'ok' },
        { text: 'Dopo contatto con fluidi corporei', kind: 'ok' },
        { text: 'Dopo rimozione di guanti', kind: 'ok' },
        { text: 'Tra un paziente e l’altro', kind: 'ok' },
        { text: 'Dopo aver toccato superfici del paziente', kind: 'ok' },
      ],
    },
    {
      title: 'Errori Comuni',
      icon: 'TriangleAlert',
      accent: 'orange',
      items: [
        'Lavare le mani **solo a fine turno**',
        'Dimenticare **polpastrelli e polsi**',
        'Usare SIA su mani **visibilmente sporche**',
        'Non lavare le mani **dopo aver tolto i guanti**',
        'Saltare il momento **dopo aver toccato l’ambiente**',
        'Considerare l’igiene delle mani **opzionale** in urgenza',
      ],
    },
    {
      title: 'Ruolo Infermieristico',
      icon: 'User',
      accent: 'purple',
      items: [
        'Praticare e **promuovere** l’igiene delle mani in équipe',
        'Monitorare l’**aderenza** al protocollo (audit)',
        'Garantire la **disponibilità** di SIA e lavandini',
        'Educare **pazienti e familiari** all’igiene delle mani',
        'Segnalare **mancanze** di materiali o formazione',
        'Inserire l’igiene delle mani nella **documentazione** assistenziale',
      ],
    },
    {
      title: 'Impatto Clinico',
      icon: 'Activity',
      accent: 'teal',
      items: [
        'Riduce le **ICA** del 30–50%',
        'Previene la diffusione di **MRSA, VRE, C. difficile**',
        'Diminuisce i **tempi di degenza** e i costi sanitari',
        'Migliora la **sicurezza del paziente** e del personale',
        'È un **indicatore di qualità** accreditato (Agenas)',
        'Obbligo deontologico (Codice FNOPI, art. 37)',
      ],
    },
  ],
  keyPoints: [
    'I 5 momenti: **Prima di toccare** → **Prima asettico** → **Dopo fluidi** → **Dopo toccare** → **Dopo ambiente**',
    'SIA: **20–30 s** | Acqua e sapone: **40–60 s** | Mani sporche: **solo acqua e sapone**',
  ],
}

export default map
