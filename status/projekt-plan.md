# Portfolio Projekt — Projektplan

## Grundinfos
- **Repo:** `https://github.com/AgentGGNik007/Portfolio`
- **Domain:** `portfolio.framenode.net`
- **E-Mail:** `contact@framenode.net`
- **Stack:** Vite + React + TypeScript (TSX), Vanilla CSS Variables, react-i18next, MSW, Python (Backend)

---

## Projektstruktur
```
Portfolio/
├── LICENSE
├── README.md
├── .gitignore
├── status/
│   └── projekt-stand.md
├── frontend/
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── assets/
│       │   └── css/
│       ├── mocks/                  ← MSW Pseudo-Backend
│       ├── i18n/
│       │   ├── en.json
│       │   ├── de.json
│       │   ├── sections.en.json
│       │   └── sections.de.json
│       ├── pages/
│       │   ├── Home.tsx
│       │   ├── Projects.tsx
│       │   ├── Resume.tsx
│       │   ├── Contact.tsx
│       │   └── Privacy.tsx
│       └── layout/
│           └── MainLayout.tsx
└── backend/                        ← Python, später auf dem Server
    └── README.md
```

---

## Tech-Stack (festgelegt)
- **Frontend:** Vite (stable) + React + TypeScript
- **Styling:** Vanilla CSS + CSS Variables (kein Framework, kein Tailwind)
- **Mehrsprachigkeit:** react-i18next (DE/EN)
- **Content:** Markdown (via Library) für Body-Texte
- **Lokaler Datenspeicher:** localStorage (unter Cookie-Consent)
- **Pseudo-Backend lokal:** Mock Service Worker (MSW)
- **Backend (Server):** Python (Framework wird bei Umsetzung festgelegt, voraussichtlich FastAPI)
- **Routing:** react-router-dom

---

## Layout-Konzept (festgelegt)
- **MainLayout** als zentraler Wrapper (einmalig definiert)
- Topbar: Sandwich-Icon (öffnet Sidebar) + Theme-Popover-Button + Sprach-Cycle-Button
- Off-Canvas Sidebar (links)
- Footer mit Theme-Popover + Ansicht-Cycle + kontextabhängiger Navigation
- Varianten on demand (z.B. für Projektdetailseiten)
- Stil-Kontinuität zur QR-Webapp (Typografie, Schlichtheit, kein Overdesign)
- Kein Card-System

### MainLayout Props
```tsx
type MainLayoutProps = {
  pageKey: string;   // z.B. "nav.home", "nav.projects"
  children: ReactNode;
}
```

---

## Navigation / Sidebar (festgelegt)
- **Öffnen:** Sandwich-Icon in Topbar
- **Schließen:** X-Button, Esc-Taste, Klick außerhalb, Swipe nach links (Mobile)
- **Mobile Gesten:** Swipe von links nach rechts (ab Bildschirmrand ~20px) → öffnet Sidebar

### Sidebar-Inhalt (oben → unten)
1. Titel: "Portfolio — Niklas Rühl"
2. Home / Projekte / Lebenslauf / Kontakt
3. Unten: Datenschutz (kursiv, klein, Accent-Farbe)
- Theme-Cycle-Icon im Sidebar-Header (neben X)
- Sprach-Cycle-Button in der Sidebar
- Keine aktive Seite hervorgehoben (neutrale Link-Buttons)

### Sidebar-Verhalten
- **Desktop:** Overlay (blur, nicht abdunkeln) → kein Content-Shift
- **Mobile:** Content wird zur Seite geschoben + abgedunkelt + geblurrt
- Mobile Sidebar: min. 75% Viewport-Breite
- Bei Rotation hoch→quer (Tablet-Zone): Sidebar schließt automatisch
- Desktop: Sidebar darf offen bleiben bei Resize

---

## Theme-System (festgelegt)
- 4 Themes: `light`, `grey`, `dark`, `contrast`
- Steuerung via `data-theme` auf `<html>`
- Gespeichert in `localStorage` (Key: `portfolio.theme`) — unter Cookie-Consent Level A
- Default: Browser `prefers-color-scheme`

### Theme-Namen
| Key | Deutsch | Englisch |
|---|---|---|
| `light` | Hell | Light |
| `grey` | Grau | Grey |
| `dark` | Dunkel | Dark |
| `contrast` | Kontrast | Contrast |

### Theme-Switch
- **Topbar:** Popover/Flyout mit Radio-Group (Text + Icon), öffnet nach unten
- **Sidebar:** Cycle (Hell → Grau → Dunkel → Kontrast → Hell)
- **Footer:** Popover/Flyout mit Radio-Group (Text + Icon), öffnet nach oben
- **Icons:** CSS-only SVG, Outline-Stil
  - Hell: Sonne
  - Grau: Halbsonne / Horizont
  - Dunkel: Mond
  - Kontrast: Halbkreis (links hell, rechts dunkel)

### Aria-Labels (Barrierefreiheit)
- `aria-label="Design: Heller Modus aktivieren"`
- `aria-label="Design: Grauer Modus aktivieren"`
- `aria-label="Design: Dunkler Modus aktivieren"`
- `aria-label="Design: Hoher Kontrast aktivieren"`

### Farbpaletten (WCAG AAA)
**Hell** (Background `#F6F6F6`)
- Surface: `#FFFFFF` / `#F1F5F9`
- Text: `#1F2937` / `#374151` / `#4B5563`
- Link: `#1D4ED8` / Hover `#1E40AF`
- Focus: `#F59E0B`

**Dunkel** (Background `#1D1919`)
- Surface: `#262020` / `#2F2828`
- Text: `#F3F4F6` / `#E5E7EB` / `#D1D5DB`
- Link: `#93C5FD` / Hover `#BFDBFE`
- Focus: `#FBBF24`

**Grau** (Background `#838383`)
- Surface: `#9A9A9A` / `#8F8F8F`
- Text: `#111827` / `#1F2937` / `#374151`

**Kontrast** (WCAG AAA, Background `#121212`)
- Font: Atkinson Hyperlegible (selbst gehostet)
- Surface: `#1E1E1E` / `#262626`
- Text: `#FFFFFF` / `#F5F5F5`
- Link: `#00E5FF`
- Buttons: weiß auf schwarz

---

## Typografie (festgelegt)
- **Standard-Font** (alle Themes außer Kontrast): wird später festgelegt — klassisch, blog-geeignet, selbst gehostet
- **Barrierefreiheits-Font** (nur Kontrast-Theme): **Atkinson Hyperlegible** — selbst gehostet, kein Google-Request
- Beide Fonts werden lokal im Projekt gehostet (kein externer CDN-Request, DSGVO-konform)

---

## Footer (festgelegt)
- **Links:** Datum des letzten Git-Commits (Build-Zeit, automatisch)
- Theme-Popover (öffnet nach oben)
- Ansicht-Cycle (Mobile ⇄ Desktop)
- GitHub-Link (neuer Tab): `https://github.com/AgentGGNik007/Portfolio`
- E-Mail: `mailto:contact@framenode.net`
- MIT License → fetch aus `/LICENSE` → Modal
- Link zu Datenschutzerklärung
- **Kontextabhängige Navigation:** letzte zwei besuchten Seiten als Schnellnavigation (global, auf allen Seiten)

---

## Viewport / Ansicht (festgelegt)

### Breakpoints
| Zone | Breite | Layout |
|---|---|---|
| Phone | unter 768px | Mobile |
| Tablet | 768px–1199px | Mobile + Dreh-Logik |
| Desktop | 1200px+ | Desktop |

### Cookie-Level-Logik für Ansicht
**Level A — Nur Funktional**
- Tablet-Zone, Querformat → einmalige Frage "Desktop-Version verwenden?"
- Entscheidung gilt nur für aktuelle Session, wird nicht gespeichert

**Level B — Komfort**
- Wie Level A, aber Entscheidung wird in localStorage gespeichert
- Hochformat → Mobile, Querformat → gespeicherte Präferenz

**Level C — Erweitert**
- Zusätzlich User-Agent Auswertung
- Tablet im Querformat → automatisch Desktop ohne Frage
- Tablet im Hochformat → Mobile (Präferenz aus Level B gilt weiterhin)

---

## Barrierefreiheit (festgelegt, WCAG 2.1 AAA angestrebt)
- Alle interaktiven Elemente per Tastatur erreichbar
- Sichtbare Fokus-Indikatoren (Focus-Farben in allen Themes definiert)
- `aria-label` auf allen Theme- und Sprach-Buttons
- `prefers-reduced-motion`: alle Animationen (Sidebar-Slide, Transitions etc.) werden deaktiviert
- Kontrastverhältnisse WCAG AAA in allen Themes
- Kontrasttheme mit Atkinson Hyperlegible Font
- Externe Links: `target="_blank" rel="noopener noreferrer"`
- WCAG-Prüfung (axe, Lighthouse) nach Go-Live
- Accessibility Statement nach Launch

---

## i18n (DE/EN, festgelegt)
- Keine URL-Prefixe (clientseitig)
- Default: Browser-Sprache, Fallback: Englisch
- Gespeichert in localStorage — unter Cookie-Consent Level A

### Sprachumschalter
- **Topbar:** Cycle-Button
- **Sidebar:** Cycle-Button
- DE: 🇩🇪 / EN: 🇬🇧 (Union Jack)

### Key-Struktur
```
nav.home.short / nav.home.title
nav.projects.short / nav.projects.title
nav.resume.short / nav.resume.title
nav.contact.short / nav.contact.title
legal.privacy.short / legal.privacy.title
section.*.title / section.*.subtitle / section.*.body
ui.theme.label / ui.language.label / ui.view.label
app.sidebarTitle
```

### Rendering-Konvention
- `*.title` → H2
- `*.subtitle` → Lead/Meta
- `*.body` → Markdown (externe Links → neuer Tab + noopener)
- Bilder: nicht in Markdown, später via Components
- Code-Blöcke: erlaubt

---

## Cookie-System (festgelegt)

### Level A — Funktional (immer aktiv, kein Consent nötig)
- Theme-Einstellung (`portfolio.theme`)
- Sprach-Einstellung (`portfolio.language`)
- Cookie-Consent-Entscheidung selbst
- Navigations-History für Footer-Schnellnavigation (max. 2 Einträge)

### Level B — Komfort (optional, Consent nötig)
- Ansicht-Präferenz (Mobile/Desktop) für Tablet-Zone

### Level C — Erweitert (optional, Consent nötig)
- User-Agent Auswertung für automatische Geräteerkennung

### Cookie-Banner
- Erscheint beim ersten Besuch
- Drei klar beschriftete Level, einzeln togglebar
- Einstellungen jederzeit auf der Datenschutzseite änderbar
- Bei Ablehnen/Widerruf: entsprechende localStorage-Einträge werden geleert

---

## Rechtliches (festgelegt)
- Kein Impressum (nicht impressumspflichtig)
- **Datenschutzerklärung** inkl. Cookie Policy unter `https://portfolio.framenode.net/datenschutz`
- Datenschutzerklärung enthält Bereich "Cookie-Einstellungen" (Consent jederzeit änderbar)
- Datenschutzerklärung wird am Ende des Projekts geschrieben wenn alle Dienste feststehen
- Bekannte Dienste: Cloudflare, Contabo, Brevo (SMTP)

---

## Offene Punkte
- Seiteninhalt (Home, Projekte, Lebenslauf, Kontakt) noch nicht geschrieben
- Standard-Font noch nicht festgelegt
- Datenschutzerklärung wird am Ende erstellt
- Backend (Python) wird nach Frontend-Fertigstellung umgesetzt
- WCAG-Prüfung (axe, Lighthouse) nach Go-Live
- Accessibility Statement nach Launch
- Bildquellen (extern) noch offen — DSGVO-Relevanz bei Bedarf prüfen
