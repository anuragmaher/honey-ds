import type { Meta, StoryObj } from '@storybook/react-vite'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    children: 'Subject',
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithInput: Story = {
  args: {
    children: 'Subject',
  },
  render: (args) => (
    <div className="grid w-80 gap-2">
      <Label htmlFor="subject" {...args} />
      <Input id="subject" placeholder="Re: Invoice #4821 not received" />
    </div>
  ),
}

export const Required: Story = {
  args: {
    children: 'Customer email',
  },
  render: (args) => (
    <div className="grid w-80 gap-2">
      <Label htmlFor="customer-email" {...args}>
        {args.children}
        <span aria-hidden className="text-destructive">
          *
        </span>
      </Label>
      <Input id="customer-email" type="email" required placeholder="dana@northwind.io" />
    </div>
  ),
}

export const WithDisabledInput: Story = {
  args: {
    children: 'Inbox owner',
  },
  render: (args) => (
    <div className="grid w-80 gap-2">
      <Input id="inbox-owner" disabled defaultValue="priya@acme.com" className="peer order-2" />
      <Label htmlFor="inbox-owner" className="order-1" {...args} />
    </div>
  ),
}
