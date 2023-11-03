import { useEffect, useState } from 'react'

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
		<input
			{...props}
			value={value}
			onChange={(e) => setValue(e.target.value)}
			className=' border-primary-main active:border-primary-active focus:border-primary-active rounded-md p-2'
		/>
	)
}
