import { ContentCard } from '@/shared'
import { PokemonModalProps } from '../model'

export const PokeCard = ({
	url,
	name,
	id,
	stats,
	types
}: PokemonModalProps) => {
	return (
		<ContentCard
			name={name}
			url={url}
			id={id}
			hasImage={true}
			stats={stats}
			types={types}
		/>
	)
}
