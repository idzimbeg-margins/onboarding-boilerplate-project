import { PokeCard } from '@/entities/pokemon/ui'
import { Container } from '@radix-ui/themes'
import { PokeDetailsPageProps } from '../model'

export const PokemonDetail = ({
	name,
	url,
	id,
	stats,
	types
}: PokeDetailsPageProps) => {
	return (
		<Container>
			<PokeCard name={name} url={url} id={id} stats={stats} types={types} />
		</Container>
	)
}
