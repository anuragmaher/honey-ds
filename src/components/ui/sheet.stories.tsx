import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const meta = {
  title: 'Components/Sheet (Side Drawer)',
  component: Sheet,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit contact</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit contact</SheetTitle>
          <SheetDescription>
            Update the customer details shown in the conversation sidebar.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-name">Name</Label>
            <Input id="sheet-name" defaultValue="Maya Fernandes" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-email">Email</Label>
            <Input id="sheet-email" defaultValue="maya@brightpath.io" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-company">Company</Label>
            <Input id="sheet-company" defaultValue="BrightPath Logistics" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

const SIDES = ['top', 'right', 'bottom', 'left'] as const

export const Sides: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-2">
      {SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Conversation details</SheetTitle>
              <SheetDescription>
                This drawer slides in from the {side}. Use it for filters,
                contact info or conversation activity.
              </SheetDescription>
            </SheetHeader>
            <div className="px-4 text-sm text-muted-foreground">
              Ticket #4821 · Assigned to Priya · SLA due in 2h 15m
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  ),
}
