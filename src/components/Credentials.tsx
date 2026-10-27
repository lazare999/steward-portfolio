import { useTranslation } from 'react-i18next'
import './Credentials.css'

export default function Credentials() {
  const { t } = useTranslation('credentials')

  const calculateAge = (birthDateString: string) => {
    const birthDate = new Date(birthDateString)
    const today = new Date()

    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDifference = today.getMonth() - birthDate.getMonth()

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--
    }

    return age
  }

  const age = calculateAge('2004-05-11')

  const equestrianSkills = t('skills.equestrian', {
    returnObjects: true,
  }) as string[]
  const technicalSkills = t('skills.technical', {
    returnObjects: true,
  }) as string[]

  return (
    <section className="credentials-section" id="education">
      <div className="section-header">
        <h2>{t('sectionTitle')}</h2>
        <div className="section-line"></div>
      </div>

      <div className="credentials-grid">
        <div className="credential-card">
          <div className="card-top-tag">{t('education.tag')}</div>
          <h3>{t('education.title')}</h3>
          <p className="credential-subtitle">{t('education.subtitle')}</p>

          <div className="edu-item" style={{ marginBottom: '16px' }}>
            <strong style={{ color: '#111', fontSize: '15px' }}>
              {t('education.university')}
            </strong>

            <p
              style={{
                fontSize: '13.5px',
                color: '#1b2a4a',
                fontWeight: 600,
              }}
            >
              {t('education.major')}
            </p>

            <p
              style={{
                fontSize: '14px',
                color: '#4b5563',
                marginTop: '4px',
                lineHeight: '1.5',
              }}
            >
              {t('education.universityDesc')}
            </p>
          </div>

          <div
            className="edu-item"
            style={{
              borderTop: '1px solid #f1f5f9',
              paddingTop: '14px',
            }}
          >
            <strong style={{ color: '#111', fontSize: '15px' }}>
              {t('education.feiTitle')}
            </strong>

            <p
              style={{
                fontSize: '13.5px',
                color: '#1b2a4a',
                fontWeight: 600,
              }}
            >
              {t('education.feiCert')}
            </p>

            <ul className="credential-list" style={{ marginTop: '8px' }}>
              <li>{t('education.feiBullet1')}</li>
              <li>{t('education.feiBullet2')}</li>
            </ul>
          </div>

          <a
            className="download-btn"
            href="/fei-level-1-certificate.pdf"
            download="Lazare-Osiashvili-FEI-Level-1-Certificate.pdf"
            style={{ marginTop: '20px' }}
          >
            <span>{t('education.downloadCert')}</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="credential-card" id="skills">
          <div className="card-top-tag">{t('skills.tag')}</div>
          <h3>{t('skills.title')}</h3>
          <p className="credential-subtitle">{t('skills.subtitle')}</p>

          <div className="skills-container">
            <div className="skill-category">
              <span className="skill-cat-title">
                {t('skills.equestrianTitle')}
              </span>

              <div className="skill-tags">
                {equestrianSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <span className="skill-cat-title">
                {t('skills.technicalTitle')}
              </span>

              <div className="skill-tags">
                {technicalSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="credential-card">
          <div className="card-top-tag">{t('personal.tag')}</div>
          <h3>{t('personal.title')}</h3>
          <p className="credential-subtitle">{t('personal.subtitle')}</p>

          <div className="personal-info-cards">
            <div className="pi-card-item">
              <div className="pi-icon">🎂</div>
              <div className="pi-content">
                <span className="pi-label">{t('personal.birthLabel')}</span>
                <span className="pi-val">
                  {t('personal.birthValue', { age })}
                </span>
              </div>
            </div>

            <div className="pi-card-item">
              <div className="pi-icon">⚖️</div>
              <div className="pi-content">
                <span className="pi-label">
                  {t('personal.physicalLabel')}
                </span>
                <span className="pi-val">{t('personal.physicalValue')}</span>
              </div>
            </div>

            <div className="pi-card-item">
              <div className="pi-icon">📍</div>
              <div className="pi-content">
                <span className="pi-label">
                  {t('personal.locationLabel')}
                </span>
                <span className="pi-val">{t('personal.locationValue')}</span>
              </div>
            </div>

            <div className="pi-card-item">
              <div className="pi-icon">🗣️</div>
              <div className="pi-content">
                <span className="pi-label">
                  {t('personal.languagesLabel')}
                </span>
                <span className="pi-val">
                  {t('personal.languagesValue')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
