import { BookTableWithoutPagination } from '@/features/book/book-table/ui'
import { BookTableContainer } from './styles'

export const BookTable = () => {
	return (
		<BookTableContainer>
			<BookTableWithoutPagination />
		</BookTableContainer>
	)
}
