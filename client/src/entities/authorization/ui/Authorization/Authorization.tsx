import { UserRole } from '@/entities/user'
import { useAuthorization } from '../../lib/useAuthorization'

type AuthorizationProps = {
	forbiddenFallback?: React.ReactNode
	children: React.ReactNode
} & (
	| {
			allowedRoles: UserRole[]
			policyCheck?: never
	  }
	| {
			allowedRoles?: never
			policyCheck: boolean
	  }
)

export const Authorization = ({
	policyCheck,
	allowedRoles,
	forbiddenFallback,
	children
}: AuthorizationProps) => {
	const { checkAccess } = useAuthorization()

	let canAccess = false

	if (allowedRoles) {
		canAccess = checkAccess({ allowedRoles })
	}

	if (typeof policyCheck !== 'undefined') {
		canAccess = policyCheck
	}

	return <>{canAccess ? children : forbiddenFallback}</>
}
