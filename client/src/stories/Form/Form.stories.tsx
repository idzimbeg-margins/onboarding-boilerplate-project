import { CreateBookForm } from '@/features/book/create-book'
import { Button, FormWrapper } from '@/shared'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Example/CreateBookForm',
	component: CreateBookForm,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof CreateBookForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	render: () => (
		<FormWrapper
			onSubmit={(e) => {
				e.preventDefault
				alert('Submitted!')
			}}
		>
			<div>
				<h3>Create Book Entry</h3>
				<p>Book</p>

				<input name='name'>Name</input>

				<Button type='submit'></Button>
			</div>
		</FormWrapper>
	)
}
