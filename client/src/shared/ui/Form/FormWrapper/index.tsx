// ** React Imports
import * as Form from '@radix-ui/react-form'
import { ReactNode } from 'react'

interface FormProps {
	onSubmit: (...args: any) => any
	children: ReactNode
}

export const FormWrapper = ({ onSubmit, children }: FormProps) => {
	return (
		<Form.Root noValidate autoComplete='off' onSubmit={onSubmit}>
			{children}
		</Form.Root>
	)
}
