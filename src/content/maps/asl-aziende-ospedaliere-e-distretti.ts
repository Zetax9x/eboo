import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'asl-aziende-ospedaliere-e-distretti',
  chapter: 'concorsi',
  title: 'ASL, aziende ospedaliere e distretti',
  subtitle: 'Come è organizzata l’assistenza sul territorio e in ospedale',
  icon: 'Layers',
  status: 'bozza',
  sources: [
    'D.Lgs. 30 dicembre 1992 n. 502 come modificato dal D.Lgs. 19 giugno 1999 n. 229',
    'DM 2 aprile 2015 n. 70 — Standard dell’assistenza ospedaliera',
    'DM 23 maggio 2022 n. 77 — Modelli e standard per l’assistenza territoriale',
  ],
  intro:
    'Le **Regioni** organizzano il servizio tramite **aziende sanitarie** dotate di personalità giuridica pubblica e **autonomia imprenditoriale**; l’organizzazione interna è fissata dall’**atto aziendale**.',
  columns: 3,
  blocks: [
    {
      title: 'Organi dell’azienda',
      icon: 'Users',
      accent: 'navy',
      items: [
        '**Direttore generale**: rappresentante legale, nominato dalla **Regione** (elenco nazionale idonei, D.Lgs. 171/2016)',
        'Nomina il **Direttore sanitario** e il **Direttore amministrativo**',
        'DG + DS + DA = **direzione strategica**',
        '**Collegio di direzione**: governo clinico, formazione, ricerca',
        '**Collegio sindacale**: controllo contabile e di regolarità',
        'Organizzazione interna: **dipartimento** come modello ordinario',
        'Unità operative **complesse** e **semplici**',
        'Direzione delle professioni sanitarie (**SITRA**/DPS): dirigente infermiere (L. 251/2000)',
      ],
    },
    {
      title: 'ASL — articolazioni',
      icon: 'GitBranch',
      accent: 'blue',
      items: [
        '**Distretto**: assistenza territoriale',
        '**Dipartimento di prevenzione**: sanità pubblica',
        '**Presidi ospedalieri** a gestione diretta',
        '**Dipartimento di salute mentale**',
        'Ambito: un territorio provinciale o sub-provinciale definito dalla Regione',
        'Garantisce i **LEA** ai residenti, anche acquistando prestazioni da strutture **accreditate**',
        'Finanziata dalla Regione con **quota capitaria** ponderata',
      ],
    },
    {
      title: 'Il Distretto',
      icon: 'Route',
      accent: 'green',
      items: [
        'Popolazione di norma **≥ 60.000** abitanti (D.Lgs. 229/1999); DM 77: circa **100.000**',
        'Assistenza primaria: **MMG**, **PLS**, continuità assistenziale',
        '**ADI** (assistenza domiciliare integrata), consultori',
        'Specialistica ambulatoriale, assistenza a dipendenze e disabilità',
        '**Integrazione socio-sanitaria** con i Comuni',
        'Guidato dal **Direttore di distretto**',
        'Programma delle Attività Territoriali (**PAT**)',
        'Punto unico di accesso (**PUA**) e unità di valutazione multidimensionale',
      ],
    },
    {
      title: 'Dipartimento di prevenzione',
      icon: 'ShieldCheck',
      accent: 'teal',
      items: [
        '**Igiene e sanità pubblica**: vaccinazioni, malattie infettive',
        '**Igiene degli alimenti** e della nutrizione',
        '**Prevenzione e sicurezza** negli ambienti di lavoro',
        '**Sanità pubblica veterinaria**',
        'Profilassi, **screening**, educazione alla salute',
        'Vigilanza e controllo su ambienti di vita e di lavoro',
        'Sorveglianza **epidemiologica** e notifica delle malattie infettive',
        'Prevenzione delle malattie **croniche** e promozione di stili di vita sani',
      ],
    },
    {
      title: 'Aziende ospedaliere e simili',
      icon: 'Hospital',
      accent: 'purple',
      items: [
        '**AO**: ospedali di rilievo nazionale e alta specializzazione, autonomi dalla ASL',
        '**AOU**: integrazione assistenza, didattica e ricerca con l’**Università**',
        '**IRCCS**: ricerca clinica e cura di eccellenza, pubblici o privati',
        '**DM 70/2015**: presidi di **base**, di **I livello** e di **II livello**',
        'Standard posti letto: **3,7 per 1.000** abitanti (3 acuti + 0,7 riabilitazione e lungodegenza)',
        'Strutture **private accreditate**: erogano per conto del SSN con accordi contrattuali',
      ],
    },
    {
      title: 'Territorio — DM 77/2022',
      icon: 'Workflow',
      accent: 'orange',
      items: [
        '**Casa della Comunità** hub: 1 ogni **40.000–50.000** abitanti',
        '**Ospedale di Comunità**: 20 posti letto, 1 ogni **100.000** ab., a **gestione infermieristica**',
        '**COT** (Centrale Operativa Territoriale): 1 ogni 100.000 ab.',
        '**IFeC**: 1 ogni **3.000** abitanti',
        'Numero europeo armonizzato **116117** per cure non urgenti',
        '**UCA**: 1 medico + 1 infermiere ogni 100.000 ab.',
        'Rete di **cure palliative** e hospice; **telemedicina**',
      ],
    },
  ],
  keyPoints: [
    'ASL = **territorio** (distretto + prevenzione + ospedali propri); AO = **ospedale autonomo** di alta specializzazione',
    'Il **Direttore generale** è nominato dalla Regione e nomina a sua volta DS e DA',
  ],
}

export default map
