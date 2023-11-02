// Import necessary modules and components

import {
	TableWrapper,
	TableWrapperWithNavigation
} from '@/shared/ui/Table/styles'
import type { StoryObj } from '@storybook/react'
import { Search, Table } from '../../shared'
import { MockPagination } from './MockPagination'

const meta = {
	title: 'Example/Table',
	component: Table,
	parameters: {
		// layout: 'centered'
	},
	tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Table>

const headers = [{ id: 'name', headers: ['Name'] }]
const rows = [['bulbasaur'], ['ivysaur'], ['venusaur'], ['charmander']]

interface StoryProps {
	args: any
	render: (args: any) => JSX.Element
	showGlobalFilter?: boolean
	showNavigation?: boolean
}

export const Primary: StoryProps = {
	args: {
		headers: [{ id: 'name', headers: ['Name'] }],
		rows: [['bulbasaur'], ['ivysaur'], ['venusaur'], ['charmander']],
		showGlobalFilter: true,
		showNavigation: true
	},
	render: (args) => (
		<TableWrapperWithNavigation>
			{args.showGlobalFilter && (
				<Search value={''} onChange={() => {}} placeholder='Search...' />
			)}
			<TableWrapper>
				<thead>
					{args.headers.map((header: any) => (
						<tr key={header.id}>
							{header.headers.map((header: any) => (
								<th key={header}>{header}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{args.rows.map((row: any) => (
						<tr key={row.id}>
							{row.map((cell: any) => (
								<td key={cell.id}>{row}</td>
							))}
						</tr>
					))}
				</tbody>
			</TableWrapper>
			{args.showNavigation && <MockPagination />}
		</TableWrapperWithNavigation>
	)
}
