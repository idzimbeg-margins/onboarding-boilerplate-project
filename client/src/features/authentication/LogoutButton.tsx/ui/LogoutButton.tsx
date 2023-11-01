import { useLogoutMutation } from '@/entities/session'
import { Button } from '@radix-ui/themes'

export const LogoutButton = () => {
	const [logout, { isLoading }] = useLogoutMutation()

	return <Button onClick={() => logout()}>Log Out</Button>
}
