import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from './app/config/store/store'
import { appRouterProvider, ThemeProvider } from './app/providers'
import { GlobalStyle } from './app'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ReduxProvider store={store}>
		<React.StrictMode>
			<ThemeProvider>
				<GlobalStyle />
				<RouterProvider router={appRouterProvider()} />
			</ThemeProvider>
		</React.StrictMode>
	</ReduxProvider>
)
