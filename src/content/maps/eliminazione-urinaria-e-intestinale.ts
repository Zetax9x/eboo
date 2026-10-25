import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'eliminazione-urinaria-e-intestinale',
  chapter: 'fondamenti',
  title: 'Eliminazione urinaria e intestinale',
  subtitle: 'Fisiologia, funzioni infermieristiche e gestione delle alterazioni',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'Potter P.A., Perry A.G. — Fondamenti di assistenza infermieristica, CEA',
    'NANDA International — Diagnosi infermieristiche 2024-2026, CEA',
    'Linee guida AIFA e Ministero della Salute — Prevenzione stipsi e incontinenza',
  ],
  intro:
    'L’eliminazione è un processo fisiologico complesso che coinvolge **sistema nervoso**, **muscolatura liscia** e **scomposizione**. L’infermiere valuta, monitora e assiste per mantenere la dignità e la salute.',
  columns: 2,
  blocks: [
    {
      title: 'Eliminazione Urinaria',
      icon: 'Droplet',
      accent: 'blue',
      items: [
        'Produzione: **1–2 L/die** (filtrazione glomerulare)',
        'Capacità vescicale: **300–400 mL**',
        'Sensazione di pienezza: **150–200 mL**',
        'Frequenza normale: **4–6 volte/die**',
        'Diuresi notturna: **< 1 volta**',
        'Colore: **giallo paglierino** (urocromo)',
        'Odore: **caratteristico**, non acre',
      ],
    },
    {
      title: 'Eliminazione Intestinale',
      icon: 'Apple',
      accent: 'green',
      items: [
        'Transito totale: **24–72 ore**',
        'Frequenza normale: **1–3 volte/die**',
        'Consistenza: **formata**, non liquida né dura',
        'Colore: **marrone** (stercobilina)',
        'Odore: **caratteristico**, non fetido',
        'Volume: **100–300 g/die**',
        'Assenza di **sangue** o **muco**',
      ],
    },
    {
      title: 'Fattori che Influenzano',
      icon: 'Activity',
      accent: 'orange',
      items: [
        '**Età**: ridotta motilità in anziani',
        '**Dieta**: fibre, liquidi, caffeina',
        '**Attività fisica**: stimola peristalsi',
        '**Stress**: altera tono sfinterico',
        '**Farmaci**: oppioidi (stipsi), lassativi',
        '**Patologie**: diabete, ictus, Parkinson',
        '**Posizione**: seduta vs. supina',
      ],
    },
    {
      title: 'Valutazione Infermieristica',
      icon: 'ClipboardCheck',
      accent: 'purple',
      items: [
        'Anamnesi: **abitudini**, dolore, urgenza',
        'Ispezione: **colore**, consistenza, odore',
        'Palpazione: **vescica**, addome',
        'Ascolto: **borborigmi** (4 quadranti)',
        'Documentazione: **frequenza**, volume',
        'Scale: **Bristol** (feci), **IIEI** (incontinenza)',
        'Rischio: **stipsi**, **incontinenza**, **ritenzione**',
      ],
    },
    {
      title: 'Interventi di Assistenza',
      icon: 'Hand',
      accent: 'teal',
      items: [
        'Promuovere **idratazione** (1,5–2 L/die)',
        'Incoraggiare **fibre** (25–30 g/die)',
        'Posizionamento: **seduto**, piedi appoggiati',
        'Routine: **orari fissi** per minzione/defecazione',
        'Privacy: **dignità**, rispetto',
        'Igiene: **dall’ano alla vescica** (femmine)',
        'Educazione: **riabilitazione** sfinterica',
      ],
    },
    {
      title: 'Complicanze e Rischi',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        '**Stipsi**: feci dure, dolore, emorroidi',
        '**Incontinenza**: urine/feci, socializzazione',
        '**Ritenzione urinaria**: vescica piena, dolore',
        '**Ostetrica**: prolasso, cistocèle',
        '**Infezioni**: UTI, proctite',
        '**Nutrimento**: malassorbimento, disidratazione',
        '**Psicologico**: ansia, isolamento',
      ],
    },
  ],
  keyPoints: [
    'Monitorare **bilancio idrico** e **transito intestinale** quotidianamente',
    'Prevenire **lesioni da pressione** e **infezioni** tramite igiene e mobilizzazione',
  ],
}

export default map
