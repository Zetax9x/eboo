import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'elettroliti-concentrati-il-potassio',
  chapter: 'farmacologia',
  title: 'Elettroliti concentrati: il potassio',
  subtitle: 'Preparazioni, concentrazioni massime e sicurezza nell’infusione',
  icon: 'Droplet',
  status: 'bozza',
  sources: [
    'AIFA — Raccomandazioni per la prevenzione degli errori di somministrazione di farmaci ad alto rischio',
    'Ministero della Salute — Raccomandazione n. 1 sul corretto utilizzo delle soluzioni concentrate di cloruro di potassio (KCl), 2008',
    'ERC Guidelines 2021 — Special circumstances: iperkaliemia',
  ],
  intro: 'Il cloruro di potassio (KCl) è un **farmaco ad alto rischio** (High Alert). Le concentrazioni elevate possono causare **arresto cardiaco** se infuse per via endovenosa centrale o periferica senza adeguata diluizione e monitoraggio.',
  tableTitle: 'Concentrazioni massime ammesse per via di somministrazione',
  tableIcon: 'Gauge',
  columns: ['Via di somministrazione', 'Concentrazione massima', 'Velocità massima', 'Note'],
  widths: [1.5, 1.2, 1.2, 2],
  rows: [
    ['Endovenosa periferica (CVP)', '**40 mEq/L**', '**10 mEq/h**', 'Sempre diluito e in pompa; oltre: flebite e dolore'],
    ['Endovenosa centrale (CVC)', 'Più alta solo in area critica (protocollo)', '**20 mEq/h**', 'Con ECG continuo; mai in bolo EV'],
    ['Endovenosa periferica (bassa concentrazione)', '**20 mEq/L**', '**10 mEq/h**', 'Preferita in terapia ambulatoriale o degenza'],
    ['Enterale (sondino)', 'Preparazione orale diluita in acqua', 'Secondo prescrizione', 'Mai fiale EV per sonda'],
    ['Orale (compresse)', 'Variabile (es. 600 mg = **8 mEq**)', 'Con pasti', 'Ridurre rischio di irritazione gastrica'],
  ],
  notes: [
    {
      title: 'Sicurezza e prevenzione errori',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        '**Mai** KCl concentrato non diluito né in bolo; > 40 mEq/L **mai** in periferica',
        'Fiale concentrate **solo** in aree autorizzate, separate ed etichettate (Racc. n. 1)',
        'Usare **pompa a siringa** o infusore per controllare la velocità',
        '**ECG continuo** se velocità > 10 mEq/h o via centrale',
        'Controllare **funzione renale** e livelli sierici prima e durante la terapia',
      ],
    },
    {
      title: 'Segni di iperkaliemia',
      icon: 'HeartPulse',
      accent: 'orange',
      items: [
        'Parestesie, debolezza muscolare, **paralisi ascendente**',
        'ECG: **onde T alte e appuntite**, P appiattita, QRS allargato, **aritmie ventricolari**',
        'K⁺ sierico **> 5,5 mEq/L**: allarme; **> 6,5 mEq/L**: emergenza',
        'Trattamento acuto: **calcio** ev, **insulina + glucosio**, salbutamolo',
      ],
    },
    {
      title: 'Monitoraggio infermieristico',
      icon: 'ClipboardCheck',
      accent: 'blue',
      items: [
        'Misurare **K⁺ sierico** ogni 4–6 ore durante infusione rapida',
        'Registrare **diuresi** e funzione renale (creatinina, GFR)',
        'Osservare **ritmo cardiaco** e pressione arteriosa',
        'Segnalare **dolore, bruciore** o eritema alla sede di infusione',
      ],
    },
  ],
  keyPoints: [
    'Il potassio è un **farmaco ad alto rischio**: errori di concentrazione o velocità possono essere **fatali**',
    'Concentrazioni > 40 mEq/L solo per via **centrale**, in area critica e con ECG continuo',
    'Sempre verificare **funzione renale** e livelli sierici prima di iniziare la terapia',
  ],
}

export default map
