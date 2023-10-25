// ** Third Party Imports
import styled from 'styled-components'

interface ButtonProps {
	size: string
	color: string
	variant: string
}

export const StyledButton = styled.button<ButtonProps>`
	cursor: pointer;
	display: inline-flex;
	border: none;
	align-items: center;
	border-radius: 0.5rem;
	justify-content: center;

	font-style: normal;
	font-weight: 600;

	&:hover {
		background: #26a199;
	}

	${({ size }) =>
		`padding: ${size === 'small' ? '0.25rem 0.5rem' : '0.5rem 1rem'};`}

	${({ size }) => `font-size: ${size === 'small' ? '0.75rem' : '1rem'};`}

	${({ color, variant, theme }) =>
		variant === 'secondary' &&
		`
      color: ${theme.pallette[color].main}; 
      background: #fff;
      border: 1px solid ${theme.pallette[color].main};

      &:hover {
        color: #fff;
      }
  `}

	${({ color, variant, theme }) =>
		variant === 'primary' &&
		`
    color: #fff;
    background: ${theme.pallette[color].main};
  `}

	${({ color, variant, theme }) =>
		variant === 'text' &&
		`
    color: ${theme.pallette[color].main}; 
    background: #fff;
    border: none;
  `}
`
