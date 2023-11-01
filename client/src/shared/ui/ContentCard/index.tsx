import {
	CardDetailsContainer,
	CardImage,
	CardImageContainer,
	CardTitle
} from '@/pages/pokemon/poke-details-page/styles'
import { Card } from '@radix-ui/themes'
import styled from 'styled-components'
import { ContentCardProps } from './model/types'

export const ContentCard = ({
	name,
	url,
	id,
	hasImage = false,
	stats,
	types
}: ContentCardProps) => {
	return (
		<Card>
			<CardDetailsContainer>
				<CardTitle>{name}</CardTitle>
			</CardDetailsContainer>
			{hasImage && (
				<CardImageContainer>
					<CardImage src={url} alt={name} id={id} />
				</CardImageContainer>
			)}
			{types && (
				<StatsWrapper>
					{types.map((type: any, index: number) => (
						<Badge name={type} key={index} />
					))}
				</StatsWrapper>
			)}
			{
				<StatsWrapper>
					{stats?.map((stat) => (
						<div key={stat.name}>
							<Badge name={stat.name} value={stat.value} />
						</div>
					))}
				</StatsWrapper>
			}
		</Card>
	)
}
interface BadgeProps {
	name: string
	value?: number
}
const StatsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin: 0 auto;
	padding: 1rem;
	justify-content: center;
	align-items: center;
`

const Badge = ({ name, value }: BadgeProps) => {
	return (
		<StyledBadge>
			<div>{name.toUpperCase()}</div>
			<div>{value}</div>
		</StyledBadge>
	)
}

const StyledBadge = styled.div`
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	box-shadow: 1px 8px 10px -3px black;
	min-width: 100px;
	min-height: 50px;
	margin: 5px;
`
