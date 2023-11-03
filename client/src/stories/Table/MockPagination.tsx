import { Button } from '@/shared/ui'
import { PaginationPageDisplay } from '@/shared/ui/Pagination/PaginationPageDisplay'

export const MockPagination = () => {
	return (
		<div>
			<PaginationPageDisplay table={null} title='Page' />
			<div>
				<Button size='sm' color='primary' onClick={() => {}}>
					{'<<'}
				</Button>
				<Button size='sm' color='primary' onClick={() => {}}>
					{'<'}
				</Button>
				<Button size='sm' color='primary' onClick={() => {}}>
					{'>'}
				</Button>
				<Button size='sm' color='primary' onClick={() => {}}>
					{'>>'}
				</Button>
			</div>

			<span>
				<span>
					Go to page:
					<input type='number' defaultValue={1} onChange={() => {}} />
				</span>

				<select value={1} onChange={() => {}}>
					{[10, 20, 30, 40, 50].map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							Show {pageSize}
						</option>
					))}
				</select>
			</span>
		</div>
	)
}
