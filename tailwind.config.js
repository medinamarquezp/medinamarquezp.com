import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Barlow', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [require('daisyui'), require('tailwindcss-animated')],
	daisyui: {
		themes: [
			{
				cupcake: {
					...require('daisyui/src/theming/themes')['[data-theme=cupcake]'],
					neutral: 'white'
				}
			},
			'night'
		],
		darkTheme: 'night',
		base: true,
		styled: true,
		utils: true,
		rtl: false,
		prefix: '',
		logs: true
	}
};
