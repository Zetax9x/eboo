import type { RhythmMap } from '../../book/types'

const map: RhythmMap = {
  kind: 'rhythm',
  id: 'fibrillazione-atriale-il-tracciato',
  chapter: 'ecg',
  title: 'Fibrillazione atriale',
  subtitle: 'L’aritmia sostenuta più frequente: riconoscerla all’ECG',
  icon: 'Activity',
  status: 'bozza',
  sources: [
    'ESC 2024 — Guidelines for the management of atrial fibrillation',
    'Hampton J. — ECG facile, Elsevier',
  ],
  rhythm: 'af',
  stripLabel: 'Fibrillazione atriale',
  features: [
    { label: 'Frequenza', value: 'atriale 350–600/min; ventricolare **variabile**' },
    { label: 'Ritmo', value: '**Irregolarmente irregolare**' },
    { label: 'Onde P', value: '**Assenti**, linea di base ondulata (onde f)' },
    { label: 'PR', value: 'Non misurabile' },
    { label: 'QRS', value: 'Stretto (< 0,12 s) se la conduzione è normale' },
  ],
  sections: [
    {
      title: 'Cause e fattori di rischio',
      icon: 'Layers',
      accent: 'purple',
      items: [
        'Ipertensione, cardiopatia ischemica, **valvulopatie**',
        'Scompenso cardiaco, **ipertiroidismo**',
        'Età avanzata, alcol, apnee notturne',
        'Dopo cardiochirurgia',
      ],
    },
    {
      title: 'Sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: ['**Palpitazioni**, dispnea, astenia', 'Vertigini, dolore toracico', 'Spesso **asintomatica**: scoperta all’ECG'],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Controllo della frequenza**: beta-bloccanti, calcio-antagonisti, digossina',
        '**Controllo del ritmo**: cardioversione elettrica o farmacologica',
        '**Anticoagulanti** secondo il rischio (CHA₂DS₂-VA)',
      ],
    },
  ],
  nurseRole: [
    'Rilevare il **polso apicale** per 60 s (deficit di polso)',
    'Monitoraggio **ECG** continuo e pressione arteriosa',
    'Terapia anticoagulante: sorvegliare i **sanguinamenti**',
    'Insegnare i segni di **ictus**',
  ],
  redFlags: [
    'FC elevata con **ipotensione**, dolore toracico o confusione',
    'Deficit neurologico improvviso: possibile **ictus embolico**',
  ],
}

export default map
