# Jetski Lefkada Rentals — CLAUDE.md

## Project Overview

Kristina's Jetski-Vermietung auf Lefkada, Griechenland.
Live-Domain: `jetski-lefkada-rentals.com`
Business: Saisonbetrieb April–Oktober, aktuell Buchung via WhatsApp + Telefon.
WhatsApp: `+30 695 561 2777` (Kontakt in `src/components/WhatsAppFab.astro` und `src/components/Footer.astro` pflegen)

## Tech Stack

- **Framework**: Astro v5.1.0 (islands architecture)
- **UI**: React 18.3.1 (nur für interaktive Inseln)
- **Styling**: Tailwind CSS v4.0.0
- **Animation**: Motion v11.15.0, Lenis v1.1.18 (smooth scroll)
- **Types**: TypeScript (strict mode)
- **Dev-Port**: 4330

## Commands

```bash
npm run dev      # http://localhost:4330
npm run build    # Production-Build → dist/
npm run preview  # Build lokal vorschauen
```

## Architecture

```
src/
├── pages/
│   ├── index.astro           # Hauptseite (Produktion)
│   ├── v1.astro              # Design-Variante 1 (Standard)
│   ├── v2.astro              # Design-Variante 2 (Azure/Blau)
│   └── v3.astro              # Design-Variante 3 (Sunset/Warm) ← bevorzugt
├── components/
│   ├── Navbar.astro
│   ├── Hero.astro
│   ├── FleetScroll.astro     # Horizontale Jetski-Galerie
│   ├── HowItWorks.astro
│   ├── UspTrio.astro
│   ├── TrustBar.astro
│   ├── Testimonials.astro
│   ├── Gallery.astro
│   ├── Faq.astro
│   ├── CtaFinal.astro
│   ├── WhatsAppFab.astro     # Floating WhatsApp Button + Mobile Sticky CTA
│   ├── VariationSwitcher.astro
│   └── Footer.astro
├── layouts/
│   ├── Layout.astro          # Standard-Layout
│   └── LayoutBare.astro      # Minimales Layout
├── data/
│   ├── jetskis.ts            # Flotte: 4 Modelle mit Preisen + Specs
│   └── testimonials.ts       # Kundenbewertungen
└── styles/
    ├── global.css            # Basis-Styles
    ├── v2-azure.css          # Azure-Thema
    └── v3-sunset.css         # Sunset-Thema ← aktives Thema
```

## Design System

**Aktives Thema**: V3 Sunset (warm, mediterran) — `src/styles/v3-sunset.css`
**Fonts**: Fraunces (Display/Serif), Instrument Sans (Body), JetBrains Mono (Akzente)
**Color tokens**: `ink-*` (dunkel), `paper-*` (hell), `coral-*` (CTA/Akzent), `brass-*` (Borders)

## Fleet (src/data/jetskis.ts)

| Name | Modell | PS | Preis/Std |
|---|---|---|---|
| The Cruiser | Yamaha VX Cruiser HO | 180 | €95 |
| The Challenger | Sea-Doo RXT-X 300 | 300 | €140 |
| The Voyager | Yamaha FX SVHO | 250 | €120 |
| The Acrobat | Sea-Doo Spark Trixx | 90 | €70 |

## Business Requirements

### Sprachen (geplant — noch nicht implementiert)
- `en` — Englisch (primär, internationale Touristen)
- `de` — Deutsch
- `el` — Griechisch

Bei Umsetzung: Astro's eingebautes [i18n Routing](https://docs.astro.build/en/guides/internationalization/) verwenden.

### Buchungssystem-Roadmap (Priorität: vor Saison Mai 2026)
1. **WhatsApp-Weiterleitung** — vorhanden, ausbaubar (`WhatsAppFab.astro`)
2. **Anfrage-Formular** — mit E-Mail-Benachrichtigung (Resend oder Formspree empfohlen)
3. **Kalender / Verfügbarkeit** — freie Termine pro Jetski anzeigen
4. **Online-Bezahlung** — Stripe Checkout empfohlen

## Deployment

**Empfehlung: Vercel** — beste Astro-Integration, kostenlos für kleine Projekte, auto-deploy bei Git Push.

```bash
# Einmalig einrichten:
npm i -g vercel
vercel

# Danach: jeder Push auf main deployt automatisch
```

Alternativ: Cloudflare Pages (Build: `npm run build`, Output: `dist/`)

## Repositories

- **Website-Code** (public): `github.com/Nobrainer-Ai/jetski-lefkada-rentals-web`
- **Business-Docs** (privat): `github.com/Nobrainer-Ai/kristina-jetski-business`

## Coding Conventions

- Kein `any` in TypeScript
- Komponenten als `.astro` Dateien in `src/components/`
- Statische Daten in `src/data/` mit Typen
- Tailwind-Klassen inline; themespezifisches CSS in `src/styles/`
- React (`client:load` / `client:visible`) nur für interaktive Features
