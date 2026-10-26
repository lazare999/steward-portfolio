import './Hero.css'

export default function Hero() {
  return (
    <main className="hero-card" id="profile">
      {/* Background Scenery Layer */}
      <div className="card-bg-scenery"></div>

      <div className="hero-content">
        <div className="badge">
          FEI LEVEL 1 STEWARD • JUMPING
        </div>

        <h1>Lazare Osiashvili</h1>

        <p className="hero-description">
          Equestrian Operations Specialist & Certified FEI Steward
          Active rider and certified Steward with broad operational
          expertise in show jumping course layout, arena aesthetics, and
          international tournament setup. Supporting the Equestrian
          Federation of Georgia since 2022, with direct experience
          co-hosting World Cup Qualifiers alongside elite international
          FEI Course Designers and Chief Stewards. Highly detail-oriented,
          hard-working, and passionate about maintaining the highest
          standards in equine sport.
        </p>

        <div className="hero-divider"></div>

        <div className="contact-row">
          <a
            href="mailto:lazare.osiashvili9@gmail.com"
            className="contact-item"
          >
            <span className="contact-icon">✉</span>
            <span>LAZARE.OSIASHVILI9@GMAIL.COM</span>
          </a>

          <a
            href="tel:+995555999572"
            className="contact-item"
          >
            <span className="contact-icon">📞</span>
            <span>+995 555 999 572</span>
          </a>

          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>TBILISI, GEORGIA</span>

            <svg
              className="geo-flag"
              viewBox="0 0 30 20"
              role="img"
              aria-label="Georgia Flag"
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
        </div>
      </div>

      {/* 3D Cutout Image Layer */}
      <div className="hero-image-container">
        <img
          src="/rider-cutout.png"
          alt="Lazare Osiashvili with horse"
          className="hero-image-3d"
        />
      </div>
    </main>
  )
}