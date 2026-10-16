import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useState } from 'react'

import { Progress } from '@/components/ui/progress'

const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
  args: {
    value: 60,
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Empty: Story = {
  args: { value: 0 },
}

export const Complete: Story = {
  args: { value: 100 },
}

export const WithLabel: Story = {
  args: { value: 72 },
  render: (args) => (
    <div className="grid gap-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">SLA compliance this week</span>
        <span className="text-muted-foreground">{args.value}%</span>
      </div>
      <Progress {...args} />
    </div>
  ),
}

function AnimatedProgress() {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((current) => (current >= 100 ? 0 : current + 5))
    }, 400)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid gap-2">
      <p className="text-sm text-muted-foreground">
        Importing conversations... {value}%
      </p>
      <Progress value={value} />
    </div>
  )
}

export const Animated: Story = {
  render: () => <AnimatedProgress />,
}
