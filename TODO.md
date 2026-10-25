# TODO — Mappe Visive di Infermieristica

## ✅ Completati

- [x] Setup progetto Vite + React + TypeScript
- [x] Configurazione font Barlow e Barlow Condensed
- [x] Stili base: tokens.css, page.css, studio.css
- [x] Componente EcgStrip (SVG vettoriale, 25 mm/s, 10 mm/mV)
- [x] Struttura studio: topbar, sidebar, canvas, inspector
- [x] Navigazione pagine e zoom
- [x] Sistema di stato mappe (bozza, illustrata, revisionata, pronta)
- [x] Outline completo con 250 mappe in 10 capitoli
- [x] Interfaccia studio funzionante (modalità studio/plan/grid)
- [x] Generatore illustrazioni AI (`scripts/illustrations.mjs`)

## 🚧 In corso / Prossimi passi

### 1. Generatore illustrazioni AI
- [x] Implementare `scripts/illustrations.mjs`
- [ ] Ottenere chiave API (fal.ai o OpenAI) — impostare in `.env`
- [ ] Scrivere prompt per ogni mappa (solo soggetto, nessun testo nell'immagine)
- [ ] Salvare in `src/assets/illustrations/<id>.webp`

### 2. Pagine iniziali del libro
- [x] Copertina (`CoverPage`)
- [ ] Frontespizio (`TitlePage`) — da completare con dettagli ISBN, editore, ecc.
- [ ] Avvertenze / disclaimer medico — da scrivere (non usare testi copiati)
- [ ] Indice completo (250 voci) — generabile automaticamente dall'outline

### 3. Scrittura mappe (250 totali)
- [ ] Scrivere mappa per ogni modello: overview, disease, procedure, lab, ecg
- [ ] Verificare fonti e valori clinici (non inventare soglie)
- [ ] Aggiungere `sources` verificabili a ogni mappa
- [ ] Status iniziale: `bozza` → revisionata da infermiere → `pronta`
- [ ] Creare file per ogni mappa in `src/content/maps/<id>.ts`

### 4. Conversione Kindle
- [ ] Generare PDF layout fisso da PNG (`npm run export`)
- [ ] Convertire in EPUB3 a layout fisso (Kindle Create)
- [ ] Test su dispositivi Kindle reali

## 📝 Note di lavoro

- **Formato pagina**: 768×1024 css px, layout fisso, niente scroll
- **Font minimi**: ~11px (non rimpicciolire oltre)
- **Testo**: telegrafico, elenchi brevi, `**grassetto**` solo parole chiave
- **Illustrazioni**: prompt in inglese, mai testo nell'immagine AI
- **ECG/tabelle/valori**: SVG/HTML, mai AI

## 🎯 Prossimo task immediato

1. **Chiave API** — impostare `FAL_KEY` o `OPENAI_API_KEY` in `.env`
2. **Pagine iniziali** — completare frontespizio e avvertenze (copertina già fatta)
3. **Scrittura prima mappa pilota** — seguire template overview, verificare fonti

---

*Ultima modifica: interfaccia studio funzionante, outline completo 250 mappe, generatore AI implementato*
