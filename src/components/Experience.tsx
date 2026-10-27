import { useTranslation } from 'react-i18next'
import './Experience.css'

const experienceKeys = [
  { key: 'federation', id: undefined },
  { key: 'courseDesigner', id: undefined },
  { key: 'steward', id: 'stewardship' },
  { key: 'riding', id: 'riding' },
] as const

export default function Experience() {
  const { t } = useTranslation('experience')

  return (
    <section className="experience-section" id="experience">
      <div className="section-header">
        <h2>{t('sectionTitle')}</h2>
        <div className="section-line"></div>
      </div>

      <div className="experience-grid">
        {experienceKeys.map(({ key, id }) => {
          const bullets = t(`items.${key}.bullets`, {
            returnObjects: true,
          }) as string[]

          return (
            <article className="experience-card" id={id} key={key}>
              <div className="experience-card-header">
                <div>
                  <h3>{t(`items.${key}.title`)}</h3>
                  <p className="experience-subtitle">
                    {t(`items.${key}.subtitle`)}
                  </p>
                </div>
                <span className="experience-date">
                  {t(`items.${key}.date`)}
                </span>
              </div>

              <ul className="experience-list">
                {bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}
