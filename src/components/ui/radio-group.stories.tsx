import type { Meta, StoryObj } from '@storybook/react-vite'

import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const meta = {
  title: 'Components/Radio Group',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="round-robin">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="manual" id="assign-manual" />
        <Label htmlFor="assign-manual">Assign manually</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="round-robin" id="assign-round-robin" />
        <Label htmlFor="assign-round-robin">Round robin</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="load-balanced" id="assign-load-balanced" />
        <Label htmlFor="assign-load-balanced">Load balanced</Label>
      </div>
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="round-robin" disabled>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="manual" id="disabled-manual" />
        <Label htmlFor="disabled-manual">Assign manually</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="round-robin" id="disabled-round-robin" />
        <Label htmlFor="disabled-round-robin">Round robin</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="load-balanced" id="disabled-load-balanced" />
        <Label htmlFor="disabled-load-balanced">Load balanced</Label>
      </div>
    </RadioGroup>
  ),
}

export const DisabledItem: Story = {
  render: () => (
    <RadioGroup defaultValue="email">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="email" id="channel-email" />
        <Label htmlFor="channel-email">Email</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="chat" id="channel-chat" />
        <Label htmlFor="channel-chat">Live chat</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="whatsapp" id="channel-whatsapp" disabled />
        <Label htmlFor="channel-whatsapp" className="opacity-50">
          WhatsApp (coming soon)
        </Label>
      </div>
    </RadioGroup>
  ),
}

const plans = [
  {
    value: 'lite',
    title: 'Lite',
    description: 'Shared inbox and basic collaboration for small teams.',
    price: '$19 / user / mo',
  },
  {
    value: 'pro',
    title: 'Pro',
    description: 'SLAs, CSAT surveys, automations and analytics.',
    price: '$49 / user / mo',
  },
  {
    value: 'elite',
    title: 'Elite',
    description: 'Custom roles, uptime SLA and a dedicated success manager.',
    price: '$79 / user / mo',
  },
]

export const Cards: Story = {
  render: () => (
    <RadioGroup defaultValue="pro" className="w-96 gap-3">
      {plans.map((plan) => (
        <Label
          key={plan.value}
          htmlFor={`plan-${plan.value}`}
          className="flex items-start gap-3 rounded-lg border p-4 hover:bg-accent/50 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5"
        >
          <RadioGroupItem value={plan.value} id={`plan-${plan.value}`} className="mt-0.5" />
          <div className="grid flex-1 gap-1 font-normal">
            <div className="flex items-center justify-between">
              <span className="font-medium">{plan.title}</span>
              <span className="text-xs text-muted-foreground">{plan.price}</span>
            </div>
            <p className="text-sm leading-snug text-muted-foreground">{plan.description}</p>
          </div>
        </Label>
      ))}
    </RadioGroup>
  ),
}
