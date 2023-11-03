import { useId } from 'react'
import { FormControl } from '../FormControl/FormControl'
import { FormControlLabel } from '../FormControlLabel/FormControlLabel'
import { FormHelperText } from '../FormHelperText/FormHelperText'
import { InputBase, type InputBaseProps } from '../InputBase'

interface Props extends InputBaseProps {
	isError?: boolean
	helperText?: string
	label?: string
}

export const TextField = ({
	isError,
	helperText,
	label,
	className,
	...props
}: Props) => {
	const inputId = useId()
	const helperTextId = useId()

	return (
		<FormControl className={className} isError={isError}>
			{label && (
				<FormControlLabel htmlFor={inputId} isError={isError}>
					{label}
				</FormControlLabel>
			)}
			<InputBase
				id={inputId}
				aria-describedby={helperTextId}
				isError={isError}
				{...props}
			/>
			{helperText && (
				<FormHelperText id={helperTextId} isError={isError}>
					{helperText}
				</FormHelperText>
			)}
		</FormControl>
	)
}
