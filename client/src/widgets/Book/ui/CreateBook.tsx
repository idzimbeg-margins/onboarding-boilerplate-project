import { Authorization } from '@/entities/authorization'
import { CreateBookForm } from '@/features/book/create-book'

export const CreateBook = () => {
	return (
		<Authorization
			allowedRoles={['admin']}
			forbiddenFallback={<p>Only admin can add books</p>}
		>
			<div className='m-auto w-full max-w-[800px] px-6 py-0'>
				<CreateBookForm />
			</div>
		</Authorization>
	)
}
