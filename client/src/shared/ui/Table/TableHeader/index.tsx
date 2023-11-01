import { flexRender } from '@tanstack/react-table'
import styled from 'styled-components'
import { TableRow } from '../TableBody/styles'
import { TableHeader } from './styles'

type FilterButtonProps = JSX.IntrinsicElements['div']

interface FilterButtonPropsExtended extends FilterButtonProps {
	header: any
}

export const FilterButton = ({ header }: FilterButtonPropsExtended) => {
	return (
		<div onClick={header.column.getToggleSortingHandler()}>
			{flexRender(header.column.columnDef.header, header.getContext())}
			↕️
		</div>
	)
}
export const StyledFilterButton = styled(FilterButton)`
	width: 100%;
	height: 100%;
`

interface TbHeaderProps {
	table: any
}

export const TbHeader = ({ table }: TbHeaderProps) => {
	return (
		<TableHeader>
			{table.getHeaderGroups().map((headerGroup: any) => (
				<TableRow key={headerGroup.id}>
					{headerGroup.headers.map((header: any) => (
						<th key={header.id}>
							{header.isPlaceholder ? null : (
								<StyledFilterButton header={header} />
							)}
						</th>
					))}
				</TableRow>
			))}
		</TableHeader>
	)
}
