import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'scale-di-valutazione-braden-norton-conley-nrs',
  chapter: 'specialistica',
  title: 'Scale di valutazione: Braden, Norton, Conley, NRS',
  subtitle: 'Strumenti standard per rischio ulcere da pressione e intensità del dolore',
  icon: 'ClipboardCheck',
  status: 'bozza',
  sources: [
    'NPIAP/EPUAP/PPPIA — International Guideline for the Prevention and Treatment of Pressure Ulcers/Injuries, 2019',
    'Ministero della Salute — Linee guida per la prevenzione e la gestione delle lesioni da pressione, 2022',
    'FNOPI — Linee guida nazionali per la valutazione e gestione del dolore, 2022',
  ],
  intro:
    'Le scale standardizzate **quantificano** il rischio di lesioni da pressione e l’intensità del dolore, guidando interventi infermieristici mirati e documentabili.',
  tableTitle: 'Confronto tra le principali scale infermieristiche',
  tableIcon: 'ClipboardList',
  columns: ['Scala', 'Aree valutate', 'Punteggio', 'Soglia di rischio', 'Utilizzo clinico'],
  rows: [
    ['**Braden**', 'Percezione, umidità, attività, mobilità, alimentazione, attrito', '6–23', '≤ 18 = rischio; ≤ 12 = alto', 'Più usata in acuto e subacuto; valida per adulti e anziani'],
    ['**Norton**', 'Condizione fisica, stato mentale, attività, mobilità, incontinenza', '5–20', '≤ 14 = rischio; ≤ 12 = alto', 'Semplice e rapida; spesso usata in RSA e geriatria'],
    ['**Conley**', 'Stato generale, attività, mobilità, incontinenza, nutrizione', '5–20', '≤ 14 = rischio; ≤ 12 = alto', 'Alternativa alla Norton; utile in setting cronici'],
    ['**NRS**', 'Intensità percepita del dolore (scala numerica 0–10)', '0–10', '≥ 4 = moderato/severo; ≥ 7 = severo', 'Standard per valutazione del dolore in adulti e adolescenti ≥ 12 anni'],
  ],
  widths: [1.2, 2.5, 0.8, 1.5, 2],
  notes: [
    {
      title: 'Braden: dettagli dei 6 parametri',
      icon: 'Target',
      accent: 'blue',
      items: [
        '**Percezione**: 1 = incapace, 2 = molto limitata, 3 = limitata, 4 = integra',
        '**Umidità**: 1 = bagnata, 2 = frequente, 3 = occasionale, 4 = rara',
        '**Attività**: 1 = a letto, 2 = in sedia, 3 = cammina poco, 4 = cammina',
        '**Mobilità**: 1 = immobile, 2 = molto limitata, 3 = limitata, 4 = libera',
        '**Alimentazione**: 1 = non mangia, 2 = < metà, 3 = > metà, 4 = normale',
        '**Attrito**: 1 = difficoltà, 2 = con aiuto, 3 = con sforzo, 4 = senza sforzo',
      ],
    },
    {
      title: 'NRS: come si usa',
      icon: 'Gauge',
      accent: 'orange',
      items: [
        'Chiedere: “Da 0 a 10, quanto è forte il dolore?”',
        '**0** = nessun dolore, **1–3** = lieve, **4–6** = moderato, **7–10** = severo',
        'Valutare **prima** e **dopo** ogni intervento analgesico',
        'Documentare **sede**, **caratteristiche**, **fattori scatenanti**',
        'Rivalutare a **30 min** (opioide) o **1 ora** (FANS)',
        'Se NRS ≥ 4, attivare **piano terapeutico** e riferire al medico',
      ],
    },
    {
      title: 'Errori comuni e buone pratiche',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        'Non confondere **Braden** e **Norton**: parametri e soglie diverse',
        'La **NRS** non è valida per **delirium** o **disabilità cognitive**: usare PAINAD, CPOT',
        'Rivalutare la scala **almeno ogni 8 ore** o dopo cambio di condizione',
        'Documentare **data, ora, punteggio, interventi** nella cartella',
        'Coinvolgere il **paziente** nella valutazione: è il suo giudizio soggettivo',
        'Punteggio critico (Braden ≤ 12, NRS ≥ 7) → **avvisare** medico e équipe',
      ],
    },
  ],
  keyPoints: [
    'Braden e Norton/Conley valutano il **rischio di lesioni da pressione**; NRS valuta l’**intensità del dolore**',
    'Soglie critiche: Braden ≤ 12, Norton/Conley ≤ 12, NRS ≥ 7 → **azione immediata**',
    'La valutazione deve essere **documentata**, **rivalutata** e **comunicata** all’équipe',
  ],
}

export default map
