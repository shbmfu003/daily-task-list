const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: [
		'./public/**/*.html',
		'./{components,pages,lib,hooks}/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				cyan: colors.cyan,
				orange: colors.orange,
			},
		},
	},
	variants: {
		caretColor: ['dark', 'active'],
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@graxmonzo/tailwind-caret-color'),
	],
};
