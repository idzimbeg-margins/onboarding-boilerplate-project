import { StyledButton } from '../../Button/styles'

interface PaginationButtonProps {
	table: any
	icon: string
	onClick: () => void
	disabled?: boolean
}

export const PaginationPageNavigationButton = ({
	table,
	icon,
	onClick,
	disabled
}: PaginationButtonProps) => {
	return (
		<StyledButton
			style={{ marginBottom: '1rem', marginRight: '0.5rem' }}
			size='small'
			color='primary'
			variant='secondary'
			onClick={onClick}
			disabled={disabled}
		>
			{icon}
		</StyledButton>
	)
}
