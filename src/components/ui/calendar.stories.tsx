import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { DateRange } from 'react-day-picker'
import { Calendar } from '@/components/ui/calendar'

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

function SingleCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 9, 16))
  return (
    <div className="flex flex-col items-center gap-3">
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-lg border" />
      <p className="text-sm text-muted-foreground">
        Snooze until: {date ? date.toLocaleDateString('en-GB', { dateStyle: 'medium' }) : 'none'}
      </p>
    </div>
  )
}

export const Default: Story = {
  render: () => <SingleCalendar />,
}

function RangeCalendar() {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(2026, 9, 5),
    to: new Date(2026, 9, 16),
  })
  const format = (d?: Date) => (d ? d.toLocaleDateString('en-GB', { dateStyle: 'medium' }) : '...')
  return (
    <div className="flex flex-col items-center gap-3">
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
        defaultMonth={new Date(2026, 8, 1)}
        className="rounded-lg border"
      />
      <p className="text-sm text-muted-foreground">
        Report period: {format(range?.from)} to {format(range?.to)}
      </p>
    </div>
  )
}

export const Range: Story = {
  render: () => <RangeCalendar />,
}

function DropdownCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 9, 16))
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      captionLayout="dropdown"
      startMonth={new Date(2020, 0)}
      endMonth={new Date(2030, 11)}
      className="rounded-lg border"
    />
  )
}

export const WithDropdowns: Story = {
  render: () => <DropdownCalendar />,
}

function DisabledDaysCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 9, 16))
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={[{ dayOfWeek: [0, 6] }, { before: new Date(2026, 9, 1) }]}
      className="rounded-lg border"
    />
  )
}

export const DisabledWeekends: Story = {
  render: () => <DisabledDaysCalendar />,
}

export const WithWeekNumbers: Story = {
  render: () => (
    <Calendar
      mode="single"
      defaultMonth={new Date(2026, 9, 1)}
      showWeekNumber
      className="rounded-lg border"
    />
  ),
}
