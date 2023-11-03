import { useLoginMutation } from '@/entities/session'
import { Button, FormWrapper } from '@/shared/ui'
import { TextField } from '@/shared/ui/Form/TextField'
import { Controller, useForm } from 'react-hook-form'

type FormInputs = {
	name: string
}

export const LoginForm = () => {
	const [login, { isLoading, isError, error }] = useLoginMutation()
	const defaultValues = {
		name: ''
	}

	const { getValues, watch, control } = useForm<FormInputs>({
		defaultValues,
		mode: 'onChange'
	})
	const userName = watch('name')

	const handleLogin = () => {
		if (!userName) return

		const username = getValues('name')
		if (username !== 'admin' && username !== 'user') return
		console.log('username', username)

		login({
			username
		})
	}

	return (
		<FormWrapper onSubmit={handleLogin}>
			<Controller
				name='name'
				control={control}
				render={({ field: { value, onChange } }) => (
					<TextField
						value={value}
						className='mb-4 w-full'
						onChange={onChange}
						label="'admin' or 'user'"
					/>
				)}
			/>
			<Button type='submit' isLoading={isLoading} className='w-full'>
				Submit
			</Button>
		</FormWrapper>
	)
}
