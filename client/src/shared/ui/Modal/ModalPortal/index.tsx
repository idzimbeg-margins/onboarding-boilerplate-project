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
			<div className='fixed inset-0 animate-[overlayShow_150ms_cubic-bezier(0.16_1,_0.3_1)] bg-[var(--black-a9)]' />
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
