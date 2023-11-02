interface PaginationPageSelectorProps {
	table: any
	title: string
}

export const PaginationPageSelector = ({
	table,
	title
}: PaginationPageSelectorProps) => {
	return (
		<span className='mr-2'>
			{title}
			<input
				type='number'
				className='text-center md:ml-2'
				defaultValue={table.getState().pagination.pageIndex + 1}
				onChange={(e) => {
					const page = e.target.value ? Number(e.target.value) - 1 : 0
					table.setPageIndex(page)
				}}
			/>
		</span>
	)
}
