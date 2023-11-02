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
		<span className='mb-2 flex flex-row justify-between text-sm'>
			<h4 className='font-medium'>{title}</h4>
			<div className='font-bold md:ml-1'>
				{currentPage} of {pageCount}
			</div>
		</span>
	)
}
