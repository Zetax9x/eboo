import type { OverviewMap } from '../../book/types'

const map: OverviewMap = {
  kind: 'overview',
  id: 'equilibrio-acido-base',
  chapter: 'anatomia',
  title: 'Equilibrio acido-base',
  subtitle: 'pH, tamponi, compensazione e valori di riferimento',
  icon: 'FlaskConical',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Guyton A.C., Hall J.E. — Fisiologia medica, Elsevier',
    'Brunner & Suddarth — Infermieristica medico-chirurgica, CEA',
  ],
  blocks: [
    {
      title: 'pH e tamponi',
      accent: 'blue',
      icon: 'FlaskConical',
      bullets: [
        '**pH normale**: 7,35–7,45',
        '**Tamponi**: bicarbonato, fosfato, proteine',
        'Il sistema **bicarbonato/acido carbonico** è il più importante',
        'Rapporto **HCO₃⁻/H₂CO₃** ≈ 20:1',
        'CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ (**anidrasi carbonica**)',
        '**Emoglobina**: tampone principale nei globuli rossi',
        'I tamponi agiscono in **secondi**: prima linea di difesa',
      ],
    },
    {
      title: 'Compensazione respiratoria',
      accent: 'green',
      icon: 'Wind',
      bullets: [
        '**Regolazione**: frequenza e profondità respiratoria',
        '**Iperventilazione**: elimina CO₂ → pH ↑',
        '**Ipoventilazione**: trattiene CO₂ → pH ↓',
        'Tempo di risposta: **minuti–ore**',
        'Acidosi metabolica → **respiro di Kussmaul** (profondo e frequente)',
        'Alcalosi metabolica → ipoventilazione, limitata dall’**ipossia**',
      ],
    },
    {
      title: 'Compensazione renale',
      accent: 'purple',
      icon: 'Droplets',
      bullets: [
        '**Regolazione**: escrezione di H⁺ e riassorbimento di HCO₃⁻',
        '**Tempo**: ore–giorni',
        '**Compensazione**: produzione di nuovi bicarbonati',
        'Compensa i disturbi **respiratori** (es. BPCO con CO₂ cronicamente alta)',
        'Massima efficacia dopo **3–5 giorni**',
        'Ridotta nell’**insufficienza renale**',
      ],
    },
    {
      title: 'Acidosi e alcalosi',
      accent: 'red',
      icon: 'TriangleAlert',
      bullets: [
        '**Acidosi**: pH < 7,35',
        '**Alcalosi**: pH > 7,45',
        '**Acidosi metabolica** (↓ HCO₃⁻): chetoacidosi, acido lattico, diarrea, IRC',
        '**Alcalosi metabolica** (↑ HCO₃⁻): vomito, aspirazione da SNG, diuretici',
        '**Acidosi respiratoria** (↑ pCO₂): BPCO, sedazione, oppioidi',
        '**Alcalosi respiratoria** (↓ pCO₂): iperventilazione, ansia, dolore',
      ],
    },
    {
      title: 'Valori di riferimento',
      accent: 'orange',
      icon: 'Gauge',
      bullets: [
        '**pH**: 7,35–7,45',
        '**pCO₂**: 35–45 mmHg',
        '**HCO₃⁻**: 22–26 mEq/L',
        '**BE** (base excess): −2 a +2 mEq/L',
        '**pO₂**: 80–100 mmHg (aria ambiente)',
        '**Lattati**: < 2 mmol/L',
      ],
    },
    {
      title: 'Interpretazione',
      accent: 'teal',
      icon: 'ClipboardCheck',
      bullets: [
        '**Passo 1**: pH normale, acidosi o alcalosi?',
        '**Passo 2**: pCO₂ o HCO₃⁻ alterati?',
        '**Passo 3**: compensazione presente?',
        '**Passo 4**: causa metabolica o respiratoria?',
        'Il compenso va **nello stesso verso** del disturbo primario',
        'Il compenso **non** riporta mai il pH oltre la norma',
        'Prelievo arterioso: **test di Allen**, compressione del sito, campione **senza bolle**',
      ],
    },
  ],
  keyPoints: [
    '**pH normale**: 7,35–7,45',
    '**Compensazione respiratoria**: rapida (minuti–ore)',
    '**Compensazione renale**: lenta (ore–giorni)',
  ],
}

export default map
