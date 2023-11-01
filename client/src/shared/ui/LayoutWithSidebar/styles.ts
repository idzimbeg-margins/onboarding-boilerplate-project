import styled from 'styled-components'

export const LayoutWrapper = styled.div`
	height: 100%;
	display: flex;
	@media (max-width: 769px) {
		display: flex;
		flex-direction: column;
	}
`

export const LayoutContentWrapper = styled.div`
	display: flex;
	flex-grow: 1;
	min-width: 0px;
	min-height: 100vh;
	flex-direction: column;
	padding-top: 1rem;
`

export const LayoutPageContent = styled.main`
	padding: 2rem;
`
