export interface PokemonSearchProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	value: string | number
	onChange: (val: string | number) => void
	debounceTime?: number
}
