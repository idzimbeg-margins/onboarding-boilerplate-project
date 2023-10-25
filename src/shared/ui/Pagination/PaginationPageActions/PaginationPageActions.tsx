import { PaginationPageItemNumberSelector } from './PaginationPageItemNumberSelector'
import { PaginationPageSelector } from './PaginationPageSelector'
import { StyledPaginationPageSelector } from './styles'

interface PaginationPageSelectorWrapperProps {
	table: any
}

export const PaginationPageActions = ({
	table
}: PaginationPageSelectorWrapperProps) => {
	return (
		<StyledPaginationPageSelector>
			<PaginationPageSelector table={table} title='Go to page:' />
			<PaginationPageItemNumberSelector table={table} />
		</StyledPaginationPageSelector>
	)
}
