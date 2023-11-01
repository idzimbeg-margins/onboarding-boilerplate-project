/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'

import { useGetBooksQuery } from '@/entities/book'
import { BookProps } from '@/entities/book/model'
import { BookModal } from '@/entities/book/ui/BookModal'
import { Modal } from '@/shared'
import { Table } from '@/shared/ui/Table'
import { ColumnDef } from '@tanstack/react-table'

export const BookTableWithoutPagination = () => {
	const { data: books } = useGetBooksQuery('books')

	const cols = useMemo<ColumnDef<BookProps>[]>(
		() => [
			{
				header: 'Book Name',
				accessorKey: 'name',
				accessorFn: (row) => row.name,
				cell: (props: any) => {
					return (
						<Modal
							name={props.row.original.name}
							children={
								<BookModal
									id={props.row.original.id}
									name={props.row.original.name}
								/>
							}
						/>
					)
				}
			}
		],
		[]
	)
	if (!books) return

	return <Table data={books} columns={cols.reverse()} />
}
