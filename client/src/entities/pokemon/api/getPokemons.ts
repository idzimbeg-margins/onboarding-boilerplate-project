import { basePokeApi } from '@/shared'
import { PProps, PokemonProps } from '../model/types'
import { resDataToPokeResults } from '../model'

export const pokemonApi = basePokeApi.injectEndpoints({
	endpoints: (build) => ({
		getPokemons: build.query<PokemonProps, string>({
			query: () => `pokemon?limit=151`,
			providesTags: ['Pokemon'],
			transformResponse: (response: any) => {
				return response
			}
		}),
		getPokemon: build.query<PProps, string>({
			query: (name) => `/pokemon/${name}`,
			providesTags: ['Pokemon'],
			transformResponse: (res: PProps): PProps => {
				return resDataToPokeResults(res)
			}
		})
	})
})

export const { useGetPokemonsQuery, useGetPokemonQuery } = pokemonApi
