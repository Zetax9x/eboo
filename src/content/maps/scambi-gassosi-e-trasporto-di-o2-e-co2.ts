import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'scambi-gassosi-e-trasporto-di-o2-e-co2',
  chapter: 'anatomia',
  title: 'Scambi gassosi e trasporto di O2 e CO2',
  subtitle: 'Dalla membrana alveolo-ematica alla dissociazione della curva O2',
  icon: 'Wind',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Guyton A.C., Hall J.E. — Fisiologia medica, Elsevier',
  ],
  blocks: [
    {
      title: 'Membrana alveolo-ematica',
      accent: 'blue',
      icon: 'Layers',
      illustration: {
        id: 'scambi-membrana-alveolo',
        alt: 'Sezione della membrana alveolo-ematica',
        prompt: 'cross-section of the alveolar-capillary membrane showing alveolar epithelium, basement membrane and capillary endothelium, oxygen molecules moving from alveolus to red blood cell',
        icon: 'Layers',
      },
      inset: {
        label: 'Barriera respiratoria',
        illustration: {
          id: 'scambi-barriera-respiratoria',
          alt: 'Dettaglio della barriera respiratoria',
          prompt: 'detailed view of the respiratory barrier with type I pneumocytes and capillary endothelial cells, showing the thin interface for gas exchange',
          icon: 'Microscope',
        },
      },
      bullets: [
        'Composta da **epitelio alveolare**, **membrana basale** e **endotelio capillare**',
        'Spessore totale < **0,5 µm** per una diffusione rapida',
        'Superficie di scambio ≈ **70 m²** (polmone adulto)',
        'La diffusione segue la **legge di Fick**: dipende da ΔP, superficie e spessore',
        'Patologie (es. fibrosi) aumentano lo spessore e riducono lo scambio',
      ],
    },
    {
      title: 'Pressioni parziali dei gas',
      accent: 'purple',
      icon: 'Gauge',
      illustration: {
        id: 'scambi-pressioni-parziali',
        alt: 'Schema delle pressioni parziali di O2 e CO2',
        prompt: 'diagram showing partial pressures of oxygen and carbon dioxide in alveoli, pulmonary capillaries and systemic tissues, with arrows indicating direction of diffusion',
        icon: 'Gauge',
      },
      bullets: [
        '**O2**: alveolo (**104 mmHg**) → sangue venoso (**40 mmHg**)',
        '**CO2**: sangue venoso (**46 mmHg**) → alveolo (**40 mmHg**)',
        'La diffusione avviene **passivamente** per gradiente di pressione parziale',
        'Nel tessuto: **O2** sangue (**100 mmHg**) → cellula (**40 mmHg**)',
        'Nel tessuto: **CO2** cellula (**46 mmHg**) → sangue (**40 mmHg**)',
      ],
    },
    {
      title: 'Trasporto dell’ossigeno',
      accent: 'red',
      icon: 'Droplet',
      illustration: {
        id: 'scambi-trasporto-o2',
        alt: 'Emoglobina che trasporta ossigeno',
        prompt: 'red blood cell with hemoglobin molecules binding oxygen molecules, showing the tetrameric structure of hemoglobin',
        icon: 'Droplet',
      },
      inset: {
        label: 'Curva di dissociazione',
        illustration: {
          id: 'scambi-curva-o2',
          alt: 'Curva di dissociazione dell’ossiemoglobina',
          prompt: 'sigmoidal oxygen-hemoglobin dissociation curve graph with partial pressure of oxygen on x-axis and saturation on y-axis',
          icon: 'Activity',
        },
      },
      bullets: [
        '**98,5%** dell’O2 è legato all’**emoglobina** (Hb) come ossiemoglobina',
        '**1,5%** è disciolto nel plasma (dipende dalla PO2)',
        '1 g di Hb lega ≈ **1,34 mL** di O2',
        'Saturazione normale: **95–100%** a PO2 100 mmHg',
        'Curva a **S**: sensibilità alla PO2 nella zona centrale',
      ],
    },
    {
      title: 'Trasporto della CO2',
      accent: 'orange',
      icon: 'Waves',
      illustration: {
        id: 'scambi-trasporto-co2',
        alt: 'Forme di trasporto della CO2 nel sangue',
        prompt: 'diagram showing the three forms of carbon dioxide transport in blood: bicarbonate ions in plasma, carbaminohemoglobin and dissolved CO2',
        icon: 'Waves',
      },
      bullets: [
        '**70%** come **bicarbonato** (HCO3⁻) nel plasma',
        '**23%** legato all’Hb come **carbaminemoglobina**',
        '**7%** disciolto nel plasma',
        'La conversione in HCO3⁻ avviene grazie all’**anidrasi carbonica** nei globuli rossi',
        'Effetto **Haldane**: l’Hb deossigenata trasporta più CO2',
      ],
    },
    {
      title: 'Fattori che spostano la curva O2',
      accent: 'teal',
      icon: 'ArrowUp',
      illustration: {
        id: 'scambi-curva-spostata',
        alt: 'Curva di dissociazione spostata a destra e a sinistra',
        prompt: 'oxygen-hemoglobin dissociation curve showing two curves: one shifted to the right (high temperature, high CO2) and one shifted to the left (low temperature, low CO2)',
        icon: 'ArrowUp',
      },
      bullets: [
        '**Spostamento a destra** (minore affinità, maggiore rilascio):',
        '↑ Temperatura, ↑ CO2, ↓ pH (acidosi), ↑ 2,3-DPG',
        '**Spostamento a sinistra** (maggiore affinità, minore rilascio):',
        '↓ Temperatura, ↓ CO2, ↑ pH (alcalosi), emoglobina fetale (HbF)',
        'Clinico: nell’ipossia tissutale la curva si sposta a destra per facilitare il rilascio',
      ],
    },
    {
      title: 'Ventilazione e perfusione',
      accent: 'green',
      icon: 'RefreshCw',
      illustration: {
        id: 'scambi-ventilazione-perfusione',
        alt: 'Rapporto ventilazione/perfusione nei polmoni',
        prompt: 'diagram of the lung showing ventilation and perfusion matching, with alveoli receiving air and blood flow, highlighting the V/Q ratio',
        icon: 'RefreshCw',
      },
      bullets: [
        '**Rapporto V/Q** ideale ≈ **1** (ventilazione = perfusione)',
        '**V/Q > 1**: spazio morto (aria senza sangue)',
        '**V/Q < 1**: shunt (sangue senza aria)',
        '**Shunt fisiologico**: 2–5% del flusso cardiaco',
        'Discrepanze V/Q sono la causa principale di **ipossiemia**',
      ],
    },
  ],
  keyPoints: [
    '**PO2 alveolare** ≈ 104 mmHg · **PCO2 alveolare** ≈ 40 mmHg',
    '**Saturazione O2** normale: 95–100% (SpO2 ≥ 95%)',
    '**Effetto Bohr**: l’acidosi favorisce il rilascio di O2 nei tessuti',
  ],
}

export default map
