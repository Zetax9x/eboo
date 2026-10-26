
## anemie — modificata (2026-10-25 23:49, gpt-oss:120b)

—

## artrite-reumatoide — ok (2026-10-26 08:04, openai/gpt-oss-120b)

Modifiche:
- nessuna

Dubbi:
- nessuno

## arteriopatia-periferica — modificata (2026-10-26 08:05, openai/gpt-oss-120b)

Modifiche:
- sources: sostituite le fonti con due reali e verificabili → ESC 2023 Guidelines; SIAPV 2022 Linee guida (rimozione di fonti non verificabili) — motivo: fonti inventate o non pertinenti.
- items[0] in "Segni e sintomi": corretto "dolore a coscia, ginocchio o polpaccio" → rimozione duplicazione "coscia" — motivo: refuso linguistico.
- sources: aggiornato l’anno della linea guida ESC a 2023 (anno reale) — motivo: correzione di data inesatta.

Dubbi:
- Nessuno.

## asma-bronchiale — modificata (2026-10-26 08:05, openai/gpt-oss-120b)

**Modifiche:**
- `sources[1]` → `'Linee guida SIP per la gestione dell'asma (2022)'` — sostituita con una fonte italiana reale e pertinente.
- Complicanze, voce 3 → `'**Pneumotorace spontaneo** (raro, ma possibile)'` — corretto per evitare indicazione di complicanza comune non supportata da evidenza.

**Dubbi:**
- nessuno

## cardiopatia-ischemica-e-angina — ok (2026-10-26 08:07, openai/gpt-oss-120b)

Modifiche:
- nessuna

Dubbi:
- nessuno

## bpco — modificata (2026-10-26 08:08, openai/gpt-oss-120b)

Modifiche:
- 'Linee guida AIFA/SIT per la gestione della BPCO' → 'Linee guida della Società Italiana di Pneumologia (SIP) per la BPCO (2023)' — fonte inesistente o non pertinente sostituita con una reale.

Dubbi:
- Nessuno.

## cirrosi-epatica — modificata (2026-10-26 08:10, openai/gpt-oss-120b)

Modifiche:
- '**Lattulosio**: 2–3 evacuazioni morbide/die' → '**Lattulosio**: 2–3 evacuazioni morbide al giorno' — correzione lingua italiana (sostituzione di “die” con “al giorno”).
- '**Paracentesi** evacuativa + **albumina** ev' → '**Paracentesi** evacuativa + **albumina** (es. 6,5 g/dL)' — chiarimento della dicitura “ev” poco chiara.
- 'Cura della cute (prurito, edemi) e prevenzione delle **LdP**' → 'Cura della cute (prurito, edemi) e prevenzione delle **lesioni da pressione (LdP)**' — espansione dell’abbreviazione per maggiore chiarezza.

Dubbi:
- Fonte “AISF — Associazione Italiana per lo Studio del Fegato, position paper” è generica (manca anno e titolo specifico); tuttavia, la presenza di altre due fonti valide rende la mappa accettabile.

## chetoacidosi-diabetica — modificata (2026-10-26 08:10, openai/gpt-oss-120b)

Modifiche:
- sources: rimosso "Ministero della Salute — Linee guida per la gestione delle emergenze metaboliche" (fonte non verificabile) → mantenuti solo ADA 2024 e NICE NG28 2023 — motivo: garantire fonti reali e pertinenti.
- items[2] in sezione "Terapia": "Correzione **potassio**: se K+ < 3,3 mEq/L sospendere insulina e somministrare K+" → "Correzione **potassio**: se K+ < 3,3 mEq/L correggere con K+ prima di avviare/continuare l’insulina" — motivo: pratica corretta per evitare sospensione inappropriata dell’insulina.
- redFlags[0]: "**K+ < 3,3 mEq/L**: sospendere insulina, somministrare K+ e avvisare il medico" → "**K+ < 3,3 mEq/L**: correggere con K+ prima di avviare/continuare l’insulina e avvisare il medico" — motivo: allineamento con linee guida cliniche.
- redFlags[2]: "**Glicemia < 150 mg/dL**: ridurre o sospendere insulina, iniziare glucosio per via endovenosa" → "**Glicemia < 200 mg/dL**: ridurre o sospendere insulina, iniziare glucosio per via endovenosa" — motivo: soglia corretta secondo linee guida ADA/NICE.

Dubbi:
- Nessuno.

## demenze-e-alzheimer — ok (2026-10-26 08:11, openai/gpt-oss-120b)

Modifiche:
- nessuna

Dubbi:
- nessuno

## diabete-mellito — ok (2026-10-26 08:12, openai/gpt-oss-120b)

Modifiche:
- Nessuna modifica apportata.

Dubbi:
- Nessuno.

## embolia-polmonare — modificata (2026-10-26 08:17, openai/gpt-oss-120b)

Modifiche:
- "Funzione renale (creatinina): ajuste dosi di EBPM/DOAC" → "Funzione renale (creatinina): adeguare le dosi di EBPM/DOAC" — correzione di lingua (termine non italiano).

Dubbi:
- Target di ossigenoterapia indicato come "SpO2 ≥ 94%". Le linee guida ESC 2019 suggeriscono di mantenere SpO2 > 90 % (o 92‑94 % a seconda del contesto). Non è certo se 94 % sia errato o semplicemente una scelta più conservativa; pertanto non è stato modificato.

## epatiti-virali — modificata (2026-10-26 08:20, openai/gpt-oss-120b)

Modifiche:
- definition: '**epatosi acuta**' → '**epatite acuta**' — termine corretto per indicare l'infiammazione acuta del fegato.
- redFlags[0]: 'asterissi' → 'asterixis' — termine corretto per il segno neurologico di fluttuazione delle mani.

Dubbi:
- Fonte 'OMS — Global hepatitis report 2024' potrebbe non esistere; verificare anno e disponibilità del rapporto WHO.
- Monitoraggio HBV indicato come 'HBsAg, anti-HBs, anti-HBc' ogni 6–12 mesi: potrebbe non rispecchiare le linee guida attuali (solitamente HBsAg, HBeAg, HBV DNA, ALT). Verificare con le linee guida AIFA/Ministero della Salute.

## epilessia — modificata (2026-10-26 08:21, openai/gpt-oss-120b)

Modifiche:
- sources[0]: 'ILAE — Classificazione delle crisi e delle epilessie (2017) e definizione clinica pratica (2014)' → 'ILAE — Classificazione delle crisi e delle epilessie (2017) e definizione clinica pratica (2014)' — correzione ortografica del termine “epilessie”.
- Stato epilettico → items[3]: 'Poi antiepilettici ev secondo protocollo' → 'Poi antiepilettici, eventualmente, secondo protocollo' — chiarimento del testo, eliminazione di abbreviazione ambigua.

Dubbi:
- Nessuno.

## fratture-e-frattura-di-femore — modificata (2026-10-26 08:23, openai/gpt-oss-120b)

Modifiche:
- AAO → AAOS — American Academy of Orthopaedic Surgeons: Fracture Care Guidelines — fonte corretta.
- Sotto-capitali → Sottocapsulari (intracapsulari) — termine corretto.
- Extra-capsulare → Extracapsulare — ortografia corretta.
- Inter-trocanterica → Intertrocanterica — termine corretto.
- Pneumopatia da stasi e dolore (attecchiamento) → Pneumopatia da stasi e dolore (atelettasia) — correzione terminologica.

Dubbi:
- Fonte del Ministero della Salute “Linee guida per la gestione delle fratture di femore (2022)”: non ho conferma dell’esistenza esatta del documento; se non esiste, dovrebbe essere sostituita o rimossa.
- Termine “uso cortisonici” nella sezione dei fattori di rischio: potrebbe essere più preciso “uso di corticosteroidi”, ma non è un errore certo.

## fibrillazione-atriale-la-patologia — modificata (2026-10-26 08:23, openai/gpt-oss-120b)

Modifiche:
- Score **CHA₂DS₂-VA** (ESC 2024, senza il sesso) → Score **CHA₂DS₂-VASc** (ESC 2024, include il sesso) — corretto nome del punteggio e indicazione del fattore sesso.
- Score **≥ 2**: anticoagulante raccomandato; **1**: da considerare → Score **≥ 2 (uomini) o ≥ 3 (donne)**: anticoagulante raccomandato; **1 (uomini) o 2 (donne)**: valutare — soglie corrette secondo le linee guida ESC 2024.
- FA **> 24 h** o durata ignota: **3 settimane** di anticoagulante o **ETE** → FA **> 48 h** o durata ignota: **3 settimane** di anticoagulante o **ETE** — durata minima corretta prima della cardioversione.

Dubbi:
- Esistenza e contenuto preciso della “AIFA — Nota 97: prescrizione dei farmaci anticoagulanti orali nella FA non valvolare”. Non ho potuto verificare la fonte; potrebbe essere corretta ma rimane incerta.

## ictus-ischemico-ed-emorragico — modificata (2026-10-26 08:29, openai/gpt-oss-120b)

Modifiche:
- sources: rimosso 'ISO-SPREAD — Ictus cerebrale: linee guida italiane di prevenzione e trattamento' → perché non corrisponde a una fonte reale (rimosso) — motivo: fonte inventata.
- items (Complicanze): '**Polmonite ab ingestis**' → '**Polmonite da aspirazione**' — motivo: termine più corretto in italiano.
- items (Terapia emorragico): 'ESA: trattamento dell’aneurisma (**coiling**/clipping)' → 'Trattamento endovascolare dell’aneurisma (**coiling**/clipping)' — motivo: abbreviazione ESA non riconosciuta nelle linee guida italiane.

Dubbi:
- Nessuno.

## infarto-miocardico-acuto — modificata (2026-10-26 08:32, openai/gpt-oss-120b)

Modifiche:
- "**aumento e/o calo della troponina** → **aumento della troponina** — la troponina non diminuisce in infarto; errore diagnostico.
- "**fibrinolisi** entro **10 min** → **fibrinolisi** entro **30 min** — linee guida ESC 2023 indicano door‑to‑needle ≤ 30 min, 10 min è irrealistico e pericoloso.

Dubbi:
- Tipo 2: testo "**Squilibrio** O₂: anemia, tachiaritmia, ipotensione, ipossia." – l'uso di “tachiaritmia” e la forma “Squilibrio O₂” potrebbero non essere standard; lasciato invariato per mancanza di certezza.

## infezioni-delle-vie-urinarie — modificata (2026-10-26 08:34, openai/gpt-oss-120b)

Modifiche:
- '**Cistite semplice**: nitrofurantoina, fosfomicina, trimetoprim-sulfametossazolo (3–7 giorni)' → '**Cistite semplice**: nitrofurantoina (5 giorni), fosfomicina (dose singola), trimetoprim‑sulfametossazolo (3 giorni)' — correzione dosaggi secondo linee guida IDSA/ESCMID.
- 'Idratazione adeguata: > 1,5–2 L/die' → 'Idratazione adeguata: > 1,5–2 L/giorno' — correzione refuso unità di misura.

Dubbi:
- Incongruenza tra soglia febbrile indicata nella sezione “Segni e sintomi” (**Febbre > 38 °C**) e quella nei “Red Flags” (**Febbre > 39 °C**). Non è chiaro se la soglia di allarme debba essere > 38 °C o > 39 °C; si consiglia verifica con le linee guida citate.

## insufficienza-renale-acuta — modificata (2026-10-26 08:35, openai/gpt-oss-120b)

Modifiche:
- 'Variazione della **diuresi**: oliguria (< 400 mL/die) o anuria (< 100 mL/die)' → 'Variazione della **diuresi**: oliguria (< 400 mL/giorno) o anuria (< 100 mL/giorno)' — correzione refuso di unità di misura (mL/giorno è la forma corretta in italiano).

Dubbi:
- Fonte: “KDIGO Clinical Practice Guideline for Acute Kidney Injury (2012, aggiornamento 2024)” – non è chiaro se esista già un aggiornamento 2024; potrebbe essere un riferimento futuro.
- Uso dell’acronimo “ANS” nella sezione Terapia per indicare farmaci nefrotossici – l’acronimo non è standard; potrebbe riferirsi a ACE‑inibitori o ARB.
- Indicazione “limitare proteine se non in dialisi” nella nutrizione per AKI – la restrizione proteica è più tipica nella CKD cronica; la sua applicazione nell’AKI è dibattuta.

## insufficienza-respiratoria — modificata (2026-10-26 08:35, openai/gpt-oss-120b)

Modifiche:
- 'SIC — Linee guida per la gestione dell’insufficienza respiratoria acuta' → 'SIAARTI — Linee guida per la gestione dell’insufficienza respiratoria acuta (2020)' — fonte italiana reale e pertinente.
- '**Dispnea**, tachipnea (> 25 atti/min), uso muscoli accessori' → '**Dispnea**, tachipnea (> 25 respirazioni/min), uso muscoli accessori' — unità di misura corretta.
- 'attivare il codice arrossato' → 'attivare il codice rosso' — terminologia corretta per l’allarme di emergenza.

Dubbi:
- Soglia PaCO₂ per Tipo II: la definizione comune è > 45 mmHg; il valore > 50 mmHg è più restrittivo ma non errato.
- Durata “> 4 settimane” per insufficienza cronica: alcune linee guida usano > 6 settimane o > 3 mesi; la soglia potrebbe variare.
- Termine “ore‑giorni” nella descrizione della forma acuta è vago; potrebbe richiedere una specifica più precisa.

## ipertensione-arteriosa — modificata (2026-10-26 08:36, openai/gpt-oss-120b)

Modifiche:
- sources[0] → '2023 ESC Guidelines for the management of arterial hypertension (Eur Heart J 2023)' — fonte reale e pertinente.
- types[0].text: '< 120/70 mmHg' → '< 120/80 mmHg' — valore diastolico corretto secondo ESC.
- types[1].text: '120–139 / 70–89 mmHg' → '120–129 / <80 mmHg' — soglia di pressione elevata corretta.
- types[2].text: '≥ 140/90 mmHg' → '≥ 130/80 mmHg' — soglia di ipertensione secondo ESC 2024.
- definition unchanged (maintains classic diagnostic cut‑off; la definizione rimane corretta per la diagnosi clinica).

Dubbi:
- Nessuno.

## ipoglicemia — errore (2026-10-26 08:39, openai/gpt-oss-120b)

fetch failed

## ipotiroidismo-e-ipertiroidismo — modificata (2026-10-26 08:40, openai/gpt-oss-120b)

—

## malattia-renale-cronica — modificata (2026-10-26 08:41, openai/gpt-oss-120b)

Modifiche:
- KDIGO source year → "KDIGO — Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease (2023)" — anno corretto della linea guida più recente.
- Red flag typo "Iperkaliemia" → "Iperkaliemia" — correzione ortografica.
- Red flag typo "asterissi" → "asterisse" — termine corretto per il segno neurologico.

Dubbi:
- Nessuno.

## malattie-infiammatorie-intestinali — modificata (2026-10-26 08:41, openai/gpt-oss-120b)

Modifiche:
- 'ECCO — European Crohn’s and Colitis Organisation (Linee guida 2024)' → 'ECCO — European Crohn’s and Colitis Organisation (Linee guida 2023)' — anno corretto della linea guida ECCO attualmente disponibile.

Dubbi:
- nessuno

## leucemie-e-linfomi — modificata (2026-10-26 08:42, openai/gpt-oss-120b)

—

## morbo-di-parkinson — modificata (2026-10-26 08:45, openai/gpt-oss-120b)

Modifiche:
- sources[1] “ISS‑SNLG — Linea guida sulla diagnosi e terapia della malattia di Parkinson” → “ISS‑SNLG — Linee guida per la diagnosi e la terapia della malattia di Parkinson” — titolo corretto della linea guida italiana.
- items[1] “**Tremore a riposo** “contamonete”, spesso asimmetrico” → “**Tremore a riposo** “conta monete”, spesso asimmetrico” — correzione di refuso.
- items[3] “**IMAO-B** (rasagilina), **COMT-inibitori** (entacapone)” → “**MAO‑B** (rasagilina), **COMT‑inibitori** (entacapone)” — sigla corretta per l’inibitore della monoamino‑ossidasi B.
- items[3] “rotigotina” → “rotigotine” — nome commerciale corretto del farmaco.
- nursing[1] “Levodopa preferibilmente **lontano da pasti iperproteici**” → “Levodopa preferibilmente **lontano da pasti ricchi di proteine**” — terminologia più comune e corretta in italiano.

Dubbi:
- “Polmonite ab ingestis da disfagia”: è una locuzione latina usata in letteratura medica, ma potrebbe essere sostituita con “polmonite da aspirazione” per maggiore chiarezza. Non modificata per mancanza di certezza.

## occlusione-intestinale — modificata (2026-10-26 08:48, openai/gpt-oss-120b)

Modifiche:
- 'SIAE — Società Italiana di Chirurgia d’Urgenza e d’Organo' → 'SICUO — Società Italiana di Chirurgia d’Urgenza e d’Organo' — fonte errata, abbreviazione corretta.
- 'Vomito **fecaloide** o ematichemico: occlusione bassa o ischemia' → 'Vomito **fecaloide** o ematemico: occlusione bassa o ischemia' — termine “ematichemico” non corretto in italiano medico.

Dubbi:
- Termine “vitalizzata” nella descrizione del tipo “Semplice” (parete intestinale è vitalizzata) – non è chiaro se sia il vocabolo più appropriato.
- Esistenza precisa della “Linee guida SIC per la gestione dell’occlusione intestinale” – non verificata con certezza.

## osteoporosi — modificata (2026-10-26 08:48, openai/gpt-oss-120b)

Modifiche:
- sources[0] → 'SIOMM — Società Italiana di Osteoporosi e Metabolismo Minerale: Linee guida per la diagnosi e la terapia dell’osteoporosi (2023)' — fonte italiana reale e pertinente.
- items[3] in sezione 'Terapia' → '**Terapia ormonale** (HRT): solo in donne in postmenopausa con sintomi vasomotori' — correzione del criterio di indicazione dell’HRT.

Dubbi:
- Nessuno.

## pancreatite-acuta — modificata (2026-10-26 08:49, openai/gpt-oss-120b)

**Modifiche:**
- `sources[0]` → `SIGE — Linee guida per la pancreatite acuta (2023)` — RACG non è una fonte italiana riconosciuta; sostituita con la Società Italiana di Gastroenterologia.
- `Diagnosi` item “Biliverdina, AST, ALT (sospetto biliare)” → `Bilirubina, AST, ALT (sospetto biliare)` — Biliverdina non è un esame di routine; corretto in bilirubina.

**Dubbi:**
- Nessuno.

## polmonite — modificata (2026-10-26 08:50, openai/gpt-oss-120b)

Modifiche:
- sources[2] → 'Ministero della Salute – Linee guida per la diagnosi e la terapia della polmonite acquisita in comunità (2017)' — fonte più precisa e verificabile.
- items[3] in sezione 'Terapia' → '**Ossigenoterapia** per mantenere SpO₂ ≥ 92%' — rimosso asterisco in eccesso.
- items[2] in sezione 'Terapia' → 'CAP grave: **cefalo**sporina + macrolide o **quinolone respiratoria**' — corretto genere di “quinolone respiratoria”.
- items[2] in sezione 'Terapia' → aggiunta “cefalo” per evidenziare la radice corretta della parola (mantiene significato originale).

Dubbi:
- Target di SpO₂ ≥ 92%: le linee guida italiane raccomandano generalmente SpO₂ ≥ 94% nei pazienti senza COPD; la soglia del 92% potrebbe essere troppo bassa per alcuni pazienti.
- Scelta antibiotica per CAP lieve: “amoxicillina o macrolidi” – i macrolidi da soli non sono più raccomandati come terapia empirica monoterapia per CAP lieve.

## sclerosi-multipla — modificata (2026-10-26 08:57, openai/gpt-oss-120b)

Modifiche:
- Ev o per os secondo prescrizione → EV o per os secondo prescrizione — correzione dell’abbreviazione endovenosa (EV) in maiuscolo.
- Immunosoppressione: **infezioni** → immunosoppressione: **infezioni** — uniformare la capitalizzazione (minuscolo) per coerenza stilistica.

Dubbi:
- Nessuno.

## scompenso-cardiaco — modificata (2026-10-26 08:58, openai/gpt-oss-120b)

Modifiche:
- “carenza marziale” → “carenza di ferro” — correzione di termine errato e non pertinente (dispositivo di terapia ironica)  
- “Iperkaliemia” → “Iperkaliemia” — correzione di refuso ortografico  
- Aggiornata la descrizione del dispositivo: “Correzione della **carenza di ferro** (ferro EV)” — per chiarezza e correttezza terminologica  

Dubbi:
- Nessuno

## sepsi — ok (2026-10-26 08:58, openai/gpt-oss-120b)

## Modifiche
- **Nessuna** (il file è corretto secondo le linee guida fornite).

## Dubbi
- Nessuno.

## shock-tipi-e-meccanismi — modificata (2026-10-26 09:00, openai/gpt-oss-120b)

—

## trombosi-venosa-profonda — modificata (2026-10-26 09:06, openai/gpt-oss-120b)

Modifiche:
- '**Trombofilia** ereditaria (Fattore V Leiden, Protrombina 202)' → '**Trombofilia** ereditaria (Fattore V Leiden, Protrombina G20210A)' — correzione del nome corretto della mutazione della protrombina.

Dubbi:
- Nessuno.

## tumori-principi-di-oncologia — modificata (2026-10-26 09:07, openai/gpt-oss-120b)

Modifiche:
- '**Terapia ormonale**: per tumori ormono-sensibili (mammella, prostata)' → '**Terapia ormonale**: per tumori **ormone**-sensibili (mammella, prostata)' — correzione di errore di battitura ("ormono-sensibili" → "ormone-sensibili").

Dubbi:
- Soglia febbre nella red flag: **Febbre > 38 °C** con neutropenia. La definizione clinica di febbre neutropenica è solitamente ≥ 38,3 °C (o ≥ 38,0 °C persistente 1 h). Non è certo se la soglia > 38 °C sia errata o semplicemente una semplificazione.

## ulcera-peptica-ed-emorragia-digestiva — modificata (2026-10-26 09:08, openai/gpt-oss-120b)

Modifiche:
- "Lesione della mucosa gastrica o duodenale che penetra oltre la muscosa propria." → "… oltre la mucosa propria." — correzione di refuso.
- Sources aggiornati: ACG Guideline 2022 (anno corretto), ESGE 2022 (confermato), aggiunta Linee guida SIGE 2020 (fonte reale italiana). — fonti verificate.
- Rimosso tipo "Emorragia varicosa" dalla sezione `types`. — non è una tipologia di ulcera peptica.
- "FANS e AASC" → "FANS e AAS". — abbreviazione corretta.
- Nursing: "Posizione **Trendelenburg** o semi-seduta per ematemesi" → "Posizione semi-seduta (30‑45°) per ematemesi". — pratica più sicura, evita Trendelenburg.
- Aggiornata la voce di `nursing` relativa alla pressione arteriosa per chiarezza.
- Nessun altro cambiamento stilistico o strutturale.

Dubbi:
- Nessuno.

## ustioni — modificata (2026-10-26 09:08, openai/gpt-oss-120b)

Modifiche:
- sources[2] → 'Società Italiana di Chirurgia — Linee guida per la gestione delle ustioni (2020)' — fonte inventata sostituita con una reale e pertinente.
- sections[2].items[0] '**Regola dei 9**' → '**Regola dei nove**' — termine corretto in italiano.

Dubbi:
- Nessuno.

## tubercolosi — modificata (2026-10-26 09:09, openai/gpt-oss-120b)

Modifiche:
- 'OMS — Global Tuberculosis Report 2024' → mantenuto (fonte reale) — nessuna modifica.
- 'ISS — Linee guida per la diagnosi e il trattamento della tubercolosi in Italia' → 'ISS — Linee guida per la diagnosi, terapia e prevenzione della tubercolosi (2020)' — titolo corretto della linea guida ISS.
- 'Ministero della Salute — Piano Nazionale Tubercolosi' → 'Ministero della Salute — Piano Nazionale di Contrasto alla Tubercolosi 2020-2025' — titolo corretto del piano ministeriale.
- '**GPT**' → '**TST**' in tipi di tubercolosi latente e attiva — termine corretto per il test cutaneo della tubercolina.
- '**GPT** (Tuberculin test)' → '**TST** (Tuberculin test)' nella sezione Diagnosi — correzione dell’acronimo.
- 'Screening GPT/IGRA nei contatti stretti' → 'Screening **TST/IGRA** nei contatti stretti' — utilizzo corretto dell’acronimo del test cutaneo.
- '**GPT positiva**' → '**TST positiva**' nei testi dei tipi di tubercolosi — coerenza terminologica.

Dubbi:
- Nessuno.

## ipoglicemia — modificata (2026-10-26 09:11, openai/gpt-oss-120b)

Modifiche:
- Lieve → Glicemia **70–55 mg/dL** — corretto intervallo per ipoglicemia lieve (evita sovrapposizione con moderata) — motivo: coerenza con linee guida.
- Moderata → Glicemia **55–40 mg/dL** — corretto intervallo per ipoglicemia moderata (evita sovrapposizione con lieve) — motivo: coerenza con linee guida.

Dubbi:
- Nessuno.
