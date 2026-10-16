import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarIcon, MailIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

const meta = {
  title: 'Components/Hover Card',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@priya</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            PS
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Priya Sharma</h4>
            <p className="text-sm text-muted-foreground">
              Support lead for the Billing inbox. Handles refunds and invoice
              disputes.
            </p>
            <div className="flex items-center pt-2 text-xs text-muted-foreground">
              <CalendarIcon className="mr-2 size-4 opacity-70" />
              Joined March 2023
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const CustomerPreview: Story = {
  render: () => (
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        <Button variant="outline">
          <MailIcon />
          dana@northwind.io
        </Button>
      </HoverCardTrigger>
      <HoverCardContent align="start" side="bottom" className="w-72">
        <div className="space-y-2">
          <div>
            <p className="text-sm font-semibold">Dana Whitfield</p>
            <p className="text-xs text-muted-foreground">Northwind Traders</p>
          </div>
          <dl className="grid grid-cols-2 gap-y-1 text-xs">
            <dt className="text-muted-foreground">Open conversations</dt>
            <dd className="text-right font-medium">3</dd>
            <dt className="text-muted-foreground">Plan</dt>
            <dd className="text-right font-medium">Enterprise</dd>
            <dt className="text-muted-foreground">Last CSAT</dt>
            <dd className="text-right font-medium">5 / 5</dd>
          </dl>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
