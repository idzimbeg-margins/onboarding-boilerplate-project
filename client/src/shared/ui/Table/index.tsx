import { filterFns } from '@/shared'
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
		<div className='flex w-full flex-col'>
			{showGlobalFilter && (
				<Search
					value={globalFilter ?? ''}
					onChange={(value) => setGlobalFilter(String(value))}
					placeholder='Search...'
				/>
			)}
			<table className='shadow-border-shadow my-2 overflow-x-hidden rounded-sm p-2'>
				<TbHeader table={table} />
				<TbBody table={table} />
			</table>
			{showNavigation && <Pagination table={table} />}
		</div>
	)
}
