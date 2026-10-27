import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../analytics'

export default function AnalyticsListener() {
  const location = useLocation()

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}${location.hash}`)
  }, [location.pathname, location.search, location.hash])

  return null
}
