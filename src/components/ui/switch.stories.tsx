import type { Meta, StoryObj } from '@storybook/react-vite'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'default'] },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch id="auto-assign" {...args} />
      <Label htmlFor="auto-assign">Auto-assign new conversations</Label>
    </div>
  ),
}

export const Checked: Story = {
  args: { defaultChecked: true },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch id="csat" {...args} />
      <Label htmlFor="csat">Send CSAT survey on close</Label>
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch id="sla-locked" {...args} />
      <Label htmlFor="sla-locked">SLA tracking (managed by admin)</Label>
    </div>
  ),
}

export const Small: Story = {
  args: { size: 'sm', defaultChecked: true },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Switch id="compact" {...args} />
      <Label htmlFor="compact">Compact inbox view</Label>
    </div>
  ),
}

const SETTINGS = [
  {
    id: 'notify-assign',
    title: 'Notify on assignment',
    description: 'Get an email when a conversation is assigned to you.',
    defaultChecked: true,
  },
  {
    id: 'collision',
    title: 'Collision alerts',
    description: 'Warn when a teammate is already replying to the same thread.',
    defaultChecked: true,
  },
  {
    id: 'auto-close',
    title: 'Auto-close stale conversations',
    description: 'Close pending conversations with no reply after 7 days.',
    defaultChecked: false,
  },
]

export const SettingsRows: Story = {
  render: () => (
    <div className="w-96 divide-y rounded-xl border">
      {SETTINGS.map((setting) => (
        <div
          key={setting.id}
          className="flex items-start justify-between gap-4 p-4"
        >
          <div className="space-y-1">
            <Label htmlFor={setting.id}>{setting.title}</Label>
            <p className="text-sm text-muted-foreground">
              {setting.description}
            </p>
          </div>
          <Switch id={setting.id} defaultChecked={setting.defaultChecked} />
        </div>
      ))}
    </div>
  ),
}
