import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
const site = "https://thrivemedia.art";
const sitemapx = {
  index: {
    changefreq: "monthly",
    priority: 1,
  },
  imprint: {
    changefreq: "yearly",
    priority: 0.5,
  },
};

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap({
      changefreq: "monthly",
      lastmod: new Date(),
      async serialize(item) {
        const page = item.url.slice(site.length).replace(/\//g, "") || "index";
        if (!(page in sitemapx)) return item;
        Object.assign(item, sitemapx[page]);
        return item;
      },
    }),
    prefetch(),
    react(),
  ],
});
