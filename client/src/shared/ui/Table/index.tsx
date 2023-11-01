import { filterFns } from '@/utils'
import type { ColumnDef, FilterFn, SortingState } from '@tanstack/react-table'
import {
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table'
import { useState } from 'react'
import { Pagination } from '../Pagination'

import { Search } from '../Search'
import { TbBody } from './TableBody'
import { TbHeader } from './TableHeader'
import { TableWrapper, TableWrapperWithNavigation } from './styles'

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
	filterFn = filterFns.fuzzy
}: ReactTableProps<T>) => {
	const [globalFilter, setGlobalFilter] = useState('')
	const [sorting, setSorting] = useState<SortingState>([])

	const table = useReactTable({
		data,
		columns,
		state: {
			globalFilter,
			sorting
		},
		globalFilterFn: filterFn,
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onGlobalFilterChange: setGlobalFilter,
		getSortedRowModel: getSortedRowModel()
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
				<TbHeader table={table} />
				<TbBody table={table} />
			</TableWrapper>
			{showNavigation && <Pagination table={table} />}
		</TableWrapperWithNavigation>
	)
}
