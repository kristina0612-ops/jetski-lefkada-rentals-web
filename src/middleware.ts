// Middleware: Auth-Guard für /admin Routes
// Läuft bei jedem Request, blockt Zugriff auf /admin/* ohne Session-Cookie
//
// ══════════════════════════════════════════════════════════════════════════
// ⚠️  SECURITY WARNING (Stand 2026-04-18)
// ══════════════════════════════════════════════════════════════════════════
// Diese Middleware prüft NUR die Anwesenheit des Cookies `sb-access-token`,
// NICHT dessen Gültigkeit (JWT-Signatur).
//
// Das ist AKTUELL sicher, weil der Login (/api/admin/login) noch ein Stub ist
// und keine echten Tokens ausgibt → niemand kann ein valides Cookie erzeugen.
//
// 🚨 BEVOR Supabase-Login aktiviert wird, MUSS hier die JWT-Signatur via
// `supabase.auth.getUser(token)` verifiziert werden. Ohne Verify kann ein
// Angreifer ein beliebiges Cookie `sb-access-token=anything` setzen und die
// Middleware lässt ihn durch → kompletter Auth-Bypass auf /admin/*.
//
// Siehe: .claude/skills/security/SKILL.md §2 A01, §3
// Tracking: feedback/todo.md „Gesperrt auf Supabase-Aktivierung"
// ══════════════════════════════════════════════════════════════════════════

import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async ({ url, cookies, redirect }, next) => {
  const pathname = url.pathname;

  if (!pathname.startsWith("/admin")) {
    return next();
  }

  // Login-Seite selbst ist öffentlich
  if (pathname === "/admin/login") {
    return next();
  }

  // Alle anderen /admin-Routes: Session prüfen
  const accessToken = cookies.get("sb-access-token")?.value;
  if (!accessToken) {
    return redirect("/admin/login");
  }

  // TODO: Supabase JWT verifizieren, nicht nur prüfen ob Cookie vorhanden
  // Das reicht für ersten Scaffold — wird ersetzt sobald Supabase live ist
  //
  // import { createClient } from '@supabase/supabase-js';
  // const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
  // const { data, error } = await supabase.auth.getUser(accessToken);
  // if (error || !data.user) { cookies.delete('sb-access-token'); return redirect('/admin/login'); }

  return next();
});
