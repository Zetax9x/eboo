import type { RhythmMap } from '../../book/types'

const map: RhythmMap = {
  kind: 'rhythm',
  id: 'tachicardia-sinusale',
  chapter: 'ecg',
  title: 'Tachicardia sinusale',
  subtitle: 'Risposta del cuore a uno stimolo: si cura la causa, non la frequenza',
  icon: 'HeartPulse',
  status: 'bozza',
  sources: [
    'ERC 2025 — Linee guida per la rianimazione: Advanced Life Support (algoritmo tachicardia)',
    'ESC 2019 — Guidelines for the management of patients with supraventricular tachycardia',
    'Hampton J. — ECG facile, Elsevier',
  ],
  rhythm: 'sinus-tachy',
  stripLabel: 'Tachicardia sinusale · FC ≈ 125/min',
  features: [
    { label: 'Frequenza', value: '**> 100/min** (strip: RR = 12 mm → **≈ 125/min**)' },
    { label: 'Ritmo', value: '**Regolare**; varia con respiro e attività' },
    { label: 'Onde P', value: '**Presenti**, positive in DII, prima di ogni QRS' },
    { label: 'PR', value: 'Normale, può accorciarsi (strip **0,14 s**)' },
    { label: 'QRS', value: '**Stretto** (< 0,12 s)' },
    { label: 'Esordio', value: '**Graduale**, fine graduale (≠ TSV parossistica)' },
  ],
  sections: [
    {
      title: 'Cause (da cercare sempre)',
      icon: 'Layers',
      accent: 'purple',
      items: [
        '**Febbre**, sepsi, dolore, ansia, sforzo fisico',
        '**Ipovolemia**: emorragia, disidratazione, shock',
        '**Ipossia**, anemia, **embolia polmonare**',
        'Scompenso cardiaco, ipotensione',
        '**Ipertiroidismo**, ipoglicemia, astinenza da alcol',
        '**Farmaci/sostanze**: salbutamolo, adrenalina, caffeina, nicotina, cocaina',
      ],
    },
    {
      title: 'Come distinguerla',
      icon: 'Target',
      accent: 'blue',
      items: [
        'Raramente supera **(220 − età)** /min',
        'Oltre **150/min** a riposo: sospettare **TSV** o flutter 2:1',
        'Con FC alta le **P** possono fondersi con la T precedente',
        'Manovre vagali: **rallenta** gradualmente, non si interrompe',
        'TSV: esordio e fine **improvvisi**, FC fissa',
        'In dubbio: **ECG a 12 derivazioni** e confronto con tracciati precedenti',
      ],
    },
    {
      title: 'Conseguenze',
      icon: 'Eye',
      accent: 'orange',
      items: [
        'Diastole più breve: **meno riempimento**',
        'Aumento del **consumo di O₂** del miocardio',
        'Rischio di **ischemia** nel coronaropatico',
        'Palpitazioni, dispnea, astenia',
        'Persistente per settimane: rischio di **cardiomiopatia** da tachicardia',
        'Nell’anziano: possibile **scompenso** o confusione',
      ],
    },
    {
      title: 'Trattamento',
      icon: 'Pill',
      accent: 'green',
      items: [
        'Trattare la **causa**: liquidi, antipiretici, analgesia, O₂ se ipossia',
        '**Non** usare la cardioversione',
        'Evitare di “abbassare” la FC di compenso (es. nello **shock**)',
        'Beta-bloccanti solo **su prescrizione** e causa nota',
        'Ipovolemia: **riempimento volemico** secondo prescrizione',
        'Sospendere/ridurre farmaci **simpaticomimetici** se possibile',
      ],
    },
  ],
  nurseRole: [
    'Rilevare **FC**, PA, FR, SpO₂, **temperatura**, dolore (NRS)',
    'Valutare **bilancio idrico**, diuresi, perdite ematiche',
    'ECG a 12 derivazioni per confermare l’origine **sinusale**',
    'Rivedere la terapia in corso (broncodilatatori, sostanze)',
    'Ridurre l’ansia: ambiente tranquillo, **spiegare**',
  ],
  redFlags: [
    'Tachicardia con **ipotensione**: possibile shock',
    '**Tachicardia + dispnea** improvvisa + dolore toracico: embolia polmonare?',
    'FC fissa **≈ 150/min** che non varia: flutter o TSV',
    'Tachicardia in **sepsi** con lattati elevati',
  ],
}

export default map
