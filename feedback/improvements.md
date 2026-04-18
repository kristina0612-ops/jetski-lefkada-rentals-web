# Verbesserungsvorschläge – laufend

Claude sammelt hier Dinge, die ihm beim Arbeiten auffallen und die Kristina
nutzen kann. Jeder Eintrag hat Datum + **JETZT / SPÄTER / SKIP**-Markierung.
Nach Kristinas Entscheidung wandert der Eintrag nach `feedback/todo.md` (SPÄTER)
oder wird gestrichen (SKIP) oder umgesetzt (JETZT).

---

## 2026-04-18

### 🔒 Sicherheit: `.gitignore` hat `.env` nicht geschützt

- **Beobachtung:** Vor dem Fix fehlte `.env*` in der `.gitignore`. Hätte
  Kristina eine `.env` mit Supabase-Service-Role-Key angelegt, wäre der beim
  nächsten `git add .` + Commit versehentlich öffentlich auf GitHub gelandet.
- **Status:** erledigt im gleichen Turn (2026-04-18).
- Markierung: **JETZT** ✓

### 🔒 Sicherheit: Secrets im Chat teilen ist riskant

- **Beobachtung:** Am 2026-04-18 hat Kristina einen 40-stelligen Hex-String im
  Chat geteilt (vermutlich Vercel-Token oder GitHub-PAT).
- **Empfehlung:** Diesen Token rotieren + Regel etablieren: „Secrets gehören in
  `.env.local` oder ins Vercel-Dashboard, niemals in Chat oder Git."
- Markierung: **JETZT** – in `todo.md` als erstes zu erledigen

### ⚙️ Preview-URLs sind öffentlich – `/admin/*` damit auch

- **Beobachtung:** Vercel-Preview-Deployments sind standardmäßig öffentlich
  erreichbar. Solange `/admin/*` existiert, ist das ein Risiko (auch wenn
  Admin-Login per Supabase geschützt ist – Testversionen sollten nicht frei
  zugänglich sein).
- **Empfehlung:** Deployment Protection aktivieren (Password Protection, Pro-Feature).
- Markierung: **SPÄTER** – in `todo.md` übertragen

### ⚙️ `@astrojs/sitemap` fehlt

- **Beobachtung:** Google Search Console kann erst nach Sitemap-Einreichung
  sinnvoll arbeiten. Astro generiert die nicht automatisch – braucht die
  Integration `@astrojs/sitemap`.
- **Empfehlung:** `npm i @astrojs/sitemap`, in `astro.config.mjs` als Integration
  ergänzen, nach Deploy ist `https://jetski-lefkada-rentals.com/sitemap-index.xml`
  verfügbar und kann an Search Console übergeben werden.
- **Aufwand:** ~15 Minuten Code + 1 Klick Dashboard.
- Markierung: **SPÄTER** (an Google-Search-Console-Task gekoppelt)

### 📈 Speed Insights aktivieren

- **Beobachtung:** Wir messen Traffic (Vercel Analytics + GA4), aber keine
  Core Web Vitals (Performance-Kennzahlen, Ranking-Faktor für Google).
- **Empfehlung:** `@vercel/speed-insights` einbauen – im Pro-Plan ohne Aufpreis.
- **Aufwand:** ~10 Minuten, 3 Zeilen Code.
- Markierung: **SPÄTER** – in `todo.md` übertragen

### 🧭 Zwei-Repo-Setup → Force-Push-Risiko

- **Beobachtung:** Wir pushen jeden Stand doppelt (`origin/master` +
  `vercel/main --force`). Force-Push ist prinzipiell gefährlich – wenn man mal
  nicht aufpasst, überschreibt man ungewollt Commits.
- **Empfehlung:** Vercel im Dashboard auf den korrekten Repo umbiegen. Danach
  reicht ein einzelner Push.
- **Aufwand:** ~5 Minuten Dashboard.
- Markierung: **SPÄTER** – nicht dringend, aber irgendwann lohnt es sich.

### 📊 Custom-Events für echtes Funnel-Tracking fehlen

- **Beobachtung:** Das Vercel-Analytics-Dashboard zeigt nur Pageviews. Ohne
  Custom Events (z. B. `whatsapp_clicked`, `calculator_used`, `booking_started`)
  können wir nicht messen, wie viele Besucher zu Leads werden.
- **Empfehlung:** In einem gezielten Durchlauf die wichtigsten CTAs mit
  `track()`-Calls ausrüsten. Sollte mit `website-analyst`-Agent koordiniert
  werden, damit die Events zum Funnel im `website-analytics`-Skill passen.
- **Aufwand:** ~1 Stunde für die ersten 3-5 Events.
- Markierung: **SPÄTER**

---

### 🧨 Root Cause der Error-Deploys: `package-lock.json` out-of-sync

- **Beobachtung (2026-04-18):** Deploys vom 17.04. stehen auf Error. Analyse:
  `@astrojs/vercel`, `@supabase/supabase-js` und `@vercel/analytics` waren in
  `package.json` eingetragen, aber weder in `package-lock.json` noch in
  `node_modules` installiert. Vercel's Build-Step scheiterte, weil beim
  `astro build` der Adapter-Import (`@astrojs/vercel/serverless`) ins Leere lief.
  Zusätzlich: Der Subpath `/serverless` ist in `@astrojs/vercel` v8 entfernt,
  und `output: "hybrid"` existiert in Astro 5 nicht mehr.
- **Fix:** Import-Pfad gefixt, `output: "hybrid"` entfernt (Astro 5 Default ist
  `static`), alle dynamischen Routes haben bereits `export const prerender = false`.
- **Regel für die Zukunft:** Nach jedem Eintrag in `package.json` IMMER
  `npm install` lokal laufen lassen bevor committed wird. Sonst läuft die
  Production-Pipeline aus dem Takt.
- Markierung: **JETZT** ✓

---

## Vorlage für neue Einträge

```markdown
### {Emoji} {Titel}

- **Beobachtung:** {was fällt auf}
- **Empfehlung:** {konkrete Änderung}
- **Aufwand:** {ungefähre Zeit}
- Markierung: **JETZT / SPÄTER / SKIP**
```
