import { flexRender } from '@tanstack/react-table'

type FilterButtonProps = JSX.IntrinsicElements['div']

interface FilterButtonPropsExtended extends FilterButtonProps {
	header: any
}
interface TbHeaderProps {
	table: any
}

export const FilterButton = ({ header }: FilterButtonPropsExtended) => {
	return (
		<div
			onClick={header.column.getToggleSortingHandler()}
			className='flex h-full w-full'
		>
			{flexRender(header.column.columnDef.header, header.getContext())}
			↕️
		</div>
	)
}

export const TbHeader = ({ table }: TbHeaderProps) => {
	return (
		<thead className='text-text-main min-h-4 shadow-border-shadow flex w-full items-center justify-center rounded-sm p-0 opacity-80'>
			{table.getHeaderGroups().map((headerGroup: any) => (
				<tr className='h-8 cursor-pointer p-2' key={headerGroup.id}>
					{headerGroup.headers.map((header: any) => (
						<th key={header.id}>
							{header.isPlaceholder ? null : <FilterButton header={header} />}
						</th>
					))}
				</tr>
			))}
		</thead>
	)
}
