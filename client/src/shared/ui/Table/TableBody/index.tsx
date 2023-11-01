import { flexRender } from '@tanstack/react-table'
import { TableBody, TableCell, TableRow } from './styles'
interface TbBodyProps {
	table: any
}

export const TbBody = ({ table }: TbBodyProps) => {
	return (
		<TableBody>
			{table.getRowModel().rows.map((row: any) => (
				<TableRow key={row.id}>
					{row.getVisibleCells().map((cell: any) => (
						<TableCell key={cell.id}>
							{flexRender(cell.column.columnDef.cell, cell.getContext())}
						</TableCell>
					))}
				</TableRow>
			))}
		</TableBody>
	)
}
