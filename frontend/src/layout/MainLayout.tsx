/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useSidebar } from '../hooks/useSidebar'
import { useTheme } from '../hooks/useTheme'
import { ThemeIcon } from '../assets/components/ThemeIcon'
import './MainLayout.css'

type MainLayoutProps = {
  pageKey: string
  children: ReactNode
}

function MainLayout({ pageKey: __pageKey, children }: MainLayoutProps) {
  const { isOpen, open, close } = useSidebar()
  const { theme, setTheme, cycleTheme } = useTheme()
  const [themePopoverOpen, setThemePopoverOpen] = useState(false)

  const themeLabel = (key: string) => {
    if (key === 'light') return 'Hell'
    if (key === 'grey') return 'Grau'
    if (key === 'dark') return 'Dunkel'
    if (key === 'contrast') return 'Kontrast'
    return key
  }

  return (
    <div className="layout">

      <header className="topbar" role="banner">
        <button
          className="topbar-menu-btn btn-ghost"
          aria-label="Navigation öffnen"
          aria-expanded={isOpen}
          aria-controls="sidebar"
          onClick={open}
        >
          <span className="sr-only">Menü</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" width="24" height="24" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>

        <span className="topbar-title">Portfolio - Niklas Rühl</span>

        <div className="topbar-actions">
          <button className="btn-ghost topbar-lang-btn" aria-label="Sprache wechseln">
            🇩🇪
          </button>
          <button
            className="btn-ghost topbar-theme-btn"
            aria-label={`Design wechseln: ${themeLabel(theme)} aktiv`}
            onClick={cycleTheme}
          >
            <ThemeIcon theme={theme} size={24} />
          </button>
        </div>
      </header>

      <nav
        id="sidebar"
        className={`sidebar${isOpen ? ' is-open' : ''}`}
        role="navigation"
        aria-label="Hauptnavigation"
        aria-hidden={!isOpen}
      >
        <div className="sidebar-header">
          <span className="sidebar-title">Portfolio - Niklas Rühl</span>
          <div className="sidebar-header-actions">
            <button
              className="btn-ghost sidebar-theme-btn"
              aria-label={`Design wechseln: ${themeLabel(theme)} aktiv`}
              onClick={cycleTheme}
            >
              <ThemeIcon theme={theme} size={24} />
            </button>
            <button className="btn-ghost sidebar-close-btn" aria-label="Navigation schließen" onClick={close}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" width="24" height="24" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        <ul className="sidebar-nav" role="list">
          <li><Link to="/" className="sidebar-link" onClick={close}>Home</Link></li>
          <li><Link to="/projekte" className="sidebar-link" onClick={close}>Projekte</Link></li>
          <li><Link to="/lebenslauf" className="sidebar-link" onClick={close}>Lebenslauf</Link></li>
          <li><Link to="/kontakt" className="sidebar-link" onClick={close}>Kontakt</Link></li>
        </ul>

        <div className="sidebar-footer">
          <button className="btn-ghost sidebar-lang-btn" aria-label="Sprache wechseln">
            🇩🇪
          </button>
          <Link to="/datenschutz" className="sidebar-legal-link" onClick={close}>Datenschutz</Link>
        </div>
      </nav>

      <div
        className={`sidebar-overlay${isOpen ? ' is-visible' : ''}`}
        aria-hidden="true"
        onClick={close}
      />

      <main className="main-content" id="main-content" tabIndex={-1}>
        {children}
      </main>

      <footer className="app-footer" role="contentinfo">
        <div className="footer-left">
          <span className="footer-date">Stand: {__BUILD_DATE__}</span>
          <a
            href="https://github.com/AgentGGNik007/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository (öffnet in neuem Tab)"
          >
            GitHub
          </a>
          <Link to="/kontakt">Kontakt</Link>
          <Link to="/datenschutz">Datenschutz</Link>
        </div>

        <div className="footer-right">
          <div className="footer-theme" role="group" aria-label="Design wählen">
            <button
              className="btn-ghost footer-theme-btn"
              aria-label={`Design wechseln: ${themeLabel(theme)} aktiv`}
              aria-haspopup="true"
              aria-expanded={themePopoverOpen}
              onClick={() => setThemePopoverOpen((prev) => !prev)}
            >
              <ThemeIcon theme={theme} size={20} />
              <span className="footer-theme-label">{themeLabel(theme)}</span>
            </button>

            {themePopoverOpen && (
              <div className="theme-menu is-open" role="menu">
                {[
                  { key: 'light', label: 'Hell' },
                  { key: 'grey', label: 'Grau' },
                  { key: 'dark', label: 'Dunkel' },
                  { key: 'contrast', label: 'Kontrast' },
                ].map((t) => (
                  <button
                    key={t.key}
                    className={`theme-menu-item${theme === t.key ? ' is-active' : ''}`}
                    role="menuitem"
                    aria-label={`Design: ${t.label} aktivieren`}
                    onClick={() => {
                      setTheme(t.key as 'light' | 'grey' | 'dark' | 'contrast')
                      setThemePopoverOpen(false)
                    }}
                  >
                    <ThemeIcon theme={t.key} size={18} />
                    {t.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </footer>

    </div>
  )
}

export default MainLayout
