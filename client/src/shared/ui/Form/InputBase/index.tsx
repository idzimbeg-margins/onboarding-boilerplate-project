import { cn } from '@/shared/lib/utils/cn'
import type { UseFormRegisterReturn } from 'react-hook-form'

export interface InputBaseProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	registration?: Partial<UseFormRegisterReturn>
	isError?: boolean
}

/**
 * Base component for all inputs.
 * @param registration - React Hook Form registration object
 */
export const InputBase = ({
	isError,
	registration,
	className,
	...props
}: InputBaseProps) => {
	return (
		<input
			className={cn(
				'rounded border border-slate-300 bg-transparent px-4 py-2 focus:border-blue-300 focus:outline-none',
				isError && 'border-rose-500 focus:border-rose-300',
				className
			)}
			{...props}
			{...registration}
		/>
	)
}
