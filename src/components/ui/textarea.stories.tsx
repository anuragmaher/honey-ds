import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { className: 'w-96', placeholder: 'Type your reply…' },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-96 gap-2">
      <Label htmlFor="reply">Reply to Maya</Label>
      <Textarea
        {...args}
        id="reply"
        className="w-full"
        placeholder="Hi Maya, thanks for reaching out…"
      />
      <p className="text-xs text-muted-foreground">
        Press Cmd+Enter to send. Use @ to mention a teammate.
      </p>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue:
      'This conversation is closed. Reopen it to reply.',
  },
}

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
    defaultValue: 'Hi',
  },
  render: (args) => (
    <div className="grid w-96 gap-2">
      <Label htmlFor="note">Internal note</Label>
      <Textarea {...args} id="note" className="w-full" />
      <p className="text-xs text-destructive">
        Notes need at least 10 characters.
      </p>
    </div>
  ),
}

function TextareaWithCounter({ maxLength }: { maxLength: number }) {
  const [value, setValue] = useState('')
  const remaining = maxLength - value.length
  return (
    <div className="grid w-96 gap-2">
      <Label htmlFor="canned">Canned response</Label>
      <Textarea
        id="canned"
        value={value}
        maxLength={maxLength}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Thanks for contacting Acme support. We've received your request and…"
      />
      <div className="flex items-center justify-between">
        <span
          className={
            remaining <= 20
              ? 'text-xs text-destructive tabular-nums'
              : 'text-xs text-muted-foreground tabular-nums'
          }
        >
          {remaining} characters left
        </span>
        <Button size="sm" disabled={value.trim().length === 0}>
          Save response
        </Button>
      </div>
    </div>
  )
}

export const WithCharacterCounter: Story = {
  render: () => <TextareaWithCounter maxLength={200} />,
}
