import { Button } from '@/shared/ui/Button'
import { DialogClose } from '@radix-ui/themes'
import React, { Ref } from 'react'

export const ModalActions = React.forwardRef(
	(
		{
			id,
			linkTitle,
			closeButtonTitle,
			hasLinkToPage
		}: Omit<ModalContentProps, 'children'>,
		ref: Ref<HTMLDivElement>
	) => {
		return (
			<div className='mt-4 flex text-base' ref={ref}>
				{hasLinkToPage && (
					<Button to={`${id}`} variant='text' size='sm'>
						{linkTitle}
					</Button>
				)}
				<DialogClose>
					<Button variant='text' size='sm'>
						{closeButtonTitle}
					</Button>
				</DialogClose>
			</div>
		)
	}
)
