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
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['cupcake', 'dracula'],
		darkTheme: 'dracula',
		base: true,
		styled: true,
		utils: true,
		rtl: false,
		prefix: '',
		logs: true
	}
};
