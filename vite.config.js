import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { employee, company, vcardFileName } from './src/config.js'
import { buildVCard } from './src/lib/vcard.js'

// Serves the contact card as a real .vcf file (dev) and writes it into the
// build output (prod). A real file with a vCard MIME type is what makes
// iOS Safari show its "Create New Contact" sheet.
function vcardPlugin() {
  const source = () => buildVCard(employee, company)
  const serve = (server) => {
    server.middlewares.use(`/${vcardFileName}`, (_req, res) => {
      res.setHeader('Content-Type', 'text/vcard; charset=utf-8')
      res.end(source())
    })
  }
  return {
    name: 'vcard',
    configureServer: serve,
    configurePreviewServer: serve,
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: vcardFileName, source: source() })
    },
  }
}

export default defineConfig({
  plugins: [react(), vcardPlugin()],
})
