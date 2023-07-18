import type { Meta, StoryObj } from '@storybook/react'
import { EmptyBoard } from '../components'

const meta = {
  title: 'Components/EmptyBoard',
  component: EmptyBoard,
  // tags: ['autodocs'],

} satisfies Meta<typeof EmptyBoard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {

}