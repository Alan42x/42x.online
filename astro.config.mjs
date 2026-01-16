import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  site: "https://42x.online",
  integrations: [sitemap(), tailwind()],
});
