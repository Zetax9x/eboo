import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'antiaritmici-e-digossina',
  chapter: 'farmacologia',
  title: 'Antiaritmici e digossina',
  subtitle: 'Classificazione di Vaughan Williams, effetti avversi e monitoraggio',
  icon: 'HeartPulse',
  status: 'bozza',
  sources: [
    'ERC Guidelines 2021 — Adult Advanced Life Support (aritmie peri-arresto)',
    'ESC 2024 Guidelines for the management of atrial fibrillation',
    'AIFA — Riassunti delle Caratteristiche del Prodotto (RCP), banca dati farmaci',
  ],
  intro:
    'Farmaci a **indice terapeutico ristretto** e potenzialmente **proaritmici**: somministrazione ev sempre con **monitoraggio ECG** continuo e defibrillatore disponibile.',
  tableTitle: 'Classi principali',
  tableIcon: 'Activity',
  columns: ['Classe', 'Esempi', 'Meccanismo', 'Effetti avversi chiave', 'Controlli'],
  widths: [1.2, 1.4, 1.6, 1.9, 1.9],
  rows: [
    ['I · Bloccanti canali Na⁺', 'Flecainide, propafenone (Ic); lidocaina (Ib)', 'Rallentano la conduzione (↓ fase 0)', '**Proaritmia**, allargamento QRS, vertigini; Ic evitati in cardiopatia strutturale', 'ECG (QRS); flecainide: cardioversione farmacologica della FA'],
    ['II · Beta-bloccanti', 'Metoprololo, bisoprololo, esmololo (ev)', 'Blocco β1: ↓ FC e conduzione AV', '**Bradicardia**, ipotensione, broncospasmo', 'FC e PA prima di ogni dose; controllo della frequenza in FA'],
    ['III · Bloccanti canali K⁺', '**Amiodarone**, sotalolo, dronedarone', 'Prolungano ripolarizzazione e refrattarietà (↑ QT)', 'Amiodarone: **tireopatie**, fibrosi polmonare, epatotossicità, fotosensibilità, **flebite**', 'TSH, funzione epatica, QT; ev in **glucosio 5%**, meglio via centrale'],
    ['IV · Calcio-antagonisti', 'Verapamil, diltiazem', 'Rallentano il nodo AV', 'Bradicardia, BAV, ipotensione; evitare nello scompenso con FE ridotta', 'FC, PA, ECG'],
    ['Adenosina', 'Adenosina ev', 'Blocco AV transitorio (emivita di secondi)', '**Asistolia transitoria**, flushing, dispnea, dolore toracico', 'Bolo ev **rapido** + flush di fisiologica; ECG registrato; cautela in asma'],
    ['Digossina', 'Digossina orale/ev', 'Inibisce la Na⁺/K⁺-ATPasi: ↑ contrattilità, ↓ conduzione AV', 'Tossicità: **nausea, vomito**, disturbi visivi (visione gialla-verde), bradicardia, aritmie', '**FC apicale per 1 min** prima della dose; digossinemia, K⁺, creatinina'],
    ['Atropina', 'Atropina ev', 'Anticolinergico: ↑ FC (blocco vagale)', 'Tachicardia, secchezza fauci, ritenzione urinaria', 'Bradicardia sintomatica (non è un antiaritmico in senso stretto)'],
  ],
  notes: [
    {
      title: 'Digossina: sicurezza',
      icon: 'ShieldAlert',
      accent: 'red',
      items: [
        'FC **< 60 bpm** (adulto) o nuova irregolarità: **non somministrare**, avvisare',
        'Tossicità favorita da **ipokaliemia**, ipomagnesiemia, insufficienza renale, età',
        'Antidoto: **frammenti Fab** antidigossina',
      ],
    },
    {
      title: 'Monitoraggio ev',
      icon: 'Monitor',
      accent: 'blue',
      items: [
        'ECG continuo, PA, SpO₂; carrello d’emergenza pronto',
        'Pompa infusionale, accesso venoso **dedicato** e pervio',
        'Osservare il sito: amiodarone è **irritante** per le vene',
      ],
    },
    {
      title: 'Nell’arresto (ERC 2021)',
      icon: 'Siren',
      accent: 'purple',
      items: [
        'FV/TV senza polso: **amiodarone 300 mg** ev dopo il 3° shock',
        'Ulteriori 150 mg dopo il 5° shock',
        'In alternativa: lidocaina se amiodarone non disponibile',
      ],
    },
  ],
  keyPoints: [
    'Amiodarone + digossina: ↑ digossinemia → **ridurre** la dose di digossina',
    'Prolungamento del **QT** → rischio di **torsione di punta**: controllare K⁺ e Mg²⁺',
  ],
}

export default map
