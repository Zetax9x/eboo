import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'leucemie-e-linfomi',
  chapter: 'patologie',
  title: 'Leucemie e linfomi',
  subtitle: 'Neoplasie ematologiche: classificazione, diagnosi, terapia e assistenza infermieristica',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'NCCN — Clinical Practice Guidelines in Oncology: Hematologic Malignancies (ultima edizione)',
    'AIFA — Linee guida per la terapia delle neoplasie ematologiche',
    'FIMU — Federazione Italiana Medici di Medicina Generale, Linee guida per la diagnosi e il trattamento delle leucemie e dei linfomi',
  ],
  definition:
    'Neoplasie maligne delle cellule ematopoietiche: le **leucemie** colpiscono il midollo osseo e il sangue, i **linfomi** i tessuti linfoidi.',
  illustration: {
    id: 'leucemie-linfomi-midollo',
    alt: 'Midollo osseo con cellule blastoide e linfonodi ingrossati',
    prompt: 'cross-section of bone marrow with abnormal white blood cells, swollen lymph nodes in neck and armpit, blood vessel with abnormal cells',
    icon: 'Droplet',
  },
  types: [
    { name: 'Leucemie acute', text: '**Leucemia mieloide acuta (LMA)** e **linfoblastica acuta (LLA)**. Progressione rapida, blasti nel midollo.' },
    { name: 'Leucemie croniche', text: '**Leucemia mieloide cronica (LMC)**: traslocazione BCR-ABL. **Leucemia linfocitica cronica (LLC)**: accumulo linfociti maturi.' },
    { name: 'Linfomi Hodgkin', text: '**Linfoma di Hodgkin**: cellule di Reed-Sternberg. Migliore prognosi, spesso curativo.' },
    { name: 'Linfomi non-Hodgkin', text: '**Linfoma non-Hodgkin (LNH)**: eterogeneo, B o T. Da indolente a aggressivo (es. DLBCL).' },
  ],
  sections: [
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        '**Astenia**, febbre, sudorazioni notturne, calo ponderale (sintomi B)',
        '**Adenopatie** indolori, persistenti (cervicali, ascellari, inguinali)',
        '**Splenomegalia** o **epatomegalia**',
        'Sintomi da citopenie: **anemia** (pallore, dispnea), **infezioni** (febbre), **emorragie** (petecchie, epistassi)',
        'Dolore osseo (LMA), prurito generalizzato (LLC)',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**Emocromo**: anemia, leucocitosi o leucopenia, piastrinopenia, blasti nel sangue',
        '**Punzione midollare**: morfologia, immunofenotipizzazione, citogenetica (es. BCR-ABL)',
        '**Biopsia linfonodale**: istologia e immunofenotipo (Hodgkin vs non-Hodgkin)',
        '**PET-CT**: stadiazione e valutazione della risposta',
        'LDH, beta-2 microglobulina, emocromo, coagulazione',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        '**Chemioterapia**: protocolli intensivi (es. R-CHOP per LNH, ABVD per Hodgkin)',
        '**Terapia mirata**: imatinib (LMC), rituximab (LNH B)',
        '**Trapianto di midollo**: in casi selezionati (LMA, LMC, LNH ad alto rischio)',
        '**Radioterapia**: localizzata o consolidativa',
        '**Supporto**: trasfusioni, fattori di crescita, profilassi infezioni',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Sindrome da lisi tumorale**: iperuricemia, iperfosfatemia, iperkaliemia, ipocalcemia',
        '**Sindrome da infiltrazione midollare**: anemia, infezioni, emorragie',
        '**Trombosi** (soprattutto LMC, LLC)',
        '**Sindrome da attivazione macrofagica** (LNH)',
        '**Sindrome da capillari** (linfomi T)',
      ],
    },
    {
      title: 'Monitoraggio',
      icon: 'Activity',
      accent: 'teal',
      items: [
        '**Emocromo** e **LDH** durante la terapia',
        '**PET-CT** di risposta (a 3-6 mesi, fine terapia)',
        '**Funzione renale** e **elettroliti** (rischio lisi tumorale)',
        '**Funzione epatica** e **coagulazione**',
        '**Valutazione della qualità di vita** e sintomi',
      ],
    },
    {
      title: 'Assistenza infermieristica',
      icon: 'HeartPulse',
      accent: 'purple',
      items: [
        '**Profilassi infezioni**: igiene mani, ambiente protetto, vaccini (se possibile)',
        '**Gestione emorragie**: evitare traumi, monitorare petecchie, epistassi',
        '**Supporto psicologico**: ansia, paura, isolamento',
        '**Educazione al paziente**: riconoscimento segni di infezione, emorragia, lisi tumorale',
        '**Gestione effetti collaterali**: nausea, mucosite, neuropatia, alopecia',
      ],
    },
  ],
  nursing: [
    'Monitorare **temperatura** (febbre ≥ 38,0 °C = urgenza), **emogasanalisi** e **elettroliti**',
    'Prevenire **infezioni**: ambiente pulito, evitare folla, igiene orale rigorosa',
    'Gestire **emorragie**: evitare aspirina/NSAID, monitorare petecchie, epistassi, ematuria',
    'Supportare la **nutrizione**: dieta ricca di proteine, evitare cibi crudi (se neutropenico)',
    'Educare al **riconoscimento** di segni di lisi tumorale (dolore renale, oliguria) e infezione',
  ],
  redFlags: [
    '**Febbre ≥ 38,0 °C** in paziente neutropenico: **urgenza medica**, emocoltura e antibiotici empirici',
    '**Sindrome da lisi tumorale**: iperuricemia, iperkaliemia, ipocalcemia → **idratazione aggressiva**, allopurinolo/rasburicasa',
    '**Emorragia grave**: epistassi persistente, ematuria, ematomi → **trasfusione piastrinica**, emostasi',
  ],
}

export default map
