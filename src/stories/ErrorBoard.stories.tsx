import type { Meta, StoryObj } from '@storybook/react'
import { ErrorBoard } from '../components'

const meta = {
  title: 'Components/ErrorBoard',
  component: ErrorBoard,
  // tags: ['autodocs'],

} satisfies Meta<typeof ErrorBoard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {

}