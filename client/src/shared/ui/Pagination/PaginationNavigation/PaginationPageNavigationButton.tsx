import { Button } from '@/shared/ui'

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
		<Button size='sm' color='primary' onClick={onClick} disabled={disabled}>
			{icon}
		</Button>
	)
}
