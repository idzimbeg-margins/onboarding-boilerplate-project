import type { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from '../../shared'
import { StyledLink, StyledLinkWrapper } from './sidebar'

const meta = {
	title: 'Example/Sidebar',
	component: Sidebar,
	parameters: {},
	tags: ['autodocs']
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof Sidebar>

export const Primary: Story = {
	render: () => (
		<div>
			<div>
				<StyledLinkWrapper>
					<StyledLink>Your Books List</StyledLink>
				</StyledLinkWrapper>
				<StyledLinkWrapper>
					<StyledLink>Your Books List</StyledLink>
				</StyledLinkWrapper>
				<StyledLinkWrapper>
					<StyledLink>Your Books List</StyledLink>
				</StyledLinkWrapper>
			</div>
		</div>
	)
}
