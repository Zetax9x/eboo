import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'funzionalita-renale-creatinina-urea-egfr',
  chapter: 'laboratorio',
  title: 'Funzionalità renale',
  subtitle: 'Creatinina, urea ed eGFR: valori, stadi e danno renale acuto',
  icon: 'Droplets',
  status: 'bozza',
  sources: [
    'KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease',
    'KDIGO 2012 Clinical Practice Guideline for Acute Kidney Injury',
    'Harrison — Principi di medicina interna, sezione nefrologia',
  ],
  intro:
    'Il rene filtra le scorie azotate: se il filtrato cala, **creatinina** e **urea** salgono. Valori indicativi per l’adulto: fa fede il **referto del proprio laboratorio**.',
  columns: 2,
  blocks: [
    {
      title: 'Creatinina sierica',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        'Normale circa **0,6–1,2 mg/dL** (più bassa nella donna)',
        'Prodotta dal **muscolo**: bassa in anziani, sarcopenici, amputati',
        'Sale solo quando il filtrato è già ridotto di **circa il 50%**',
        'Falsi aumenti: dieta ricca di carne, integratori di **creatina**, alcuni farmaci',
        'Valuta il **trend**: conta la variazione rispetto al valore basale',
        'Provetta: siero (**tappo rosso o giallo** con gel); evitare l’emolisi',
      ],
    },
    {
      title: 'Urea (azotemia)',
      icon: 'TestTube',
      accent: 'teal',
      items: [
        'Normale circa **15–45 mg/dL** (come BUN circa **7–20 mg/dL**)',
        'Aumenta anche con **disidratazione**, emorragia digestiva, dieta iperproteica, corticosteroidi',
        'Diminuisce in **epatopatia** grave, malnutrizione, iperidratazione',
        'BUN/creatinina **> 20**: suggerisce causa **prerenale**',
        'Molto alta (**uremia**): nausea, prurito, confusione, pericardite',
      ],
    },
    {
      title: 'eGFR · stadi KDIGO',
      icon: 'Gauge',
      accent: 'purple',
      items: [
        'Filtrato **stimato** dalla creatinina (formula **CKD-EPI**), in mL/min/1,73 m²',
        '**G1 ≥ 90** normale · **G2 60–89** lieve riduzione',
        '**G3a 45–59** · **G3b 30–44** riduzione moderata',
        '**G4 15–29** grave · **G5 < 15** insufficienza renale (dialisi/trapianto)',
        'Malattia renale cronica: eGFR **< 60** o danno renale per **> 3 mesi**',
        'Affidabile solo con creatinina **stabile**: non nel danno acuto',
      ],
    },
    {
      title: 'Altri esami utili',
      icon: 'Microscope',
      accent: 'navy',
      items: [
        '**Albuminuria** (rapporto albumina/creatinina urinaria): **A1 < 30**, **A2 30–300**, **A3 > 300 mg/g**',
        '**Clearance della creatinina**: raccolta delle urine delle **24 h** (scartare la prima minzione, tenere l’ultima)',
        '**Cistatina C**: meno influenzata dalla massa muscolare',
        'Nell’insufficienza renale: **K⁺ ↑**, acidosi metabolica (**HCO₃⁻ ↓**), fosforo ↑, anemia',
      ],
    },
    {
      title: 'Danno renale acuto (AKI · KDIGO)',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'Creatinina **↑ ≥ 0,3 mg/dL in 48 h**, oppure **≥ 1,5 volte** il basale nei 7 giorni, oppure diuresi **< 0,5 mL/kg/h per 6 h**',
        '**Stadio 1**: creatinina 1,5–1,9 volte · **stadio 2**: 2,0–2,9 volte (diuresi < 0,5 mL/kg/h per ≥ 12 h)',
        '**Stadio 3**: ≥ 3 volte o **≥ 4,0 mg/dL** o dialisi; diuresi < 0,3 mL/kg/h per ≥ 24 h o **anuria ≥ 12 h**',
        'Cause: **prerenali** (ipovolemia, shock), **renali** (farmaci nefrotossici), **postrenali** (ostruzione)',
      ],
    },
    {
      title: 'Ruolo dell’infermiere',
      icon: 'Stethoscope',
      accent: 'green',
      checks: [
        { text: '**Bilancio idrico** e diuresi oraria nel paziente critico', kind: 'ok' },
        { text: 'Peso quotidiano, edemi, **potassio**', kind: 'ok' },
        { text: 'Segnalare farmaci **nefrotossici** (FANS, aminoglicosidi, vancomicina)', kind: 'warn' },
        { text: 'Mezzo di contrasto: verificare eGFR e idratazione **secondo protocollo**', kind: 'warn' },
        { text: 'Dosi dei farmaci da **adattare** all’eGFR: segnalare variazioni', kind: 'warn' },
        { text: 'Oliguria improvvisa: escludere prima il **catetere ostruito**', kind: 'alert' },
      ],
    },
  ],
  keyPoints: [
    'Oliguria = diuresi **< 400 mL/24 h**; anuria = **< 100 mL/24 h**',
    'Creatinina “normale” in un anziano magro può nascondere un **filtrato ridotto**',
  ],
}

export default map
