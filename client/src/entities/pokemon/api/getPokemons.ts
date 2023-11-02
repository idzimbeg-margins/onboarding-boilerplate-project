import { basePokeApi } from '@/shared'
import { PokemonDetailProps, PokemonProps } from '../model/types'

export const pokemonApi = basePokeApi.injectEndpoints({
	endpoints: (build) => ({
		getPokemons: build.query<PokemonProps, string>({
			query: () => `pokemon?limit=151`,
			providesTags: ['Pokemon'],
			transformResponse: (response: any) => {
				return response
			}
		}),
		getPokemon: build.query<PokemonDetailProps, string>({
			query: (name) => `/pokemon/${name}`,
			providesTags: ['Pokemon']

			// transformResponse: (res: any) => {
			// 	if (!res) {
			// 		return {
			// 			id: 0, // Provide a default value for id
			// 			name: null,
			// 			url: null,
			// 			types: [],
			// 			stats: [], // Provide default value for stats
			// 			species: { url: '' }, // Provide default value for species
			// 			sprites: { front_default: '' } // Provide default value for sprites
			// 		}
			// 	}

			// 	const parsedId = res.id ? parseInt(res.id, 10) : 0

			// 	return {
			// 		id: isNaN(parsedId) ? 0 : parsedId,
			// 		name: res.name ? res.name.toUpperCase() : null,
			// 		url: res.sprites ? res.sprites.front_default : null,
			// 		types: res.types ? res.types.map((type: any) => type.type.name) : [],
			// 		stats: [], // Provide default value for stats
			// 		species: { url: '' }, // Provide default value for species
			// 		sprites: { front_default: '' } // Provide default value for sprites
			// 	}
			// }
		})
	})
})

export const { useGetPokemonsQuery, useGetPokemonQuery } = pokemonApi
