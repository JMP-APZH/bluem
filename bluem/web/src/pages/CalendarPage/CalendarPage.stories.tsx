import type { Meta, StoryObj } from '@storybook/react'

import CalendarPage from './CalendarPage'

const meta: Meta<typeof CalendarPage> = {
  component: CalendarPage,
}

export default meta

type Story = StoryObj<typeof CalendarPage>

export const Primary: Story = {}
