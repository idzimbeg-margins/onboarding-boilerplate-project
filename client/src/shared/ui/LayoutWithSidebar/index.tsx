import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar'
import {
	LayoutContentWrapper,
	LayoutPageContent,
	LayoutWrapper
} from './styles'

export const LayoutWithSidebar = () => {
	return (
		<LayoutWrapper>
			<Sidebar />
			<LayoutContentWrapper>
				<LayoutPageContent>
					<Outlet />
				</LayoutPageContent>
			</LayoutContentWrapper>
		</LayoutWrapper>
	)
}
