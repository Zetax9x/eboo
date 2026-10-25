import type { RhythmMap } from '../../book/types'

const map: RhythmMap = {
  kind: 'rhythm',
  id: 'blocchi-atrioventricolari',
  chapter: 'ecg',
  title: 'Blocchi atrioventricolari',
  subtitle: 'Dal I al III grado: quando l’impulso atriale non arriva ai ventricoli',
  icon: 'Ban',
  status: 'bozza',
  sources: [
    'ESC 2021 — Guidelines on cardiac pacing and cardiac resynchronization therapy',
    'ERC 2025 — Linee guida per la rianimazione: Advanced Life Support (algoritmo bradicardia)',
    'Hampton J. — ECG facile, Elsevier',
  ],
  rhythm: 'bav3',
  stripLabel: 'BAV di III grado (completo) · P ≈ 94/min, QRS ≈ 40/min',
  features: [
    { label: 'Frequenza', value: 'Atriale **≈ 94/min**; ventricolare **≈ 40/min**' },
    { label: 'Ritmo', value: 'P regolari e QRS regolari, ma **indipendenti**' },
    { label: 'Onde P', value: 'Più numerose dei QRS, alcune **dentro** QRS o T' },
    { label: 'PR', value: '**Variabile**: nessun rapporto P–QRS (dissociazione AV)' },
    { label: 'QRS', value: '**Largo**: ritmo di scappamento **ventricolare**' },
  ],
  sections: [
    {
      title: 'I e II grado',
      icon: 'Layers',
      accent: 'purple',
      items: [
        '**I grado**: PR **> 0,20 s** costante, ogni P condotta',
        '**Mobitz 1** (Wenckebach): PR si **allunga** fino a una P bloccata',
        'Mobitz 1: di solito benigno, sede **nodale**',
        '**Mobitz 2**: PR **costante**, P bloccate all’improvviso',
        'Mobitz 2: sede sotto-nodale, rischio di **BAV completo**',
        '**BAV 2:1**: tipo non distinguibile (1 P su 2 condotta)',
      ],
    },
    {
      title: 'III grado: scappamento',
      icon: 'GitBranch',
      accent: 'blue',
      items: [
        'Atri e ventricoli battono **ciascuno per conto proprio**',
        '**Giunzionale**: QRS stretto, **40–60/min**, più stabile',
        '**Ventricolare**: QRS largo, **20–40/min**, instabile',
        'Rischio di **asistolia** e crisi di **Adams-Stokes**',
        'Bassa portata: ipotensione, confusione, sincope',
      ],
    },
    {
      title: 'Cause',
      icon: 'Layers',
      accent: 'orange',
      items: [
        '**IMA inferiore** (spesso transitorio) o anteriore (prognosi peggiore)',
        '**Farmaci**: beta-bloccanti, verapamil/diltiazem, **digossina**, amiodarone',
        'Degenerazione del sistema di conduzione (**anziano**)',
        '**Iperkaliemia**, ipotermia, ipotiroidismo',
        'Malattia di **Lyme**, miocarditi, chirurgia valvolare',
        'Tono **vagale** elevato (I grado, Mobitz 1 nell’atleta)',
      ],
    },
    {
      title: 'Trattamento',
      icon: 'Pill',
      accent: 'green',
      items: [
        'I grado e Mobitz 1 asintomatici: **osservazione**',
        'Sospendere i farmaci **bradicardizzanti** se causa',
        'Instabile: **atropina** secondo protocollo ALS',
        'Mobitz 2 e III grado: spesso inefficace → **pacing transcutaneo**',
        'Poi pacing transvenoso e **pacemaker** definitivo',
        'IMA inferiore: il blocco spesso **regredisce**',
      ],
    },
  ],
  nurseRole: [
    'Misurare il **PR** e confrontarlo battito per battito',
    'Monitoraggio continuo; FC, **PA**, stato di coscienza',
    'Piastre per **pacing** applicate se Mobitz 2 o III grado',
    'Pacing transcutaneo: verificare la **cattura** con il polso, analgesia/sedazione',
    'Rivedere farmaci e **potassiemia**',
  ],
  redFlags: [
    'Comparsa di **Mobitz 2** o BAV completo',
    'QRS **largo** e FC < 40/min',
    'Pause > **3 s**, sincope, convulsioni',
    'Ipotensione, dolore toracico, **scompenso**',
  ],
}

export default map
