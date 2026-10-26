import './Experience.css'

const experiences = [
  {
    title: 'GEORGIAN EQUESTRIAN FEDERATION',
    subtitle: 'Event Support & Organising Team',
    date: '2022 – Present',
    items: [
      'Provided direct support to multi-time Georgian Champion and 2-time World Cup Qualifier Shalva Gachechiladze.',
      'Served as an official Judge across all federation competitions.',
      'Managed full-scale venue setup and live event execution for all events.',
      'Built Official Georgian equestrian Federation website, managing real-time competition data and official results for every event.',
    ],
  },
  {
    title: 'FEI COURSE DESIGNER EXPERIENCE',
    subtitle: 'Working with International Course Designers',
    date: '2022 – Present',
    items: [
      'Assisted Ivo Mikulič (FEI Course Designer) at multiple annual World Cup Qualifiers.',
      'Worked with Olaf Scholz (FEI Course Designer) on technical course layouts.',
    ],
  },
  {
    title: 'FEI STEWARD',
    subtitle: 'Official Steward at Competition',
    date: '2025',
    items: [
      'Participated in international and national competitions as an official FEI Level 1 Steward.',
      'Ensured adherence to animal welfare standards and fair play under Chief Steward Jani Pavlovski.',
    ],
  },
  {
    title: 'RIDING & HORSE HANDLING',
    subtitle: 'Rider and Horse Experience',
    date: '2016 – Present',
    items: [
      'Regular riding and horse handling experience.',
      'Active participant in show jumping and equestrian training.',
    ],
  },
]

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-header">
        <h2>PROFESSIONAL EXPERIENCE</h2>
        <div className="section-line"></div>
      </div>

      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <article
            className="experience-card"
            id={exp.title === 'FEI STEWARD' ? 'stewardship' : exp.title === 'RIDING & HORSE HANDLING' ? 'riding' : undefined}
            key={index}
          >
            <div className="experience-card-header">
              <div>
                <h3>{exp.title}</h3>
                <p className="experience-subtitle">{exp.subtitle}</p>
              </div>
              <span className="experience-date">{exp.date}</span>
            </div>

            <ul className="experience-list">
              {exp.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}