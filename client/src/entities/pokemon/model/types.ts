export interface PokemonProps {
	results: {
		name: string
		sprites: {
			front_default: string
		}
	}[]
}
export interface PokemonDetailProps {
	id: number
	name: string
	stats: PokeSProps[]
	species: {
		url: string
	}
	sprites: {
		front_default: string
	}
}

export interface PProps {
	id: string
	name: string
	url?: string
	stats?: PokeSProps[]
	types?: any
	species: {
		url: string
	}
	sprites: {
		front_default: string
	}
	results: {
		name: string
		sprites: {
			front_default: string
		}
	}[]
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
