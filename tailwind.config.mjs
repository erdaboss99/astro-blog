const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			base: ['Space Grotesk', ...fontFamily.sans],
		},
		colors: {
			0: '#ffffff',
			950: colors.gray[950],
			1000: '#000000',
		},
		extend: {},
	},
	plugins: [],
};
