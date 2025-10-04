import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'one-dark': {
					bg: '#282c34',
					surface: '#21252b',
					text: '#abb2bf',
					blue: '#61afef',
					green: '#98c379',
					red: '#e06c75',
					orange: '#d19a66',
					purple: '#c678dd',
					cyan: '#56b6c2',
					yellow: '#e5c07b',
				},
			},
			scrollbar: {
				width: 'thin',
				track: '#282c34',
				thumb: '#3e4451',
				'thumb-hover': '#545862',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}

export default config
