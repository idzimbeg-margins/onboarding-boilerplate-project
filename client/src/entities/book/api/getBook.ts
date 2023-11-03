import { baseApi } from '@/shared'
import type { BookProps } from '../model'

export const bookApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getBooks: build.query<BookProps[], string>({
			query: () => `/books`,
			providesTags: ['Book'],
			transformResponse: (res: any): BookProps[] => {
				if (!res) []
				return res.map((book: BookProps) => ({
					id: book.id,
					name: book.name
				}))
			}
		}),
		getBook: build.query<BookProps, string>({
			query: (id) => `/books/${id}`,
			providesTags: ['Book'],
			transformResponse: (res: any): BookProps => {
				if (!res)
					return {
						id: 0,
						name: ''
					}
				return {
					id: res ? res.id : 0,
					name: res ? res.name : ''
				}
			}
		})
	})
})

export const { useGetBooksQuery, useGetBookQuery } = bookApi
