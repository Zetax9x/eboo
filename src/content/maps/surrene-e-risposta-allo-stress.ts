import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'surrene-e-risposta-allo-stress',
  chapter: 'anatomia',
  title: 'Surrene e risposta allo stress',
  subtitle: 'Corticale e midollare: ormoni, azioni e alterazioni',
  icon: 'Zap',
  status: 'bozza',
  sources: [
    'Tortora G.J., Derrickson B. — Principi di anatomia e fisiologia, CEA',
    'Brunner & Suddarth — Infermieristica medico-chirurgica, CEA (disturbi surrenalici)',
    'Silverthorn D.U. — Fisiologia umana. Un approccio integrato, Pearson',
  ],
  intro:
    'Due ghiandole **retroperitoneali** sopra i reni. La **corticale** (esterna) produce steroidi sotto controllo dell’**ACTH** e del sistema **renina-angiotensina**; la **midollare** (interna) è un ganglio simpatico modificato che libera **catecolamine**.',
  tableTitle: 'Zone del surrene e loro ormoni',
  tableIcon: 'Layers',
  columns: ['Zona', 'Ormoni', 'Azioni principali', 'Eccesso', 'Deficit'],
  widths: [1.2, 1.3, 2.2, 1.7, 1.7],
  rows: [
    [
      'Corticale · **glomerulare**',
      '**Aldosterone** (mineralcorticoide)',
      'Rene: trattiene **Na⁺** e acqua, elimina **K⁺** e H⁺ · ↑ volemia e PA · stimolato da **angiotensina II** e iperkaliemia',
      '**Conn**: ipertensione, **ipokaliemia**, alcalosi metabolica',
      'Iponatriemia, **iperkaliemia**, ipotensione, disidratazione',
    ],
    [
      'Corticale · **fascicolata**',
      '**Cortisolo** (glucocorticoide)',
      '↑ **glicemia** (gluconeogenesi) · catabolismo proteico · **antinfiammatorio** e immunosoppressore · ritmo circadiano, picco al **mattino**',
      '**Cushing**: obesità centrale, “faccia lunare”, smagliature rubre, iperglicemia, osteoporosi',
      '**Addison**: astenia, **iperpigmentazione**, ipotensione, ipoglicemia',
    ],
    [
      'Corticale · **reticolare**',
      '**Androgeni** surrenalici (DHEA)',
      'Peli pubici e ascellari, **libido** femminile · precursori di testosterone ed estrogeni',
      '**Irsutismo**, acne, virilizzazione nella donna',
      'Riduzione di peli e libido nella donna',
    ],
    [
      '**Midollare**',
      '**Adrenalina** (~80%) e **noradrenalina**',
      'Risposta **“attacco o fuga”**: ↑ FC e contrattilità, vasocostrizione, broncodilatazione, ↑ glicemia, midriasi',
      '**Feocromocitoma**: crisi ipertensive, cefalea, sudorazione, palpitazioni',
      'Di solito senza quadro clinico: compensa il **sistema simpatico**',
    ],
    [
      'Controllo · **asse HPA**',
      '**CRH** (ipotalamo) → **ACTH** (ipofisi)',
      'L’ACTH stimola la **fascicolata** (e la reticolare) · il cortisolo frena CRH e ACTH (**feedback negativo**)',
      '**Malattia di Cushing**: adenoma ipofisario che secerne ACTH',
      'Insufficienza **secondaria** (ACTH ↓): niente iperpigmentazione, aldosterone conservato',
    ],
  ],
  notes: [
    {
      title: 'Risposta allo stress',
      icon: 'Zap',
      accent: 'orange',
      items: [
        'Fase **acuta** (secondi): simpatico + **adrenalina**',
        'Fase **prolungata** (ore-giorni): asse ipotalamo-ipofisi-surrene → **cortisolo**',
        'Selye: **allarme** → **resistenza** → **esaurimento**',
        'Stress cronico: ipertensione, iperglicemia, **infezioni**',
      ],
    },
    {
      title: 'Terapia cortisonica',
      icon: 'Pill',
      accent: 'purple',
      items: [
        'Somministrare al **mattino** (rispetta il ritmo)',
        'Mai **sospendere bruscamente** dopo uso prolungato: scalare',
        'Controllare **glicemia**, PA, peso, segni d’infezione',
        'Con FANS: rischio di **ulcera** gastrica',
      ],
    },
    {
      title: 'Crisi surrenalica',
      icon: 'Siren',
      accent: 'red',
      items: [
        'Emergenza: **shock** ipotensivo, vomito, dolore addominale, confusione',
        'Scatenanti: infezione, chirurgia, stop improvviso del cortisone',
        'Terapia: **idrocortisone** EV e liquidi secondo prescrizione',
        'Monitorare PA, **glicemia**, Na⁺ e K⁺, diuresi',
      ],
    },
  ],
  keyPoints: [
    '**Aldosterone**: trattiene sodio, elimina potassio · **cortisolo**: ormone dello stress, alza la glicemia',
    '**Cushing** = troppo cortisolo · **Addison** = insufficienza della corticale',
  ],
}

export default map
