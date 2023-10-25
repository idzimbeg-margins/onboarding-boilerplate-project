import styled from 'styled-components'

export const TableWrapper = styled.table`
	flex: 0 0 auto;
	width: 100%;
	padding: 0.5rem;
	overflow-x: hidden;
	border: 0.5px solid #26a199;
	border-radius: 0.5rem;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
`
export const TableWrapperWithNavigation = styled.div`
	display: flex;
	flex-direction: column;
`

export const TableHeader = styled.thead`
	background: #26a199;
	color: white;
	padding: 0;
`

export const TableBody = styled.tbody`
	background: white;
	color: black;
`

export const TableRow = styled.tr`
	padding: 0.5rem;
`
export const TableCell = styled.td`
	padding: 0.5rem;
	&:last-child {
		border-bottom: 0.5px solid #26a199;
	}
	margin-bottom: 0.5rem;
`
