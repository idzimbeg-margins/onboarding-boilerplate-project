import styled from 'styled-components'

export const DialogOverlay = styled.div`
	background-color: var(--black-a9);
	position: fixed;
	inset: 0;
	animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`
export const DialogContent = styled.div`
	background-color: white;
	border-radius: 6px;
	box-shadow:
		hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
		hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90vw;
	max-width: 450px;
	max-height: 85vh;
	padding: 25px;
	animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
	&::focus {
		outline: none;
	}
`
export const DialogTitle = styled.h2`
	margin: 0;
	font-weight: 500;
	color: var(--mauve-12);
	font-size: 17px;
`

export const DialogDescription = styled.p`
	margin: 10px 0 20px;
	color: var(--mauve-11);
	font-size: 15px;
	line-height: 1.5;
`

export const Button = styled.button`
	cursor: pointer;
	background-color: transparent;
	border: none;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0 15px;
	font-size: 15px;
	line-height: 1;
	font-weight: 500;
	height: 100%;
	width: 100%;
	&:hover {
		color: #26a199;
`

export const IconButton = styled.button`
	font-family: inherit;
	border-radius: 100%;
	height: 25px;
	width: 25px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	color: var(--violet-11);
	position: absolute;
	top: 10px;
	right: 10px;
`

export const Fieldset = styled.fieldset`
	display: flex;
	gap: 20px;
	align-items: center;
	margin-bottom: 15px;
`

export const Label = styled.label`
	font-size: 15px;
	color: var(--violet-11);
	width: 90px;
	text-align: right;
`

export const Input = styled.input`
	width: 100%;
	flex: 1;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	padding: 0 10px;
	font-size: 15px;
	line-height: 1;
	color: var(--violet-11);
	box-shadow: 0 0 0 1px var(--violet-7);
	height: 35px;
}
&&:focus {
	box-shadow: 0 0 0 2px var(--violet-8);
`
