import type { Meta, StoryObj } from '@storybook/react-vite'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const meta = {
  title: 'Components/Scroll Area',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

const tags = Array.from({ length: 40 }, (_, i) => `tag-${String(i + 1).padStart(2, '0')}`)

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-56 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="py-2 text-sm">{tag}</div>
            <div className="h-px bg-border" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

const conversations = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  from: ['Dana Whitfield', 'Marcus Lee', 'Aisha Khan', 'Tomas Berg'][i % 4],
  subject: [
    'Invoice #4821 not received',
    'Cannot log in after password reset',
    'Feature request: dark mode',
    'Refund for duplicate charge',
  ][i % 4],
}))

export const Conversations: Story = {
  render: () => (
    <ScrollArea className="h-80 w-96 rounded-md border">
      <ul className="divide-y">
        {conversations.map((c) => (
          <li key={c.id} className="grid gap-0.5 px-4 py-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{c.from}</span>
              <span className="text-xs text-muted-foreground">#{c.id}</span>
            </div>
            <p className="truncate text-sm text-muted-foreground">{c.subject}</p>
          </li>
        ))}
      </ul>
    </ScrollArea>
  ),
}

const inboxes = [
  'Support',
  'Billing',
  'Sales',
  'Onboarding',
  'Escalations',
  'Partnerships',
  'Press',
  'Careers',
  'Legal',
  'Security',
]

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
      <div className="flex w-max gap-4 p-4">
        {inboxes.map((inbox) => (
          <figure key={inbox} className="shrink-0">
            <div className="flex h-24 w-40 items-center justify-center rounded-md bg-muted text-sm font-medium">
              {inbox}
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              {inbox.toLowerCase()}@acme.com
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}
