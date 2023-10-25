export interface PokeCardProps {
	id: string
	name: string
	url?: string
}
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
	species: {
		url: string
	}
	sprites: {
		front_default: string
	}
}
