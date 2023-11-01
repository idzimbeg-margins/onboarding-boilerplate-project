interface PaginationPageSelectProps {
	table: any
}

export const PaginationPageItemNumberSelector = ({
	table
}: PaginationPageSelectProps) => {
	return (
		<select
			value={table.getState().pagination.pageSize}
			onChange={(e) => {
				table.setPageSize(Number(e.target.value))
			}}
		>
			{[10, 20, 30, 40, 50].map((pageSize) => (
				<option key={pageSize} value={pageSize}>
					Show {pageSize}
				</option>
			))}
		</select>
	)
}
