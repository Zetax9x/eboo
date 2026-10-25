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
    'Potter P.A., Perry A.G. — Fundamentals of Nursing, Elsevier',
    'NANDA International — Diagnosi infermieristiche 2024-2026, CEA',
    'Saiani L., Brugnolli A. — Trattato di cure infermieristiche, Idelson-Gnocchi',
  ],
  intro:
    'L’eliminazione è un processo fisiologico complesso che coinvolge **sistema nervoso**, **muscolatura liscia** e **sfinteri**. L’infermiere valuta, monitora e assiste per mantenere la dignità e la salute.',
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
        'Minzioni notturne: **0–1**',
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
        'Frequenza normale: da **3/die** a **3/settimana**',
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
        'Auscultazione: **rumori intestinali** (4 quadranti)',
        'Documentazione: **frequenza**, volume',
        'Scale: **Bristol** (feci), **ICIQ-SF** (incontinenza)',
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
        'Igiene: **dal meato urinario verso l’ano** (femmine)',
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
        '**Pavimento pelvico**: prolasso, cistocele',
        '**Infezioni**: IVU, proctite',
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
