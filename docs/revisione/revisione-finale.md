# Revisione finale "pronto per pubblicare?" (interrotta su richiesta)

Data: 2026-10-25. Revisione in sola lettura: nessun file del progetto modificato, nessun commit.

## Esito dei controlli fatti

- **Typecheck** `npx tsc --noEmit -p .`: OK, nessun errore.
- **Test** `npx vitest run`: OK, 36 su 36 (3 file).
- **Export completo** `npm run export`: **264 pagine**, nessuna pagina sfora. **1 pagina poco piena**: `crisi-convulsiva` (53%).
  - `out/ebook.pdf` pesa **375 MB**. `out/pagine` pesa **158 MB** e contiene 266 file per 264 pagine: ci sono 2 PNG vecchi, lasciati dagli export singoli degli altri agenti.
  - Il log è in `out/_audit-export.log`.
- **Mappe**:
  - 248 file, tutti con `status: 'bozza'` (0 revisionate, 0 pronte).
  - Tutte hanno `sources`, e nessun elenco di fonti è vuoto.
  - Ne mancano 3 (Henderson, prelievo venoso, glicemia capillare), che gli altri agenti stanno scrivendo.
- **Illustrazioni**: 285 nel libro, 283 presenti, 2 da generare (`prelievo-venoso-piega-gomito`, `henderson-assistenza`). La cartella `src/assets/illustrations` pesa 257 MB.
- **Pagine guardate**: copertina interna, frontespizio, avvertenze, guida all'uso, indice 1/3, divisore del capitolo 3. Le mappe non le ho ancora guardate (vedi sotto).

## BLOCCANTE

1. **Autore segnaposto.** In `src/book/meta.ts` c'è ancora `author: 'Nome Autore'` (con un TODO), e il nome compare su copertina, frontespizio e ©. Azione: inserire il nome vero o lo pseudonimo, lo stesso che si usa nei metadati KDP. Valutare anche `contactEmail` per le segnalazioni di errori.
2. **Peso del file e royalty.** Il PDF pesa 375 MB e i PNG 158 MB. Con la royalty al 70% KDP trattiene un costo di consegna di €0,12/MB (Amazon.it) o $0,15/MB (Amazon.com), quindi a questo peso il 70% non conviene. Il limite di caricamento è 650 MB.
   - Azione: produrre pagine JPEG compresse (qualità circa 80–85, eventualmente 1236×1648 o 1264×1680) e misurare il KPF che ne esce. L'obiettivo indicativo è stare sotto 30–50 MB se si punta al 70%.
   - In alternativa si accetta il 35%. Con file da 10 MB in su, il prezzo minimo al 35% è €2,69 / $2,99.
3. **Dichiarazione AI su KDP.** Testi (script `scripts/genera-mappe.mjs` con Ollama) e illustrazioni (Nano Banana) sono generati con l'AI. Per KDP contano come "AI-generated" anche se modificati dopo. Azione: nella pubblicazione rispondere **Sì** per testo e immagini. Il frontespizio dice "realizzati con il supporto di strumenti di intelligenza artificiale": va bene, ma deve essere coerente con la dichiarazione.
4. **Revisione clinica non fatta.** Tutte le 248 mappe sono `bozza`. Per la regola del progetto non si pubblica finché un infermiere non le ha revisionate e l'utente non le ha segnate `revisionata`.
5. **Mappe e illustrazioni mancanti.** Servono le 3 mappe mancanti (copertina e indice promettono "250 mappe") e le 2 illustrazioni da generare. Poi va rifatto l'export completo.

## IMPORTANTE

1. **Nessun indice navigabile su Kindle.** L'indice è un'immagine e i numeri non sono link. La guida (`come-usare`, box "Sul Kindle") promette "Usa l'indice per saltare direttamente a una mappa", ma oggi non è vero. Azione: in Kindle Create (modalità Comics/illustrato) aggiungere le voci di sommario, almeno i 10 capitoli più indice e avvertenze. Altrimenti generare un EPUB3 a layout fisso con `nav.xhtml` e link dell'indice. In mancanza, togliere quella riga dalla guida (`src/front/FrontPages.tsx`).
2. **Numeri di pagina diversi dal Kindle.** I numeri stampati sono i numeri delle mappe (1–250); le pagine reali sono 264, con 4 di apertura, 3 di indice e 10 divisori. Azione: nella guida chiamarli "numero della mappa" (oggi dice "numero di pagina … corrisponde all'indice"), oppure accettare la differenza consapevolmente.
3. **Font sotto 11px** in `src/styles/page.css`:
   - piè di pagina e numero di pagina a 9,5px (riga 78);
   - disclaimer a 8,5px (riga 392);
   - `.swatch__sub` a 9,2px, `.labrow__unit` a 10px, `.mini-table` a 10px, quiz a 10,5px;
   - `ProcedurePage.tsx:77` a 10,5px.

   Su e-ink da 6" il numero di pagina e il disclaimer si leggono a fatica. Azione: portarli almeno a 11px, controllando che le pagine non sforino.
4. **Divisore del capitolo 3** (`059-capitolo-3.png`): il titolo lungo "PATOLOGIE E FISIOPATOLOGIA" si sovrappone all'icona del microscopio in alto a destra. Azione: controllare i titoli lunghi nei divisori (componente dei divisori in `src/front/FrontPages.tsx` o `front.css`) e spostare o ridurre l'icona.
5. **Cartella `out/pagine` sporca.** Contiene 266 PNG per 264 pagine. Se Kindle Create importa la cartella, entrano le pagine sbagliate. Azione: prima della conversione rifare l'export completo da solo, che svuota la cartella.
6. **Copertina KDP non verificata.** Il comando `npm run export -- copertina-kdp` esiste e produce 1600×2560 in JPEG. Requisiti KDP: JPEG/TIFF, ideale 2560×1600, sotto 50 MB, RGB. Azione: generarla dopo aver inserito l'autore e controllare la miniatura (vedi controlli non fatti).

## MIGLIORAMENTO

- **Avvertenze e guida all'uso**: il testo è centrato in verticale in riquadri molto alti, con grandi vuoti. Si può allineare in alto o ridurre l'altezza dei riquadri.
- **Avvertenze**: aggiungere "in emergenza seguire i protocolli locali o chiamare il 112" e una riga che dichiari l'assenza di legami con enti o aziende citati. Il modulo concorsi è già coperto.
- **Frontespizio**: ISBN non necessario (KDP assegna l'ASIN).
- **Mappa `crisi-convulsiva`**: è poco piena (53%), da riempire o riequilibrare.
- **`TODO.md`** è obsoleto: dice "una mappa pilota" e "ISBN completo", che non è vero. Va aggiornato o tolto.
- **Pulizia della radice**: `bash.exe.stackdump` e la cartella `backup/` sono nella radice del repo.

## Strada di conversione consigliata

**Kindle Create → Comics (illustrato) → importa la cartella di JPEG per pagina, oppure il PDF → KPF**. Il testo è già dentro le immagini, che è proprio quello che chiede la modalità Comics.

Cosa manca nel repo:
- un export JPEG compresso (oggi solo PNG);
- un PDF leggero (oggi 375 MB);
- l'elenco delle voci di sommario (capitolo → pagina reale) da inserire in Kindle Create;
- un test su Kindle Previewer.

L'EPUB3 a layout fisso (HTML vero, link e sommario automatici) sarebbe migliore, ma va scritto un esportatore apposta. Va bene per una seconda edizione.

Le dimensioni dei PNG (1536×2048, 3:4) vanno bene.

## Requisiti KDP verificati (fonti ufficiali)

- **Formati**:
  - KPF da Kindle Create, consigliato;
  - EPUB secondo le Kindle Publishing Guidelines;
  - PDF accettato per l'italiano;
  - **MOBI non più accettato per il layout fisso dal marzo 2025**.

  Limite: 650 MB e 8.000 pagine.
- **Copertina**: JPEG o TIFF, ideale 2560×1600 (minimo 1000×625), sotto 50 MB, RGB. Su fondo chiaro conviene un bordo grigio.
- **Dichiarazione AI**: obbligatoria per testo, immagini e traduzioni generate con l'AI, anche se poi modificate. Non serve per l'uso "assistito".
- **Prezzi**:

  | Royalty | Fascia di prezzo | Costo di consegna |
  |---|---|---|
  | 70% | €2,69–€12,99 / $2,99–$12,99 (dal 7 luglio 2026) | €0,12/MB, $0,15/MB |
  | 35% | minimo €2,69 / $2,99 se il file supera 10 MB | nessuno |

- **Metadati**:
  - titolo e sottotitolo identici a quelli in copertina;
  - autore;
  - descrizione;
  - fino a 7 parole chiave;
  - 3 categorie.

  Sono vietati i metadati fuorvianti.

Fonti:
- https://kdp.amazon.com/en_US/help/topic/G200634390 (formati)
- https://kdp.amazon.com/en_US/help/topic/G200645690 (copertina)
- https://kdp.amazon.com/help/topic/G200672390 (contenuti e AI)
- https://kdp.amazon.com/en_US/help/topic/G200634500 (royalty e costo di consegna)
- https://kdp.amazon.com/en_US/help/topic/G200634560 (prezzi di listino)
- https://kdp.amazon.com/en_US/help/topic/G201562880 (Kindle Create: Comics, importazione da PDF o JPEG)
- https://kdp.amazon.com/en_US/help/topic/G200735140 (limite di 650 MB)
- https://kdp.amazon.com/en_US/help/topic/G200652170 (parole chiave e categorie)

## Controlli NON ancora fatti (interrotti)

- Lettura visiva delle mappe: almeno 2 per capitolo e per tipo (overview, disease, procedure, lab, concept, table, rhythm, algorithm), alla ricerca di testo tagliato, sovrapposizioni, segnaposto, immagini con testo.
- Altri divisori, indice 2/3 e 3/3, coerenza dei numeri dell'indice con le pagine.
- Copertina KDP: export `copertina-kdp`, misure, leggibilità in miniatura.
- Controllo del PDF con la skill pdf (numero di pagine, font incorporati) e prova in Kindle Previewer.
- Contrasto e accessibilità con un controllo dedicato; resa in scala di grigi (simulazione e-ink).
- Ricerca su parole chiave e categorie Amazon e bozza della descrizione.
- Confronto con il prodotto concorrente a cui il libro si ispira (titolo, struttura, testi) per il rischio di somiglianza.
- Qualità delle fonti mappa per mappa (non solo la loro presenza).
