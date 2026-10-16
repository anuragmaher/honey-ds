import type { Meta, StoryObj } from '@storybook/react-vite'
import { MailIcon, SearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url', 'file'],
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    type: 'text',
    placeholder: 'Search conversations...',
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  args: {
    type: 'email',
    placeholder: 'priya@acme.com',
  },
  render: (args) => (
    <div className="grid gap-2">
      <Label htmlFor="email">Work email</Label>
      <Input id="email" {...args} />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Only admins can edit this',
  },
}

export const Invalid: Story = {
  args: {
    type: 'email',
    placeholder: 'priya@acme.com',
  },
  render: (args) => (
    <div className="grid gap-2">
      <Label htmlFor="invalid-email">Work email</Label>
      <Input id="invalid-email" aria-invalid defaultValue="priya@acme" {...args} />
      <p className="text-sm text-destructive">Enter a valid email address.</p>
    </div>
  ),
}

export const File: Story = {
  args: {
    type: 'file',
  },
  render: (args) => (
    <div className="grid gap-2">
      <Label htmlFor="attachment">Attach a file</Label>
      <Input id="attachment" {...args} />
    </div>
  ),
}

export const WithIcon: Story = {
  args: {
    type: 'search',
    placeholder: 'Search conversations...',
  },
  render: (args) => (
    <div className="relative">
      <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input className="pl-9" {...args} />
    </div>
  ),
}

export const WithButton: Story = {
  args: {
    type: 'email',
    placeholder: 'customer@example.com',
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      <div className="relative flex-1">
        <MailIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input className="pl-9" {...args} />
      </div>
      <Button type="submit">Add CC</Button>
    </div>
  ),
}
