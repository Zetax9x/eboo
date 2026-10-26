import type { AlgorithmMap } from '../../book/types'

const map: AlgorithmMap = {
  kind: 'algorithm',
  id: 'shock-anafilattico',
  chapter: 'emergenze',
  title: 'Shock anafilattico',
  subtitle: 'Riconoscimento immediato e trattamento con adrenalina intramuscolare',
  icon: 'Siren',
  status: 'bozza',
  sources: [
    'EAACI — European Academy of Allergy and Clinical Immunology Guidelines on Anaphylaxis (2021)',
    'SIAIP — Società Italiana di Allergologia e Immunologia Clinica e delle Patologie Allergiche, Linee guida sulla gestione dell’anafilassi (2022)',
    'Ministero della Salute — Linee guida per la gestione dell’anafilassi (2020)',
  ],
  intro: 'L’anafilassi è una reazione allergica grave e rapida che può portare al collasso circolatorio e alla morte se non trattata immediatamente. L’adrenalina intramuscolare è il trattamento di prima linea.',
  steps: [
    {
      kind: 'start',
      title: 'Riconoscimento',
      text: 'Sospetta anafilassi se compaiono **2 o più sistemi** coinvolti (pelle, vie aeree, respiratorio, cardiovascolare, GI) dopo esposizione a un allergene',
    },
    {
      kind: 'alert',
      title: 'Chiama il 112/118',
      text: 'Comunica: “**Shock anafilattico**”, stato del paziente, allergene noto, farmaci somministrati',
    },
    {
      kind: 'action',
      title: 'Adrenalina IM',
      text: '**0,5 mg** (1:1000) IM nella **coscia anterolaterale** (adulto). Ripetere ogni **5 minuti** se non migliora',
    },
    {
      kind: 'action',
      title: 'Posizione e vie aeree',
      text: 'Paziente **supino** con gambe elevate (se non dispnea). Se dispnea: **seduto**. Aprire le vie aeree, ossigeno ad alto flusso',
    },
    {
      kind: 'action',
      title: 'Accesso venoso e fluidi',
      text: 'Due accessi venosi **calibrati**. Infusione rapida di **cristalloidi** (es. NaCl 0,9% o Ringer) **1–2 L** in 15–30 min',
    },
    {
      kind: 'decision',
      title: 'Miglioramento?',
      branches: [
        { label: 'Sì', text: 'Monitorare strettamente per **4–6 ore** (possibile anafilassi bifasica)' },
        { label: 'No', text: 'Ripetere adrenalina IM, valutare **infusione endovenosa** di adrenalina (0,5–1 µg/kg/min)' },
      ],
    },
    {
      kind: 'action',
      title: 'Farmaci di supporto',
      text: 'Antistaminici (H1 e H2) e corticosteroidi **dopo** l’adrenalina. Non sostituiscono l’adrenalina',
    },
    {
      kind: 'end',
      title: 'Osservazione e dimissione',
      text: 'Osservare almeno **4–6 ore** dopo la risoluzione dei sintomi. Prescrizione di **autoiniettore di adrenalina** e scheda di anafilassi',
    },
  ],
  side: [
    {
      title: 'Segni e sintomi',
      icon: 'Activity',
      accent: 'red',
      items: [
        '**Pelle**: orticaria, angioedema, prurito, eritema',
        '**Vie aeree**: dispnea, raucedine, stridore, tosse',
        '**Cardiovascolare**: ipotensione, tachicardia, sincope',
        '**GI**: nausea, vomito, dolore addominale, diarrea',
        '**Respiratorio**: broncospasmo, sibilanti, ipossia',
        '**Neurologico**: ansia, confusione, cianosi',
      ],
    },
    {
      title: 'Allergeni comuni',
      icon: 'Apple',
      accent: 'orange',
      items: [
        '**Alimenti**: arachidi, frutta a guscio, pesce, crostacei, uova, latte',
        '**Farmaci**: antibiotici (penicilline), AINE, anestetici, contrasti iodati',
        '**Veleni**: punture di imenotteri (ape, vespa), morso di ragno',
        '**Latte**: latte di mucca, latte di soia',
        '**Altro**: lattice, farmaci biologici, vaccini',
        '**Idrolati**: idrolati di carne, idrolati di pesce',
      ],
    },
    {
      title: 'Trattamento farmacologico',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Adrenalina IM**: 0,5 mg (1:1000) ogni 5–15 min se necessario',
        '**Adrenalina EV**: 0,5–1 µg/kg/min in infusione continua (se shock refrattario)',
        '**Antistaminici H1**: cetirizina 10 mg o difenidramina 50 mg IV/IM',
        '**Antistaminici H2**: famotidina 20 mg IV (se disponibile)',
        '**Corticosteroidi**: metilprednisolone 125 mg IV o idrocortisone 200 mg IV',
        '**Broncodilatatori**: salbutamolo 2,5–5 mg nebulizzato (se broncospasmo)',
      ],
    },
  ],
  keyPoints: [
    'L’**adrenalina IM** è il trattamento di prima linea: non ritardarla',
    'La **sede di iniezione** preferita è la coscia anterolaterale',
    'Osservare il paziente per **almeno 4–6 ore** per rilevare un’eventuale anafilassi bifasica',
    'Prescrivere un **autoiniettore di adrenalina** e una scheda di anafilassi al paziente',
  ],
}

export default map
