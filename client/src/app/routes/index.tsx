import { useAppSelector } from '@/shared/lib'
import { useRoutes } from 'react-router-dom'
import { privateRoutes } from './privateRoutes'
import { publicRoutes } from './publicRoutes'

export const AppRoutes = () => {
	const isAuth = useAppSelector(
		(state) => state.session && state.session.isAuthenticated
	)
	const routes = isAuth ? privateRoutes : publicRoutes

	const element = useRoutes(routes)

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{element}</>
}
