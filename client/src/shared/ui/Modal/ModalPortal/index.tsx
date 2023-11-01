import * as Dialog from '@radix-ui/react-dialog'
import { ModalContent } from '../ModalContent'
import { DialogOverlay } from '../styles'

export const ModalPortal = ({
	children,
	id,
	linkTitle,
	closeButtonTitle,
	hasLinkToPage = false
}: ModalContentProps) => {
	return (
		<Dialog.Portal>
			<DialogOverlay />
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
