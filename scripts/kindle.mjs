// Builds the Kindle package from the whole book (front matter, index, dividers, written maps):
//
//   out/kindle/pagine/NNN.jpg      one JPEG per page
//   out/kindle/mappe-visive.epub   EPUB3 fixed layout: navigable table of contents + clickable index entries
//   out/kindle/mappe-visive.pdf    lightweight PDF made from the same JPEGs (alternative for Kindle Create)
//
// Usage: npm run kindle                                   defaults: quality 70, 1152×1536 (~55 MB, text still sharp)
//        npm run kindle -- --qualita 78 --scala 2         sharper but larger (1536×2048, ~92 MB)

import { mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { chromium } from 'playwright'
import { createServer } from 'vite'
import { zipStore } from './lib/zip.mjs'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const OUT = path.join(ROOT, 'out/kindle')
const PAGE = { width: 768, height: 1024 }
const DELIVERY_EUR_PER_MB = 0.12 // Amazon.it, 70% royalty plan (check the current KDP pricing page)
const FRONT_IDS = ['copertina', 'frontespizio', 'avvertenze', 'come-usare']

function parseArgs(argv) {
  const args = {}
  for (let i = 0; i < argv.length; i += 2) args[argv[i].replace(/^--/, '')] = argv[i + 1]
  return args
}

const escapeXml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const pageFile = (i) => `p${String(i + 1).padStart(3, '0')}.xhtml`
const imageFile = (i) => `${String(i + 1).padStart(3, '0')}.jpg`

/** Renders the book; returns each page's id, title and clickable areas (as % of the page). */
async function renderBook({ quality, scale }) {
  const server = await createServer({ root: ROOT, logLevel: 'error', server: { port: 5194, strictPort: false } })
  let browser
  try {
    await server.listen()
    browser = await chromium.launch()
    const page = await browser.newPage({ viewport: PAGE, deviceScaleFactor: scale })
    await page.goto(`${server.resolvedUrls.local[0]}#/stampa/libro`)
    await page.waitForSelector('body[data-ready="1"]', { timeout: 180_000 })
    const { BOOK_META } = await server.ssrLoadModule('/src/book/meta.ts')

    const pages = await page.$$eval('.page', (nodes) =>
      nodes.map((n) => {
        const box = n.getBoundingClientRect()
        return {
          id: n.getAttribute('data-page-id'),
          title: (n.querySelector('h1')?.textContent ?? '').replace(/\s+/g, ' ').trim(),
          links: [...n.querySelectorAll('[data-link]')].map((el) => {
            const r = el.getBoundingClientRect()
            return {
              target: el.getAttribute('data-link'),
              x: ((r.left - box.left) / box.width) * 100,
              y: ((r.top - box.top) / box.height) * 100,
              w: (r.width / box.width) * 100,
              h: (r.height / box.height) * 100,
            }
          }),
        }
      }),
    )

    await rm(OUT, { recursive: true, force: true })
    await mkdir(path.join(OUT, 'pagine'), { recursive: true })
    const handles = await page.$$('.page')
    for (const [i, handle] of handles.entries()) {
      await handle.screenshot({ path: path.join(OUT, 'pagine', imageFile(i)), type: 'jpeg', quality })
    }
    return { pages, meta: BOOK_META }
  } finally {
    await browser?.close()
    await server.close()
  }
}

function buildNav(pages) {
  const indexOf = new Map(pages.map((p, i) => [p.id, i]))
  const link = (id, label) => `<a href="${pageFile(indexOf.get(id))}">${escapeXml(label)}</a>`
  const items = []
  for (const id of ['avvertenze', 'come-usare']) if (indexOf.has(id)) items.push(`<li>${link(id, pages[indexOf.get(id)].title)}</li>`)
  if (indexOf.has('indice-1')) items.push(`<li>${link('indice-1', 'Indice')}</li>`)

  let chapterOpen = false
  for (const p of pages) {
    if (p.id.startsWith('capitolo-')) {
      if (chapterOpen) items.push('</ol></li>')
      items.push(`<li>${link(p.id, `${p.id.replace('capitolo-', '')}. ${p.title}`)}<ol>`)
      chapterOpen = true
    } else if (chapterOpen && !FRONT_IDS.includes(p.id) && !p.id.startsWith('indice-')) {
      items.push(`<li>${link(p.id, p.title)}</li>`)
    }
  }
  if (chapterOpen) items.push('</ol></li>')

  const landmark = (type, id, label) => (indexOf.has(id) ? `<li><a epub:type="${type}" href="${pageFile(indexOf.get(id))}">${label}</a></li>` : '')
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="it" lang="it">
<head><meta charset="UTF-8"/><title>Sommario</title></head>
<body>
<nav epub:type="toc" id="toc"><h1>Sommario</h1><ol>
${items.join('\n')}
</ol></nav>
<nav epub:type="landmarks" hidden=""><ol>
${landmark('cover', 'copertina', 'Copertina')}
${landmark('toc', 'indice-1', 'Indice')}
${landmark('bodymatter', 'capitolo-1', 'Inizio')}
</ol></nav>
</body></html>`
}

function buildPage(p, i, indexOf, size) {
  const anchors = p.links
    .filter((l) => indexOf.has(l.target))
    .map(
      (l) =>
        `<a class="l" href="${pageFile(indexOf.get(l.target))}" aria-label="${escapeXml(l.target)}" ` +
        `style="left:${l.x.toFixed(2)}%;top:${l.y.toFixed(2)}%;width:${l.w.toFixed(2)}%;height:${l.h.toFixed(2)}%"></a>`,
    )
    .join('')
  const title = escapeXml(p.title || p.id)
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="it" lang="it">
<head><meta charset="UTF-8"/><title>${title}</title>
<meta name="viewport" content="width=${size.w}, height=${size.h}"/><link rel="stylesheet" href="style.css"/></head>
<body><div class="p"><img src="images/${imageFile(i)}" alt="${title}"/>${anchors}</div></body></html>`
}

function buildOpf(pages, meta, size) {
  const hash = createHash('sha1').update(meta.title + meta.author + meta.edition).digest('hex')
  const uuid = `${hash.slice(0, 8)}-${hash.slice(8, 12)}-${hash.slice(12, 16)}-${hash.slice(16, 20)}-${hash.slice(20, 32)}`
  const manifest = pages
    .map((_, i) => {
      const cover = i === 0 ? ' properties="cover-image"' : ''
      return (
        `<item id="pg${i + 1}" href="${pageFile(i)}" media-type="application/xhtml+xml"/>\n` +
        `<item id="img${i + 1}" href="images/${imageFile(i)}" media-type="image/jpeg"${cover}/>`
      )
    })
    .join('\n')
  const spine = pages.map((_, i) => `<itemref idref="pg${i + 1}" properties="rendition:page-spread-center"/>`).join('\n')
  // EPUB2 <guide>: Kindle reads the start-reading location ("text") from here as well as from the nav landmarks.
  const at = (id) => pages.findIndex((p) => p.id === id)
  const guide = [
    `<reference type="cover" title="Copertina" href="${pageFile(0)}"/>`,
    at('indice-1') >= 0 ? `<reference type="toc" title="Indice" href="${pageFile(at('indice-1'))}"/>` : '',
    at('capitolo-1') >= 0 ? `<reference type="text" title="Inizio" href="${pageFile(at('capitolo-1'))}"/>` : '',
  ].join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="bookid" xml:lang="it" prefix="rendition: http://www.idpf.org/vocab/rendition/#">
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
<dc:identifier id="bookid">urn:uuid:${uuid}</dc:identifier>
<dc:title>${escapeXml(meta.title)}</dc:title>
<dc:creator>${escapeXml(meta.author)}</dc:creator>
<dc:language>it</dc:language>
<dc:description>${escapeXml(meta.subtitle)}</dc:description>
<meta property="dcterms:modified">${new Date().toISOString().replace(/\.\d+Z$/, 'Z')}</meta>
<meta property="rendition:layout">pre-paginated</meta>
<meta property="rendition:orientation">portrait</meta>
<meta property="rendition:spread">none</meta>
<meta name="cover" content="img1"/>
<meta name="fixed-layout" content="true"/>
<meta name="original-resolution" content="${size.w}x${size.h}"/>
<meta name="orientation-lock" content="portrait"/>
</metadata>
<manifest>
<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
<item id="css" href="style.css" media-type="text/css"/>
${manifest}
</manifest>
<spine>
${spine}
</spine>
<guide>
${guide}
</guide>
</package>`
}

async function buildEpub(pages, meta, size) {
  const indexOf = new Map(pages.map((p, i) => [p.id, i]))
  const files = [
    { name: 'mimetype', data: Buffer.from('application/epub+zip') }, // must be the first entry, uncompressed
    {
      name: 'META-INF/container.xml',
      data: Buffer.from(
        '<?xml version="1.0" encoding="UTF-8"?>\n<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">' +
          '<rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>',
      ),
    },
    { name: 'OEBPS/content.opf', data: Buffer.from(buildOpf(pages, meta, size)) },
    { name: 'OEBPS/nav.xhtml', data: Buffer.from(buildNav(pages)) },
    {
      name: 'OEBPS/style.css',
      data: Buffer.from(
        `html,body{margin:0;padding:0}.p{position:relative;width:${size.w}px;height:${size.h}px}` +
          `.p img{position:absolute;left:0;top:0;width:${size.w}px;height:${size.h}px}a.l{position:absolute;display:block}`,
      ),
    },
  ]
  for (const [i, p] of pages.entries()) {
    files.push({ name: `OEBPS/${pageFile(i)}`, data: Buffer.from(buildPage(p, i, indexOf, size)) })
    files.push({ name: `OEBPS/images/${imageFile(i)}`, data: await readFile(path.join(OUT, 'pagine', imageFile(i))) })
  }
  const epub = path.join(OUT, 'mappe-visive.epub')
  await writeFile(epub, zipStore(files))
  return epub
}

/** PDF with one JPEG per page; Chromium embeds the JPEGs, so the size stays close to the images. */
async function buildPdf(count) {
  const html =
    `<!doctype html><html><head><style>@page{size:${PAGE.width}px ${PAGE.height}px;margin:0}body{margin:0}` +
    `img{display:block;width:${PAGE.width}px;height:${PAGE.height}px;break-after:page}</style></head><body>\n` +
    Array.from({ length: count }, (_, i) => `<img src="pagine/${imageFile(i)}">`).join('\n') +
    '</body></html>'
  const htmlFile = path.join(OUT, 'pdf.html')
  await writeFile(htmlFile, html)
  const browser = await chromium.launch()
  try {
    const page = await browser.newPage()
    await page.goto(pathToFileURL(htmlFile).href, { waitUntil: 'load' })
    const pdf = path.join(OUT, 'mappe-visive.pdf')
    await page.pdf({ path: pdf, width: `${PAGE.width}px`, height: `${PAGE.height}px`, margin: { top: 0, right: 0, bottom: 0, left: 0 } })
    return pdf
  } finally {
    await browser.close()
    await rm(htmlFile, { force: true })
  }
}

const megabytes = async (file) => (await stat(file)).size / 1024 / 1024

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const quality = Number(args.qualita ?? 70)
  const scale = Number(args.scala ?? 1.5)
  const size = { w: Math.round(PAGE.width * scale), h: Math.round(PAGE.height * scale) }

  console.log(`Rendering del libro (${size.w}×${size.h}, JPEG qualità ${quality})…`)
  const { pages, meta } = await renderBook({ quality, scale })
  const links = pages.reduce((n, p) => n + p.links.length, 0)
  console.log(`✓ ${pages.length} pagine, ${links} collegamenti cliccabili`)

  const epub = await buildEpub(pages, meta, size)
  const pdf = await buildPdf(pages.length)
  const epubMb = await megabytes(epub)
  console.log(`✓ ${path.relative(ROOT, epub)} — ${epubMb.toFixed(1)} MB`)
  console.log(`✓ ${path.relative(ROOT, pdf)} — ${(await megabytes(pdf)).toFixed(1)} MB`)
  console.log(
    `Costo di consegna stimato (royalty 70%, ${DELIVERY_EUR_PER_MB} €/MB): circa ${(epubMb * DELIVERY_EUR_PER_MB).toFixed(2)} € a copia. ` +
      'Amazon misura il file dopo la conversione: la cifra reale può differire.',
  )
}

main().catch((err) => {
  console.error(`✗ ${err.message}`)
  process.exitCode = 1
})
