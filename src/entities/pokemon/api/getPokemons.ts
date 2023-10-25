import { basePokeApi } from '@/shared'
import { PokemonDetailProps, PokemonProps } from '../model/types'

const pokemonApi = basePokeApi.injectEndpoints({
	endpoints: (build) => ({
		getPokemons: build.query<PokemonProps, string>({
			query: () => `pokemon?limit=151`,
			providesTags: ['Pokemon']
		}),
		getPokemon: build.query<PokemonDetailProps, string>({
			query: (name) => `/pokemon/${name}`,
			providesTags: ['Pokemon']
		})
	})
})

export const { useGetPokemonsQuery, useGetPokemonQuery } = pokemonApi
