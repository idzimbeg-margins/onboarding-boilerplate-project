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
		label: 'Button',
		type: 'button',
		variant: 'primary',
		size: 'normal',
		color: 'primary',
		style: {},
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
