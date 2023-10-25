import { useGetPokemonQuery } from '@/entities/pokemon/api/getPokemons'
import { PokemonDetail } from '@/widgets/Pokemon/ui/PokemonDetail'
import { useParams } from 'react-router-dom'

export const PokeDetailsPage = () => {
	const { pokemonId } = useParams<{ pokemonId: string }>()

	if (!pokemonId) {
		return <div>Pokemon ID not found in URL.</div>
	}

	const idToFetch = String(Number(pokemonId) + 1)

	const { data: poke, isLoading } = useGetPokemonQuery(idToFetch)
	if (isLoading) {
		return <div>Loading...</div>
	}

	if (!poke) {
		return <div>Pokemon not found.</div>
	}
	const pokemonName = poke.name.toUpperCase()
	const pokemonUrlImage = poke.sprites.front_default

	return (
		<PokemonDetail url={pokemonUrlImage} name={pokemonName} id={idToFetch} />
	)
}
