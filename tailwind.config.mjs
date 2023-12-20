const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'media',
	theme: {
		fontFamily: {
			base: ['Space Grotesk', ...fontFamily.sans],
		},
		colors: {
			0: '#ffffff',
			100: colors.gray[100],
			900: colors.gray[900],
			950: colors.gray[950],
			1000: '#000000',
		},
		extend: {},
	},
	plugins: [],
};
