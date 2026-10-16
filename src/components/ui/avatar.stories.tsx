import type { Meta, StoryObj } from '@storybook/react-vite'
import { CheckIcon, PlusIcon } from 'lucide-react'
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from '@/components/ui/avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
  },
  args: {
    size: 'default',
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

const AGENT_IMAGE = 'https://github.com/shadcn.png'

export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src={AGENT_IMAGE} alt="Priya Nair" />
      <AvatarFallback>PN</AvatarFallback>
    </Avatar>
  ),
}

export const Fallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="/broken-image.png" alt="Rahul Mehta" />
      <AvatarFallback>RM</AvatarFallback>
    </Avatar>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="sm">
        <AvatarImage src={AGENT_IMAGE} alt="Priya Nair" />
        <AvatarFallback>PN</AvatarFallback>
      </Avatar>
      <Avatar size="default">
        <AvatarImage src={AGENT_IMAGE} alt="Priya Nair" />
        <AvatarFallback>PN</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src={AGENT_IMAGE} alt="Priya Nair" />
        <AvatarFallback>PN</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="sm">
        <AvatarFallback>PN</AvatarFallback>
        <AvatarBadge className="bg-green-500" />
      </Avatar>
      <Avatar>
        <AvatarImage src={AGENT_IMAGE} alt="Priya Nair" />
        <AvatarFallback>PN</AvatarFallback>
        <AvatarBadge className="bg-green-500" />
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src={AGENT_IMAGE} alt="Priya Nair" />
        <AvatarFallback>PN</AvatarFallback>
        <AvatarBadge>
          <CheckIcon />
        </AvatarBadge>
      </Avatar>
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src={AGENT_IMAGE} alt="Priya Nair" />
        <AvatarFallback>PN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>RM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AS</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  ),
}

export const GroupWithAction: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar size="lg">
        <AvatarFallback>PN</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>RM</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>
        <PlusIcon />
      </AvatarGroupCount>
    </AvatarGroup>
  ),
}
