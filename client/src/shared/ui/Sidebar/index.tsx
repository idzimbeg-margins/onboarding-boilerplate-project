// ** Third Party Imports
import { LogoutButton } from '@/features/authentication/LogoutButton.tsx/ui/LogoutButton'
import { LinkWrapper } from '../LinkWrapper'
import {
	MobileScreenSidebar,
	MobileScreenSidebarContainer,
	MobileSidebarItem,
	MobileSidebarLink,
	MobileSidebarList,
	SidebarContent,
	SidebarWrapper
} from './styles'

export const Sidebar = () => {
	return (
		<>
			<NavigationMenuDemo />
			<SidebarWrapper>
				<SidebarContent>
					<LinkWrapper to='/'>Your Books List</LinkWrapper>
					<LinkWrapper to='/create-book'>Add Book to Your List</LinkWrapper>
					<LinkWrapper to='/pokemon'>Pokedex</LinkWrapper>
				</SidebarContent>
				<LogoutButton />
			</SidebarWrapper>
		</>
	)
}

const NavigationMenuDemo = () => {
	return (
		<MobileScreenSidebarContainer>
			<MobileScreenSidebar>
				<MobileSidebarList>
					<MobileSidebarItem>
						<MobileSidebarLink href='/'>Your Books List</MobileSidebarLink>
					</MobileSidebarItem>
					<MobileSidebarItem>
						<MobileSidebarLink href='/create-book'>
							Add Book to Your List
						</MobileSidebarLink>
					</MobileSidebarItem>
					<MobileSidebarItem>
						<MobileSidebarLink href='/pokemon'>Pokedex</MobileSidebarLink>
					</MobileSidebarItem>
				</MobileSidebarList>
			</MobileScreenSidebar>
			<LogoutButton />
		</MobileScreenSidebarContainer>
	)
}
