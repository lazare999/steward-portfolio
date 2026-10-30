import { Fragment, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import './Experience.css'

const experienceKeys = [
  { key: 'federation', id: undefined },
  { key: 'courseDesigner', id: undefined },
  { key: 'steward', id: 'stewardship' },
  { key: 'riding', id: 'riding' },
] as const

const richTokenRegex = /(\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)|\*\*([^*]+)\*\*)/g

function renderRichText(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  richTokenRegex.lastIndex = 0
  while ((match = richTokenRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(
        <Fragment key={`t-${key++}`}>
          {text.slice(lastIndex, match.index)}
        </Fragment>,
      )
    }

    if (match[2] && match[3]) {
      nodes.push(
        <a
          key={`a-${key++}`}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          className="experience-inline-link"
        >
          {match[2]}
        </a>,
      )
    } else if (match[4]) {
      nodes.push(<strong key={`b-${key++}`}>{match[4]}</strong>)
    }

    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    nodes.push(
      <Fragment key={`t-${key++}`}>{text.slice(lastIndex)}</Fragment>,
    )
  }

  return nodes
}

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
                  <li key={i}>{renderRichText(item)}</li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}
