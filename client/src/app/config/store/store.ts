import { sessionReducer } from '@/entities/session'
import { userReducer } from '@/entities/user'
import { baseApi, basePokeApi } from '@/shared'
import { baseUserApi } from '@/shared/api/baseApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		[basePokeApi.reducerPath]: basePokeApi.reducer,
		[baseUserApi.reducerPath]: baseUserApi.reducer,
		session: sessionReducer,
		user: userReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([
			baseApi.middleware,
			basePokeApi.middleware,
			baseUserApi.middleware
		])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
