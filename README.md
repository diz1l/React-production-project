# React Production Project

> ⚠️ **Work in progress** — not ready for production deployment.

---

## Tech Stack

| Layer | Technologies |
|---|---|
| UI | React 17, TypeScript 5 |
| Build | Webpack 5, Babel 7 |
| Styles | SCSS Modules, CSS Custom Properties (design tokens) |
| Routing | react-router-dom v6 (lazy routes) |
| State | Redux Toolkit |
| i18n | i18next (ru / en) |
| Testing | Jest + React Testing Library + @testing-library/user-event |
| Dev environment | Storybook 10 |
| Code quality | ESLint (airbnb), Stylelint |
| CI | GitHub Actions |

---

## Project Structure

```
src/
├── app/                          # Entry point, providers, global styles
│   ├── providers/
│   │   ├── ErrorBoundary/        # Error boundary (catches runtime crashes)
│   │   ├── router/               # AppRouter, routeConfig
│   │   ├── StoreProvider/        # Redux store setup
│   │   └── ThemeProvider/        # Theme context (light / dark)
│   ├── styles/
│   │   ├── themes/               # .light-mode / .dark-mode overrides
│   │   └── variables/            # CSS Custom Properties (design tokens)
│   └── types/                    # Global app types
│
├── pages/                        # Pages (lazy-loaded)
│   ├── MainPage/
│   ├── AboutPages/
│   └── NotFoundPage/
│
├── widgets/                      # Large composed UI blocks
│   ├── Navbar/                   # Top navigation (logo, lang toggle, theme)
│   ├── SideBar/                  # Side panel with navigation links
│   ├── PageLoader/               # Full-screen loader (Suspense fallback)
│   ├── ErrorPage/                # UI rendered by ErrorBoundary
│   ├── ThemeBtn/                 # Theme toggle button
│   └── LangSwich/                # Language switcher (ru / en)
│
├── entities/
│   └── Counter/                  # Example domain entity (model + UI)
│
├── features/
│   ├── AuthByUsername/           # Login form (UI only)
│   └── RegisterByUsername/       # Registration form (UI only)
│
├── processes/                    # Business processes
│
└── shared/                       # Reusable code
    ├── UI/
    │   ├── Button/
    │   ├── AppLink/              # Styled router link
    │   ├── Loader/               # CSS ellipsis animation
    │   ├── Modal/                # Modal window component
    │   └── Portal/               # React Portal (used by Modal)
    ├── lib/
    │   └── classNames/           # className builder utility
    ├── config/
    │   ├── routerConfig/         # AppConfig enum + routeConfig
    │   ├── i18n/                 # i18n instance + i18nForTests
    │   └── storybook/            # Decorators: Theme, Style, Router
    ├── img/
    └── tests/
        └── renderWithTranslation/
```

---

## Configuration

```
config/
├── build/          # Webpack builders (loaders, plugins, resolvers, devServer)
├── jest/           # Jest config (ts-jest, jsdom, path aliases, mocks)
└── storybook/      # Storybook main.js + preview (webpack aliases, SCSS, SVG)
```

Root-level configs: `tsconfig.json`, `babel.config.json`, `.eslintrc.js`, `.stylelintrc.json`, `webpack.config.ts`.

---

## Architecture Notes

**Feature Sliced Design** — layers ordered by dependency direction:
`app → pages → widgets → features → entities → shared`. No upward imports.

**Design tokens** — all colors, spacing and radii live in CSS Custom Properties (`:root`). Themes override them via `.light-mode` / `.dark-mode` classes on the root element.

**Lazy loading** — pages are loaded via `React.lazy`. Fallback at both the app and router level is `<PageLoader />`.

**CSS Modules** — every component is isolated. The `classNames()` utility merges the base class, conditional modifiers, and extra class names.

**Modal / Portal** — `<Modal>` renders its content via `<Portal>` directly into `document.body`, avoiding z-index stacking issues.

**i18n** — two languages (ru / en), toggled at runtime via the Navbar. Tests use a dedicated `i18nForTests` instance with `useSuspense: false`.

**Path aliases** — configured in `tsconfig.json`, `webpack.config.ts`, `.eslintrc.js`, and Storybook webpack config. Aliases: `app/*`, `pages/*`, `widgets/*`, `features/*`, `entities/*`, `shared/*`.

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

# Dev server (port 3000)
npm run start

# Production build
npm run build:prod

# Unit tests
npm run test:unit

# Storybook
npm run storybook
```

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run start` | Dev server on port 3000 |
| `npm run build:prod` | Production Webpack build → `build/` |
| `npm run build:dev` | Development Webpack build |
| `npm run lint:ts` | ESLint for `.ts` / `.tsx` files |
| `npm run lint:ts:fix` | ESLint with auto-fix |
| `npm run lint:scss` | Stylelint for `.scss` files |
| `npm run lint:scss:fix` | Stylelint with auto-fix |
| `npm run test:unit` | Jest unit tests |
| `npm run storybook` | Storybook dev server (port 6006) |
| `npm run storybook:build` | Build static Storybook → `storybook-static/` |

---

## Known Limitations

- No authentication / protected routes
- No global ErrorBoundary wired into the router yet
- `ThemeBtn` widget duplicates theme logic already present in `Navbar`
- `processes/` layer is an empty placeholder
