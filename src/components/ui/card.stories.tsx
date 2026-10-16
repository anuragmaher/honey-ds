import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowRightIcon, ClockIcon, MailIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Create shared inbox</CardTitle>
        <CardDescription>
          Connect a Google Group or Gmail alias so your team can reply from one place.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          You can add teammates, SLAs and automations after the inbox is connected.
        </p>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Connect inbox</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Billing inbox</CardTitle>
        <CardDescription>billing@acme.com</CardDescription>
        <CardAction>
          <Badge variant="secondary">6 members</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-4 text-sm">
        <div>
          <div className="text-2xl font-semibold">48</div>
          <div className="text-muted-foreground">Open</div>
        </div>
        <div>
          <div className="text-2xl font-semibold">12</div>
          <div className="text-muted-foreground">Unassigned</div>
        </div>
        <div>
          <div className="text-2xl font-semibold text-destructive">3</div>
          <div className="text-muted-foreground">SLA breached</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="px-0">
          Open inbox
          <ArrowRightIcon />
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const Conversation: Story = {
  render: () => (
    <Card className="w-[420px] gap-4">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center gap-2">
          <MailIcon className="size-4 text-muted-foreground" />
          Refund request for order #4821
        </CardTitle>
        <CardDescription>maria@globex.com · 3 messages</CardDescription>
        <CardAction>
          <Badge variant="destructive">Overdue</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <p>
          Hi team, I was charged twice for order #4821 on 12 October. Could you
          please refund the duplicate payment?
        </p>
        <p className="flex items-center gap-1.5 text-muted-foreground">
          <ClockIcon className="size-3.5" />
          First response due 2 hours ago
        </p>
      </CardContent>
      <CardFooter className="justify-between border-t">
        <Button variant="ghost" size="sm">
          Assign
        </Button>
        <Button size="sm">Reply</Button>
      </CardFooter>
    </Card>
  ),
}

export const Minimal: Story = {
  render: () => (
    <Card className="w-[320px]">
      <CardContent>
        <p className="text-sm">
          Pro tip: press <kbd className="rounded border px-1 font-mono text-xs">A</kbd> to
          assign the selected conversation to yourself.
        </p>
      </CardContent>
    </Card>
  ),
}
