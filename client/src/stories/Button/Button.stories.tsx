import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../../shared'

const meta = {
	title: 'Example/Button',
	component: Button,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: { onClick: { action: 'clicked' } }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		type: 'button',
		color: 'primary',
		onClick: () => {}
	},
	render: (args) => (
		<Button
			{...args}
			onClick={() => {
				alert('Clicked')
			}}
		/>
	)
}
