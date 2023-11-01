import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//** If using more than one API make sure that reducerPath is unique,
//** also it is a better practice not to have multiple APIs
//** but to change endpoints from the same API

export const baseApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://652e8ad20b8d8ddac0b190f5.mockapi.io/api/v1/'
	}),
	reducerPath: 'book',
	tagTypes: ['Book'],
	endpoints: () => ({})
})

export const basePokeApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://pokeapi.co/api/v2'
	}),
	reducerPath: 'pokemon',
	tagTypes: ['Pokemon'],
	endpoints: () => ({})
})

export const baseUserApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://127.0.0.1:3500',
		credentials: 'include' //** This is needed for persist logged in User
	}),
	endpoints: (builder) => ({})
})
