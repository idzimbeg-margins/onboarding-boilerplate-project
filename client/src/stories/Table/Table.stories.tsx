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
		<div className='flex flex-col'>
			{args.showGlobalFilter && (
				<Search value={''} onChange={() => {}} placeholder='Search...' />
			)}
			<table className='shadow-border-shadow my-2 flex w-full overflow-x-hidden rounded-md p-2'>
				<thead>
					{args.headers.map((header: any) => (
						<tr key={header.id}>
							{header.headers.map((header: any) => (
								<th key={header}>{header}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody className='bg-text-base text-text-main'>
					{args.rows.map((row: any) => (
						<tr className='h-8 cursor-pointer p-2' key={row.id}>
							{row.map((cell: any) => (
								<td className='border-b-grey-300 mb-2 p-2' key={cell.id}>
									{row}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			{args.showNavigation && <MockPagination />}
		</div>
	)
}
