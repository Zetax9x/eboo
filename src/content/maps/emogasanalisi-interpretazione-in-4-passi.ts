import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'emogasanalisi-interpretazione-in-4-passi',
  chapter: 'laboratorio',
  title: 'Emogasanalisi: interpretazione in 4 passi',
  subtitle: 'Algoritmo pratico per valutare acidosi, alcalosi e compensazione',
  icon: 'Route',
  status: 'bozza',
  sources: [
    'Kellum, K. A., et al. — Surviving Sepsis Campaign: Blood Gas Interpretation',
    'Boron, W. F. — Medical Physiology, capitolo Acid-Base Balance',
    'Linee guida SIAARTI — Gestione delle alterazioni acido-base in terapia intensiva',
  ],
  intro: 'L’interpretazione sistematica evita errori di valutazione. Segui sempre questi 4 passi in ordine.',
  columns: 2,
  blocks: [
    {
      title: 'Passo 1: Valutare il pH',
      icon: 'Gauge',
      accent: 'blue',
      items: [
        '**7,35 – 7,45**: Normale (eufemia)',
        '**< 7,35**: Acidosi',
        '**> 7,45**: Alcalosi',
        'Il pH indica la **direzione** del disturbo, non la causa',
        'Un pH normale non esclude un disturbo acido-base (compensazione)',
      ],
    },
    {
      title: 'Passo 2: Identificare la componente',
      icon: 'Microscope',
      accent: 'purple',
      items: [
        '**Respiratoria**: guarda pCO₂ (normale 35–45 mmHg)',
        '**Metabolica**: guarda HCO₃⁻ (normale 22–26 mEq/L)',
        'pCO₂ alta + pH basso = Acidosi respiratoria',
        'HCO₃⁻ basso + pH basso = Acidosi metabolica',
        'pCO₂ bassa + pH alto = Alcalosi respiratoria',
        'HCO₃⁻ alto + pH alto = Alcalosi metabolica',
      ],
    },
    {
      title: 'Passo 3: Verificare la compensazione',
      icon: 'RefreshCw',
      accent: 'green',
      items: [
        'Acidosi metabolica → iperventilazione (pCO₂ scende)',
        'Alcalosi metabolica → ipoventilazione (pCO₂ sale)',
        'Acidosi respiratoria → ritenzione di HCO₃⁻ (renale)',
        'Alcalosi respiratoria → escrezione di HCO₃⁻ (renale)',
        'La compensazione **mai** porta il pH alla normalità completa',
      ],
    },
    {
      title: 'Passo 4: Calcolare l’Anion Gap',
      icon: 'Calculator',
      accent: 'orange',
      items: [
        'Formula: **AG = Na⁺ – (Cl⁻ + HCO₃⁻)**',
        'Valore normale: **8–12 mEq/L**',
        'AG alto (>12): acidosi metabolica con anioni non misurati (lattati, chetoni, tossici)',
        'AG normale: diarrea, diuretici, insufficienza renale',
        'Calcola anche il **Delta Gap** per disturbi misti',
      ],
    },
    {
      title: 'Esempio pratico: Acidosi metabolica',
      icon: 'FlaskConical',
      accent: 'red',
      items: [
        'pH 7,28 (basso) → Acidosi',
        'HCO₃⁻ 14 mEq/L (basso) → Componente metabolica',
        'pCO₂ 28 mmHg (basso) → Compensazione respiratoria',
        'AG = 140 – (100 + 14) = 26 (alto) → Cause: chetoacidosi, lattacidosi',
        'Diagnosi: **Acidosi metabolica ad anion gap alto**',
      ],
    },
    {
      title: 'Errori comuni da evitare',
      icon: 'TriangleAlert',
      accent: 'slate',
      items: [
        'Non guardare solo il pH: un pH normale può nascondere un disturbo',
        'Ignorare l’Anion Gap: può nascondere cause tossiche o metaboliche',
        'Confondere compensazione con disturbo primario',
        'Non considerare la storia clinica: il contesto è fondamentale',
        'Dimenticare i disturbi misti (es. acidosi + alcalosi)',
      ],
    },
  ],
  keyPoints: [
    'Segui sempre l’ordine: **pH → componente → compensazione → Anion Gap**',
    'Un pH normale non esclude un disturbo acido-base: guarda HCO₃⁻ e pCO₂',
    'L’Anion Gap alto suggerisce cause “nascoste” (lattati, chetoni, tossici)',
  ],
}

export default map
