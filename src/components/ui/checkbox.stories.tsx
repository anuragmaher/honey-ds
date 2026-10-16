import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { Checkbox as CheckboxPrimitive } from 'radix-ui'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    checked: {
      control: 'select',
      options: [true, false, 'indeterminate'],
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="notify" {...args} />
      <Label htmlFor="notify">Notify me when a customer replies</Label>
    </div>
  ),
}

export const Checked: Story = {
  args: { defaultChecked: true },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="auto-assign" {...args} />
      <Label htmlFor="auto-assign">Auto-assign new conversations</Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-unchecked" disabled />
        <Label htmlFor="disabled-unchecked">Enable SLA alerts (admin only)</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked">Sync with Gmail (required)</Label>
      </div>
    </div>
  ),
}

function IndeterminateExample() {
  const [items, setItems] = useState({ billing: true, support: false, sales: true })
  const values = Object.values(items)
  const all: CheckboxPrimitive.CheckedState = values.every(Boolean)
    ? true
    : values.some(Boolean)
      ? 'indeterminate'
      : false

  const toggleAll = (checked: CheckboxPrimitive.CheckedState) => {
    const next = checked === true
    setItems({ billing: next, support: next, sales: next })
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="all-inboxes" checked={all} onCheckedChange={toggleAll} />
        <Label htmlFor="all-inboxes" className="font-semibold">
          All shared inboxes
        </Label>
      </div>
      <div className="ml-6 flex flex-col gap-3">
        {(Object.keys(items) as Array<keyof typeof items>).map((key) => (
          <div key={key} className="flex items-center gap-2">
            <Checkbox
              id={`inbox-${key}`}
              checked={items[key]}
              onCheckedChange={(checked) =>
                setItems((prev) => ({ ...prev, [key]: checked === true }))
              }
            />
            <Label htmlFor={`inbox-${key}`} className="capitalize">
              {key}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}

export const Indeterminate: Story = {
  render: () => <IndeterminateExample />,
}

export const WithDescription: Story = {
  render: () => (
    <div className="flex w-[360px] items-start gap-3">
      <Checkbox id="csat" defaultChecked className="mt-0.5" />
      <div className="grid gap-1.5">
        <Label htmlFor="csat">Send CSAT survey on close</Label>
        <p className="text-sm text-muted-foreground">
          Customers receive a one-click rating email 10 minutes after the
          conversation is closed. Replies reopen the conversation.
        </p>
      </div>
    </div>
  ),
}

export const CardStyle: Story = {
  render: () => (
    <Label className="flex w-[360px] items-start gap-3 rounded-lg border p-4 has-[[aria-checked=true]]:border-primary has-[[aria-checked=true]]:bg-accent/40">
      <Checkbox id="collision" defaultChecked className="mt-0.5" />
      <div className="grid gap-1.5 font-normal">
        <p className="text-sm font-medium leading-none">Collision alerts</p>
        <p className="text-sm text-muted-foreground">
          Warn teammates when two people open the same conversation.
        </p>
      </div>
    </Label>
  ),
}
