import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'privacy-e-gdpr-in-sanita',
  chapter: 'concorsi',
  title: 'Privacy e GDPR in sanità',
  subtitle: 'Trattamento dei dati sanitari, ruoli e obblighi per l’infermiere',
  icon: 'ShieldCheck',
  status: 'bozza',
  sources: [
    'Regolamento (UE) 2016/679 (GDPR)',
    'D.Lgs. 196/2003 (Codice Privacy) come modificato dal D.Lgs. 101/2018',
    'Garante per la protezione dei dati personali — Linee guida su dati sanitari',
  ],
  intro:
    'Il **GDPR** (Reg. UE 2016/679) e il **Codice Privacy** italiano disciplinano il trattamento dei dati personali, inclusi quelli **sanitari** (categoria particolare, art. 9). L’infermiere opera come **responsabile del trattamento** e deve garantire sicurezza, liceità e minimizzazione.',
  columns: 2,
  blocks: [
    {
      title: 'Dati sanitari: definizione e base giuridica',
      icon: 'FileText',
      accent: 'blue',
      items: [
        'Dati relativi alla **salute fisica o mentale** (anamnesi, referti, terapie)',
        'Categoria **particolare** (art. 9 GDPR): trattamento vietato salvo eccezioni',
        'Base giuridica in sanità: **esecuzione di un compito di interesse pubblico** (art. 9.2.h) o **consenso esplicito**',
        'Infermiere: **responsabile del trattamento** (art. 28) sotto il controllo del titolare (ASL/ospedale)',
        '**Minimizzazione**: raccogliere solo dati necessari allo scopo assistenziale',
        '**Limitazione della finalità**: uso esclusivo per cura, diagnosi, gestione',
      ],
    },
    {
      title: 'Diritti dell’interessato (paziente)',
      icon: 'User',
      accent: 'green',
      items: [
        '**Accesso**: ottenere copia dei propri dati sanitari',
        '**Retifica**: correggere dati inesatti o incompleti',
        '**Cancellazione** (“diritto all’oblio”): con limiti in ambito sanitario (obbligo di conservazione)',
        '**Portabilità**: ricevere i dati in formato strutturato e leggibile',
        '**Opposizione**: al trattamento per motivi legittimi (con limiti se legato a cura)',
        '**Limitazione**: sospensione temporanea del trattamento',
        '**Reclamo** al Garante Privacy (art. 77 GDPR)',
      ],
    },
    {
      title: 'Obblighi di sicurezza e misure tecniche',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        '**Crittografia** dei dati in transito e a riposo (art. 32 GDPR)',
        '**Pseudonimizzazione** quando possibile (es. codici identificativi)',
        '**Accessi autorizzati**: solo personale con ruolo e necessità (principio di **need-to-know**)',
        '**Registri di trattamento** (art. 30): log di accesso, consultazione, modifica',
        '**Backup** sicuri e testati; piani di **disaster recovery**',
        '**Formazione** del personale su sicurezza informatica e privacy',
        '**Valutazione d’impatto** (DPIA) per trattamenti ad alto rischio (art. 35)',
      ],
    },
    {
      title: 'Violazioni dei dati e notifica',
      icon: 'Siren',
      accent: 'orange',
      items: [
        '**Data breach**: perdita di confidenzialità, integrità o disponibilità',
        'Notifica al **Garante** entro **72 ore** dalla scoperta (art. 33)',
        'Comunicazione all’**interessato** se rischio elevato (art. 34)',
        'Esempi: furto laptop con cartelle cliniche, accesso non autorizzato a FSE, smarrimento referti',
        'L’infermiere deve **segnalare immediatamente** al DPO o al responsabile privacy',
        '**Registro delle violazioni** (art. 33.5): anche quelle non notificate al Garante',
        'Sanzioni: fino a **20 milioni €** o 4% del fatturato globale (art. 83)',
      ],
    },
    {
      title: 'Ruoli: Titolare, Responsabile, DPO',
      icon: 'Users',
      accent: 'purple',
      items: [
        '**Titolare**: ASL, ospedale, studio medico (decide finalità e mezzi)',
        '**Responsabile**: infermiere, OSS, amministrativi (trattano per conto del titolare)',
        '**DPO** (Data Protection Officer): figura obbligatoria in sanità pubblica (art. 37.1.c)',
        'Il DPO è **contatto** per pazienti e autorità; non è il responsabile della sicurezza IT',
        '**Sub-responsabile**: es. ditta di manutenzione server, cloud provider',
        'L’infermiere **non** è titolare: agisce su istruzioni e sotto supervisione',
        'Responsabilità **solidale** in caso di violazione (art. 82 GDPR)',
      ],
    },
    {
      title: 'Trasferimenti e conservazione',
      icon: 'Box',
      accent: 'teal',
      items: [
        '**Conservazione**: durata legata a finalità (es. cartella clinica: **10 anni** dopo dimissione)',
        'Trasferimenti **extra-UE**: solo con adeguatezza o garanzie adeguate (art. 46)',
        '**Telemedicina**: dati trattati in cloud devono rispettare GDPR e norme sanitarie',
        '**Condivisione in équipe**: solo se necessaria per la cura (principio di **necessità**)',
        '**Fascicolo sanitario elettronico** (FSE): accesso del paziente e del medico curante',
        '**Cancellazione**: dopo scadenza termini, salvo obblighi di legge (es. archivio storico)',
        '**Minimizzazione**: non conservare dati superflui o non pertinenti',
      ],
    },
  ],
  keyPoints: [
    'L’infermiere è **responsabile del trattamento**: deve agire per conto del titolare e rispettare misure di sicurezza',
    'Notifica breach al Garante entro **72 ore**; sanzione fino a **20 milioni €**',
    'Diritti del paziente: accesso, rettifica, cancellazione, portabilità, opposizione, reclamo al Garante',
  ],
}

export default map
