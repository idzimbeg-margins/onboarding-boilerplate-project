import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppProviders } from './AppProviders'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AppProviders />
	</React.StrictMode>
)