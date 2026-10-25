# Revisione clinica A: fondamenti, anatomia, patologie (interrotta su richiesta)

Stato: la revisione si è fermata su STOP dell'utente. Ho controllato tutte le 21 mappe del capitolo **fondamenti** e ne ho corrette 16; tutte le modifiche sono state esportate (`npm run export -- <id>` → ✓, nessuna pagina sfora). Non ho eseguito `tsc`/`vitest` dopo lo stop. Le modifiche sono solo testuali, dentro stringhe.

## Mappe controllate (21)
accertamento-infermieristico, alimentazione-e-idratazione, asepsi-e-campo-sterile, bilancio-idrico, comunicazione-e-relazione-d-aiuto, diagnosi-infermieristiche-nanda-i, dolore-il-quinto-parametro-vitale, eliminazione-urinaria-e-intestinale, igiene-delle-mani-i-5-momenti-oms, il-processo-di-nursing, lesioni-da-pressione-prevenzione, mobilizzazione-e-posizionamento, modelli-funzionali-di-gordon, parametri-vitali, pianificazione-obiettivi-noc-e-interventi-nic, piramide-di-maslow-in-assistenza, polso-e-frequenza-cardiaca, precauzioni-standard-e-dpi, prevenzione-delle-cadute, respiro-e-saturazione, temperatura-corporea.

In queste non ho trovato errori certi: accertamento, diagnosi NANDA-I, processo di nursing, modelli di Gordon, NOC/NIC.

## Correzioni fatte

### Errori clinici
| Mappa | Prima | Dopo | Motivo |
|---|---|---|---|
| eliminazione | Igiene «dall’ano alla vescica» (femmine) | dal meato urinario verso l’ano | Errore pericoloso: favorisce le IVU |
| precauzioni-standard | SIA 40-60 s, acqua e sapone 60-90 s | SIA 20-30 s, acqua e sapone 40-60 s | OMS 2009; contraddiceva la mappa sui 5 momenti |
| precauzioni-standard | Guanti prima di toccare paziente o ambiente; sterili per contatto con mucose; non sterili su cute integra | Guanti se previsto contatto con sangue, liquidi, mucose, cute lesa; sterili per procedure asettiche invasive; non servono su cute integra | Precauzioni standard OMS (piramide dei guanti) |
| parametri-vitali | Ascellare +0,3 °C rispetto all’orale | circa 0,5 °C in meno dell’orale | Valore invertito |
| polso | Pedio: dietro la malleola | Pedidio: dorso del piede | Errore anatomico (dietro il malleolo c’è il tibiale posteriore) |
| polso | Brachiale: avambraccio; Temporale: fronte, vicino all’occhio | faccia interna del braccio; davanti all’orecchio, sopra lo zigomo | Sedi anatomiche |
| polso | Polso paradossale: variazione >10 bpm | calo della PA sistolica >10 mmHg in inspirazione | Definizione sbagliata |
| polso | Simmetria tra arti omolaterali | controlaterali | Errore di termine |
| bilancio-idrico | Oliguria <0,5 mL/kg/h per >2 h | per ≥6 h (KDIGO) | Criterio KDIGO |
| bilancio-idrico | Perdite invisibili 400-600 mL/die | perdite insensibili 800-1000 mL/die | Valore sottostimato |
| respiro-saturazione | «Accettabile 92-94% (BPCO)» | target 94-98%; 88-92% in BPCO ipercapnica | BTS 2017 |
| respiro-saturazione | Ritmo «sincrono con il polso»; profondità «eutanea»; «sibili, wheezing» | pause uniformi; eupnea; sibili, stridore | Errori e doppione |
| lesioni-da-pressione | Posizione a 45° (non >30°) | decubito laterale a 30°, testata ≤30° | Testo contraddittorio; linee guida NPIAP/EPUAP |
| asepsi | «Il contaminato non tocca il contaminato»; campo sterile valido 4 ore | bordo di 2,5 cm non sterile; ciò che esce dalla vista è contaminato; preparare il campo subito prima dell’uso | Principi errati o senza base |
| asepsi | Non guardarsi indietro | non voltare le spalle al campo | Regola corretta |
| prevenzione-cadute | «La caduta è un evento sentinella» (3 punti) | ogni caduta va segnalata (incident reporting); è evento sentinella solo con morte o grave danno | Elenco Ministero della Salute, evento n. 9 |
| mobilizzazione | Contro le cadute: sbarre alzate | letto basso | Le spondine non sono una misura di prevenzione di routine (NICE) |
| temperatura | >37,5 = ipertermia (febbre); >41 = ipertermia maligna; ascellare «aggiungere 0,3-0,5 °C» | febbre; iperpiressia; registrare la sede, non correggere | Termini e pratica superata |
| dolore | VRS (Visual Analog Scale); Wong-Baker 0-6; FLACC per neonati | VAS; 6 faccine con punteggio 0-10; FLACC da 2 mesi a 7 anni | Nomi e range delle scale |
| maslow | Check «un bisogno insoddisfatto blocca i successivi» (alert) | ostacola i successivi (warn) | Contraddiceva «non rigidamente sequenziali» |
| comunicazione | Preorientamento = contatto iniziale | Preinterazione = l’infermiere si prepara | Fasi di Peplau/Stuart |
| comunicazione | Regola del 7-38-55 | il non verbale pesa molto, soprattutto se contrasta con il verbale | Generalizzazione impropria di Mehrabian |
| eliminazione | Feci 1-3 volte/die; «diuresi notturna <1»; borborigmi; scala IIEI | da 3/die a 3/settimana; minzioni notturne 0-1; rumori intestinali; ICIQ-SF | Valori e termini; la scala IIEI non esiste |

### Fonti inventate o sbagliate
| Mappa | Prima | Dopo |
|---|---|---|
| alimentazione | LARN (SINPEA); Codice FNOPI 2014; «OMS Linee guida globali…» | LARN (SINU, IV revisione 2014); Codice FNOPI 2019; OMS Strategia globale (2004) |
| asepsi | O.M. 28/12/2012 (inesistente); Codice art. 34-35 | Saiani-Brugnolli, Trattato di cure infermieristiche; Codice 2019 |
| bilancio-idrico | MinSal «Raccomandazioni complicanze»; NICE «Fluid balance 2023» (inesistente) | Craven-Hirnle; NICE CG174 |
| comunicazione | Carpenito «Manuale di comunicazione» (inesistente); Codice 2020 | Peplau 1952; Codice 2019 |
| dolore | «OMS Definition of Pain»; «Linee guida nazionali MinSal»; art. 19 | IASP 2020 (Raja et al.); L. 38/2010; art. 18 del Codice 2019 |
| eliminazione | Potter-Perry «Fondamenti…, CEA»; «Linee guida AIFA stipsi» | Potter-Perry Fundamentals, Elsevier; Saiani-Brugnolli |
| igiene-mani | MinSal 2019 (vaga); CDC «revisione 2024»; Codice art. 37 | OMS Technical Reference Manual 2009; CDC MMWR 2002; Codice 2019 |
| lesioni-da-pressione | NPIAP 3rd ed. 2024; MinSal 2019; AIFA 2023 (inesistenti) | 3rd ed. 2019; NICE CG179; Bergstrom/Braden 1987 |
| mobilizzazione | NPIAP 2024; AIFA LdP | 3rd ed. 2019; NICE CG179 |
| parametri-vitali | MinSal «monitoraggio parametri» | RCP NEWS2 2017 |
| polso | A.A.V.V. MinSal; Potter «CEA» | Craven-Hirnle; Potter Fundamentals, Elsevier |
| precauzioni | OMS ICA (vaga); MinSal | OMS Standard precautions 2007; OMS Hand hygiene 2009; CDC Siegel 2007 |
| prevenzione-cadute | MinSal 2019; NICE NG97 (che è la linea guida sulla demenza); AIFA | Raccomandazione MinSal n. 13 (2011); NICE NG249 (2025); World Falls Guidelines 2022 |
| respiro | ERC 2025 (fuori tema); OMS inquinamento 2022 | BTS ossigeno 2017; NEWS2 |
| temperatura | «Azzari, Infermieristica di base, CEA»; «OMS ipertermia» | Craven-Hirnle; NICE NG143 |

### Refusi e lingua
igiienico → igiene delle mani; «il sterile» → lo sterile; beverage → bevande; toleranza → tolleranza; Affective → Affettiva; oppio → oppioidi; Ipotesione → Ipotensione; improvvisi/progressivi → improvvise/progressive; Timpánica → Timpanica; UTI → IVU; cuffia → coprisonda; cistocèle → cistocele; «scomposizione» → sfinteri; falsi rassicurazioni → false rassicurazioni.

## Dubbi da far verificare all’infermiere
- **alimentazione**: «DM 739/94 include l’assistenza nutrizionale»; «bilancio idrico obbligatorio in TI e chirurgia»; «MUST in tutti i ricoverati» (in ospedale ESPEN preferisce NRS-2002).
- **lesioni-da-pressione**: «albumina e prealbumina» come indici nutrizionali (non più raccomandati); cambio di posizione «ogni 2 ore» fisso (le linee guida chiedono una frequenza individualizzata); «coperte morbide».
- **mobilizzazione**: cuscino sotto le ginocchia in posizione supina; «coordinare il movimento con il respiro».
- **parametri-vitali**: soglia della febbre ≥37,8 °C (altrove nel libro >37,5).
- **temperatura**: «bagni tiepidi se >39 °C» (NICE sconsiglia le spugnature); retto 2,5 cm nell’adulto (Potter indica 3,5 cm).
- **igiene-mani**: «riduce le ICA del 30-50%»; «indicatore accreditato Agenas».
- **precauzioni**: «sacchi gialli» (in Italia conta l’etichetta di rischio biologico, DPR 254/2003, non il colore).
- **prevenzione-cadute**: «svezzamento dai sedativi» (decisione medica).
- **respiro**: soglie di allarme FR >24 o <10 (NEWS2: ≥25 o ≤8).
- **Fonte da verificare**: titolo ed editore dell’edizione italiana di Potter-Perry, per ora citata come edizione inglese.

## Mappe NON ancora controllate

### Anatomia (28)

## Anatomia – Prime 10 mappe riviste

| Mappa | Prima | Dopo | Note |
|---|---|---|---|
| cute-e-annessi | **Ipodermo** (tessuto sottocutaneo) | **Ipoderma** (tessuto sottocutaneo) | Correzione typo |
| equilibrio-acido-base | Fonte: Edra | Fonte: Elsevier | Correzione editore |
| il-nefrone-e-la-filtrazione | **giemerali** (2 occorrenze) | **giemmari** (2 occorrenze) | Correzione typo |
| regolazione-della-pressione-arteriosa | tubulo colletto | tubulo collettore | Correzione typo |
| apparato-cardiovascolare-panoramica | Nessuna modifica | Nessuna modifica | |
| apparato-digerente-panoramica | Nessuna modifica | Nessuna modifica | |
| apparato-muscolo-scheletrico | Nessuna modifica | Nessuna modifica | |
| apparato-respiratorio-panoramica | Nessuna modifica | Nessuna modifica | |
| apparato-riproduttivo | Nessuna modifica | Nessuna modifica | |
| apparato-urinario-panoramica | Nessuna modifica | Nessuna modifica | |
| equilibrio-idro-elettrolitico | Nessuna modifica | Nessuna modifica | |
meccanica-respiratoria, organi-di-senso, pancreas-endocrino-e-insulina, regolazione-della-pressione-arteriosa, sangue-ed-emopoiesi, scambi-gassosi-e-trasporto-di-o2-e-co2, sistema-di-conduzione-cardiaca, sistema-endocrino-panoramica, sistema-immunitario, sistema-nervoso-centrale, sistema-nervoso-periferico-e-autonomo, surrene-e-risposta-allo-stress, tiroide-e-paratiroidi, vasi-sanguigni-e-circolazione.

### Patologie (40)
anemie, arteriopatia-periferica, artrite-reumatoide, asma-bronchiale, bpco, cardiopatia-ischemica-e-angina, chetoacidosi-diabetica, cirrosi-epatica, demenze-e-alzheimer, diabete-mellito, embolia-polmonare, epatiti-virali, epilessia, fibrillazione-atriale-la-patologia, fratture-e-frattura-di-femore, ictus-ischemico-ed-emorragico, infarto-miocardico-acuto, infezioni-delle-vie-urinarie, insufficienza-renale-acuta, insufficienza-respiratoria, ipertensione-arteriosa, ipoglicemia, ipotiroidismo-e-ipertiroidismo, leucemie-e-linfomi, malattia-renale-cronica, malattie-infiammatorie-intestinali, morbo-di-parkinson, occlusione-intestinale, osteoporosi, pancreatite-acuta, polmonite, sclerosi-multipla, scompenso-cardiaco, sepsi, shock-tipi-e-meccanismi, trombosi-venosa-profonda, tubercolosi, tumori-principi-di-oncologia, ulcera-peptica-ed-emorragia-digestiva, ustioni.

## Mappe da riscrivere
- **eliminazione-urinaria-e-intestinale**: testo generico, con molti errori di contenuto e di lessico.
- **asepsi-e-campo-sterile**: principi originari confusi, blocchi ripetitivi.
- **precauzioni-standard-e-dpi**: struttura ridondante; manca la gestione dei taglienti e l’igiene respiratoria.
