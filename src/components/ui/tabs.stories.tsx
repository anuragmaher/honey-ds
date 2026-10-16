import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

function Panel({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border p-4">
      <h4 className="text-sm font-medium">{title}</h4>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  )
}

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="conversation" className="w-96">
      <TabsList>
        <TabsTrigger value="conversation">Conversation</TabsTrigger>
        <TabsTrigger value="notes">Notes</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
      </TabsList>
      <TabsContent value="conversation">
        <Panel
          title="Refund not reflected on invoice"
          body="Maya wrote 2 minutes ago: the refund from last week still shows as pending on our invoice."
        />
      </TabsContent>
      <TabsContent value="notes">
        <Panel
          title="Internal notes"
          body="Priya: Checked with finance, refund was issued on the 12th. Waiting on bank settlement."
        />
      </TabsContent>
      <TabsContent value="activity">
        <Panel
          title="Activity"
          body="Assigned to Priya Nair · Tagged Billing · SLA due in 2h 15m"
        />
      </TabsContent>
    </Tabs>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <Tabs defaultValue="open" className="w-[480px]">
      <TabsList className="w-full">
        <TabsTrigger value="open">Open</TabsTrigger>
        <TabsTrigger value="pending">Pending</TabsTrigger>
        <TabsTrigger value="closed">Closed</TabsTrigger>
      </TabsList>
      <TabsContent value="open">
        <Panel title="12 open" body="Conversations waiting on a reply from your team." />
      </TabsContent>
      <TabsContent value="pending">
        <Panel title="4 pending" body="Conversations waiting on the customer." />
      </TabsContent>
      <TabsContent value="closed">
        <Panel title="38 closed today" body="Resolved conversations from the last 24 hours." />
      </TabsContent>
    </Tabs>
  ),
}

export const Line: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-96">
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="sla">SLA</TabsTrigger>
        <TabsTrigger value="csat">CSAT</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Panel title="Overview" body="Volume, response times and workload across the inbox." />
      </TabsContent>
      <TabsContent value="sla">
        <Panel title="SLA" body="92% of conversations met the first-response SLA this week." />
      </TabsContent>
      <TabsContent value="csat">
        <Panel title="CSAT" body="Average rating 4.6 / 5 from 128 responses." />
      </TabsContent>
    </Tabs>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="general" orientation="vertical" className="w-[480px]">
      <TabsList variant="line">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="automations">Automations</TabsTrigger>
        <TabsTrigger value="members">Members</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <Panel title="General" body="Inbox name, email address and default assignee." />
      </TabsContent>
      <TabsContent value="automations">
        <Panel title="Automations" body="Rules that tag, assign or close conversations automatically." />
      </TabsContent>
      <TabsContent value="members">
        <Panel title="Members" body="Agents who can view and reply in this inbox." />
      </TabsContent>
    </Tabs>
  ),
}
