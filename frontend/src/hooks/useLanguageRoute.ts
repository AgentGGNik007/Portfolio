import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const routeMap: Record<string, Record<string, string>> = {
  de: {
    '/projects': '/projekte',
    '/resume': '/lebenslauf',
    '/contact': '/kontakt',
    '/privacy': '/datenschutz',
  },
  en: {
    '/projekte': '/projects',
    '/lebenslauf': '/resume',
    '/kontakt': '/contact',
    '/datenschutz': '/privacy',
  },
}

export function useLanguageRoute() {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const map = routeMap[i18n.language]
    if (!map) return
    const translated = map[location.pathname]
    if (translated) navigate(translated, { replace: true })
  }, [i18n.language, location.pathname, navigate])
}