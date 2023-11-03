import { useGetPokemonQuery } from '@/entities/pokemon/api/getPokemons'
import { PokeSProps } from '@/entities/pokemon/model/types'
import { ContentCardProps } from '@/shared/ui/ContentCard/model'
import { PokemonDetail } from '@/widgets/Pokemon/ui/PokemonDetail'
import { useParams } from 'react-router-dom'

export const PokeDetailsPage = () => {
	const { pokemonId } = useParams<{ pokemonId: string }>()

	if (!pokemonId) {
		return <div>Pokemon ID not found in URL.</div>
	}

	const idToFetch = +pokemonId

	const { data: poke, isLoading } = useGetPokemonQuery(idToFetch.toString())
	if (isLoading) {
		return <div>Loading...</div>
	}

	if (!poke) {
		return <div>Pokemon not found.</div>
	}
	const pokeDataToPokeStats = (poke: any): PokeSProps => {
		return {
			name: poke.stat.name,
			value: poke.base_stat
		}
	}

	const pokeDataToPokeDetails = (poke: any): ContentCardProps => {
		return {
			name: poke.name,
			url: poke.sprites.front_default,
			id: poke.id,
			stats: poke.stats.map(pokeDataToPokeStats),
			types: poke.types.map((type: any) => type.type.name)
		}
	}
	const {
		name: pokemonName,
		url: pokemonUrlImage,
		stats: pokemonStats,
		types: pokemonTypes
	} = poke

	return (
		<PokemonDetail
			url={pokemonUrlImage}
			name={pokemonName}
			id={idToFetch}
			stats={pokemonStats}
			types={pokemonTypes}
		/>
	)
}
