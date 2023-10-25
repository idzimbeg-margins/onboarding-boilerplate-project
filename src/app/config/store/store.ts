import { baseApi, basePokeApi } from '@/shared'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
	[baseApi.reducerPath]: baseApi.reducer,
	[basePokeApi.reducerPath]: basePokeApi.reducer
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([baseApi.middleware, basePokeApi.middleware])
})
