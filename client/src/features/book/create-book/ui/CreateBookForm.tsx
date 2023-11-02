import { Button, FormWrapper } from '@/shared'
import { TextField } from '@/shared/ui/Form/TextField'
import { Controller, useForm } from 'react-hook-form'
import { useCreateBookMutation } from '../api'
import { Book } from '../model'

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
			<div className='mb-4 flex flex-col items-center justify-center rounded-md p-8 shadow-[1px_8px_10px_-3px_black]'>
				<h1 className='mb-4 text-lg'>Create Book Entry</h1>
				<Controller
					name='name'
					control={control}
					render={({ field: { value, onChange } }) => (
						<TextField
							value={value}
							onChange={onChange}
							label='Add book to the list'
							className='mb-4 w-full'
						/>
					)}
				/>
				<Button type='submit' className='w-full'>
					Submit
				</Button>
			</div>
		</FormWrapper>
	)
}
