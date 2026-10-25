// Export the written pages for Kindle:
//   out/pagine/NNN-<id>.png  1536 x 2048 px (3:4, 2x) — for Kindle Create / fixed-layout EPUB
//   out/ebook.pdf            all written pages, one per PDF page
// Fails (exit 1) if any page's content overflows the fixed page.
//
// Usage: npm run export            (all written pages)
//        npm run export -- <id>    (one page)

import { mkdir, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import { chromium } from 'playwright'

const PAGE = { width: 768, height: 1024 }
const SCALE = 2
const MIN_FILL_PERCENT = 60 // below this the boxes look half empty
const ROOT = fileURLToPath(new URL('..', import.meta.url))
const OUT_DIR = fileURLToPath(new URL('../out', import.meta.url))
const onlyId = process.argv[2]

const server = await createServer({ root: ROOT, logLevel: 'error', server: { port: 5199, strictPort: false } })
let browser
try {
  await server.listen()
  const base = server.resolvedUrls?.local[0]
  if (!base) throw new Error('Il server Vite non ha restituito un URL locale.')

  browser = await chromium.launch()
  const context = await browser.newContext({ viewport: PAGE, deviceScaleFactor: SCALE })
  const page = await context.newPage()
  // Fail fast if the app crashes (e.g. a content file breaks the registry) instead of waiting for the timeout.
  const crashed = new Promise((_, reject) => page.on('pageerror', (err) => reject(new Error(`Errore nella pagina: ${err.message}`))))
  await page.goto(`${base}#/stampa/${onlyId ?? 'tutte'}`)
  await Promise.race([page.waitForSelector('body[data-ready="1"]', { timeout: 30_000 }), crashed])

  const pages = await page.$$eval('.page', (nodes) =>
    nodes.map((n) => {
      // Same rule as the studio's red banner: the body, or any block inside it, is taller than its box.
      const body = n.querySelector('.page-body')
      const blocks = body ? [body, ...body.children] : []
      const overflow = blocks.some((el) => el.scrollHeight > el.clientHeight + 2)
      // Fill: share of each box body actually used by its content, weighted by box area.
      let used = 0
      let total = 0
      for (const box of n.querySelectorAll('.box__body')) {
        const rect = box.getBoundingClientRect()
        const kids = [...box.children]
        if (kids.length === 0 || rect.height < 40) continue
        const bottom = Math.max(...kids.map((k) => k.getBoundingClientRect().bottom))
        used += Math.min(bottom - rect.top, rect.height) * rect.width
        total += rect.height * rect.width
      }
      const fill = total > 0 ? Math.round((used / total) * 100) : 100
      return { id: n.getAttribute('data-page-id'), overflow, fill }
    }),
  )
  if (pages.length === 0) throw new Error('Nessuna pagina scritta da esportare.')

  if (!onlyId) await rm(`${OUT_DIR}/pagine`, { recursive: true, force: true })
  await mkdir(`${OUT_DIR}/pagine`, { recursive: true })

  const shots = await page.$$('.page')
  for (const [i, handle] of shots.entries()) {
    const { id } = pages[i]
    const label = await handle.$eval('.page-foot__num', (el) => el.textContent ?? '').catch(() => '')
    const number = (label.trim() || String(i + 1)).padStart(3, '0')
    await handle.screenshot({ path: `${OUT_DIR}/pagine/${number}-${id}.png` })
    console.log(`✓ ${number}-${id}.png`)
  }

  if (!onlyId) {
    await page.pdf({
      path: `${OUT_DIR}/ebook.pdf`,
      width: `${PAGE.width}px`,
      height: `${PAGE.height}px`,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    })
    console.log(`✓ ${OUT_DIR}/ebook.pdf (${pages.length} pagine)`)
  }

  for (const p of pages.filter((p) => p.fill < MIN_FILL_PERCENT)) {
    console.log(`⚠ Poco piena: ${p.id} (riquadri pieni al ${p.fill}%)`)
  }

  const overflowing = pages.filter((p) => p.overflow).map((p) => p.id)
  if (overflowing.length > 0) {
    console.error(`✗ Contenuto oltre la pagina in: ${overflowing.join(', ')}`)
    process.exitCode = 1
  }
} catch (err) {
  console.error(`✗ Esportazione fallita: ${err.message}`)
  process.exitCode = 1
} finally {
  await browser?.close()
  await server.close()
}
