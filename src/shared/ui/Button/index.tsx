// ** Third Party Imports
import * as Form from '@radix-ui/react-form'
import { StyledButton } from './styles'

// ** Styled Components

interface ButtonProps {
	/**
	 * Custom inline styling
	 */
	style?: React.CSSProperties | undefined
	/**
	 * Button type:
	 * If the button type is submit,
	 * then the button must be wrapped with a form component,
	 * and the form component must have na onSubmit handler.
	 */
	type?: 'button' | 'submit'
	/**
	 * Button size
	 */
	size?: 'normal' | 'small'
	/**
	 * Button type
	 */
	variant?: 'primary' | 'secondary' | 'text'
	/**
	 * Button contents
	 */
	label: string
	/**
	 * Button color
	 */
	color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
	/**
	 * Optional click handler
	 */
	onClick?: () => void
}

export const Button = ({
	size = 'normal',
	type = 'button',
	style,
	label,
	color = 'primary',
	variant = 'primary',
	onClick
}: ButtonProps) => {
	return (
		<>
			{type === 'submit' ? (
				<Form.Submit asChild>
					<StyledButton
						style={style}
						size={size}
						color={color}
						variant={variant}
					>
						{label}
					</StyledButton>
				</Form.Submit>
			) : (
				<StyledButton
					style={style}
					size={size}
					color={color}
					variant={variant}
					onClick={onClick}
				>
					{label}
				</StyledButton>
			)}
		</>
	)
}
