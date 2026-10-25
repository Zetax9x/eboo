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
    'SIAARTI — Linee guida per la terapia sostitutiva renale e gestione degli elettroliti',
    'Ministero della Salute — Raccomandazioni per la sicurezza del paziente (2023)',
  ],
  intro: 'Il cloruro di potassio (KCl) è un **farmaco ad alto rischio** (High Alert). Le concentrazioni elevate possono causare **arresto cardiaco** se infuse per via endovenosa centrale o periferica senza adeguata diluizione e monitoraggio.',
  tableTitle: 'Concentrazioni massime ammesse per via di somministrazione',
  tableIcon: 'Gauge',
  columns: ['Via di somministrazione', 'Concentrazione massima', 'Velocità massima', 'Note'],
  widths: [1.5, 1.2, 1.2, 2],
  rows: [
    ['Endovenosa periferica (CVP)', '**40 mEq/L**', '**10 mEq/h**', 'Solo in pazienti con monitoraggio continuo; evitare se possibile'],
    ['Endovenosa centrale (CVC)', '**40 mEq/L**', '**20 mEq/h**', 'Richiede catetere centrale; mai bolus IV'],
    ['Endovenosa periferica (bassa concentrazione)', '**20 mEq/L**', '**10 mEq/h**', 'Preferita in terapia ambulatoriale o degenza'],
    ['Enterale (sondino)', '**200 mEq/L**', 'Secondo prescrizione', 'Diluire in soluzione isotonica; mai puro'],
    ['Orale (compresse)', '**20 mEq** per compressa', 'Con pasti', 'Ridurre rischio di irritazione gastrica'],
  ],
  notes: [
    {
      title: 'Sicurezza e prevenzione errori',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        '**Mai** infondere KCl puro o concentrato > 40 mEq/L per via endovenosa',
        'Verificare **doppia firma** per concentrazioni > 20 mEq/L',
        'Usare **pompa a siringa** o infusore per controllare la velocità',
        'Monitorare **ECG continuo** durante l’infusione',
        'Controllare **funzione renale** e livelli sierici prima e durante la terapia',
      ],
    },
    {
      title: 'Segni di iperkaliemia',
      icon: 'HeartPulse',
      accent: 'orange',
      items: [
        'Parestesie, debolezza muscolare, **paralisi ascendente**',
        'ECG: **onde P larghe**, QRS allargato, **aritmie ventricolari**',
        'K⁺ sierico **> 5,5 mEq/L**: allarme; **> 6,5 mEq/L**: emergenza',
        'Trattamento acuto: **glucagone + insulina**, bicarbonato, calcio gluconato',
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
    'La via **periferica** è preferibile; la via **centrale** richiede maggiore cautela e monitoraggio',
    'Sempre verificare **funzione renale** e livelli sierici prima di iniziare la terapia',
  ],
}

export default map
