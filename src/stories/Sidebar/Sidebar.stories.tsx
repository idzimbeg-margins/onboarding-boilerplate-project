import type { Meta, StoryObj } from '@storybook/react'

import { SidebarContent, SidebarWrapper } from '@/shared/ui/Sidebar/styles'
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
		<SidebarWrapper>
			<SidebarContent>
				<StyledLinkWrapper>
					<StyledLink>Your Books List</StyledLink>
				</StyledLinkWrapper>
				<StyledLinkWrapper>
					<StyledLink>Your Books List</StyledLink>
				</StyledLinkWrapper>
				<StyledLinkWrapper>
					<StyledLink>Your Books List</StyledLink>
				</StyledLinkWrapper>
			</SidebarContent>
		</SidebarWrapper>
	)
}
