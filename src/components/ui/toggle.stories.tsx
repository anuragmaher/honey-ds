import type { Meta, StoryObj } from '@storybook/react-vite'
import { BoldIcon, ItalicIcon, StarIcon, UnderlineIcon } from 'lucide-react'

import { Toggle } from '@/components/ui/toggle'

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'outline'] },
    size: { control: 'inline-radio', options: ['sm', 'default', 'lg'] },
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { 'aria-label': 'Toggle bold' },
  render: (args) => (
    <Toggle {...args}>
      <BoldIcon />
    </Toggle>
  ),
}

export const Outline: Story = {
  args: { variant: 'outline', 'aria-label': 'Toggle italic' },
  render: (args) => (
    <Toggle {...args}>
      <ItalicIcon />
    </Toggle>
  ),
}

export const WithText: Story = {
  args: { variant: 'outline' },
  render: (args) => (
    <Toggle {...args}>
      <StarIcon />
      Starred
    </Toggle>
  ),
}

export const Disabled: Story = {
  args: { disabled: true, 'aria-label': 'Toggle underline' },
  render: (args) => (
    <Toggle {...args}>
      <UnderlineIcon />
    </Toggle>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle size="sm" aria-label="Small">
        <BoldIcon />
      </Toggle>
      <Toggle size="default" aria-label="Default">
        <BoldIcon />
      </Toggle>
      <Toggle size="lg" aria-label="Large">
        <BoldIcon />
      </Toggle>
    </div>
  ),
}

export const Toolbar: Story = {
  render: () => (
    <div className="flex items-center gap-1 rounded-md border p-1">
      <Toggle aria-label="Bold" defaultPressed>
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="Italic">
        <ItalicIcon />
      </Toggle>
      <Toggle aria-label="Underline">
        <UnderlineIcon />
      </Toggle>
    </div>
  ),
}
