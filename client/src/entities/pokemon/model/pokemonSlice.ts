import { sessionApi } from '@/entities/session'
import { createSlice } from '@reduxjs/toolkit'
import { pokemonApi } from '../api/getPokemons'

interface PokemonState {
	pokemon: any
}

const initialState: PokemonState = {
	pokemon: null
}

const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {},
	extraReducers: (build) => {
		build.addMatcher(
			sessionApi.endpoints.login.matchFulfilled,
			(state, { payload }) => {
				state.pokemon = payload.data?.data || null
			}
		)
		build.addMatcher(
			pokemonApi.endpoints.getPokemons.matchFulfilled,
			(state, { payload }) => {
				state.pokemon = payload.results || null
			}
		)
		build.addMatcher(sessionApi.endpoints.logout.matchFulfilled, (state) => {
			state.pokemon = null
		})
	}
})

export const userReducer = pokemonSlice.reducer
