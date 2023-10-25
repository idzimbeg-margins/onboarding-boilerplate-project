import {
	CardDetailsContainer,
	CardImage,
	CardImageContainer,
	CardTitle
} from '@/pages/pokemon/poke-details-page/styles'
import { Card } from '@radix-ui/themes'

import { PokeCardProps } from '../model/types'

export const PokeCard = ({ url, name, id }: PokeCardProps) => {
	return (
		<Card>
			<CardImageContainer>
				<CardImage src={url} alt={name} id={id} />
			</CardImageContainer>
			<CardDetailsContainer>
				<CardTitle>{name}</CardTitle>
			</CardDetailsContainer>
		</Card>
	)
}
