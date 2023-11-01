import React, { Ref } from 'react'
import { LinkWrapper } from '../../LinkWrapper'
import { DialogActions, DialogCloseButton } from '../ModalContent/styles'
import { Button } from '../styles'

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
			<DialogActions ref={ref}>
				{hasLinkToPage && (
					<LinkWrapper to={`${id}`} table={true}>
						{linkTitle}
					</LinkWrapper>
				)}
				<DialogCloseButton>
					<Button>{closeButtonTitle}</Button>
				</DialogCloseButton>
			</DialogActions>
		)
	}
)
