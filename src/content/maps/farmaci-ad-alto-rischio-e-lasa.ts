import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'farmaci-ad-alto-rischio-e-lasa',
  chapter: 'farmacologia',
  title: 'Farmaci ad alto rischio e LASA',
  subtitle: 'Elenco ISMP, farmaci LASA e strategie di sicurezza',
  icon: 'ShieldAlert',
  status: 'bozza',
  sources: [
    'ISMP — List of High-Alert Medications (2024)',
    'AIFA — Raccomandazioni per la prevenzione degli errori da farmaci',
    'OMS — WHO Model List of High-Alert Medications',
  ],
  intro: 'I **farmaci ad alto rischio** (HAM) sono quelli che possono causare danni gravi se usati in modo improprio. I **LASA** (Look-Alike, Sound-Alike) sono farmaci con nomi o confezioni simili che aumentano il rischio di confusione.',
  tableTitle: 'Principali farmaci ad alto rischio e LASA',
  tableIcon: 'Pill',
  columns: ['Categoria', 'Esempi di HAM', 'Esempi LASA', 'Rischio principale'],
  widths: [1.2, 1.8, 1.8, 1.5],
  rows: [
    ['Insuline', 'Insulina glargine, aspart, lispro', 'Humalog vs Humulin, Lantus vs Levemir', 'Ipoglicemia grave, coma'],
    ['Anticoagulanti', 'Eparina, enoxaparina, warfarin', 'Heparin vs Heparin flush, Lovenox vs Lovenox', 'Emorragia, ematoma'],
    ['Oppioidi', 'Morfina, fentanil, ossicodone', 'Oxycodone vs Oxazepam, Fentanyl vs Fentolamine', 'Depressione respiratoria, morte'],
    ['Soluzioni ipertoniche', 'NaCl 3%, KCl 14.9%', 'NaCl 0.9% vs NaCl 3%, KCl vs CaCl2', 'Disidratazione, aritmie'],
    ['Antipsicotici', 'Haloperidol, olanzapina', 'Haldol vs Haldol decanoate, Zyprexa vs Zyprexa R', 'Sindrome maligna da neurolettici'],
    ['Antiepilettici', 'Fenitoina, valproato', 'Dilantin vs Dilantin ER, Depakote vs Depakene', 'Status epilettico, epatotossicità'],
    ['Cimelio', 'Ciclosporina, tacrolimus', 'Sandimmune vs Neoral, Prograf vs Prograf', 'Rifiuto d’organo, tossicità renale'],
  ],
  notes: [
    {
      title: 'Strategie di sicurezza',
      icon: 'ShieldCheck',
      accent: 'green',
      items: [
        'Verifica **duplice** per HAM e LASA',
        'Etichette **distinte** e colori diversi',
        'Non abbreviare nomi di farmaci',
        'Usare **nomi generici** quando possibile',
        'Conservare farmaci LASA in **aree separate**',
      ],
    },
    {
      title: 'Errori frequenti',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'Confondere **mL** con **gocce/min**',
        'Somministrare **KCl** per via endovenosa diretta',
        'Scambiare **insulina** rapida con lunga durata',
        'Dose errata di **warfarin** (INR non controllato)',
        'Confondere **fentanil** con altri oppioidi',
      ],
    },
    {
      title: 'Ruolo infermieristico',
      icon: 'ClipboardCheck',
      accent: 'blue',
      items: [
        'Verificare **prescrizione, dose, via, ora**',
        'Controllare **identità paziente** e allergie',
        'Monitorare **parametri vitali** dopo somministrazione',
        'Segnalare **eventi avversi** e near-miss',
        'Partecipare a **audit** e formazione continua',
      ],
    },
  ],
  keyPoints: [
    'I **LASA** sono la causa principale di errori di somministrazione',
    'La **verifica duplice** è obbligatoria per tutti gli HAM',
    'Il **KCl** concentrato va sempre diluito e infuso lentamente',
  ],
}

export default map
