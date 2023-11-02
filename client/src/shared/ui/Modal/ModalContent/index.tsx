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
				className='opacity-1 fixed left-10 top-20 z-50 max-h-[85vh] w-[90vw] max-w-md translate-x-1 animate-[contentShow_150ms_cubic-bezier(0.16,_1,_0.3,_1)] rounded-md bg-white p-6 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none sm:left-20 md:left-[calc(100%-60%)] md:top-[calc(100%-85%)]'
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
