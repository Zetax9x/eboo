import type { DiseaseMap } from '../../book/types'

const map: DiseaseMap = {
  kind: 'disease',
  id: 'epatiti-virali',
  chapter: 'patologie',
  title: 'Epatiti virali',
  subtitle: 'Infezioni epatiche: tipi, trasmissione, diagnosi, terapia e prevenzione',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'OMS — Global hepatitis report 2024',
    'AIFA — Linee guida per la prevenzione e il trattamento delle epatiti virali',
    'Ministero della Salute — Piano Nazionale Epatiti Virali',
  ],
  definition:
    'Infiammazione del fegato causata da virus (A, B, C, D, E), con rischio di **epatite acuta** o **cirrosi** e **epatocarcinoma**.',
  illustration: {
    id: 'epatiti-fegato-infiammato',
    alt: 'Fegato sano e fegato infiammato con segni di epatite',
    prompt: 'healthy liver next to an inflamed swollen liver with redness and swelling, microscopic view of hepatocytes with viral particles',
    icon: 'Droplet',
  },
  types: [
    { name: 'Epatite A', text: 'Virus a RNA. Trasmissione **feco-orale**. Forma acuta, **non cronica**.' },
    { name: 'Epatite B', text: 'Virus a DNA. Trasmissione **parenterale/essudale**. Può cronicizzare (HBsAg > 6 mesi).' },
    { name: 'Epatite C', text: 'Virus a RNA. Trasmissione **parenterale**. Alta cronicizzazione (> 70%). **Curabile**.' },
    { name: 'Epatite D', text: 'Virus difettivo. Richiede co-infezione con **HBV**. Forma più grave.' },
    { name: 'Epatite E', text: 'Virus a RNA. Trasmissione **feco-orale**. Grave in **gravidanza**.' },
  ],
  sections: [
    {
      title: 'Trasmissione e fattori di rischio',
      icon: 'ArrowUp',
      accent: 'purple',
      items: [
        'A ed E: **acqua/alimenti contaminati**, igiene carente',
        'B, C, D: **sangue**, aghi, rapporti non protetti, tatuaggi',
        'B: **verticale** (madre-figlio) e sessuale',
        'C: **uso di droghe per via endovenosa** (rischio principale)',
        'B: personale sanitario esposto a **aghi/ferite**',
      ],
    },
    {
      title: 'Segni e sintomi',
      icon: 'Eye',
      accent: 'orange',
      items: [
        'Fase prodromica: astenia, nausea, dolori addominali',
        'Fase icterica: **ittero**, urine scure, feci chiare',
        'Prurito, epatomegalia dolente',
        'Forme anicteriche (sintomatiche ma senza ittero)',
        'Cronicità (B, C): epatomegalia, splenomegalia, ascite',
      ],
    },
    {
      title: 'Diagnosi',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        'A: **IgM anti-HAV** (acuta), IgG (immunità)',
        'B: **HBsAg** (infezione), **IgM anti-HBc** (acuta), anti-HBs (immunità)',
        'C: **IgG anti-HCV** (screening), **HCV-RNA** (attiva)',
        'D: **IgM anti-HDV** (acuta), HDV-RNA (attiva)',
        'E: **IgM anti-HEV** (acuta), HEV-RNA',
        'Funzionalità epatica: **AST/ALT**, bilirubina, PT/INR',
      ],
    },
    {
      title: 'Terapia',
      icon: 'Pill',
      accent: 'green',
      items: [
        'A ed E: **supportiva** (idratazione, riposo)',
        'B acuta: **supportiva**; cronica: **antivirali** (entecavir, tenofovir)',
        'C: **DAAs** (direct-acting antivirals) — cura > 95%',
        'D: gestione del **coinfezione HBV**',
        'Prevenzione: **vaccino** per A e B',
      ],
    },
    {
      title: 'Complicanze',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Epatite fulminante**: coagulopatia, encefalopatia',
        '**Cirrosi**: ipertensione portale, ascite, varici esofagee',
        '**Epatocarcinoma**: rischio aumentato in B e C cronici',
        'Sindrome epato-renale',
        'Sindrome epato-polmonare',
      ],
    },
    {
      title: 'Monitoraggio e prevenzione',
      icon: 'Activity',
      accent: 'teal',
      items: [
        'B: **HBsAg, anti-HBs, anti-HBc** ogni 6–12 mesi',
        'C: **HCV-RNA** a 12 settimane dalla fine terapia',
        'Ecografia epatica + **AFP** ogni 6 mesi (cirrosi)',
        'Vaccinazione: **A e B** (0, 1, 6 mesi)',
        'Evitare alcol, farmaci epatotossici',
      ],
    },
  ],
  nursing: [
    'Valutare **ittero, prurito, dolore addominale** e stato di coscienza',
    'Monitorare **funzionalità epatica** (AST/ALT, bilirubina, INR)',
    'Educare alla **prevenzione**: igiene, vaccino, evitare alcol',
    'Gestire **prurito**: emollienti, unghie corte, ambiente fresco',
    'Supporto psicologico e **aderenza terapeutica** (soprattutto C)',
  ],
  redFlags: [
    '**Encefalopatia epatica**: confusione, asterixis, sonnolenza → avvisare subito',
    '**INR > 1,5** o sanguinamenti: rischio emorragico, valutare trasfusioni',
    '**Ittero + dolore + febbre**: escludere colestasi o colecistite',
  ],
}

export default map
