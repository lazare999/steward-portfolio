import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './i18n'
import './index.css'
import App from './App.tsx'
import AnalyticsListener from './components/AnalyticsListener'
import { getDefaultLanguage, isLanguageCode } from './languages'

function RootRedirect() {
  return <Navigate to={`/${getDefaultLanguage()}`} replace />
}

function LangGuard() {
  return (
    <>
      <AnalyticsListener />
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/:lang" element={<App />} />
        <Route path="*" element={<RootRedirect />} />
      </Routes>
    </>
  )
}

const pathLang = window.location.pathname.split('/').filter(Boolean)[0]
if (pathLang && isLanguageCode(pathLang)) {
  document.documentElement.lang = pathLang
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LangGuard />
    </BrowserRouter>
  </StrictMode>,
)
