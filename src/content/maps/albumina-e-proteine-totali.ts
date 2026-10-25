import type { LabMap } from '../../book/types'

const map: LabMap = {
  kind: 'lab',
  id: 'albumina-e-proteine-totali',
  chapter: 'laboratorio',
  title: 'Albumina e proteine totali',
  subtitle: 'Valori di riferimento, cause di alterazione e ruolo infermieristico',
  icon: 'FlaskConical',
  status: 'bozza',
  sources: [
    'Harrison — Principi di medicina interna, sezione nutrizione e disordini proteici',
    'Linee guida ESPEN — Clinical Nutrition Guidelines (ultima edizione)',
    'Ministero della Salute — Raccomandazioni su nutrizione e stato nutrizionale',
  ],
  intro: 'Le proteine totali comprendono albumina, globuline e altre proteine plasmatiche. L’albumina è il principale indicatore dello stato nutrizionale e della sintesi epatica.',
  rows: [
    {
      name: 'Albumina',
      symbol: 'Alb',
      range: '3,5–5,0',
      unit: 'g/dL',
      accent: 'blue',
      low: {
        name: 'Ipalbuminemia',
        signs: 'edema periferico, ascite, rallentamento della guarigione delle ferite, rischio di infezioni',
        causes: 'malnutrizione cronica, insufficienza epatica, sindrome nefrotica, perdita enterica (enteropatia), ustioni estese, stati infiammatori cronici',
      },
      high: {
        name: 'Iperalbuminemia',
        signs: 'raramente sintomatica; può indicare disidratazione relativa',
        causes: 'disidratazione severa, uso di diuretici, emocoagulazione (rare)',
      },
      nursing: 'Monitorare lo stato nutrizionale con MNA o MUST; valutare edemi e peso; collaborare con il dietista per piani alimentari iperproteici; sorvegliare la guarigione delle ferite.',
    },
    {
      name: 'Proteine totali',
      symbol: 'PT',
      range: '6,0–8,0',
      unit: 'g/dL',
      accent: 'purple',
      low: {
        name: 'Ipoproteinemia',
        signs: 'edema, debolezza muscolare, alterazioni immunitarie, rallentamento della cicatrizzazione',
        causes: 'malnutrizione, insufficienza epatica, perdita renale (proteinuria), perdita enterica, ustioni, stati catabolici (post-chirurgia, sepsi)',
      },
      high: {
        name: 'Iperproteinemia',
        signs: 'viscosità ematica aumentata, rischio trombotico, sintomi neurologici (cefalea, vertigini)',
        causes: 'disidratazione, mieloma multiplo, gammopatie monoclonali, infezioni croniche, malattie autoimmuni',
      },
      nursing: 'Valutare la proteinuria nelle urine; monitorare i segni di iperviscosità; collaborare con l’ematologo in caso di sospetto mieloma; assicurare un’adeguata idratazione.',
    },
  ],
  tips: [
    'L’albumina è un **marcatore di fase acuta**: può essere bassa anche in pazienti ben nutriti durante infezioni o infiammazioni',
    'Interpretare i valori **insieme a prealbumina, ferritina e CRP** per una valutazione nutrizionale completa',
    'Comunicare **subito** valori di albumina < 2,5 g/dL o proteine totali < 5,0 g/dL al medico',
  ],
}

export default map
