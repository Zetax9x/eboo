import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'le-vie-di-somministrazione',
  chapter: 'farmacologia',
  title: 'Le vie di somministrazione',
  subtitle: 'Enterali, parenterali e topiche: rapidità, vantaggi e attenzioni',
  icon: 'Route',
  status: 'bozza',
  sources: [
    'Ministero della Salute — Raccomandazione n. 19 sulla manipolazione delle forme farmaceutiche orali solide, 2019',
    'Craven R.F., Hirnle C.J. — Principi fondamentali dell’assistenza infermieristica, CEA',
    'Clayton B.D., Willihnganz M.J. — Farmacologia per infermieri, Edra',
  ],
  intro:
    'La via condiziona **velocità d’azione**, **biodisponibilità** e rischi. La via è parte della prescrizione: **non si cambia** senza indicazione medica.',
  tableTitle: 'Confronto tra le vie',
  tableIcon: 'Route',
  columns: ['Via', 'Inizio d’azione', 'Vantaggi', 'Attenzioni'],
  widths: [1.2, 1.1, 1.8, 2.2],
  rows: [
    ['Orale (per os)', 'Lento: **30–60 min**', 'Semplice, economica, non invasiva', '**Primo passaggio** epatico; serve deglutizione valida; vomito e cibo interferiscono'],
    ['Sublinguale / buccale', 'Rapido: **pochi minuti**', 'Evita il primo passaggio (es. **nitroglicerina**)', 'Non deglutire né masticare; mucosa integra'],
    ['Rettale', 'Variabile', 'Utile se vomito, incoscienza, convulsioni', 'Assorbimento **irregolare**; evitare se diarrea o chirurgia rettale'],
    ['Sottocutanea (SC)', '**15–30 min**', 'Assorbimento lento e costante (**insulina**, **EBPM**)', 'Piccoli volumi; **ruotare** i siti; ridotta se ipoperfusione'],
    ['Intramuscolare (IM)', '**10–20 min**', 'Più rapida della SC; preparati **depot**', 'Siti sicuri (**ventrogluteo**, deltoide); evitare se anticoagulati o piastrinopenici'],
    ['Endovenosa (EV)', '**Immediato**', 'Biodisponibilità **100%**, dose titolabile', 'Errori **irreversibili**; flebite, stravaso, infezioni; velocità corretta'],
    ['Inalatoria', '**Rapido**', 'Azione locale polmonare, pochi effetti sistemici', 'Tecnica corretta del device; **sciacquare** la bocca dopo corticosteroidi'],
    ['Transdermica (cerotto)', 'Lento, durata **lunga**', 'Livelli stabili (es. **fentanil**, nitrati)', 'Rimuovere il vecchio cerotto; **calore** aumenta l’assorbimento; ruotare la sede'],
    ['Intradermica (ID)', 'Locale', 'Test diagnostici (es. **Mantoux**), test allergici', 'Volume minimo (**0,1 mL**); formazione del pomfo'],
  ],
  notes: [
    {
      title: 'Angoli d’iniezione',
      icon: 'Syringe',
      accent: 'blue',
      items: [
        'Intradermica: **10–15°**',
        'Sottocutanea: **45–90°** (in base al pannicolo)',
        'Intramuscolare: **90°**',
        'Venipuntura: circa **15–30°**',
      ],
    },
    {
      title: 'Via enterale da sonda',
      icon: 'Pill',
      accent: 'orange',
      items: [
        'Non frantumare forme **gastroresistenti** o a **rilascio modificato**',
        'Verificare con il farmacista (**Racc. n. 19**)',
        'Lavare la sonda con acqua prima, tra e dopo i farmaci',
      ],
    },
    {
      title: 'Sicurezza',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        'Via **errata** = errore in terapia (es. orale somministrato EV)',
        'Usare siringhe **dedicate** per uso orale/enterale',
        'Osservare il paziente dopo le vie rapide',
      ],
    },
  ],
  keyPoints: [
    'Velocità d’azione: **EV > inalatoria/sublinguale > IM > SC > orale**',
    'Prima di ogni EV: verificare **pervietà** dell’accesso e **compatibilità** dei farmaci',
  ],
}

export default map
