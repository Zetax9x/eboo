import type { RhythmMap } from '../../book/types'

const map: RhythmMap = {
  kind: 'rhythm',
  id: 'tachicardia-sopraventricolare',
  chapter: 'ecg',
  title: 'Tachicardia sopraventricolare',
  subtitle: 'Tachicardia parossistica a QRS stretto: esordio e fine improvvisi',
  icon: 'Zap',
  status: 'bozza',
  sources: [
    'ESC 2019 — Guidelines for the management of patients with supraventricular tachycardia',
    'ERC 2025 — Linee guida per la rianimazione: Advanced Life Support (algoritmo tachicardia)',
    'Hampton J. — ECG facile, Elsevier',
  ],
  rhythm: 'svt',
  stripLabel: 'Tachicardia sopraventricolare parossistica · FC ≈ 190/min',
  features: [
    { label: 'Frequenza', value: '**150–250/min** (strip: RR 8 mm → **≈ 190/min**)' },
    { label: 'Ritmo', value: '**Regolare**, FC fissa' },
    { label: 'Onde P', value: '**Non visibili** (nel QRS) o retrograde dopo il QRS' },
    { label: 'QRS', value: '**Stretto** (< 0,12 s)' },
    { label: 'Esordio', value: '**Improvviso**, fine improvvisa (parossistica)' },
  ],
  sections: [
    {
      title: 'Tipi (rientro)',
      icon: 'RefreshCw',
      accent: 'purple',
      items: [
        '**TRNAV** (rientro nodale): la più frequente, spesso nella donna giovane',
        '**TRAV** (rientro AV): via accessoria, es. **Wolff-Parkinson-White**',
        'WPW a riposo: **PR corto** + onda **delta**',
        'Tachicardia atriale focale (meno frequente)',
        'Scatenanti: caffeina, alcol, stress, sforzo',
      ],
    },
    {
      title: 'Sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Palpitazioni** rapide, regolari, “a interruttore”',
        'Pulsazioni al collo (“**segno della rana**”)',
        'Dispnea, ansia, vertigini',
        '**Poliuria** dopo l’episodio',
        'Raramente sincope o ipotensione',
        'Episodi da minuti a ore, **ricorrenti**',
      ],
    },
    {
      title: 'Terapia (stabile)',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Manovre vagali**: Valsalva modificata (soffiare, poi supino a gambe sollevate)',
        '**Massaggio carotideo** solo dal medico, escluso soffio carotideo',
        '**Adenosina** in bolo rapido (6 mg, poi 12 mg) su prescrizione',
        'In alternativa: verapamil o beta-bloccante EV',
        'Recidive: **ablazione** transcatetere',
      ],
    },
    {
      title: 'Paziente instabile',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        'Segni: **shock**, sincope, ischemia, scompenso',
        '**Cardioversione elettrica sincronizzata** (ERC)',
        '**Sedazione**/analgesia se cosciente',
        'Fino a **3 tentativi**, poi antiaritmico secondo protocollo',
        'Se il paziente perde il polso: **algoritmo ALS**',
        'Dopo la conversione: ECG a 12 derivazioni',
      ],
    },
  ],
  nurseRole: [
    'Monitor, **ECG a 12 derivazioni** prima e dopo la conversione',
    'Accesso venoso di **grosso calibro** in vena antecubitale',
    'Adenosina: bolo rapido + **flush 20 ml** di SF; registrare la striscia',
    'Avvisare il paziente: **senso di morte imminente**, flush, breve pausa',
    'Tenere pronto il **defibrillatore**',
  ],
  redFlags: [
    '**Ipotensione**, alterazione della coscienza, dolore toracico',
    'QRS **largo**: trattare come TV fino a prova contraria',
    'Tachicardia **irregolare** a QRS largo (FA in WPW): rischio FV',
    'Adenosina: cautela/controindicazione nell’**asma** grave',
  ],
}

export default map
