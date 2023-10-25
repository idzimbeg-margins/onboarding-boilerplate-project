import * as Dialog from '@radix-ui/react-dialog'
import { Button } from './styles'

interface ModalProps {
	url?: string
	name: string
	children?: React.ReactNode
}
export const DialogTrigger = ({ name }: Pick<ModalProps, 'name'>) => (
	<Dialog.Trigger asChild>
		<Button>{name}</Button>
	</Dialog.Trigger>
)

export const Modal = ({ name, children }: Omit<ModalProps, 'url'>) => (
	<Dialog.Root>
		<DialogTrigger name={name} />
		{children}
	</Dialog.Root>
)
