import { useMeQuery } from '@/entities/user'

export const Auth = ({ children }: { children?: React.ReactNode }) => {
	const { isLoading } = useMeQuery()

	if (isLoading) {
		return (
			<div>
				<p>Loading...</p>
			</div>
		)
	}

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{children}</>
}
