import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'asepsi-e-campo-sterile',
  chapter: 'fondamenti',
  title: 'Asepsi e campo sterile',
  subtitle: 'Principi, regole operative e gestione del campo sterile',
  icon: 'ShieldCheck',
  status: 'bozza',
  sources: [
    'Saiani L., Brugnolli A. — Trattato di cure infermieristiche, Idelson-Gnocchi',
    'FNOPI — Codice Deontologico delle Professioni Infermieristiche (2019)',
    'CDC — Guidelines for Disinfection and Sterilization in Healthcare Facilities (2008, updated)',
  ],
  intro:
    'L’**asepsi** è l’insieme delle tecniche per impedire l’ingresso di microrganismi in un sito sterile. Il **campo sterile** è l’area delimitata da un panno sterile su cui si collocano strumenti e materiali sterili.',
  illustration: {
    id: 'asepsi-campo-sterile',
    alt: 'Campo sterile con panno, strumenti e guanti sterili',
    prompt: 'sterile surgical field with white drape, sterile instruments, sterile gloves, gauze pads on a clean table',
    icon: 'Package',
  },
  columns: 2,
  blocks: [
    {
      title: 'Principi fondamentali',
      icon: 'ShieldCheck',
      accent: 'blue',
      items: [
        'Lo **sterile** tocca solo lo **sterile**',
        'Il **non sterile** non tocca lo **sterile**',
        'Il bordo del panno (~2,5 cm) è **non sterile**',
        'Ciò che esce dalla **vista** è considerato contaminato',
        'Tutto ciò che è **al di sotto del bordo** del campo sterile è considerato **contaminato**',
        'Il campo sterile è valido solo per la **durata della procedura**',
        'Qualsiasi **dubbio** sulla sterilità = **contaminazione**',
      ],
    },
    {
      title: 'Preparazione del campo',
      icon: 'Package',
      accent: 'green',
      items: [
        '**Igiene delle mani** prima di iniziare',
        'Indossare **guanti sterili** (se richiesto dalla procedura)',
        'Aprire il panno sterile **senza toccare l’interno**',
        'Posizionare gli strumenti **paralleli** al bordo, non oltre il bordo',
        'Tenere il campo **al di sopra del livello della vita**',
        'Non **attraversare** il campo con le mani o oggetti',
        'Non **sovrapporre** oggetti sterili su altri',
      ],
    },
    {
      title: 'Regole operative',
      icon: 'ListChecks',
      accent: 'purple',
      items: [
        'Prendere gli strumenti **dal centro** del campo, non dal bordo',
        'Se un oggetto sterile **cade**, è **contaminato**: sostituirlo',
        'Non **voltare le spalle** al campo, non parlarci sopra',
        'Non **soffiare** sul campo sterile',
        'Non **toccare** il campo con mani non sterili',
        'Se il campo si **bagna** o si **strappa**, è contaminato',
        'Preparare il campo **subito prima** dell’uso, non in anticipo',
      ],
    },
    {
      title: 'Contaminazione e gestione',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'Segnali di contaminazione: **bagnato**, **strappato**, **caduto**, **toccato**',
        'Se contaminato: **smontare** il campo e **ricominciare**',
        'Non **riutilizzare** oggetti contaminati',
        'Smaltire i rifiuti **contaminati** nel contenitore appropriato',
        'Lavare le mani **dopo** aver rimosso i guanti',
        'Documentare l’**evento** di contaminazione',
        'Segnalare all’**équipe** se necessario',
      ],
    },
    {
      title: 'Errori comuni',
      icon: 'CircleX',
      accent: 'orange',
      items: [
        'Toccare il **bordo** del panno sterile',
        'Posizionare strumenti **oltre il bordo**',
        'Lasciare il campo **incustodito**',
        'Parlare o **soffiare** sopra il campo',
        'Usare guanti **non sterili** per toccare il campo',
        'Non **lavare le mani** prima di preparare il campo',
        'Riutilizzare oggetti **caduti** o **bagnati**',
      ],
    },
    {
      title: 'Ruolo infermieristico',
      icon: 'User',
      accent: 'teal',
      checks: [
        { text: '**Preparare** il campo sterile secondo protocollo', kind: 'ok' },
        { text: '**Monitorare** l’integrità del campo durante la procedura', kind: 'ok' },
        { text: '**Riconoscere** i segni di contaminazione', kind: 'ok' },
        { text: '**Smontare** e **ricominciare** se contaminato', kind: 'ok' },
        { text: '**Educare** gli studenti e gli OSS ai principi di asepsi', kind: 'ok' },
        { text: '**Documentare** gli eventi di contaminazione', kind: 'ok' },
        { text: '**Segnalare** le non conformità al responsabile', kind: 'ok' },
      ],
    },
  ],
  keyPoints: [
    'Il **bordo** del campo sterile è la linea di demarcazione: tutto al di sotto è **contaminato**',
    'Qualsiasi **dubbio** sulla sterilità = **contaminazione**: smontare e ricominciare',
  ],
}

export default map
