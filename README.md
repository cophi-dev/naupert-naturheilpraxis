# Naturheilpraxis Naupert – Website

Website der Naturheilpraxis Naupert (Heilpraktiker Reinhard Naupert, Hamburg-Alsterdorf).
Next.js (App Router) + Tailwind CSS, vollständig statisch.

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # lint (warnings = errors) + typecheck + jest + build
```

## Struktur

- `lib/site.ts` – Stammdaten (Name, Adresse, Telefon, E-Mail) und `SITE_URL` für Canonicals, Sitemap, robots und JSON-LD. Wird zur Build-Zeit mit zod validiert.
- `lib/content.ts`, `lib/agb.ts` – Inhalte aus naupert.de (Praxisangebot, Vita, Anfahrt, AGB).
- `components/home/*` – Abschnitte der Startseite (Hero, Willkommen, Praxisangebot, Person, Anfahrt, Kontakt).
- `app/person`, `app/impressum`, `app/datenschutz`, `app/agb` – Unterseiten.
- `app/opengraph-image.tsx`, `app/icon.tsx`, `app/sitemap.ts`, `app/robots.ts` – SEO-Dateien.

Keine Cookies, keine Tracker, keine eingebetteten Karten; die Schrift (Inter Tight) wird über `next/font` selbst gehostet.

## Domain umstellen

`SITE_URL` in `lib/site.ts` ändern – Canonicals, Open Graph, Sitemap, robots.txt und JSON-LD übernehmen den Wert automatisch.
