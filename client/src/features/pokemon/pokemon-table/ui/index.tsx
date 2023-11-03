/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'

import { useGetPokemonsQuery } from '@/entities/pokemon'
import { PokemonModal } from '@/entities/pokemon/ui/PokeModal'
import { Modal } from '@/shared'
import { Table } from '@/shared/ui/Table'
import { ColumnDef } from '@tanstack/react-table'

export const PokemonTableWithModal = () => {
	const { data: poke } = useGetPokemonsQuery('pokemons')
	const cols = useMemo<ColumnDef<any>[]>(
		() => [
			{
				header: 'Pokemon Name',
				accessorKey: 'name',
				cell: (props: any) => {
					return (
						<Modal
							name={props.row.original.name}
							children={
								<PokemonModal
									id={props.row.original.id}
									name={props.row.original.name}
									species={props.row.original.species}
									url={props.row.original.url}
									types={props.row.original.types}
									results={props.row.original.results}
									sprites={props.row.original.sprites}
								/>
							}
						/>
					)
				}
			}
		],
		[]
	)
	if (!poke) return

	return (
		<Table
			data={poke.results}
			columns={cols}
			showGlobalFilter
			showNavigation
			hasDetailsCard
		/>
	)
}
