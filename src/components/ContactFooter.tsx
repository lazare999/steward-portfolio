import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './ContactFooter.css'

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [sending, setSending] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setSending(true)

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        year: new Date().getFullYear()
      },
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      }
    )

    alert('Message sent successfully!')

    setFormData({
      name: '',
      email: '',
      message: ''
    })
  } catch (error) {
    console.error('EmailJS error:', error)
    alert('Message could not be sent. Please try again.')
  } finally {
    setSending(false)
  }
}

  return (
    <footer className="contact-footer-section" id="contact">
      <div className="footer-card">
        <div className="footer-left">
          <span className="footer-badge">
            READY FOR NEW CHALLENGES
          </span>

          <h2>
            Ready for Any Equestrian Vacancy & Collaboration
          </h2>

          <p>
            If you need an experienced and dedicated professional in event
            organisation, arena management, and FEI stewardship, feel free to
            send a message directly.
          </p>
        </div>

        <div className="footer-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="footer-cta-btn"
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Lazare Osiashvili. All rights reserved.
        </p>
        <p>FEI Level 1 Steward • Jumping</p>
      </div>
    </footer>
  )
}