import { TextField } from '@/shared/ui/Form/TextField'
import { useEffect, useState } from 'react'
import { PokemonSearchProps } from '../model'

export const PokemonSearch = ({
	value: initialValue,
	onChange,
	debounceTime = 300,
	...props
}: PokemonSearchProps) => {
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
		<TextField
			{...props}
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	)
}
