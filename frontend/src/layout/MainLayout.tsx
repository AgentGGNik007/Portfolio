/* eslint-disable @typescript-eslint/no-unused-vars */
import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useSidebar }  from '../hooks/useSidebar'
import './MainLayout.css'

type MainLayoutProps = {
  pageKey: string
  children: ReactNode
}

function MainLayout({ pageKey: __pageKey, children }: MainLayoutProps) {
  const { isOpen, open , close, } = useSidebar()
  return (
    <div className="layout">

      {/* Topbar */}
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

        <span className="topbar-title">Portfolio – Niklas Rühl</span>

        <div className="topbar-actions">
          {/* Sprach-Cycle */}
          <button
            className="btn-ghost topbar-lang-btn"
            aria-label="Sprache wechseln"
          >
            🇩🇪
          </button>

          {/* Theme-Popover */}
          <button
            className="btn-ghost topbar-theme-btn"
            aria-label="Design: Dunkler Modus aktiv"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" width="24" height="24" aria-hidden="true">
              <g transform="rotate(15 12 12)">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z"/>
              </g>
            </svg>
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <nav
        id="sidebar"
        className={`sidebar${isOpen ? ' is-open' : ''}`}
        role="navigation"
        aria-label="Hauptnavigation"
        aria-hidden={!isOpen}
      >
        <div className="sidebar-header">
          <span className="sidebar-title">Portfolio — Niklas Rühl</span>
          <div className="sidebar-header-actions">
            <button className="btn-ghost sidebar-theme-btn" aria-label="Design: Dunkler Modus aktiv">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" width="24" height="24" aria-hidden="true">
                <g transform="rotate(15 12 12)">
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z"/>
                </g>
              </svg>
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
          <a href="/datenschutz" className="sidebar-legal-link">Datenschutz</a>
        </div>
      </nav>

      {/* Overlay */}
      <div 
        className={`sidebar-overlay${isOpen ? ' is-visible' : ''}`}
        aria-hidden="true" 
        onClick={close}
      />

      {/* Hauptinhalt */}
      <main className="main-content" id="main-content" tabIndex={-1}>
        {children}
      </main>

      {/* Footer */}
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
          {/* Theme-Popover */}
          <div className="footer-theme" role="group" aria-label="Design wählen">
            <button
              id="theme-menu-toggle"
              className="btn-ghost footer-theme-btn"
              aria-label="Design: Dunkler Modus aktiv"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" width="20" height="20" aria-hidden="true">
                <g transform="rotate(15 12 12)">
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z"/>
                </g>
              </svg>
              <span className="footer-theme-label">Dunkel</span>
            </button>

            <div id="theme-menu" className="theme-menu" role="menu">
              {[
                { key: 'light', label: 'Hell' },
                { key: 'grey', label: 'Grau' },
                { key: 'dark', label: 'Dunkel' },
                { key: 'contrast', label: 'Kontrast' },
              ].map((t) => (
                <button
                  key={t.key}
                  className="theme-menu-item"
                  role="menuitem"
                  data-theme={t.key}
                  aria-label={`Design: ${t.label} aktivieren`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default MainLayout