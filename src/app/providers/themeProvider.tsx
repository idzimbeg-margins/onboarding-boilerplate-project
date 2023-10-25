import { type ReactNode } from 'react'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { themeConfig } from '../config/theme'

interface ThemeConfigProviderProps {
	children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeConfigProviderProps) => (
	<StyledThemeProvider theme={themeConfig}>{children}</StyledThemeProvider>
)
