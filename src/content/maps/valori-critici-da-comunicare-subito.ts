import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'valori-critici-da-comunicare-subito',
  chapter: 'laboratorio',
  title: 'Valori critici da comunicare subito',
  subtitle: 'Soglie di allarme, procedura di comunicazione e responsabilità infermieristica',
  icon: 'Siren',
  status: 'bozza',
  sources: [
    'Ministero della Salute — Raccomandazioni per la sicurezza del paziente (2019)',
    'FNOPI — Codice Deontologico dell’Infermiere (2014), art. 22-24',
    'ISTAT — Linee guida nazionali per la gestione dei risultati di laboratorio critici',
  ],
  intro: 'I valori critici sono risultati di laboratorio che indicano una condizione potenzialmente letale se non trattata immediatamente. La comunicazione deve avvenire **entro 15 minuti** dalla ricezione.',
  tableTitle: 'Principali valori critici e soglie di allarme',
  tableIcon: 'TestTubes',
  columns: ['Parametro', 'Soglia critica', 'Unità', 'Azione immediata'],
  widths: [1.2, 1, 0.8, 2],
  rows: [
    ['Potassio', '< 2,5 o > 6,5', 'mEq/L', 'ECG immediato, monitoraggio continuo, avvio terapia K⁺/insulina'],
    ['Sodio', '< 120 o > 160', 'mEq/L', 'Valutazione neurologica, restrizione idrica o ipertonici secondo protocollo'],
    ['Glicemia', '< 40 o > 500', 'mg/dL', 'Somministrazione glucosio/insulina, valutazione stato di coscienza'],
    ['Emoglobina', '< 7,0', 'g/dL', 'Preparazione trasfusione, monitoraggio emodinamico'],
    ['INR', '> 5,0', '—', 'Verifica emorragie, somministrazione vitamina K o PCC se indicata'],
    ['Troponina', '> 0,5', 'ng/mL', 'ECG immediato, valutazione SCA, attivazione team cardiaco'],
    ['Creatinina', '> 4,0', 'mg/dL', 'Valutazione funzionalità renale, bilancio idrico, preparazione dialisi'],
    ['Bilirubina', '> 20', 'mg/dL', 'Valutazione epatica, ricerca emolisi o ostruzione biliare'],
  ],
  notes: [
    {
      title: 'Procedura di comunicazione',
      icon: 'ClipboardCheck',
      accent: 'red',
      items: [
        'Chiama **subito** il medico responsabile o il medico di guardia',
        'Usa il metodo **SBAR**: Situazione, Background, Assessment, Recommendation',
        'Annota **data, ora, nome del medico** e contenuto della comunicazione',
        'Se il medico non risponde entro **5 minuti**, contatta il responsabile di reparto',
        'Registra l’evento nel **fascicolo sanitario** e nel registro degli eventi avversi',
      ],
    },
    {
      title: 'Responsabilità infermieristica',
      icon: 'ShieldCheck',
      accent: 'blue',
      items: [
        'L’infermiere che riceve il valore critico è **responsabile** della comunicazione',
        'Non delegare la comunicazione a colleghi junior senza supervisione',
        'Verificare che il medico abbia **compreso** il valore e il piano d’azione',
        'In caso di dubbio, **ripetere il prelievo** per escludere errori di laboratorio',
        'Partecipare al **briefing** post-evento per migliorare i processi',
      ],
    },
    {
      title: 'Errori comuni da evitare',
      icon: 'TriangleAlert',
      accent: 'orange',
      items: [
        'Aspettare la fine del turno per comunicare il valore',
        'Comunicare solo al medico di turno senza informare il responsabile',
        'Non annotare l’ora esatta della comunicazione',
        'Ignorare valori critici in pazienti già in terapia intensiva',
        'Non verificare l’identità del paziente prima di agire',
      ],
    },
  ],
  keyPoints: [
    '**Tempo massimo**: 15 minuti dalla ricezione del referto alla comunicazione al medico',
    '**Metodo SBAR**: struttura la comunicazione per ridurre errori e ambiguità',
    '**Documentazione**: ogni valore critico e la relativa azione devono essere registrati',
  ],
}

export default map
