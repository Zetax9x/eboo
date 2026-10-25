# Guida alla scrittura delle mappe

Questa guida è per chi (persona o LLM) scrive le mappe mancanti elencate in `docs/MAPPE-DA-SCRIVERE.md`.
Leggila tutta prima di iniziare. Contiene tutto ciò che serve: struttura dei file, schema di ogni tipo
di pagina, regole di linguaggio e di contenuto, densità, verifica.

---

## 1. Il progetto in breve

- **Prodotto**: ebook Kindle a layout fisso *“Mappe Visive di Infermieristica”*, 250 mappe in 10 capitoli.
- **Lettori**: studenti di infermieristica, tirocinanti, candidati ai **concorsi pubblici italiani**, infermieri che ripassano.
- **Una pagina = un concetto.** Ogni pagina è un’infografica a riquadri colorati, leggibile in pochi minuti.
- **Formato pagina**: 768 × 1024 px (3:4), esportata a 1536 × 2048. **Niente scroll**: tutto deve stare in una pagina.
- **Tu scrivi solo dati**, non grafica: ogni mappa è un file TypeScript con un oggetto; i template React la impaginano.

---

## 2. Regole sui file (vincolanti)

1. Crea **un file per mappa**: `src/content/maps/<id>.ts`. L’`id` è quello indicato in `docs/MAPPE-DA-SCRIVERE.md`: **non cambiarlo**.
2. **Non modificare nessun altro file**: template, tipi, CSS, `App.tsx`, `PageFrame.tsx`, `outline.ts`, script, mappe di altri.
   Se un template non permette qualcosa, adatta il contenuto: non cambiare il codice.
3. Il campo `chapter` deve essere il capitolo indicato nella lista (`## fondamenti` → `chapter: 'fondamenti'`).
4. Struttura obbligatoria del file:

```ts
import type { DiseaseMap } from '../../book/types'   // il tipo giusto per il kind scelto

const map: DiseaseMap = {
  kind: 'disease',
  id: 'bpco',
  chapter: 'patologie',
  title: 'BPCO',
  subtitle: 'Broncopneumopatia cronica ostruttiva: diagnosi, stadi, terapia e assistenza',
  icon: 'Wind',
  status: 'bozza',
  sources: ['GOLD — Global Strategy for COPD (ultima edizione)', '…'],
  // …campi specifici del kind (vedi sezione 4)
}

export default map
```

- `status` è **sempre** `'bozza'` (la revisione la fa un infermiere).
- `icon` e tutte le altre icone: **solo** nomi della sezione 6.
- Negli `string` usa l’apostrofo tipografico **’** (es. `dell’insulina`) per evitare problemi di virgolette.

---

## 3. Quale tipo di pagina (`kind`) scegliere

| Argomento | `kind` | Tipo TS |
|---|---|---|
| Apparati e sistemi, anatomia | `overview` (4 o 6 blocchi) o `concept` | `OverviewMap` / `ConceptMap` |
| Malattie | `disease` | `DiseaseMap` |
| Procedure pratiche | `procedure` | `ProcedureMap` |
| Esami con alterazioni “ipo/iper” | `lab` | `LabMap` |
| Classi di farmaci, scale, confronti, valori di riferimento | `table` | `TableMap` |
| Teoria, modelli, leggi, organizzazione | `concept` | `ConceptMap` |
| Algoritmi d’emergenza, percorsi decisionali | `algorithm` | `AlgorithmMap` |
| Aritmie ECG | `rhythm` | `RhythmMap` |
| Quiz | `quiz` | `QuizMap` |

Varia i tipi in modo sensato. Esempi già scritti da copiare come struttura e densità:

| kind | file di esempio |
|---|---|
| overview | `src/content/maps/apparato-cardiovascolare-panoramica.ts` |
| disease | `src/content/maps/diabete-mellito.ts` |
| procedure | `src/content/maps/catetere-venoso-periferico-cvp.ts` |
| lab | `src/content/maps/elettroliti-valori-e-alterazioni.ts` |
| concept | `src/content/maps/il-processo-di-nursing.ts` |
| table | `src/content/maps/pediatria-parametri-vitali-per-eta.ts` |
| algorithm | `src/content/maps/bls-d-adulto.ts` |
| rhythm | `src/content/maps/fibrillazione-atriale-il-tracciato.ts` |
| quiz | `src/content/maps/quiz-10-domande-di-allenamento.ts` |

Lo schema completo e autoritativo è in `src/book/types.ts`.

---

## 4. Schema di ogni tipo

Campi comuni a tutti: `kind, id, chapter, title, subtitle?, icon, status, sources`.

Tipi di supporto usati sotto:

```ts
type Accent = 'red' | 'blue' | 'green' | 'purple' | 'orange' | 'teal' | 'pink' | 'navy' | 'olive' | 'slate'
type CheckKind = 'ok' | 'warn' | 'no' | 'alert'   // ok = spunta verde, warn = triangolo giallo, no = divieto rosso, alert = triangolo rosso
interface Illustration { id: string; alt: string; prompt: string; icon?: IconName }
interface Section { title: string; icon: IconName; accent: Accent; items: string[] }
```

### overview — apparato/sistema
```ts
blocks: {            // 4 o 6 blocchi, griglia 2 colonne
  title: string; accent: Accent; icon: IconName
  illustration?: Illustration   // ometterla nei blocchi di concetti astratti (vedi § 8)
  inset?: { label: string; illustration: Illustration }   // piccolo riquadro di dettaglio
  bullets: string[]  // 3–4
}[]
keyPoints: string[]  // 2–3 punti nella banda “Da ricordare”
```

### disease — malattia
```ts
definition: string                     // 1–2 frasi
illustration: Illustration
types: { name: string; text: string }[]        // 2–4 (tipi, forme, stadi)
sections: Section[]                    // esattamente 6: es. Cause/fattori di rischio, Segni e sintomi,
                                       // Diagnosi, Terapia, Complicanze, Monitoraggio
nursing: string[]                      // 4–5 interventi infermieristici
redFlags: string[]                     // 2–3 segnali d’allarme
```

### procedure — procedura
```ts
materials: { label: string; icon: IconName }[]   // 6–8 (griglia 4 colonne)
sites?: { title: string; illustration: Illustration; items: string[] }   // solo se c’è una sede anatomica
safety: { text: string; kind: CheckKind }[]      // 5–6
steps: { title: string; items: string[]; illustration: Illustration }[]  // 4–8 passi, 2–3 item brevi ciascuno
swatches?: { title: string; items: { label: string; sub: string; color: string; ink: string }[]; note: string }
           // solo se esiste un codice colore (es. ordine provette, maschere Venturi); color = esadecimale
complications: { label: string; sub: string }[]  // 4–6
nurseRole: string[]                               // 4
```

### lab — esami con alterazioni
```ts
intro: string
rows: {                     // 3–4 righe
  name: string; symbol: string; range: string; unit: string; accent: Accent
  low:  { name: string; signs: string; causes: string }
  high: { name: string; signs: string; causes: string }
  nursing: string
}[]
tips: string[]              // 2 avvertenze
```

### table — tabella
```ts
intro?: string
tableTitle: string
tableIcon: IconName
columns: string[]           // 3–5 colonne
rows: string[][]            // 4–9 righe; ogni riga ha tante celle quante colonne
widths?: number[]           // larghezze relative, es. [1.4, 1, 2, 2]
notes: Section[]            // 2–3 riquadri sotto la tabella
keyPoints?: string[]
```

### concept — teoria, normativa, organizzazione
```ts
intro?: string
illustration?: Illustration
columns: 2 | 3
blocks: {                   // 4–6 blocchi
  title: string; icon: IconName; accent: Accent
  text?: string             // breve frase
  items?: string[]          // elenco puntato
  checks?: { text: string; kind: CheckKind }[]   // elenco con icone
  illustration?: Illustration
  span?: number             // colonne occupate (es. 2 per un blocco largo)
}[]
keyPoints?: string[]
```

### algorithm — percorso decisionale
```ts
intro?: string
steps: {                    // 6–8 al massimo
  kind: 'start' | 'action' | 'decision' | 'alert' | 'end'
  title: string
  text?: string
  branches?: { label: string; text: string }[]   // solo per 'decision': 2 esiti (es. Sì / No)
}[]
side: Section[]             // 2–3 riquadri a destra
keyPoints?: string[]
```

### rhythm — aritmia ECG
```ts
rhythm: Rhythm              // tracciato disegnato in automatico, vedi preset sotto
stripLabel: string          // titolo del riquadro del tracciato
features: { label: string; value: string }[]     // Frequenza, Ritmo, Onde P, PR, QRS
sections: Section[]         // 3: es. Cause, Sintomi, Terapia
nurseRole: string[]         // 4
redFlags: string[]          // 2–3
```
Preset `rhythm` disponibili: `sinus`, `sinus-brady`, `sinus-tachy`, `pac`, `pvc`, `af`, `flutter`, `svt`, `bav1`,
`bav2-mobitz1`, `bav2-mobitz2`, `bav3`, `bbb`, `vt`, `vf`, `asystole`, `pea`, `stemi`, `hyperk`, `hypok`, `paced`.
Per una pagina che tratta più ritmi scegli il più rappresentativo e descrivi gli altri nelle sezioni.
Il testo deve descrivere ciò che il tracciato mostra (frequenza, onde P, larghezza del QRS).

### quiz
```ts
questions: { q: string; options: string[]; answer: number; why: string }[]   // 10 domande, 4 opzioni, answer = indice 0–3
```

---

## 5. Linguaggio e stile

- **Italiano corretto**, terminologia infermieristica standard (quella dei libri di testo e dei concorsi italiani).
- **Stile telegrafico**: elenchi brevi, non prosa. Un item = una informazione. Niente frasi introduttive inutili.
  - ✅ `'**Poliuria**, polidipsia, polifagia'`
  - ❌ `'Il paziente può presentare diversi sintomi tra cui la poliuria…'`
- **Grassetto** con `**…**` solo su parole chiave e valori: massimo 2–3 per item.
- Valori con **virgola decimale** e unità italiane: `0,12 s`, `3,5–5,0 mEq/L`, `≥ 126 mg/dL`, `37,5 °C`. Usa `–` per gli intervalli.
- Sigle: scrivile per esteso la prima volta se non sono notissime (es. “insufficienza renale cronica (IRC)”).
- Tono neutro e didattico. Infinito per le azioni infermieristiche: “Monitorare la diuresi”, “Ruotare le sedi”.
- **Contenuto originale**: non copiare testi da libri, siti o prodotti concorrenti.

---

## 6. Icone e colori ammessi

**Icone** (`IconName`, solo queste): Activity, Ambulance, Apple, ArrowDown, ArrowUp, Baby, Ban, Bandage, Bone, BookOpen,
Box, Brain, Cable, Calculator, CircleCheck, CircleDot, CircleX, ClipboardCheck, ClipboardList, Clock, Droplet, Droplets,
Ear, Eye, FileText, FlaskConical, Footprints, Gauge, GitBranch, Hand, Heart, HeartPulse, Hospital, Info, Layers,
Lightbulb, ListChecks, Microscope, Monitor, Package, Pill, Pipette, RefreshCw, Repeat, Route, Ruler, Scale, Scissors,
ShieldAlert, ShieldCheck, Siren, Sticker, Stethoscope, Syringe, Tag, Target, TestTube, TestTubes, Thermometer, Timer,
Trash2, TriangleAlert, User, Users, Utensils, Waves, Wind, Workflow, Zap.

**Colori** (`Accent`): red, blue, green, purple, orange, teal, pink, navy, olive, slate.
Usa i colori in modo semantico e coerente: rosso = allarme/complicanze, verde = assistenza/terapia,
blu = diagnosi/valutazione, arancio = sintomi, viola = classificazione/cause. Alterna i colori tra riquadri vicini.

---

## 7. Contenuto: accuratezza prima di tutto

- **Ogni numero, soglia, farmaco, legge e articolo deve essere corretto e aggiornato.** È un libro sanitario:
  un errore è un rischio reale e una recensione negativa.
- Usa linee guida e fonti **attuali e verificabili** (esempi: ESC, ERC 2025, ADA, GOLD, GINA, KDIGO, Surviving Sepsis,
  INS 2024, OMS, Ministero della Salute — Raccomandazioni ministeriali, AIFA, FNOPI, leggi italiane).
- **Contesto italiano** dove conta: leggi (L. 833/1978, L. 24/2017, L. 219/2017, DM 739/1994…), Codice deontologico FNOPI,
  triage nazionale 2019 (codici numerici 1–5), 118/112, Raccomandazioni ministeriali.
- Se **non sei sicuro** di un dato: verificalo; se non puoi verificarlo, **non scriverlo**. Mai inventare fonti, articoli di legge o valori.
- **Dosi di farmaci**: solo se standard, certe e utili all’esame (es. adrenalina 0,5 mg IM nell’anafilassi dell’adulto).
  Altrimenti “secondo prescrizione/protocollo”.
- Range di laboratorio: precisa sempre che **variano tra laboratori**.
- `sources`: 2–3 riferimenti reali (titolo della linea guida, legge o testo; anno o “ultima edizione”).
- Evita doppioni con le pagine vicine dello stesso capitolo (guarda la lista e le mappe già scritte):
  es. la patologia va in *patologie*, la gestione acuta in *emergenze*, il tracciato in *ecg*.

---

## 8. Illustrazioni

- Inseriscile solo dove un’immagine aiuta (anatomia, dispositivi, posizioni, gesti). Tabelle, leggi e quiz di solito non ne hanno.
- `id`: **unico in tutto il libro** → usa come prefisso l’id della mappa: `bpco-polmoni`, `cvp-laccio`.
- `prompt`: **in inglese**, descrive **solo il soggetto**. **Nessun testo/etichetta nell’immagine**, nessuna parola di stile
  (lo stile comune viene aggiunto dal generatore). Es.: `'healthy lungs and emphysematous lungs side by side, alveoli detail'`.
- `alt`: breve descrizione in italiano. `icon`: icona del segnaposto finché l’immagine non c’è.
- Tracciati ECG, grafici, tabelle e valori **non** si fanno con le illustrazioni: sono già disegnati dal codice.
- **Niente illustrazioni per concetti astratti**: chimica e ioni (pH, tamponi, elettroliti), volumi e pressioni,
  ormoni e regolazioni, potenziali elettrici, cicli, classificazioni, elenchi. L’AI li disegna con scritte
  (Na⁺, HCO₃⁻, FRC, GnRH…) o come forme senza senso. In questi blocchi ometti `illustration` e scrivi più punti.
- Nel prompt **non nominare strutture o sigle** ("stratum corneum", "systole", "four chambers"): il modello le
  trasforma in etichette. Descrivi l’aspetto: `'flat cells on the surface becoming cube-shaped cells at the bottom'`.

---

## 9. Densità della pagina

La pagina deve apparire **piena ma leggibile**: nessun riquadro con grandi spazi vuoti, niente testo tagliato.

- Spazio utile del corpo pagina: circa **800 px** di altezza. Una riga di elenco ≈ 16 px; una riga che va a capo ≈ 32 px.
- Quantità indicative: 3–5 item per riquadro; item di 4–12 parole.
- Se nell’anteprima ci sono **grandi vuoti** → aggiungi sostanza vera (valori, esempi, mnemoniche, una banda `keyPoints`)
  oppure usa meno colonne. Mai riempitivi.
- Se il contenuto **sfora** → accorcia il testo; non togliere informazioni essenziali; non serve rimpicciolire i caratteri.

---

## 10. Verifica di ogni pagina (obbligatoria)

Dalla cartella del progetto:

```bash
npx tsc -b                          # nessun errore nel tuo file
node scripts/export.mjs <id>        # deve stampare: ✓ NNN-<id>.png  (e NON “✗ Contenuto oltre la pagina”)
```

Poi apri `out/pagine/NNN-<id>.png` e controlla: niente testo tagliato o sovrapposto, nessun grande vuoto, testo corretto.
In alternativa `npm run dev` e guarda la pagina nello studio (un banner rosso segnala lo sforamento).
Al termine di un gruppo di mappe: `npm test` deve passare (controlla id, capitoli, fonti, illustrazioni duplicate).

---

## 11. Checklist finale per ogni mappa

- [ ] File `src/content/maps/<id>.ts` con l’id esatto, `export default map`
- [ ] `kind` adatto, `chapter` corretto, `status: 'bozza'`
- [ ] Solo icone e colori ammessi
- [ ] Testo telegrafico, italiano corretto, grassetto misurato, unità italiane
- [ ] Dati verificati; 2–3 `sources` reali
- [ ] Illustrazioni (se presenti) con id univoco, prompt in inglese senza testo
- [ ] Export senza sforamento, anteprima piena e leggibile
- [ ] Nessun altro file modificato

---

## 12. Prompt pronto da dare all’LLM

> Sei l’autore delle mappe dell’ebook “Mappe Visive di Infermieristica”. Leggi `docs/GUIDA-MAPPE.md` e seguila alla lettera.
> Scrivi le mappe di `docs/MAPPE-DA-SCRIVERE.md` per il capitolo **<capitolo>**, una alla volta, nell’ordine indicato.
> Per ognuna crea solo `src/content/maps/<id>.ts`, poi esegui `npx tsc -b` e `node scripts/export.mjs <id>` e correggi
> finché non ci sono errori né sforamenti. Non modificare nessun altro file del progetto.
> Accuratezza clinica e normativa prima di tutto: se non sei certo di un dato, non scriverlo.
