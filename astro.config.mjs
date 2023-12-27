import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { SITE_DATA } from './src/lib/constants';
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: SITE_DATA.siteUrl,
  integrations: [tailwind(), react(), mdx()]
});