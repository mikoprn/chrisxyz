// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
   site: 'https://chrisxyz.vercel.app/',
  image: {
    service: passthroughImageService(),
    domains: ["astro.build"],
  },

  integrations: [sitemap()],
});