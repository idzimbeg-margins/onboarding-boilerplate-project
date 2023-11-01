import { StyledButton } from '@/shared/ui/Button/styles'
import { StyledPaginationPageNavigation } from '@/shared/ui/Pagination/PaginationNavigation/styles'
import { StyledPaginationPageSelector } from '@/shared/ui/Pagination/PaginationPageActions/styles'
import { PaginationPageDisplay } from '@/shared/ui/Pagination/PaginationPageDisplay'
import { StyledPaginationWrapper } from '@/shared/ui/Pagination/styles'

export const MockPagination = () => {
	return (
		<StyledPaginationWrapper>
			<PaginationPageDisplay table={null} title='Page' />
			<StyledPaginationPageNavigation>
				<StyledButton
					style={{ marginBottom: '1rem' }}
					size='small'
					color='primary'
					variant='secondary'
					onClick={() => {}}
				>
					{'<<'}
				</StyledButton>
				<StyledButton
					style={{ marginBottom: '1rem' }}
					size='small'
					color='primary'
					variant='secondary'
					onClick={() => {}}
				>
					{'<'}
				</StyledButton>
				<StyledButton
					style={{ marginBottom: '1rem' }}
					size='small'
					color='primary'
					variant='secondary'
					onClick={() => {}}
				>
					{'>'}
				</StyledButton>
				<StyledButton
					style={{ marginBottom: '1rem' }}
					size='small'
					color='primary'
					variant='secondary'
					onClick={() => {}}
				>
					{'>>'}
				</StyledButton>
			</StyledPaginationPageNavigation>

			<StyledPaginationPageSelector>
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
			</StyledPaginationPageSelector>
		</StyledPaginationWrapper>
	)
}
