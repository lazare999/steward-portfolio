import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Navigate, useParams } from 'react-router-dom'
import './App.css'

import Hero from './components/Hero'
import Experience from './components/Experience'
import ContactFooter from './components/ContactFooter'
import Credentials from './components/Credentials'
import LanguageSelect from './components/LanguageSelect'
import { isLanguageCode } from './languages'
import { applySeo } from './seo'

function App() {
  const { lang } = useParams<{ lang: string }>()
  const { t, i18n } = useTranslation('common')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!lang || !isLanguageCode(lang)) return

    if (i18n.language !== lang) {
      void i18n.changeLanguage(lang)
    }

    applySeo(lang)
  }, [lang, i18n])

  if (!lang || !isLanguageCode(lang)) {
    return <Navigate to="/en" replace />
  }

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="page-container">
      <header>
        <nav className="top-nav" aria-label={t('nav.ariaLabel')}>
          <div className="nav-brand">{t('nav.brand')}</div>

          <div
            className={`nav-links${isMenuOpen ? ' is-open' : ''}`}
            id="primary-navigation"
          >
            <a href={`/${lang}#profile`} onClick={closeMenu}>
              {t('nav.profile')}
            </a>
            <a href={`/${lang}#experience`} onClick={closeMenu}>
              {t('nav.experience')}
            </a>
            <a href={`/${lang}#stewardship`} onClick={closeMenu}>
              {t('nav.stewardship')}
            </a>
            <a href={`/${lang}#riding`} onClick={closeMenu}>
              {t('nav.riding')}
            </a>
            <a href={`/${lang}#education`} onClick={closeMenu}>
              {t('nav.education')}
            </a>
            <a href={`/${lang}#contact`} onClick={closeMenu}>
              {t('nav.contact')}
            </a>
          </div>

          <div className="nav-actions">
            <LanguageSelect />

            <button
              className="nav-toggle"
              type="button"
              aria-label={
                isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')
              }
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <Experience />
        <Credentials />
      </main>

      <ContactFooter />
    </div>
  )
}

export default App
