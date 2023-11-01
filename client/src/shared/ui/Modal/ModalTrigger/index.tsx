import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../styles'

export const ModalTrigger = ({ name }: Pick<ModalProps, 'name'>) => (
	<Dialog.Trigger asChild>
		<Button>{name}</Button>
	</Dialog.Trigger>
)
