/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'

import { useGetBooksQuery } from '@/entities/book'
import { Table } from '@/shared/ui/Table'
import { ColumnDef } from '@tanstack/react-table'

export const BookTableWithoutPagination = () => {
	const { data: books } = useGetBooksQuery('books')

	const cols = useMemo<ColumnDef<any>[]>(
		() => [
			{
				header: 'Book Name',
				cell: (row) => row.renderValue(),
				accessorKey: 'name'
			}
		],
		[]
	)
	if (!books) return

	return <Table data={books} columns={cols} />
}
