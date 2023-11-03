import { PProps } from '@/entities/pokemon/model/types'
import { PokeCard } from '@/entities/pokemon/ui'
import { Container } from '@radix-ui/themes'

export const PokemonDetail = ({ name, url, id, stats, types }: PProps) => {
	return (
		<Container>
			<PokeCard name={name} url={url} id={id} stats={stats} types={types} />
		</Container>
	)
}
