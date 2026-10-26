import type { LabMap } from '../../book/types'

const map: LabMap = {
  kind: 'lab',
  id: 'emocromo',
  chapter: 'laboratorio',
  title: 'Emocromo',
  subtitle: 'Globuli rossi, globuli bianchi e piastrine: valori e alterazioni',
  icon: 'TestTube',
  status: 'bozza',
  sources: [
    'Harrison — Principi di medicina interna, sezione ematologia',
    'Pagana K.D., Pagana T.J. — Mosby’s Manual of Diagnostic and Laboratory Tests, Elsevier',
    'WHO — Haemoglobin concentrations for the diagnosis of anaemia and assessment of severity',
  ],
  intro: 'Esame **più richiesto**: provetta **tappo viola (EDTA)**, capovolgere 8–10 volte. Range indicativi per l’adulto: fa fede il **referto del proprio laboratorio**.',
  rows: [
    {
      name: 'Emoglobina',
      symbol: 'Hb',
      range: '12–17',
      unit: 'g/dL (F ≥ 12, M ≥ 13)',
      accent: 'red',
      low: {
        name: 'Anemia',
        signs: 'pallore, astenia, dispnea da sforzo, tachicardia, vertigini; angina se grave',
        causes: 'emorragia, carenza di ferro, B12 o folati, malattie croniche, IRC, emolisi',
      },
      high: {
        name: 'Poliglobulia',
        signs: 'cute rossa (pletora), cefalea, prurito, rischio di trombosi',
        causes: '**disidratazione** (falsa), ipossia cronica (BPCO, altura, fumo), policitemia vera',
      },
      nursing: 'Anemia: valutare **segni vitali**, tolleranza allo sforzo, prevenire le **cadute**. Trasfusione: doppio controllo identità, osservazione nei **primi 15 min**. Ematocrito: circa **36–46% F, 40–52% M**.',
    },
    {
      name: 'Volume corpuscolare medio',
      symbol: 'MCV',
      range: '80–100',
      unit: 'fL',
      accent: 'orange',
      low: {
        name: 'Microcitosi',
        signs: 'segni dell’anemia; nella carenza di ferro unghie fragili, ragadi, pica',
        causes: '**carenza di ferro** (perdite croniche, mestruazioni, GI), talassemia',
      },
      high: {
        name: 'Macrocitosi',
        signs: 'segni dell’anemia; nel deficit di B12 parestesie, glossite, disturbi della memoria',
        causes: 'deficit di **B12** o **folati**, alcolismo, epatopatia, ipotiroidismo, farmaci',
      },
      nursing: 'L’MCV orienta la **causa** dell’anemia. Ferro per os: lontano dai pasti, **feci scure** (avvisare il paziente), stipsi; evitare con tè e antiacidi.',
    },
    {
      name: 'Globuli bianchi',
      symbol: 'GB',
      range: '4.000–10.000',
      unit: '/mm³ (= 4–10 × 10³/µL)',
      accent: 'blue',
      low: {
        name: 'Leucopenia',
        signs: 'infezioni frequenti; febbre anche con pochi segni locali',
        causes: '**chemioterapia**, infezioni virali, farmaci, aplasia midollare, autoimmunità',
      },
      high: {
        name: 'Leucocitosi',
        signs: 'segni dell’infezione o dell’infiammazione di base',
        causes: 'infezioni batteriche, stress, **corticosteroidi**, traumi, leucemie',
      },
      nursing: 'Neutrofili **< 500/mm³** = neutropenia grave: **isolamento protettivo**, igiene delle mani; febbre nel neutropenico = **emergenza** (emocolture e antibiotico subito). Formula: neutrofili **40–75%**, linfociti **20–45%**.',
    },
    {
      name: 'Piastrine',
      symbol: 'PLT',
      range: '150.000–400.000',
      unit: '/mm³ (= 150–400 × 10³/µL)',
      accent: 'purple',
      low: {
        name: 'Piastrinopenia',
        signs: 'petecchie, ecchimosi, gengivorragie, epistassi, sanguinamento prolungato',
        causes: 'chemioterapia, CID, epatopatia (ipersplenismo), **eparina (HIT)**, ITP',
      },
      high: {
        name: 'Piastrinosi',
        signs: 'spesso asintomatica; trombosi o sanguinamento se molto alta',
        causes: 'reattiva (infezioni, sanguinamento, carenza di ferro, splenectomia), trombocitemia essenziale',
      },
      nursing: 'PLT **< 50.000**: precauzioni anti-sanguinamento (spazzolino morbido, evitare IM e rettale); **< 20.000**: rischio di sanguinamento **spontaneo**. In eparina: calo **> 50%** dopo 5–10 giorni → sospetta **HIT**.',
    },
  ],
  tips: [
    'Valori **anomali inattesi**: verificare coagulo o **emodiluzione** (prelievo dal braccio dell’infusione)',
    'Comunicare **subito** Hb molto bassa, neutropenia grave e PLT critiche',
  ],
}

export default map
