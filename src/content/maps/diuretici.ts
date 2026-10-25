import type { TableMap } from '../../book/types'

const map: TableMap = {
  kind: 'table',
  id: 'diuretici',
  chapter: 'farmacologia',
  title: 'Diuretici',
  subtitle: 'Sede d’azione nel nefrone, effetti sugli elettroliti e sorveglianza',
  icon: 'Droplets',
  status: 'bozza',
  sources: [
    'Rossi F., Cuomo V., Riccardi C. — Farmacologia. Principi di base e applicazioni terapeutiche, Minerva Medica',
    'ESC 2021 Guidelines for the diagnosis and treatment of acute and chronic heart failure (aggiornamento 2023)',
    'AIFA — Riassunti delle Caratteristiche del Prodotto (RCP), banca dati farmaci',
  ],
  intro:
    'Aumentano l’eliminazione di **sodio e acqua**. Indicazioni: **scompenso cardiaco** (congestione), ipertensione, edemi, cirrosi con ascite, ipertensione endocranica (osmotici).',
  tableTitle: 'Classi di diuretici',
  tableIcon: 'Droplet',
  columns: ['Classe', 'Esempi', 'Sede e meccanismo', 'Effetti avversi chiave', 'Controlli'],
  widths: [1.3, 1.4, 1.7, 1.8, 1.8],
  rows: [
    ['Dell’ansa', 'Furosemide, torasemide', 'Ansa di Henle (tratto ascendente): blocco del cotrasporto **Na⁺-K⁺-2Cl⁻**; i più potenti', '**Ipokaliemia**, ipovolemia, ipotensione, iperuricemia, **ototossicità** (ev rapida, alte dosi)', 'Furosemide ev **lenta** (≤ 4 mg/min); diuresi oraria, K⁺, Na⁺'],
    ['Tiazidici e simil-tiazidici', 'Idroclorotiazide, clortalidone, indapamide', 'Tubulo distale: blocco cotrasporto **Na⁺-Cl⁻**', '**Ipokaliemia**, **iponatriemia** (anziani), iperglicemia, iperuricemia, ↑ calcemia', 'Elettroliti, glicemia, uricemia; poco efficaci se funzione renale molto ridotta'],
    ['Antialdosteronici (risparmiatori di K⁺)', 'Spironolattone, canrenone, eplerenone', 'Dotto collettore: antagonismo del recettore dell’**aldosterone**', '**Iperkaliemia**, ginecomastia (spironolattone), ↑ creatinina', 'K⁺ e creatinina; evitare integratori di K⁺ non prescritti'],
    ['Bloccanti ENaC (risparmiatori di K⁺)', 'Amiloride, triamterene', 'Dotto collettore: blocco dei canali del Na⁺', '**Iperkaliemia**', 'Spesso associati a tiazidici per bilanciare il K⁺'],
    ['Osmotici', 'Mannitolo', 'Richiamo osmotico di acqua nel tubulo e dai tessuti', 'Sovraccarico di volume iniziale, squilibri di Na⁺, disidratazione', 'Usato nell’**ipertensione endocranica**; controllare cristalli, infondere con filtro'],
    ['Inibitori anidrasi carbonica', 'Acetazolamide', 'Tubulo prossimale: ↓ riassorbimento di HCO₃⁻', '**Acidosi metabolica**, ipokaliemia, parestesie', 'Glaucoma, mal di montagna; EGA/elettroliti'],
    ['Gliflozine (SGLT2-i)', 'Dapagliflozin, empagliflozin', 'Tubulo prossimale: glicosuria con lieve natriuresi', 'Infezioni genitali, disidratazione, chetoacidosi euglicemica', 'Raccomandate nello **scompenso cardiaco** e nella malattia renale cronica'],
  ],
  notes: [
    {
      title: 'Sorveglianza',
      icon: 'Scale',
      accent: 'blue',
      items: [
        '**Peso quotidiano**: stessa ora, stessa bilancia, stessi abiti',
        '**Bilancio idrico** e diuresi; PA anche in ortostatismo',
        'Elettroliti (**K⁺, Na⁺**), creatinina; segni di disidratazione',
      ],
    },
    {
      title: 'Segni da riconoscere',
      icon: 'TriangleAlert',
      accent: 'red',
      items: [
        'Ipokaliemia: crampi, astenia, aritmie (↑ tossicità **digossina**)',
        'Iperkaliemia: aritmie, onde T alte e appuntite',
        'Ipovolemia: sete, ipotensione, oliguria, confusione',
      ],
    },
    {
      title: 'Educazione',
      icon: 'Users',
      accent: 'green',
      items: [
        'Assumere al **mattino** (evita la nicturia)',
        'Segnalare aumento di peso **> 1,5–2 kg in 2–3 giorni**',
        'Evitare **FANS**: riducono l’effetto diuretico',
      ],
    },
  ],
  keyPoints: [
    'Ansa e tiazidici **perdono K⁺**; antialdosteronici e amiloride lo **risparmiano**',
    'Con ACE-i/sartani + antialdosteronico sorvegliare strettamente la **kaliemia**',
  ],
}

export default map
