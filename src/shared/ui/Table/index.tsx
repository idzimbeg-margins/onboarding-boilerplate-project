import { filterFns } from '@/utils'
import type { ColumnDef, FilterFn } from '@tanstack/react-table'
import {
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable
} from '@tanstack/react-table'
import { useState } from 'react'
import { Pagination } from '../Pagination'

import { Search } from '../Search'
import {
	TableBody,
	TableCell,
	TableHeader,
	TableRow,
	TableWrapper,
	TableWrapperWithNavigation
} from './styles'

interface ReactTableProps<T extends object> {
	data: T[]
	columns: ColumnDef<T>[]
	showGlobalFilter?: boolean
	filterFn?: FilterFn<T>
	showNavigation?: boolean
	hasDetailsCard?: boolean
}

export const Table = <T extends object>({
	data,
	columns,
	showNavigation = false,
	showGlobalFilter = false,
	filterFn = filterFns.fuzzy,
	hasDetailsCard = false
}: ReactTableProps<T>) => {
	const [globalFilter, setGlobalFilter] = useState('')

	const table = useReactTable({
		data,
		columns,
		state: {
			globalFilter
		},
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onGlobalFilterChange: setGlobalFilter,
		globalFilterFn: filterFn
	})

	return (
		<TableWrapperWithNavigation>
			{showGlobalFilter && (
				<Search
					value={globalFilter ?? ''}
					onChange={(value) => setGlobalFilter(String(value))}
					placeholder='Search...'
				/>
			)}
			<TableWrapper>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext()
										  )}
								</th>
							))}
						</tr>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows.map((row) => (
						<TableRow key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<TableCell key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</TableWrapper>
			{showNavigation && <Pagination table={table} />}
		</TableWrapperWithNavigation>
	)
}
