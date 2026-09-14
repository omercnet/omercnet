import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://omer.cohen.io",
  integrations: [sitemap()],
  output: "static",
});
