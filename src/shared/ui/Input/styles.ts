import * as Form from '@radix-ui/react-form'
import styled from 'styled-components'

interface InputFieldProps {
	name: string
	label?: string
	errors?: any
	$fullWidth?: boolean
	defaultValue?: string
}

export const FormFieldStyled = styled(Form.FormField)`
	position: relative;
	margin-bottom: 1rem;
`

export const FormLabelStyled = styled(Form.FormLabel)`
	top: 15px;
	left: 12px;
	color: #848898;
	padding: 0 0.25rem;
	position: absolute;
	font-size: 0.857rem;
	font-weight: 600;
	background: #fff;
	transition: 0.2s ease all;
`

export const InputFieldStyled = styled.input<InputFieldProps>`
	// Reset native styling
	appearance: none;
	border-width: 0;
	outline: none;
	width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	&::before: {
		boxsizing: border-box;
	}
	,
  &::after: {
		boxsizing: border-box;
	}

	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus,
	&:-webkit-autofill:active {
		transition: background-color 5000s ease-in-out 0s;
	}

	border: 1px solid #848898;
	padding: 0.5rem 0rem;
	font-size: 1rem;
	border-radius: 0.5rem;
	box-shadow: 0px 1px 3px 0px rgba(132, 136, 152, 0.15);

	&:focus,
	&:not(:placeholder-shown) {
		border-color: #474d65;
		~ label {
			top: -7px;
			color: #474d65;
			font-size: 0.625rem;
		}
	}
`

export const FormMessageStyled = styled(Form.Message)`
	color: ${({ theme }) => theme.pallette.error.main};
	font-size: 0.75rem;
	font-weight: 400;
`
