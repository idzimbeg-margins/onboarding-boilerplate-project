import { PokeSProps } from '@/entities/pokemon/model/types'

export interface ContentCardProps {
	name: string
	url?: string
	id?: string
	hasImage?: boolean
	stats?: PokeSProps[]
	types?: any
}
