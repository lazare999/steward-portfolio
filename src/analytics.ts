const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

function loadGtag() {
  if (!GA_ID || document.getElementById('ga-gtag')) return

  const script = document.createElement('script')
  script.id = 'ga-gtag'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args)
  }

  window.gtag('js', new Date())
  window.gtag('config', GA_ID, {
    send_page_view: false,
    anonymize_ip: true,
  })
}

export function initAnalytics() {
  if (!GA_ID || typeof window === 'undefined') return

  const start = () => loadGtag()

  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(start, { timeout: 3000 })
  } else {
    setTimeout(start, 1500)
  }
}

export function trackPageView(path: string, title?: string) {
  if (!GA_ID || typeof window.gtag !== 'function') return

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title ?? document.title,
    page_location: window.location.href,
  })
}
