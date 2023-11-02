import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar'

export const LayoutWithSidebar = () => {
	return (
		<div className='flex h-full'>
			<Sidebar />
			<div className='flex min-h-[100vh] w-full flex-col pt-4'>
				<main className='p-8'>
					<Outlet />
				</main>
			</div>
		</div>
	)
}
