import { baseApi } from '@/shared'
import { Book } from '../model/types'

const createBookApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		createBook: build.mutation<any, Book>({
			query: (data) => ({
				url: '/books',
				method: 'POST',
				body: data
			}),
			invalidatesTags: ['Book']
		})
	})
})

export const { useCreateBookMutation } = createBookApi
