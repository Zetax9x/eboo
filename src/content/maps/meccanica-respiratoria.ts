import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'meccanica-respiratoria',
  chapter: 'anatomia',
  title: 'Meccanica respiratoria',
  subtitle: 'Pressioni, volumi e capacità polmonari: i numeri da conoscere',
  icon: 'Wind',
  status: 'bozza',
  sources: [
    'Guyton A.C., Hall J.E. — Fisiologia medica, Edra',
    'West J.B. — Respiratory Physiology: The Essentials, Wolters Kluwer',
    'ATS/ERS — Standardization of Spirometry, 2019 Update',
  ],
  blocks: [
    {
      title: 'Pressioni e gradienti',
      accent: 'blue',
      icon: 'Gauge',
      bullets: [
        '**P_alv**: 0 cmH₂O a riposo (fine espirazione)',
        '**P_pleurica**: −5 cmH₂O a riposo (sempre negativa)',
        '**P_transpolmonare** = P_alv − P_pleurica ≈ **5 cmH₂O**',
        'Inspirazione: P_alv scende a **−1 cmH₂O**',
        'Espirazione: P_alv sale a **+1 cmH₂O**',
        'Inspirazione **attiva**: diaframma e intercostali esterni',
        'Espirazione a riposo **passiva** (ritorno elastico)',
      ],
    },
    {
      title: 'Volume corrente (VT)',
      accent: 'green',
      icon: 'Droplet',
      bullets: [
        '**Definizione**: aria mossa in un singolo atto respiratorio',
        '**Valore medio**: **500 mL** (adulto a riposo)',
        'Corrisponde a circa **7 mL/kg** di peso corporeo',
        '**Spazio morto** anatomico: circa **150 mL**',
        '**Ventilazione alveolare** = (VT − spazio morto) × FR',
        'In ventilazione meccanica: **6–8 mL/kg** di peso ideale',
        'Frequenza respiratoria: **12–20 atti/min**',
      ],
    },
    {
      title: 'Capacità vitale (CV)',
      accent: 'purple',
      icon: 'Waves',
      bullets: [
        '**CV** = VT + VRI + VRE',
        '**Valore medio**: **4–5 L** (uomo), **3–4 L** (donna)',
        'Ridotta in: BPCO, fibrosi, pleurite, miastenia',
        'Misurata con **spirometria forzata** (FVC)',
        'Soglia critica: **< 20 mL/kg** → rischio insufficienza respiratoria',
        'Da monitorare nelle malattie **neuromuscolari** (es. Guillain-Barré)',
      ],
    },
    {
      title: 'Volumi di riserva',
      accent: 'orange',
      icon: 'Layers',
      illustration: {
        id: 'meccanica-respiratoria-riserve',
        alt: 'Volumi di riserva inspiratoria ed espiratoria',
        prompt: 'lung cross-section with labeled zones for inspiratory reserve volume and expiratory reserve volume',
        icon: 'Layers',
      },
      bullets: [
        '**VRI** (riserva inspiratoria): **3000 mL**',
        '**VRE** (riserva espiratoria): **1100 mL**',
        '**VRI + VRE** = parte della capacità vitale',
        'VRI ridotta in: fibrosi polmonare, restrizione toracica',
        'VRE ridotta in: fibrosi polmonare, obesità',
      ],
    },
    {
      title: 'Volume residuo (VR)',
      accent: 'red',
      icon: 'CircleDot',
      bullets: [
        '**Definizione**: aria che resta dopo una massima espirazione',
        '**Valore medio**: **1200 mL**',
        'Impedisce il **collasso alveolare** (atelettasia)',
        'Non misurabile con spirometria semplice',
        'Richiede **pletismografia** o **diluizione con gas**',
        '**Aumentato** in enfisema e asma (aria intrappolata)',
      ],
    },
    {
      title: 'Capacità funzionale residua (CFR)',
      accent: 'teal',
      icon: 'RefreshCw',
      bullets: [
        '**CFR** = VR + VRE',
        '**Valore medio**: **2300 mL**',
        'Volume al quale i polmoni sono in **equilibrio elastico**',
        'Mantiene gli alveoli **aperti** a riposo',
        '**Aumentata** in: enfisema, BPCO (iperinsufflazione)',
        '**Ridotta** in: fibrosi, obesità, posizione supina',
        'È la **riserva di O₂** in apnea: base della preossigenazione',
      ],
    },
  ],
  keyPoints: [
    '**P_pleurica** è sempre **negativa** a riposo (−5 cmH₂O)',
    '**VT** = 500 mL · **CV** = 4–5 L · **VR** = 1200 mL',
    '**CFR** = VR + VRE ≈ 2300 mL',
  ],
}

export default map
