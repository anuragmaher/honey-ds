import type { Meta, StoryObj } from '@storybook/react-vite'
import { PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Assign</Button>
      </TooltipTrigger>
      <TooltipContent>Assign this conversation to a teammate</TooltipContent>
    </Tooltip>
  ),
}

export const IconButton: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Add tag">
          <PlusIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Add tag</TooltipContent>
    </Tooltip>
  ),
}

const SIDES = ['top', 'right', 'bottom', 'left'] as const

export const Sides: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-3">
      {SIDES.map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </TooltipTrigger>
          <TooltipContent side={side} sideOffset={4}>
            SLA due in 2h 15m
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
}
