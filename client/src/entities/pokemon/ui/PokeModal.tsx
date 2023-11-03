import { ModalPortal } from '@/shared/ui/Modal/ModalPortal'
import { useGetPokemonQuery } from '../api/getPokemons'
import { PProps } from '../model/types'
import { PokeCard } from './PokeCard'

export const PokemonModal = ({ name }: PProps) => {
	const { data } = useGetPokemonQuery(name)
	if (!data) return
	const {
		id: idFromRes,
		name: nameFromRes,
		url: pokemonUrl,
		types: pokemonTypes
	} = data
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
