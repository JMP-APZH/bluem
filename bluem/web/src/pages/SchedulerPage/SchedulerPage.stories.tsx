import type { Meta, StoryObj } from '@storybook/react'

import SchedulerPage from './SchedulerPage'

const meta: Meta<typeof SchedulerPage> = {
  component: SchedulerPage,
}

export default meta

type Story = StoryObj<typeof SchedulerPage>

export const Primary: Story = {}
