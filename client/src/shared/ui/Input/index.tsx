import * as Form from '@radix-ui/react-form'

import { FormFieldStyled, InputFieldStyled } from './styles'

// interface InputProps {
// 	name: string
// 	type?: HTMLInputTypeAttribute
// 	style?: React.CSSProperties
// 	value?: string
// 	label?: string
// 	fullWidth?: boolean
// 	placeholder?: string
// 	defaultValue?: string
// 	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
// }
type InputProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	name: string
	label?: string
	fullWidth?: boolean
	placeholder?: string
	defaultValue?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
	name,
	type = 'text',
	value,
	placeholder,
	label,
	defaultValue,
	style,
	onChange
}: InputProps) => {
	return (
		<FormFieldStyled name={name}>
			<Form.Control asChild>
				<InputFieldStyled
					name={name}
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder ?? ' '}
					label={label}
					defaultValue={defaultValue}
					style={style}
					$fullWidth
				/>
			</Form.Control>
		</FormFieldStyled>
	)
}
