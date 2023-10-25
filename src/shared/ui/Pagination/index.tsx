import { PaginationPageNavigation } from './PaginationNavigation/PaginationPageNavigation'
import { PaginationPageActions } from './PaginationPageActions/PaginationPageActions'
import { PaginationPageDisplay } from './PaginationPageDisplay/PaginationPageDisplay'
import { StyledPaginationWrapper } from './styles'

interface PaginationProps {
	table: any
	showPageDisplay?: boolean
	showPaginationNavigation?: boolean
	showPaginationPageActions?: boolean
}

export const Pagination = ({
	table,
	showPageDisplay = true,
	showPaginationNavigation = true,
	showPaginationPageActions = true
}: PaginationProps) => {
	return (
		<StyledPaginationWrapper>
			{showPageDisplay && <PaginationPageDisplay title='Page' table={table} />}
			{showPaginationNavigation && <PaginationPageNavigation table={table} />}
			{showPaginationPageActions && <PaginationPageActions table={table} />}
		</StyledPaginationWrapper>
	)
}
