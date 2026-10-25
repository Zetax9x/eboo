import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'eparina-e-monitoraggio',
  chapter: 'farmacologia',
  title: 'Eparina e monitoraggio',
  subtitle: 'Confronto tra eparina non frazionata (ENF) e eparina a basso peso molecolare (EBPM): dosi, monitoraggio e gestione',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'IST (IST) — Linee guida per la profilassi e il trattamento della trombosi venosa profonda e dell’embolia polmonare',
    'ESC — Guidelines on the management of atrial fibrillation (2020)',
    'AIFA — Scheda tecnica eparina sodica e enoxaparina sodica',
  ],
  intro: 'L’eparina è un anticoagulante ad azione rapida, reversibile con protamina. La scelta tra ENF ed EBPM dipende dal contesto clinico, dalla funzionalità renale e dalla necessità di monitoraggio.',
  tableTitle: 'Confronto tra ENF ed EBPM',
  tableIcon: 'Droplet',
  columns: ['Parametro', 'Eparina non frazionata (ENF)', 'Eparina a basso peso molecolare (EBPM)'],
  widths: [1.2, 2, 2],
  rows: [
    ['Meccanismo d’azione', 'Attiva l’antitrombina III, inibendo la trombina (IIa) e il fattore Xa', 'Attiva l’antitrombina III, inibendo prevalentemente il fattore Xa'],
    ['Somministrazione', 'EV continua o SC', 'SC (profilassi e trattamento)'],
    ['Durata d’azione', 'Breve (4–6 ore)', 'Prolungata (12–24 ore)'],
    ['Monitoraggio', 'aPTT (target 1,5–2,5 volte il controllo)', 'Generalmente non necessario; anti-Xa in casi specifici'],
    ['Reversibilità', 'Completa con protamina', 'Parziale con protamina'],
    ['Rischio di OSTE', 'Basso', 'Più alto (dose dipendente)'],
    ['Rischio di trombocitopenia (HIT)', 'Alto (tipo II)', 'Basso (tipo II)'],
    ['Uso in gravidanza', 'Sì (non attraversa la placenta)', 'Sì (preferita in gravidanza)'],
    ['Funzionalità renale', 'Sicura in insufficienza renale', 'Accumulo in IR; aggiustare dose o evitare'],
  ],
  notes: [
    {
      title: 'Monitoraggio ENF',
      icon: 'TestTube',
      accent: 'blue',
      items: [
        'aPTT: target **1,5–2,5** volte il valore di controllo',
        'Misurare a **6 ore** dall’inizio o dal cambio di dose',
        'Ricalibrare la pompa ogni **6 ore** fino a stabilizzazione',
        'Controllare **piastrine** a 5–10 giorni per HIT',
        'Hemoglobina e ematocrito: monitoraggio emorragie',
      ],
    },
    {
      title: 'Monitoraggio EBPM',
      icon: 'FlaskConical',
      accent: 'green',
      items: [
        'Generalmente **non serve** monitoraggio di routine',
        'Anti-Xa: target **0,6–1,0 UI/mL** (trattamento) o **0,3–0,7 UI/mL** (profilassi)',
        'Misurare **4 ore** dopo la dose SC',
        'Indicato in: obesità (BMI > 40), IR (ClCr < 30), gravidanza, bambini',
        'Controllare **piastrine** per HIT',
      ],
    },
    {
      title: 'Gestione emorragie',
      icon: 'Siren',
      accent: 'red',
      items: [
        'ENF: sospendere infusione, somministrare **protamina** (1 mg per ogni 100 UI di eparina nelle ultime 8 ore)',
        'EBPM: sospendere dose, protamina **parziale** (50% della dose di eparina)',
        'Valutare **aPTT** e **anti-Xa** per guidare la protamina',
        'Trasfusione di piastrine se HIT con emorragia',
        'Monitoraggio stretto per 24–48 ore',
      ],
    },
  ],
  keyPoints: [
    'L’ENF è preferibile in **insufficienza renale severa** e in **chirurgia cardiaca**',
    'L’EBPM è preferibile in **gravidanza** e per **profilassi ambulatoriale**',
    'La **HIT** (trombocitopenia indotta da eparina) è più frequente con ENF: monitorare piastrine',
  ],
}

export default map
