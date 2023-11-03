import { PokeSProps } from '@/entities/pokemon/model/types'

export interface ContentCardProps {
	name: string
	url?: string
	id?: number
	hasImage?: boolean
	stats?: PokeSProps[]
	types?: any
}
export interface BadgeProps {
	name: string
	value?: number
}
