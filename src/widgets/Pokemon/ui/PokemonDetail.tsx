import { PokeCard } from '@/entities/pokemon/ui'
import { Container } from '@radix-ui/themes'
import { PokeDetailsPageProps } from '../model/types'

export const PokemonDetail = ({ name, url, id }: PokeDetailsPageProps) => {
	return (
		<Container>
			<PokeCard name={name} url={url} id={id} />
		</Container>
	)
}
