import { BadgeProps, ContentCardProps } from './model'

export const ContentCard = ({
	name,
	url,
	id,
	hasImage = false,
	stats,
	types
}: ContentCardProps) => {
	return (
		<div className='bg-text-base flex h-full w-full flex-col justify-between rounded-md p-4'>
			<div className='flex h-full w-full flex-col'>
				<h2 className='text-text-main text-center text-lg font-bold'>{name}</h2>
			</div>
			{hasImage && (
				<div className='flex h-40 w-full items-center justify-center'>
					<img
						className='animate-content-show mb-2 h-full w-full cursor-pointer object-contain transition-all'
						src={url}
						alt={name}
						id={id?.toString()}
					/>
				</div>
			)}
			{types && (
				<div className='m-auto grid grid-cols-3 items-center justify-center p-4'>
					{types.map((type: any, index: number) => (
						<Badge name={type} key={index} />
					))}
				</div>
			)}
			{
				<div className='m-auto grid grid-cols-3 items-center justify-center gap-4 p-4'>
					{stats?.map((stat) => (
						<div key={stat.name}>
							<Badge name={stat.name} value={stat.value} />
						</div>
					))}
				</div>
			}
		</div>
	)
}

const Badge = ({ name, value }: BadgeProps) => {
	return (
		<div className='shadow-border-shadow flex min-h-[50px] min-w-[100px] flex-col items-center justify-center rounded-xl text-center'>
			<div>{name}</div>
			<div>{value}</div>
		</div>
	)
}
