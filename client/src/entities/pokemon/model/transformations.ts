import { PokemonModalProps } from './types'

export const dataToPokemonData = (data: any): PokemonModalProps => {
	return {
		id: data && +data.id - 1,
		name: data && data.name.toUpperCase(),
		url: data && data.sprites.front_default,
		types: data && data.types.map((type: any) => type.type.name)
	}
}
