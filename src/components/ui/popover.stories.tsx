import type { Meta, StoryObj } from '@storybook/react-vite'
import { ClockIcon, SettingsIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover'

const meta = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <SettingsIcon />
          Inbox settings
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <PopoverHeader>
            <PopoverTitle>Inbox settings</PopoverTitle>
            <PopoverDescription>
              Configure how new conversations land in the Support inbox.
            </PopoverDescription>
          </PopoverHeader>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="inbox-name">Name</Label>
              <Input id="inbox-name" defaultValue="Support" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="inbox-alias">Alias</Label>
              <Input
                id="inbox-alias"
                defaultValue="support@acme.com"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="inbox-sla">SLA (hours)</Label>
              <Input id="inbox-sla" type="number" defaultValue="4" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const Snooze: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm">
          <ClockIcon />
          Snooze
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-56 p-1">
        <div className="grid">
          {[
            'Later today, 5:00 PM',
            'Tomorrow, 9:00 AM',
            'Next Monday, 9:00 AM',
            'Pick a date & time...',
          ].map((option) => (
            <Button
              key={option}
              variant="ghost"
              size="sm"
              className="justify-start font-normal"
            >
              {option}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const Positioned: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open to the right</Button>
      </PopoverTrigger>
      <PopoverContent side="right" align="start" sideOffset={8}>
        <PopoverHeader>
          <PopoverTitle>Collision detection</PopoverTitle>
          <PopoverDescription>
            The popover flips to the other side when it runs out of room.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
}
