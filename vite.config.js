import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { employees, defaultEmployee, company, vcardFileName, pageMeta } from './src/config.js'
import { buildVCard } from './src/lib/vcard.js'

const escapeHtml = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Puts one employee's name and role into the page title and link-preview tags.
// WhatsApp and LinkedIn read these without running any JavaScript, so each
// employee needs them baked into their own HTML file.
function withMeta(html, employee) {
  const meta = pageMeta(employee)
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${escapeHtml(meta.description)}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${escapeHtml(meta.ogTitle)}`)
}

// Per employee:
// - a contact file (/<slug>.vcf) served with a vCard MIME type, which is what
//   makes iOS Safari show its "Create New Contact" sheet;
// - their own page (/<slug>/index.html) so /habeeb works as a plain static
//   file on any host.
function employeeCardsPlugin() {
  let outDir = 'dist'
  const serveVCards = (server) => {
    for (const employee of employees) {
      server.middlewares.use(`/${vcardFileName(employee)}`, (_req, res) => {
        res.setHeader('Content-Type', 'text/vcard; charset=utf-8')
        res.end(buildVCard(employee, company))
      })
    }
  }
  return {
    name: 'employee-cards',
    configResolved(config) {
      outDir = config.build.outDir
    },
    configureServer: serveVCards,
    configurePreviewServer: serveVCards,
    transformIndexHtml(html) {
      return withMeta(html, defaultEmployee)
    },
    generateBundle() {
      for (const employee of employees) {
        this.emitFile({ type: 'asset', fileName: vcardFileName(employee), source: buildVCard(employee, company) })
      }
    },
    writeBundle() {
      const indexHtml = readFileSync(join(outDir, 'index.html'), 'utf8')
      for (const employee of employees) {
        const dir = join(outDir, employee.slug)
        mkdirSync(dir, { recursive: true })
        writeFileSync(join(dir, 'index.html'), withMeta(indexHtml, employee))
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), employeeCardsPlugin()],
})
