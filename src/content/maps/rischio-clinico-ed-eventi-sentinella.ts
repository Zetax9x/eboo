import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'rischio-clinico-ed-eventi-sentinella',
  chapter: 'concorsi',
  title: 'Rischio clinico ed eventi sentinella',
  subtitle: 'Definizioni, classificazione, segnalazione e prevenzione',
  icon: 'ShieldAlert',
  status: 'bozza',
  sources: [
    'Ministero della Salute — Raccomandazioni per la prevenzione degli eventi sentinella (2019)',
    'AIFA — Rapporto annuale sulla farmacovigilanza e la sicurezza del paziente',
    'Codice deontologico FNOPI (2014) — Art. 17, 18, 19',
  ],
  intro:
    'Il **rischio clinico** è la probabilità che un paziente subisca un danno evitabile durante l’assistenza. Gli **eventi sentinella** sono gravi, inaspettati e indicano un problema sistematico.',
  columns: 2,
  blocks: [
    {
      title: 'Definizioni chiave',
      icon: 'BookOpen',
      accent: 'blue',
      items: [
        '**Rischio clinico**: probabilità di danno evitabile',
        '**Evento avverso**: danno non intenzionale durante l’assistenza',
        '**Evento sentinella**: danno grave, inaspettato, indicativo di fallimento sistematico',
        '**Near miss**: evento che *non* ha raggiunto il paziente (quasi errore)',
        '**Errore**: azione/omissione che devia dalle procedure standard',
        '**Incidente**: evento avverso che ha causato danno al paziente',
      ],
    },
    {
      title: 'Esempi di eventi sentinella',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'Morte inaspettata in pazienti stabili',
        'Svago o perdita di parti del corpo',
        'Procedure su paziente/sede/arto sbagliato',
        'Reazione avversa grave a farmaco (es. anafilassi)',
        'Caduta con esito grave (frattura, ematoma)',
        'Infezione da microrganismo multiresistente (MRSA, VRE)',
        'Sondino urinario o PEG posizionato erroneamente',
      ],
    },
    {
      title: 'Segnalazione e gestione',
      icon: 'ClipboardCheck',
      accent: 'green',
      items: [
        'Segnalare **immediatamente** al responsabile di reparto',
        'Compilare il **modulo di segnalazione** (registro eventi avversi)',
        'Non nascondere: cultura della **sicurezza** e non punizione',
        'Analisi **RAE** (Root Cause Analysis) per identificare cause sistemiche',
        'Comunicare al paziente/famiglia (trasparenza)',
        'Implementare **azioni correttive** e monitorarne l’efficacia',
      ],
    },
    {
      title: 'Prevenzione: le 5 giuste',
      icon: 'Target',
      accent: 'purple',
      items: [
        'Paziente **giusto** (verifica identità con 2 identificativi)',
        'Farmaco **giusto** (nome, dose, via, ora)',
        'Via di somministrazione **giusta** (IV, IM, orale, topica)',
        'Dose **giusta** (calcolo, doppia verifica per farmaci ad alto rischio)',
        'Tempo **giusto** (rispetto degli intervalli terapeutici)',
        'Verifica incrociata da **due operatori** per farmaci critici',
      ],
    },
    {
      title: 'Ruolo dell’infermiere',
      icon: 'User',
      accent: 'orange',
      items: [
        'Applicare le **procedure standard** (checklist, protocolli)',
        'Partecipare alla **formazione continua** sulla sicurezza',
        'Segnalare **near miss** e condizioni a rischio',
        'Promuovere la **comunicazione efficace** in équipe (SBAR)',
        'Rispettare il **Codice deontologico**: tutela della sicurezza',
        'Coinvolgere il paziente nella **prevenzione** (educazione)',
      ],
    },
    {
      title: 'Aspetti normativi',
      icon: 'FileText',
      accent: 'navy',
      checks: [
        { text: 'L. 24/2017 (Gelli-Bianco): responsabilità professionale', kind: 'ok' },
        { text: 'Codice deontologico FNOPI: art. 17-19 (sicurezza, segnalazione)', kind: 'ok' },
        { text: 'DM 739/1994: profilo professionale infermieristico', kind: 'ok' },
        { text: 'Accordo Stato-Regioni: formazione obbligatoria', kind: 'ok' },
        { text: 'Regolamento UE 2017/746: dispositivi medici e sicurezza', kind: 'ok' },
        { text: 'Linee guida ISS: prevenzione infezioni correlate', kind: 'ok' },
      ],
    },
  ],
  keyPoints: [
    'Cultura della **sicurezza**: segnalare, non nascondere; analizzare, non punire',
    'Le **5 giuste** sono la base della prevenzione degli errori farmacologici',
    'Gli eventi sentinella richiedono **analisi sistematica** (RAE) e azioni correttive',
  ],
}

export default map
