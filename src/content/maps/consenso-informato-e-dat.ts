import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'consenso-informato-e-dat',
  chapter: 'concorsi',
  title: 'Consenso informato e DAT',
  subtitle: 'Diritto alla scelta, capacità decisionale e disposizioni anticipate',
  icon: 'FileText',
  status: 'bozza',
  sources: [
    'Legge 219/2017 — Disposizioni in materia di consenso informato e di disposizioni anticipate di trattamento',
    'Codice deontologico degli infermieri (FNOPI, 2014)',
    'Linee guida nazionali per la pratica clinica — Consenso informato (Ministero della Salute)',
  ],
  intro:
    'Il **consenso informato** è il diritto del paziente di essere informato e di scegliere. Le **DAT** (disposizioni anticipate di trattamento) sono la volontà espressa in anticipo da chi è capace, per il momento in cui non lo sarà più.',
  columns: 2,
  blocks: [
    {
      title: 'Consenso informato',
      icon: 'ClipboardCheck',
      accent: 'blue',
      items: [
        'Diritto del paziente a **scegliere** o rifiutare le cure',
        'Obbligo del medico di **informare** in modo chiaro e completo',
        'Elementi: diagnosi, prognosi, opzioni, rischi, benefici, alternative',
        'Deve essere **libero**, **consapevole**, **specifico** e **revocabile**',
        'Documento scritto nella **cartella clinica**',
        'L’infermiere **verifica** che il paziente abbia compreso',
        'In caso di **rifiuto**, documentare e rispettare la volontà',
      ],
    },
    {
      title: 'Capacità decisionale',
      icon: 'Brain',
      accent: 'purple',
      items: [
        'Capacità di **comprendere** le informazioni e **valutare** le conseguenze',
        'Valutazione **clinica** e **funzionale** (non solo età)',
        'Fattori che compromettono: **demenza**, **psicosi**, **intossicazione**, **dolore acuto**',
        'Se incapace: **tutore** o **fiduciario** nominato',
        'In emergenza: **presunzione di consenso** (salva la vita)',
        'L’infermiere **osserva** e **segnala** alterazioni cognitive',
        'Documentare la **valutazione** della capacità',
      ],
    },
    {
      title: 'DAT — Disposizioni anticipate',
      icon: 'FileText',
      accent: 'green',
      items: [
        'Documento scritto da persona **capace** (≥ 18 anni)',
        'Contiene: **rifiuto** di trattamenti specifici, **nomina** del fiduciario',
        'Registrato presso l’**ASL** o il **medico di famiglia**',
        'Ha **valore vincolante** per il medico (salvo casi eccezionali)',
        'Il **fiduciario** rappresenta la volontà del paziente',
        'Può essere **revocato** in qualsiasi momento',
        'L’infermiere **verifica** l’esistenza e la **comunicabilità**',
      ],
    },
    {
      title: 'Ruolo dell’infermiere',
      icon: 'Hand',
      accent: 'orange',
      items: [
        '**Verificare** che il consenso sia stato ottenuto e documentato',
        '**Informare** il paziente in modo chiaro e rispettoso',
        '**Rispettare** la volontà espressa (consenso o rifiuto)',
        '**Segnalare** al medico dubbi sulla capacità decisionale',
        '**Documentare** ogni aspetto nella cartella infermieristica',
        '**Coinvolgere** il fiduciario se presente',
        '**Formarsi** su comunicazione e etica (ECM)',
      ],
    },
    {
      title: 'Aspetti giuridici',
      icon: 'ShieldCheck',
      accent: 'navy',
      checks: [
        { text: 'Legge **219/2017** (consenso e DAT)', kind: 'ok' },
        { text: 'Codice deontologico **FNOPI** (art. 10, 11)', kind: 'ok' },
        { text: 'Codice civile **art. 32** (consenso alle cure)', kind: 'ok' },
        { text: 'Codice penale **art. 593** (lesioni colpose)', kind: 'warn' },
        { text: 'Responsabilità per **mancata informazione**', kind: 'warn' },
        { text: 'DAT **non** applicabili in emergenza imminente', kind: 'no' },
      ],
    },
    {
      title: 'Errori comuni',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'Assumere che il **silenzio** = consenso',
        'Non **verificare** la comprensione del paziente',
        'Ignorare le **DAT** presenti in cartella',
        'Non **documentare** il rifiuto o il consenso',
        'Non **coinvolgere** il fiduciario quando dovuto',
        'Confondere **consenso** e **autorizzazione** (sono diversi)',
        'Non **aggiornare** il paziente su nuove opzioni',
      ],
    },
  ],
  keyPoints: [
    'Consenso = **informazione** + **scelta libera** + **documentazione**',
    'DAT = volontà **anticipata** + **fiduciario** + **vincolante**',
    'L’infermiere **verifica**, **informa**, **rispetta**, **documenta**',
  ],
}

export default map
