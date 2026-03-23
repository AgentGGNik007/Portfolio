import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projekte" element={<Projects />} />
        <Route path="/lebenslauf" element={<Resume />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/datenschutz" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App