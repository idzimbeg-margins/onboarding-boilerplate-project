import { ContentCard } from '@/shared'
import { BookProps } from '../model'

export const BookCard = ({ name }: Pick<BookProps, 'name'>) => {
	return <ContentCard name={name} />
}
