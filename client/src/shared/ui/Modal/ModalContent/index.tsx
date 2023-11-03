import React, { Ref } from 'react'
import { MotionWrapper } from '../../MotionWrapper'
import { ModalActions } from '../ModalActions'

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
			<div
				className='opacity-1 shadow-drop-shadow fixed left-10 top-20 z-50 max-h-[85vh] w-[90vw] max-w-md translate-x-1 rounded-md bg-white p-6 focus:outline-none sm:left-20 md:left-[calc(100%-60%)] md:top-[calc(100%-85%)]'
				ref={ref}
			>
				<MotionWrapper>
					{children}
					<ModalActions
						id={id}
						linkTitle={linkTitle}
						closeButtonTitle={closeButtonTitle}
						hasLinkToPage={hasLinkToPage}
					/>
				</MotionWrapper>
			</div>
		)
	}
)
