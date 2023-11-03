import { Outlet } from 'react-router-dom'

export const PublicLayout = () => {
	return (
		<div className='flex h-full w-full pt-6 md:pt-28'>
			<div className='shadow-border-shadow m-auto flex h-full flex-col p-10 md:p-20 lg:p-32'>
				<h2 className='text-primary-main text-xl'>Login</h2>
				<Outlet />
			</div>
		</div>
	)
}
