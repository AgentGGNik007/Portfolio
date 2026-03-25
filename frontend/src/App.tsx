import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import { useLanguageRoute } from './hooks/useLanguageRoute'


function RouterContent() {
  const { i18n } = useTranslation()
  const de = i18n.language === 'de'
  useLanguageRoute()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={de ? '/projekte' : '/projects'} element={<Projects />} />
      <Route path={de ? '/lebenslauf' : '/resume'} element={<Resume />} />
      <Route path={de ? '/kontakt' : '/contact'} element={<Contact />} />
      <Route path={de ? '/datenschutz' : '/privacy'} element={<Privacy />} />
    </Routes>
  )
}


 function App() {
  return (
    <BrowserRouter>
      <RouterContent />
    </BrowserRouter>
  )
}
  


export default App