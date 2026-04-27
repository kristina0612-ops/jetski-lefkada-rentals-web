# Jetski Lefkada Rentals — CLAUDE.md

---

## Business Context — Wer ist Kristina, was ist das Business?

**Betreiberin:** Kristina Adamovic (Eigentümerin & Operations-Managerin)
**Unternehmen:** Jetski Lefkada Rentals — Familienbetrieb, vollständig lizenziert (griechisches Recht 4727/2020 & 4926/2022)
**Standort:** Nidri Marina, Lefkada 31100, Griechenland
**Saison:** Mai–September | **Täglich geöffnet**
**Öffnungszeiten:** 10:00–13:00 und 16:00–19:00

### Kontakt
| Kanal | Wert |
|---|---|
| WhatsApp / Telefon | +30 695 561 2777 |
| E-Mail | info@jetski-lefkada-rentals.com |
| Instagram | @jetski__lefkada (doppelter Unterstrich!) |
| Website | www.jetski-lefkada-rentals.com |

### Flotte & Preise

| Modell | PS | 10 min | 20 min | 30 min | 1 Std | Halbtag | Ganztag |
|---|---|---|---|---|---|---|---|
| The Cruiser (Yamaha VX Cruiser HO) | 180 | €30 | €50 | €65 | €95 | €290 | €490 |
| The Challenger (Sea-Doo RXT-X 300) | 300 | €45 | €75 | €95 | €140 | €420 | €690 |
| The Voyager (Yamaha FX SVHO) | 250 | €38 | €65 | €80 | €120 | €360 | €590 |
| The Acrobat (Sea-Doo Spark Trixx) | 90 | €22 | €38 | €50 | €70 | €210 | €350 |

Halbtag/Ganztag-Buchungen sowie Delivery-Optionen → Preis auf Anfrage → WhatsApp verlinken: wa.me/306955612777

### Buchungsregeln
- **Mindestalter:** 18 Jahre um selbst zu fahren (gültiger Ausweis erforderlich)
- **Kinder:** Als Beifahrer willkommen
- **Bootsschein:** Nicht erforderlich für Standardbuchungen (je nach Option)
- **Anzahlung:** 30 % bei Buchung; 100 % möglich
- **Stornierung:** Kostenlos bis 48 Std. vorher | 50 % Erstattung 24–48 Std. vorher | Keine Erstattung unter 24 Std.
- **Antwortzeit:** Unter 2 Stunden
- **Versicherung:** Haftpflicht bis €700.000

### Guided Tours (zweites Hauptangebot!)
Für Gäste die nicht allein fahren möchten — kein Mindestalter, kein Führerschein nötig:
- **The Discovery** (30 min) — David fährt, Gast sitzt hinten, Porto Katsiki Küstenroute
- **The Expedition** (60 min) — 6 Stopps, versteckte Buchten, Meganisi-Meerenge
- Ideal für: Ältere, Kinder, Anfänger, Ängstliche, ohne Führerschein
- Preise auf Anfrage → WhatsApp wa.me/306955612777
- David ist der Guide (Eigentümer, lizenziert, seit 2019 aktiv)
- Komponente: `src/components/v3/Tours3.astro`, Daten: `src/data/tours.ts`

### KEY USP — Delivery Service (Alleinstellungsmerkmal!)
Kristina bietet **Jetski-Lieferung direkt ans Wasser** an:
- Kunden auf Yachten, Booten oder an beliebigen Anlegestellen können den Jetski zu sich liefern lassen
- Buchung: Kunde wählt im Kalender Datum, Uhrzeit, Standort und "Pick-up" vs. "Delivery"
- Preis für Delivery: Auf Anfrage via WhatsApp
- Dieser Service soll **immer proaktiv erwähnt** werden, wenn Kunden nach Optionen fragen

### Taglines & Brand-Aussagen
- **Primär:** "Feel the Thrill. Live the Moment."
- **Claim:** "The Fastest Jet Skis on the Island."
- **CTA:** "Book Now!"
- **USPs:** Exclusive Deals · Premium Equipment · Flexible Options (10/20/30 Min, stündlich, halbtags, ganztags)

---

## Kommunikationsregeln für Claude

### Sprache
Antworte immer in der Sprache des Kunden:
- 🇬🇧 Englisch — internationale Touristen (Primärsprache)
- 🇩🇪 Deutsch — für deutschsprachige Anfragen
- 🇬🇷 Griechisch — für griechische Kunden

### Ton & Stil
- **Warm, einladend und abenteuerlich** — Emotionen ansprechen (Adrenalinkick, Familienspaß, unvergessliche Momente)
- Kein Verkaufsdruck — inspirierend, nicht aufdringlich
- Bei Content für Instagram: energetisch, kurze Sätze, 3–5 passende Hashtags
- Bei E-Mails: professionell aber herzlich, persönliche Ansprache

### Was Claude immer hervorheben soll
1. **Delivery Service** — Jetski kommt zu dir, egal ob auf der Yacht oder am Strand
2. **Sicherheit** — Einweisung, Schwimmwesten, vollständig versichert
3. **Neue Premium-Modelle** — modernste Jetskis auf der Insel
4. **Familienfreundlich** — Kinder willkommen als Beifahrer

### Preise "auf Anfrage"
Bei Delivery, Halbtag, Ganztag oder Sonderanfragen → immer direkt auf WhatsApp verweisen:
> "Kontaktiere uns direkt auf WhatsApp für dein persönliches Angebot: [+30 695 561 2777](https://wa.me/306955612777)"

---

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
