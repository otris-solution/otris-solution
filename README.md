# OTRIS.SOLUTION

Maintainable public website source for the OTRIS architecture, gateway, core flows, and clinical-wall ecosystem.

## Principle

> Source code implements OTRIS architecture. Source code does not define OTRIS architecture.

## Current scope

- Homepage-only implementation
- React + Vite + JavaScript
- Plain CSS with local design tokens
- Local structured content for architecture, open source, and OTRIS family sections
- Graceful placeholders for founder visuals that are still pending

## Tech

- React 18
- Vite 5
- JavaScript
- Plain CSS

## Local development

```bash
npm install
npm run dev
```

## Production check

```bash
npm run build
```

## Asset status

- `public/assets/images/og_cover.jpg` copied from the legacy reference folder
- `human-expertise.jpg` not provided yet → rendered as `ASSET PENDING`
- `the-bridge.jpg` not provided yet → rendered as `ASSET PENDING`

## Guardrails

- Legacy `otris.solution/` files remain untouched reference authority until founder cutover approval.
- This project does not add backend services, analytics, authentication, device connectivity, or deployment wiring.
- Open source links remain local planned entries until approved destinations exist.
