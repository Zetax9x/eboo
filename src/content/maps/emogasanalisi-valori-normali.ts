import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'emogasanalisi-valori-normali',
  chapter: 'laboratorio',
  title: 'Emogasanalisi: valori normali',
  subtitle: 'Parametri arteriosi e venosi, range di riferimento e note per l’interpretazione',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'Kellum, M.A. et al. — Blood Gas Analysis: A Practical Guide, 2023',
    'Ministero della Salute — Linee guida per la gestione dell’insufficienza respiratoria acuta',
  ],
  intro: 'I valori indicati sono di riferimento per l’adulto in condizioni stazionarie. I range possono variare leggermente tra laboratori e apparecchiature. L’interpretazione deve sempre considerare il contesto clinico e la terapia in corso.',
  tableTitle: 'Valori normali emogasanalisi',
  tableIcon: 'TestTube',
  columns: ['Parametro', 'Unità', 'Range Arterioso', 'Range Venoso', 'Note'],
  widths: [1.2, 0.8, 1.2, 1.2, 2.5],
  rows: [
    ['pH', '—', '7,35–7,45', '7,32–7,42', 'Acidosi < 7,35; Alcalosi > 7,45. Valori critici: < 7,20 o > 7,60'],
    ['PaO₂', 'mmHg', '80–100', '35–45', 'Ipossia < 80 mmHg. In età avanzata o con O₂ terapia, target PaO₂ 60–70 mmHg'],
    ['PaCO₂', 'mmHg', '35–45', '45–55', 'Ipercapnia > 45 mmHg; ipocapnia < 35 mmHg. Correlata alla ventilazione alveolare'],
    ['HCO₃⁻', 'mEq/L', '22–26', '21–25', 'Bicarbonato ematico. Valore calcolato o misurato. Alterato nelle acidosi metaboliche'],
    ['BE (Base Excess)', 'mEq/L', '−2 a +2', '−2 a +2', 'Eccesso di base. Negativo in acidosi metabolica, positivo in alcalosi metabolica'],
    ['SaO₂', '%', '95–100', '70–75', 'Saturazione arteriosa. < 90% indica ipossiemia significativa. Target 88–92% in BPCO'],
    ['Lattati', 'mmol/L', '< 2', '< 2', 'Valori > 2 mmol/L suggeriscono ipoperfusione tissutale. > 4 mmol/L: acidosi lattica'],
  ],
  notes: [
    {
      title: 'Interpretazione rapida',
      icon: 'Brain',
      accent: 'blue',
      items: [
        '**pH < 7,35** → acidosi; **pH > 7,45** → alcalosi',
        'PaCO₂ alta + pH basso → acidosi respiratoria',
        'HCO₃⁻ basso + pH basso → acidosi metabolica',
        'PaCO₂ bassa + pH alto → alcalosi respiratoria',
        'HCO₃⁻ alto + pH alto → alcalosi metabolica',
      ],
    },
    {
      title: 'Fattori che influenzano i valori',
      icon: 'Activity',
      accent: 'orange',
      items: [
        '**Età**: nei neonati e anziani i range possono variare',
        '**Altitudine**: PaO₂ più bassa in montagna',
        '**Terapia O₂**: altera PaO₂ e SaO₂',
        '**Ventilazione meccanica**: modifica PaCO₂ e pH',
        '**Emolisi**: può falsare i valori di K⁺ e lattati',
      ],
    },
    {
      title: 'Valori critici da comunicare subito',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        'pH < 7,20 o > 7,60',
        'PaO₂ < 60 mmHg o SaO₂ < 90%',
        'PaCO₂ > 60 mmHg con pH < 7,30',
        'Lattati > 4 mmol/L',
        'BE < −10 o > +10 mEq/L',
      ],
    },
  ],
  keyPoints: [
    'L’emogasanalisi è un esame **dinamico**: ripetere se la condizione clinica cambia',
    'Interpretare sempre **insieme** pH, PaCO₂ e HCO₃⁻ per identificare il disturbo primario',
    'Comunicare **subito** i valori critici al medico e documentare l’ora della comunicazione',
  ],
}

export default map
