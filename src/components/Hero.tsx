import { useTranslation } from 'react-i18next'
import './Hero.css'

export default function Hero() {
  const { t } = useTranslation('hero')

  return (
    <section className="hero-card" id="profile" aria-labelledby="hero-name">
      <div className="card-bg-scenery" aria-hidden="true"></div>

      <div className="hero-left">
        <div className="hero-content">
          <p className="badge">{t('badge')}</p>

          <h1 id="hero-name">{t('name')}</h1>

          <p className="hero-description">{t('description')}</p>

          <div className="hero-divider" aria-hidden="true"></div>
        </div>

        <address className="contact-row">
          <a
            href="mailto:lazare.osiashvili9@gmail.com"
            className="contact-item"
          >
            <span className="contact-icon" aria-hidden="true">
              ✉
            </span>
            <span>{t('email')}</span>
          </a>

          <a href="tel:+995555999572" className="contact-item">
            <span className="contact-icon" aria-hidden="true">
              📞
            </span>
            <span>{t('phone')}</span>
          </a>

          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true">
              📍
            </span>
            <span>{t('location')}</span>

            <svg
              className="geo-flag"
              viewBox="0 0 30 20"
              role="img"
              aria-label={t('flagAria')}
            >
              <rect width="30" height="20" fill="#ffffff" />
              <rect x="12" y="0" width="6" height="20" fill="#ff0000" />
              <rect x="0" y="7" width="30" height="6" fill="#ff0000" />
              <rect x="4" y="2" width="2" height="2" fill="#ff0000" />
              <rect x="24" y="2" width="2" height="2" fill="#ff0000" />
              <rect x="4" y="16" width="2" height="2" fill="#ff0000" />
              <rect x="24" y="16" width="2" height="2" fill="#ff0000" />
            </svg>
          </div>
        </address>
      </div>

      <div className="hero-image-container">
        <img
          src="/rider-cutout.png"
          alt={t('imageAlt')}
          className="hero-image-3d"
          width={900}
          height={616}
          decoding="async"
          fetchPriority="high"
        />
      </div>
    </section>
  )
}
