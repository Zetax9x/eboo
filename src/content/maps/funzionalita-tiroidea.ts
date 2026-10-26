import type { LabMap } from '../../book/types'

const map: LabMap = {
  kind: 'lab',
  id: 'funzionalita-tiroidea',
  chapter: 'laboratorio',
  title: 'Funzionalità tiroidea',
  subtitle: 'TSH, T4, T3 e anticorpi: valori, alterazioni e ruolo infermieristico',
  icon: 'FlaskConical',
  status: 'bozza',
  sources: [
    'Endocrine Society — Clinical Practice Guidelines for Thyroid Disorders',
    'AIFA — Linee guida per la diagnosi e terapia delle patologie tiroidee',
    'Ministero della Salute — Raccomandazioni per il monitoraggio della terapia tiroidea',
  ],
  intro: 'I valori di riferimento variano tra laboratori; fa fede il **referto specifico**. La TSH è il test di screening di prima scelta.',
  rows: [
    {
      name: 'Ormone tireostimolante',
      symbol: 'TSH',
      range: '0,4–4,0',
      unit: 'mUI/L',
      accent: 'blue',
      low: {
        name: 'Iperfunzione (TSH bassa)', // corretto
        signs: 'tachicardia, intolleranza al calore, perdita di peso, tremori, insonnia',
        causes: 'ipertiroidismo, morbo di Graves, tireotossicosi da farmaci, adenoma iperfunzionante',
      },
      high: {
        name: 'Ipofunzione (TSH alta)', // corretto
        signs: 'bradicardia, intolleranza al freddo, aumento di peso, stipsi, secchezza cutanea',
        causes: 'ipotiroidismo, malattia di Hashimoto, carenza di iodio, post-tiroidectomia',
      },
      nursing: 'Monitorare la **frequenza cardiaca** e la **temperatura corporea**. In caso di TSH molto bassa, valutare il rischio di **crisi tirotoxicica** (temperatura > 40 °C, confusione, tachicardia > 140 bpm).',
    },
    {
      name: 'Tiroxina libera',
      symbol: 'T4L',
      range: '12–22',
      unit: 'pmol/L',
      accent: 'purple',
      low: {
        name: 'Ipotiroidismo',
        signs: 'affaticamento, gonfiore facciale, voce roca, mestruazioni irregolari',
        causes: 'autoimmunità, radioterapia cervicale, farmaci (litio, amiodarone)',
      },
      high: {
        name: 'Ipertiroidismo',
        signs: 'palpitazioni, sudorazione, cefalea, debolezza muscolare',
        causes: 'iperfunzione tiroidea, tireoidite subacuta, gravidanza (Gestational Transient Thyrotoxicosis)',
      },
      nursing: 'In gravidanza, la T4L può essere **falsa bassa** per l’effetto dell’albumina. Verificare sempre il **trimestre** e la **TSH** prima di interpretare.',
    },
    {
      name: 'Triiodotironina libera',
      symbol: 'T3L',
      range: '3,1–6,8',
      unit: 'pmol/L',
      accent: 'teal',
      low: {
        name: 'Sindrome di malattia non tiroidea (euthyroid sick syndrome)', // corretto
        signs: 'spesso asintomatica, ma può causare debolezza e apatia',
        causes: 'malattie acute, digiuno, insufficienza renale, post-operatorio',
      },
      high: {
        name: 'T3-tossicosi',
        signs: 'tachicardia marcata, tremori fini, agitazione psicomotoria',
        causes: 'adenoma iperfunzionante, morbo di Graves, ingestione di ormoni tiroidei',
      },
      nursing: 'La T3L è più sensibile dell’ipertiroidismo subclinico. In caso di valori elevati, monitorare la **pressione arteriosa** e la **frequenza cardiaca** ogni 4 ore.',
    },
    {
      name: 'Anticorpi anti-tiroperossidasi',
      symbol: 'TPO-Ab',
      range: '< 35',
      unit: 'UI/mL',
      accent: 'green',
      low: {
        name: 'Assenti',
        signs: 'nessuno specifico',
        causes: 'assenza di malattia autoimmune tiroidea',
      },
      high: {
        name: 'Positivi',
        signs: 'spesso asintomatici, ma predicono rischio di ipotiroidismo',
        causes: 'malattia di Hashimoto, tireoidite di De Quervain, ipotiroidismo post-partum',
      },
      nursing: 'Valori elevati indicano **autoimmunità**. Non necessitano di terapia immediata, ma richiedono **monitoraggio annuale** di TSH e T4L.',
    },
  ],
  tips: [
    'La **TSH** è il test di screening: se alterata, ripetere con T4L e T3L',
    'In gravidanza, la TSH ha range specifici per trimestre (es. 1° trim: 0,1–2,5 mUI/L)',
    'Comunicare **subito** TSH < 0,1 o > 10 mUI/L al medico',
  ],
}

export default map
