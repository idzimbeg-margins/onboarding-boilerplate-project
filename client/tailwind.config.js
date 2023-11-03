/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					main: '#5FA5F9',
					active: '#4C8FFB',
					hover: '#4C8FFB'
				},
				secondary: {
					main: '#F6D17D'
				},
				success: {
					main: '#4AAD52'
				},
				error: {
					main: '#DB3A34',
					active: '#C72F2A',
					hover: '#C72F2A'
				},
				warning: {
					main: '#F69722'
				},
				disabled: {
					main: '#BFBFBF'
				},
				text: {
					main: '#1A283F',
					base: '#FFF',
					error: '#C72F2A'
				}
			}
		},
		animation: {
			'spin-slow': 'spin 3s linear infinite',
			'content-show': 'pulse 250ms cubic-bezier(0.16, 1, 0.3, 1) 5'
		},
		boxShadow: {
			'drop-shadow':
				'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
			'border-shadow': '1px 8px 10px -3px black'
		}
	},
	plugins: []
}
