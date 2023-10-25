import type { Meta, StoryObj } from '@storybook/react'

import { FormWrapper, Input } from '../../shared'

const meta = {
	title: 'Example/Input',
	component: Input,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>

export const Primary: Story = {
	render: (args) => (
		<FormWrapper onSubmit={() => console.log('submitted')}>
			<Input {...args} />
		</FormWrapper>
	)
}
