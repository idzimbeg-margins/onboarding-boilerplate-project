import { StyledLink, StyledLinkWrapper } from './styles'

interface LinkProps {
	children?: React.ReactNode
	to: string
	table?: boolean
}

export const LinkWrapper = ({ children, to, table }: LinkProps) => {
	return (
		<StyledLinkWrapper $table={table}>
			<StyledLink to={to}>{children}</StyledLink>
		</StyledLinkWrapper>
	)
}
