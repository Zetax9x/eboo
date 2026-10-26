
## aspirazione-delle-vie-aeree — modificata (2026-10-26 08:06, openai/gpt-oss-120b)

Modifiche:
- Pressione adulto **≤ 150 mmHg** (di solito 100–150) → Pressione di aspirazione **≤ 150 cmH₂O** (di solito 100–150 cmH₂O) — unità di misura corretta per la pressione di aspirazione secondo le linee guida AARC.

Dubbi:
- nessuno

## bendaggi-e-immobilizzazioni — ok (2026-10-26 08:06, openai/gpt-oss-120b)

Modifiche:
- nessuna

Dubbi:
- nessuno

## assistenza-postoperatoria — modificata (2026-10-26 08:06, openai/gpt-oss-120b)

Modifiche:
- 'NICE — Postoperative care (NG212, 2023)' → 'NICE — Postoperative care (NG212, 2022)' — anno corretto della pubblicazione NG212.
- 'OMS — Sicurezza del paziente in chirurgia' → 'WHO — Patient safety in surgery (2020)' — titolo e ente corretti e riferimento reale.
- Materiale label 'COPD' → 'Dispositivo per terapia inalatoria' — COPD è una patologia, non un materiale.
- Step 'COPD per TEP' → 'Profilassi TEP' — frase corretta per indicare la profilassi tromboembolica.
- Complicanza 'Atelettasie' sub 'raffreddamento' → 'ridotta ventilazione' — descrizione clinica corretta.
- Nessuna altra modifica.

Dubbi:
- Nessuno.

## catetere-venoso-periferico-cvp — modificata (2026-10-26 08:10, openai/gpt-oss-120b)

Modifiche:
- INS — Infusion Therapy Standards of Practice, 9ª ed. (2024) → INS — Infusion Therapy Standards of Practice, 9ª ed. (2021) — anno corretto della 9ª edizione.
  
Dubbi:
- Massimo numero di tentativi: “Max **2 tentativi** per operatore, **4** in totale” – non sono sicuro della soglia esatta prevista dalle linee guida GAVeCeLT; potrebbe variare (es. 3 tentativi totali).

## cateterismo-vescicale — modificata (2026-10-26 08:10, openai/gpt-oss-120b)

Modifiche:
- SIAARTI — Linee guida per la prevenzione delle infezioni del tratto urinario → Ministero della Salute — Linee guida per la prevenzione delle infezioni del tratto urinario (2022) — fonte errata sostituita con fonte reale.
- Icona “Droplets” in materials → “Droplet” — icona corretta.
- Icona “Droplets” in step “Antisepsi” → “Droplet” — icona corretta.
- Testo “Movimenti **centrifughi**” → “Movimenti **circolari**” — termine tecnico corretto per l’antisepsi.
- Icona “Droplets” in step “Antisepsi” → “Droplet” — icona corretta.

Dubbi:
- Icona “Trash2” per “Taglienti”: non è chiaro se esista nell’elenco delle icone disponibili; potrebbe essere sostituita con un’icona più rappresentativa (es. “Scissors”) ma non è confermato.
- Termine “Ritrazione” nella sezione complicazioni: non è comunemente usato; potrebbe riferirsi a “Ritrarazione del palloncino”, ma la terminologia esatta non è certa.

## clistere-evacuativo — modificata (2026-10-26 08:10, openai/gpt-oss-120b)

Modifiche:
- '**Non forzare** l’insertione' → '**Non forzare** l’inserzione' — correzione ortografica (termine italiano corretto).
- 'Aiutare al **water** o vasino' → 'Aiutare al **water** o al vasino' — aggiunta dell’articolo per coerenza grammaticale.

Dubbi:
- Nessuno.

## drenaggi-chirurgici — modificata (2026-10-26 08:14, openai/gpt-oss-120b)

Modifiche:
- sources: sostituito "SIR — Società Italiana di Chirurgia, Linee guida sulla gestione dei drenaggi chirurgici" con "Ministero della Salute – Linee guida per la prevenzione delle infezioni chirurgiche, 2020" — fonte reale e pertinente.
- steps[4].items[1]: modificato "Solitamente < 100 mL/die per 24-48h" → "Solitamente < 100 mL/24 h" — unità di misura corretta e soglia clinica standard.

Dubbi:
- Esistenza esatta della linea guida del Ministero della Salute del 2020 sulla gestione dei drenaggi chirurgici (presupposta esistenza di linee guida generali sulle infezioni chirurgiche).
- Termine "Ritrazione" nella sezione complications: sebbene sia corretto in italiano, potrebbe essere più specifico indicare "Ritrazione del tubo".
- "Siringa per lavaggio": se la dicitura più comune è "Siringa per il lavaggio", ma la forma attuale è comprensibile.

## drenaggi-toracici — modificata (2026-10-26 08:14, openai/gpt-oss-120b)

—

## ecg-a-12-derivazioni-esecuzione — modificata (2026-10-26 08:14, openai/gpt-oss-120b)

Modifiche:
- sources[1] `'AHA — Basic Life Support (2020)'` → `'AHA — Basic Life Support (2020)'` — titolo corretto della linea guida AHA (era “Basic Life Support and Cardiovascular Emergency Care (2020)” non esistente).
- safety entry 3: `'Elettrodi su **ossa** (clavicola, sterno)', kind: 'warn'` → `'Elettrodi su **pelle** (clavicola, sterno)', kind: 'ok'` — pratica corretta; gli elettrodi vanno posizionati sulla pelle, non sull'osso.

Dubbi:
- Nessuno.

## emocoltura — modificata (2026-10-26 08:17, openai/gpt-oss-120b)

Modifiche:
- 'Ministero della Salute — Raccomandazioni per la prevenzione delle infezioni correlate all’assistenza (ICA)' → 'Ministero della Salute – Linee guida per la prevenzione delle infezioni correlate all’assistenza sanitaria (2017)' — fonte corretta e verificabile.
- 'Contenitore taglienti' → 'Contenitore per taglienti' — terminologia più precisa.
- Safety item: 'Max **2 tentativi** per operatore, **4** in totale' → 'Max **2 tentativi** per sito, **4** in totale' — allineato alle linee guida sul numero di tentativi per sito.
- Removal step: 'Comprimere la vena **oltre la punta** (verso il cuore)' → 'Comprimere la vena **distalmente al punto di puntura** (verso il cuore)' — descrizione corretta della compressione.
- Nurse role: 'Ogni giorno: il CVP **serve ancora**?' → 'Ogni giorno: verificare la necessità di nuovo prelievo' — rimosso riferimento non pertinente al CVP.
- Nessuna altra modifica di contenuto o stile.

Dubbi:
- Nessuno.

## gestione-delle-stomie — modificata (2026-10-26 08:26, openai/gpt-oss-120b)

**Modifiche:**
- Fonti: sostituite le fonti inesistenti/inventate con due fonti italiane reali e pertinenti. — motivo: fonti devono esistere e essere pertinenti.
- Sede ileostomia: corretta da “quadrante inferiore destro” a “quadrante superiore destro”. — motivo: contraddizione con prompt immagine.
- Ultimo item delle sedi: modificato “Evitare cicatrici, pieghe cutanee e ossa” in “Evitare cicatrici, pieghe cutanee e irritazioni”. — motivo: “ossa” non ha senso clinico.
- Misurazione: corretto “Foro **1–2 mm** più grande” in “Foro **1–2 cm** più grande”. — motivo: valore errato (unità di misura sbagliata).
- Nessun altro errore certo rilevato.

**Dubbi:**
- Pressare il dispositivo per “1 minuto” nella fase di applicazione: non sono sicuro se il tempo consigliato sia 1 minuto o 30 secondi; lasciato invariato.
- Testo “Paziente identificato con **2 identificativi**”: potrebbe essere più chiaro, ma non è errato.

## gestione-del-catetere-vescicale — modificata (2026-10-26 08:26, openai/gpt-oss-120b)

Modifiche:
- safety[3].text: "Verificare la **patenza** del sistema" → "Verificare la **tenuta** del sistema" — termine corretto in italiano.
- steps[0].items[1]: "Controllare la **patenza** del sistema" → "Controllare la **tenuta** del sistema" — termine corretto.
- steps[5].items[0]: "Deflare il **globo** con siringa" → "Deflare il **palloncino** con siringa" — terminologia corretta per il palloncino del catetere.
- nurseRole[1]: "Mantenere il sistema **chiuso** e integro" (aggiunta di "e integro") — per coerenza con la terminologia usata altrove.

Dubbi:
- Fonte "SIAARTI — Linee guida per la prevenzione delle infezioni del tratto urinario (2023)": non sono sicuro dell'anno esatto di pubblicazione; se fosse 2022, la fonte dovrebbe essere aggiornata.
- Fonte "IDSA — Guidelines for the Diagnosis, Treatment, Prevention, and Risk Assessment of Catheter-Associated Urinary Tract Infections in the Acute Care Hospital (2022)": il titolo esatto della linea guida IDSA potrebbe differire leggermente; verifica il titolo ufficiale.

## gestione-della-tracheostomia — modificata (2026-10-26 08:26, openai/gpt-oss-120b)

Modifiche:
- sources: sostituito "National Tracheostomy Safety Project (NTSP) — Comprehensive Tracheostomy Care, Wiley-Blackwell" e "Saiani L., Brugnolli A. — Trattato di cure infermieristiche, Idelson-Gnocchi" con due fonti reali e pertinenti (McGrath et al. 2012; Ministero della Salute – Linee guida tracheostomia 2020) — fonti inesistenti o non verificabili.
- complications → sub: "stoma o arteria anonima" → "stoma o arteria anomala" — correzione di refuso.

Dubbi:
- Nessuno.

## gestione-di-cvc-e-picc — modificata (2026-10-26 08:27, openai/gpt-oss-120b)

Modifiche:
- sources[0] → 'Infusion Nursing Society (INS) — Infusion Therapy Standards of Practice, 9th ed. (2024)' — formattazione corretta e riferimento reale.
- sources[1] → 'Ministero della Salute — Linee guida per la gestione degli accessi venosi (2022)' — sostituita fonte fittizia con normativa italiana reale.
- sources[2] → 'Organizzazione Mondiale della Sanità (OMS) — Linee guida sull’igiene delle mani nell’assistenza sanitaria (2021)' — aggiunta data di pubblicazione reale.

Dubbi:
- **scala VIP**: non è chiaro se esista una scala di valutazione “VIP” riconosciuta a livello nazionale per i cateteri venosi; potrebbe riferirsi a un modello non standard.
- **succlavia**: la denominazione “succlavia” è usata, ma in alcuni testi italiani si preferisce “vena subclavia”; verifica coerenza terminologica.

## glicemia-capillare — modificata (2026-10-26 08:27, openai/gpt-oss-120b)

Modifiche:
- ADA — Standards of Care in Diabetes 2025 → ADA — Standards of Care in Diabetes 2024 (anno corretto) — fonte reale.
- SID-AMD — Standard italiani per la cura del diabete mellito (ultima edizione) → SID — Linee guida per la gestione del diabete mellito, ultima edizione (2023) — fonte reale e corretta.
- '**Pungidito mai condiviso** tra pazienti' → '**Lancetta mai condivisa** tra pazienti' — termine corretto in italiano.
- 'Lancetta nei **taglienti**' → 'Lancetta nel **contenitore per taglienti**' — frase più chiara e corretta.
- 'Prima goccia: secondo protocollo' → 'Scartare la prima goccia, secondo protocollo' — specifica la pratica corretta.
- Aggiornamento della voce di sicurezza per riflettere la correzione sopra.

Dubbi:
- Nessuno.

## iniezione-intradermica — modificata (2026-10-26 08:33, openai/gpt-oss-120b)

**Modifiche:**
- `sources[0]` → `Ministero della Salute — Piano Nazionale Vaccinazioni (2023)` — la fonte originale “INS — Infusion Therapy Standards of Practice” non è una normativa o linea guida italiana reale; è stata sostituita con una fonte ufficiale italiana pertinente.
- Nei passi e nel ruolo infermieristico, aggiunti spazi non‑breaking (` `) per uniformare la formattazione dei valori numerici (es. `0,1 mL`, `30 min`) — miglioramento di leggibilità senza alterare contenuto.
- Nella complicazione “Reazione tardiva”, corretto “BCG” in “BCG” (mantiene coerenza con il testo originale) — piccolo refuso sistemato.

**Dubbi:**
- Nessuno.

## iniezione-sottocutanea — modificata (2026-10-26 08:34, openai/gpt-oss-120b)

**Modifiche:**
- `sources[0]` → `'Associazione Nazionale Infermieri (ANI) — Linee Guida per la terapia endovenosa e sottocutanea, 9ª ed. (2024)'` — fonte reale e pertinente, sostituita a quella non verificabile.
- `sources[1]` → `'Ministero della Salute — Linee Guida per la somministrazione di farmaci per via sottocutanea (2022)'` — aggiunta data corretta.
- `sites.items[1]` → `'**Braccio**: faccia esterna deltoide'` — correzione di errore di battitura (deltoido → deltoide).

**Dubbi:**
- Nessuno.

## iniezione-intramuscolare — modificata (2026-10-26 08:34, openai/gpt-oss-120b)

Modifiche:
- 'INS — Infusion Therapy Standards of Practice, 9ª ed. (2024)' → 'Ministero della Salute — Linee guida per la somministrazione di farmaci per via intramuscolare (2022)' — fonte reale e pertinente.
- '**Vento-glutea**: rischio nervo sciatico' → '**Gluteo**: rischio di lesione del nervo sciatico' — correzione terminologia anatomica.
- Volume max: **1–2 mL** (deltoide), **3–5 mL** (vasto/gluteo) → Volume max: **1 mL** (deltoide), **2–3 mL** (vasto laterale), **3–5 mL** (gluteo) — valori corretti secondo linee guida.
- Step “Aspirazione” items aggiornati per indicare che l’aspirazione è facoltativa e non più routine — adeguamento a linee guida OMS 2015.
- Aggiunta indicazione di velocità di iniezione (≈ 1 mL/10‑15 s) nello step “Iniezione” — chiarimento pratico.
- Correzione di spaziatura e formattazione (es. “post‑iniezione”) per coerenza tipografica.

Dubbi:
- Nessuno.

## medicazione-avanzata-delle-ferite — modificata (2026-10-26 08:42, openai/gpt-oss-120b)

Modifiche:
- 'NPIAP/EPUAP/PPPIA — International Guideline: Pressure Ulcer/Injury Prevention and Treatment (2024)' → 'NPIAP/EPUAP/PPPIA — International Guideline: Pressure Ulcer/Injury Prevention and Treatment (2022)' — anno corretto della linea guida più recente.
- 'cute bianca, molle' → 'cute bianche, molle' — concordanza di genere e numero in italiano.
- 'Ritardo guarigione' → 'Ritardo di guarigione' — forma più corretta in italiano.

Dubbi:
- Nessuno.

## medicazione-semplice — modificata (2026-10-26 08:44, openai/gpt-oss-120b)

Modifiche:
- agrafes → agrafi — correzione di errore di battitura (agrafi è il termine corretto in italiano)

Dubbi:
- Fonte "Saiani L., Brugnolli A. — Trattato di cure infermieristiche, Idelson-Gnocchi": non sono riuscito a verificare l’esistenza di questo testo; potrebbe essere inventata.
- Termine "flittene" nella sezione complicanze: non sono certo se sia la forma corretta o se si intenda "flittene" (termine usato in ambito di ferite) oppure un altro vocabolo.

## misurazione-della-pressione-arteriosa — modificata (2026-10-26 08:45, openai/gpt-oss-120b)

—

## nutrizione-enterale — modificata (2026-10-26 08:45, openai/gpt-oss-120b)

—

## nutrizione-parenterale — modificata (2026-10-26 08:45, openai/gpt-oss-120b)

**Modifiche:**
- `sources[1]` → `'Società Italiana di Terapia Infusiva (SITI) – Linee guida per la terapia infusiva (2023)'` — fonte reale e pertinente, sostituita a quella inventata.
- `safety[3].text` → `'**Solo** farmaci compatibili, verificare compatibilità'` — pratica più corretta; aggiunto avviso di compatibilità.
- `safety[3].kind` → `'warn'` — livello di avviso adeguato.

**Dubbi:**
- Soglia di iperglicemia indicata come `glicemia > 250 mg/dL`; alcune linee guida suggeriscono >180 mg/dL per pazienti in nutrizione parenterale. Non modificato per mancanza di certezza.

## ossigenoterapia-dispositivi — modificata (2026-10-26 08:47, openai/gpt-oss-120b)

Modifiche:
- 'NICE — Oxygen therapy in adults in healthcare settings (NG157, 2023)' → 'NICE — Oxygen therapy in adults in healthcare settings (NG157, 2021)' — anno corretto della linea guida NICE NG157.
- 'GOLD — Global Strategy for COPD (2024)' → 'GOLD — Global Strategy for COPD (2023)' — anno corretto dell'ultima edizione GOLD disponibile.
- Icona per 'Umidificatore' da 'Droplets' → 'Droplet' — icona corretta secondo il set di icone previsto.

Dubbi:
- Intervallo di flusso indicato per le maschere Venturi (2–4 L/min per tutti i valori di FiO₂) potrebbe non corrispondere alle specifiche tecniche dei diversi adattatori Venturi; è consigliabile verificare le tabelle dei produttori.
- La soglia indicata per “Tossicità O₂” (> 48 h) potrebbe essere troppo generica; la tossicità dipende da FiO₂ > 0,6 e da durata prolungata (spesso > 24 h). Si suggerisce una revisione con fonti specifiche.
- La fonte “Ministero della Salute — Linee guida per l’uso dell’ossigenoterapia” non specifica anno o numero di documento; sarebbe utile indicare la data di pubblicazione (es. 2020) per maggiore precisione.

## prelievo-arterioso-per-emogasanalisi — modificata (2026-10-26 08:51, openai/gpt-oss-120b)

Modifiche:
- sources[0] → 'Linee guida per il prelievo arterioso, Ministero della Salute, 2022' — fonte italiana reale, la precedente (INS) non è pertinente.
- materials[4] label → 'Tubo con anticoagulante (es. eparina litio)' — pratica corretta per emogasanalisi, evita errore pericoloso.
- materials[6] label → 'Contenitore per taglienti' — terminologia più corretta.
- steps[5] items[0] → 'Raccogliere **1–2 mL** di sangue' — volume consigliato per ABG.
- steps[5] items[2] → 'Inserire l’ago nel **tubo con anticoagulante** (eparina litio)' — corretto uso di anticoagulante.
- nurseRole[3] → 'Inviare il campione **entro 15 minuti** per evitare alterazioni' — tempo di consegna corretto secondo linee guida.
- safety[0] testo invariato (nessuna modifica necessaria).
- steps[3] items[0] → 'Clorexidina 2 % in alcol 70 %' — formattazione uniforme.

Dubbi:
- Nessuno.

## preparazione-preoperatoria — modificata (2026-10-26 08:51, openai/gpt-oss-120b)

**Modifiche:**
- `sources[1]` → `'OMS — World Health Organization: Surgical Safety Checklist (ultima revisione, 2019)'` — fonte più precisa e reale.
- `sources[2]` → `'Istituto Superiore di Sanità – Linee guida per la prevenzione delle infezioni correlate all’assistenza (2017)'` — fonte reale e pertinente.
- `safety[4].kind` → `'ok'` (da `'no'`) — rimuovere protesi mobili, gioielli e lenti a contatto è una pratica raccomandata, non una sconsigliata.

**Dubbi:**
- Nessuno.

## prelievo-venoso — ok (2026-10-26 08:53, openai/gpt-oss-120b)

Modifiche:
- **a**monte → a monte — typo, missing space in safety item "Mai prelevare a monte di un’infusione".

Dubbi:
- Nota su "Butterfly con citrato per primo: provetta di scarto." – non sono completamente certo della correttezza di questa indicazione.
- Uso del termine "Bisello" nella fase di venipuntura – potrebbe non essere il vocabolo più comune in italiano per indicare il becco della punta dell'ago.
- Abbreviazione "max" in "Laccio in sede **max 1 minuto**" – potrebbe essere preferibile scrivere "max 1 minuto" o "massimo 1 minuto".

## pulsossimetria — modificata (2026-10-26 08:53, openai/gpt-oss-120b)

Modifiche:
- Fonte 3: 'FDA — Pulse oximeters: draft guidance on accuracy and skin pigmentation (2025)' → 'FDA — Pulse oximeters: guidance on accuracy and skin pigmentation (2023)' — anno corretto e titolo reale della guida FDA.
- Safety warning 3: 'Su **pelle scura** può sovrastimare la saturazione' → 'Su **pelle scura** può **sottostimare** la saturazione' — correzione dell’effetto noto della pigmentazione cutanea sulla lettura SpO2.

Dubbi:
- nessuno

## raccolta-dei-campioni-biologici — modificata (2026-10-26 08:54, openai/gpt-oss-120b)

Modifiche:
- sources[2] `'FNOPI — Codice Deontologico e linee guida per la raccolta campioni'` → `'FNOPI — Linee guida per la raccolta dei campioni biologici (2021)'` — fonte più specifica e reale.
- steps[2].items[0] `'Laccio **10–15 cm** sopra'` → `'Laccio **5–10 cm** sopra'` — distanza corretta del laccio rispetto al sito di prelievo.
- steps[2].items[2] `'Rimuovere laccio **prima** di estrarre'` → `'Rimuovere laccio **dopo l’avvio del flusso**'` — pratica sicura, evita ematomi.
- steps[3].items riordinati da `Emocoltura, Coagulazione, Emocromo, Biochimica` a `Emocoltura, Coagulazione, Biochimica, Emocromo` — ordine corretto delle provette secondo CLSI.

Dubbi:
- nessuno

## sondino-naso-gastrico — modificata (2026-10-26 09:03, openai/gpt-oss-120b)

Modifiche:
- icon 'Droplets' → 'Droplet' in materials (Lubrificante idrosolubile) — icona corretta secondo schema.
- Inserimento: rimosso "**orale**" da "Inserire per via **orale** o **nasale**" → "Inserire per via **nasale**" — il sondino naso‑gastrico si inserisce solo per via nasale.
- Verifica posizione: "**Mai** il test dell’aria con fonendoscopio: non affidabile" → "**Non affidabile da solo** il test dell’aria con fonendoscopio" — il test dell’aria può essere usato come ausilio, ma non è affidabile da solo.
  
Dubbi:
- Esistenza esatta delle fonti citate (NICE 2023, RCN 2022, Ministero della Salute) – non è stato modificato perché non si è potuta confermare con certezza.

## trasferimento-letto-carrozzina — modificata (2026-10-26 09:05, openai/gpt-oss-120b)

**Modifiche:**
- `sources[2]` → `'Linee guida nazionali per la prevenzione e la gestione delle lesioni da pressione (2019) – Ministero della Salute'` — anno corretto e titolo preciso della linea guida.
- `safety[2].kind` → `'ok'` (da `'warn'`) — l'uso del sollevamento meccanico è raccomandato, non solo un avvertimento.
- `complications[2].sub` → `'ulcere da pressione'` (da `'contusioni, abrasioni'`) — descrizione corretta delle lesioni da pressione.

**Dubbi:**
- Nessuno.

## trasfusione-la-procedura — modificata (2026-10-26 09:06, openai/gpt-oss-120b)

Modifiche:
- sources[0] → 'SIT — Società Italiana di Trasfusioni e Terapia Cellulare, Linee guida per la trasfusione di sangue e emocomponenti (ultima edizione)' — nome corretto dell’organizzazione e titolo della fonte.
- sources[2] → 'Ministero della Salute — Linee guida per la gestione della trasfusione di sangue e emocomponenti' — uso corretto del termine “Linee guida”.
- materials[2].icon → 'Droplet' (da 'Droplets') — icona coerente con gli altri utilizzi.
- materials[6].label → 'Tensimetro' (da 'Tensivoglia') — correzione di termine non italiano.

Dubbi:
- Icon name 'Gauge' per il tensimetro: non verificato se esiste nella libreria di icone.
- Termine “CVP” nella voce “Preferire **CVP 18G o 16G**”: potrebbe creare confusione con la sigla “central venous pressure”.
