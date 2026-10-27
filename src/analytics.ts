declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

/** GA4 ID — matches the snippet in index.html */
export const GA_MEASUREMENT_ID = 'G-QFXJJKT072'

function whenGtagReady(fn: () => void, attempts = 40) {
  if (typeof window.gtag === 'function') {
    fn()
    return
  }
  if (attempts <= 0) return
  window.setTimeout(() => whenGtagReady(fn, attempts - 1), 50)
}

/**
 * SPA route change page_view.
 * Initial page_view is sent by the gtag snippet in index.html.
 */
export function trackPageView(path: string, title?: string) {
  whenGtagReady(() => {
    window.gtag!('event', 'page_view', {
      page_path: path,
      page_title: title ?? document.title,
      page_location: window.location.href,
      send_to: GA_MEASUREMENT_ID,
    })
  })
}
