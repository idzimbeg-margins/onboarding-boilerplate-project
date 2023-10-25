import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import styled from 'styled-components'

export const SidebarWrapper = styled.div`
	flex: 0 0 auto;
	width: 12.5rem;
	overflow-x: hidden;
	border-right: 0.5px solid black;

	@media (max-width: 768px) {
		display: none;
	}
`

export const SidebarContent = styled.div`
	width: 12.5rem;
	height: 100%;
	display: flex;
	position: fixed;
	overflow-x: hidden;
	flex-direction: column;
	items-align: center;
	justify-content: top;
`
export const SidebarMenu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const MobileScreenSidebar = styled(NavigationMenu.Root)`
	display: flex;
	flex-direction: row;
	margin: 0 auto;
	font-size: 0.8rem;
	@media (min-width: 769px) {
		display: none;
	}
	margin-top: 0.5rem;
	margin-bottom: 1rem;
`

export const MobileScreenSidebarContainer = styled.div`
	max-width: 100%;
	max-height: 2rem;
	margin: 0 auto;
`

export const MobileSidebarList = styled(NavigationMenu.List)`
	display: flex;
	flex-direction: row;
	align-items: center;
	max-hight: 2rem;
	margin-bottom: 0.5rem;
`
export const MobileSidebarLink = styled(NavigationMenu.Link)`
	text-decoration: none;
	color: black;
	cursor: pointer;
	height: 100%;
	width: 100%;
	padding: 0rem;
	margin-right: 1rem;
	margin-bottom: 1rem;
	&:hover {
		color: #26a199;
		border-bottom: 0.5px solid #26a199;
	}
`

export const MobileSidebarItem = styled(NavigationMenu.Item)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`
