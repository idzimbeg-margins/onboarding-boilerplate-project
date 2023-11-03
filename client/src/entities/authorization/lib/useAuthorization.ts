import { UserRole } from '@/entities/user'
import { useAppSelector } from '@/shared/lib'
import { useCallback } from 'react'

export const useAuthorization = () => {
	const user = useAppSelector((state) => state.user.user)

	if (!user) throw new Error('User does not exist')

	const checkAccess = useCallback(
		({ allowedRoles }: { allowedRoles: UserRole[] }) => {
			if (allowedRoles && allowedRoles.length > 0) {
				return allowedRoles?.includes(user.role)
			}

			return false
		},
		[user.role]
	)

	return { checkAccess, role: user.role }
}
