# SPÄTER-Queue & offene Fragen

## Vercel / Infrastruktur (Auftrag vom 2026-04-18)

Dashboard-Aufgaben die Claude nicht selbst machen kann – Kristina muss klicken:

- [ ] **Vercel-Token rotieren:** Der am 2026-04-18 im Chat geteilte 40-stellige
      Hex-String muss widerrufen werden. <https://vercel.com/account/settings/tokens>
      → alten Token löschen, bei Bedarf neuen anlegen und direkt in `.env.local`
      eintragen (nicht mehr im Chat teilen).
- [ ] **Google Search Console anbinden:** Schritt-für-Schritt in
      `.claude/skills/vercel/SKILL.md` §6. Braucht TXT-Record in Vercel DNS.
- [ ] **Deployment Protection für Previews aktivieren:** Dashboard → Settings →
      Deployment Protection → "Password Protection" wählen. Damit `/admin/*` auf
      Preview-URLs nicht öffentlich ist.
- [ ] **Speed Insights aktivieren:** Dashboard → Settings → Speed Insights.
      Vorher muss `npm i @vercel/speed-insights` laufen (Code-Teil erledigt
      Claude).
- [ ] **Billing-Screenshot:** Wir zahlen 99 €/Monat Pro – aus Plan + Add-ons
      oder Team-Seats? Screenshot von <https://vercel.com/account/billing> klären,
      ob wir ungenutzte Seats haben und sparen können.
- [ ] **Zwei-Repo-Setup sauber ziehen (optional):** Dashboard → Settings → Git
      → Repo auf `kristina0612-ops/jetski-lefkada-rentals-web-1` + Branch `master`.
      Danach fällt der Force-Push-Workflow weg.
- [ ] **Klären: Nobrainer-Ai/jetski-lefkada-rentals-web:** Kristina hat einen
      dritten GitHub-Repo erwähnt. Ist das Organisations-Account, Backup, soll
      Vercel irgendwann dorthin umziehen? Offen.
- [ ] **Vercel-Rechnungen: EU-VAT-Nummer nachtragen** (sobald griechische
      USt-Nr./AFM registriert ist). Dashboard →
      <https://vercel.com/account/billing> → Tax ID → Format: `EL` +
      9-stellige AFM (z. B. `EL204202406`). Aktuell überspringen (Feld leer).

## CRM-Gesamtsystem (Auftrag vom 2026-04-17)

Bevor Module gebaut werden können, braucht Claude Antworten auf folgende Fragen:

1. **Kalender**: Welchen Kalender nutzt Du auf dem Laptop? (Outlook / Google Calendar / Apple iCloud / anderer)
2. **Buchungsweg heute**: Kommen Buchungen per WhatsApp/E-Mail und Du trägst sie manuell ein? Oder habt Ihr schon ein Online-Buchungstool?
3. **Buchhalterin Lefkada**: Welches Buchhaltungsprogramm nutzt sie? (Softone / Epsilon / Elorus / Tebi / anderes) — entscheidet ob wir Rechnungen selbst bauen oder in ihr System integrieren
4. **USt-Nummer**: Wann kommt sie ungefähr? (ohne geht keine Rechnung raus)
5. **Analytics**: Reicht Vercel Analytics (gratis, sofort aktivierbar) oder willst Du Google Analytics?

## Geplante Modul-Reihenfolge

1. **Preisrechner** – rein Website, kein Rechtsrisiko – kann starten sobald Fragen 1+2 geklärt sind (oder sogar vorher)
2. **Website-Analytics** aktivieren
3. **CRM + Kalender-Sync**
4. **Kassabuch**
5. **Rechnungssystem** – zuletzt, nach myDATA-Klärung mit Buchhalterin

## Referenzen

- Memory: `project_crm_roadmap.md`
- Memory: `project_mydata_compliance.md`
- Skill: `.claude/skills/vercel/SKILL.md`
