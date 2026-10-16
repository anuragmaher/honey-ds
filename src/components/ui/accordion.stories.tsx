import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    type: { control: 'select', options: ['single', 'multiple'] },
    collapsible: { control: 'boolean' },
  },
  args: {
    type: 'single',
    collapsible: true,
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible defaultValue="item-1" className="w-[420px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>How do I assign a conversation?</AccordionTrigger>
        <AccordionContent>
          Open the conversation in your shared inbox and pick a teammate from the
          assignee dropdown. They are notified instantly and the email moves to
          their Mine view.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What happens when an SLA is breached?</AccordionTrigger>
        <AccordionContent>
          The conversation is flagged in red, the inbox owner receives an alert,
          and the breach is recorded in the SLA report for the current period.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can customers see internal notes?</AccordionTrigger>
        <AccordionContent>
          No. Notes are visible only to members of the shared inbox and never
          leave Hiver.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const Multiple: Story = {
  args: { type: 'multiple' },
  render: () => (
    <Accordion type="multiple" defaultValue={['billing', 'automation']} className="w-[420px]">
      <AccordionItem value="billing">
        <AccordionTrigger>Billing</AccordionTrigger>
        <AccordionContent>
          Invoices are sent on the first of every month to the billing contact
          on the account. You can download past invoices from Settings.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="automation">
        <AccordionTrigger>Automations</AccordionTrigger>
        <AccordionContent>
          Rules run on every incoming email. Combine conditions such as subject,
          sender domain and tags to auto-assign or auto-tag conversations.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="analytics">
        <AccordionTrigger>Analytics</AccordionTrigger>
        <AccordionContent>
          Track first response time, resolution time and CSAT across every
          shared inbox in your workspace.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const WithDisabledItem: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[420px]">
      <AccordionItem value="general">
        <AccordionTrigger>General settings</AccordionTrigger>
        <AccordionContent>
          Rename the inbox, change its colour, or update the signature used for
          outbound replies.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="advanced" disabled>
        <AccordionTrigger>Advanced settings (admin only)</AccordionTrigger>
        <AccordionContent>Only workspace admins can edit these settings.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
