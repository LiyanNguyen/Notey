import type { Meta, StoryObj } from '@storybook/react'
import NoteCardContent from '../components/NoteCardContent'

const borderColorOptions = [
  'border-t-blue-400',
  'border-t-red-400',
  'border-t-yellow-400',
  'border-t-green-400',
  'border-t-slate-400'
]

const ratingColorOptions = [
  'bg-blue-400',
  'bg-red-400',
  'bg-yellow-400',
  'bg-green-400',
  'bg-slate-400',
]

const meta = {
  title: 'Components/NoteCardContent',
  component: NoteCardContent,
  // tags: ['autodocs'],

  argTypes: {
    borderColor: { control: 'inline-radio', options: borderColorOptions },
    ratingColor: { control: 'inline-radio', options: ratingColorOptions },
    rating: { control: { type: 'range', min: 1, max: 10, step: 1 } },
  }

} satisfies Meta<typeof NoteCardContent>

export default meta
type Story = StoryObj<typeof meta>

export const Blue: Story = {
  args: {
    borderColor: 'border-t-blue-400',
    ratingColor: 'bg-blue-400',
    title: 'Sample Blue Card',
    description: 'This is a sample blue card description',
    rating: 8,
    dateDisplay: '18-07-2023',
    openEditModal: () => null,
    openDeleteModal: () => null,
  }
}

