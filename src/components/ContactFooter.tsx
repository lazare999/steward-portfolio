import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import './ContactFooter.css'

const MAX = {
  name: 80,
  email: 120,
  message: 2000,
} as const

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function ContactFooter() {
  const { t } = useTranslation('contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '', // honeypot — bots fill this
  })
  const [sending, setSending] = useState(false)
  const [lastSentAt, setLastSentAt] = useState(0)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    const limit = MAX[name as keyof typeof MAX]
    setFormData({
      ...formData,
      [name]: limit ? value.slice(0, limit) : value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.company) return
    if (Date.now() - lastSentAt < 8000) return

    const name = formData.name.trim()
    const email = formData.email.trim()
    const message = formData.message.trim()

    if (
      name.length < 2 ||
      !isValidEmail(email) ||
      message.length < 5
    ) {
      alert(t('alerts.error'))
      return
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      alert(t('alerts.error'))
      return
    }

    setSending(true)

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          email,
          message,
          year: new Date().getFullYear(),
        },
        { publicKey }
      )

      alert(t('alerts.success'))
      setLastSentAt(Date.now())
      setFormData({ name: '', email: '', message: '', company: '' })
    } catch {
      alert(t('alerts.error'))
    } finally {
      setSending(false)
    }
  }

  return (
    <footer className="contact-footer-section" id="contact">
      <div className="footer-card">
        <div className="footer-left">
          <span className="footer-badge">{t('badge')}</span>
          <h2>{t('title')}</h2>
          <p>{t('description')}</p>
        </div>

        <div className="footer-right">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-group honeypot" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label className="visually-hidden" htmlFor="contact-name">
                {t('form.namePlaceholder')}
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder={t('form.namePlaceholder')}
                value={formData.name}
                onChange={handleChange}
                maxLength={MAX.name}
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label className="visually-hidden" htmlFor="contact-email">
                {t('form.emailPlaceholder')}
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder={t('form.emailPlaceholder')}
                value={formData.email}
                onChange={handleChange}
                maxLength={MAX.email}
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label className="visually-hidden" htmlFor="contact-message">
                {t('form.messagePlaceholder')}
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder={t('form.messagePlaceholder')}
                rows={4}
                value={formData.message}
                onChange={handleChange}
                maxLength={MAX.message}
                required
              />
            </div>

            <button
              type="submit"
              className="footer-cta-btn"
              disabled={sending}
            >
              {sending ? t('form.sending') : t('form.send')}
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        <p>{t('footer.role')}</p>
      </div>
    </footer>
  )
}
