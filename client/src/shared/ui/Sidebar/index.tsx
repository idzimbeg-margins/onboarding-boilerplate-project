import { LogoutButton } from '@/features/authentication/LogoutButton.tsx/ui/LogoutButton'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import { Button } from '../Button'

export const Sidebar = () => {
	return (
		<>
			<MobileNavigationMenu />
			<div className='max-w-40 hidden overflow-x-hidden pt-12 shadow-[1px_8px_10px_-3px_black] md:flex'>
				<div className='max-w-40 flex h-full flex-col justify-start overflow-x-hidden align-middle'>
					<div className='flex h-full flex-col justify-start overflow-x-hidden align-middle'>
						<Button variant='text' size='sm' to='/' className='mb-8 border-b-2'>
							Your Books List
						</Button>
						<Button
							variant='text'
							size='sm'
							to='/create-book'
							className='mb-8 border-b-2'
						>
							Add Book to Your List
						</Button>
						<Button
							variant='text'
							size='sm'
							to='/pokemon'
							className='mb-8 border-b-2'
						>
							Pokedex
						</Button>
					</div>
					<LogoutButton />
				</div>
			</div>
		</>
	)
}

const MobileNavigationMenu = () => {
	return (
		<div className='shadow-border-shadow fixed z-50 m-auto flex max-h-10 w-full rounded-md backdrop:blur-md md:hidden'>
			<NavigationMenu.Root className='m-auto mb-4 mt-2 flex font-medium md:hidden'>
				<NavigationMenu.List className='flex max-h-8 items-center'>
					<Button
						target='_self'
						variant='text'
						size='sm'
						href='/'
						className='text-xs'
					>
						Your Books List
					</Button>

					<Button
						target='_self'
						variant='text'
						size='sm'
						href='/create-book'
						className='text-xs'
					>
						Add Book to Your List
					</Button>

					<Button
						target='_self'
						variant='text'
						size='sm'
						href='/pokemon'
						className='text-xs'
					>
						Pokedex
					</Button>
					<LogoutButton className='m-0 border-t-0 text-xs' />
				</NavigationMenu.List>
			</NavigationMenu.Root>
		</div>
	)
}
