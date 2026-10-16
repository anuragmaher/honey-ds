import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  ArchiveIcon,
  CalendarIcon,
  InboxIcon,
  MailIcon,
  SettingsIcon,
  TagIcon,
  UserIcon,
  UsersIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'

const meta = {
  title: 'Components/Command',
  component: Command,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Command className="w-[420px] rounded-lg border shadow-md">
      <CommandInput placeholder="Search actions, inboxes, teammates..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem>
            <MailIcon />
            <span>Reply</span>
            <CommandShortcut>R</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <UserIcon />
            <span>Assign to me</span>
            <CommandShortcut>A</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <ArchiveIcon />
            <span>Close conversation</span>
            <CommandShortcut>E</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CalendarIcon />
            <span>Snooze until...</span>
            <CommandShortcut>H</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Shared inboxes">
          <CommandItem>
            <InboxIcon />
            <span>Support</span>
          </CommandItem>
          <CommandItem>
            <InboxIcon />
            <span>Billing</span>
          </CommandItem>
          <CommandItem>
            <InboxIcon />
            <span>Sales</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <TagIcon />
            <span>Manage tags</span>
          </CommandItem>
          <CommandItem>
            <UsersIcon />
            <span>Team members</span>
          </CommandItem>
          <CommandItem disabled>
            <SettingsIcon />
            <span>Workspace settings (admin only)</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

function CommandDialogExample() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <p className="mb-3 text-sm text-muted-foreground">
        Press{' '}
        <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-xs">Cmd K</kbd>{' '}
        or click the button to open the palette.
      </p>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open command palette
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Quick actions"
        description="Jump to an inbox or run an action"
      >
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem onSelect={() => setOpen(false)}>
              <MailIcon />
              <span>Reply</span>
              <CommandShortcut>R</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <UserIcon />
              <span>Assign to me</span>
              <CommandShortcut>A</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <ArchiveIcon />
              <span>Close conversation</span>
              <CommandShortcut>E</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Go to inbox">
            <CommandItem onSelect={() => setOpen(false)}>
              <InboxIcon />
              <span>Support</span>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <InboxIcon />
              <span>Billing</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export const Dialog: Story = {
  render: () => <CommandDialogExample />,
}

export const Empty: Story = {
  render: () => (
    <Command className="w-[420px] rounded-lg border shadow-md">
      <CommandInput placeholder="Search teammates..." defaultValue="zzz" />
      <CommandList>
        <CommandEmpty>No teammate matches that name.</CommandEmpty>
        <CommandGroup heading="Teammates">
          <CommandItem>Priya Nair</CommandItem>
          <CommandItem>Rahul Mehta</CommandItem>
          <CommandItem>Ana Souza</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
