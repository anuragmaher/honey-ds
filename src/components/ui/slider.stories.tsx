import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { className: 'w-72' },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { defaultValue: [40], max: 100, step: 1 },
}

export const Range: Story = {
  args: { defaultValue: [20, 60], max: 100, step: 5 },
}

export const Disabled: Story = {
  args: { defaultValue: [65], disabled: true },
}

function ControlledSlider() {
  const [value, setValue] = useState([4])
  return (
    <div className="grid w-72 gap-3">
      <div className="flex items-center justify-between">
        <Label htmlFor="sla-hours">First response SLA</Label>
        <span className="text-sm text-muted-foreground tabular-nums">
          {value[0]}h
        </span>
      </div>
      <Slider
        id="sla-hours"
        min={1}
        max={24}
        step={1}
        value={value}
        onValueChange={setValue}
      />
      <p className="text-xs text-muted-foreground">
        Conversations breach SLA if no agent replies within this window.
      </p>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledSlider />,
}
