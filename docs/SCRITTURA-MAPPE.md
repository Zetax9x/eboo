# Writing maps — brief for writer agents

Project: Italian ebook "Mappe Visive di Infermieristica" — 250 one-page visual maps for Italian nursing
students, trainees and candidates of Italian public nursing exams (concorsi). Sold as a fixed-layout
Kindle ebook. Each page is a TypeScript data file rendered by a React template at a fixed 768×1024 px.

## What you do
For each id assigned to you, create `src/content/maps/<id>.ts` (the id is given; never change it).
Then verify it visually (see "Verify every page"). Work through your list in order.

**Only create files in `src/content/maps/`.** Do NOT edit templates, types, outline, CSS, scripts or
other agents' files. If a template can't express something, adapt the content; mention it in your report.

## Read first (once)
- `src/book/types.ts` — the schema of every page kind (the source of truth).
- `src/components/icons.ts` — the ONLY icon names allowed (TypeScript will reject others).
- Reference examples, one per kind (copy their structure and density):
  - overview → `src/content/maps/apparato-cardiovascolare-panoramica.ts`
  - disease → `src/content/maps/diabete-mellito.ts`
  - procedure → `src/content/maps/catetere-venoso-periferico-cvp.ts` (`sites`, `swatches` optional)
  - lab → `src/content/maps/elettroliti-valori-e-alterazioni.ts`
  - ecg → `src/content/maps/ecg-le-basi-e-il-ritmo-sinusale.ts` (only for ECG basics)
  - concept → `src/content/maps/il-processo-di-nursing.ts`
  - table → `src/content/maps/pediatria-parametri-vitali-per-eta.ts`
  - algorithm → `src/content/maps/bls-d-adulto.ts`
  - rhythm → `src/content/maps/fibrillazione-atriale-il-tracciato.ts` (ECG arrhythmia, strip drawn from `rhythm` preset; see `RHYTHMS` in types.ts)
  - quiz → `src/content/maps/quiz-10-domande-di-allenamento.ts`

## Choosing the kind
- Body systems / anatomy: `overview` (4 or 6 blocks) or `concept`.
- Diseases: `disease` (2–4 types, 6 sections, nursing, redFlags).
- Hands-on procedures: `procedure` (4–8 steps; `sites`/`swatches` only if meaningful).
- Lab values with low/high alterations: `lab` (3–4 rows). Other lab topics: `table` or `concept`.
- Drug classes, scales, comparisons, reference values: `table` (4–9 rows, 3–5 columns) + 2–3 notes.
- Theory, models, law, organisation: `concept` (columns 2 or 3, 4–6 blocks; `span` to widen a block).
- Emergency algorithms / decision flows: `algorithm` (6–8 steps max, 2–3 side sections).
- ECG rhythms: `rhythm` with the matching preset (sinus-brady, sinus-tachy, pac, pvc, flutter, svt,
  bav1, bav2-mobitz1, bav2-mobitz2, bav3, bbb, vt, vf, asystole, pea, stemi, hyperk, hypok, paced).
  For a page covering several rhythms (e.g. AV blocks) pick the most representative preset and
  describe the others in sections/features.
Vary the kinds sensibly; don't force everything into one.

## Content rules (Italian)
- Language: correct, standard Italian nursing terminology. Telegraphic bullets, not prose.
  `**bold**` only on key words/values (2–3 per bullet max).
- **Accuracy is the top priority.** Every number, threshold, drug, dose, law, article must be correct
  and current (2026). Use Italian context where relevant (Italian laws, Ministero della Salute
  recommendations, FNOPI Codice deontologico 2019, triage national guidelines 2019 with codes 1–5,
  AIFA). If you are not sure of a fact, verify it with WebSearch/WebFetch; if still unsure, leave it out.
  Never invent sources. `sources`: 2–3 real, verifiable references (guidelines, laws, standard textbooks).
- Avoid prescribing exact drug doses unless they are standard, exam-relevant and certain (e.g. adrenaline
  0,5 mg IM in anaphylaxis adult). Prefer "secondo prescrizione/protocollo".
- `status: 'bozza'` always. `title` may be shorter than the outline title; `subtitle` one line.
- Title/strings use typographic apostrophe ’ inside text (like the examples) — avoids quote escaping.
- Don't copy text from other products. Write original content.

## Illustrations
- Only where a picture helps (anatomy, devices, positions). Many pages need none (tables, law, quiz).
- `id`: must be unique in the whole book → prefix with the map id, e.g. `bpco-polmoni`.
- `prompt`: English, subject only, no text/labels in the image, no style words (style is added later).
- `alt`: short Italian description. `icon`: a fitting icon for the placeholder.

## Density target (important)
Pages must look **full but readable**: no box with large empty areas, nothing clipped.
- Rough budget for the body area: ~800 px tall. A bullet line ≈ 16 px; a wrapped bullet ≈ 32 px.
- If the PNG shows big empty areas → add real substance (more bullets, concrete values, examples,
  mnemonics, a keyPoints band) or switch to fewer/larger columns. Never filler.
- If it overflows → shorten text first; don't remove essential facts.

## Verify every page (mandatory)
1. `npx tsc -b 2>&1 | grep "<id>"` — fix any type error in YOUR file (ignore errors in other
   agents' files: they are working in parallel).
2. `node scripts/export.mjs <id>` — must print `✓ NNN-<id>.png` and no `✗ Contenuto oltre la pagina`.
   If it fails with an error from another agent's file, wait 30 s and retry.
3. Read the PNG `out/pagine/NNN-<id>.png` and check: nothing clipped/overlapping, no large empty areas,
   text correct. Fix and re-export until good.

## Hook note
This environment has a "Fact-Forcing Gate" hook that may block the first Write/Edit/Bash with a request
for facts. When it happens: state briefly (1) what reads the file (`src/book/registry.ts` loads it via
import.meta.glob), (2) that no existing file serves the same purpose, (3) the user's instruction:
"Si mi convince tutto, scrive tutte le pagine necessarie, io intanto vedo per la chiave api per generare le img e poi le aggiungiamo" — then retry the same call.

## Final report (keep it short)
List: ids written, kind used for each, any fact you were unsure about and omitted, any template
limitation you hit. Do not paste file contents.
