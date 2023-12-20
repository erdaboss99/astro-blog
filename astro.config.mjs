import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import { SITE_META } from './src/lib/constants';

// https://astro.build/config
export default defineConfig({
	prefetch: true,
	site: SITE_META.siteUrl,
	integrations: [tailwind()],
});
