import type { Meta, StoryObj } from '@storybook/react-vite'

import { Separator } from '@/components/ui/separator'

const meta = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-72">
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Shared Inbox</h4>
        <p className="text-sm text-muted-foreground">
          Manage support@acme.com with your team.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Open</div>
        <Separator orientation="vertical" />
        <div>Pending</div>
        <Separator orientation="vertical" />
        <div>Closed</div>
      </div>
    </div>
  ),
}

export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
  render: (args) => (
    <div className="w-72 space-y-4 text-sm">
      <p>Conversation assigned to Priya.</p>
      <Separator {...args} />
      <p>Priya replied to the customer.</p>
      <Separator {...args} />
      <p>Conversation closed.</p>
    </div>
  ),
}

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <div className="flex h-6 items-center gap-3 text-sm">
      <span>12 open</span>
      <Separator {...args} />
      <span>4 pending</span>
      <Separator {...args} />
      <span>38 closed today</span>
    </div>
  ),
}
