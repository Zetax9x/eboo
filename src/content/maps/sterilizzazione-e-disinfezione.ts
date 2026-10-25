import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'sterilizzazione-e-disinfezione',
  chapter: 'specialistica',
  title: 'Sterilizzazione e disinfezione',
  subtitle: 'Livelli di disinfettante, metodi fisici e chimici, responsabilità infermieristica',
  icon: 'ShieldCheck',
  status: 'bozza',
  sources: [
    'Ministero della Salute — Raccomandazioni per la prevenzione delle infezioni correlate all’assistenza (ICA)',
    'CDC — Guidelines for Disinfection and Sterilization in Healthcare Facilities (2008, updated)',
    'FNOPI — Codice Deontologico dell’Infermiere (2020)',
  ],
  intro:
    'Processi per **ridurre o eliminare** i microrganismi su dispositivi e superfici. La scelta del metodo dipende dal **livello di rischio** (classificazione di Spaulding) e dal tipo di strumento.',
  illustration: {
    id: 'sterilizzazione-autoclave',
    alt: 'Autoclave in uso in un reparto ospedaliero',
    prompt: 'steam sterilizer with an open round door and a wire basket of surgical instruments inside, plain front panel with only round knobs and no screen',
    icon: 'Box',
  },
  columns: 3,
  blocks: [
    {
      title: 'Classificazione Spaulding',
      icon: 'Layers',
      accent: 'purple',
      items: [
        '**Critici**: penetrano tessuti/sangue → **Sterilizzazione**',
        '**Semicritici**: contatto mucose/pelle non integra → **Alta disinfezione**',
        '**Non critici**: contatto pelle integra → **Bassa disinfezione**',
        'Esempio critico: bisturi, cateteri, endoscopi diagnostici',
        'Esempio semicritico: specula, laringoscopi, cuffie BP',
        'Esempio non critico: barelle, maniglie, fonendoscopi',
      ],
    },
    {
      title: 'Sterilizzazione Fisica',
      icon: 'Zap',
      accent: 'red',
      items: [
        '**Autoclave (vapore)**: 121 °C / 15 min o 134 °C / 3-4 min',
        'Sterilizzazione a secco: 160 °C / 2 h o 170 °C / 1 h',
        'Radiazioni ionizzanti: uso industriale (siringhe, guanti)',
        'Ossido di etilene: per materiali termolabili (uso limitato)',
        'Plasma (perossido di idrogeno): rapido, per endoscopi',
        'Monitoraggio: indicatori chimici, biologici, fisici',
      ],
    },
    {
      title: 'Disinfezione Chimica',
      icon: 'FlaskConical',
      accent: 'blue',
      items: [
        '**Alta**: Glutaraldeide 2%, Peracetico, Ortotolilene (OTT)',
        '**Media**: Alcol 70%, Cloro attivo 0,5-1%, Ammoni quaternarie',
        '**Bassa**: Alcol 70%, Ammoni quaternarie, Cloro 0,05%',
        'Tempo di contatto: rispettare scheda tecnica (es. Glutaraldeide 20 min)',
        'Attività su spore: solo Glutaraldeide, Peracetico, OTT',
        'Tossicità: Glutaraldeide (respiratoria), Cloro (corrosivo)',
      ],
    },
    {
      title: 'Procedura di Base',
      icon: 'Workflow',
      accent: 'green',
      items: [
        '1. **Lavaggio** manuale o in lavatrice (rimuove sporco)',
        '2. **Risciacquo** con acqua sterile o distillata',
        '3. **Asciugatura** con garza sterile o aria filtrata',
        '4. **Imballaggio** in carta/busta sterile o contenitore',
        '5. **Trattamento** (sterilizzazione o disinfezione)',
        '6. **Conservazione** in area pulita, etichettato',
      ],
    },
    {
      title: 'Ruolo Infermieristico',
      icon: 'User',
      accent: 'teal',
      checks: [
        { text: 'Verificare **integrità** dell’imballaggio sterile', kind: 'ok' },
        { text: 'Rispettare **tempo di contatto** dei disinfettanti', kind: 'ok' },
        { text: 'Usare **DPI** adeguati (guanti, occhiali, mascherina)', kind: 'ok' },
        { text: 'Segnalare **difetti** di sterilizzazione o imballaggio', kind: 'ok' },
        { text: 'Documentare **data/ora** di apertura del pacchetto', kind: 'ok' },
        { text: 'Partecipare alla **formazione** sul corretto uso dei dispositivi', kind: 'ok' },
      ],
    },
    {
      title: 'Errori da Evitare',
      icon: 'TriangleAlert',
      accent: 'orange',
      items: [
        'Usare disinfettante **basso** su strumenti semicritici',
        'Ignorare il **tempo di contatto** minimo',
        'Riutilizzare imballaggi **aperti** o danneggiati',
        'Mettere in autoclave materiali **termolabili** senza verifica',
        'Non **risciacquare** dopo disinfezione chimica',
        'Conservare strumenti sterili in **area sporca**',
      ],
    },
  ],
  keyPoints: [
    'Critici = **Sterilizzazione** · Semicritici = **Alta disinfezione** · Non critici = **Bassa disinfezione**',
    'L’alcol 70% **non** elimina le spore: non adatto per strumenti critici',
    'Verificare sempre **indicatori chimici** e **data di scadenza** prima dell’uso',
  ],
}

export default map
