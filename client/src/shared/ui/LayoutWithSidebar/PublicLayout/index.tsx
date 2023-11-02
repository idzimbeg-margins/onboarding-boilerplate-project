import { Outlet } from 'react-router-dom'

export const PublicLayout = () => {
	return (
		<div className='flex h-full w-full pt-6 md:pt-28'>
			<div className='m-auto flex h-full flex-col p-10 shadow-[1px_8px_10px_-3px_black] md:p-20 lg:p-32'>
				<h2 className='text-primary-main text-xl'>Login</h2>
				<Outlet />
			</div>
		</div>
	)
}
