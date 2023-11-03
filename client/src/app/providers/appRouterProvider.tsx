import { createBrowserRouter } from 'react-router-dom'

import { BookTablePage, PokePage } from '@/pages'
import { PokeDetailsPage } from '@/pages/pokemon/poke-details-page'
import { LayoutWithSidebar } from '@/shared'
import { CreateBook } from '@/widgets'

export const appRouterProvider = () => {
	return createBrowserRouter([
		{
			element: <LayoutWithSidebar />,
			children: [
				{
					path: '/',
					element: <BookTablePage />
				},
				{
					path: '/create-book',
					element: <CreateBook />
				},
				{
					path: '/pokemon',
					element: <PokePage />
				},
				{
					path: 'pokemon/:pokemonId',
					element: <PokeDetailsPage />
				}
			]
		},
		{ element: <>LoginPage</>, path: '/login' }
	])
}
