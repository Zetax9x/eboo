# Revisione clinica C — capitoli ecg, emergenze, specialistica, concorsi

Revisione interrotta su richiesta dell'utente. Mappe modificate: tutte esportate (✓, nessuna sfora la pagina); `tsc` e `vitest` passano (36/36). Niente commit.

## Mappe già controllate (23)
- **ECG (18/18):** asistolia-e-pea, blocchi-atrioventricolari, blocchi-di-branca, bradicardia-sinusale, ecg-e-squilibri-elettrolitici, ecg-le-basi-e-il-ritmo-sinusale, extrasistoli-sopraventricolari-e-ventricolari, fibrillazione-atriale-il-tracciato, fibrillazione-ventricolare, flutter-atriale, le-12-derivazioni, lettura-dell-ecg-in-8-passi, monitoraggio-cardiaco-e-allarmi, ritmi-da-pacemaker, stemi-e-nstemi, tachicardia-sinusale, tachicardia-sopraventricolare, tachicardia-ventricolare
- **Emergenze (5/24):** als-algoritmo, bls-d-adulto, carrello-delle-emergenze, crisi-convulsiva, crisi-ipertensiva

Ho confrontato i parametri dei tracciati (RhythmStrip) con le etichette: coerenti, tranne `hyperk`, dove il tracciato ha QRS stretto a circa 75/min. Ho adattato il testo delle caratteristiche al tracciato.

Senza correzioni: blocchi-atrioventricolari, bradicardia-sinusale, ecg-le-basi, extrasistoli, fibrillazione-atriale, flutter-atriale, tachicardia-sinusale, tachicardia-sopraventricolare.

Le correzioni sono fatte a memoria. La ricerca web per verificare le fonti primarie non è stata fatta perché la revisione è stata fermata prima.

## Correzioni fatte

| Mappa | Prima | Dopo | Motivo |
|---|---|---|---|
| asistolia-e-pea | fonte "Ministero della Salute — Raccomandazioni per la gestione delle emergenze" | ERC 2021 — Adult ALS | fonte inesistente o generica |
| asistolia-e-pea | "PEA: TTE per pneumotorace (assenza sliding lung)" | ecografia polmonare (assenza di sliding) | lo sliding si vede con l'ecografia polmonare, non con l'ecocardiogramma |
| asistolia-e-pea | "PEA: distinguere da FV (QRS caotico)" | "Asistolia: escludere FV fine (aumentare il guadagno)" | frase senza senso clinico |
| asistolia-e-pea | asistolia dopo 10 min → prognosi sfavorevole | dopo 20 min di ALS senza cause reversibili | criterio ERC (etica) |
| blocchi-di-branca | "R larga e slargata" | "R larga e intaccata" | ripetizione |
| ecg-e-squilibri-elettrolitici | fonti Katz "ECG: interpretazione pratica", UpToDate (titolo inventato) | Hampton "ECG facile"; ERC 2021 circostanze speciali | fonti non verificabili |
| ecg-e-squilibri-elettrolitici | iperK in emergenza: "glucagone" | calcio EV, insulina + glucosio, salbutamolo | il glucagone non si usa nell'iperkaliemia |
| ecg-e-squilibri-elettrolitici | sezione calcio: "Ipopotassiemia: QT allungato", "Ipopotassiemia: T invertita", "paratiroidismo" | ipocalcemia: QT lungo (ST lungo); ipocalcemia: tetania e laringospasmo; iperparatiroidismo | elettrolita sbagliato, termine sbagliato |
| ecg-e-squilibri-elettrolitici | "K⁺ > 7,5: QRS a triangolo" | onda sinusoidale, rischio di FV o asistolia | descrizione corretta |
| ecg-e-squilibri-elettrolitici | "K⁺ max 10 mEq/h per CVC" | sempre diluito in pompa, mai in bolo (di norma ≤ 10 mEq/h) | per CVC sono possibili velocità maggiori; il limite era attribuito alla via sbagliata |
| ecg-e-squilibri-elettrolitici | caratteristiche: QRS allargato e bradicardia; "T picco acuminata" | testo coerente con il tracciato; "T alta e appuntita"; "onde T a tenda" | coerenza con il tracciato, grammatica |
| fibrillazione-ventricolare | fonte "FIO — Federazione Italiana di Cardiologia" | ERC 2025 — Adult ALS | ente inesistente |
| fibrillazione-ventricolare | "miosi midriatiche" | midriasi | errore |
| fibrillazione-ventricolare | "150–200 J biphasica" | ≥ 150 J bifasica | ERC; ortografia |
| fibrillazione-ventricolare | adrenalina "dopo 2 defibrillazioni" | dopo il 3° shock | ERC |
| fibrillazione-ventricolare | amiodarone "se refrattaria" | 300 mg dopo il 3° shock, 150 mg dopo il 5° | ERC |
| fibrillazione-ventricolare | "compressioni durante le fasi di analisi" | pausa solo per analisi e shock | errore pericoloso |
| fibrillazione-ventricolare | "paddles adesivi"; "VF" | piastre adesive; FV | italiano |
| le-12-derivazioni | fonte "ESC 2023 — SVT guidelines" (non esiste); titolo Kligfield errato; "Testi … per Infermieri" | AHA/ACCF/HRS 2009 parte VI; Kligfield, Circulation 2007 parte I; Hampton | fonti |
| le-12-derivazioni | poli di DI, DII e DIII sbagliati (es. "III: gamba sx → gamba dx") | DI: braccio dx (−) → braccio sx (+); DII: braccio dx (−) → gamba sx (+); DIII: braccio sx (−) → gamba sx (+) | errore |
| le-12-derivazioni | testo in cirillico "deполязация"; "la posizionamento"; "Augmentate"; "mid-claveare" | testo italiano corretto | refusi |
| le-12-derivazioni | "solo V1 e V2 sono unipolari" | tutte le precordiali sono unipolari | errore |
| le-12-derivazioni | nella donna elettrodi "sopra il seno" | V4–V6 sotto il seno | AHA |
| le-12-derivazioni | elettrodi troppo alti o troppo bassi: "P e T invertite in tutte le derivazioni" | V1–V2 alte: falsa rSR’ e P/T negative; precordiali spostate: progressione della R alterata | errore |
| le-12-derivazioni | "Spalla"; "Nero/Bianco" | braccio; nero (standard IEC) | coerenza con le altre mappe |
| lettura-dell-ecg-in-8-passi | fonte AHA BLS | Hampton | fonte non pertinente |
| lettura-dell-ecg-in-8-passi | asse: "DI+ / aVF− = deviazione sinistra" | guardare DII; deviazione sinistra solo se DII è negativa | errore |
| lettura-dell-ecg-in-8-passi | ampiezza P < 2,5 mm "in V1"; "biphasica"; "Delta wave" | in DII; bifasica; onda delta | errore, italiano |
| monitoraggio-cardiaco-e-allarmi | fonti AHA/ACC SCA e "FNOPI linee guida sicurezza" | Sandau (AHA, Circulation 2017); AACN Practice Alert sugli allarmi (2018) | fonti |
| monitoraggio-cardiaco-e-allarmi | colori degli elettrodi sbagliati, "costella" | standard IEC: rosso braccio dx, giallo braccio sx, verde gamba sx, nero gamba dx, bianco V1 | errore |
| monitoraggio-cardiaco-e-allarmi | "Cable", "VT/VF", "referto" | cavo, TV/FV, documentazione | italiano |
| ritmi-da-pacemaker | "ESC 2023 pacing" (è del 2021); "Hindricks… SVT 2015" (non pertinente); "Klein H" (non verificabile) | ESC 2021; Bernstein, codice NASPE/BPEG (PACE 2002); Hampton | fonti |
| ritmi-da-pacemaker | "Codice NACC" e significato errato delle lettere 2–5 | codice NBG: camera sentita, risposta (I/T/D), modulazione R, multisito | errore |
| ritmi-da-pacemaker | "VVI pacing fisso"; "non-sensing = doppia stimolazione" | VVI a domanda; undersensing = spike inappropriati, anche sulla T | errore |
| stemi-e-nstemi | fonte "Ministero — PDTA SCA" | Fourth Universal Definition of MI, 2018 | fonte non verificabile |
| stemi-e-nstemi | sopraslivellamento ST ≥ 1 mm senza eccezioni | aggiunto V2–V3: 1,5–2,5 mm | criteri ESC |
| stemi-e-nstemi | V1–V4 → "coronaria sinistra" | interventricolare anteriore | precisione |
| stemi-e-nstemi | PCI "entro 90 min dal primo contatto"; NSTEMI "24–72 h" | PCI primaria se eseguibile entro 120 min dalla diagnosi; NSTEMI < 2 h (rischio altissimo) o < 24 h (alto) | ESC 2023 |
| stemi-e-nstemi | ECG "entro 10 min dal ricovero"; "VT" | dal primo contatto; TV | ESC |
| tachicardia-ventricolare | "ESC 2024 aritmie ventricolari" | ESC 2022 | anno sbagliato |
| tachicardia-ventricolare | "dilated, aritmogene", "ipomagnesemia", "polso irregolare" | dilatativa, aritmogena; ipomagnesiemia; polso rapido | italiano, clinica |
| als-algoritmo | ventilazioni "11–12/min, 30:2 se singolo, asincrono se due" | 30:2 fino alla via aerea avanzata, poi 10/min con compressioni continue | ERC |
| als-algoritmo | "200 J biphasic", "Nessun shock", "Asistole" | ≥ 150 J bifasico; nessuno shock; asistolia | ERC, italiano |
| als-algoritmo | via venosa centrale, endotracheale | venosa periferica, poi intraossea; via endotracheale non raccomandata | ERC 2021 |
| als-algoritmo | adrenalina senza tempi | subito nei ritmi non defibrillabili; dopo il 3° shock nei defibrillabili | ERC |
| als-algoritmo | terminare "dopo 30 min" | decisione del team leader secondo criteri ERC | cifra senza fonte |
| als-algoritmo | lidocaina 1–1,5 mg/kg | 100 mg (poi 50 mg) | dose ERC |
| bls-d-adulto | fonte "ultimo aggiornamento" | ERC 2021 BLS | fonte precisata |
| carrello-delle-emergenze | 3 fonti inventate o non pertinenti | RCUK Quality standards; Raccomandazioni ministeriali n. 1 (KCl) e n. 7 | fonti |
| carrello-delle-emergenze | adrenalina "3 mg (30 ml)"; "nitrato di amilo spray SL" | adrenalina 1 mg/1 ml o 1 mg/10 ml; nitroglicerina 0,4 mg/dose SL | errore |
| carrello-delle-emergenze | cetirizina EV, dipirona, prednisolone EV, "Dexametazone 8 ml" | clorfenamina 10 mg EV/IM; metilprednisolone 40 mg; voce eliminata; desametasone 8 mg/2 ml | farmaci inesistenti per quella via o fuori tema |
| carrello-delle-emergenze | KCl 10% sul carrello | KCl concentrato non sul carrello (Raccomandazione n. 1) | norma per la sicurezza |
| carrello-delle-emergenze | verapamil e digossina "5 ml"; scadenze "entro 6 mesi dall'apertura" | 2 ml; controllo e sostituzione dei farmaci in scadenza | errore |
| crisi-convulsiva | fonti AAN 2016, titolo NICE errato, "Codice deontologico 2020" | AES (Glauser 2016); NICE NG217 (2022); ESETT (NEJM 2019) | fonti |
| crisi-convulsiva | "non misurare la glicemia durante la crisi" | "non dimenticare la glicemia" | errore pericoloso |
| crisi-convulsiva | terza linea "levetiracetam o fenobarbital" | levetiracetam 60 mg/kg o valproato 40 mg/kg in seconda linea; poi anestesia in TI | ESETT/AES |
| crisi-ipertensiva | **urgenza ed emergenza invertite in tutta la mappa** | emergenza = con danno d'organo; urgenza = senza | errore grave |
| crisi-ipertensiva | clonidina EV 0,5–1,5 mg "per encefalopatia" | urapidil EV 12,5–25 mg in bolo, poi infusione | dose e indicazione errate |
| crisi-ipertensiva | fonte "ESC/ESH 2023", "SIC linee guida crisi ipertensiva"; "entrambi gli arti" | ESH 2023; ESC 2024; entrambe le braccia | fonti, italiano |

## Dubbi da far verificare all'infermiere
- **als-algoritmo:** temperatura post-ROSC "32–36 °C" (ERC 2021). ERC 2025 punta a prevenire la febbre (≤ 37,5 °C): da aggiornare? Altri punti: EtCO₂ 35–45 e "MAP ≥ 65, evitare ipertensione".
- **crisi-ipertensiva:** soglia di dimissione "< 160/100"; "creatinina > 1,5"; obiettivo "20–25% in 1–2 h" contro "> 25% in 24 h"; dosi di labetalolo e nitroglicerina.
- **carrello-delle-emergenze:** bicarbonato 4,2% (in Italia di solito 8,4%); le formulazioni delle fiale vanno controllate sul prontuario aziendale; "antistaminici H1 e H2 combinati".
- **ritmi-da-pacemaker:** batteria esaurita = "frequenza di riserva 65 bpm" (dipende dal produttore).
- **monitoraggio-cardiaco-e-allarmi:** PVC 0–12 mmHg (i valori normali citati di solito sono 2–8); preparazione della cute con alcol (AHA indica acqua e sapone); soglie di allarme.
- **stemi-e-nstemi:** "< 2 ore per massimizzare il beneficio"; terapia antiaggregante "per entrambi" (ESC 2023 non raccomanda il pretrattamento di routine nell'NSTEMI).
- **tachicardia-ventricolare:** amiodarone nello schema AHA (150 mg in 10 min, poi 1 mg/min). ERC indica 300 mg in 10–20 min e poi 900 mg in 24 h: scegliere uno dei due.
- **asistolia-e-pea:** tra le cause dell'asistolia è citata la sola "ipokaliemia" (le 4H includono sia ipo- sia iperkaliemia).
- **crisi-convulsiva:** "PLS se possibile" durante la crisi tonico-clonica (va fatta dopo la fase tonico-clonica).

## Mappe NON ancora controllate (59)
- **Emergenze (19):** edema-polmonare-acuto, emergenze-diabetiche, gestione-delle-vie-aeree, ictus-riconoscimento-e-codice-ictus, il-paziente-critico-monitoraggio, insufficienza-respiratoria-acuta, intossicazioni-e-avvelenamenti, ipotermia-e-colpo-di-calore, maxi-emergenze-e-triage-start, ostruzione-delle-vie-aeree-da-corpo-estraneo, pbls-pediatrico, ritmi-defibrillabili-e-non-defibrillabili, shock-anafilattico, shock-ipovolemico-ed-emorragico, sindrome-coronarica-acuta-in-urgenza, trauma-cranico-e-gcs, trauma-maggiore-approccio, triage-codici-e-principi, valutazione-abcde
- **Specialistica (22):** tutte (assistenza-domiciliare-e-continuita … sterilizzazione-e-disinfezione)
- **Concorsi (18):** tutte (asl-aziende-ospedaliere-e-distretti … sicurezza-sul-lavoro-d-lgs-81-2008)

## Mappe da riscrivere
- **carrello-delle-emergenze:** gli elenchi di farmaci e formulazioni sono poco affidabili; conviene ripartire dal prontuario e dalla checklist aziendale.
- **le-12-derivazioni:** gli errori erano tanti; dopo le correzioni è usabile, ma lo stile è poco telegrafico.
- **monitoraggio-cardiaco-e-allarmi:** da rivedere tutta la parte sulle soglie.
