import type { ConceptMap } from '../../book/types'

const map: ConceptMap = {
  kind: 'concept',
  id: 'il-paziente-critico-monitoraggio',
  chapter: 'emergenze',
  title: 'Il paziente critico: monitoraggio',
  subtitle: 'Parametri vitali, scale di gravità e priorità assistenziali in terapia intensiva',
  icon: 'Monitor',
  status: 'bozza',
  sources: [
    'SITI — Società Italiana di Terapia Intensiva, Linee guida per il monitoraggio in terapia intensiva (2022)',
    'Ministero della Salute — Linee guida per il monitoraggio dei parametri vitali in ambito ospedaliero (2021)',
    'FNOPI — Codice Deontologico e standard di pratica infermieristica',
  ],
  columns: 2,
  blocks: [
    {
      title: 'Parametri Vitali (PV)',
      icon: 'Activity',
      accent: 'blue',
      items: [
        '**PA sistolica**: < 90 mmHg = shock; > 180 mmHg = crisi ipertensiva',
        '**FC**: < 60 bpm (bradicardia) o > 100 bpm (tachicardia)',
        '**FR**: < 12 atti/min o > 24 atti/min; SpO₂ < 92% = ipossiemia',
        '**T°C**: < 35 °C (ipotermia) o > 38,5 °C (febbre)',
        '**Glicemia**: < 70 mg/dL (ipoglicemia) o > 250 mg/dL (iperglicemia)',
        '**Diuresi**: < 0,5 mL/kg/h = oliguria; < 0,1 mL/kg/h = anuria',
      ],
    },
    {
      title: 'Scale di Gravità',
      icon: 'ClipboardCheck',
      accent: 'purple',
      items: [
        '**GCS (Glasgow Coma Scale)**: 15 = integro; 3 = coma profondo',
        'Apertura oculare (1-4) + Risposta verbale (1-5) + Risposta motoria (1-6)',
        '**APACHE II**: predice mortalità in UTI; include età, PV, esami lab',
        '**SOFA**: valuta disfunzione d’organo; 0-24 punti; > 2 = sepsi',
        '**RASS**: scala di agitazione/sedazione; -5 (non risvegliabile) a +4 (aggressivo)',
        '**Pain Scale (NRS)**: 0-10; > 4 = dolore moderato-severo',
      ],
    },
    {
      title: 'Monitoraggio Continuo',
      icon: 'HeartPulse',
      accent: 'red',
      items: [
        '**ECG**: ritmo, aritmie, ST; allarmi FC < 50 o > 120 bpm',
        '**SpO₂**: saturazione periferica; < 90% = ipossiemia grave',
        '**PA invasiva**: catetere arterioso; valori reali, senza artefatti',
        '**CVC**: pressione venosa centrale (CVP) 2-8 mmHg; guida fluidoterapia',
        '**Temperatura**: continua in caso di iper/ipotermia o post-chirurgia',
        '**Capnografia**: EtCO₂ 35-45 mmHg; < 30 = iperventilazione',
      ],
    },
    {
      title: 'Priorità Assistenziali',
      icon: 'ShieldCheck',
      accent: 'green',
      items: [
        '**ABC**: Vie aeree, Respirazione, Circolazione; prima di tutto',
        '**Prevenzione lesioni da decubito**: scala Braden; < 13 = alto rischio',
        '**Prevenzione infezioni**: igiene mani, asepsi, cambio garze',
        '**Nutrizione**: enterali entro 48-72h se possibile; evitare malnutrizione',
        '**Mobilità**: mobilizzazione precoce se tollerata; prevenire atrofia',
        '**Comunicazione**: spiegare al paziente e alla famiglia; ridurre ansia',
      ],
    },
    {
      title: 'Segnali d’Allarme',
      icon: 'Siren',
      accent: 'orange',
      items: [
        '**PA sistolica** < 90 mmHg per > 15 min nonostante fluidi',
        '**SpO₂** < 90% nonostante O₂ ad alto flusso',
        '**FC** > 130 bpm o < 40 bpm persistente',
        '**GCS** in calo di ≥ 2 punti in 1 ora',
        '**Diuresi** assente per > 6 ore nonostante terapia',
        '**T°C** > 39,5 °C o < 34 °C non rispondente a trattamento',
      ],
    },
    {
      title: 'Documentazione',
      icon: 'FileText',
      accent: 'teal',
      items: [
        '**Ogni 15-30 min**: PV, GCS, diuresi, livello di coscienza',
        '**Ogni turno**: bilancio idrico, peso, parametri nutrizionali',
        '**Eventi critici**: data/ora, intervento, risposta del paziente',
        '**Farmaci**: dose, via, ora, effetti collaterali osservati',
        '**Comunicazioni**: con medico, famiglia, equipe; ore e contenuti',
        '**Firma**: sempre leggibile, con ruolo e qualifica',
      ],
    },
  ],
  keyPoints: [
    'Il monitoraggio continuo è la base della gestione del paziente critico',
    'Riconoscere presto i segnali d’allarme salva vite',
    'La documentazione accurata è un obbligo deontologico e legale',
  ],
}

export default map
