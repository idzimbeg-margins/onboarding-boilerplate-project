import { BookProps } from '@/entities/book/model'
import { PokemonDetailProps, PokemonProps } from '@/entities/pokemon/model'
import { type User } from '@/entities/user'
import { baseUserApi } from '@/shared/api/baseApi'
import { type RequestLoginBody } from './types'

export const sessionApi = baseUserApi.injectEndpoints({
	endpoints: (build) => ({
		login: build.mutation<ApiResponse<User>, RequestLoginBody>({
			query: (body) => ({
				url: '/auth/login',
				method: 'POST',
				body
			})
		}),
		logout: build.mutation<void, void>({
			query: () => ({
				url: '/auth/logout',
				method: 'POST'
			})
		}),
		getPokemons: build.mutation<ApiResponse<PokemonProps[]>, RequestLoginBody>({
			query: () => `pokemon?limit=151`
		}),
		getPokemon: build.query<PokemonDetailProps, string>({
			query: (name) => `/pokemon/${name}`
		}),
		getBooks: build.query<BookProps[], string>({
			query: () => `/books`
		}),
		getBook: build.query<BookProps, string>({
			query: (id) => `/books/${id}`
		})
	})
})

export const { useLoginMutation, useLogoutMutation, useGetPokemonsMutation } =
	sessionApi
