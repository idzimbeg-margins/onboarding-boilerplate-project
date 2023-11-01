import type { Preview } from '@storybook/react'

import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { GlobalStyle } from '../src/app/styles'
import { ThemeProvider } from 'styled-components'

const GlobalStyles = GlobalStyle

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},

	decorators: [
		withThemeFromJSXProvider({
			defaultTheme: 'light',
			Provider: ThemeProvider,
			GlobalStyles
		})
	]
}

export default preview
