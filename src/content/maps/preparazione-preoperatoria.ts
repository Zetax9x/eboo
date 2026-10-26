import type { ProcedureMap } from '../../book/types'

const map: ProcedureMap = {
  kind: 'procedure',
  id: 'preparazione-preoperatoria',
  chapter: 'procedure',
  title: 'Preparazione preoperatoria',
  subtitle: 'Checklist infermieristica per la sicurezza del paziente in sala operatoria',
  icon: 'ClipboardCheck',
  status: 'bozza',
  sources: [
    'NPSA — National Patient Safety Agency: Safe Surgery Saves Lives (2008)',
    'OMS — World Health Organization: Surgical Safety Checklist (ultima revisione, 2019)',
    'Istituto Superiore di Sanità – Linee guida per la prevenzione delle infezioni correlate all’assistenza (2017)',
  ],
  materials: [
    { label: 'Cartella clinica', icon: 'FileText' },
    { label: 'Consensi informati', icon: 'ClipboardList' },
    { label: 'Esami ematochimici', icon: 'TestTubes' },
    { label: 'Radiografie / TAC', icon: 'Monitor' },
    { label: 'Elenco farmaci', icon: 'Pill' },
    { label: 'Protesi / impianti', icon: 'Package' },
    { label: 'Allergie', icon: 'TriangleAlert' },
    { label: 'Gruppo sanguigno', icon: 'Droplet' },
  ],
  safety: [
    { text: 'Identificazione paziente con **2 dati** (nome + data nascita)', kind: 'ok' },
    { text: 'Verificare **consenso informato** firmato e specifico', kind: 'ok' },
    { text: 'Confermare **sito chirurgico** e lateralità (destra/sinistra)', kind: 'alert' },
    { text: 'Segnalare **allergie** a farmaci, lattice, antisettici', kind: 'warn' },
    { text: 'Rimuovere **protesi mobili**, gioielli, lenti a contatto', kind: 'ok' },
    { text: 'Verificare **digiuno** (minimo 6-8 ore per solidi)', kind: 'warn' },
  ],
  steps: [
    {
      title: 'Verifica documenti',
      items: ['Cartella clinica completa', 'Esami recenti disponibili', 'Immagini diagnostiche pronte'],
      icon: 'FileText',
    },
    {
      title: 'Valutazione paziente',
      items: ['Stato nutrizionale e idratazione', 'Funzionalità cardiaca e respiratoria', 'Rischio tromboembolico'],
      icon: 'Eye',
    },
    {
      title: 'Preparazione cutanea',
      items: ['Depilazione **solo se necessaria**', 'Doccia con antisettico', 'Nessuna crema o unghie artificiali'],
      icon: 'Package',
    },
    {
      title: 'Gestione farmaci',
      items: ['Sospensione anticoagulanti (protocollo)', 'Continuità antipertensivi e antidiabetici', 'Somministrazione preoperatoria'],
      icon: 'ListChecks',
    },
    {
      title: 'Preparazione sala',
      items: ['Posizionamento corretto del paziente', 'Riscaldamento corporeo', 'Profilassi tromboembolica'],
      icon: 'Package',
    },
    {
      title: 'Checklist finale',
      items: ['Conferma identità e procedura', 'Verifica sito chirurgico', 'Segnalazione rischi specifici'],
      icon: 'ListChecks',
    },
  ],
  complications: [
    { label: 'Aspirazione gastrica', sub: 'digiuno inadeguato, reflusso' },
    { label: 'Infezione del sito chirurgico', sub: 'antisepsi carente, barriera sterile' },
    { label: 'Tromboembolia', sub: 'immobilità, rischio alto non gestito' },
    { label: 'Reazione allergica', sub: 'anestesia, antibiotici, lattice' },
    { label: 'Errore di sito', sub: 'mancata verifica lateralità' },
    { label: 'Ipoglicemia', sub: 'diabetico in digiuno, insulina non gestita' },
  ],
  nurseRole: [
    'Coordinare la **checklist** con il team chirurgico',
    'Verificare la **sicurezza** del paziente (identità, sito, consenso)',
    'Monitorare i **parametri vitali** e lo stato emotivo',
    'Documentare ogni **fase** della preparazione',
  ],
}

export default map
