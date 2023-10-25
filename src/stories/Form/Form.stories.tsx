import { CreateBookForm } from '@/features/book/create-book'
import {
	StyledFormWrapper,
	Typography
} from '@/features/book/create-book/ui/styles'
import { Button, FormWrapper, Input } from '@/shared'
import { Heading } from '@radix-ui/themes'
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
			<StyledFormWrapper>
				<Heading>Create Book Entry</Heading>
				<Typography>Book</Typography>

				<Input name='name' label='Name' fullWidth />

				<Button type='submit' label='submit' />
			</StyledFormWrapper>
		</FormWrapper>
	)
}
