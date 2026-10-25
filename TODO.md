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
- [x] Copertina (`CoverPage`)
- [x] Frontespizio (`TitlePage`) — ISBN, editore, copyright completi
- [x] Avvertenze / disclaimer medico (`WarningsPage`) — scritto in autonomia

## 🚧 In corso / Prossimi passi

### 1. Generatore illustrazioni AI
- [x] Implementare `scripts/illustrations.mjs`
- [ ] Ottenere chiave API (fal.ai o OpenAI) — impostare in `.env`
- [ ] Scrivere prompt per ogni mappa (solo soggetto, nessun testo nell'immagine)
- [ ] Salvare in `src/assets/illustrations/<id>.webp`

### 2. Pagine iniziali del libro
- [x] Copertina (`CoverPage`)
- [x] Frontespizio (`TitlePage`) — completato con ISBN, editore, ecc.
- [x] Avvertenze / disclaimer medico (`WarningsPage`) — scritto in autonomia
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
2. **Template per mappe** — creare struttura base per ogni tipo di mappa
3. **Scrittura prima mappa pilota** — seguire template overview, verificare fonti

---

*Ultima modifica: pagine iniziali complete (copertina, frontespizio, avvertenze), interfaccia studio funzionante, outline completo 250 mappe, generatore AI implementato*
