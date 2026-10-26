# Kit per ebook generati con l’IA — specifica del progetto base

Questo documento descrive come costruire un **progetto base riutilizzabile** per creare ebook (e, volendo, libri
cartacei) di **qualsiasi argomento e formato**, con contenuti scritti da modelli di IA, verificati in automatico e
pubblicati su Amazon KDP.

È ricavato da un progetto reale e già pubblicato (“Mappe Visive di Infermieristica”, 250 pagine-infografica,
repository di riferimento: `github.com/Zetax9x/eboo`). Chi costruisce il kit può guardare quel codice come esempio
concreto, ma il kit deve essere **generico**: niente infermieristica, niente “mappe” cablate nel codice.

> **Per l’IA che legge:** l’obiettivo finale è nella sezione 12. Leggi tutto prima di scrivere codice.

---

## 1. Obiettivo

Un “motore” per libri in cui:
- il **contenuto** è separato dalla **grafica**: ogni pagina (o capitolo) è un **file di dati tipizzato**, mai HTML scritto a mano;
- i **modelli di pagina** (template) trasformano i dati in pagine impaginate;
- uno **studio web locale** mostra il libro in tempo reale mentre lo si scrive;
- script automatici **scrivono, revisionano e verificano** i contenuti con modelli locali o via API;
- un comando produce i **file pronti per KDP** (EPUB, PDF, copertina) con controlli di qualità.

Per un nuovo libro si cambiano **solo**: configurazione, indice, modelli di pagina specifici (se servono), contenuti.

---

## 2. Tipi di libro da supportare (configurabili)

| Tipo | Layout | Esempi | Note |
|---|---|---|---|
| **Visivo a pagina fissa** | layout fisso, 1 pagina = 1 schermata | mappe, infografiche, ricette illustrate, schede, fumetti didattici | come il progetto di riferimento: 768×1024 css px (3:4), export 2× |
| **Testo scorrevole** | reflowable (EPUB normale) | saggi, manuali, narrativa, guide | il testo si adatta allo schermo; niente controllo di “sforamento” |
| **Cartaceo** (opzionale) | PDF di stampa | stessi contenuti in brossura | margini, abbondanza (bleed), pagine pari/dispari, copertina con dorso |

Il tipo si sceglie in un file di configurazione; il resto del motore resta uguale.

---

## 3. Stack tecnico

- **Node.js + TypeScript + Vite + React** per studio e template.
- **Playwright (Chromium)** per esportare pagine in PNG/JPEG/PDF e per i controlli visivi.
- **Vitest** per i test.
- **Nessun backend**: tutto gira in locale; i contenuti sono file nel repository (versionati con git).
- Modelli di IA via **API compatibile OpenAI** (vLLM, OpenRouter, OpenAI) **oppure Ollama**, con un unico client.

---

## 4. Struttura delle cartelle (proposta)

```
book.config.ts              # titolo, autore, lingua, formato, dimensioni pagina, colori, font
src/
  book/
    types.ts                # schema dei dati delle pagine (unione di tipi, uno per template)
    outline.ts              # indice: capitoli e voci; id = slug del titolo
    registry.ts             # unisce indice + file di contenuto, numera le pagine (con test)
    sequence.ts             # ordine di lettura: copertina, frontespizio, avvertenze, indice, divisori, pagine
    meta.ts                 # autore, edizione, anno, contatti
  content/                  # UN file per pagina/capitolo: src/content/<id>.ts  (solo dati, export default)
  templates/                # un componente React per ogni "kind" di pagina + PageFrame comune
  components/               # mattoni grafici riutilizzabili (box, elenchi, icone, illustrazione, grafici SVG)
  front/                    # pagine iniziali generate: copertina, frontespizio, avvertenze, guida, indice, divisori
  studio/                   # interfaccia di lavoro (pagina, griglia, piano/avanzamento, libro intero)
  styles/                   # tokens.css (colori, font, dimensioni), page.css, studio.css
  assets/                   # illustrazioni generate (assets/illustrations/<id>.webp) e sfondo copertina
scripts/
  export.mjs                # PNG/PDF pagina per pagina + controlli (sforamento, riempimento)
  kindle.mjs                # pacchetto KDP: EPUB (fisso o scorrevole), PDF leggero, stima peso/costi
  genera.mjs                # scrive i contenuti mancanti con un LLM, una pagina per chiamata, con verifica
  revisiona.mjs             # revisione di accuratezza, una pagina per chiamata, rapporti tracciati
  verifica.mjs              # secondo parere (altro modello) solo sulle modifiche della revisione
  illustrazioni.mjs         # genera le immagini dichiarate nei contenuti (fal.ai / OpenAI)
  lib/llm.mjs               # client unico per OpenAI-compatibili e Ollama
  lib/zip.mjs               # scrittore ZIP minimale per l'EPUB
docs/
  GUIDA-CONTENUTI.md        # regole di scrittura per umani e LLM (schema, stile, accuratezza, verifica)
  DA-SCRIVERE.md            # elenco generato delle voci mancanti
  revisione/                # rapporti automatici delle revisioni e verifiche
CLAUDE.md / AGENTS.md       # istruzioni per gli agenti di sviluppo
```

---

## 5. Modello dei dati (il cuore del kit)

- Ogni pagina è un oggetto con campi comuni: `kind`, `id`, `chapter`, `title`, `subtitle?`, `status`, `sources`.
- `kind` sceglie il template; ogni template ha la **sua interfaccia TypeScript** (es. `ConceptPage`, `TablePage`,
  `RecipePage`, `ChapterText`…). L’unione dei tipi rende **impossibile** salvare una pagina con campi sbagliati.
- `status`: `pianificata → bozza → illustrata → revisionata → pronta` (lo studio mostra l’avanzamento).
- `sources`: fonti reali e verificabili (obbligatorie nei libri tecnici/sanitari/legali; facoltative nella narrativa).
- Illustrazioni dichiarate **nei dati**: `{ id, alt, prompt, icon? }`; l’immagine si genera a parte e, finché manca,
  lo studio mostra un segnaposto.
- Testo ricco minimale con `**grassetto**` (niente HTML nei dati).
- L’**indice** (`outline.ts`) è la fonte dell’ordine e dei numeri di pagina; un test verifica che ogni file di
  contenuto corrisponda a una voce e al capitolo giusto.

**Template di partenza consigliati (generici):** concetto (riquadri), tabella, passaggi/procedura, elenco a schede,
algoritmo/diagramma di flusso, quiz, citazione/riassunto, capitolo di testo (per i libri scorrevoli).
Template specifici del dominio (es. tracciati ECG, ricette, esercizi) si aggiungono come **plugin**: un tipo + un componente.

---

## 6. Studio di anteprima (web locale)

- `npm run dev`: vista **Pagina** (alla misura reale, zoom, frecce ← →), **Griglia** (miniature del capitolo),
  **Piano** (avanzamento per capitolo e per stato), **Libro** (tutto in ordine di lettura, pagine iniziali comprese).
- Scheda laterale: stato, file sorgente, fonti, illustrazioni da generare con i loro prompt.
- **Banner rosso** se il contenuto sfora la pagina (layout fisso).
- Interruttore **E-ink**: scala di grigi per vedere la resa sugli e-reader in bianco e nero.
- Aggiornamento in tempo reale: modificando un file di contenuto, la pagina si aggiorna da sola.
- Rotte stampabili (`#/stampa/<id>`, `#/stampa/libro`) usate dagli script di export.

---

## 7. Controlli di qualità (sempre automatici)

1. **TypeScript** (`tsc --noEmit`): schema rispettato.
2. **Test** (Vitest): indice completo e senza duplicati, ogni contenuto nell’indice, fonti presenti, id delle
   illustrazioni univoci, sequenza del libro corretta.
3. **Sforamento** (layout fisso): il contenuto non deve uscire dalla pagina → l’export esce con errore.
4. **Riempimento** (layout fisso): percentuale di spazio usato nei riquadri; sotto ~60% la pagina “sembra vuota”.
5. **Leggibilità**: corpo minimo ~11 px a 1×; piè di pagina ad altezza fissa (cambiarlo cambia lo spazio di tutte le pagine).
6. **Robustezza**: un’icona o un dato sbagliato non deve far crollare l’intero libro (ripieghi nei componenti).

---

## 8. Pipeline dei contenuti con l’IA (lezioni apprese)

**Scrittura (`genera.mjs`)** — una pagina per chiamata, mai un agente libero sull’intero repository:
1. al modello: guida di scrittura + schema + **un esempio dello stesso tipo** + elenco delle pagine vicine (no doppioni);
2. risposta = solo il file della pagina; lo script lo salva;
3. verifica automatica: TypeScript, export, sforamento, riempimento → se fallisce, l’errore torna al modello (max 4 tentativi);
4. se ancora fallisce, il file viene **scartato** (salvato a parte), così il libro non si rompe mai;
5. esecuzione in parallelo, ripresa automatica, ragionamento del modello disattivabile (molto più veloce).

**Revisione (`revisiona.mjs`)** — un modello **diverso** da quello che ha scritto:
- corregge solo errori **certi**, con modifiche minime; i dubbi li elenca; non tocca id/struttura;
- ogni correzione deve ripassare i controlli, altrimenti viene annullata;
- rapporto per capitolo (prima → dopo, motivo, dubbi) + file di stato per riprendere.

**Verifica (`verifica.mjs`)** — terzo modello, **solo giudizio** sulle modifiche (diff git): CORRETTA / SBAGLIATA / DUBBIA.
Non modifica nulla: produce l’elenco delle correzioni da controllare a mano.

**Lezioni dal progetto reale (da rispettare):**
- Un modello scrive e uno corregge: **circa l’80% delle pagine aveva errori** e la revisione ha introdotto errori nuovi
  (sigle sbagliate, leggi attribuite al ministro sbagliato, fonti inventate). La verifica incrociata li ha trovati.
- I modelli **inventano fonti**: le fonti vanno sempre controllate.
- Per contenuti con norme di un Paese (leggi, enti) i modelli generalisti/medici sbagliano spesso: serve un controllo umano o di un modello forte.
- Nei libri tecnici/sanitari/legali la **revisione di un esperto umano** resta obbligatoria prima della pubblicazione.
- Gli agenti di sviluppo devono avere un perimetro chiaro (es. “crea file solo in `src/content/`”): un agente
  libero ha riscritto l’architettura e rotto il progetto; si è recuperato solo grazie a git.
- Server locale: **vLLM** è molto più veloce di Ollama con molte richieste in parallelo; attenzione ai processi
  rimasti appesi che occupano la GPU e alle porte già in uso; i modelli “gated” richiedono login Hugging Face.

---

## 9. Illustrazioni

- Prompt **in inglese**, solo il **soggetto**; lo **stile comune** viene aggiunto dallo script (coerenza visiva).
- **Mai testo nelle immagini**: le scritte stanno sempre nell’HTML (le IA sbagliano lettere e accenti).
- Grafici, tracciati, tabelle e valori si **disegnano in SVG/HTML**, non con l’IA.
- Concetti astratti → icone, non illustrazioni (le IA producono forme senza senso o testo finto).
- Fornitori: fal.ai (es. Nano Banana) o OpenAI (gpt-image); chiave nel file `.env` (mai nel codice, `.env` in `.gitignore`).
- Copertina: far generare all’IA **solo l’illustrazione** (con spazio libero in alto e in basso) e comporre titolo,
  autore e badge in HTML → testo sempre nitido e corretto. Evitare emblemi protetti (es. croce rossa) e loghi.

---

## 10. Export e pubblicazione su KDP

**Formati:**
- **EPUB3 a layout fisso** (libri visivi): una pagina = un’immagine JPEG + XHTML con viewport fisso;
  `rendition:layout pre-paginated`; sommario `nav` (capitoli → pagine) e `guide` EPUB2 con punto di inizio lettura;
  **link cliccabili** sopra le voci dell’indice (coordinate misurate dal DOM e trasformate in percentuali).
- **EPUB3 scorrevole** (libri di testo): XHTML semantico + CSS, sommario `nav`, immagini ottimizzate.
- **PDF leggero** (da JPEG) come alternativa per Kindle Create; **PDF di stampa** per il cartaceo.
- **Copertina KDP**: JPEG 1600×2560 (rapporto 1:1,6).

**Peso e royalty:** un ebook fatto di immagini pesa decine di MB. Con la royalty 70% Amazon applica un **costo di
consegna per MB** (in Italia circa 0,12 €/MB, da verificare), quindi per libri pesanti conviene il **35%**.
Lo script stampa il peso e la stima del costo; qualità JPEG e risoluzione sono parametri.
(Nel progetto di riferimento: 1152×1536, qualità 70 → ~55 MB per 267 pagine, testo ancora nitido.)

**Checklist KDP da includere nel kit (`docs/scheda-kdp.md` generata per ogni libro):** titolo e sottotitolo senza
parole chiave forzate, descrizione HTML, 7 parole chiave, 3 categorie, dichiarazione dei contenuti IA (testo e immagini),
prezzo e royalty, KDP Select (esclusiva digitale 90 giorni, Kindle Unlimited, 5 giorni gratuiti), DRM, anteprima
(Kindle Previewer), contenuti A+, regole sulle recensioni (solo oneste, nessun incentivo).

---

## 11. Comandi del kit

| Comando | Cosa fa |
|---|---|
| `npm run nuovo-libro -- <nome>` | crea un nuovo libro da un modello (config, indice vuoto, guida) |
| `npm run dev` | studio di anteprima |
| `npm test` / `npm run typecheck` | controlli |
| `npm run genera -- [--capitolo X] [--paralleli N]` | scrive le pagine mancanti con un LLM |
| `npm run revisiona` / `npm run verifica` | revisione e secondo parere |
| `npm run illustrazioni -- [--prova]` | genera le immagini dichiarate (con stima prima di spendere) |
| `npm run export [-- <id>]` | PNG/PDF + controlli; con id, una sola pagina |
| `npm run kindle` | pacchetto KDP (EPUB, PDF leggero, stima peso/costo) |
| `npm run copertina` | copertina KDP 1600×2560 |

Variabili d’ambiente: `LLM_BASE_URL`, `LLM_MODEL`, `LLM_API_KEY` (oppure `OLLAMA_HOST`, `OLLAMA_MODEL`),
`FAL_KEY` / `OPENAI_API_KEY`, `IMAGE_MODEL`.

---

## 12. Cosa deve produrre l’IA che riceve questo documento

Costruisci il **progetto base** descritto sopra, con queste priorità:

1. **Generico e configurabile**: `book.config.ts` (titolo, lingua, formato fisso/scorrevole, dimensioni, palette,
   font) e un comando `nuovo-libro` che crea la struttura di un libro vuoto.
2. **Template generici** della sezione 5 + meccanismo plugin per aggiungerne di nuovi (tipo + componente + esempio).
3. **Studio** della sezione 6, **controlli** della sezione 7, **export/KDP** della sezione 10.
4. **Script IA** della sezione 8 con client unico (OpenAI-compatibile + Ollama), una pagina per chiamata,
   verifica automatica, ripresa, parallelismo, rapporti.
5. **Documentazione**: `docs/GUIDA-CONTENUTI.md` modello (da adattare a ogni libro), `CLAUDE.md`/`AGENTS.md`
   con le regole per gli agenti, `README.md` con il flusso completo dal primo `npm install` alla pubblicazione.
6. **Un libro di esempio minimo** (es. 6 pagine di un argomento neutro, uno per template) per dimostrare che tutto funziona:
   `npm test` verde, `npm run export` senza errori, `npm run kindle` produce un EPUB valido.

**Vincoli:** nessun segreto nel codice; niente dipendenze superflue; file piccoli e coesi; ogni script con
modalità di prova che non spende crediti e non cancella dati reali; tutto in italiano nei testi rivolti all’utente.

---

## 13. Prompt pronto

> Leggi `KIT-EBOOK.md` per intero. Costruisci il progetto base descritto, partendo dalla sezione 12.
> Puoi prendere ispirazione dal repository di riferimento indicato in alto, ma il risultato deve essere generico
> e configurabile per qualsiasi argomento e formato (layout fisso o testo scorrevole).
> Lavora per passi: struttura e configurazione → modello dei dati e template generici → studio → controlli e test →
> export e pacchetto KDP → script IA → documentazione → libro di esempio.
> Alla fine `npm test`, `npm run export` e `npm run kindle` devono funzionare sul libro di esempio.
> Mostrami il piano prima di iniziare e fermati dopo ogni passo importante per farmelo verificare.
