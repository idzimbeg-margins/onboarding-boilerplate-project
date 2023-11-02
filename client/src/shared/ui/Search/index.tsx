import { useEffect, useState } from 'react'
import { StyledTableFilterInput } from './styles'

interface Props
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	value: string | number
	onChange: (val: string | number) => void
	debounceTime?: number
}

export const Search = ({
	value: initialValue,
	onChange,
	debounceTime = 300,
	...props
}: Props) => {
	const [value, setValue] = useState(initialValue)

	useEffect(() => {
		setValue(initialValue)
	}, [initialValue])

	useEffect(() => {
		const timeout = setTimeout(() => {
			onChange(value)
		}, debounceTime)

		return () => {
			clearTimeout(timeout)
		}
	}, [value, onChange, debounceTime])

	return (
		<StyledTableFilterInput
			{...props}
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	)
}
