import { Authorization } from '@/entities/authorization'
import { CreateBookForm } from '@/features/book/create-book'
import { BookFormContainer } from './styles'

export const CreateBook = () => {
	return (
		<Authorization
			allowedRoles={['admin']}
			forbiddenFallback={<p>Only admin can add books</p>}
		>
			<BookFormContainer>
				<CreateBookForm />
			</BookFormContainer>
		</Authorization>
	)
}
