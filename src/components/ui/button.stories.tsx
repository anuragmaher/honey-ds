import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  ArchiveIcon,
  ExternalLinkIcon,
  LoaderCircleIcon,
  MailIcon,
  PlusIcon,
  ReplyIcon,
  SendIcon,
  Trash2Icon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'default', 'lg', 'icon-xs', 'icon-sm', 'icon', 'icon-lg'],
    },
    asChild: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'default',
    size: 'default',
    children: 'Send reply',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-3">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button>
        <SendIcon />
        Send reply
      </Button>
      <Button variant="secondary">
        <ReplyIcon />
        Reply all
      </Button>
      <Button variant="outline">
        <ArchiveIcon />
        Archive
      </Button>
      <Button variant="destructive">
        <Trash2Icon />
        Delete
      </Button>
    </div>
  ),
}

export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-3">
      <Button size="icon-xs" variant="outline" aria-label="Add tag">
        <PlusIcon />
      </Button>
      <Button size="icon-sm" variant="outline" aria-label="Add tag">
        <PlusIcon />
      </Button>
      <Button size="icon" variant="outline" aria-label="Add tag">
        <PlusIcon />
      </Button>
      <Button size="icon-lg" variant="outline" aria-label="Add tag">
        <PlusIcon />
      </Button>
      <Button size="icon" aria-label="Compose email">
        <MailIcon />
      </Button>
      <Button size="icon" variant="ghost" aria-label="Archive">
        <ArchiveIcon />
      </Button>
    </div>
  ),
}

export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button disabled>
        <LoaderCircleIcon className="animate-spin" />
        Sending...
      </Button>
      <Button variant="outline" disabled>
        <LoaderCircleIcon className="animate-spin" />
        Syncing inbox
      </Button>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button disabled>Default</Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
      <Button variant="ghost" disabled>
        Ghost
      </Button>
      <Button variant="destructive" disabled>
        Destructive
      </Button>
      <Button variant="link" disabled>
        Link
      </Button>
    </div>
  ),
}

export const AsLink: Story = {
  render: () => (
    <Button asChild variant="link">
      <a href="https://hiverhq.com" target="_blank" rel="noreferrer">
        Open help centre
        <ExternalLinkIcon />
      </a>
    </Button>
  ),
}
