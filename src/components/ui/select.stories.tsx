import type { Meta, StoryObj } from '@storybook/react-vite'

import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Assign to..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="priya">Priya Sharma</SelectItem>
        <SelectItem value="marcus">Marcus Lee</SelectItem>
        <SelectItem value="aisha">Aisha Khan</SelectItem>
        <SelectItem value="tomas">Tomas Berg</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <Select defaultValue="open">
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Set status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Active</SelectLabel>
          <SelectItem value="open">Open</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="on-hold">On hold</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Resolved</SelectLabel>
          <SelectItem value="closed">Closed</SelectItem>
          <SelectItem value="spam">Spam</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-56 gap-2">
      <Label htmlFor="inbox-select">Shared inbox</Label>
      <Select defaultValue="support">
        <SelectTrigger id="inbox-select" className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="support">Support</SelectItem>
          <SelectItem value="billing">Billing</SelectItem>
          <SelectItem value="sales">Sales</SelectItem>
          <SelectItem value="escalations" disabled>
            Escalations (no access)
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const Small: Story = {
  render: () => (
    <Select defaultValue="high">
      <SelectTrigger size="sm" className="w-40">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="low">Low</SelectItem>
        <SelectItem value="normal">Normal</SelectItem>
        <SelectItem value="high">High</SelectItem>
        <SelectItem value="urgent">Urgent</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Select defaultValue="priya" disabled>
      <SelectTrigger className="w-56">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="priya">Priya Sharma</SelectItem>
        <SelectItem value="marcus">Marcus Lee</SelectItem>
      </SelectContent>
    </Select>
  ),
}
