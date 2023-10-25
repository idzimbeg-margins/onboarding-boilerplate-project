import * as Dialog from '@radix-ui/react-dialog'
import { DialogClose } from '@radix-ui/themes'
import { motion } from 'framer-motion'

import { Button, DialogContent, DialogOverlay } from '@/shared/ui/Modal/styles'

import { LinkWrapper } from '@/shared'
import styled from 'styled-components'
import { useGetPokemonQuery } from '../api/getPokemons'
import { PokeCard } from './PokeCard'

interface PokemonModalProps {
	id: string
	name: string
	url?: string
}
export const PokemonModal = ({ name }: PokemonModalProps) => {
	const { data } = useGetPokemonQuery(name)

	const dataToPokemonData = (data: any): PokemonModalProps => {
		return {
			id: data && +data.id - 1,
			name: data && data.name.toUpperCase(),
			url: data && data.sprites.front_default
		}
	}
	const {
		id: idFromRes,
		name: nameFromRes,
		url: pokemonUrl
	} = dataToPokemonData(data)

	return (
		<Dialog.Portal>
			<DialogOverlay />
			<DialogContent>
				<motion.div
					initial={{ y: -20, scaleX: 0.8 }}
					animate={{ y: 0, scaleX: 1 }}
					className='dialog-body'
				>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							delay: 0.15
						}}
					>
						<PokeCard name={nameFromRes} id={idFromRes} url={pokemonUrl} />
						<DialogActions>
							<LinkWrapper to={`${idFromRes}`} table={true}>
								Go to Pokemon Page
							</LinkWrapper>

							<DialogCloseButton>
								<Button>Close</Button>
							</DialogCloseButton>
						</DialogActions>
					</motion.div>
				</motion.div>
			</DialogContent>
		</Dialog.Portal>
	)
}

export const DialogActions = styled.div`
	display: flex;
	margin-top: 25px;
	font-size: 0.75rem;
`
export const DialogCloseButton = styled(DialogClose)`
	flex-direction: column;
	padding: 1rem;
	width: 85%;
	margin-bottom: 0.5rem;
	font-size: 0.75rem;
`
