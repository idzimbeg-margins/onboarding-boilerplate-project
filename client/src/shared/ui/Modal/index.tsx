import * as Dialog from '@radix-ui/react-dialog'
import { ModalTrigger } from './ModalTrigger'

export const Modal = ({ name, children }: Omit<ModalProps, 'url'>) => (
	<Dialog.Root>
		<ModalTrigger name={name} />
		{children}
	</Dialog.Root>
)
