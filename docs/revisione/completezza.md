# Completezza — 3 mappe mancanti (lavoro interrotto su richiesta)

## Fatto
- Scritte a mano 3 mappe, tutte `status: 'bozza'`:
  - `teoria-dei-bisogni-di-virginia-henderson` (concept, 3 colonne): export OK, riempimento 68%.
    Fonti: Henderson, The Nature of Nursing (Macmillan 1966); Henderson, Basic Principles of Nursing Care (ICN 1960); Alligood, Nursing Theorists and Their Work.
  - `prelievo-venoso` (procedure, con ordine provette CLSI): **SFORA la pagina** (riempimento 76%), da accorciare.
    Fonti: CLSI GP41 7ª ed. (2017); OMS Best Practices in Phlebotomy (2010); ISO 6710:2017.
  - `glicemia-capillare` (procedure): export OK, riempimento 86%.
    Fonti: ADA Standards of Care 2025 (sez. 6 e 16); OMS Best Practices in Phlebotomy (2010); SID-AMD Standard italiani (ultima ed.).
- Verifiche: `tsc --noEmit` senza errori, `vitest` 36/36 passati. PNG non ancora guardati.
- Fonti e contenuti controllati con ricerche web (ordine provette, colori Sarstedt/ISO, lista dei 14 bisogni, tecnica del prelievo capillare).
- Illustrazioni: **nessuna generata** (costo 0 $). Dichiarate 3: `henderson-assistenza`, `prelievo-venoso-piega-gomito`, `glicemia-capillare-dito`.

## Manca
1. `prelievo-venoso`: accorciare il testo (passi o nota delle provette) finché l'export non sfora più.
2. Guardare i 3 PNG in `out/pagine/` (006, 121, 129).
3. `npm run illustrazioni -- --mappa <id>` per le 3 mappe e controllo delle immagini.
4. Seconda lettura clinica (healthcare-reviewer), non fatta.

## Dubbi clinici da far verificare all'infermiere
- Colori dei tappi: messi i colori ISO 6710 (citrato azzurro, siero rosso, eparina verde, EDTA lilla, fluoruro grigio) con nota "variano col produttore"; Sarstedt usa colori diversi per il siero (marrone, gel). Da confermare se tenerli.
- Laccio "7–10 cm sopra il sito, max 1 min" (CLSI); l'OMS indica 4–5 dita sopra.
- Glicemia: prima goccia "secondo protocollo" (l'OMS dice di scartarla, molti produttori no); alcol "solo se previsto".
- Soglie: < 70 e < 54 mg/dL (ADA), regola del 15, obiettivo ospedaliero 140–180 mg/dL.
- Henderson: gruppi 1–9 fisiologici, 10 e 14 psicologici, 11 spirituale, 12–13 sociali; il legame con il modello di Cantarelli e "definizione adottata dall'ICN (1960)" sono da confermare.
- Fonte SID-AMD citata come "ultima edizione": sulla rete ho confermato solo l'edizione 2018 e la linea guida SNLG 2021.
