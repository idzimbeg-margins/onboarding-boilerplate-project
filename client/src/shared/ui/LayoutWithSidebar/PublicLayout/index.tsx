import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { LayoutWrapper } from '../styles'

const LoginFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	padding: 10rem;
	height: 100%;
`
export const PublicLayout = () => {
	return (
		<LayoutWrapper>
			<LoginFormWrapper>
				<h2>Login</h2>
				<Outlet />
			</LoginFormWrapper>
		</LayoutWrapper>
	)
}
