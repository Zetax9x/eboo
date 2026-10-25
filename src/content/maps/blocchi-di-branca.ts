import type { RhythmMap } from '../../book/types'

const map: RhythmMap = {
  kind: 'rhythm',
  id: 'blocchi-di-branca',
  chapter: 'ecg',
  title: 'Blocchi di branca',
  subtitle: 'Conduzione intraventricolare rallentata: QRS largo con ritmo sinusale',
  icon: 'GitBranch',
  status: 'bozza',
  sources: [
    'AHA/ACCF/HRS 2009 — Recommendations for the standardization and interpretation of the ECG, part III: intraventricular conduction disturbances',
    'ESC 2023 — Guidelines for the management of acute coronary syndromes',
    'Hampton J. — ECG facile, Elsevier',
  ],
  rhythm: 'bbb',
  stripLabel: 'Ritmo sinusale con blocco di branca (QRS rSR’) · ≈ 75/min',
  features: [
    { label: 'Frequenza', value: 'Sinusale, RR 20 mm → **≈ 75/min**' },
    { label: 'Onde P', value: '**Presenti**, una per ogni QRS; PR **0,18 s**' },
    { label: 'QRS', value: '**≥ 0,12 s** (completo); 0,11–0,12 s = incompleto' },
    { label: 'Morfologia', value: 'Doppia punta **rSR’** (“a M”): attivazione in 2 tempi' },
    { label: 'ST/T', value: '**Opposti** al QRS (discordanti): atteso nel BB' },
  ],
  sections: [
    {
      title: 'Destra o sinistra?',
      icon: 'Target',
      accent: 'blue',
      items: [
        'Guardare **V1** e **V6** (e DI)',
        '**BBDx**: rSR’ “**a M**” in V1–V2; S larga in DI e V6',
        '**BBSx**: R larga e slargata in DI, aVL, V5–V6; **QS o rS** in V1',
        'Trucco: QRS in V1 **in su** = destra; **in giù** = sinistra',
        'Emiblocco anteriore sinistro: **deviazione assiale sinistra**',
      ],
    },
    {
      title: 'Blocco di branca destra',
      icon: 'Layers',
      accent: 'purple',
      items: [
        'Presente anche in soggetti **sani**',
        'Cardiopatie congenite (**difetto interatriale**)',
        '**Embolia polmonare**, cuore polmonare cronico',
        'Cardiopatia ischemica, cardiomiopatie',
        'Isolato: spesso **senza significato** clinico',
        'Non impedisce di riconoscere lo **STEMI**',
      ],
    },
    {
      title: 'Blocco di branca sinistra',
      icon: 'HeartPulse',
      accent: 'orange',
      items: [
        'Quasi sempre **cardiopatia** sottostante',
        'Ipertensione, ischemia, **cardiomiopatie**, stenosi aortica',
        'Maschera **IMA** e ipertrofia all’ECG',
        'BBSx + **sintomi ischemici**: gestire come STEMI (ESC 2023)',
        'Dissincronia: possibile indicazione a **CRT**',
      ],
    },
    {
      title: 'Clinica e rischi',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        'Il BB **di per sé** non dà sintomi',
        'QRS largo al monitor **non è sempre TV**: confrontare con l’ECG base',
        '**Bifascicolare** (BBDx + emiblocco) + sincope: rischio di BAV completo',
        'BB **alternante**: indicazione a pacemaker',
        'Sintomi legati alla **cardiopatia** di base',
      ],
    },
  ],
  nurseRole: [
    'Eseguire ECG a 12 derivazioni e **confrontarlo** con i precedenti',
    'Documentare il BB **noto** in cartella e nelle consegne',
    'Scegliere al monitor una derivazione che mostri bene il **QRS** (V1)',
    'Valutare **dolore toracico** e parametri vitali',
    'Segnalare subito un BB di **nuova comparsa**',
  ],
  redFlags: [
    'BBSx con **dolore toracico**: possibile occlusione coronarica',
    'BB + **sincope** o bradicardia: rischio di BAV',
    'QRS largo e **tachicardia**: escludere TV',
    'BBDx nuovo con **dispnea** improvvisa: embolia polmonare?',
  ],
}

export default map
