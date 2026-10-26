import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'insufficienza-renale-acuta',
  chapter: 'patologie',
  title: 'Insufficienza renale acuta',
  subtitle: 'Riduzione rapida della funzione renale: classificazione KDIGO, cause, terapia e assistenza',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'KDIGO Clinical Practice Guideline for Acute Kidney Injury (2012)',
    'SIN — Società Italiana di Nefrologia, Linee guida per la gestione dell’AKI',
    'Surviving Sepsis Campaign: International Guidelines (2021)',
  ],
  definition:
    'Riduzione **rapida** (ore-giorni) della funzione renale, con accumulo di scorie azotate e/o alterazioni idro-elettrolitiche. Definita da un aumento della **creatinina sierica** o da una diminuzione della **diuresi**.',
  illustration: {
    id: 'ira-reni-tubuli',
    alt: 'Reni sani e reni con danno tubulare acuto',
    prompt: 'healthy kidney next to a kidney with damaged tubules, magnified view of renal tubules showing cell injury, blood vessels',
    icon: 'Droplet',
  },
  types: [
    { name: 'Pre-renale', text: 'Scarsa perfusione renale (shock, disidratazione, sepsi). **Reversibile** se trattata tempestivamente.' },
    { name: 'Intrarenale', text: 'Danno diretto al parenchima: **necrosi tubulare acuta** (NTA), glomerulonefriti, nefrotossicità.' },
    { name: 'Post-renale', text: 'Ostruzione delle vie urinarie: calcolosi, tumori, **ipertrofia prostatica**.' },
  ],
  sections: [
    {
      title: 'Cause e fattori di rischio',
      icon: 'TriangleAlert',
      accent: 'purple',
      items: [
        '**Pre-renal**: ipovolemia, sepsi, shock, insufficienza cardiaca',
        '**Intrarenale**: farmaci nefrotossici (aminoglicosidi, AINS, contrasto iodato), mioglobinuria, rabdomiolisi',
        '**Post-renal**: ostruzione ureterale o uretrale',
        'Fattori di rischio: età > 65 anni, **malattia renale cronica** preesistente, diabete, ipertensione',
        'Procedure chirurgiche maggiori, uso di diuretici o ACE-inibitori',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        'Variazione della **diuresi**: oliguria (< 400 mL/giorno) o anuria (< 100 mL/giorno)',
        'Edema periferico, edema polmonare (ipervolemia)',
        'Nausea, vomito, anorexia (uremia)',
        'Confusione, sonnolenza, convulsioni (encefalopatia uremica)',
        'Aritmie cardiache (iperkaliemia), prurito',
      ],
    },
    {
      title: 'Diagnosi e classificazione',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**KDIGO Stage 1**: Creatinina 1,5–1,9× basale o +0,3 mg/dL; diuresi < 0,5 mL/kg/h per 6–12 h',
        '**KDIGO Stage 2**: Creatinina 2,0–2,9× basale; diuresi < 0,5 mL/kg/h per ≥ 12 h',
        '**KDIGO Stage 3**: Creatinina ≥ 3,0× basale o ≥ 4,0 mg/dL; diuresi < 0,3 mL/kg/h per ≥ 24 h o anuria ≥ 12 h',
        'Esami: **creatinina**, azotemia, elettroliti (K⁺, Na⁺, Ca²⁺, PO₄³⁻), emogasanalisi',
        'Ecografia renale: escludere ostruzione, valutare dimensioni e flusso',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        'Trattare la **causa** (es. reidratazione se pre-renale, rimozione ostruzione)',
        'Evitare farmaci nefrotossici (FANS, aminoglicosidi, mezzo di contrasto iodato)',
        'Controllo stretto degli **elettroliti**: iperkaliemia, ipercalcemia, acidosi metabolica',
        'Nutrizione: proteine **0,8–1 g/kg/die** senza dialisi (non ridurle per ritardarla)',
        '**Dialisi** (emodialisi o dialisi peritoneale) se indicata',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Iperkaliemia**: rischio di aritmie fatali, fibrillazione ventricolare',
        '**Edema polmonare**: ipervolemia, distress respiratorio',
        '**Acidosi metabolica**: pH < 7,2, alterazione della coagulazione',
        '**Encefalopatia uremica**: confusione, coma',
        'Infezioni, sanguinamenti (trombocitopenia, disfunzione piastrinica)',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        '**Diuresi oraria**: misurare ogni ora, bilanciare entrate/uscite',
        'Peso corporeo giornaliero (stima del bilancio idrico)',
        'Elettroliti: **K⁺**, Na⁺, Ca²⁺, PO₄³⁻, Mg²⁺ (ogni 6–12 h se instabile)',
        'Emogasanalisi: pH, HCO₃⁻, lattato',
        'Funzione renale: creatinina, azotemia (ogni 12–24 h)',
      ],
    },
  ],
  nursing: [
    'Monitorare la **diuresi oraria** e il bilancio idrico (entrate/uscite)',
    'Somministrare fluidi e farmaci **secondo prescrizione**, evitare sovraccarico idrico',
    'Controllare gli **elettroliti** e avvisare il medico per K⁺ > 5,5 mEq/L o alterazioni acute',
    'Prevenire le infezioni: igiene delle vie urinarie, asepsi nelle procedure invasive',
    'Educare il paziente: dieta a basso contenuto di potassio e fosforo, limitare sale',
  ],
  redFlags: [
    '**Iperkaliemia grave** (K⁺ > 6,0 mEq/L): ECG con onde P larghe, QRS allargato → **avvisare subito**',
    '**Anuria** persistente (> 12 h) o oliguria refrattaria alla terapia → valutare dialisi',
    '**Edema polmonare** acuto: dispnea, SpO₂ < 90% → **supporto respiratorio immediato**',
  ],
}

export default map
