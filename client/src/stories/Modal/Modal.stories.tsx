import type { Meta, StoryObj } from '@storybook/react'

import * as Dialog from '@radix-ui/react-dialog'
import { Card, DialogClose } from '@radix-ui/themes'
import { Button, Modal } from '../../shared'

const meta = {
	title: 'Example/Modal',
	component: Modal,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof Modal>

export const Primary: Story = {
	args: {
		name: 'Modal',
		children: 'Modal'
	},
	render: (args) => (
		<Dialog.Root>
			<Dialog.Trigger style={{ appearance: 'none', border: 'none' }}>
				<Button variant='text' size='sm'>
					{args.name}
				</Button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<div />
				<div>
					<Card>
						<div className='full flex h-40 items-center justify-center'>
							<img
								className='mb-2 h-full w-full object-contain transition-transform hover:scale-105'
								src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
								alt={args.name}
							/>
						</div>
						<div className='g-full flex w-full flex-col'>
							<h1 className='font-lg text-primary-main text-center font-semibold'>
								{args.name}
							</h1>
						</div>
					</Card>
					<div
						style={{
							display: 'flex',
							marginTop: 25,
							justifyContent: 'flex-end'
						}}
					>
						<DialogClose>
							<Button>Close</Button>
						</DialogClose>
					</div>
				</div>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
