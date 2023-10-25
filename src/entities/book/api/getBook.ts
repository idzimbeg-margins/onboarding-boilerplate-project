import { baseApi } from '@/shared'
import type { BookProps } from '../model'

const bookApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getBooks: build.query<BookProps[], string>({
			query: () => `/books`,
			providesTags: ['Book']
		}),
		getBook: build.query<BookProps, string>({
			query: (id) => `/books/${id}`,
			providesTags: ['Book']
		})
	})
})

export const { useGetBooksQuery, useGetBookQuery } = bookApi
