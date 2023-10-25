interface PaginationPageSelectorProps {
	table: any
	title: string
}

export const PaginationPageSelector = ({
	table,
	title
}: PaginationPageSelectorProps) => {
	return (
		<span style={{ marginRight: '0.5rem' }}>
			{title}
			<input
				type='number'
				style={{
					width: '100px',
					textAlign: 'center',
					marginLeft: '0.5rem'
				}}
				defaultValue={table.getState().pagination.pageIndex + 1}
				onChange={(e) => {
					const page = e.target.value ? Number(e.target.value) - 1 : 0
					table.setPageIndex(page)
				}}
			/>
		</span>
	)
}
