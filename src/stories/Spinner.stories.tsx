import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '../components'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,

  // tags: ['autodocs'],

} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'h-6 w-6 border-[3px]'
  }
}