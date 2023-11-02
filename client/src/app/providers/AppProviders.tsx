import { BrowserRouter as Router } from 'react-router-dom'

import { Auth } from '@/entities/session'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../config'
import { AppRoutes } from '../routes'

export const AppProviders = () => (
	<ReduxProvider store={store}>
		<Auth>
			<Router>
				<AppRoutes />
			</Router>
		</Auth>
	</ReduxProvider>
)
