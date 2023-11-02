import { PaginationPageItemNumberSelector } from './PaginationPageItemNumberSelector'
import { PaginationPageSelector } from './PaginationPageSelector'

interface PaginationPageSelectorWrapperProps {
	table: any
}

export const PaginationPageActions = ({
	table
}: PaginationPageSelectorWrapperProps) => {
	return (
		<div className='mb-2 flex flex-col-reverse items-center justify-center align-middle md:flex-row'>
			<PaginationPageSelector table={table} title='Go to page:' />
			<PaginationPageItemNumberSelector table={table} />
		</div>
	)
}
