import { bookApi } from '@/entities/book/api/getBook'
import { pokemonApi } from '@/entities/pokemon/api/getPokemons'
import { userApi } from '@/entities/user'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { sessionApi } from '../api/sessionApi'

interface SessionState {
	isAuthenticated: boolean
}

const initialState: SessionState = {
	isAuthenticated: false
}

const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		setIsAuthenticated(state, action: PayloadAction<boolean>) {
			state.isAuthenticated = action.payload
		}
	},
	extraReducers: (build) => {
		build.addMatcher(sessionApi.endpoints.login.matchFulfilled, (state) => {
			state.isAuthenticated = true
		})
		build.addMatcher(
			sessionApi.endpoints.getPokemons.matchFulfilled,
			(state) => {
				state.isAuthenticated = true
			}
		)
		build.addMatcher(
			pokemonApi.endpoints.getPokemons.matchFulfilled,
			(state) => {
				state.isAuthenticated = true
			}
		)
		build.addMatcher(
			sessionApi.endpoints.getPokemon.matchFulfilled,
			(state) => {
				state.isAuthenticated = true
			}
		)
		build.addMatcher(
			pokemonApi.endpoints.getPokemon.matchFulfilled,
			(state) => {
				state.isAuthenticated = true
			}
		)
		build.addMatcher(sessionApi.endpoints.getBooks.matchFulfilled, (state) => {
			state.isAuthenticated = true
		})
		build.addMatcher(sessionApi.endpoints.getBook.matchFulfilled, (state) => {
			state.isAuthenticated = true
		})
		build.addMatcher(bookApi.endpoints.getBooks.matchFulfilled, (state) => {
			state.isAuthenticated = true
		})
		build.addMatcher(bookApi.endpoints.getBook.matchFulfilled, (state) => {
			state.isAuthenticated = true
		})
		build.addMatcher(userApi.endpoints.me.matchFulfilled, (state) => {
			state.isAuthenticated = true
		})
		build.addMatcher(sessionApi.endpoints.logout.matchFulfilled, (state) => {
			state.isAuthenticated = false
		})
	}
})

export const sessionReducer = sessionSlice.reducer
export const { setIsAuthenticated } = sessionSlice.actions
