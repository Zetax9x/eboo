import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'insuline-tipi-e-profili-d-azione',
  chapter: 'farmacologia',
  title: 'Insuline: tipi e profili d’azione',
  subtitle: 'Inizio, picco e durata; somministrazione sicura e conservazione',
  icon: 'Syringe',
  status: 'bozza',
  sources: [
    'AMD-SID — Linea guida della Società Italiana di Diabetologia e dell’Associazione Medici Diabetologi: terapia del diabete mellito di tipo 1 e di tipo 2 (2021–2022)',
    'EMA/AIFA — Riassunti delle Caratteristiche del Prodotto delle insuline (Humalog, NovoRapid, Fiasp, Lyumjev, Actrapid, Lantus, Toujeo, Tresiba)',
    'ISMP — High-Alert Medications list (insuline)',
  ],
  intro:
    'Valori **indicativi** per via sottocutanea: variano con dose, sede, attività fisica e temperatura. Schema **basal-bolus**: una basale + rapida ai pasti; correzioni secondo protocollo.',
  tableTitle: 'Profili d’azione (via sottocutanea)',
  tableIcon: 'Clock',
  columns: ['Tipo', 'Esempi', 'Inizio', 'Picco', 'Durata'],
  widths: [1.6, 2.2, 1.1, 1.1, 1.6],
  rows: [
    ['**Analoghi rapidi** (prandiali)', 'Lispro, aspart, glulisina', '10–20 min', '1–3 h', '3–5 h · iniezione **0–15 min prima** del pasto'],
    ['Analoghi a inizio più rapido', 'Aspart rapida (Fiasp), lispro ultrarapida (Lyumjev)', '≈ 5 min più rapide dei precedenti', '1–2 h', '3–5 h · anche **fino a 20 min dopo** l’inizio del pasto'],
    ['**Umana regolare** (rapida)', 'Actrapid, Humulin R', '30 min', '2–4 h', '6–8 h · unica di uso comune in **infusione EV**'],
    ['**Intermedia NPH** (isofano)', 'Humulin I, Insulatard', '1–2 h', '4–8 h', '12–18 h · **lattiginosa**: risospendere prima dell’uso'],
    ['Premiscelate', 'Aspart/aspart protamina 30/70, lispro/lispro protamina 25/75 e 50/50', 'Come la componente rapida', 'Doppio picco', 'Fino a 18–24 h · risospendere'],
    ['**Basale** glargine U100', 'Lantus, Abasaglar', '1–2 h', '**Nessun picco** rilevante', '≈ 24 h · limpida, 1 volta al giorno'],
    ['Basale glargine U300', 'Toujeo', 'Graduale (ore)', 'Profilo piatto', 'Fino a **36 h**'],
    ['Basale degludec', 'Tresiba', 'Graduale (ore)', 'Profilo piatto', '**> 42 h** · orario flessibile'],
  ],
  notes: [
    {
      title: 'Somministrazione',
      icon: 'Syringe',
      accent: 'blue',
      items: [
        'Sedi: **addome** (assorbimento più rapido), cosce, glutei, braccia',
        '**Ruotare** le sedi: previene la **lipoipertrofia**',
        'Penna: ago 4–6 mm, a 90°; tenere premuto **10 s**',
        'Glicemia capillare **prima** della dose e del pasto',
      ],
    },
    {
      title: 'Sicurezza',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        'Farmaco **ad alto rischio**: mai “U” per unità, scrivere **“unità”**',
        'Solo siringhe da insulina; **mai** prelevare dalla penna',
        'Concentrazioni diverse (U100, U200, U300): attenzione agli scambi',
      ],
    },
    {
      title: 'Conservazione',
      icon: 'Thermometer',
      accent: 'teal',
      items: [
        'Confezioni chiuse in **frigo 2–8 °C**, mai congelate',
        'In uso: a temperatura ambiente per il tempo indicato in RCP (spesso **4 settimane**)',
        'Scrivere la **data di apertura**; non usare se torbida (tranne NPH/premiscelate)',
      ],
    },
  ],
  keyPoints: [
    'Ipoglicemia **< 70 mg/dL**: 15 g di glucosio, ricontrollo dopo **15 min** (regola del 15)',
    'Nel diabete tipo 1 la basale **non va mai sospesa**, anche a digiuno',
  ],
}

export default map
