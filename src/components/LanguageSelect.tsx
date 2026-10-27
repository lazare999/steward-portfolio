import { useEffect, useId, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  languages,
  isLanguageCode,
  flagUrl,
  type LanguageCode,
} from '../languages'

function FlagIcon({
  flagCode,
  label,
  size = 18,
}: {
  flagCode: string
  label: string
  size?: number
}) {
  return (
    <img
      className="lang-flag"
      src={flagUrl(flagCode, 40)}
      srcSet={`${flagUrl(flagCode, 40)} 1x, ${flagUrl(flagCode, 80)} 2x`}
      width={size}
      height={Math.round(size * 0.75)}
      alt=""
      title={label}
      loading="lazy"
      decoding="async"
    />
  )
}

export default function LanguageSelect() {
  const { t, i18n } = useTranslation('common')
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listId = useId()

  const selected =
    languages.find((l) => l.code === i18n.language) ?? languages[0]

  const handleSelect = (code: LanguageCode) => {
    if (!isLanguageCode(code)) return
    void i18n.changeLanguage(code)
    navigate(`/${code}${location.hash}`, { replace: true })
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className={`lang-dropdown${open ? ' is-open' : ''}`} ref={rootRef}>
      <button
        type="button"
        className="lang-dropdown-trigger"
        aria-label={t('lang.switchTo')}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((prev) => !prev)}
      >
        <FlagIcon flagCode={selected.flagCode} label={selected.label} />
        <span className="lang-dropdown-label">{selected.label}</span>
        <svg
          className="lang-dropdown-chevron"
          viewBox="0 0 12 8"
          width="10"
          height="7"
          aria-hidden="true"
        >
          <path
            d="M1.5 1.5L6 6l4.5-4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          className="lang-dropdown-menu"
          id={listId}
          role="listbox"
          aria-label={t('lang.switchTo')}
        >
          {languages.map((lang) => {
            const isActive = lang.code === selected.code

            return (
              <li key={lang.code} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  className={`lang-dropdown-option${isActive ? ' is-active' : ''}`}
                  onClick={() => handleSelect(lang.code)}
                >
                  <FlagIcon flagCode={lang.flagCode} label={lang.label} />
                  <span>{lang.label}</span>
                  {isActive && (
                    <svg
                      className="lang-dropdown-check"
                      viewBox="0 0 16 16"
                      width="14"
                      height="14"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.5 8.5l3 3 6-7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
