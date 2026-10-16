import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

type Status = 'Open' | 'Pending' | 'Closed' | 'Overdue'

const STATUS_VARIANT: Record<
  Status,
  'default' | 'secondary' | 'outline' | 'destructive'
> = {
  Open: 'default',
  Pending: 'secondary',
  Closed: 'outline',
  Overdue: 'destructive',
}

const CONVERSATIONS: {
  id: string
  subject: string
  customer: string
  assignee: string
  status: Status
  updated: string
}[] = [
  {
    id: '#4821',
    subject: 'Refund not reflected on invoice',
    customer: 'Maya Fernandes',
    assignee: 'Priya Nair',
    status: 'Open',
    updated: '2 min ago',
  },
  {
    id: '#4819',
    subject: 'Unable to add teammates to shared inbox',
    customer: 'Daniel Okafor',
    assignee: 'Arjun Mehta',
    status: 'Pending',
    updated: '14 min ago',
  },
  {
    id: '#4815',
    subject: 'SLA report export is empty',
    customer: 'Lena Hoffmann',
    assignee: 'Unassigned',
    status: 'Overdue',
    updated: '1 h ago',
  },
  {
    id: '#4809',
    subject: 'Question about annual billing',
    customer: 'Tom Brewer',
    assignee: 'Priya Nair',
    status: 'Closed',
    updated: '3 h ago',
  },
  {
    id: '#4802',
    subject: 'Gmail sync paused after password change',
    customer: 'Sofia Rossi',
    assignee: 'Arjun Mehta',
    status: 'Closed',
    updated: 'Yesterday',
  },
]

export const Default: Story = {
  render: () => (
    <div className="w-[720px]">
      <Table>
        <TableCaption>Conversations in support@acme.com this week.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">ID</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Assignee</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Updated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {CONVERSATIONS.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium text-muted-foreground">
                {row.id}
              </TableCell>
              <TableCell className="font-medium">{row.subject}</TableCell>
              <TableCell>{row.customer}</TableCell>
              <TableCell
                className={
                  row.assignee === 'Unassigned' ? 'text-muted-foreground' : ''
                }
              >
                {row.assignee}
              </TableCell>
              <TableCell>
                <Badge variant={STATUS_VARIANT[row.status]}>{row.status}</Badge>
              </TableCell>
              <TableCell className="text-right text-muted-foreground">
                {row.updated}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total conversations</TableCell>
            <TableCell className="text-right">{CONVERSATIONS.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  ),
}

export const Compact: Story = {
  render: () => (
    <div className="w-[520px]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Agent</TableHead>
            <TableHead className="text-right">Open</TableHead>
            <TableHead className="text-right">Closed today</TableHead>
            <TableHead className="text-right">Avg. first response</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Priya Nair</TableCell>
            <TableCell className="text-right">6</TableCell>
            <TableCell className="text-right">14</TableCell>
            <TableCell className="text-right">18 min</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Arjun Mehta</TableCell>
            <TableCell className="text-right">4</TableCell>
            <TableCell className="text-right">11</TableCell>
            <TableCell className="text-right">26 min</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Lena Hoffmann</TableCell>
            <TableCell className="text-right">2</TableCell>
            <TableCell className="text-right">9</TableCell>
            <TableCell className="text-right">41 min</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
}
