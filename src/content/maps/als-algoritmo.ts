import type { AlgorithmMap } from '../../book/types'

const map: AlgorithmMap = {
  kind: 'algorithm',
  id: 'als-algoritmo',
  chapter: 'emergenze',
  title: 'ALS: algoritmo',
  subtitle: 'Supporto vitale avanzato: gestione dell’arresto cardiaco secondo le linee guida ERC 2021',
  icon: 'HeartPulse',
  status: 'bozza',
  sources: [
    'ERC — European Resuscitation Council Guidelines 2021 (Advanced Life Support)',
    'IRC — Italian Resuscitation Council, linee guida nazionali',
  ],
  steps: [
    { kind: 'start', title: 'Riconoscimento e attivazione', text: 'Conferma arresto cardiaco (assenza di coscienza e respiro), attiva il **112/118** e fai portare il **DAE**' },
    { kind: 'action', title: 'RCP di alta qualità', text: 'Compressioni **100–120/min**, profondità **5–6 cm**, rilascio completo, minimizza le interruzioni (< 10 s)' },
    { kind: 'action', title: 'Ventilazione e O₂', text: 'Ventilare con **11–12 atti/min** (rapporto 30:2 se singolo soccorritore, asincrono se due). Usare **O₂ al 100%**' },
    { kind: 'decision', title: 'Ritmo defibrillabile?', text: 'Analizza con DAE o monitor', branches: [
      { label: 'Sì (VF/VT senza polso)', text: '**1 shock** (200 J biphasic), poi **RCP 2 min**' },
      { label: 'No (PEA/Asistole)', text: '**Nessun shock**, continua **RCP 2 min**' },
    ] },
    { kind: 'action', title: 'Accesso venoso e farmaci', text: 'Instaura via **venosa centrale** o **periferica**. Se non disponibile, via **endotracheale** o **intraossea**' },
    { kind: 'action', title: 'Farmaci in sequenza', text: '**Adrenalina** 1 mg IV ogni **3–5 min**. Se VF/VT persistente dopo 3 shock: **Amiodarone** 300 mg IV' },
    { kind: 'decision', title: 'ROSC?', text: 'Ripresa di attività cardiaca spontanea (polso, pressione, respiro)', branches: [
      { label: 'Sì', text: 'Passa alla **fase post-arresto** (vedi riquadro a destra)' },
      { label: 'No', text: 'Continua il ciclo: **RCP 2 min** → Shock/Adrenalina' },
    ] },
    { kind: 'end', title: 'Terminazione', text: 'Solo su indicazione del medico o dopo **30 min** di RCP senza ROSC (criteri variabili)' },
  ],
  side: [
    {
      title: 'Farmaci ALS',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Adrenalina**: 1 mg IV/IO ogni **3–5 min** (non diluita)',
        '**Amiodarone**: 300 mg IV dopo il **3° shock** per VF/VT refrattaria',
        'Seconda dose Amiodarone: **150 mg** se VF/VT persiste',
        'Lidocaina: alternativa all’Amiodarone (1–1,5 mg/kg)',
        'Magnesio: solo per **torsione di punta** (2 g IV)',
        'Nessun farmaco sostituisce la **RCP** e lo **shock**',
      ],
    },
    {
      title: 'Causa reversibile (4H 4T)',
      icon: 'TriangleAlert',
      accent: 'orange',
      items: [
        '**Ipovolemia**: emorragia, disidratazione',
        '**Ipossia**: polmonite, embolia, pneumotorace',
        '**Ipokaliemia** / **Iperkaliemia**: squilibri elettrolitici',
        '**Ipotermia**: T < 30 °C',
        '**Tossici**: farmaci, droghe, CO',
        '**Trombo**: embolia polmonare, infarto',
        '**Tensione**: pneumotorace a tensione',
        '**Tamponamento**: pericardico',
      ],
    },
    {
      title: 'Post-arresto (ROSC)',
      icon: 'Monitor',
      accent: 'blue',
      items: [
        '**O₂ target**: SpO₂ **94–98%** (evitare iperossia)',
        '**Ventilazione**: EtCO₂ **35–45 mmHg**',
        '**Pressione**: MAP **≥ 65 mmHg** (evitare ipertensione)',
        '**Temperatura**: Targeted Temperature Management (32–36 °C)',
        '**ECG 12 derivazioni**: entro **10 min** per escludere STEMI',
        '**Glicemia**: target **140–180 mg/dL**',
        '**Neuroprognosi**: non prima di **72 h**',
      ],
    },
  ],
  keyPoints: [
    'La **RCP di alta qualità** è la priorità assoluta',
    'Shock precoce per **VF/VT senza polso**',
    'Adrenalina **1 mg** ogni **3–5 min** per tutti gli arresti',
    'Cerca e tratta le **cause reversibili** (4H 4T)',
  ],
}

export default map
