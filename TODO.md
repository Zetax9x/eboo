# TODO — Mappe Visive di Infermieristica

## ✅ Completati

- [x] Setup progetto Vite + React + TypeScript
- [x] Configurazione font Barlow e Barlow Condensed
- [x] Stili base: tokens.css, page.css, studio.css
- [x] Componente EcgStrip (SVG vettoriale, 25 mm/s, 10 mm/mV)
- [x] Struttura studio: topbar, sidebar, canvas, inspector
- [x] Navigazione pagine e zoom
- [x] Sistema di stato mappe (bozza, illustrata, revisionata, pronta)
- [x] Script export PNG + PDF

## 🚧 In corso / Prossimi passi

### 1. Generatore illustrazioni AI
- [ ] Implementare `scripts/illustrations.mjs`
- [ ] Ottenere chiave API (fal.ai o OpenAI)
- [ ] Scrivere prompt per ogni mappa (solo soggetto, nessun testo nell'immagine)
- [ ] Salvare in `src/assets/illustrations/<id>.webp`

### 2. Pagine iniziali del libro
- [x] Copertina
- [ ] Frontespizio
- [ ] Avvertenze / disclaimer medico
- [ ] Indice completo (250 voci)

### 3. Scrittura mappe (250 totali)
- [ ] Scrivere mappa per ogni modello: overview, disease, procedure, lab, ecg
- [ ] Verificare fonti e valori clinici (non inventare soglie)
- [ ] Aggiungere `sources` verificabili a ogni mappa
- [ ] Status iniziale: `bozza` → revisionata da infermiere → `pronta`

### 4. Conversione Kindle
- [ ] Generare PDF layout fisso da PNG
- [ ] Convertire in EPUB3 a layout fisso (Kindle Create)
- [ ] Test su dispositivi Kindle reali

## 📝 Note di lavoro

- **Formato pagina**: 768×1024 css px, layout fisso, niente scroll
- **Font minimi**: ~11px (non rimpicciolire oltre)
- **Testo**: telegrafico, elenchi brevi, `**grassetto**` solo parole chiave
- **Illustrazioni**: prompt in inglese, mai testo nell'immagine AI
- **ECG/tabelle/valori**: SVG/HTML, mai AI

## 🎯 Prossimo task immediato

1. **Generatore illustrazioni** — creare `scripts/illustrations.mjs` e configurare `.env` con chiave API
2. **Pagine iniziali** — completare copertina, frontespizio, avvertenze
3. **Scrittura prima mappa pilota** — seguire template overview, verificare fonti

---

*Ultima modifica: in corso di scrittura*
