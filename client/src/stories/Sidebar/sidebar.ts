import styled from 'styled-components'

export const StyledLink = styled.a`
	text-decoration: none;
	color: black;
	cursor: pointer;
	height: 100%;
	width: 100%;
	padding: 0rem;
`
interface StyledLinkWrapperProps {
	$table?: boolean
}

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
