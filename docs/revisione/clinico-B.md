# Revisione clinica B — farmacologia, procedure, laboratorio (interrotta su richiesta)

Esito: 17 mappe controllate su 76, 11 corrette. Tutte le mappe corrette sono state esportate senza sforare la pagina (✓, riempimento 91–97%). `tsc --noEmit` passa. Nessun commit.

## Mappe controllate (17, tutte di farmacologia)
calcolo-dei-dosaggi, elettroliti-concentrati-il-potassio, eparina-e-monitoraggio, velocita-di-infusione-ml-h-e-gocce-min, analgesici-e-scala-oms-del-dolore, ansiolitici-e-ipnotici, antiaggreganti, antiaritmici-e-digossina, antibiotici-classi-principali, anticoagulanti, antidiabetici-orali-e-iniettivi, antiepilettici, antipertensivi, antipsicotici-e-antidepressivi, broncodilatatori-e-terapia-inalatoria, corticosteroidi, diuretici.

Senza correzioni: calcolo-dei-dosaggi (ho ricontrollato tutti i conti), antiaritmici-e-digossina, antidiabetici-orali-e-iniettivi, antipertensivi, corticosteroidi, diuretici.

## Correzioni fatte

| Mappa | Prima | Dopo | Motivo |
|---|---|---|---|
| elettroliti-concentrati-il-potassio | Trattamento iperK: "**glucagone** + insulina" | "calcio ev, insulina + glucosio, salbutamolo" | Errore pericoloso: si dà glucosio, non glucagone (ERC 2021) |
| elettroliti-… | ECG iperK: "onde P larghe" | "onde T alte e appuntite, P appiattita, QRS largo" | Il segno tipico è l'onda T alta e appuntita |
| elettroliti-… | CVC: concentrazione max 40 mEq/L | "più alta solo in area critica (protocollo)"; ECG continuo, mai in bolo | Il limite di 40 mEq/L vale per la via periferica |
| elettroliti-… | Periferica: "solo con monitoraggio continuo; evitare" | "sempre diluito e in pompa" | Per via periferica, entro 40 mEq/L e 10 mEq/h, l'ECG continuo non serve |
| elettroliti-… | Enterale "200 mEq/L"; compressa "20 mEq" | "preparazione orale diluita"; "600 mg = 8 mEq" | Valori inventati (600 mg di KCl corrispondono a circa 8 mEq) |
| elettroliti-… | "doppia firma > 20 mEq/L" (inventata); "ECG continuo sempre" | fiale solo in aree autorizzate (Racc. n. 1); ECG se > 10 mEq/h o CVC | Raccomandazione n. 1 del Ministero della Salute (2008) |
| elettroliti-… | Punto chiave: "periferica preferibile, centrale più cautela" | "> 40 mEq/L solo per via centrale, in area critica, con ECG" | Era il contrario del corretto |
| elettroliti-… | Fonti: SIAARTI (inventata), "Ministero 2023" (generica) | Racc. Min. n. 1/2008; ERC 2021 (Special circumstances) | Fonti non verificabili |
| eparina-e-monitoraggio | Osteoporosi: ENF "basso", EBPM "più alto" (riga "OSTE") | ENF più alto, EBPM più basso | Rischio invertito |
| eparina-… | Anti-Xa in profilassi 0,3–0,7 | 0,2–0,5 UI/mL | 0,3–0,7 è il range terapeutico dell'ENF |
| eparina-… | Protamina per ENF: eparina delle "ultime 8 ore" | "delle ultime 2–3 ore; max 50 mg" | Emivita breve dell'ENF (ACCP) |
| eparina-… | Protamina per EBPM: "50% della dose di eparina" | "1 mg/100 UI anti-Xa (se dose < 8 h); neutralizza ~60%" | Formula errata |
| eparina-… | "Ricalibrare la pompa ogni 6 h"; piastrine "a 5–10 gg"; "Hemoglobina" | nomogramma; piastrine basali e ogni 2–3 gg (giorni 4–14); "Emoglobina" | Pratica corretta e refuso |
| eparina-… | Fonti: "IST (IST)…" (inventata), ESC FA 2020 (fuori tema) | ACCP CHEST VTE 2016/2021; ACCP Parenteral Anticoagulants 2012 | Fonti |
| velocita-di-infusione | Macro "10–20", micro "15–60" gtt/mL | macro **20** (set trasfusione 15–20), micro **60** | ISO 8536-4: 20 gocce = 1 mL; il microgocciolatore è da 60 |
| velocita-… | Formula "ml/h = (gtt/min × minuti)/fattore" | "× 60" | Formula sbagliata (l'esempio era già giusto) |
| velocita-… | "Arrotonda all'unità superiore: meglio più veloce"; "arrotondare giù = errore" | arrotondare all'intero più vicino; errore della virgola (×10) | Il consiglio era pericoloso |
| velocita-… | Micro: "farmaci ad alto rischio" | "piccoli volumi, pediatria (meglio pompa)" | Per i farmaci ad alto rischio si usa la pompa |
| velocita-… | Fonte "Farmacologia clinica — Calcoli…" (generica) | ISO 8536-4 | Fonte |
| analgesici-e-scala-oms | "Associare sempre un **antiacido** se codeina" | "associare lassativo (codeina: stipsi)" | Errore |
| analgesici-… | Fonti generiche, "Piano Naz. Cronicità **e del Dolore**" (titolo inesistente) | WHO Cancer Pain Relief 1996; WHO cancer pain 2018; L. 38/2010 | Fonti |
| ansiolitici-e-ipnotici | "Le BZD **non producono tolleranza**" | "modulatori… ma danno **tolleranza**" | Errore |
| ansiolitici-… | "Dipidrossilamina" (non esiste), doxepina | idroxizina, prometazina | Farmaco inesistente |
| ansiolitici-… | "Questi farmaci agiscono sul GABA-A"; "miorelaxazione" | "BZD e Z-drugs…"; "miorilassamento" | Melatonina e antistaminici non agiscono sul GABA-A; refuso |
| ansiolitici-… | Fonti Ministero/AIFA generiche | Linea guida europea insonnia (Riemann, J Sleep Res 2023); NICE CG113 | Fonti |
| antiaggreganti | Classe "TIA (inibitore P2Y12)" e "Aspirina + TIA" | "inibitore P2Y12" | In italiano TIA è l'attacco ischemico transitorio; ticagrelor non è una tienopiridina |
| antiaggreganti | Aspirina 100–300 mg/die | 75–100 mg/die (carico 150–300) | Dose errata |
| antiaggreganti | Prasugrel "controindicato > 75 anni o < 60 kg" | controindicato se pregresso ictus/TIA; sconsigliato ≥ 75 anni; 5 mg se < 60 kg | RCP |
| antiaggreganti | "monitoraggio… tranne ticagrelor"; "Dipyridamolo"; fonte ministeriale generica | tolto; "Dipiridamolo"; ESC 2024 sindromi coronariche croniche | Errore, refuso, fonte |
| antibiotici-classi-principali | "riserbati"; 3 fonti generiche | "riservati"; OsMed AIFA, WHO EML 2023, WHO AWaRe 2022 | Refuso, fonti |
| anticoagulanti | Antidoto del dabigatran "**Idroxizim**" | **Idarucizumab** | Farmaco inesistente |
| anticoagulanti | AVK "1–2 volte/die" | 1 volta/die | Warfarin: una dose al giorno |
| anticoagulanti | "Gravidanza: solo EBPM"; "INR > 5 con emorragia → PCC" | EBPM (o ENF), AVK e DOAC controindicati; emorragia maggiore con qualsiasi INR → PCC + vit. K ev | Errori |
| anticoagulanti | Fonti AIFA (generica) e IST (inventata) | EHRA 2021 NOAC; ACCP CHEST VTE | Fonti |
| antiepilettici | Topiramato "acalasia"; fenitoina "gengivite" | calo ponderale, glaucoma acuto; iperplasia gengivale | Errori |
| antiepilettici | "Midozolam"; "Multi-mechanistic" | Midazolam; "meccanismo multiplo" | Refuso, anglicismo |
| antiepilettici | Status: in seconda linea mancava il levetiracetam | aggiunto il levetiracetam | ESETT, NICE |
| antiepilettici | 3 fonti generiche o inventate | NICE NG217; Trinka (ILAE) 2015; RCP AIFA | Fonti |
| antipsicotici-e-antidepressivi | Tipici: "**ipertensione** ortostatica" | **ipotensione** ortostatica | Errore |
| antipsicotici-… | "riassorbimento 5-HT"; "Sindrome da Discontinua" | "ricaptazione"; "Sindrome da sospensione" | Terminologia |
| antipsicotici-… | Fonti "AIFA Linee guida psicofarmaci" (inventata) e Codice deontologico (fuori tema) | NICE NG222, NICE CG178; titolo italiano del Goodman | Fonti |
| broncodilatatori-e-terapia-inalatoria | "SABA solo di rilievo"; "Rilievo" | mai SABA da solo, al bisogno meglio ICS-formoterolo (GINA 2024); "Al bisogno" | Raccomandazione superata, anglicismo |
| broncodilatatori-… | BPCO: "LABA solo in combinazione"; "GOLD 3–4" | broncodilatatori a lunga durata (LAMA, LABA o LAMA+LABA); gruppi B ed E | GOLD 2023/2024 |
| broncodilatatori-… | "retensione", "inalare lenta", "Onset"; fonte AIFA generica | ritenzione, lentamente, Inizio; RCP AIFA | Refusi, fonte |

## Dubbi per l'infermiere (non modificati)
- **potassio**: la tabella ha ancora una riga "periferica bassa concentrazione 20 mEq/L, preferita in ambulatorio" ed è da ripensare. Il controllo del K⁺ "ogni 4–6 h" è da confermare con il protocollo aziendale. **Va riscritta, idealmente partendo dalla Raccomandazione n. 1.**
- **eparina**: "Trasfusione di piastrine se HIT con emorragia": nella HIT le piastrine si danno solo in caso di emorragia grave. Durata d'azione ENF "4–6 h" (emivita 1–2 h). HIT "alto/basso": meglio "maggiore/minore".
- **ansiolitici**: secondo i punti chiave le BZD a emivita lunga sono "preferite per l'ansia cronica", ma le linee guida preferiscono gli SSRI e limitano le BZD a periodi brevi. Inoltre "Z-drugs solo per l'addormentamento": lo zopiclone vale anche per il mantenimento. Il ramelteon non è in commercio in Italia.
- **antiaggreganti**: dose del dipiridamolo (75–100 mg ×3–4/die).
- **antipsicotici**: sindrome anticolinergica "tipica di TCA e **quetiapina**"; forse meglio clozapina/olanzapina.
- **anticoagulanti**: punto chiave "la funzione renale influenza la clearance di **tutti**", ma non vale per il warfarin.
- **calcolo-dei-dosaggi**: verificare che esista l'edizione Edra di "Clayton, Willihnganz — Farmacologia per infermieri".
- Fonti che ho introdotto a memoria, senza verificarle online (la revisione è stata interrotta): titoli e anni di NICE CG113, NG217, NG222, CG178; Riemann 2023; ACCP 2012/2016/2021; EHRA 2021. Vanno ricontrollate.

## Mappe da riscrivere
- elettroliti-concentrati-il-potassio (impostazione della tabella poco affidabile)
- antipsicotici-e-antidepressivi (molto schematica e con imprecisioni)

## Mappe NON ancora controllate (59)
**Farmacologia (11):** emoderivati-ed-emocomponenti, fans-e-paracetamolo, farmaci-ad-alto-rischio-e-lasa, farmacodinamica-essenziale, gastroprotettori-e-antiemetici, insuline-tipi-e-profili-d-azione, la-regola-delle-7-g, le-vie-di-somministrazione, nitrati-e-farmaci-per-l-angina, oppioidi-e-antidoto, principi-di-farmacocinetica.

**Procedure (30, tutte):** aspirazione-delle-vie-aeree, assistenza-postoperatoria, bendaggi-e-immobilizzazioni, catetere-venoso-periferico-cvp, cateterismo-vescicale, clistere-evacuativo, drenaggi-chirurgici, drenaggi-toracici, ecg-a-12-derivazioni-esecuzione, emocoltura, gestione-del-catetere-vescicale, gestione-della-tracheostomia, gestione-delle-stomie, gestione-di-cvc-e-picc, iniezione-intradermica, iniezione-intramuscolare, iniezione-sottocutanea, medicazione-avanzata-delle-ferite, medicazione-semplice, misurazione-della-pressione-arteriosa, nutrizione-enterale, nutrizione-parenterale, ossigenoterapia-dispositivi, prelievo-arterioso-per-emogasanalisi, preparazione-preoperatoria, pulsossimetria, raccolta-dei-campioni-biologici, sondino-naso-gastrico, trasferimento-letto-carrozzina, trasfusione-la-procedura.

**Laboratorio (18, tutte):** albumina-e-proteine-totali, amilasi-e-lipasi, coagulazione-pt-inr-aptt, d-dimero-e-fibrinogeno, elettroliti-valori-e-alterazioni, emocromo, emogasanalisi-interpretazione-in-4-passi, emogasanalisi-valori-normali, esame-urine, funzionalita-epatica, funzionalita-renale-creatinina-urea-egfr, funzionalita-tiroidea, glicemia-ed-emoglobina-glicata, indici-di-infiammazione-pcr-ves-procalcitonina, lattati, marcatori-cardiaci-troponina-e-bnp, profilo-lipidico, valori-critici-da-comunicare-subito.
