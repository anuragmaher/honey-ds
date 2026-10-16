import type { Meta, StoryObj } from '@storybook/react-vite'
import { CircleCheckIcon, ClockIcon, TagIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
    },
    asChild: { control: 'boolean' },
  },
  args: {
    variant: 'default',
    children: 'Open',
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>Open</Badge>
      <Badge variant="secondary">Pending</Badge>
      <Badge variant="destructive">SLA breached</Badge>
      <Badge variant="outline">Closed</Badge>
      <Badge variant="ghost">Snoozed</Badge>
      <Badge variant="link">View all tags</Badge>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>
        <CircleCheckIcon />
        Resolved
      </Badge>
      <Badge variant="secondary">
        <ClockIcon />
        Awaiting reply
      </Badge>
      <Badge variant="outline">
        <TagIcon />
        Billing
      </Badge>
    </div>
  ),
}

export const Tags: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="outline">Refund</Badge>
      <Badge variant="outline">Priority</Badge>
      <Badge variant="outline">Enterprise</Badge>
      <Badge variant="outline">Follow-up</Badge>
      <Badge variant="secondary">+4 more</Badge>
    </div>
  ),
}

export const Counter: Story = {
  render: () => (
    <div className="flex items-center gap-6 text-sm">
      <span className="flex items-center gap-2">
        Unassigned <Badge variant="destructive">12</Badge>
      </span>
      <span className="flex items-center gap-2">
        Mine <Badge variant="secondary">3</Badge>
      </span>
      <span className="flex items-center gap-2">
        Open <Badge>48</Badge>
      </span>
    </div>
  ),
}

export const AsLink: Story = {
  render: () => (
    <Badge asChild variant="outline">
      <a href="#billing-tag">Billing</a>
    </Badge>
  ),
}
