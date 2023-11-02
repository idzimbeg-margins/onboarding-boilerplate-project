import styled from 'styled-components'

export const TableBody = styled.tbody`
	background: white;
	color: black;
`

export const TableRow = styled.tr`
	padding: 0.4rem;
	height: 2.2rem;
	cursor: pointer;
`

export const TableCell = styled.td`
	padding: 0.5rem;
	margin-bottom: 0.5rem;
	&:last-child {
		border-bottom: 1px solid #26a199;
	}
`
