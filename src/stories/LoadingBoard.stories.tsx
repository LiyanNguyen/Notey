import type { Meta, StoryObj } from '@storybook/react'
import { LoadingBoard } from '../components'

const meta = {
  title: 'Components/LoadingBoard',
  component: LoadingBoard,
  // tags: ['autodocs'],

} satisfies Meta<typeof LoadingBoard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {

}