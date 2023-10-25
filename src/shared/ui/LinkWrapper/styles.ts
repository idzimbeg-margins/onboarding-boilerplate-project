import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface LinkProps {
	children?: React.ReactNode
	href: string
	icon?: string
	text?: string
}

interface StyledLinkWrapperProps {
	$table?: boolean
}

export const StyledLink = styled(Link)<LinkProps>`
	text-decoration: none;
	color: black;
	cursor: pointer;
	height: 100%;
	width: 100%;
	padding: 0rem;
	&::before {
		content: ${(props) => (props.icon ? props.icon : '')};
	  }
	
	  @media (min-width: 769px) {
		&::before {
		  content: ${(props) => (props.text ? props.text : '')};
		}
`

export const StyledLinkWrapper = styled.div<StyledLinkWrapperProps>`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	width: 85%;
	border-bottom: ${({ $table }) => ($table ? 'none' : '0.5px solid black')};
	margin-bottom: 0.5rem;

	&:hover {
		border-bottom: ${({ $table }) => ($table ? 'none' : '0.5px solid #26a199')};
	}
	&:hover ${StyledLink} {
		color: #26a199;
	}
`
