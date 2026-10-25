# Mappe Visive di Infermieristica — ebook Kindle (layout fisso)

Ebook in italiano di 250 mappe visive (una pagina = un concetto) per studenti di infermieristica,
tirocinanti e candidati ai concorsi. Venduto su Amazon KDP come ebook Kindle a layout fisso.

## Comandi
- `npm run dev` — studio di anteprima (http://localhost:5173), aggiornamento live durante la scrittura
- `npm test` — controlli sull'indice e sulle mappe (250 voci, id univoci, fonti presenti…)
- `npm run typecheck`
- `npm run export` — PNG 1536×2048 in `out/pagine/` + `out/ebook.pdf`; esce con errore se una pagina sfora
- `npm run export -- <id>` — esporta una sola pagina

## Struttura
- `src/book/outline.ts` — indice completo (ordine = ordine nel libro). id mappa = `slugify(titolo)`
- `src/content/maps/<id>.ts` — una mappa per file, tipizzata da `src/book/types.ts`
- `src/templates/*Page.tsx` — un modello per tipo: overview, disease, procedure, lab, ecg
- `src/assets/illustrations/<illustration-id>.webp` — illustrazioni AI; finché manca il file si vede un segnaposto
- `src/studio/*` — interfaccia di lavoro (pagina, griglia, piano, simulazione E-ink)

## Regole per scrivere una mappa
Guida completa (modelli, densità, verifica): `docs/SCRITTURA-MAPPE.md`.
- Pagina fissa 768×1024 css px: **niente scroll**. Dopo ogni mappa esegui `npm run export -- <id>` e guarda il PNG.
  Se sfora: accorcia il testo, non rimpicciolire i font sotto ~11px.
- Testo telegrafico: elenchi brevi, `**grassetto**` solo sulle parole chiave. Italiano infermieristico standard.
- Ogni mappa deve avere `sources` con linee guida/testi verificabili. Valori e soglie: verificali, non inventarli.
- Nuova mappa: `status: 'bozza'`. `revisionata` solo dopo la revisione di un infermiere (la decide l'utente).
- Illustrazioni: `prompt` in inglese, descrive **solo il soggetto**, **nessun testo** nell'immagine
  (le scritte stanno sempre nell'HTML). `id` univoco in tutto il libro, prefisso della mappa.
- Tracciati ECG, tabelle e valori si disegnano in SVG/HTML, mai con l'AI.
- Non copiare testi o immagini da prodotti concorrenti.

## Stato e prossimi passi
- Pilota: 5 mappe scritte (una per modello). Illustrazioni: in attesa della chiave API (fal.ai o OpenAI).
- Da fare: generatore illustrazioni (`scripts/illustrations.mjs`, chiave in `.env`), pagine iniziali
  (copertina, frontespizio, avvertenze, indice), conversione per Kindle (Kindle Create da PDF o EPUB3 a layout fisso).
