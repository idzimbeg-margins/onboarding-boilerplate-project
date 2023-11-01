import { ModalPortal } from '@/shared/ui/Modal/ModalPortal'
import { useGetPokemonQuery } from '../api/getPokemons'
import { PokemonModalProps, dataToPokemonData } from '../model'
import { PokeCard } from './PokeCard'

export const PokemonModal = ({ name }: PokemonModalProps) => {
	const { data } = useGetPokemonQuery(name)
	const {
		id: idFromRes,
		name: nameFromRes,
		url: pokemonUrl,
		types: pokemonTypes
	} = dataToPokemonData(data)
	return (
		<ModalPortal
			id={idFromRes}
			linkTitle='Go to Pokemon Page'
			closeButtonTitle='Close'
			hasLinkToPage
		>
			<PokeCard
				name={nameFromRes}
				id={idFromRes}
				url={pokemonUrl}
				types={pokemonTypes}
			/>
		</ModalPortal>
	)
}
