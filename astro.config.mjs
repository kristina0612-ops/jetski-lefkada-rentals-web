import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://jetski-lefkada-rentals.com",
  // output: "static" ist Default in Astro 5. Dynamische Routes (/admin/*, /api/*)
  // markieren sich selbst per `export const prerender = false;`
  adapter: vercel(),
  redirects: {
    "/v1": "/",
    "/v2": "/",
    "/v3": "/",
  },
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
  },
  server: {
    port: 4330,
    host: true,
    allowedHosts: true,
  },
});
