import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const LANGS = ['en', 'ka', 'fr', 'es', 'de', 'it', 'sv', 'zh', 'ru'] as const

function seoFilesPlugin(siteUrl: string): Plugin {
  const base = siteUrl.replace(/\/$/, '') || 'https://your-domain.com'

  return {
    name: 'seo-files',
    writeBundle(options) {
      const outDir = options.dir ?? resolve('dist')

      writeFileSync(
        resolve(outDir, 'robots.txt'),
        `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`
      )

      const alternateLinks = LANGS.map(
        (lang) =>
          `    <xhtml:link rel="alternate" hreflang="${lang}" href="${base}/${lang}"/>`
      ).join('\n')

      const urls = LANGS.map((lang, index) => {
        const priority = index === 0 ? '1.0' : index === 1 ? '0.9' : '0.8'
        const hreflangBlock =
          lang === 'en'
            ? `\n${alternateLinks}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${base}/en"/>`
            : ''

        return `  <url>
    <loc>${base}/${lang}</loc>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>${hreflangBlock}
  </url>`
      }).join('\n')

      writeFileSync(
        resolve(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
      )
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = env.VITE_SITE_URL || 'https://your-domain.com'

  return {
    plugins: [react(), seoFilesPlugin(siteUrl)],
    build: {
      target: 'es2020',
      cssCodeSplit: true,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules/react-dom') || id.includes('node_modules/react-router') || id.includes('node_modules/react/')) {
              return 'react'
            }
            if (id.includes('node_modules/i18next') || id.includes('node_modules/react-i18next')) {
              return 'i18n'
            }
          },
        },
      },
    },
  }
})
