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
			200: colors.gray[200],
			300: colors.gray[300],
			400: colors.gray[400],
			500: colors.gray[500],
			600: colors.gray[600],
			700: colors.gray[700],
			800: colors.gray[800],
			900: colors.gray[900],
			950: colors.gray[950],
			1000: '#000000',
			accent: {
				400: colors.indigo[400],
				500: colors.indigo[500],
				600: colors.indigo[600],
			},
			transparent: 'transparent',
		},
		extend: {
			lineHeight: {
				11: '2.75rem',
				12: '3rem',
				13: '3.25rem',
				14: '3.5rem',
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						a: {
							color: theme('colors.accent.500'),
							'&:hover': {
								color: `${theme('colors.accent.600')}`,
							},
							code: { color: theme('colors.accent.400') },
						},
						'h1,h2': {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
						},
						h3: {
							fontWeight: '600',
						},
						code: {
							color: theme('colors.indigo.500'),
						},
					},
				},
				invert: {
					css: {
						a: {
							color: theme('colors.accent.500'),
							'&:hover': {
								color: `${theme('colors.accent.400')}`,
							},
							code: { color: theme('colors.accent.400') },
						},
						'h1,h2,h3,h4,h5,h6': {
							color: theme('colors.100'),
						},
					},
				},
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
