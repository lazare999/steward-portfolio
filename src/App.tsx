import { useState } from 'react'
import './App.css'

import Hero from './components/Hero'
import Experience from './components/Experience'
import ContactFooter from './components/ContactFooter'
import Credentials from './components/Credentials'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="page-container">
      <nav className="top-nav" aria-label="Main navigation">
        <div className="nav-brand">LAZARE OSIASHVILI</div>

        <button
          className="nav-toggle"
          type="button"
          aria-label={
            isMenuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`nav-links${isMenuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
        >
          <a href="#profile" onClick={() => setIsMenuOpen(false)}>
            PROFILE
          </a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>
            EXPERIENCE
          </a>
          <a href="#stewardship" onClick={() => setIsMenuOpen(false)}>
            STEWARDSHIP
          </a>
          <a href="#riding" onClick={() => setIsMenuOpen(false)}>
            RIDING
          </a>
          <a href="#education" onClick={() => setIsMenuOpen(false)}>
            EDUCATION
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            CONTACT
          </a>
        </div>
      </nav>

      <Hero />

      <Experience />
      <Credentials />
      <ContactFooter />
    </div>
  )
}

export default App