# Projekt-Stand — Lastenheft

## Stand: 25.03.2026

---

## Umgesetzt

### Projektstruktur
- Vite + React + TypeScript Projekt aufgesetzt
- Ordnerstruktur angelegt (`frontend/`, `backend/`, `status/`)
- MSW, react-router-dom, react-i18next installiert
- `commit.sh` Script für vereinfachtes Commiten

### Theme-System
- 4 Themes: Hell, Grau, Dunkel, Kontrast (WCAG AAA)
- CSS Variables für alle Themes in `theme.css`
- `theme-init.ts` verhindert Theme-Flackern beim Laden
- `prefers-color-scheme` als Default
- Gespeichert in `localStorage` (`portfolio.theme`)

### Layout
- `MainLayout` als zentraler Wrapper
- Topbar mit Sandwich-Icon, Seitentitel, Sprach-Cycle, Theme-Cycle
- Off-Canvas Sidebar mit Navigation, Theme-Cycle, Sprach-Cycle
- Footer mit Theme-Popover, GitHub-Link, Kontakt, Datenschutz, Build-Datum
- Build-Datum wird automatisch aus letztem Git-Commit gezogen (Vite Build-Zeit)

### Navigation / Sidebar
- Öffnen per Sandwich-Icon
- Schließen per X-Button, Esc-Taste, Overlay-Klick
- Swipe-Geste (Mobile): von links nach rechts öffnet, rechts nach links schließt
- Body-Scroll wird gesperrt wenn Sidebar offen

### Theme-Switch
- Topbar: Cycle (Hell → Grau → Dunkel → Kontrast → Hell)
- Sidebar: Cycle (gleiche Reihenfolge)
- Footer: Popover mit Auswahl + aktivem Theme hervorgehoben
- Dynamische Icons je nach aktivem Theme (`ThemeIcon` Komponente)

### Mehrsprachigkeit (DE/EN)
- react-i18next konfiguriert
- Sprachdateien: `de.json`, `en.json`, `sections.de.json`, `sections.en.json`
- Browser-Sprache als Default, Fallback Englisch
- Gespeichert in `localStorage` (`portfolio.language`)
- Sprach-Cycle in Topbar und Sidebar (🇩🇪 / 🇬🇧)
- Dynamisches Routing je nach Sprache (`/projekte` ↔ `/projects` etc.)
- Automatische Weiterleitung beim Sprachwechsel (`useLanguageRoute`)

### Barrierefreiheit
- `aria-label` auf allen interaktiven Elementen
- `aria-expanded` auf Sidebar und Popover-Buttons
- `aria-hidden` auf Sidebar wenn geschlossen
- `prefers-reduced-motion` — alle Animationen werden deaktiviert
- `:focus-visible` Styles für alle Themes
- `sr-only` Klasse für Screen-Reader Texte

### Mock-Backend (MSW)
- MSW initialisiert, läuft nur in Dev-Umgebung
- `GET /api/projects?lang=de|en` — Projektliste zweisprachig
- `GET /api/resume?lang=de|en` — Lebenslauf zweisprachig
- `POST /api/contact` — Kontaktformular Mock

### Seiten
- **Home** — Platzhalter
- **Projekte** — Grid-Layout, zweispaltig auf Desktop, unterteilt in "Abgeschlossen" und "In Entwicklung"
- **Lebenslauf** — strukturiertes CV-Layout mit Berufserfahrung, Ausbildung, Eigeninitiative, Sprachen
- **Kontakt** — Formular mit Name, E-Mail, Nachricht, Status-Feedback
- **Datenschutz** — Platzhalter

---

## Offen

- Cookie-Banner + Consent-System (3 Level)
- Datenschutzerklärung
- Home-Seite Inhalt
- Kontextabhängige Footer-Navigation (letzte 2 Seiten)
- MIT License Modal im Footer
- Ansicht-Cycle (Mobile ⇄ Desktop)
- Tablet-Zone Dreh-Logik
- Admin-Panel (nach Backend)
- Python Backend
- Deployment + Nginx Konfiguration
- WCAG-Prüfung (axe, Lighthouse)
- Accessibility Statement
- Datenschutzerklärung (nach Festlegung aller Dienste)
- Standard-Font festlegen
