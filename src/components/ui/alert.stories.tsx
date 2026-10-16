import type { Meta, StoryObj } from '@storybook/react-vite'
import { CircleAlertIcon, CircleCheckIcon, InfoIcon, TerminalIcon } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
  args: {
    variant: 'default',
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Alert {...args} className="w-[420px]">
      <TerminalIcon />
      <AlertTitle>Inbox connected</AlertTitle>
      <AlertDescription>
        support@acme.com is now syncing with Hiver. New conversations will appear
        in a few seconds.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  args: { variant: 'destructive' },
  render: (args) => (
    <Alert {...args} className="w-[420px]">
      <CircleAlertIcon />
      <AlertTitle>SLA breached</AlertTitle>
      <AlertDescription>
        <p>3 conversations in Billing have gone past their 4-hour first-response target.</p>
        <ul className="list-inside list-disc text-sm">
          <li>Refund request from maria@globex.com</li>
          <li>Invoice mismatch from ap@initech.io</li>
          <li>Card declined from dev@umbrella.org</li>
        </ul>
      </AlertDescription>
    </Alert>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex w-[420px] flex-col gap-4">
      <Alert>
        <CircleCheckIcon />
        <AlertTitle>Reply sent</AlertTitle>
        <AlertDescription>Your reply to Maria was delivered and the conversation was closed.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <CircleAlertIcon />
        <AlertTitle>Could not send reply</AlertTitle>
        <AlertDescription>Gmail rejected the message. Check your sending limits and try again.</AlertDescription>
      </Alert>
    </div>
  ),
}

export const WithoutIcon: Story = {
  render: () => (
    <Alert className="w-[420px]">
      <AlertTitle>Scheduled maintenance</AlertTitle>
      <AlertDescription>
        Analytics will be unavailable on Saturday from 02:00 to 04:00 UTC while we upgrade the reporting cluster.
      </AlertDescription>
    </Alert>
  ),
}

export const TitleOnly: Story = {
  render: () => (
    <Alert className="w-[420px]">
      <InfoIcon />
      <AlertTitle>You are viewing an archived conversation.</AlertTitle>
    </Alert>
  ),
}
