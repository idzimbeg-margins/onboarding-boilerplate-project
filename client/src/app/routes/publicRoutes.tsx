import { LoginForm } from '@/features/authentication/login'
import { PublicLayout } from '@/shared/ui/LayoutWithSidebar/PublicLayout'
import { Navigate, type RouteObject } from 'react-router-dom'

export const publicRoutes: RouteObject[] = [
	{
		element: <PublicLayout />,
		children: [
			{
				path: '/login',
				element: <LoginForm />
			}
		]
	},
	{
		path: '*',
		element: <Navigate to='/login' replace />
	}
]
