import { sessionReducer } from '@/entities/session'
import { userReducer } from '@/entities/user'
import { baseApi, basePokeApi, baseUserApi } from '@/shared/api/baseApi'
import { type ConfigureStoreOptions } from '@reduxjs/toolkit'

export const rootReducer: ConfigureStoreOptions['reducer'] = {
	[baseApi.reducerPath]: baseApi.reducer,
	[basePokeApi.reducerPath]: basePokeApi.reducer,
	[baseUserApi.reducerPath]: baseUserApi.reducer,
	session: sessionReducer,
	user: userReducer
}
