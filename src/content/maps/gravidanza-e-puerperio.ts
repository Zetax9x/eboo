import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'gravidanza-e-puerperio',
  chapter: 'specialistica',
  title: 'Gravidanza e puerperio',
  subtitle: 'Datazione, controlli, parto, post-partum e segni d’allarme',
  icon: 'Baby',
  status: 'bozza',
  sources: [
    'ISS — SNLG, Linea guida Gravidanza fisiologica (aggiornamento 2023)',
    'ISS — SNLG, Emorragia post partum: come prevenirla, come curarla, 2016',
    'WHO — Recommendations on antenatal care for a positive pregnancy experience, 2016',
  ],
  intro:
    'Gravidanza fisiologica: circa **40 settimane** (280 giorni) dal 1° giorno dell’ultima mestruazione; a termine tra **37+0 e 41+6** settimane. Il **puerperio** dura circa **6 settimane** dopo il parto.',
  columns: 3,
  blocks: [
    {
      title: 'Datazione e trimestri',
      icon: 'Clock',
      accent: 'blue',
      items: [
        '**Regola di Naegele**: DPP = UM + 7 giorni − 3 mesi + 1 anno',
        'Datazione più precisa: **ecografia** del I trimestre (CRL)',
        'I trimestre: fino a **13+6** settimane',
        'II trimestre: **14–27** settimane',
        'III trimestre: dalla **28ª** settimana',
        'Pretermine **< 37** sett.; oltre termine **≥ 42** sett.',
      ],
    },
    {
      title: 'Controlli in gravidanza',
      icon: 'Stethoscope',
      accent: 'teal',
      items: [
        '**Acido folico 0,4 mg/die** da almeno 1 mese prima del concepimento fino a 12 sett.',
        'Ecografie: **11–13+6**, **19–21** (morfologica), **28–32** sett.',
        'Screening **OGTT 75 g** a 24–28 sett. se fattori di rischio',
        'Ad ogni visita: **PA**, peso, crescita uterina, BCF',
        'Esami: gruppo e Rh, emocromo, sierologie, urinocoltura',
        'Profilassi **anti-D** nelle donne Rh negative secondo protocollo',
      ],
    },
    {
      title: 'Il parto',
      icon: 'Workflow',
      accent: 'purple',
      items: [
        '**Prodromico**: contrazioni irregolari, modificazioni del collo',
        '**Dilatante**: contrazioni regolari fino a **dilatazione completa** (10 cm)',
        '**Espulsivo**: dalla dilatazione completa alla nascita',
        '**Secondamento**: espulsione della placenta, di norma entro **30–60 min**',
        'Ispezione della placenta: **integrità** di cotiledoni e membrane',
        'Monitoraggio del **BCF** in travaglio (normale **110–160 bpm**)',
      ],
    },
    {
      title: 'Puerperio: cosa osservare',
      icon: 'Eye',
      accent: 'green',
      items: [
        '**Globo di sicurezza**: utero contratto, fondo all’ombelico dopo il parto',
        'Involuzione: circa **1 cm/die**; non palpabile dopo **10–14 giorni**',
        '**Lochi**: rubra (1–4 gg) → sierosi (fino a ~10 gg) → alba (fino a 4–6 sett.)',
        'Perineo/ferita: dolore, edema, ematoma (**REEDA**)',
        'Minzione spontanea entro **6 h**; alvo, mammelle, umore',
        '**Montata lattea** tra 2ª e 4ª giornata',
      ],
    },
    {
      title: 'Allattamento e salute mentale',
      icon: 'Heart',
      accent: 'pink',
      items: [
        'OMS: allattamento **esclusivo fino a 6 mesi**, poi complementare',
        'Attacco precoce, **a richiesta**, buona posizione: previene ragadi e ingorgo',
        '**Baby blues**: fino al 70–80%, in 3–5ª giornata, si risolve entro **2 settimane**',
        '**Depressione post-partum**: circa 10–15%; screening (es. **EPDS**)',
        'Psicosi puerperale: rara, **emergenza psichiatrica**',
      ],
    },
    {
      title: 'Segni d’allarme',
      icon: 'Siren',
      accent: 'red',
      items: [
        '**Emorragia post-partum**: perdita **≥ 500 mL** entro 24 h (maggiore > 1000 mL)',
        'Utero molle e non contratto (**atonia**): massaggio del fondo, chiamare aiuto',
        '**Preeclampsia**: PA ≥ 140/90 dopo 20 sett. + proteinuria o danno d’organo',
        'Cefalea intensa, disturbi visivi, dolore epigastrico',
        'Febbre ≥ 38 °C, lochi maleodoranti (**endometrite**)',
        'Polpaccio dolente e gonfio (**TVP**), dispnea',
      ],
    },
  ],
  keyPoints: [
    'Cause di EPP: le **4 T** — Tono (atonia, la più frequente), Trauma, Tessuto, Trombina',
    'Riduzione dei movimenti fetali percepiti: valutazione **lo stesso giorno**',
  ],
}

export default map
