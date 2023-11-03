import { Button } from '@/shared/ui'
import * as Dialog from '@radix-ui/react-dialog'

export const ModalTrigger = ({ name }: Pick<ModalProps, 'name'>) => (
	<Dialog.Trigger asChild>
		<Button variant='text' size='sm' className='w-full'>
			{name}
		</Button>
	</Dialog.Trigger>
)
