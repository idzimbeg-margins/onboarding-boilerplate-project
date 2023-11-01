import { Button, FormWrapper, Input } from '@/shared'
import { Controller, useForm } from 'react-hook-form'
import { useCreateBookMutation } from '../api'
import { Book } from '../model/types'
import { Heading, StyledFormWrapper, Typography } from './styles'

const defaultValues = {
	id: 0,
	name: ''
}
export const CreateBookForm = () => {
	const [createBook] = useCreateBookMutation()

	const { control, handleSubmit } = useForm({
		defaultValues,
		mode: 'onChange'
	})

	const handleCreate = (formData: Book) => {
		createBook({
			id: Math.random(),
			name: formData.name
		})
	}

	return (
		<FormWrapper onSubmit={handleSubmit(handleCreate)}>
			<StyledFormWrapper>
				<Heading>Create Book Entry</Heading>
				<Typography>Book</Typography>
				<Controller
					name='name'
					control={control}
					render={({ field: { value, onChange } }) => (
						<Input name='name' label='Name' value={value} onChange={onChange} />
					)}
				/>
				<Button label='Submit' type='submit' />
			</StyledFormWrapper>
		</FormWrapper>
	)
}
