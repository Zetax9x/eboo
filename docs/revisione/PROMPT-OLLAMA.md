# Continuare la revisione con Claude Code su Ollama

## 1. Avvio (PowerShell, con il tunnel SSH aperto sulla porta 11434)

Sul server Ollama, prima di avviarlo, contesto ampio e richieste in parallelo:

```bash
OLLAMA_CONTEXT_LENGTH=65536 OLLAMA_NUM_PARALLEL=4 ollama serve
```

Sul PC, nella cartella `C:\Users\yuris\ebook`:

```powershell
$env:ANTHROPIC_BASE_URL = "http://localhost:11434"
$env:ANTHROPIC_AUTH_TOKEN = "ollama"
$env:ANTHROPIC_API_KEY = ""
# anche i sottoagenti devono usare il modello locale (Ollama non ha i modelli Claude)
$env:ANTHROPIC_DEFAULT_OPUS_MODEL = "gpt-oss:120b"
$env:ANTHROPIC_DEFAULT_SONNET_MODEL = "gpt-oss:120b"
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL = "gpt-oss:120b"
$env:CLAUDE_CODE_SUBAGENT_MODEL = "gpt-oss:120b"
claude --model gpt-oss:120b
```

Queste variabili valgono solo per quella finestra di PowerShell: chiudendola si torna a Claude normale.

## 2. Prompt da incollare (uno per sessione, oppure tutti insieme chiedendo i sottoagenti)

### Revisione clinica — gruppo A (anatomia, patologie)

```
Leggi CLAUDE.md e docs/revisione/clinico-A.md. Continua la revisione clinica dalle mappe NON ancora controllate
elencate in quel file (capitoli anatomia e patologie). Per ogni mappa in src/content/maps/: leggi tutto il file e
controlla valori, soglie, criteri, pratiche superate o pericolose, fonti in `sources` (devono esistere davvero),
refusi e termini non italiani. Correggi con modifiche minime SOLO gli errori certi; dopo ogni modifica esegui
`npm run export -- <id>` (deve stampare ✓ e non "Contenuto oltre la pagina"). I dubbi non toccarli: elencali.
Non cambiare `status`, illustrazioni, script, template. Ogni 10 mappe aggiorna docs/revisione/clinico-A.md
(tabella prima → dopo, dubbi, mappe ancora da fare) e fai un commit "fix: revisione clinica A (<mappe>)".
Alla fine `npx tsc --noEmit -p .` e `npx vitest run` devono passare.
```

### Revisione clinica — gruppo B (farmacologia rimanente, procedure, laboratorio)

Come sopra, ma con `docs/revisione/clinico-B.md` e i capitoli farmacologia, procedure, laboratorio.
Attenzione speciale a dosi, velocità di infusione, calcoli (verificarli), ordine delle provette, colori, siti di iniezione.
Riscrivere anche `elettroliti-concentrati-il-potassio` e `antipsicotici-e-antidepressivi` (indicate nel rapporto).

### Revisione clinica — gruppo C (emergenze rimanenti, specialistica, concorsi)

Come sopra, ma con `docs/revisione/clinico-C.md` e i capitoli emergenze, specialistica, concorsi.
Attenzione speciale ad algoritmi ERC, dosi in emergenza e pediatriche, numeri e anni delle leggi.

### Revisione finale (dopo le tre revisioni cliniche)

```
Leggi CLAUDE.md e docs/revisione/revisione-finale.md. Esegui i controlli elencati come "non ancora fatti"
(lettura visiva di almeno 2 mappe per capitolo dai PNG di `npm run export`, copertina con
`npm run export -- copertina-kdp`, contrasto in scala di grigi, parole chiave e categorie Amazon).
Solo verifica: non modificare il progetto. Aggiorna docs/revisione/revisione-finale.md e fai un commit.
```

## 3. Avvertenze

- Un modello locale sbaglia più di Claude nella revisione clinica: tieni la regola "solo errori certi" e
  controlla i commit con `git diff` prima di fidarti. La revisione dell'infermiere resta obbligatoria.
- Meglio un modello **diverso** da quello che ha scritto le mappe, per non ripetere gli stessi errori.
- Le illustrazioni mancanti (3) usano fal.ai e quindi crediti: generale a parte con `npm run illustrazioni`.
