import { PokeSProps, PProps } from './types'

const pokeDataToPokeStats = (poke: any): PokeSProps => {
	if (!poke) {
		return {
			name: '',
			value: 0
		}
	}
	return {
		name: poke.stat.name.toUpperCase(),
		value: poke.base_stat
	}
}

export const resDataToPokeResults = (res: PProps): PProps => {
	if (!res) {
		return {
			id: 0,
			name: '',
			url: '',
			types: [{ type: { name: '' } }],
			stats: [],
			species: { url: '' },
			sprites: { front_default: '' },
			results: []
		}
	}

	return {
		id: res.id ? res.id : 0,
		name: res.name ? res.name.toUpperCase() : '',
		url: res.sprites ? res.sprites.front_default : '',
		types: res.types
			? res.types.map((type: any) => type.type.name.toUpperCase())
			: [],
		stats: res.stats && res.stats.map(pokeDataToPokeStats),
		species: { url: '' },
		sprites: { front_default: '' },
		results: []
	}
}
