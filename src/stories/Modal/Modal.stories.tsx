import type { Meta, StoryObj } from '@storybook/react'

import {
	CardDetailsContainer,
	CardImage,
	CardImageContainer,
	CardTitle
} from '@/pages/pokemon/poke-details-page/styles'
import { DialogContent, DialogOverlay } from '@/shared/ui/Modal/styles'
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
				<Button label={args.name} variant='text' size='small' />
			</Dialog.Trigger>
			<Dialog.Portal>
				<DialogOverlay />
				<DialogContent>
					<Card>
						<CardImageContainer>
							<CardImage
								src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
								alt={args.name}
							/>
						</CardImageContainer>
						<CardDetailsContainer>
							<CardTitle>{args.name}</CardTitle>
						</CardDetailsContainer>
					</Card>
					<div
						style={{
							display: 'flex',
							marginTop: 25,
							justifyContent: 'flex-end'
						}}
					>
						<DialogClose>
							<Button label='Close' />
						</DialogClose>
					</div>
				</DialogContent>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
