import { flexRender } from '@tanstack/react-table'

interface TbBodyProps {
	table: any
}

export const TbBody = ({ table }: TbBodyProps) => {
	return (
		<tbody className='bg-text-base text-text-main'>
			{table.getRowModel().rows.map((row: any) => (
				<tr className='h-8 cursor-pointer p-2' key={row.id}>
					{row.getVisibleCells().map((cell: any) => (
						<td className='border-b-grey-100 mb-2 border-b-2 p-2' key={cell.id}>
							{flexRender(cell.column.columnDef.cell, cell.getContext())}
						</td>
					))}
				</tr>
			))}
		</tbody>
	)
}
