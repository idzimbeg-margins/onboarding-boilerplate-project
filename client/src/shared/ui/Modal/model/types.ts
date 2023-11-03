interface ModalProps {
	url?: string
	name: string
	children?: React.ReactNode
}
interface ModalContentProps {
	children: React.ReactNode
	id: number | string
	linkTitle?: string
	closeButtonTitle: string
	hasLinkToPage?: boolean
}
