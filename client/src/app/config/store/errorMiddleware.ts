import type { Middleware, MiddlewareAPI } from '@reduxjs/toolkit'
import { isRejectedWithValue } from '@reduxjs/toolkit'

export const errorMiddleware: Middleware =
	(_: MiddlewareAPI) => (next) => (action) => {
		if (isRejectedWithValue(action)) {
			// Display toast message...
		}

		return next(action)
	}
