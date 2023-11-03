import { baseUserApi } from '@/shared/api/baseApi'
import { type User } from '../model/types'

export const userApi = baseUserApi.injectEndpoints({
	endpoints: (build) => ({
		me: build.query<ApiResponse<User>, void>({
			query: () => ({
				url: '/users/me'
			})
		})
	})
})

export const { useMeQuery } = userApi
