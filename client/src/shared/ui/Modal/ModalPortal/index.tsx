import * as Dialog from '@radix-ui/react-dialog'
import { ModalContent } from '../ModalContent'

export const ModalPortal = ({
	children,
	id,
	linkTitle,
	closeButtonTitle,
	hasLinkToPage = false
}: ModalContentProps) => {
	return (
		<Dialog.Portal>
			<div className='fixed inset-0' />
			<ModalContent
				id={id}
				linkTitle={linkTitle}
				closeButtonTitle={closeButtonTitle}
				hasLinkToPage={hasLinkToPage}
			>
				{children}
			</ModalContent>
		</Dialog.Portal>
	)
}
