import { BrowserRouter as Router } from 'react-router-dom'

import { Auth } from '@/entities/session'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../config'
import { AppRoutes } from '../routes'
import { GlobalStyle } from '../styles'
import { ThemeProvider } from './themeProvider'

export const AppProviders = () => (
	<ReduxProvider store={store}>
		<Auth>
			<Router>
				<ThemeProvider>
					<GlobalStyle />
					<AppRoutes />
				</ThemeProvider>
			</Router>
		</Auth>
	</ReduxProvider>
)
