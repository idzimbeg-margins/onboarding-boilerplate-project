import { ModalPortal } from '@/shared/ui/Modal/ModalPortal'
import { BookProps } from '../model'
import { BookCard } from './BookCard'

export const BookModal = ({ id, name }: BookProps) => {
	return (
		<ModalPortal id={id} closeButtonTitle='Close' hasLinkToPage={false}>
			<BookCard name={name} />
		</ModalPortal>
	)
}
