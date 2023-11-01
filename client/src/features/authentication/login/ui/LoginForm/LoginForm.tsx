import { useLoginMutation } from '@/entities/session'
import { Button } from '@/shared/ui'
import { useRef } from 'react'
import styled from 'styled-components'
export const LoginForm = () => {
	const usernameRef = useRef<HTMLInputElement>(null)
	const [login, { isLoading, isError, error }] = useLoginMutation()
	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
		if (!usernameRef.current) return

		const username = usernameRef.current.value
		if (username !== 'admin' && username !== 'user') return

		login({ username })
	}
	return (
		<form onSubmit={handleSubmit}>
			<input placeholder="'admin' or 'user'" ref={usernameRef} />
			<FormButtonWrapper>
				<Button type='submit' label='Login' />
				{isLoading && <span>Loading...</span>}
			</FormButtonWrapper>
		</form>
	)
}

const FormButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
`
