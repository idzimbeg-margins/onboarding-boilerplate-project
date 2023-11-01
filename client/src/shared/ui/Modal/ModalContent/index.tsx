import React, { Ref } from 'react'
import { MotionWrapper } from '../../MotionWrapper'
import { ModalActions } from '../ModalActions'
import { DialogContent } from '../styles'

export const ModalContent = React.forwardRef(
	(
		{
			children,
			id,
			linkTitle,
			closeButtonTitle,
			hasLinkToPage
		}: ModalContentProps,
		ref: Ref<HTMLDivElement>
	) => {
		return (
			<DialogContent ref={ref}>
				<MotionWrapper>
					{children}
					<ModalActions
						id={id}
						linkTitle={linkTitle}
						closeButtonTitle={closeButtonTitle}
						hasLinkToPage={hasLinkToPage}
					/>
				</MotionWrapper>
			</DialogContent>
		)
	}
)
