
import './Credentials.css'

export default function Credentials() {
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

  return (
    <section className="credentials-section" id="education">
      <div className="section-header">
        <h2>EDUCATION, SKILLS & PROFILE</h2>
        <div className="section-line"></div>
      </div>

      <div className="credentials-grid">
        {/* 1. Education & Certification */}
        <div className="credential-card">
          <div className="card-top-tag">EDUCATION</div>
          <h3>Academic & Certification</h3>
          <p className="credential-subtitle">
            University & FEI Qualifications
          </p>

          <div className="edu-item" style={{ marginBottom: '16px' }}>
            <strong style={{ color: '#111', fontSize: '15px' }}>
              Business and Technology University (BTU)
            </strong>

            <p
              style={{
                fontSize: '13.5px',
                color: '#1b2a4a',
                fontWeight: 600,
              }}
            >
              Computer Science
            </p>

            <p
              style={{
                fontSize: '14px',
                color: '#4b5563',
                marginTop: '4px',
                lineHeight: '1.5',
              }}
            >
              Studying computer science, algorithms, software development,
              and modern technologies.
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
              FEI Level 1 Jumping Steward
            </strong>

            <p
              style={{
                fontSize: '13.5px',
                color: '#1b2a4a',
                fontWeight: 600,
              }}
            >
              Official FEI Certification
            </p>

            <ul
              className="credential-list"
              style={{ marginTop: '8px' }}
            >
              <li>
                Completed official FEI Campus coursework and specialized
                training modules.
              </li>
              <li>
                Ensuring international rules, safety, and strict animal
                welfare standards.
              </li>
            </ul>
          </div>

          {/* Download FEI Certificate */}
          <a
            className="download-btn"
            href="/fei-level-1-certificate.pdf"
            download="Lazare-Osiashvili-FEI-Level-1-Certificate.pdf"
            style={{ marginTop: '20px' }}
          >
            <span>Download Certificate (PDF)</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        {/* 2. Professional Skills */}
        <div className="credential-card" id="skills">
          <div className="card-top-tag">EXPERTISE</div>
          <h3>Professional Skills</h3>
          <p className="credential-subtitle">
            Equestrian & Technical Competencies
          </p>

          <div className="skills-container">
            <div className="skill-category">
              <span className="skill-cat-title">
                Equestrian & Federation
              </span>

              <div className="skill-tags">
                <span>Arena Management</span>
                <span>Course Design Assist</span>
                <span>Animal Welfare</span>
                <span>Event Logistics</span>
                <span>Horse Handling & Groundwork</span>
                <span>Showjumping Rules (FEI)</span>
                <span>Official Judging</span>
                <span>Venue Setup</span>
              </div>
            </div>

            <div className="skill-category">
              <span className="skill-cat-title">
                General & Technical
              </span>

              <div className="skill-tags">
                <span>Web Development</span>
                <span>React & TypeScript</span>
                <span>Algorithms & Logic</span>
                <span>Problem Solving</span>
                <span>Data Management</span>
                <span>Team Coordination</span>
                <span>Emergency Dispatch Prep</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Personal Information */}
        <div className="credential-card">
          <div className="card-top-tag">PERSONAL INFO</div>
          <h3>Background</h3>
          <p className="credential-subtitle">
            Personal Details & Languages
          </p>

          <div className="personal-info-cards">
            <div className="pi-card-item">
              <div className="pi-icon">🎂</div>
              <div className="pi-content">
                <span className="pi-label">Date of Birth & Age</span>
                <span className="pi-val">
                  May 11, 2004 ({age} yrs)
                </span>
              </div>
            </div>

            <div className="pi-card-item">
              <div className="pi-icon">⚖️</div>
              <div className="pi-content">
                <span className="pi-label">Physical Attributes</span>
                <span className="pi-val">177 cm / 68 kg</span>
              </div>
            </div>

            <div className="pi-card-item">
              <div className="pi-icon">📍</div>
              <div className="pi-content">
                <span className="pi-label">Location</span>
                <span className="pi-val">Tbilisi, Georgia 🇬🇪</span>
              </div>
            </div>

            <div className="pi-card-item">
              <div className="pi-icon">🗣️</div>
              <div className="pi-content">
                <span className="pi-label">Languages Spoken</span>
                <span className="pi-val">
                  Georgian (Native) • English (B2) • Russian (A2)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
