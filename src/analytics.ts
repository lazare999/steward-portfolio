// Measurement ID is public by design (same as Google’s HTML snippet).
const GA_ID =
  (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) ||
  'G-QFXJJKT072'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

let configured = false
const pendingPageViews: Array<{ path: string; title?: string }> = []

function flushPending() {
  while (pendingPageViews.length > 0) {
    const next = pendingPageViews.shift()
    if (next) sendPageView(next.path, next.title)
  }
}

function sendPageView(path: string, title?: string) {
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title ?? document.title,
    page_location: window.location.href,
  })
}

function loadGtag() {
  if (!GA_ID || configured) return

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args)
  }

  window.gtag('js', new Date())
  window.gtag('config', GA_ID, {
    send_page_view: true,
  })

  if (!document.getElementById('ga-gtag')) {
    const script = document.createElement('script')
    script.id = 'ga-gtag'
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`
    document.head.appendChild(script)
  }

  configured = true
  flushPending()
}

export function initAnalytics() {
  if (!GA_ID || typeof window === 'undefined') return
  loadGtag()
}

export function trackPageView(path: string, title?: string) {
  if (!GA_ID) return

  if (!configured || typeof window.gtag !== 'function') {
    pendingPageViews.push({ path, title })
    loadGtag()
    return
  }

  sendPageView(path, title)
}
