import { useEffect, useState } from 'react'
import { StyledTableFilterInput } from './styles'
import { PokemonSearchProps } from '../model/types'

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
		<StyledTableFilterInput
			{...props}
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	)
}
