export interface PokemonProps {
	results: {
		name: string
		sprites: PSpritesProps
	}[]
}
export interface PokemonDetailProps {
	id: number
	name: string
	stats: PokeSProps[]
	species: PSpeciesProps
	sprites: PSpritesProps
}

export interface PProps {
	id: number
	name: string
	url?: string
	stats?: PokeSProps[]
	types?: PTypeProps[]
	species?: PSpeciesProps
	sprites?: PSpritesProps
	results?: PResultsProps[]
}

export type PokemonModalProps = Pick<
	PProps,
	'id' | 'name' | 'url' | 'stats' | 'types'
>
export type PDetailProps = Pick<
	PProps,
	'id' | 'name' | 'url' | 'species' | 'sprites'
>

export interface PokeSProps {
	name: string
	value: number
}
export interface PSpritesProps {
	front_default: string
}
export interface PResultsProps {
	name: string
	sprites: {
		front_default: string
	}
}
export interface PSpeciesProps {
	url: string
}
export interface PTypeProps {
	type: {
		name: string
	}
}
