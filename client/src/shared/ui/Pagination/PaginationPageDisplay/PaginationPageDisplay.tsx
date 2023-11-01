import {
	StyledPaginationDisplayTitle,
	StyledPaginationPageCount,
	StyledPaginationPageDisplay
} from './styles'

interface PaginationPageCountDisplayProps {
	table: any
	title: string
}

export const PaginationPageDisplay = ({
	table,
	title
}: PaginationPageCountDisplayProps) => {
	const currentPage = table && table.getState().pagination.pageIndex + 1
	const pageCount = table && table.getPageCount()

	return (
		<StyledPaginationPageDisplay>
			<StyledPaginationDisplayTitle>{title}</StyledPaginationDisplayTitle>
			<StyledPaginationPageCount>
				{currentPage} of {pageCount}
			</StyledPaginationPageCount>
		</StyledPaginationPageDisplay>
	)
}
