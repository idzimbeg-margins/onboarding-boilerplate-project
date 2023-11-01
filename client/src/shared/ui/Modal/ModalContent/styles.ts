import { DialogClose } from '@radix-ui/themes'
import styled from 'styled-components'

export const DialogActions = styled.div`
	display: flex;
	margin-top: 25px;
	font-size: 0.75rem;
`
export const DialogCloseButton = styled(DialogClose)`
	flex-direction: column;
	padding: 1rem;
	width: 85%;
	margin-bottom: 0.5rem;
	font-size: 0.75rem;
`
