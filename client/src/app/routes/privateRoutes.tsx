import { BookTablePage, PokePage } from '@/pages'
import { PokeDetailsPage } from '@/pages/pokemon'
import { LayoutWithSidebar } from '@/shared'
import { CreateBook } from '@/widgets'
import { Navigate, RouteObject } from 'react-router-dom'

export const privateRoutes: RouteObject[] = [
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
			},
			{
				path: '*',
				element: <Navigate to='/pokemon' replace />
			}
		]
	}
]
