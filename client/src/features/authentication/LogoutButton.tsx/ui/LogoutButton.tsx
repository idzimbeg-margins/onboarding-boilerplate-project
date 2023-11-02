import { useLogoutMutation } from '@/entities/session'
import { cn } from '@/shared/lib/utils/cn'
import { Button } from '@/shared/ui'
interface LogoutButtonProps {
	className?: string
}

export const LogoutButton = ({ className }: LogoutButtonProps) => {
	const [logout, { isLoading }] = useLogoutMutation()

	return (
		<Button
			onClick={() => logout()}
			variant='text'
			className={cn('mb-2 border-t-2', className)}
		>
			Log Out
		</Button>
	)
}
