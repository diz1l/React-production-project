# React Production Project

> ⚠️ **Work in progress** — not ready for production deployment.

---

## Tech Stack

| Layer | Technologies |
|---|---|
| UI | React 17, TypeScript 5 |
| Build | Webpack 5, Babel |
| Styles | SCSS Modules, CSS Custom Properties (design tokens) |
| Routing | react-router-dom v6 (lazy routes) |
| State | Redux Toolkit |
| i18n | i18next (ru / en) |
| Testing | Jest + React Testing Library, Loki (screenshots) |
| Dev environment | Storybook 10 |
| CI | GitHub Actions |

---

## Project Structure

```
src/
├── app/                        # Entry point, providers, global styles
│   ├── providers/
│   │   ├── router/             # AppRouter, routeConfig
│   │   └── ThemeProvider/      # Theme context (light / dark)
│   └── styles/                 # index.scss, design tokens, themes
│
├── pages/                      # Pages (lazy-loaded)
│   ├── MainPage/
│   ├── AboutPages/
│   └── NotFoundPage/
│
├── widgets/                    # Large UI blocks
│   ├── Navbar/                 # Top navigation (logo, language, theme)
│   ├── SideBar/                # Side panel with navigation links
│   ├── PageLoader/             # Full-screen loader (Suspense fallback)
│   ├── ErrorPage/              # UI for ErrorBoundary crash
│   └── ThemeBtn/               # Theme toggle button (legacy, unused)
│
└── shared/                     # Reusable code
    ├── UI/
    │   ├── Button/
    │   ├── AppLink/
    │   └── Loader/             # CSS ellipsis animation
    ├── lib/
    │   └── classNames/         # className builder utility
    ├── config/
    │   ├── routerConfig/       # AppConfig enum + routeConfig
    │   ├── i18n/               # i18n instance + i18nForTests
    │   └── storybook/          # Decorators: Theme, Style, Router
    ├── img/
    └── tests/
        └── renderWithTranslation/
```

---

## Architecture Notes

**Design tokens** — all colors, spacing and radii live in CSS Custom Properties (`:root` in `global.scss`). Themes override them via `.light-mode` / `.dark-mode` classes on the root element.

**Lazy loading** — pages are loaded via `React.lazy`. The fallback at both the app and router level is `<PageLoader />` (centered spinner).

**CSS Modules** — every component is isolated. The `classNames()` utility merges the base class, conditional modifiers, and extra class names.

**i18n** — two languages (ru / en), toggled at runtime via the Navbar. Tests use a dedicated `i18nForTests` instance with an empty resource bundle.

---

## CI Pipeline

```
push: main, develop  |  pull_request: main
              ↓
  checkout → setup-node (20.x) → npm ci
              ↓
  build:prod → lint:ts → lint:scss → test:unit → storybook:build
```

Dependencies are installed exclusively via `npm ci`.

---

## Getting Started

```bash
npm ci

# Dev server
npm run start

# Production build
npm run build:prod

# Storybook
npm run storybook

# Unit tests
npm run test:unit
```

---

## Known Limitations

- No authentication / protected routes
- No global ErrorBoundary wired into the router
- `ThemeSwitcher` widget duplicates logic already built into `Navbar`
- Loki screenshot tests require reference snapshots committed to the repo
