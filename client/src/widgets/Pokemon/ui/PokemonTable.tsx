import { PokemonTableWithModal } from '@/features/pokemon/pokemon-table/ui'
import { PokemonTableContainer } from './styles'

export const PokemonTable = () => {
	return (
		<PokemonTableContainer>
			<PokemonTableWithModal />
		</PokemonTableContainer>
	)
}
