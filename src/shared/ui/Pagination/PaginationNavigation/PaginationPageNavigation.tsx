import { PaginationPageNavigationButton } from './PaginationPageNavigationButton'
import { StyledPaginationPageNavigation } from './styles'

interface PaginationPageSelectorsDisplayProps {
	table: any
}

export const PaginationPageNavigation = ({
	table
}: PaginationPageSelectorsDisplayProps) => {
	return (
		<StyledPaginationPageNavigation>
			<PaginationPageNavigationButton
				table={table}
				icon='<<'
				onClick={() => table.setPageIndex(0)}
				disabled={!table.getCanPreviousPage()}
			/>
			<PaginationPageNavigationButton
				table={table}
				icon='<'
				onClick={() => table.previousPage()}
				disabled={!table.getCanPreviousPage()}
			/>
			<PaginationPageNavigationButton
				table={table}
				icon='>'
				onClick={() => table.nextPage()}
				disabled={!table.getCanNextPage()}
			/>
			<PaginationPageNavigationButton
				table={table}
				icon='>>'
				onClick={() => table.setPageIndex(table.getPageCount() - 1)}
				disabled={!table.getCanNextPage()}
			/>
		</StyledPaginationPageNavigation>
	)
}
