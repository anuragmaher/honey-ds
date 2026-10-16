import type { Meta, StoryObj } from '@storybook/react-vite'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'

const meta = {
  title: 'Components/Toast',
  component: Toaster,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

function sendReply() {
  return new Promise<{ to: string }>((resolve) =>
    setTimeout(() => resolve({ to: 'maya@brightpath.io' }), 1500)
  )
}

export const Default: Story = {
  render: () => (
    <>
      <Toaster />
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() =>
            toast('Conversation assigned', {
              description: 'Ticket #4821 is now with Priya Nair.',
            })
          }
        >
          Default
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.success('Reply sent to maya@brightpath.io')}
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.error('Could not send reply', {
              description: 'The mailbox connection timed out. Try again.',
            })
          }
        >
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.promise(sendReply(), {
              loading: 'Sending reply…',
              success: (data) => `Reply delivered to ${data.to}`,
              error: 'Reply failed to send',
            })
          }
        >
          Promise
        </Button>
      </div>
    </>
  ),
}

export const WithAction: Story = {
  render: () => (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast('Conversation closed', {
            description: 'Ticket #4821 was marked as resolved.',
            action: {
              label: 'Undo',
              onClick: () => toast.success('Conversation reopened'),
            },
          })
        }
      >
        Close conversation
      </Button>
    </>
  ),
}
